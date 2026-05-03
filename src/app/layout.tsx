import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Centro Médico Santa Victoria',
  description: 'Salud moderna, atención personalizada. Medicina General, ORL, Odontología, Estética y Laboratorio.',
  keywords: ['centro médico', 'santa victoria', 'medicina', 'odontología', 'laboratorio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
