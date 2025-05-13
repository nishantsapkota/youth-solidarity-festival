import Hero from "@/components/hero"
import About from "@/components/about"
import Venue from "@/components/venue"
import Schedule from "@/components/schedule"
import Artists from "@/components/artists"
import Gallery from "@/components/gallery"
import Rules from "@/components/rules"
import Sponsors from "@/components/sponsors"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Venue />
      <Schedule />
      <Artists />
      <Gallery />
      <Sponsors />
      <Rules />
    </main>
  )
}

