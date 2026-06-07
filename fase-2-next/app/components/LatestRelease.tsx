export default function LatestRelease() {
  return (
    <section className="w-full flex flex-col gap-3 mb-3">

      <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#666]">
        Último lanzamiento
      </p>

      <div className="rounded-xl overflow-hidden border border-[#222]">
        <iframe
          src="https://open.spotify.com/embed/track/4ZlHi9OzI83SG6bHej76xc?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>

      <div className="relative w-full rounded-xl overflow-hidden border border-[#222]" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src="https://www.youtube.com/embed/HLl3KkBYbPw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      </div>

    </section>
  )
}