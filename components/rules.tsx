"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertTriangle, Info } from "lucide-react"

export default function Rules() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="rules" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">Rules & Regulations</h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
          <p className="mt-4 text-xl text-gray-600">Please review before attending the festival</p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <div className="mb-8 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
              <div>
                <h3 className="font-bold text-yellow-700">Important Notice</h3>
                <p className="text-yellow-700">
                  All attendees must follow these rules and regulations. Failure to comply may result in removal from
                  the event without refund.
                </p>
              </div>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">General Rules</AccordionTrigger>
              <AccordionContent>
                <ul className="ml-6 list-disc space-y-2 text-gray-700">
                  <li>All attendees must have a valid ticket for entry.</li>
                  <li>Wristbands must be worn at all times during the festival.</li>
                  <li>No re-entry after leaving the festival grounds.</li>
                  <li>The festival is a smoke-free environment except in designated areas.</li>
                  <li>No outside food or beverages are allowed.</li>
                  <li>Respect the venue and dispose of trash in designated bins.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">Prohibited Items</AccordionTrigger>
              <AccordionContent>
                <ul className="ml-6 list-disc space-y-2 text-gray-700">
                  <li>Weapons of any kind</li>
                  <li>Illegal substances</li>
                  <li>Glass containers</li>
                  <li>Professional cameras or recording equipment (without press pass)</li>
                  <li>Drones or other aerial devices</li>
                  <li>Pets (except service animals)</li>
                  <li>Fireworks or explosives</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">Code of Conduct</AccordionTrigger>
              <AccordionContent>
                <ul className="ml-6 list-disc space-y-2 text-gray-700">
                  <li>Respect all festival attendees, staff, volunteers, and performers.</li>
                  <li>Harassment or discrimination of any kind will not be tolerated.</li>
                  <li>Follow instructions from festival staff and security personnel.</li>
                  <li>Do not engage in behavior that could harm yourself or others.</li>
                  <li>Respect the personal space of others.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">Photography & Recording Policy</AccordionTrigger>
              <AccordionContent>
                <ul className="ml-6 list-disc space-y-2 text-gray-700">
                  <li>Personal photography for non-commercial use is permitted.</li>
                  <li>No professional photography or recording equipment without proper credentials.</li>
                  <li>The festival reserves the right to photograph and record the event for promotional purposes.</li>
                  <li>By attending, you consent to your image being used in festival materials.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">Refund Policy</AccordionTrigger>
              <AccordionContent>
                <ul className="ml-6 list-disc space-y-2 text-gray-700">
                  <li>Tickets are non-refundable except in case of event cancellation.</li>
                  <li>In case of cancellation, refunds will be processed within 30 days.</li>
                  <li>Tickets may be transferred to another person with prior notification to the organizers.</li>
                  <li>Lost or stolen tickets will not be replaced.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <div className="flex items-start gap-3">
              <Info className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
              <div>
                <h3 className="font-bold text-blue-700">Additional Information</h3>
                <p className="text-blue-700">
                  These rules are subject to change. Please check the official website before the event for any updates
                  or additional regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

