import LinkCard from './components/LinkCard';
import links from './data/links';

export default function Home() {
  return (
    <main className='min-h-screen bg-[#0a0a0a] flex justify-center px-5 py-12'>
      <div className='w-full max-w-md flex flex-col gap-3'>

        <h1 className='text-7x1 font-bold text-white text-center tracking-widest mb-2'>
          Tury Fresh
        </h1>
        <p className='text-sm text-[#666] text-center mb-8'>
          Músico · Rapero · Productor
        </p>

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
    </main>
  )
}