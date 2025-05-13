"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Music, Instagram, Facebook, Youtube } from "lucide-react"

export default function Artists() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const artists = [
    {
      id: 1,
      name: "John Rai and The Locals",
      image: "/placeholder.svg?height=500&width=500",
      description: "One of Nepal's most popular hip-hop artists known for his unique style and powerful lyrics.",
      socialMedia: {
        instagram: "https://www.instagram.com/johnrai______/",
        youtube: "https://www.youtube.com/@JohnChamlingTV",
      },
    },
    {
      id: 2,
      name: "The Elements",
      image: "/placeholder.svg?height=500&width=500",
      description: "A legendary figure in Nepali music with decades of hit songs and a massive following.",
      socialMedia: {
        instagram: "https://www.instagram.com/elements.the/",
        youtube: "https://www.youtube.com/@TheElementsNepal",
      },
    },
    {
      id: 3,
      name: "Purna Rai and DajuBhai Haru",
      image: "/placeholder.svg?height=500&width=500",
      description: "Known for their energetic performances and fusion of rock with traditional Nepali sounds.",
      socialMedia: {
        instagram: "https://www.instagram.com/purna___rai/",
        youtube: "https://www.youtube.com/@purnarai1997",
      },
    },
    {
      id: 4,
      name: "Gauley Bhai",
      image: "/placeholder.svg?height=500&width=500",
      description: "Pioneers of Nepali rock music with a career spanning over two decades.",
      socialMedia: {
        instagram: "https://www.instagram.com/gauleybhai/",
        youtube: "https://www.youtube.com/@gauleybhai",
      },
    }, 
    
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(artists.length / itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages)
  }

  const visibleArtists = artists.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)

  return (
    <section id="artists" className="bg-gray-900 py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">Featured Artists</h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
          <p className="mt-4 text-xl text-gray-300">Experience amazing performances by Nepal's top artists</p>
        </motion.div>

        <div className="relative">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 text-white hover:bg-white/10 md:-left-12"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <div className="w-full overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 md:grid-cols-3"
              >
                {visibleArtists.map((artist) => (
                  <ArtistCard key={artist.id} artist={artist} />
                ))}
              </motion.div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 text-white hover:bg-white/10 md:-right-12"
              onClick={nextSlide}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-8 rounded-full ${currentIndex === index ? "bg-primary" : "bg-gray-600"}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

function ArtistCard({ artist }) {
  return (
    <Card className="overflow-hidden bg-gray-800 transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={artist.image || "/placeholder.svg"}
          alt={artist.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <div className="flex items-center gap-2">
            <Music className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-bold text-white">{artist.name}</h3>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="mb-4 text-sm text-gray-300">{artist.description}</p>
        <div className="flex gap-3">
          <a href={artist.socialMedia.instagram} target="_blank" className="text-gray-400 transition-colors hover:text-primary">
            <Instagram className="h-5 w-5" />
          </a>
          <a href={artist.socialMedia.youtube} target="_blank" className="text-gray-400 transition-colors hover:text-primary">
            <Youtube className="h-5 w-5" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}

