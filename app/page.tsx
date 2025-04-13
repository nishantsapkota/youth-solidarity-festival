import Hero from "@/components/hero"
import About from "@/components/about"
import Venue from "@/components/venue"
import Schedule from "@/components/schedule"
import Artists from "@/components/artists"
import Testimonials from "@/components/testimonials"
import Tickets from "@/components/tickets"
import Gallery from "@/components/gallery"
import Rules from "@/components/rules"
import Contact from "@/components/contact"
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
      <Testimonials />
      <Tickets />
      <Sponsors />
      <Rules />
      <Contact />
    </main>
  )
}

