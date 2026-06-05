import { Bebas_Neue, DM_Sans } from 'next/font/google'
import './globals.css'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const dm_sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata = {
  title: 'Tury Fresh',
  description: 'Músico · Rapero · Productor — Hermosillo, Son. / Querétaro, Qro.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${bebas.variable} ${dm_sans.variable} bg-[#0a0a0a]`}>
        {children}
      </body>
    </html>
  )
}