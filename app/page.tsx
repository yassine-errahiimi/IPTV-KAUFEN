import type { Metadata } from 'next'

const BASE_URL = 'https://iptv-kaufen.de'

export const metadata: Metadata = {
  title: 'IPTV kaufen bei einem zuverlässigen IPTV Anbieter – Flexible IPTV-Abonnementpläne für Deutschland',
  description:
    'IPTV kaufen in Deutschland: Live-TV, internationale Sender, Filme und Serien. Flexible Abonnementpläne für Smart TV, Android, Fire TV, Apple TV und mehr.',
  alternates: {
    canonical: `${BASE_URL}/`,
  },
  openGraph: {
    title: 'IPTV kaufen bei einem zuverlässigen IPTV Anbieter – Flexible IPTV-Abonnementpläne für Deutschland | IPTV Kaufen',
    description:
      'IPTV kaufen in Deutschland: Live-TV, internationale Sender, Filme und Serien. Flexible Abonnementpläne für Smart TV, Android, Fire TV und mehr.',
    url: `${BASE_URL}/`,
    type: 'website',
  },
  twitter: {
    title: 'IPTV kaufen bei einem zuverlässigen IPTV Anbieter – Flexible IPTV-Abonnementpläne für Deutschland | IPTV Kaufen',
    description:
      'IPTV kaufen in Deutschland: Live-TV, internationale Sender, Filme und Serien. Flexible Abonnementpläne für Smart TV, Android, Fire TV und mehr.',
  },
}

const posterRows = [
  {
    title: 'TOP STREAMING-PLATTFORMEN',
    items: [
      ['Hulu', '/hulu.webp'],
      ['HBO Max', '/hbo-max.webp'],
      ['Netflix', '/netflix.webp'],
      ['Amazon Prime Video', '/prime-video.webp'],
      ['Disney+', '/disney-plus.webp'],
    ],
  },
  {
    title: 'FILME & SERIEN',
    items: [
      ['Leben – Deutsches Drama', '/images.webp'],
      ['Fabian', '/sir1.webp'],
      ['Stockwerk', '/sir2.webp'],
      ['Woodwalkers – Kinofilm', '/Woodwalkers-Poster-Main-Germany-Woodwalkers-Hauptposter-German-DIN-A3-sRGB-jpg.webp'],
      ['Film', '/113260.webp'],
    ],
  },
  {
    title: 'SPORT LIVE',
    items: [
      ['Europa League Live-Stream', '/ChatGPT Image 13 sept. 2026, 16_48_23.webp'],
      ['AZ Alkmaar – Fußball', '/AZZ.webp'],
      ['Premier League Live', '/erop.webp'],
      ['LaLiga Live-Stream', '/laliga.webp'],
      ['NBA Live', '/nba.webp'],
    ],
  },
]

