import Image from 'next/image'
import LinkCard from './components/LinkCard'
import links from './data/links'
import LatestRelease from './components/LatestRelease'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex justify-center px-5 py-12">
      <div className="w-full max-w-md flex flex-col items-center gap-3">

        {/* Foto de perfil */}
        <div className="w-24 h-24 rounded-full overflow-hidden border border-[#222] mb-2">
          <Image
            src="/foto_perfil.jpg"
            alt="Tury Fresh"
            width={96}
            height={96}
            className="object-cover object-top w-full h-full"
          />
        </div>

        {/* Nombre */}
        <h1 className="font-[family-name:var(--font-bebas)] text-7xl text-white tracking-widest">
          TURY FRESH
        </h1>

        {/* Tagline */}
        <p className="text-sm text-[#666] text-center mb-6">
          Músico · Rapero · Productor<br />
          Hermosillo, Son. / Querétaro, Qro. / México
        </p>

        {/* Último Lanzamiento */}
        <LatestRelease/>

        {/* Links */}
        <div className="w-full flex flex-col gap-3">
          {links.map((link) => (
            <LinkCard
              key={link.id}
              href={link.href}
              label={link.label}
              accent={link.accent}
              disabled={link.disabled}
              badge={link.badge}
            />
          ))}
        </div>

        {/* Footer */}
        <p className="text-[11px] text-[#666] opacity-50 mt-8 text-center">
          © 2026 Tury Fresh — Hermosillo, Son. / Querétaro, Qro. / México
        </p>

      </div>
    </main>
  )
}