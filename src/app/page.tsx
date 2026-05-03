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
  { val: '100%',    label: 'Satisfacción' },
  { val: '< 24h',  label: 'Resultados lab.' },
]

const NAV_LINKS = ['Especialidades', 'Nosotros', 'Contacto']

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main style={{ minHeight: '100vh', background: '#ffffff', fontFamily: 'DM Sans, sans-serif' }}>

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
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: 'linear-gradient(135deg, #0D2335, #4A857A)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontSize: 18, fontWeight: 700,
            }}>✚</div>
            <div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 17, fontWeight: 400, color: '#0D2335', lineHeight: 1.2 }}>
                Santa Victoria
              </div>
              <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#4A857A' }}>
                Medical Center
              </div>
            </div>
          </div>

          {/* Links desktop */}
          <div style={{ display: 'flex', gap: 32 }}>
            {NAV_LINKS.map(link => (
              <a key={link} href={'#' + link.toLowerCase()}
                style={{ fontSize: 14, fontWeight: 500, color: '#2D3748', textDecoration: 'none',
                         transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#4A857A')}
                onMouseLeave={e => (e.currentTarget.style.color = '#2D3748')}>
                {link}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 10 }}>
            <a href='/login' style={{
              fontSize: 13, fontWeight: 500, padding: '8px 18px', borderRadius: 8,
              border: '1.5px solid #0D2335', color: '#0D2335', textDecoration: 'none',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0D2335'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0D2335' }}>
              Iniciar sesión
            </a>
            <a href='/registro' style={{
              fontSize: 13, fontWeight: 600, padding: '8px 18px', borderRadius: 8,
              background: '#4A857A', color: 'white', textDecoration: 'none',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = '#3a6b61')}
              onMouseLeave={e => (e.currentTarget.style.background = '#4A857A')}>
              Agendar cita
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24,
        background: 'linear-gradient(150deg, #0D2335 0%, #1b3d57 55%, #0D2335 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Dot grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'radial-gradient(circle at 1px 1px, #4A857A 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }} />
        {/* Glow teal */}
        <div style={{
          position: 'absolute', top: 60, right: 80,
          width: 320, height: 320, borderRadius: '50%', opacity: 0.12,
          background: 'radial-gradient(circle, #4A857A, transparent)',
        }} />
        {/* Glow gold */}
        <div style={{
          position: 'absolute', bottom: 40, left: 60,
          width: 200, height: 200, borderRadius: '50%', opacity: 0.1,
          background: 'radial-gradient(circle, #B89B72, transparent)',
        }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 620 }}>

            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(74,133,122,0.18)', border: '1px solid rgba(74,133,122,0.35)',
              borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600,
              color: '#4A857A', marginBottom: 24,
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%', background: '#4A857A',
                animation: 'pulse 2s infinite',
              }} />
              Agenda en línea disponible ahora
            </div>

            <h1 style={{
              fontFamily: 'Fraunces, serif', fontSize: 56, fontWeight: 300,
              lineHeight: 1.1, color: 'white', marginBottom: 20,
            }}>
              Tu salud,{' '}
              <span style={{ color: '#4A857A' }}>nuestra</span>{' '}
              <span style={{ color: '#B89B72' }}>prioridad.</span>
            </h1>

            <p style={{
              fontSize: 17, lineHeight: 1.7, marginBottom: 36,
              color: 'rgba(255,255,255,0.68)',
            }}>
              Centro Médico Santa Victoria — atención integral con tecnología moderna,
              médicos especializados y resultados en tiempo real.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href='/registro' style={{
                padding: '14px 32px', borderRadius: 12, fontWeight: 600,
                fontSize: 15, color: 'white', textDecoration: 'none',
                background: '#4A857A', transition: 'all 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = '#3a6b61')}
                onMouseLeave={e => (e.currentTarget.style.background = '#4A857A')}>
                Agendar cita online →
              </a>
              <a href='#especialidades' style={{
                padding: '14px 32px', borderRadius: 12, fontWeight: 500,
                fontSize: 15, color: 'white', textDecoration: 'none',
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
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24,
        }}>
          {STATS.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'Fraunces, serif', fontSize: 40, fontWeight: 400,
                color: '#0D2335', lineHeight: 1, marginBottom: 6,
              }}>{s.val}</div>
              <div style={{ fontSize: 13, color: '#4A857A', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ESPECIALIDADES ── */}
      <section id='especialidades' style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{
              fontSize: 11, fontWeight: 700, letterSpacing: 3,
              textTransform: 'uppercase', color: '#4A857A', marginBottom: 12,
            }}>Lo que ofrecemos</p>
            <h2 style={{
              fontFamily: 'Fraunces, serif', fontSize: 38, fontWeight: 300, color: '#0D2335',
            }}>Nuestras especialidades</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}>
            {ESPECIALIDADES.map(esp => (
              <div key={esp.nombre}
                style={{
                  padding: '24px', borderRadius: 16,
                  border: '1px solid #e8edf0', cursor: 'pointer',
                  transition: 'all 0.25s',
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
                  background: '#F4F7F6', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: 24, marginBottom: 16,
                }}>{esp.icon}</div>
                <h3 style={{
                  fontSize: 15, fontWeight: 600, color: '#0D2335', marginBottom: 8,
                }}>{esp.nombre}</h3>
                <p style={{
                  fontSize: 13, lineHeight: 1.6, color: '#2D3748', marginBottom: 16,
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
      <section style={{
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
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 36 }}>
            Agenda tu cita en minutos. Sin filas, sin esperas innecesarias.
          </p>
          <a href='/registro' style={{
            display: 'inline-block', padding: '15px 40px', borderRadius: 12,
            fontWeight: 600, fontSize: 15, color: 'white', textDecoration: 'none',
            background: '#4A857A', transition: 'all 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = '#3a6b61')}
            onMouseLeave={e => (e.currentTarget.style.background = '#4A857A')}>
            Crear cuenta gratis →
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: '28px 24px',
        borderTop: '1px solid #e8edf0',
      }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        }}>
          <div style={{
            fontFamily: 'Fraunces, serif', fontSize: 14, color: '#0D2335',
          }}>Centro Médico Santa Victoria</div>
          <div style={{ fontSize: 12, color: '#4A857A' }}>
            © {new Date().getFullYear()} · Todos los derechos reservados
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacidad', 'Términos', 'Contacto'].map(l => (
              <a key={l} href='#' style={{
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
