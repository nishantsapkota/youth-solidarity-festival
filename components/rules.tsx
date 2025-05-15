"use client"

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AlertTriangle, Info } from 'lucide-react'

export default function FestivalRules() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">Festival Rules & Regulations</h2>
            <p className="text-lg text-gray-600">
              Please read and understand these rules before attending the event. Your ticket purchase constitutes acceptance of these terms.
            </p>
          </div>

          <div className="mb-6 rounded-lg border border-orange-200 bg-orange-50 p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
              <div>
                <h3 className="font-bold text-orange-700">Important Notice</h3>
                <p className="text-orange-700">
                  By purchasing a ticket and attending this event, you agree to all terms and conditions listed below.
                  Rights of admission are reserved.
                </p>
              </div>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">Entry & General Policies</AccordionTrigger>
              <AccordionContent>
                <ul className="ml-6 list-decimal space-y-3 text-gray-700">
                  <li>No re-entry will be allowed once you enter the venue.</li>
                  <li>Tickets are Non-Refundable & Non-Transferable unless the event is canceled.</li>
                  <li>The ticket buyers are completely responsible for themselves and their dependents.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">Liability & Responsibility</AccordionTrigger>
              <AccordionContent>
                <ul className="ml-6 list-decimal start-4 space-y-3 text-gray-700">
                  <li>The event organizer or ticketing partner will not take responsibility for any personal belongings, claims or risk of any unforeseen incident caused directly or indirectly during the event.</li>
                  <li>The organizer reserves the right to refuse entry or eject attendees engaging in disruptive, dangerous, or illegal activities & No weapons or sharp objects are allowed and will be reported to the authorities if found.</li>
                  <li>If the ticket is scanned and, under any circumstances, entry is denied, the ticketing partner or any associated entities will not be held liable, and no refund will be provided.</li>
                  <li>The organizer shall not be liable for any delay or cancellation of the event due to any unforeseeable circumstances.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">Conduct & Media Rights</AccordionTrigger>
              <AccordionContent>
                <ul className="ml-6 list-decimal start-6 space-y-3 text-gray-700">
                  <li>By attending the event, you consent to being filmed, photographed, or recorded by the event organizers for promotional purposes without any compensation.</li>
                  <li>Attendees are expected to behave respectfully towards other attendees, staff, and performers. Harassment, discrimination, or any form of violence will not be tolerated and may result in ejection from the venue without refund.</li>
                  <li>The organizer reserves the right to modify these terms and conditions at any time. Please review the terms regularly to stay informed of any changes, you are agreeing to the T&C once you buy the tickets.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-8 rounded-lg border border-red-200 bg-red-50 p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
              <div>
                <h3 className="font-bold text-red-700">Rights of Admission Reserved</h3>
                <p className="text-red-700">
                  Management reserves the right to refuse admission or remove any person from the venue at their discretion.
                  All terms and conditions are subject to change without prior notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
