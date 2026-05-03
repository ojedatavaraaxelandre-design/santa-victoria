'use client'
import { useState, useEffect } from 'react'

const ESPECIALIDADES = [
  {
    icon: '🩺',
    nombre: 'Medicina General',
    desc: 'Atención primaria, controles de salud y diagnóstico integral para toda la familia.',
  },
  {
    icon: '👂',
    nombre: 'Otorrinolaringología',
    desc: 'Diagnóstico y tratamiento especializado de oído, nariz y garganta.',
  },
  {
    icon: '🦷',
    nombre: 'Odontología',
    desc: 'Salud bucal completa, estética dental, ortodoncia y blanqueamiento.',
  },
  {
    icon: '✨',
    nombre: 'Tratamientos Estéticos',
    desc: 'Procedimientos estéticos de alta precisión con tecnología de vanguardia.',
  },
  {
    icon: '🔬',
    nombre: 'Exámenes de Laboratorio',
    desc: 'Análisis clínicos completos con resultados digitales en menos de 24 horas.',
  },
]

const STATS = [
  { val: '+3.000', label: 'Pacientes atendidos' },
  { val: '5',      label: 'Especialidades' },
  { val: '99%',    label: 'Satisfacción' },
  { val: '< 24h',  label: 'Resultados lab.' },
]

function LogoIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="preciseLogoGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#45AE9C" />
          <stop offset="100%" stopColor="#1B524B" />
        </linearGradient>
      </defs>
      <path d="M50.119 0C50.119 0 35.918 36.191 33.626 49.333C31.334 62.476 34.697 68.314 34.697 68.314C34.697 68.314 41.258 56.402 50.119 46.545C58.98 56.402 65.541 68.314 65.541 68.314C65.541 68.314 68.904 62.476 66.612 49.333C64.32 36.191 50.119 0 50.119 0ZM50.119 99.167C50.119 99.167 61.272 73.279 81.353 62.292C101.434 51.305 100.323 37.135 100.323 37.135C100.323 37.135 84.772 45.451 70.36 61.564C55.948 77.677 50.119 99.167 50.119 99.167ZM50.119 99.167C50.119 99.167 44.291 77.677 29.878 61.564C15.466 45.451 0.119141 37.135 0.119141 37.135C0.119141 37.135 -1.19478 51.305 18.885 62.292C38.966 73.279 50.119 99.167 50.119 99.167Z" 
            fill="url(#preciseLogoGradient)" />
    </svg>
  );
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ minHeight: '100vh', background: '#ffffff', fontFamily: 'DM Sans, sans-serif' }}>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; scroll-behavior: smooth; }

        .nav-links { display: flex; gap: 32px; }
        .nav-ctas  { display: flex; gap: 10px; }
        .nav-burger { display: none; }

        .hero-title { font-size: 58px; letter-spacing: -1px; }
        .stats-grid { grid-template-columns: repeat(4, 1fr); }
        .esp-grid   { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }

        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          will-change: opacity, transform;
        }
        .reveal-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02) !important;
          box-shadow: 0 20px 40px rgba(74,133,122,0.15) !important;
          border-color: #4A857A !important;
        }
        .card-hover:hover .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
          background: #e6f2f0 !important;
        }
        .icon-wrapper {
          transition: all 0.3s ease;
        }

        .btn-mag { transition: all 0.3s ease; position: relative; overflow: hidden; }
        .btn-mag:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(74,133,122,0.3); }
        .btn-mag:active { transform: translateY(1px); }

        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 20px); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        .bg-glow-1 { animation: floatSlow 8s ease-in-out infinite; }
        .bg-glow-2 { animation: floatFast 6s ease-in-out infinite; }

        @media (max-width: 768px) {
          .nav-links  { display: none; }
          .nav-ctas   { display: none; }
          .nav-burger { display: block; }
          .mobile-menu {
            display: flex; flex-direction: column; gap: 16px;
            padding: 16px 24px; background: white;
            border-top: 1px solid #e8edf0;
            animation: slideDown 0.3s ease forwards;
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .hero-title { font-size: 40px !important; }
          .hero-btns  { flex-direction: column; }
          .hero-btns a { text-align: center; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; }
          .esp-grid   { grid-template-columns: 1fr !important; }
          .footer-inner { flex-direction: column; text-align: center; gap: 12px; }
          .cta-section h2 { font-size: 32px !important; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 50,
        background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(232, 237, 240, 0.6)',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto', padding: '14px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} className="btn-mag">
            <LogoIcon />
            <div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 17, fontWeight: 500, color: '#0D2335', lineHeight: 1.1 }}>
                Santa Victoria
              </div>
              <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#4A857A', fontWeight: 600 }}>
                Medical Center
              </div>
            </div>
          </div>

          <div className="nav-links">
            {['Especialidades', 'Nosotros', 'Contáctanos'].map(link => (
              <a key={link} href={'#' + link.toLowerCase()}
                style={{
                  fontSize: 14, fontWeight: 600, color: '#4A5568', textDecoration: 'none', 
                  transition: 'color 0.2s, transform 0.2s', position: 'relative'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#4A857A';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#4A5568';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                {link}
              </a>
            ))}
          </div>

          <div className="nav-ctas">
            <a href="/login" className="btn-mag" style={{
              fontSize: 13, fontWeight: 600, padding: '8px 20px', borderRadius: 10, 
              border: '1.5px solid #0D2335', color: '#0D2335', textDecoration: 'none', background: 'transparent'
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0D2335'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0D2335' }}>
              Iniciar sesión
            </a>
            <a href="/registro" className="btn-mag" style={{
              fontSize: 13, fontWeight: 600, padding: '8px 20px', borderRadius: 10, 
              background: '#4A857A', color: 'white', textDecoration: 'none'
            }}
              onMouseEnter={e => (e.currentTarget.style.background = '#3a6b61')}
              onMouseLeave={e => (e.currentTarget.style.background = '#4A857A')}>
              Agendar cita
            </a>
          </div>

          <button className="nav-burger" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', color: '#0D2335' }}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {['Especialidades', 'Nosotros', 'Contáctanos'].map(link => (
              <a key={link} href={'#' + link.toLowerCase()} onClick={() => setMenuOpen(false)}
                style={{ fontSize: 16, color: '#2D3748', textDecoration: 'none', fontWeight: 600 }}>
                {link}
              </a>
            ))}
            <a href="/login" style={{ fontSize: 15, fontWeight: 600, padding: '12px', borderRadius: 10, border: '1.5px solid #0D2335', color: '#0D2335', textDecoration: 'none', textAlign: 'center' }}>
              Iniciar sesión
            </a>
            <a href="/registro" style={{ fontSize: 15, fontWeight: 600, padding: '12px', borderRadius: 10, background: '#4A857A', color: 'white', textDecoration: 'none', textAlign: 'center' }}>
              Agendar cita
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section style={{
        paddingTop: 160, paddingBottom: 100, paddingLeft: 24, paddingRight: 24,
        background: 'linear-gradient(145deg, #081622 0%, #112d42 50%, #0a1f30 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="bg-glow-1" style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', opacity: 0.15, background: 'radial-gradient(circle, #4A857A, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="bg-glow-2" style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: 400, height: 400, borderRadius: '50%', opacity: 0.12, background: 'radial-gradient(circle, #B89B72, transparent 70%)', filter: 'blur(40px)' }} />

        <div className="reveal-on-scroll" style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 680 }}>
            
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(74,133,122,0.15)',
              border: '1px solid rgba(74,133,122,0.4)', borderRadius: 100, padding: '6px 16px',
              fontSize: 13, fontWeight: 600, color: '#68bbae', marginBottom: 28, backdropFilter: 'blur(4px)'
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#32CD32', boxShadow: '0 0 10px #32CD32', animation: 'pulse 2s infinite' }} />
              Agenda en línea disponible ahora
            </div>

            <h1 className="hero-title" style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, lineHeight: 1.05, color: 'white', marginBottom: 24 }}>
              Tu salud,<br/> <span style={{ color: '#68bbae' }}>nuestra</span> <span style={{ color: '#d4b78c', fontStyle: 'italic' }}>prioridad.</span>
            </h1>

            <p style={{ fontSize: 18, lineHeight: 1.6, marginBottom: 40, color: 'rgba(255,255,255,0.75)', fontWeight: 300 }}>
              Santa Victoria Medical Center — atención integral con tecnología de vanguardia, 
              médicos especializados y resultados en tiempo real.
            </p>

            <div className="hero-btns" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="/registro" className="btn-mag" style={{
                padding: '16px 36px', borderRadius: 14, fontWeight: 600, fontSize: 16, color: 'white', 
                textDecoration: 'none', background: '#4A857A', boxShadow: '0 4px 14px rgba(74,133,122,0.4)'
              }}
                onMouseEnter={e => (e.currentTarget.style.background = '#3a6b61')}
                onMouseLeave={e => (e.currentTarget.style.background = '#4A857A')}>
                Agendar cita →
              </a>
              <a href="#especialidades" className="btn-mag" style={{
                padding: '16px 36px', borderRadius: 14, fontWeight: 600, fontSize: 16, color: 'white', 
                textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(4px)'
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                Ver especialidades 
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#F8FAFC', padding: '60px 24px', borderBottom: '1px solid #e8edf0' }}>
        <div className="stats-grid reveal-on-scroll" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gap: 24 }}>
          {STATS.map((s, i) => (
            <div key={s.label} className={`reveal-on-scroll delay-${(i+1)*100}`} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 46, fontWeight: 300, color: '#0D2335', lineHeight: 1, marginBottom: 8 }}>
                {s.val}
              </div>
              <div style={{ fontSize: 14, color: '#4A857A', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ESPECIALIDADES ── */}
      <section id="especialidades" style={{ padding: '100px 24px', background: '#ffffff', position: 'relative' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          
          <div className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', color: '#4A857A', marginBottom: 16 }}>
              Lo que ofrecemos
            </p>
            <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 42, fontWeight: 300, color: '#0D2335' }}>
              Nuestras especialidades
            </h2>
          </div>

          <div className="esp-grid" style={{ display: 'grid', gap: 24 }}>
            {ESPECIALIDADES.map((esp, i) => (
              <div key={esp.nombre} className={`card-hover reveal-on-scroll delay-${(i%3)*100}`} style={{
                padding: 32, borderRadius: 20, border: '1px solid #e8edf0', cursor: 'pointer', background: '#fff'
              }}>
                <div className="icon-wrapper" style={{
                  width: 56, height: 56, borderRadius: 16, background: '#F4F7F6', display: 'flex', 
                  alignItems: 'center', justifyContent: 'center', fontSize: 28, marginBottom: 20
                }}>
                  {esp.icon}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: '#0D2335', marginBottom: 12 }}>
                  {esp.nombre}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: '#4A5568', marginBottom: 24 }}>
                  {esp.desc}
                </p>
                <span style={{ fontSize: 14, fontWeight: 700, color: '#4A857A', display: 'flex', alignItems: 'center', gap: 4 }}>
                  Agendar <span style={{ fontSize: 18 }}>→</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="cta-section" style={{
        padding: '100px 24px', background: 'linear-gradient(135deg, #0D2335 0%, #1b3d57 100%)', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(74,133,122,0.2) 0%, transparent 60%)', pointerEvents: 'none' }} />

        <div className="reveal-on-scroll" style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', color: '#d4b78c', marginBottom: 20 }}>
            Da el primer paso
          </p>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 46, fontWeight: 300, color: 'white', marginBottom: 20, lineHeight: 1.1 }}>
            ¿Listo para cuidar tu salud?
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', marginBottom: 40, fontWeight: 300 }}>
            Agenda tu cita en minutos. Sin filas, sin esperas innecesarias. Todo desde la palma de tu mano.
          </p>
          <a href="/registro" className="btn-mag" style={{
            display: 'inline-block', padding: '18px 48px', borderRadius: 14, fontWeight: 600, fontSize: 16,
            color: 'white', textDecoration: 'none', background: '#4A857A', boxShadow: '0 8px 24px rgba(74,133,122,0.4)'
          }}
            onMouseEnter={e => (e.currentTarget.style.background = '#3a6b61')}
            onMouseLeave={e => (e.currentTarget.style.background = '#4A857A')}>
            Crear cuenta gratis →
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: '40px 24px', borderTop: '1px solid #e8edf0', background: '#fff' }}>
        <div className="footer-inner reveal-on-scroll" style={{
          maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ transform: 'scale(0.8)' }}><LogoIcon /></div>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, color: '#0D2335', fontWeight: 500 }}>
              Santa Victoria Medical Center
            </div>
          </div>
          <div style={{ fontSize: 13, color: '#718096', fontWeight: 500 }}>
            © {new Date().getFullYear()} · Todos los derechos reservados
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacidad', 'Términos', 'Contacto'].map(l => (
              <a key={l} href="#" style={{ fontSize: 13, color: '#4A5568', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#4A857A')}
                onMouseLeave={e => (e.currentTarget.style.color = '#4A5568')}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>

    </main>
  )
}
