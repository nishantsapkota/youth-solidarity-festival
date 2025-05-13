"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
      images: [
        {
          src: "/john-rai-logo.jpg?height=500&width=500", 
          alt: "John Rai and The Locals Logo"
        },
        {
          src: "/john-rai-photo.jpg?height=500&width=500", 
          alt: "John Rai and The Locals Photo"
        }
      ],
      description: "One of Nepal's most popular hip-hop artists known for his unique style and powerful lyrics.",
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
          src: "/placeholder.svg?height=500&width=500", 
          alt: "The Elements Logo"
        },
        {
          src: "/placeholder.svg?height=500&width=500", 
          alt: "The Elements Photo"
        }
      ],
      description: "A legendary figure in Nepali music with decades of hit songs and a massive following.",
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
          src: "/purna-rai-photo.jpg?height=500&width=500", 
          alt: "Purna Rai and DajuBhai Haru Photo"
        }
      ],
      description: "Known for their energetic performances and fusion of rock with traditional Nepali sounds.",
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
      description: "Pioneers of Nepali rock music with a career spanning over two decades.",
      socialMedia: {
        instagram: "https://www.instagram.com/gauleybhai/",
        youtube: "https://www.youtube.com/@gauleybhai",
      },
    }, 
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  
  // Create a circular array of visible artists
  const getVisibleArtists = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % artists.length;
      result.push(artists[index]);
    }
    return result;
  }

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % artists.length);
  }

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + artists.length) % artists.length);
  }

  const visibleArtists = getVisibleArtists();

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
              aria-label="Previous artists"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <div className="w-full overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={{ 
                    x: direction > 0 ? 300 : -300,
                    opacity: 0
                  }}
                  animate={{ 
                    x: 0,
                    opacity: 1
                  }}
                  exit={{ 
                    x: direction < 0 ? 300 : -300,
                    opacity: 0
                  }}
                  transition={{ duration: 0.5 }}
                  className="grid gap-6 md:grid-cols-3"
                >
                  {visibleArtists.map((artist) => (
                    <ArtistCard key={artist.id} artist={artist} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 text-white hover:bg-white/10 md:-right-12"
              onClick={nextSlide}
              aria-label="Next artists"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: artists.length }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-8 rounded-full ${
                currentIndex === index ? "bg-primary" : "bg-gray-600"
              }`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              aria-label={`Go to artist ${index + 1}`}
            ></button>
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
      <div className="relative h-[300px] w-full overflow-hidden">
        {artist.images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
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