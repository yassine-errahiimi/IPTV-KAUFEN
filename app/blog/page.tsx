import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IPTV Blog – Tipps, Apps, Geräte & Streaming',
  description: 'Der IPTV Kaufen Blog: Tipps zu IPTV-Apps, Einrichtung auf Smart TV, Android und Fire TV, Senderlisten und mehr.',
  alternates: {
    canonical: 'https://iptv-kaufen.de/blog',
  },
}

export default function BlogIndexPage() {
  return (
    <main style={{ backgroundColor: '#fcfcfc', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif" }}>
      <header className="nav">
        <a className="logo" href="/" aria-label="IPTV Kaufen – Zur Startseite">
          <img className="logo-image" src="/logo.webp" alt="IPTV Kaufen Logo" width={160} height={40} />
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="/">Startseite</a>
          <a href="/blog" aria-current="page">Blog</a>
          <a href="https://wa.me/212783327023?text=Hallo" target="_blank" rel="noopener noreferrer">Kontakt</a>
        </nav>
        <a className="nav-button" href="/#plans">Jetzt abonnieren</a>
      </header>

      <section style={{ padding: '120px 5% 60px', textAlign: 'center', background: '#fff', borderBottom: '1px solid #eee' }}>
        <h1 style={{ fontSize: '12px', color: '#fff', background: '#d71920', padding: '6px 14px', borderRadius: '20px', display: 'inline-block', fontWeight: 800, letterSpacing: '1px' }}>IPTV BLOG</h1>
        <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, margin: '20px 0 15px', color: '#111' }}>Unsere Ratgeber & Artikel</h2>
        <p style={{ fontSize: '16px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>Tauchen Sie ein in die Welt des Streamings. Wir bieten Ihnen wertvolle Tipps, Tricks und Kaufberatungen rund um das Thema IPTV.</p>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <style>{`
          .blog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 30px; }
          .blog-card:hover { transform: translateY(-5px); box-shadow: 0 12px 30px rgba(0,0,0,0.08) !important; }
        `}</style>
        <div className="blog-grid">

        <a href="/blog/iptv-kaufen-worauf-achten" style={{ display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', color: '#111', border: '1px solid #eee', transition: 'transform 0.2s, boxShadow 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }} className="blog-card">
          <div style={{ width: '100%', height: '180px', background: 'url(/player-background.webp) center/cover' }}></div>
          <div style={{ padding: '24px' }}>
            <span style={{ color: '#d71920', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', display: 'block' }}>Ratgeber</span>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', lineHeight: 1.4, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>IPTV kaufen: Worauf sollte man beim IPTV-Kauf achten?</h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: 1.6 }}>Entdecken Sie alle wichtigen Informationen zu IPTV kaufen in diesem ausführlichen Artikel...</p>
          </div>
        </a>

        <a href="/blog/iptv-anbieter-in-deutschland-finden" style={{ display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', color: '#111', border: '1px solid #eee', transition: 'transform 0.2s, boxShadow 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }} className="blog-card">
          <div style={{ width: '100%', height: '180px', background: 'url(/player-background.webp) center/cover' }}></div>
          <div style={{ padding: '24px' }}>
            <span style={{ color: '#d71920', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', display: 'block' }}>Ratgeber</span>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', lineHeight: 1.4, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>IPTV Anbieter in Deutschland: So finden Sie den passenden Anbieter</h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: 1.6 }}>Entdecken Sie alle wichtigen Informationen zu IPTV Anbieter in diesem ausführlichen Artikel...</p>
          </div>
        </a>

        <a href="/blog/smart-plus-iptv-funktionen-nutzung" style={{ display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', color: '#111', border: '1px solid #eee', transition: 'transform 0.2s, boxShadow 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }} className="blog-card">
          <div style={{ width: '100%', height: '180px', background: 'url(/player-background.webp) center/cover' }}></div>
          <div style={{ padding: '24px' }}>
            <span style={{ color: '#d71920', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', display: 'block' }}>Ratgeber</span>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', lineHeight: 1.4, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>Smart+ IPTV: Funktionen, Nutzung und wichtige Informationen</h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: 1.6 }}>Entdecken Sie alle wichtigen Informationen zu Smart+ IPTV in diesem ausführlichen Artikel...</p>
          </div>
        </a>

        <a href="/blog/iptv-tv-was-ist-iptv" style={{ display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', color: '#111', border: '1px solid #eee', transition: 'transform 0.2s, boxShadow 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }} className="blog-card">
          <div style={{ width: '100%', height: '180px', background: 'url(/player-background.webp) center/cover' }}></div>
          <div style={{ padding: '24px' }}>
            <span style={{ color: '#d71920', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', display: 'block' }}>Ratgeber</span>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', lineHeight: 1.4, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>IPTV TV: Was ist IPTV und wie funktioniert Fernsehen über Internet?</h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: 1.6 }}>Entdecken Sie alle wichtigen Informationen zu IPTV TV in diesem ausführlichen Artikel...</p>
          </div>
        </a>

        <a href="/blog/ip-tv-smarters-pro-funktionen" style={{ display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', color: '#111', border: '1px solid #eee', transition: 'transform 0.2s, boxShadow 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }} className="blog-card">
          <div style={{ width: '100%', height: '180px', background: 'url(/player-background.webp) center/cover' }}></div>
          <div style={{ padding: '24px' }}>
            <span style={{ color: '#d71920', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', display: 'block' }}>Ratgeber</span>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', lineHeight: 1.4, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>IP TV Smarters Pro: Funktionen, Einrichtung und Nutzung erklärt</h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: 1.6 }}>Entdecken Sie alle wichtigen Informationen zu IP TV Smarters Pro in diesem ausführlichen Artikel...</p>
          </div>
        </a>

        <a href="/blog/iptv-streaming-fernsehen-online" style={{ display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', color: '#111', border: '1px solid #eee', transition: 'transform 0.2s, boxShadow 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }} className="blog-card">
          <div style={{ width: '100%', height: '180px', background: 'url(/player-background.webp) center/cover' }}></div>
          <div style={{ padding: '24px' }}>
            <span style={{ color: '#d71920', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', display: 'block' }}>Ratgeber</span>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', lineHeight: 1.4, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>IPTV Streaming: Fernsehen online auf Smart TV, Smartphone und mehr</h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: 1.6 }}>Entdecken Sie alle wichtigen Informationen zu IPTV Streaming in diesem ausführlichen Artikel...</p>
          </div>
        </a>

        <a href="/blog/smart4iptv-funktionen-geraete" style={{ display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', color: '#111', border: '1px solid #eee', transition: 'transform 0.2s, boxShadow 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }} className="blog-card">
          <div style={{ width: '100%', height: '180px', background: 'url(/player-background.webp) center/cover' }}></div>
          <div style={{ padding: '24px' }}>
            <span style={{ color: '#d71920', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', display: 'block' }}>Ratgeber</span>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', lineHeight: 1.4, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>Smart4IPTV: Funktionen, Geräte und Nutzung im Überblick</h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: 1.6 }}>Entdecken Sie alle wichtigen Informationen zu Smart4IPTV in diesem ausführlichen Artikel...</p>
          </div>
        </a>

        <a href="/blog/iptv-abonnementplaene-kosten" style={{ display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', color: '#111', border: '1px solid #eee', transition: 'transform 0.2s, boxShadow 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }} className="blog-card">
          <div style={{ width: '100%', height: '180px', background: 'url(/player-background.webp) center/cover' }}></div>
          <div style={{ padding: '24px' }}>
            <span style={{ color: '#d71920', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', display: 'block' }}>Ratgeber</span>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', lineHeight: 1.4, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>IPTV-Abonnementpläne: Kosten, Laufzeit und wichtige Unterschiede</h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: 1.6 }}>Entdecken Sie alle wichtigen Informationen zu IPTV-Abonnementpläne in diesem ausführlichen Artikel...</p>
          </div>
        </a>

        <a href="/blog/iptv-germany-einfach-erklaert" style={{ display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', color: '#111', border: '1px solid #eee', transition: 'transform 0.2s, boxShadow 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }} className="blog-card">
          <div style={{ width: '100%', height: '180px', background: 'url(/player-background.webp) center/cover' }}></div>
          <div style={{ padding: '24px' }}>
            <span style={{ color: '#d71920', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', display: 'block' }}>Ratgeber</span>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', lineHeight: 1.4, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>IPTV Germany: IPTV in Deutschland einfach erklärt</h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: 1.6 }}>Entdecken Sie alle wichtigen Informationen zu IPTV Germany in diesem ausführlichen Artikel...</p>
          </div>
        </a>

        <a href="/blog/iptv-deutschland-auswahlkriterien" style={{ display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', color: '#111', border: '1px solid #eee', transition: 'transform 0.2s, boxShadow 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }} className="blog-card">
          <div style={{ width: '100%', height: '180px', background: 'url(/player-background.webp) center/cover' }}></div>
          <div style={{ padding: '24px' }}>
            <span style={{ color: '#d71920', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', display: 'block' }}>Ratgeber</span>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', lineHeight: 1.4, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>IPTV Deutschland: Geräte, Streaming und wichtige Auswahlkriterien</h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: 1.6 }}>Entdecken Sie alle wichtigen Informationen zu IPTV Deutschland in diesem ausführlichen Artikel...</p>
          </div>
        </a>

        <a href="/blog/iptv-anbieter-vergleichen" style={{ display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', color: '#111', border: '1px solid #eee', transition: 'transform 0.2s, boxShadow 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }} className="blog-card">
          <div style={{ width: '100%', height: '180px', background: 'url(/player-background.webp) center/cover' }}></div>
          <div style={{ padding: '24px' }}>
            <span style={{ color: '#d71920', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', display: 'block' }}>Ratgeber</span>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', lineHeight: 1.4, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>IPTV Anbieter vergleichen: Wichtige Kriterien vor dem Abonnement</h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: 1.6 }}>Entdecken Sie alle wichtigen Informationen zu IPTV Anbieter vergleichen in diesem ausführlichen Artikel...</p>
          </div>
        </a>

        </div>
      </section>

      <footer style={{ background: '#fff', borderTop: '1px solid #eee', padding: '40px 10%', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
        <div className="logo">
          <img className="logo-image" src="/logo.webp" alt="IPTV Kaufen Logo" loading="lazy" width={160} height={40} />
          <p style={{ color: '#888', fontSize: '12px', marginTop: '10px', maxWidth: '250px' }}>Premium IPTV-Lösungen für Deutschland, Österreich und die Schweiz.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
          <b style={{ color: '#111', textTransform: 'uppercase' }}>Unternehmen</b>
          <a href="/" style={{ color: '#666', textDecoration: 'none' }}>Startseite</a>
          <a href="/#plans" style={{ color: '#666', textDecoration: 'none' }}>Abonnements</a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
          <b style={{ color: '#111', textTransform: 'uppercase' }}>Hilfe</b>
          <a href="/#faqs" style={{ color: '#666', textDecoration: 'none' }}>FAQ</a>
          <a href="https://wa.me/212783327023?text=Hallo" style={{ color: '#666', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">Kontakt (WhatsApp)</a>
        </div>
      </footer>
    </main>
  )
}
