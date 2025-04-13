"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, Camera, Filter, Shuffle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useInView } from "react-intersection-observer"

export default function Gallery() {
  // Fix the useInView hook implementation
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const controls = useAnimation()
  const containerRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const [isShuffling, setIsShuffling] = useState(false)
  const [hoveredImage, setHoveredImage] = useState(null)

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "concert", label: "Concerts" },
    { id: "activities", label: "Activities" },
    { id: "people", label: "People" },
  ]

  const images = [
    {
      id: 1,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Concert crowd at Youth Solidarity Festival 2023",
      category: "concert",
      featured: true,
      size: "large",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Band performing on stage",
      category: "concert",
      featured: false,
      size: "medium",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Art exhibition at the festival",
      category: "activities",
      featured: false,
      size: "small",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Students participating in activities",
      category: "people",
      featured: false,
      size: "medium",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Food stalls at the festival",
      category: "activities",
      featured: false,
      size: "small",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Award ceremony",
      category: "people",
      featured: true,
      size: "large",
    },
  ]

  const [filteredImages, setFilteredImages] = useState(images)
  const [selectedImage, setSelectedImage] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  useEffect(() => {
    filterImages(activeCategory)
  }, [activeCategory])

  const filterImages = (category) => {
    setIsShuffling(true)

    setTimeout(() => {
      if (category === "all") {
        setFilteredImages(images)
      } else {
        setFilteredImages(images.filter((img) => img.category === category))
      }
      setIsShuffling(false)
    }, 500)
  }

  const shuffleGallery = () => {
    setIsShuffling(true)

    setTimeout(() => {
      const shuffled = [...filteredImages].sort(() => Math.random() - 0.5)
      setFilteredImages(shuffled)
      setIsShuffling(false)
    }, 500)
  }

  const openLightbox = (image) => {
    setSelectedImage(image)
    setIsOpen(true)
  }

  const closeLightbox = () => {
    setIsOpen(false)
  }

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setSelectedImage(filteredImages[prevIndex])
  }

  const getImageSize = (size) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2 md:col-span-2 md:row-span-2"
      case "medium":
        return "col-span-2 row-span-1 md:col-span-1 md:row-span-1"
      case "small":
      default:
        return "col-span-1 row-span-1"
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="gallery" className="bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={inViewRef}
          variants={titleVariants}
          initial="hidden"
          animate={controls}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">Gallery</h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
          <p className="mt-4 text-xl text-gray-600">Memories from Youth Solidarity Festival 2023</p>
        </motion.div>

        {/* Interactive Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-3"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <Badge
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`text-sm cursor-pointer transition-all duration-300 px-4 py-2 ${
                  activeCategory === category.id ? "bg-primary hover:bg-primary/90" : "hover:bg-gray-100"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.id === "all" && <Filter className="mr-1 h-4 w-4" />}
                {category.id === "concert" && <Music className="mr-1 h-4 w-4" />}
                {category.id === "activities" && <Activity className="mr-1 h-4 w-4" />}
                {category.id === "people" && <Users className="mr-1 h-4 w-4" />}
                {category.label}
              </Badge>
            ))}
          </div>

          <Button variant="ghost" size="sm" className="ml-2 flex items-center gap-1" onClick={shuffleGallery}>
            <Shuffle className="h-4 w-4" />
            <span>Shuffle</span>
          </Button>
        </motion.div>

        {/* Masonry Gallery Grid */}
        <div ref={containerRef} className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {isShuffling ? (
              <motion.div
                key="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-primary"></div>
              </motion.div>
            ) : (
              <motion.div
                key="gallery"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid auto-rows-[minmax(180px,auto)] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
              >
                {filteredImages.map((image) => (
                  <motion.div
                    key={image.id}
                    layoutId={`image-${image.id}`}
                    variants={itemVariants}
                    exit="exit"
                    className={`${getImageSize(image.size)} group relative cursor-pointer overflow-hidden rounded-lg`}
                    onClick={() => openLightbox(image)}
                    onMouseEnter={() => setHoveredImage(image.id)}
                    onMouseLeave={() => setHoveredImage(null)}
                  >
                    <motion.div
                      className="relative h-full w-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-all duration-500"
                      />

                      {/* Hover Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="absolute bottom-0 left-0 w-full p-4">
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-white">{image.alt}</p>
                            <div className="mt-2 flex items-center">
                              <Camera className="mr-2 h-4 w-4 text-primary" />
                              <span className="text-sm text-gray-200">Click to view</span>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Featured Badge */}
                      {image.featured && (
                        <div className="absolute right-2 top-2 rounded-full bg-primary px-2 py-1 text-xs font-bold text-white">
                          Featured
                        </div>
                      )}

                      {/* Floating Dots Animation */}
                      {hoveredImage === image.id && (
                        <>
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute h-2 w-2 rounded-full bg-primary"
                              initial={{
                                x: "50%",
                                y: "50%",
                                opacity: 0.8,
                              }}
                              animate={{
                                x: `${50 + (Math.random() * 40 - 20)}%`,
                                y: `${50 + (Math.random() * 40 - 20)}%`,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 1 + Math.random(),
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "loop",
                              }}
                            />
                          ))}
                        </>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Enhanced Lightbox */}
        {isOpen && (
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="max-w-5xl bg-black/95 p-0 text-white">
              <div className="relative h-[80vh] w-full">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 z-50 text-white hover:bg-white/10"
                  onClick={closeLightbox}
                >
                  <X className="h-6 w-6" />
                </Button>

                <div className="absolute left-0 top-1/2 z-50 flex h-full -translate-y-1/2 items-center">
                  <Button variant="ghost" size="icon" className="ml-2 text-white hover:bg-white/10" onClick={prevImage}>
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                </div>

                <div className="absolute right-0 top-1/2 z-50 flex h-full -translate-y-1/2 items-center">
                  <Button variant="ghost" size="icon" className="mr-2 text-white hover:bg-white/10" onClick={nextImage}>
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage?.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-full items-center justify-center"
                  >
                    <Image
                      src={selectedImage?.src || "/placeholder.svg"}
                      alt={selectedImage?.alt}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                <motion.div
                  className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-lg font-medium text-white">{selectedImage?.alt}</p>
                  <p className="text-sm text-gray-300">
                    {categories.find((c) => c.id === selectedImage?.category)?.label}
                  </p>
                </motion.div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  )
}

// Additional icons
function Music(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}

function Activity(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}

function Users(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

