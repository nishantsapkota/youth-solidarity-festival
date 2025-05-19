"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion, useAnimation } from "framer-motion"
import { Music, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import dynamic from "next/dynamic"
import type { Engine } from "tsparticles-engine"

// Dynamically import Particles with no SSR
const Particles = dynamic(() => import("react-particles"), { ssr: false })

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const controls = useAnimation()
  const particlesInit = useRef(false)
  const [isMounted, setIsMounted] = useState(false)

  const backgroundImage = "/coverpage.jpg"

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    // Animate title on load
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [controls])

  const particlesInitialization = async (engine: Engine) => {
    if (!particlesInit.current) {
      try {
        // Dynamically import tsparticles only on client side
        const { loadFull } = await import("tsparticles")
        await loadFull(engine)
        particlesInit.current = true
      } catch (error) {
        console.error("Failed to initialize particles:", error)
      }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  }

  const titleText = "YOUTH SOLIDARITY"
  const subtitleText = "FESTIVAL 2025"

  return (
    <section className="relative w-full overflow-hidden bg-black min-h-screen">
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        {isMounted && (
          <Particles
            id="tsparticles"
            init={particlesInitialization}
            options={{
              fullScreen: false,
              background: {
                color: {
                  value: "transparent",
                },
              },
              fpsLimit: 60,
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.2,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 0.8,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 60,
                },
                opacity: {
                  value: 0.3,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 3 },
                },
              },
              detectRetina: true,
            }}
            className="h-full w-full"
          />
        )}
      </div>

      {/* Background image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="Festival background"
          fill
          className="object-cover w-full h-full"
          style={{ filter: "brightness(0.35)" }}
          priority
          quality={90}
        />
      </div>

      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 z-10 w-full h-full bg-gradient-to-b from-black/60 via-black/40 to-black/80"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(230, 57, 70, 0.25) 0%, rgba(0, 0, 0, 0) 70%)",
          mixBlendMode: "overlay",
        }}
      ></div>

      {/* Content with parallax effect */}
      <div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center"
        style={{
          transform: isMounted ? `translateY(${scrollY * 0.2}px)` : "none"
        }}
      >
        {/* Animated title with letter animation */}
        <div className="mb-4 sm:mb-6 overflow-hidden rounded-lg pt-8 sm:pt-0">
          <div className="flex justify-center">
            {titleText.split("").map((letter, index) => (
              <motion.span
                key={`title-${index}`}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
          <div className="mt-1 sm:mt-2 flex justify-center">
            {subtitleText.split("").map((letter, index) => (
              <motion.span
                key={`subtitle-${index}`}
                custom={index + titleText.length}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-primary"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Date and venue with icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mb-6 sm:mb-8 space-y-1 sm:space-y-2 rounded-lg"
        >
          <div className="flex items-center justify-center space-x-2">
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-white">MAY 31 2025</p>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            <p className="text-base sm:text-lg md:text-xl text-white">KATHMANDU UNIVERSITY, DHULIKHEL</p>
          </div>
        </motion.div>

        {/* Animated buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0"
        >
          <a href="https://events.khalti.com/events/ET256A5QN8J6" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-primary font-bold text-white hover:bg-primary/90 text-sm sm:text-base h-10 sm:h-12"
            >
              <span className="relative z-10">BUY TICKETS</span>
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0"></span>
            </Button>
          </a>
          <a href="#artists">
            <Button
              size="lg"
              variant="outline"
              className="group relative overflow-hidden bg-white border-white text-black hover:bg-white/90 text-sm sm:text-base h-10 sm:h-12"
            >
              <span className="relative z-10">LEARN MORE</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary/10 via-primary/25 to-primary/10 transition-transform duration-300 group-hover:translate-x-0"></span>
            </Button>
          </a>
        </motion.div>

        {/* Floating music notes animation */}
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden pointer-events-none">
          {isMounted && [...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 500),
                y: 1000,
                rotate: 0,
                opacity: 0.7,
              }}
              animate={{
                y: -100,
                rotate: 360,
                opacity: 0,
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 5,
                ease: "linear",
              }}
              className="absolute text-white/30"
            >
              <Music className={`h-6 w-6 sm:h-8 sm:w-8`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