const plans = [
  {
    name: '1 Jahr',
    badge: 'VIP',
    savings: 'Sie sparen €60',
    price: '€50',
    period: '12 Monate',
    features: ['+18.000 TV-Kanäle', '+45.000 Filme', '+15.000 Serien und TV-Shows', '4K / Ultra HD / HD Bildqualität', '24/7 technische Unterstützung', '99,9 % Verfügbarkeitsgarantie', 'Anpassung des IPTV-Pakets', 'VPN-Schutz inklusive', 'EPG & Catch-up'],
  },
  {
    name: '6 Monate',
    badge: '',
    savings: 'Sie sparen €19',
    price: '€39,99',
    period: '6 Monate',
    features: ['+18.000 TV-Kanäle', '+45.000 Filme', '+15.000 Serien und TV-Shows', '4K / Ultra HD / HD Bildqualität', '24/7 technische Unterstützung', '99,9 % Verfügbarkeitsgarantie', 'Anpassung des IPTV-Pakets', 'VPN-Schutz inklusive', 'EPG & Catch-up'],
  },
  {
    name: '3 Monate',
    badge: '',
    savings: 'Sie sparen €13',
    price: '€19,99',
    period: '3 Monate',
    features: ['+18.000 TV-Kanäle', '+45.000 Filme', '+15.000 Serien und TV-Shows', '4K / Ultra HD / HD Bildqualität', '24/7 technische Unterstützung', '99,9 % Verfügbarkeitsgarantie', 'Anpassung des IPTV-Pakets', 'VPN-Schutz inklusive', 'EPG & Catch-up'],
  },
]

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
      name: 'Auf welchen Geräten kann ich IPTV nutzen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sie können IPTV auf Smart TVs, Android-Geräten, Fire TV, Apple TV, Smartphones, Tablets, Computern und vielen weiteren Geräten nutzen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie schnell muss meine Internetverbindung sein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Für HD-Streams empfehlen wir mindestens 10 Mbit/s. Für 4K-Inhalte ist eine stabilere Verbindung mit höherer Geschwindigkeit empfehlenswert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich mein Abonnement auf mehreren Geräten nutzen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Die Anzahl der gleichzeitigen Verbindungen hängt von Ihrem gewählten Abonnement ab. Alle verfügbaren Optionen finden Sie im Bereich „Abonnements".',
      },
    },
    {
      '@type': 'Question',
      name: 'Wann erhalte ich meine Zugangsdaten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nach Abschluss Ihrer Bestellung erhalten Sie die Zugangsdaten und die Einrichtungsanleitung per E-Mail.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was hilft bei Buffering oder Verbindungsproblemen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prüfen Sie zuerst Ihre Internetverbindung, starten Sie Router und Gerät neu und testen Sie anschließend einen anderen Server oder eine niedrigere Videoqualität.',
      },
    },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/#webpage`,
  url: `${BASE_URL}/`,
  name: 'IPTV Anbieter Deutschland – Live-TV, Sender & Streaming | IPTV Kaufen',
  description:
    'IPTV kaufen in Deutschland: Live-TV, internationale Sender, Filme und Serien. Flexible Abonnementpläne für Smart TV, Android, Fire TV und mehr.',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  inLanguage: 'de-DE',
  publisher: { '@id': `${BASE_URL}/#organization` },
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="section-title">{children}</h2>
}

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* ── Navigation ─────────────────────────────── */}
      <header className="nav">
        <a className="logo" href="#top" aria-label="IPTV Kaufen – Startseite">
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
          <a href="/blog">Blog</a>
          <a href="/#plans">Abonnements</a>
          <a href="https://wa.me/212783327023?text=Hallo%2C%20ich%20habe%20eine%20Frage%20zu%20Ihren%20IPTV-Diensten." target="_blank" rel="noopener noreferrer">Kontakt</a>
        </nav>
        <a className="nav-button" href="#plans">Jetzt abonnieren</a>
      </header>

      {/* ── Hero ───────────────────────────────────── */}
      <section className="hero" id="top" aria-label="IPTV Kaufen – Einstieg">
        <img
          className="hero-background"
          src="/player-background.webp"
          alt="Fußballspieler in bunten Trikots beim Spiel"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>
              <span className="text-highlight">IPTV kaufen</span> bei einem zuverlässigen IPTV Anbieter – Flexible IPTV-Abonnementpläne für{' '}
              <span className="text-highlight">Deutschland</span>
            </h1>
            <a className="button" href="#plans">IPTV kaufen</a>
          </div>
          <div className="hero-side" aria-hidden="true" />
        </div>
      </section>

      {/* ── Streaming Platforms ─────────────────────── */}
      <section className="dark-section" id="programs" aria-label="Streaming-Plattformen und Inhalte">
        <div className="intro">
          <h2 className="title-pill">BESTE STREAMING-PLATTFORMEN</h2>
        </div>
        {posterRows.map((row) => (
          <div className="poster-group" key={row.title}>
            {row.title !== 'TOP STREAMING-PLATTFORMEN' && (
              <div style={{ textAlign: 'center' }}>
                <h3 className="title-pill">{row.title}</h3>
              </div>
            )}
            <div className="posters">
              {row.items.map(([name, image]) => (
                <a className="poster" href="#plans" key={name} aria-label={`${name} – IPTV Abonnement wählen`}>
                  <img src={image} alt={name} loading="lazy" decoding="async" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── How It Works ───────────────────────────── */}
      <section className="light-section" aria-label="So funktioniert IPTV Kaufen">
        <h2 className="title-pill">IPTV KAUFEN APP</h2>
        <SectionTitle>In drei Schritten zu Ihrem IPTV-Erlebnis</SectionTitle>
        <div className="steps">
          <article className="step">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <h3>Abonnement wählen</h3>
            <p>Wählen Sie das passende IPTV-Paket – ob Monatstarif, Halbjahrespaket oder Jahresabonnement. Für Filmfans, Sportbegeisterte und Serienjunkies.</p>
          </article>
          <article className="step">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 7h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2z" />
              <polyline points="22,7 12,14 2,7" /><path d="M12 7V2" /><polyline points="9,5 12,2 15,5" />
            </svg>
            <h3>Zugangsdaten per E-Mail erhalten</h3>
            <p>Nach Ihrer Bestellung erhalten Sie umgehend Ihre Zugangsdaten und eine Einrichtungsanleitung per E-Mail. Direkt loslegen – ohne Wartezeit.</p>
          </article>
          <article className="step">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <polygon points="10,8 15,10 10,12" /><path d="M8 21h8" /><path d="M12 17v4" />
            </svg>
            <h3>Streamen und genießen</h3>
            <p>Installieren Sie die IPTV-App auf Ihrem Gerät, melden Sie sich an und genießen Sie tausende Sender, Filme und Serien – wann und wo Sie möchten.</p>
          </article>
        </div>
      </section>

      {/* ── Pricing Plans ──────────────────────────── */}
      <section className="plans" id="plans" aria-label="IPTV Abonnementpläne und Preise">
        <h2 className="title-pill">IPTV ABO WÄHLEN</h2>
        <SectionTitle>Ihr IPTV-Abonnement</SectionTitle>
        <div className="plan-grid">
          {plans.map((plan) => (
            <article
              className={`plan ${plan.badge === 'VIP' ? 'featured' : ''}`}
              key={plan.name}
              aria-label={`${plan.name} IPTV-Plan – ${plan.price}`}
            >
              <span>
                {plan.name} {plan.badge && <b>{plan.badge}</b>}
              </span>
              <p className="savings">{plan.savings}</p>
              <strong>{plan.price}</strong>
              <small>{plan.period}</small>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                className="button"
                href={`https://wa.me/212783327023?text=${encodeURIComponent(`Hallo, ich möchte das IPTV-Abonnement "${plan.name}" (${plan.price}) kaufen. Bitte kontaktieren Sie mich.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${plan.name} per WhatsApp kaufen`}
              >
                Jetzt kaufen
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ── Why IPTV ───────────────────────────────── */}
      <section className="why-section" id="why" aria-label="Warum IPTV Kaufen wählen">
        <div className="why-inner">
          <div className="why-content">
            <h2 className="title-pill">IPTV KAUFEN</h2>
            <h3 className="why-heading">Warum IPTV kaufen?</h3>
            <p className="why-sub">
              Wir bieten Ihnen ein umfangreiches Angebot an Sendern, Filmen und Serien – angepasst an Ihre Interessen.
            </p>
            <ul className="why-list">
              <li>
                <svg className="why-check" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="10" fill="#d71920" />
                  <polyline points="5,10 8.5,13.5 15,7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Kundenservice 24/7 per E-Mail und WhatsApp</span>
              </li>
              <li>
                <svg className="why-check" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="10" fill="#d71920" />
                  <polyline points="5,10 8.5,13.5 15,7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Multi-Verbindung: 2 bis 5 Geräte gleichzeitig nutzbar</span>
              </li>
              <li>
                <svg className="why-check" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="10" fill="#d71920" />
                  <polyline points="5,10 8.5,13.5 15,7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Stabiler IPTV-Service ohne Pufferung und Einfrieren <em>(stabiles Internet erforderlich)</em></span>
              </li>
              <li>
                <svg className="why-check" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="10" fill="#d71920" />
                  <polyline points="5,10 8.5,13.5 15,7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Kundendienst bis zur vollständigen Zufriedenheit</span>
              </li>
              <li>
                <svg className="why-check" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="10" fill="#d71920" />
                  <polyline points="5,10 8.5,13.5 15,7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Regelmäßige Sonderangebote für Bestandskunden</span>
              </li>
            </ul>
            <div className="why-stats" aria-label="IPTV Kennzahlen">
              <div className="why-stat">
                <strong>4K</strong>
                <span>Ultra HD Qualität</span>
              </div>
              <div className="why-stat-divider" aria-hidden="true" />
              <div className="why-stat">
                <strong>+18.000</strong>
                <span>TV-Sender online</span>
              </div>
            </div>
          </div>
          <div className="why-image">
            <img
              src="/devices-mockup.webp"
              alt="IPTV auf allen Geräten nutzen – Smart TV, Laptop, Tablet und Smartphone"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────── */}
      <section className="faq" id="faqs" aria-label="Häufige Fragen zu IPTV">
        <div className="faq-inner">
          <div className="faq-header">
            <h2 className="title-pill">FAQ</h2>
            <h3>Häufige Fragen zu IPTV</h3>
            <p>Hier finden Sie die wichtigsten Antworten rund um IPTV, Geräte, Installation und Support.</p>
          </div>
          <div className="faq-list">
            <details>
              <summary>Was ist IPTV?</summary>
              <p>IPTV überträgt Fernsehen und Streaming-Inhalte über das Internet. Sie benötigen eine stabile Internetverbindung und eine kompatible App oder ein kompatibles Gerät.</p>
            </details>
            <details>
              <summary>Auf welchen Geräten kann ich IPTV nutzen?</summary>
              <p>Sie können IPTV auf Smart TVs, Android-Geräten, Fire TV, Apple TV, Smartphones, Tablets, Computern und vielen weiteren Geräten nutzen.</p>
            </details>
            <details>
              <summary>Wie schnell muss meine Internetverbindung sein?</summary>
              <p>Für HD-Streams empfehlen wir mindestens 10 Mbit/s. Für 4K-Inhalte ist eine stabilere Verbindung mit höherer Geschwindigkeit empfehlenswert.</p>
            </details>
            <details>
              <summary>Kann ich mein Abonnement auf mehreren Geräten nutzen?</summary>
              <p>Ja. Die Anzahl der gleichzeitigen Verbindungen hängt von Ihrem gewählten Abonnement ab. Alle verfügbaren Optionen finden Sie im Bereich <a href="#plans">„Abonnements"</a>.</p>
            </details>
            <details>
              <summary>Wann erhalte ich meine Zugangsdaten?</summary>
              <p>Nach Abschluss Ihrer Bestellung erhalten Sie die Zugangsdaten und die Einrichtungsanleitung per E-Mail.</p>
            </details>
            <details>
              <summary>Was hilft bei Buffering oder Verbindungsproblemen?</summary>
              <p>Prüfen Sie zuerst Ihre Internetverbindung, starten Sie Router und Gerät neu und testen Sie anschließend einen anderen Server oder eine niedrigere Videoqualität.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ── CTA / Contact ──────────────────────────── */}
      <section className="cta" id="contact" aria-label="IPTV Abonnement abschließen">
        <h2>IPTV jetzt kaufen</h2>
        <p>Starten Sie noch heute und genießen Sie Live-TV, internationale Sender, Filme und Serien.</p>
        <a className="button" href="#plans">IPTV-Abonnement wählen</a>
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
          <a href="#top">Über uns</a>
          <a href="#plans">Abonnements</a>
        </div>
        <div>
          <b>Hilfe</b>
          <a href="#faqs">FAQ</a>
          <a href="https://wa.me/212783327023?text=Hallo%2C%20ich%20habe%20eine%20Frage%20zu%20Ihren%20IPTV-Diensten." target="_blank" rel="noopener noreferrer">Kontakt</a>
        </div>
        <div>
          <b>Rechtliches</b>
          <a href="#top">Impressum</a>
          <a href="#top">Datenschutz</a>
        </div>
      </footer>
    </main>
  )
}
