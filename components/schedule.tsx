"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Music, Film, Palette, Users, BookOpen, Trophy, Mic, Store } from "lucide-react"

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
          <p className="mt-4 text-xl text-gray-600">May 30-31, 2025</p>
        </motion.div>

        <Tabs defaultValue="day1" className="w-full" onValueChange={setActiveDay}>
          <div className="mb-8 flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="day1" className="text-sm sm:text-base">
                May 30 - Literature Day
              </TabsTrigger>
              <TabsTrigger value="day2" className="text-sm sm:text-base">
                May 31 - Main Event
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="day1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <div className="mb-6 rounded-lg bg-primary/10 p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Literature Festival & Inauguration Ceremony</h3>
                <p className="text-gray-600 mb-2">
                  <strong>Venue:</strong> CV Raman Hall, KU
                </p>
                <p className="text-gray-600">
                  <strong>Chief Guest:</strong> Hon. Foreign Minister Dr. Arzu Rana Deuba
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <ScheduleCard
                  time="9:00 AM - 10:00 AM"
                  title="Registration & Welcome"
                  description="Participant registration and welcome refreshments"
                  icon={<Users className="h-5 w-5" />}
                />
                <ScheduleCard
                  time="10:00 AM - 11:00 AM"
                  title="Inauguration Ceremony"
                  description="Official inauguration by Hon. Foreign Minister Dr. Arzu Rana Deuba"
                  icon={<Mic className="h-5 w-5" />}
                />
                <ScheduleCard
                  time="11:00 AM - 12:30 PM"
                  title="Panel Discussions"
                  description="Literature, identity, and Nepali culture discussions"
                  icon={<BookOpen className="h-5 w-5" />}
                />
                <ScheduleCard
                  time="12:30 PM - 1:30 PM"
                  title="Lunch Break"
                  description="Networking lunch for participants"
                  icon={<Users className="h-5 w-5" />}
                />
                <ScheduleCard
                  time="1:30 PM - 3:00 PM"
                  title="Poetry Recitals"
                  description="Poetry readings by renowned and emerging poets"
                  icon={<BookOpen className="h-5 w-5" />}
                />
                <ScheduleCard
                  time="3:00 PM - 4:00 PM"
                  title="Book Launches"
                  description="Launch of new publications and literary works"
                  icon={<BookOpen className="h-5 w-5" />}
                />
                <ScheduleCard
                  time="4:00 PM - 5:00 PM"
                  title="Youth Competitions"
                  description="Literary competitions and creative writing contests"
                  icon={<Trophy className="h-5 w-5" />}
                />
                <ScheduleCard
                  time="5:00 PM - 7:00 PM"
                  title="Cultural Performances & Exhibitions"
                  description="Cultural shows and art exhibitions celebrating Nepali heritage"
                  icon={<Palette className="h-5 w-5" />}
                />
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="day2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <div className="mb-6 rounded-lg bg-primary/10 p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Youth Solidarity KU Festival 2025</h3>
                <p className="text-gray-600">
                  <strong>Venue:</strong> KU Football Ground
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <ScheduleCard
                  time="10:00 AM - 12:00 PM"
                  title="Event Setup & Registration"
                  description="Participant registration and event ground preparation"
                  icon={<Users className="h-5 w-5" />}
                />
                <ScheduleCard
                  time="12:00 PM - 2:00 PM"
                  title="Food Courts & Stalls Opening"
                  description="Food courts, vendor stalls, and games begin"
                  icon={<Store className="h-5 w-5" />}
                />
                <ScheduleCard
                  time="2:00 PM - 3:30 PM"
                  title="John Rai & the Locals"
                  description="Soulful folk music performance"
                  icon={<Music className="h-5 w-5" />}
                />
                <ScheduleCard
                  time="4:00 PM - 5:30 PM"
                  title="Purna Rai & DajuBhai Haru"
                  description="Energetic rock and contemporary music"
                  icon={<Music className="h-5 w-5" />}
                />
                <ScheduleCard
                  time="6:00 PM - 7:30 PM"
                  title="Gauley Bhai"
                  description="Popular hits and crowd favorites"
                  icon={<Music className="h-5 w-5" />}
                />
                <ScheduleCard
                  time="8:00 PM - 10:00 PM"
                  title="Elements"
                  description="Fusion music and grand finale performance"
                  icon={<Music className="h-5 w-5" />}
                />
              </div>

              <div className="mt-6 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 p-4">
                <h4 className="text-lg font-bold text-gray-800 mb-2">Additional Activities Throughout the Day</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Food Courts with diverse cuisines</li>
                  <li>• Vendor stalls and exhibitions</li>
                  <li>• Interactive games and activities</li>
                  <li>• Photo booths and memory corners</li>
                </ul>
              </div>
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
