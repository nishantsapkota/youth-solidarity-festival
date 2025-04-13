"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Calendar, Clock, MapPin } from "lucide-react"

export default function Tickets() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const ticketTypes = [
    {
      id: 1,
      name: "Single Day Pass",
      price: "Rs. 1,000",
      description: "Access to all events for a single day",
      features: ["Access to concerts", "Food stalls", "Art exhibitions", "Film screenings"],
      popular: false,
    },
    {
      id: 2,
      name: "Full Festival Pass",
      price: "Rs. 2,500",
      description: "Complete 3-day access to all festival events",
      features: [
        "Access to all concerts",
        "All competitions and exhibitions",
        "Workshop participation",
        "Festival merchandise",
        "Priority seating",
      ],
      popular: true,
    },
    {
      id: 3,
      name: "VIP Experience",
      price: "Rs. 5,000",
      description: "Premium experience with exclusive benefits",
      features: [
        "All Full Festival Pass benefits",
        "Backstage access",
        "Meet & greet with artists",
        "Exclusive lounge access",
        "Complimentary food and drinks",
      ],
      popular: false,
    },
  ]

  return (
    <section id="tickets" className="bg-gray-900 py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">Get Your Tickets</h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
          <p className="mt-4 text-xl text-gray-300">Secure your spot at Youth Solidarity Festival 2025</p>
        </motion.div>

        <div className="mb-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ticketTypes.map((ticket, index) => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
                  ticket.popular ? "border-primary" : "bg-gray-800"
                }`}
              >
                {ticket.popular && (
                  <div className="absolute right-0 top-0 bg-primary px-4 py-1 text-sm font-bold text-white">
                    POPULAR
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{ticket.name}</CardTitle>
                  <CardDescription className="text-gray-400">{ticket.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 text-3xl font-bold text-white">{ticket.price}</div>
                  <ul className="space-y-2">
                    {ticket.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary font-bold text-white hover:bg-primary/90">Buy Now</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-lg bg-gray-800 p-6"
        >
          <h3 className="mb-4 text-xl font-bold">Event Details</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Date</p>
                <p className="text-gray-400">January 10-12, 2025</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Time</p>
                <p className="text-gray-400">10:00 AM - 10:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-400">Kathmandu University, Dhulikhel</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

