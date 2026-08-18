import React, { useRef } from 'react'

/**
 * Floating Novogenia support-bot launcher (bottom-right speech bubble) —
 * ported 1:1 from novogenia.com (nd-nav.js). Opens the hosted support bot in
 * its OWN first-party window (NOT an iframe): the bot blocks guest sending
 * inside a cross-origin iframe, so a real popup window is required. A named
 * window ('novogeniaSupport') lets a second click re-focus the same window
 * instead of spawning duplicates; falls back to a new tab if popups are blocked.
 */
const CHAT_URL = 'https://novogenia-support-bot.live.chatbot.twoxten.at/chat'

export default function SupportBotLauncher({ lang = 'de' }) {
  const winRef = useRef(null)
  const label = {
    de: 'Frag uns!',      en: 'Chat with us',   cz: 'Zeptej se nás!',
    fr: 'Écris-nous !',   pt: 'Fala connosco!', it: 'Scrivici!',
    nl: 'Vraag het ons!', ro: 'Întreabă-ne!',   es: '¡Pregúntanos!',
    sr: 'Pitaj nas!',     ar: 'اسألنا!',
  }[lang] || 'Chat with us'

  const openChat = () => {
    // Re-focus an already-open chat window instead of opening a new one.
    try { if (winRef.current && !winRef.current.closed) { winRef.current.focus(); return } } catch (_) { /* cross-origin */ }
    const w = 420, h = 680
    const sw = (window.screen && window.screen.availWidth) || 1280
    const sh = (window.screen && window.screen.availHeight) || 800
    const left = Math.max(0, sw - w - 24)
    const top = Math.max(0, sh - h - 70)
    const features = `width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes`
    let win = null
    try { win = window.open(CHAT_URL, 'novogeniaSupport', features) } catch (_) { /* noop */ }
    if (!win) {
      // Popup blockiert -> neuer Tab. noopener kappt window.opener (Tabnabbing).
      window.open(CHAT_URL, '_blank', 'noopener,noreferrer')
      return
    }
    // Referenz auf uns kappen, das Handle bleibt zum Fokussieren nutzbar.
    try { win.opener = null } catch (_) { /* cross-origin */ }
    winRef.current = win
    try { win.focus() } catch (_) { /* noop */ }
  }

  /* KI-Hinweis nach Art. 50 Abs. 1 KI-VO: Nutzer müssen erkennen können, dass
     sie mit einem KI-System sprechen — und zwar bevor sie es tun, nicht erst
     in den AGB. "Frag uns!" allein lässt das nicht erkennen. */
  const aiHinweis = {
    de: 'Sie chatten mit einem KI-Assistenten.',   en: 'You are chatting with an AI assistant.',
    cz: 'Chatujete s AI asistentem.',              it: 'Stai chattando con un assistente IA.',
    fr: 'Tu discutes avec un assistant IA.',       pt: 'Estás a conversar com um assistente de IA.',
    nl: 'Je chat met een AI-assistent.',           ro: 'Discuți cu un asistent IA.',
    es: 'Estás chateando con un asistente de IA.', sr: 'Razgovaraš sa VI asistentom.',
    ar: 'أنت تتحدث مع مساعد يعمل بالذكاء الاصطناعي.',
  }[lang] || 'You are chatting with an AI assistant.'

  return (
    <div className="ndc-launcher">
      <span className="ndc-label">
        {label}
        <span className="ndc-ai-hint">{aiHinweis}</span>
      </span>
      <button type="button" className="ndc-fab" aria-label={`${label} — ${aiHinweis}`} onClick={openChat}>
        <svg className="ndc-ic-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      </button>
    </div>
  )
}
