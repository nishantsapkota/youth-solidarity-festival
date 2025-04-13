"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Music, Film, Palette, Users } from "lucide-react"

export default function Schedule() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeDay, setActiveDay] = useState("day1")

  return (
    <section id="schedule" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">Event Schedule</h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
          <p className="mt-4 text-xl text-gray-600">January 10-12, 2025</p>
        </motion.div>

        <Tabs defaultValue="day1" className="w-full" onValueChange={setActiveDay}>
          <div className="mb-8 flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="day1" className="text-sm sm:text-base">
                Day 1
              </TabsTrigger>
              <TabsTrigger value="day2" className="text-sm sm:text-base">
                Day 2
              </TabsTrigger>
              <TabsTrigger value="day3" className="text-sm sm:text-base">
                Day 3
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="day1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid gap-4 md:grid-cols-2"
            >
              <ScheduleCard
                time="10:00 AM - 12:00 PM"
                title="Opening Ceremony"
                description="Official inauguration of Youth Solidarity Festival 2025"
                icon={<Users className="h-5 w-5" />}
              />
              <ScheduleCard
                time="12:30 PM - 2:30 PM"
                title="Inter-College Band Competition"
                description="Preliminary rounds featuring talented college bands"
                icon={<Music className="h-5 w-5" />}
              />
              <ScheduleCard
                time="3:00 PM - 5:00 PM"
                title="Film Festival"
                description="Screening of short films by young filmmakers"
                icon={<Film className="h-5 w-5" />}
              />
              <ScheduleCard
                time="6:00 PM - 9:00 PM"
                title="Concert: Day 1"
                description="Featuring Pahenlo Batti Muni and The Axe Band-Nepali"
                icon={<Music className="h-5 w-5" />}
              />
            </motion.div>
          </TabsContent>

          <TabsContent value="day2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid gap-4 md:grid-cols-2"
            >
              <ScheduleCard
                time="10:00 AM - 12:00 PM"
                title="Art Exhibition"
                description="Showcase of artwork by students from the School of Arts"
                icon={<Palette className="h-5 w-5" />}
              />
              <ScheduleCard
                time="12:30 PM - 2:30 PM"
                title="Literature Festival"
                description="Poetry readings and literary discussions"
                icon={<Users className="h-5 w-5" />}
              />
              <ScheduleCard
                time="3:00 PM - 5:00 PM"
                title="Inter-College Band Competition"
                description="Final rounds with the top bands"
                icon={<Music className="h-5 w-5" />}
              />
              <ScheduleCard
                time="6:00 PM - 9:00 PM"
                title="Concert: Day 2"
                description="Featuring Sabin Rai & The Pharaoh and Mukti and Revival"
                icon={<Music className="h-5 w-5" />}
              />
            </motion.div>
          </TabsContent>

          <TabsContent value="day3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid gap-4 md:grid-cols-2"
            >
              <ScheduleCard
                time="10:00 AM - 12:00 PM"
                title="Youth Conference"
                description="Panel discussions on youth empowerment and national solidarity"
                icon={<Users className="h-5 w-5" />}
              />
              <ScheduleCard
                time="12:30 PM - 2:30 PM"
                title="Award Ceremony"
                description="Recognizing winners of various competitions"
                icon={<Users className="h-5 w-5" />}
              />
              <ScheduleCard
                time="3:00 PM - 5:00 PM"
                title="Theater Sessions"
                description="Drama performances by university students"
                icon={<Users className="h-5 w-5" />}
              />
              <ScheduleCard
                time="6:00 PM - 10:00 PM"
                title="Grand Finale Concert"
                description="Featuring ASM and Nabin K. Bhattarai"
                icon={<Music className="h-5 w-5" />}
              />
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function ScheduleCard({ time, title, description, icon }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row">
          <div className="flex items-center justify-center bg-primary p-4 text-white sm:w-1/3">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-medium">{time}</span>
            </div>
          </div>
          <div className="p-4 sm:w-2/3">
            <div className="mb-2 flex items-center gap-2">
              {icon}
              <h3 className="font-bold">{title}</h3>
            </div>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

