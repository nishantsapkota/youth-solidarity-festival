"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Flag, Heart, Music, Store, Calendar, ArrowRight, Mic, Globe, Palette, ChevronDown } from "lucide-react"
import { Users } from "lucide-react"

function TimelineItem({ year, side, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative mb-12 flex ${side === "left" ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
    >
      <div className={`hidden md:block md:w-1/2 ${side === "left" ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
        {side === "left" ? (
          children
        ) : (
          <div className="py-4 px-6 bg-primary text-white inline-block rounded-lg font-bold">{year}</div>
        )}
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 z-10">
        <div className="h-4 w-4 rounded-full bg-primary"></div>
      </div>

      <div className={`w-full md:w-1/2 ${side === "left" ? "md:text-left md:pl-8" : "md:text-right md:pr-8"}`}>
        <div className="md:hidden py-2 px-4 bg-primary text-white inline-block rounded-lg font-bold mb-4">{year}</div>
        {side === "left" ? <div className="py-4 px-6 bg-white rounded-lg shadow-sm">{children}</div> : children}
      </div>
    </motion.div>
  )
}

function CounterCard({ icon, value, label }) {
  const [count, setCount] = useState(0)
  const [inViewport, setInViewport] = useState(false)

  useEffect(() => {
    if (!inViewport) return

    let start = 0
    const end = value;
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start > end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value, inViewport])

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onViewportEnter={() => setInViewport(true)}
      className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-all duration-300"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <div className="text-3xl font-bold text-gray-800 mb-1">{count.toLocaleString()}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </motion.div>
  )
}

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-2">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">About The Festival</h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
        </motion.div>

        {/* Interactive Tabs Section */}
        <div className="mb-16">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="about" className="text-sm sm:text-base">
                About
              </TabsTrigger>
              <TabsTrigger value="theme" className="text-sm sm:text-base">
                Theme
              </TabsTrigger>
              <TabsTrigger value="history" className="text-sm sm:text-base">
                History
              </TabsTrigger>
            </TabsList>

            <TabsContent value="about">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="/coverpage.jpg?height=600&width=1200&text=Festival"
                    alt="Youth Solidarity Festival"
                    width={1200}
                    height={600}
                    className="w-full object-cover h-[300px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Youth Solidarity Festival</h3>
                      <p className="text-white/90">Bringing together youth from across Nepal</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600">
                  The Youth Solidarity Festival is one of the most iconic events held at Kathmandu University, known for
                  bringing together young people from all over the country to celebrate art, music, and culture. Having
                  originally been organized until 2010, the festival saw a revival in 2023 after a 13-year hiatus.
                </p>
                <p className="text-gray-600">
                  Its return has been met with overwhelming enthusiasm, making it a landmark occasion that unites
                  students and the community in the spirit of youth, creativity, and national solidarity.
                </p>
              </motion.div>
            </TabsContent>

            <TabsContent value="theme">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {["Nationality", "Solidarity", "Unity"].map((value, index) => (
                    <motion.div
                      key={value}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        {index === 0 && <Flag className="w-6 h-6 text-primary" />}
                        {index === 1 && <Users className="w-6 h-6 text-primary" />}
                        {index === 2 && <Heart className="w-6 h-6 text-primary" />}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{value}</h3>
                      <p className="text-gray-600">
                        {index === 0 && "Celebrating our shared Nepali identity and cultural heritage."}
                        {index === 1 && "Building bridges between diverse communities and backgrounds."}
                        {index === 2 && "Fostering a sense of togetherness and collective purpose."}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <p className="text-gray-600 mt-6">
                  "Youth Solidarity" is a transformative event designed to create a platform that unites and empowers
                  young individuals from various backgrounds, cultures, and perspectives. Hosted at the prestigious
                  Kathmandu University, the event aims to harness the potential of the youth, encouraging them to
                  collaborate, share their talents, and engage in meaningful discussions.
                </p>
              </motion.div>
            </TabsContent>

            <TabsContent value="history">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="relative">
                  {/* Timeline */}
                  <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-200"></div>

                  {/* 2011-2022 */}
                  <TimelineItem year="2011-2022" side="right">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Hiatus Period</h3>
                    <p className="text-gray-600">
                      After the successful inaugural event, the festival went on a hiatus for 13 years due to various
                      circumstances. During this time, the legacy of the first festival continued to inspire the
                      university community.
                    </p>
                  </TimelineItem>

                  {/* 2023 Event */}
                  <TimelineItem year="2023" side="right">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Grand Revival</h3>
                    <p className="text-gray-600">
                      The Youth Solidarity Festival returned with renewed vigor, featuring performances from renowned
                      artists such as ASM, Nabin K. Bhattarai, Sabin Rai & The Pharaoh, Mukti and Revival, and more.
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm text-gray-600">6,500+ attendees</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Music className="h-4 w-4 text-primary" />
                        <span className="text-sm text-gray-600">6 national artists</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Store className="h-4 w-4 text-primary" />
                        <span className="text-sm text-gray-600">60+ stalls</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm text-gray-600">3-day event</span>
                      </div>
                    </div>
                  </TimelineItem>

                  {/* 2025 Event */}
                  <TimelineItem year="2025" side="right">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Upcoming Festival</h3>
                    <p className="text-gray-600">
                      Building on the success of the 2023 revival, the 2025 festival promises to be bigger and better,
                      with more artists, activities, and opportunities for youth engagement and expression.
                    </p>
                    <Button variant="outline" className="mt-4 group">
                      <span>Join us in May 2025</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </TimelineItem>
                </div>
              </motion.div>
            </TabsContent>         </Tabs>
        </div>

        {/* Key Highlights Section with Counter Animation */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Festival Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <CounterCard icon={<Music className="h-8 w-8 text-primary" />} value={4} label="Live Performances" />
            <CounterCard icon={<Users className="h-8 w-8 text-primary" />} value={6500} label="Expected Attendees" />
            <CounterCard icon={<Calendar className="h-8 w-8 text-primary" />} value={2} label="Days of Celebration" />
            <CounterCard icon={<Store className="h-8 w-8 text-primary" />} value={40} label="Food & Activity Stalls" />
          </div>
        </motion.div>

        {/* Interactive Goals Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-lg bg-gray-50 p-8 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Our Mission</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative">
              <Image
                src="/logo.png?height=600&width=800&text=Youth"
                alt="Youth Solidarity"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 justify-center flex items-center">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium group">
                    <div className="flex items-center w-full justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                            <Mic className="h-5 w-5 text-primary" />
                          </div>
                          <motion.div
                            className="absolute inset-0 rounded-full border border-primary/30"
                            animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                          />
                        </div>
                        <span className="group-hover:text-primary transition-colors duration-300">
                          Empower Youth Voices
                        </span>
                      </div>
                      <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      We aim to create a platform where young people can express themselves freely through art, music,
                      literature, and dialogue. By amplifying youth voices, we hope to inspire positive change in
                      society.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium group">
                    <div className="flex items-center w-full justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                            <Globe className="h-5 w-5 text-primary" />
                          </div>
                          <motion.div
                            className="absolute inset-0 rounded-full border border-primary/30"
                            animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                          />
                        </div>
                        <span className="group-hover:text-primary transition-colors duration-300">
                          Foster Cultural Exchange
                        </span>
                      </div>
                      <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      The festival brings together diverse cultural expressions from across Nepal, promoting
                      understanding and appreciation of our rich heritage while building bridges between different
                      communities.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium group">
                    <div className="flex items-center w-full justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                            <Palette className="h-5 w-5 text-primary" />
                          </div>
                          <motion.div
                            className="absolute inset-0 rounded-full border border-primary/30"
                            animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                          />
                        </div>
                        <span className="group-hover:text-primary transition-colors duration-300">
                          Promote Artistic Excellence
                        </span>
                      </div>
                      <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Through competitions, exhibitions, and performances, we encourage young artists to hone their
                      craft and showcase their talents to a wider audience, fostering a vibrant creative ecosystem.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium group">
                    <div className="flex items-center w-full justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                            <Users className="h-5 w-5 text-primary" />
                          </div>
                          <motion.div
                            className="absolute inset-0 rounded-full border border-primary/30"
                            animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                          />
                        </div>
                        <span className="group-hover:text-primary transition-colors duration-300">
                          Build Community Solidarity
                        </span>
                      </div>
                      <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Beyond entertainment, the festival serves as a catalyst for community building, bringing together
                      students, faculty, local residents, and visitors in a celebration of shared values and
                      aspirations.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

