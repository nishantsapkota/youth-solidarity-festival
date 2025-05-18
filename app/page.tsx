import Hero from "@/components/hero"
import About from "@/components/about"
import Venue from "@/components/venue"
import Schedule from "@/components/schedule"
import Artists from "@/components/artists"
import Rules from "@/components/rules"
import Sponsors from "@/components/sponsors"
import MessageFromClub from "@/components/testimonial"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <MessageFromClub/>
      <Venue />
      <Schedule />
      <Artists />
      <Sponsors />
      <Rules />
    </main>
  )
}

