"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Music, Instagram, Youtube } from "lucide-react"

export default function Artists() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const artists = [
    {
      id: 1,
      name: "John Rai and The Locals",
      images: [
        {
          src: "/john-rai-logo.JPG?height=500&width=500",
          alt: "John Rai and The Locals Logo"
        },
        {
          src: "/john-rai-photo.JPG?height=500&width=500",
          alt: "John Rai and The Locals Photo"
        }
      ],
      description: "One of Nepal's most soulful voices, known for his heartfelt lyrics and deeply emotional musical expression.",
      socialMedia: {
        instagram: "https://www.instagram.com/johnrai______/",
        youtube: "https://www.youtube.com/@JohnChamlingTV",
      },
    },
    {
      id: 2,
      name: "The Elements",
      images: [
        {
          src: "/the-elements-photo.jpg?height=500&width=500",
          alt: "The Elements Photo"
        },
        {
          src: "/the-elements-logo.png?height=500&width=500",
          alt: "The Elements Logo"
        }
      ],
      description: "One of Nepal's most loved indie bands, known for their honest lyrics and a sound that blends folk and rock.",
      socialMedia: {
        instagram: "https://www.instagram.com/elements.the/",
        youtube: "https://www.youtube.com/@TheElementsNepal",
      },
    },
    {
      id: 3,
      name: "Purna Rai and DajuBhai Haru",
      images: [
        {
          src: "/purna-rai-logo.png?height=500&width=500",
          alt: "Purna Rai and DajuBhai Haru Logo"
        },
        {
          src: "/purna-rai-photo.JPG?height=500&width=500",
          alt: "Purna Rai and DajuBhai Haru Photo"
        }
      ],
      description: "A gifted musician from Nepal, known for his raw energy and emotionally charged musical delivery.",
      socialMedia: {
        instagram: "https://www.instagram.com/purna___rai/",
        youtube: "https://www.youtube.com/@purnarai1997",
      },
    },
    {
      id: 4,
      name: "Gauley Bhai",
      images: [
        {
          src: "/gauley-bhai-photo.jpg?height=500&width=500",
          alt: "Gauley Bhai Logo"
        },
        {
          src: "/gauley-bhai-logo.jpg?height=500&width=500",
          alt: "Gauley Bhai Photo"
        }
      ],
      description: "One of Nepal's most loved indie bands, known for their honest lyrics and a sound that blends folk and rock.",
      socialMedia: {
        instagram: "https://www.instagram.com/gauleybhai/",
        youtube: "https://www.youtube.com/@gauleybhai",
      },
    },
  ]

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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ArtistCard({ artist }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Set up the image rotation every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % artist.images.length)
    }, 2000)

    // Clean up the interval when component unmounts
    return () => clearInterval(interval)
  }, [artist.images.length])

  return (
    <Card className="overflow-hidden bg-gray-800 transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-[250px] w-full overflow-hidden">
        {artist.images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
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
          <a href={artist.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-primary">
            <Instagram className="h-5 w-5" />
          </a>
          <a href={artist.socialMedia.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-primary">
            <Youtube className="h-5 w-5" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
