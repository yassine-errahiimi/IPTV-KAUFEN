import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IPTV Blog – Tipps, Apps, Geräte & Streaming',
  description:
    'Der IPTV Kaufen Blog: Tipps zu IPTV-Apps, Einrichtung auf Smart TV, Android und Fire TV, Senderlisten und mehr. Demnächst verfügbar.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://iptv-kaufen.de/blog',
  },
  openGraph: {
    title: 'IPTV Blog – Tipps, Apps, Geräte & Streaming | IPTV Kaufen',
    description:
      'Der IPTV Kaufen Blog mit Tipps zu IPTV-Apps, Einrichtung auf Smart TV, Android und Fire TV. Demnächst verfügbar.',
    url: 'https://iptv-kaufen.de/blog',
    type: 'website',
  },
}

export default function BlogPage() {
  return (
    <main>
      {/* ── Navigation ─────────────────────────────── */}
      <header className="nav">
        <a className="logo" href="/" aria-label="IPTV Kaufen – Zur Startseite">
          <img
            className="logo-image"
            src="/logo.webp"
            alt="IPTV Kaufen Logo"
            fetchPriority="high"
            decoding="async"
            width={132}
            height={40}
          />
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="/">Startseite</a>
          <a href="/blog" aria-current="page">Blog</a>
          <a href="/#plans">Abonnements</a>
          <a href="/#contact">Kontakt</a>
        </nav>
        <a className="nav-button" href="/#plans">Jetzt abonnieren</a>
      </header>

      {/* ── Blog Coming Soon ────────────────────────── */}
      <section
        className="light-section"
        style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        aria-label="Blog – Demnächst verfügbar"
      >
        <div style={{ textAlign: 'center' }}>
          <h1 className="title-pill">IPTV BLOG</h1>
          <h2>Demnächst verfügbar</h2>
          <p style={{ marginTop: '16px', color: '#666', fontSize: '15px' }}>
            Hier entstehen bald Tipps zu IPTV-Apps, Einrichtungsanleitungen und mehr.{' '}
            <a href="/" style={{ color: '#d71920', fontWeight: 600 }}>Zurück zur Startseite</a>
          </p>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────── */}
      <footer>
        <div className="logo">
          <img
            className="logo-image"
            src="/logo.webp"
            alt="IPTV Kaufen Logo"
            loading="lazy"
            decoding="async"
            width={132}
            height={40}
          />
        </div>
        <div className="payment-methods">
          <img
            className="payment-image"
            src="/payment.webp"
            alt="Akzeptierte Zahlungsmethoden – Kreditkarte, PayPal und weitere"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div>
          <b>Unternehmen</b>
          <a href="/">Startseite</a>
          <a href="/#plans">Abonnements</a>
        </div>
        <div>
          <b>Hilfe</b>
          <a href="/#faqs">FAQ</a>
          <a href="/#contact">Kontakt</a>
        </div>
        <div>
          <b>Rechtliches</b>
          <a href="/">Impressum</a>
          <a href="/">Datenschutz</a>
        </div>
      </footer>
    </main>
  )
}
