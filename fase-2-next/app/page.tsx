import LinkCard from './components/LinkCard'

export default function Home() {
  return (
    <main>
      <h1>Tury Fresh</h1>
      <LinkCard href="https://open.spotify.com/intl-es/artist/6Hk26Kx9gPWLxXDtEH5vr0" label="Escúchame en Spotify" />
      <LinkCard href="https://www.youtube.com/c/TuryFresh" label="Videos en YouTube" />
      <LinkCard href="https://www.instagram.com/turyfresh" label="Sígueme en Instagram" />
    </main>
  )
}