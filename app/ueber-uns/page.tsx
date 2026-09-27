import type { Metadata } from 'next'

const BASE_URL = 'https://iptv4k-kaufen.de'

export const metadata: Metadata = {
  title: 'Über uns | IPTV Anbieter Deutschland – IPTV Kaufen',
  description:
    'Erfahren Sie mehr über IPTV Kaufen, Ihren IPTV Anbieter für Deutschland. Entdecken Sie flexible IPTV-Abonnementpläne, kompatible Geräte und einfache Einrichtung.',
  alternates: {
    canonical: `${BASE_URL}/ueber-uns/`,
  },
  openGraph: {
    title: 'Über uns | IPTV Anbieter Deutschland – IPTV Kaufen',
    description:
      'Erfahren Sie mehr über IPTV Kaufen, Ihren IPTV Anbieter für Deutschland. Entdecken Sie flexible IPTV-Abonnementpläne, kompatible Geräte und einfache Einrichtung.',
    url: `${BASE_URL}/ueber-uns/`,
    type: 'website',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist IPTV?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IPTV überträgt Fernsehen und Streaming-Inhalte über das Internet. Sie benötigen eine stabile Internetverbindung und eine kompatible App oder ein kompatibles Gerät.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie funktioniert ein IPTV-Abonnement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sie wählen ein passendes Abonnement, erhalten nach dem Kauf Ihre Zugangsdaten und können diese in einer kompatiblen App eingeben, um sofort mit dem Streaming zu beginnen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Auf welchen Geräten kann ich IPTV nutzen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IPTV ist auf einer Vielzahl von Geräten nutzbar, darunter Smart TVs, Android TV, Fire TV, Smartphones, Tablets und Computer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich IPTV auf meinem Smart TV verwenden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, die meisten modernen Smart TVs (wie Samsung, LG, Android TV) unterstützen verschiedene IPTV-Apps, die Sie einfach herunterladen und einrichten können.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie richte ich IPTV ein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Einrichtung erfolgt über eine App. Sie geben dort die erhaltenen Zugangsdaten oder die M3U-URL ein. Wir bieten für viele Geräte detaillierte Anleitungen an.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie schnell erhalte ich meine Zugangsdaten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In der Regel werden die Zugangsdaten nach erfolgreicher Zahlung zeitnah per E-Mail zugestellt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich IPTV auf mehreren Geräten nutzen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Das hängt vom gewählten Abonnement ab. Viele Pläne erlauben die Nutzung auf mehreren Geräten (Multi-Verbindung). Bitte prüfen Sie die Details des jeweiligen Angebots.',
      },
    },
    {
      '@type': 'Question',
      name: 'Benötige ich eine Internetverbindung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, eine stabile Internetverbindung ist zwingend erforderlich. Für eine optimale Qualität empfehlen wir eine ausreichend hohe Bandbreite.',
      },
    },
  ],
}

