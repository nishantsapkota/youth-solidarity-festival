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

  const backgroundImage =
    "https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/469990892_420099277847097_7898263344321235436_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHkuZCg7X7tZweOil4phE1oJ7py5NyKS1cnunLk3IpLV1TJtnuVE63i0unpysjRCoFbW3y1JTpvDU5eBh2XxcfE&_nc_ohc=MCyNd78r7FUQ7kNvgGYgSjI&_nc_oc=AdnAODeNGnvMazg26GaW_CfWYKDI-22U7gyzA8ImT-cSrkCw2b-xS2DMhGZP8qVa5YwZjDuMqlvjC0Ub1_dGb_R6&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=roPKNU70cKCs3qNQC8y54Q&oh=00_AYHPVEONBAv2FLE-5lyJSTjrTuSso48XOaKsSaYY6hfQbw&oe=67F04FED"

  useEffect(() => {
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
      // Dynamically import tsparticles only on client side
      const { loadFull } = await import("tsparticles")
      await loadFull(engine)
      particlesInit.current = true
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
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
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
            fpsLimit: 120,
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
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
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
      </div>

      {/* Background image slideshow */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="Festival background"
          fill
          className="object-cover"
          style={{ filter: "brightness(0.5)" }}
          priority
          unoptimized={true} // For external URL
        />
      </div>

      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/30 to-black/70"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(230, 57, 70, 0.3) 0%, rgba(0, 0, 0, 0) 70%)",
          mixBlendMode: "overlay",
        }}
      ></div>

      {/* Content with parallax effect */}
      <div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center"
        style={{ transform: `translateY(${typeof window !== "undefined" ? scrollY * 0.3 : 0}px)` }}
      >
        {/* Animated title with letter animation */}
        <div className="mb-6 overflow-hidden p-6 rounded-lg">
          <div className="flex justify-center">
            {titleText.split("").map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
          <div className="mt-2 flex justify-center">
            {subtitleText.split("").map((letter, index) => (
              <motion.span
                key={index}
                custom={index + titleText.length}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl lg:text-6xl"
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
          className="mb-8 space-y-2 p-4 rounded-lg"
        >
          <div className="flex items-center justify-center space-x-2">
            <Calendar className="h-5 w-5 text-primary" />
            <p className="text-xl font-medium text-white md:text-2xl">MAY 31ST 2025</p>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <MapPin className="h-5 w-5 text-primary" />
            <p className="text-lg text-white md:text-xl">KATHMANDU UNIVERSITY, DHULIKHEL</p>
          </div>
        </motion.div>

        {/* Animated buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-primary font-bold text-white hover:bg-primary/90"
          >
            <span className="relative z-10">BUY TICKETS</span>
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0"></span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group relative overflow-hidden border-white text-black hover:bg-gradient-to-r hover:from-white/5 hover:via-white/20 hover:to-white/5"
          >
            <span className="relative z-10">LEARN MORE</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary/10 via-primary/25 to-primary/10 transition-transform duration-300 group-hover:translate-x-0"></span>
          </Button>
        </motion.div>

        {/* Floating music notes animation */}
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: typeof window !== "undefined" ? Math.random() * window.innerWidth : 100 * i,
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
              <Music className="h-8 w-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

