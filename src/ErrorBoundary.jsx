import React from 'react'

/**
 * Top-level safety net. Catches any uncaught render error anywhere in the app
 * and shows a friendly, bilingual fallback instead of a blank white screen.
 * Never interferes with normal rendering — only activates on a thrown error.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    try {
      // eslint-disable-next-line no-console
      console.error('[NOVO ACADEMY] Render-Fehler abgefangen / caught render error:', error, info)
    } catch (_) { /* noop */ }
  }

  handleReset = () => {
    try {
      const base = (import.meta.env && import.meta.env.BASE_URL) || '/'
      window.location.href = base
    } catch (_) {
      window.location.reload()
    }
  }

  render() {
    if (!this.state.hasError) return this.props.children
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#f5f7fb', color: '#1b2233', fontFamily: 'system-ui, -apple-system, Segoe UI, sans-serif',
        padding: '24px', textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '440px', background: '#fff', borderRadius: '16px', padding: '36px 28px',
          boxShadow: '0 10px 40px rgba(20,30,60,0.12)',
        }}>
          <div style={{ fontSize: '42px', marginBottom: '12px' }} aria-hidden="true">⚠️</div>
          <h1 style={{ fontSize: '20px', margin: '0 0 10px' }}>Es ist ein Fehler aufgetreten</h1>
          <p style={{ opacity: 0.85, fontSize: '14px', lineHeight: 1.55, margin: '0 0 6px' }}>
            Etwas ist schiefgelaufen — dein Fortschritt ist sicher gespeichert.
          </p>
          <p style={{ opacity: 0.6, fontSize: '13px', lineHeight: 1.5, margin: '0 0 22px' }}>
            Something went wrong — your progress is safely stored.
          </p>
          <button onClick={this.handleReset} style={{
            background: '#2f6df6', color: '#fff', border: 'none', borderRadius: '10px',
            padding: '12px 24px', fontSize: '15px', fontWeight: 600, cursor: 'pointer',
          }}>
            Zur Startseite · Back to start
          </button>
        </div>
      </div>
    )
  }
}