export default function UeberUns() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Navigation ─────────────────────────────── */}
      <header className="nav">
        <a className="logo" href="/" aria-label="IPTV Kaufen – Startseite">
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
          <a href="/ueber-uns/">Über uns</a>
          <a href="/blog">Blog</a>
          <a href="/#plans">Abonnements</a>
          <a href="https://wa.me/212783327023?text=Hallo%2C%20ich%20habe%20eine%20Frage%20zu%20Ihren%20IPTV-Diensten." target="_blank" rel="noopener noreferrer">Kontakt</a>
        </nav>
        <a className="nav-button" href="/#plans">Jetzt abonnieren</a>
      </header>

      {/* ── Page Hero ───────────────────────────────────── */}
      <section className="hero" id="top" aria-label="Über uns – Einstieg">
        <img
          className="hero-background"
          src="/player-background.webp"
          alt="Hintergrund"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-inner" style={{ flexDirection: 'column', gap: '15px', paddingTop: '150px' }}>
          <h1 style={{ margin: 0, fontSize: '50px', color: '#111', fontWeight: 700, fontFamily: "'DM Sans', sans-serif", textShadow: '0 4px 20px rgba(255, 255, 255, 0.8)' }}>Über uns</h1>
          <p style={{ margin: 0, fontSize: '16px', color: '#444', fontWeight: 'bold' }}>
            <a href="/" style={{ color: '#d71920' }}>Startseite</a> / Über uns
          </p>
        </div>
      </section>

      {/* ── Introduction Section ───────────────────────────── */}
      <section className="why-section" aria-label="Ihr zuverlässiger IPTV Anbieter für Deutschland">
        <div className="why-inner">
          <div className="why-image">
            <img
              src="/devices-mockup.webp"
              alt="IPTV auf allen Geräten nutzen"
              loading="lazy"
              decoding="async"
              style={{ borderRadius: '8px' }}
            />
          </div>
          <div className="why-content">
            <h2 className="why-heading" style={{ fontSize: '38px' }}>Ihr zuverlässiger IPTV Anbieter für Deutschland</h2>
            <p className="why-sub" style={{ marginTop: '20px' }}>
              Willkommen bei IPTV Kaufen. Wir bieten IPTV-Lösungen für Kunden in Deutschland, die Fernsehen und digitale Unterhaltung flexibel auf kompatiblen Geräten nutzen möchten.
            </p>
            <p className="why-sub">
              Entdecken Sie eine vielfältige Auswahl an Sendern, Filmen und Serien, abgestimmt auf Ihre Bedürfnisse, ohne komplizierte Einrichtung.
            </p>
            <ul className="why-list">
              <li>
                <svg className="why-check" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="10" fill="#d71920" />
                  <polyline points="5,10 8.5,13.5 15,7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Flexible IPTV-Abonnementpläne</span>
              </li>
              <li>
                <svg className="why-check" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="10" fill="#d71920" />
                  <polyline points="5,10 8.5,13.5 15,7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>HD- und 4K-Streaming je nach verfügbaren Inhalten</span>
              </li>
              <li>
                <svg className="why-check" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="10" fill="#d71920" />
                  <polyline points="5,10 8.5,13.5 15,7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Kompatibel mit verschiedenen Geräten</span>
              </li>
              <li>
                <svg className="why-check" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="10" fill="#d71920" />
                  <polyline points="5,10 8.5,13.5 15,7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Einfache Einrichtung</span>
              </li>
              <li>
                <svg className="why-check" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="10" fill="#d71920" />
                  <polyline points="5,10 8.5,13.5 15,7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Deutschsprachige Informationen und Unterstützung</span>
              </li>
              <li>
                <svg className="why-check" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="10" fill="#d71920" />
                  <polyline points="5,10 8.5,13.5 15,7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Transparente Informationen zu unseren Angeboten</span>
              </li>
            </ul>
            <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
              <a className="button" href="/#plans">IPTV Angebote entdecken</a>
              <a className="button" href="https://wa.me/212783327023?text=Hallo%2C%20ich%20habe%20eine%20Frage%20zu%20Ihren%20IPTV-Diensten." target="_blank" rel="noopener noreferrer" style={{ background: '#333' }}>Kontakt aufnehmen</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Features / Statistics ───────────────────────────── */}
      <section className="dark-section" style={{ background: '#f4f6fa', padding: '60px 9%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontSize: '24px', color: '#d71920', margin: '0 0 10px', fontWeight: 'bold' }}>HD & 4K</h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Bildqualität</p>
          </div>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontSize: '24px', color: '#d71920', margin: '0 0 10px', fontWeight: 'bold' }}>Multi-Geräte</h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Flexible Nutzung</p>
          </div>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontSize: '24px', color: '#d71920', margin: '0 0 10px', fontWeight: 'bold' }}>24/7</h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Online verfügbar</p>
          </div>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontSize: '24px', color: '#d71920', margin: '0 0 10px', fontWeight: 'bold' }}>Einfache Einrichtung</h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Schneller Start</p>
          </div>
        </div>
      </section>

      {/* ── Large Premium Banner ───────────────────────────── */}
      <section style={{ position: 'relative', padding: '100px 9%', textAlign: 'center', color: '#fff', overflow: 'hidden', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src="/player-background.webp"
          alt="Entertainment Background"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: -2 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: -1 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 'bold', margin: '0 0 20px', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase' }}>IPTV Deutschland – Fernsehen neu erleben</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', margin: '0 0 30px', color: '#eee' }}>
            Entdecken Sie flexible IPTV-Abonnementpläne für Deutschland und nutzen Sie Ihren Dienst auf kompatiblen Geräten.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <a className="button" href="/#plans">IPTV Angebote ansehen</a>
            <a className="button" href="https://wa.me/212783327023" target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,255,255,0.2)' }}>Kontakt</a>
          </div>
        </div>
      </section>

      {/* ── Warum Uns? ───────────────────────────── */}
      <section className="why-section" aria-label="Warum unseren IPTV Service wählen?">
        <div className="why-inner" style={{ flexDirection: 'row-reverse' }}>
          <div className="why-image">
            <img
              src="/devices-mockup.webp"
              alt="Smart TV und IPTV Nutzung"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="why-content">
            <h2 className="why-heading" style={{ fontSize: '38px' }}>Warum unseren IPTV Service wählen?</h2>
            <p className="why-sub" style={{ marginTop: '20px', marginBottom: '30px' }}>
              Unser Ziel ist es, eine einfache und flexible Möglichkeit zu bieten, IPTV auf kompatiblen Geräten zu nutzen. Dabei legen wir Wert auf eine übersichtliche Benutzererfahrung, transparente Informationen und eine einfache Einrichtung.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#d71920', margin: '0 0 5px' }}>Flexible Abonnements</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: '1.6' }}>Verschiedene Laufzeiten und Optionen entsprechend den verfügbaren Angeboten.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#d71920', margin: '0 0 5px' }}>Einfache Einrichtung</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: '1.6' }}>Klare Anleitungen helfen bei der Einrichtung auf kompatiblen Geräten.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#d71920', margin: '0 0 5px' }}>Multi-Geräte-Kompatibilität</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: '1.6' }}>Nutzung auf unterstützten Smart TVs, Streaming-Geräten, Smartphones, Tablets und Computern.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#d71920', margin: '0 0 5px' }}>Support & Hilfe</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: '1.6' }}>Informationen und Unterstützung bei Fragen zur Einrichtung und Nutzung.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────── */}
      <section className="faq" id="faqs" aria-label="Häufig gestellte Fragen">
        <div className="faq-inner">
          <div className="faq-header">
            <h3>Häufig gestellte Fragen</h3>
            <p>Die wichtigsten Antworten rund um unseren Service.</p>
          </div>
          <div className="faq-list">
            <details>
              <summary>Was ist IPTV?</summary>
              <p>IPTV überträgt Fernsehen und Streaming-Inhalte über das Internet. Sie benötigen eine stabile Internetverbindung und eine kompatible App oder ein kompatibles Gerät.</p>
            </details>
            <details>
              <summary>Wie funktioniert ein IPTV-Abonnement?</summary>
              <p>Sie wählen ein passendes Abonnement, erhalten nach dem Kauf Ihre Zugangsdaten und können diese in einer kompatiblen App eingeben, um sofort mit dem Streaming zu beginnen.</p>
            </details>
            <details>
              <summary>Auf welchen Geräten kann ich IPTV nutzen?</summary>
              <p>IPTV ist auf einer Vielzahl von Geräten nutzbar, darunter Smart TVs, Android TV, Fire TV, Smartphones, Tablets und Computer.</p>
            </details>
            <details>
              <summary>Kann ich IPTV auf meinem Smart TV verwenden?</summary>
              <p>Ja, die meisten modernen Smart TVs (wie Samsung, LG, Android TV) unterstützen verschiedene IPTV-Apps, die Sie einfach herunterladen und einrichten können.</p>
            </details>
            <details>
              <summary>Wie richte ich IPTV ein?</summary>
              <p>Die Einrichtung erfolgt über eine App. Sie geben dort die erhaltenen Zugangsdaten oder die M3U-URL ein. Wir bieten für viele Geräte detaillierte Anleitungen an.</p>
            </details>
            <details>
              <summary>Wie schnell erhalte ich meine Zugangsdaten?</summary>
              <p>In der Regel werden die Zugangsdaten nach erfolgreicher Zahlung zeitnah per E-Mail zugestellt.</p>
            </details>
            <details>
              <summary>Kann ich IPTV auf mehreren Geräten nutzen?</summary>
              <p>Das hängt vom gewählten Abonnement ab. Viele Pläne erlauben die Nutzung auf mehreren Geräten (Multi-Verbindung). Bitte prüfen Sie die Details des jeweiligen Angebots.</p>
            </details>
            <details>
              <summary>Benötige ich eine Internetverbindung?</summary>
              <p>Ja, eine stabile Internetverbindung ist zwingend erforderlich. Für eine optimale Qualität empfehlen wir eine ausreichend hohe Bandbreite.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ── Installation / Devices ───────────────────────────── */}
      <section className="light-section" style={{ background: '#fff' }}>
        <h2 className="title-pill">INSTALLATION</h2>
        <h3 style={{ fontSize: '32px', margin: '15px 0', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase' }}>IPTV auf Ihrem Gerät einrichten</h3>
        <p style={{ color: '#666', fontSize: '14px', maxWidth: '600px', margin: '0 auto 40px' }}>Wir bieten klare Anleitungen für die Einrichtung auf verschiedenen kompatiblen Geräten.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto 40px' }}>
          {['Smart TV', 'Android TV', 'Fire TV', 'Android Smartphone', 'iPhone / iPad', 'PC / Mac'].map(device => (
            <div key={device} style={{ background: '#f9f9f9', padding: '25px 15px', borderRadius: '12px', border: '1px solid #eee' }}>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#111' }}>{device}</div>
            </div>
          ))}
        </div>
        
        <a className="button" href="/#plans">IPTV Anleitungen ansehen</a>
      </section>

      {/* ── Compatibility Section ───────────────────────────── */}
      <section className="dark-section" style={{ background: '#f4f6fa' }}>
        <h2 style={{ fontSize: '32px', margin: '0 0 40px', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', textAlign: 'center' }}>IPTV flexibel auf verschiedenen Geräten nutzen</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
          {['Smart TV', 'Android TV', 'Fire TV', 'Smartphone', 'Tablet', 'PC / Mac'].map(device => (
            <div key={device} style={{ background: '#fff', padding: '15px 30px', borderRadius: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', fontSize: '14px', fontWeight: 'bold', color: '#d71920' }}>
              {device}
            </div>
          ))}
        </div>
      </section>

      {/* ── Detailed About Section ───────────────────────────── */}
      <section style={{ padding: '80px 9%', background: '#fff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', margin: '0 0 30px', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', color: '#111' }}>Ihr IPTV Anbieter für Deutschland</h2>
          
          <div style={{ color: '#444', fontSize: '15px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <p>
              Als zuverlässiger IPTV Anbieter für den deutschen Markt konzentrieren wir uns darauf, Ihnen ein modernes, internetbasiertes Fernseherlebnis zu bieten. Wir wissen, dass Flexibilität und eine große Auswahl an Inhalten heute wichtiger sind denn je.
            </p>
            <p>
              Unsere flexibilen Abonnementoptionen sind darauf ausgelegt, Ihnen die Freiheit zu geben, genau das zu wählen, was zu Ihren Sehgewohnheiten passt. Egal ob auf dem großen Smart TV im Wohnzimmer oder mobil auf dem Smartphone – unsere Dienste sind auf eine breite Palette von Geräten optimiert.
            </p>
            <p>
              Besonderen Wert legen wir auf eine benutzerfreundliche Erfahrung. Von transparenten Informationen über unsere Abonnements bis hin zu klaren, verständlichen Setup-Anleitungen für alle gängigen Plattformen möchten wir den Einstieg so einfach wie möglich gestalten. Unser Support-Team steht Ihnen bei Fragen jederzeit zur Verfügung, um Ihnen das bestmögliche Erlebnis zu garantieren.
            </p>
          </div>
        </div>
      </section>

      {/* ── Transparenz ───────────────────────────── */}
      <section style={{ padding: '60px 9%', background: '#f9f9f9', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', margin: '0 0 20px', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', color: '#111' }}>Transparenz und klare Informationen</h2>
          
          <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.7', marginBottom: '25px' }}>
            Uns ist wichtig, dass Sie jederzeit genau wissen, was Sie buchen. Daher kommunizieren wir Vertragslaufzeiten, Preise, inkludierte Services und unterstützte Geräte offen und transparent. Der Prozess von der Aktivierung bis zur Bereitstellung der Zugangsdaten ist klar strukturiert.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            <a href="/#top" style={{ color: '#d71920', fontWeight: 'bold', fontSize: '14px', textDecoration: 'underline' }}>Impressum</a>
            <a href="/#top" style={{ color: '#d71920', fontWeight: 'bold', fontSize: '14px', textDecoration: 'underline' }}>Datenschutz</a>
            <a href="/#top" style={{ color: '#d71920', fontWeight: 'bold', fontSize: '14px', textDecoration: 'underline' }}>AGB</a>
            <a href="/#top" style={{ color: '#d71920', fontWeight: 'bold', fontSize: '14px', textDecoration: 'underline' }}>Widerrufsbelehrung</a>
            <a href="https://wa.me/212783327023" target="_blank" rel="noopener noreferrer" style={{ color: '#d71920', fontWeight: 'bold', fontSize: '14px', textDecoration: 'underline' }}>Kontakt</a>
          </div>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────── */}
      <section className="cta" style={{ background: '#fff', padding: '80px 20px', borderTop: 'none' }}>
        <h2 style={{ fontSize: '32px', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', margin: '0 0 15px' }}>Bereit für flexibles IPTV in Deutschland?</h2>
        <p style={{ color: '#666', fontSize: '15px', margin: '0 0 30px' }}>
          Entdecken Sie unsere IPTV-Abonnementpläne und erfahren Sie mehr über die verfügbaren Optionen.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <a className="button" href="/#plans">IPTV kaufen</a>
          <a className="button" href="https://wa.me/212783327023" target="_blank" rel="noopener noreferrer" style={{ background: '#f4f6fa', color: '#111' }}>Kontakt</a>
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
            alt="Akzeptierte Zahlungsmethoden"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div>
          <b>Unternehmen</b>
          <a href="/ueber-uns/">Über uns</a>
          <a href="/#plans">Abonnements</a>
        </div>
        <div>
          <b>Hilfe</b>
          <a href="/#faqs">FAQ</a>
          <a href="https://wa.me/212783327023?text=Hallo%2C%20ich%20habe%20eine%20Frage%20zu%20Ihren%20IPTV-Diensten." target="_blank" rel="noopener noreferrer">Kontakt</a>
        </div>
        <div>
          <b>Rechtliches</b>
          <a href="/#top">Impressum</a>
          <a href="/#top">Datenschutz</a>
        </div>
      </footer>
    </main>
  )
}
