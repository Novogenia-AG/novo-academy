import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import './styles.css'
import './nd-redesign.css'
import './np-blau.css'  // TEST: NOVO PILOT Blau-Design, Varianten v1–v3

/* TEST-Umschalter für die Blau-Varianten: ?np=v1|v2|v3|aus, gemerkt im localStorage. */
{
  const VARS = [['aus', 'Live', ''], ['v1', 'V1', ' Navy-Nacht'], ['v2', 'V2', ' Navy-Kopf'], ['v3', 'V3', ' Hell']]
  const q = new URLSearchParams(location.search).get('np')
  let v = q || (() => { try { return localStorage.getItem('np_variant') } catch { return null } })() || 'v1'
  const apply = (nv) => {
    v = nv
    try { localStorage.setItem('np_variant', v) } catch {}
    if (v === 'aus') delete document.documentElement.dataset.np
    else document.documentElement.dataset.np = v
    document.querySelectorAll('.np-switch button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.v === v)))
  }
  const bar = document.createElement('div')
  bar.className = 'np-switch'
  bar.innerHTML = '<span>Design</span>' + VARS.map(([k, l, d]) => '<button type="button" data-v="' + k + '">' + l + '<i>' + d + '</i></button>').join('')
  bar.addEventListener('click', e => { const b = e.target.closest('button'); if (b) apply(b.dataset.v) })
  document.body.appendChild(bar)
  apply(v)
}

/* Clickjacking-Schutz. X-Frame-Options und CSP frame-ancestors sind als <meta>
   wirkungslos — beides verlangt einen echten HTTP-Header, den GitHub Pages
   nicht setzen kann. Ein Inline-Skript in index.html scheidet ebenfalls aus,
   weil die CSP nur `script-src 'self' blob:` erlaubt. Deshalb hier, im
   gebuendelten Modul: Wird die Seite fremd eingebettet, brechen wir aus dem
   Rahmen aus. Bei Wechsel auf einen Host mit eigenen Headern (Cloudflare
   Pages, Netlify) dort `frame-ancestors 'self'` setzen und dies entfernen. */
try {
  if (window.top !== window.self) window.top.location = window.self.location.href
} catch {
  // Cross-Origin-Zugriff verweigert = wir stecken in einem fremden Rahmen
  document.documentElement.style.display = 'none'
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
