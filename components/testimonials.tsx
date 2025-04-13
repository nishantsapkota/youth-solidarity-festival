"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      id: 1,
      name: "Rishab Shrestha",
      role: "Festival Attendee, 2023",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "The Youth Solidarity Festival 2023 was an incredible experience. The performances were amazing, and the atmosphere was electric. Can't wait for 2025!",
    },
    {
      id: 2,
      name: "Anisha Gurung",
      role: "Student Performer, 2023",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "Performing at the Youth Solidarity Festival was a dream come true. The crowd was so supportive, and the organization was flawless.",
    },
    {
      id: 3,
      name: "Bikash Tamang",
      role: "Vendor, 2023",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "As a vendor, I was impressed by the turnout. My stall was busy throughout the festival, and I made great connections with the university community.",
    },
    {
      id: 4,
      name: "Sabina Rai",
      role: "Artist, 2023",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "The energy at Kathmandu University during the festival was unmatched. The students' enthusiasm and the beautiful venue made it a memorable performance.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 2
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages)
  }

  const visibleTestimonials = testimonials.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)

  return (
    <section id="testimonials" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">What People Say</h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
          <p className="mt-4 text-xl text-gray-600">Memories from Youth Solidarity Festival 2023</p>
        </motion.div>

        <div className="relative">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 text-gray-800 hover:bg-gray-200 md:-left-12"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <div className="w-full overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 md:grid-cols-2"
              >
                {visibleTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </motion.div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 text-gray-800 hover:bg-gray-200 md:-right-12"
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
              className={`h-2 w-8 rounded-full ${currentIndex === index ? "bg-primary" : "bg-gray-400"}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full">
            <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
          </div>
        </div>
        <div className="relative">
          <Quote className="absolute -left-1 -top-1 h-8 w-8 text-primary/20" />
          <p className="pl-6 text-gray-700">{testimonial.quote}</p>
        </div>
      </CardContent>
    </Card>
  )
}

