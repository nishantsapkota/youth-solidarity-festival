"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { MapPin, Calendar, Users } from "lucide-react"

export default function Venue() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="venue" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">Our Venue</h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
          <p className="mt-4 text-xl text-gray-600">Kathmandu University, Dhulikhel</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] overflow-hidden rounded-lg shadow-xl"
          >
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Kathmandu University Campus"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800">Kathmandu University</h3>
            <p className="text-gray-600">
              Kathmandu University (KU), founded in December 1991, stands as a leading autonomous, not-for-profit public
              institution dedicated to fostering academic excellence across a wide array of disciplines. With a mission
              to provide quality education for leadership and a vision of serving humanity through knowledge and
              technology, KU has garnered a strong reputation both nationally and internationally.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="text-gray-700">28 Kilo, Dhulikhel-4, Kavre, Nepal</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-primary" />
                <span className="text-gray-700">January 2025</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <span className="text-gray-700">Expected attendance: 6,500+</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-bold text-gray-800">Venue Layout</h3>
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=600&width=1200" alt="Venue Layout" fill className="object-contain" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-md bg-gray-100 p-3 text-center">
                <p className="font-medium text-gray-800">Stage</p>
              </div>
              <div className="rounded-md bg-gray-100 p-3 text-center">
                <p className="font-medium text-gray-800">Stalls Area</p>
              </div>
              <div className="rounded-md bg-gray-100 p-3 text-center">
                <p className="font-medium text-gray-800">Green Room</p>
              </div>
              <div className="rounded-md bg-gray-100 p-3 text-center">
                <p className="font-medium text-gray-800">Parking</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

