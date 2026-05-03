'use client'
import { useState } from 'react'

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
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="9" fill="#0D2335"/>
      {/* hoja izquierda */}
      <path d="M13 26 C13 26 9 20 11 15 C12 12 15 11 15 11 C15 11 15 15 14 18 C13.2 21 13 26 13 26Z"
            fill="#4A857A"/>
      {/* hoja derecha */}
      <path d="M23 26 C23 26 27 20 25 15 C24 12 21 11 21 11 C21 11 21 15 22 18 C22.8 21 23 26 23 26Z"
            fill="#4A857A"/>
      {/* hoja centro */}
      <path d="M18 26 C18 26 18 19 18 15 C18 12 18 9 18 9 C18 9 20 12 20 16 C20 20 18 26 18 26Z"
            fill="#6aada1"/>
    </svg>
  )
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main style={{ minHeight: '100vh', background: '#ffffff', fontFamily: 'DM Sans, sans-serif' }}>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .nav-links { display: flex; gap: 32px; }
        .nav-ctas  { display: flex; gap: 10px; }
        .nav-burger { display: none; }

        .hero-title { font-size: 52px; }
        .stats-grid { grid-template-columns: repeat(4, 1fr); }
        .esp-grid   { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }

        @media (max-width: 768px) {
          .nav-links  { display: none; }
          .nav-ctas   { display: none; }
          .nav-burger { display: block; }
          .mobile-menu {
            display: flex; flex-direction: column; gap: 16px;
            padding: 16px 24px; background: white;
            border-top: 1px solid #e8edf0;
          }
          .hero-title { font-size: 36px !important; }
          .hero-btns  { flex-direction: column; }
          .hero-btns a { text-align: center; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; }
          .esp-grid   { grid-template-columns: 1fr !important; }
          .footer-inner { flex-direction: column; text-align: center; gap: 12px; }
          .cta-section h2 { font-size: 28px !important; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 50,
        background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #e8edf0',
      }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto', padding: '14px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>

          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <LogoIcon />
            <div>
              <div style={{
                fontFamily: 'Fraunces, serif', fontSize: 16,
                fontWeight: 400, color: '#0D2335', lineHeight: 1.2,
              }}>
                Santa Victoria
              </div>
              <div style={{
                fontSize: 10, letterSpacing: 2,
                textTransform: 'uppercase', color: '#4A857A',
              }}>
                Medical Center
              </div>
            </div>
          </div>

          {/* Links desktop */}
          <div className="nav-links">
            {['Especialidades', 'Nosotros', 'Contactanos'].map(link => (
              <a key={link}
                href={'#' + link.toLowerCase()}
                style={{
                  fontSize: 14, fontWeight: 500,
                  color: '#2D3748', textDecoration: 'none', transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#4A857A')}
                onMouseLeave={e => (e.currentTarget.style.color = '#2D3748')}>
                {link}
              </a>
            ))}
          </div>

          {/* CTAs desktop */}
          <div className="nav-ctas">
            <a href="/login" style={{
              fontSize: 13, fontWeight: 500, padding: '8px 18px',
              borderRadius: 8, border: '1.5px solid #0D2335',
              color: '#0D2335', textDecoration: 'none', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0D2335'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0D2335' }}>
              Iniciar sesión
            </a>
            <a href="/registro" style={{
              fontSize: 13, fontWeight: 600, padding: '8px 18px',
              borderRadius: 8, background: '#4A857A',
              color: 'white', textDecoration: 'none', transition: 'all 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = '#3a6b61')}
              onMouseLeave={e => (e.currentTarget.style.background = '#4A857A')}>
              Agendar cita
            </a>
          </div>

          {/* Burger mobile */}
          <button
            className="nav-burger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: 'none',
              fontSize: 24, cursor: 'pointer', color: '#0D2335',
            }}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mobile-menu">
            {['Especialidades', 'Nosotros', 'Contactanos'].map(link => (
              <a key={link} href={'#' + link.toLowerCase()}
                onClick={() => setMenuOpen(false)}
                style={{ fontSize: 15, color: '#2D3748', textDecoration: 'none', fontWeight: 500 }}>
                {link}
              </a>
            ))}
            <a href="/login" style={{
              fontSize: 14, fontWeight: 500, padding: '10px',
              borderRadius: 8, border: '1.5px solid #0D2335',
              color: '#0D2335', textDecoration: 'none', textAlign: 'center',
            }}>
              Iniciar sesión
            </a>
            <a href="/registro" style={{
              fontSize: 14, fontWeight: 600, padding: '10px',
              borderRadius: 8, background: '#4A857A',
              color: 'white', textDecoration: 'none', textAlign: 'center',
            }}>
              Agendar cita
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section style={{
        paddingTop: 120, paddingBottom: 80,
        paddingLeft: 24, paddingRight: 24,
        background: 'linear-gradient(150deg, #0D2335 0%, #1b3d57 55%, #0D2335 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'radial-gradient(circle at 1px 1px, #4A857A 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }} />
        <div style={{
          position: 'absolute', top: 60, right: 80,
          width: 320, height: 320, borderRadius: '50%', opacity: 0.12,
          background: 'radial-gradient(circle, #4A857A, transparent)',
        }} />
        <div style={{
          position: 'absolute', bottom: 40, left: 60,
          width: 200, height: 200, borderRadius: '50%', opacity: 0.1,
          background: 'radial-gradient(circle, #B89B72, transparent)',
        }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 640 }}>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(74,133,122,0.18)',
              border: '1px solid rgba(74,133,122,0.35)',
              borderRadius: 100, padding: '5px 14px',
              fontSize: 12, fontWeight: 600,
              color: '#4A857A', marginBottom: 24,
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#32CD32', display: 'inline-block',
                animation: 'pulse 2s infinite',
              }} />
              Agenda en línea disponible ahora
            </div>

            <h1 className="hero-title" style={{
              fontFamily: 'Fraunces, serif', fontWeight: 300,
              lineHeight: 1.1, color: 'white', marginBottom: 20,
            }}>
              Tu salud,{' '}
              <span style={{ color: '#4A857A' }}>nuestra</span>{' '}
              <span style={{ color: '#B89B72' }}>prioridad.</span>
            </h1>

            <p style={{
              fontSize: 16, lineHeight: 1.75,
              marginBottom: 36, color: 'rgba(255,255,255,0.68)',
            }}>
              Centro Médico Santa Victoria — atención integral con tecnología moderna, 
              médicos especializados y resultados en tiempo real.
            </p>

            <div className="hero-btns" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="/registro" style={{
                padding: '14px 32px', borderRadius: 12,
                fontWeight: 600, fontSize: 15,
                color: 'white', textDecoration: 'none',
                background: '#4A857A', transition: 'all 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = '#3a6b61')}
                onMouseLeave={e => (e.currentTarget.style.background = '#4A857A')}>
                Agendar cita →
              </a>
              <a href="#specialties" style={{
                padding: '14px 32px', borderRadius: 12,
                fontWeight: 500, fontSize: 15,
                color: 'white', textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.25)', transition: 'all 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                Ver especialidades 
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#F4F7F6', padding: '48px 24px' }}>
        <div className="stats-grid" style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'grid', gap: 24,
        }}>
          {STATS.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'Fraunces, serif', fontSize: 40,
                fontWeight: 400, color: '#0D2335',
                lineHeight: 1, marginBottom: 6,
              }}>{s.val}</div>
              <div style={{ fontSize: 13, color: '#4A857A', fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ESPECIALIDADES ── */}
      <section id="Especialidades" style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{
              fontSize: 11, fontWeight: 700, letterSpacing: 3,
              textTransform: 'uppercase', color: '#4A857A', marginBottom: 12,
            }}>Lo que ofrecemos</p>
            <h2 style={{
              fontFamily: 'Fraunces, serif', fontSize: 38,
              fontWeight: 300, color: '#0D2335',
            }}>Nuestras especialidades</h2>
          </div>

          <div className="esp-grid" style={{ display: 'grid', gap: 20 }}>
            {ESPECIALIDADES.map(esp => (
              <div key={esp.nombre} style={{
                padding: 24, borderRadius: 16,
                border: '1px solid #e8edf0', cursor: 'pointer', transition: 'all 0.25s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#4A857A'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(74,133,122,0.12)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e8edf0'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: '#F4F7F6',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 24, marginBottom: 16,
                }}>{esp.icon}</div>
                <h3 style={{
                  fontSize: 15, fontWeight: 600,
                  color: '#0D2335', marginBottom: 8,
                }}>{esp.nombre}</h3>
                <p style={{
                  fontSize: 13, lineHeight: 1.65,
                  color: '#2D3748', marginBottom: 16,
                }}>{esp.desc}</p>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#4A857A' }}>
                  Agendar →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="cta-section" style={{
        padding: '80px 24px',
        background: 'linear-gradient(135deg, #0D2335 0%, #1b3d57 100%)',
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 3,
            textTransform: 'uppercase', color: '#B89B72', marginBottom: 16,
          }}>Da el primer paso</p>
          <h2 style={{
            fontFamily: 'Fraunces, serif', fontSize: 38, fontWeight: 300,
            color: 'white', marginBottom: 16, lineHeight: 1.2,
          }}>
            ¿Listo para cuidar tu salud?
          </h2>
          <p style={{
            fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 36,
          }}>
            Agenda tu cita en minutos. Sin filas, sin esperas innecesarias.
          </p>
          <a href="/registro" style={{
            display: 'inline-block', padding: '15px 40px',
            borderRadius: 12, fontWeight: 600, fontSize: 15,
            color: 'white', textDecoration: 'none',
            background: '#4A857A', transition: 'all 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = '#3a6b61')}
            onMouseLeave={e => (e.currentTarget.style.background = '#4A857A')}>
            Crear cuenta gratis →
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: '28px 24px', borderTop: '1px solid #e8edf0' }}>
        <div className="footer-inner" style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        }}>
          <div style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 14, color: '#0D2335',
          }}>
            Santa Victoria Medical Center
          </div>
          <div style={{ fontSize: 12, color: '#4A857A' }}>
            © {new Date().getFullYear()} · Todos los derechos reservados
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy', 'Terms', 'Contact'].map(l => (
              <a key={l} href="#" style={{
                fontSize: 12, color: '#2D3748', textDecoration: 'none',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = '#4A857A')}
                onMouseLeave={e => (e.currentTarget.style.color = '#2D3748')}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>

    </main>
  )
}
