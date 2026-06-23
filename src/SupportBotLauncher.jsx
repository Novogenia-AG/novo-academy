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
  const label = lang === 'en' ? 'Chat with us' : 'Frag uns!'

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
    if (!win) { window.open(CHAT_URL, '_blank'); return } // popup blocked -> new tab
    winRef.current = win
    try { win.focus() } catch (_) { /* noop */ }
  }

  return (
    <div className="ndc-launcher">
      <span className="ndc-label">{label}</span>
      <button type="button" className="ndc-fab" aria-label={label} onClick={openChat}>
        <svg className="ndc-ic-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      </button>
    </div>
  )
}
