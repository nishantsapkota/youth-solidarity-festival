"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function Sponsors() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const sponsorTiers = [
    {
      id: 1,
      name: "Title Sponsor",
      price: "NRs. 20,00,000",
      benefits: [
        "Branding in all printed materials (X-LARGE)",
        "Company Logo on the Youth Solidarity official Website",
        "Social Media Shoutout",
        "Company Logo on Every Social Media Posts",
        "Stall in the Final event (12x12)",
        "Logo in Token of Love",
        "Mentioned in Press Release",
        "Your Company's custom giveaways through Program",
        "Company Showcase/Promo Videos/links on Social Media",
        "Company Logo on Post Event Videos",
        "Recognition during all info sessions & workshops",
        "Logos in all Certificates and other memorabilia",
        "Announcement during in Final Event (10 MIN)",
        "Host Special Session",
        "Presentation at Final Event",
        "Opening Keynote Speaker",
        "Send Mentors",
      ],
    },
    {
      id: 2,
      name: "Associate Sponsor",
      price: "NRs. 10,00,000",
      benefits: [
        "Branding in all printed materials (LARGE)",
        "Company Logo on the Youth Solidarity official Website",
        "Social Media Shoutout",
        "Company Logo on Every Social Media Posts",
        "Stall in the Final event (10x10)",
        "Logo in Token of Love",
        "Mentioned in Press Release",
        "Your Company's custom giveaways through Program",
        "Company Showcase/Promo Videos/links on Social Media",
        "Company Logo on Post Event Videos",
        "Recognition during all info sessions & workshops",
        "Logos in all Certificates and other memorabilia",
        "Announcement during in Final Event (5 MIN)",
      ],
    },
    {
      id: 3,
      name: "Powered By Sponsor",
      price: "NRs. 7,00,000",
      benefits: [
        "Branding in all printed materials (MEDIUM)",
        "Company Logo on the Youth Solidarity official Website",
        "Social Media Shoutout",
        "Company Logo on Every Social Media Posts",
        "Stall in the Final event (8x8)",
        "Logo in Token of Love",
        "Mentioned in Press Release",
      ],
    },
  ]

  return (
    <section id="sponsors" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">Sponsorship Opportunities</h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
          <p className="mt-4 text-xl text-gray-600">Partner with us for Youth Solidarity Festival 2025</p>
        </motion.div>

        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {sponsorTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription className="text-lg font-bold text-primary">{tier.price}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full bg-primary font-bold text-white hover:bg-primary/90">
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-lg bg-gray-50 p-6 shadow-sm"
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="text-xl font-bold text-gray-800">Download Sponsorship Prospectus</h3>
              <p className="text-gray-600">
                Get detailed information about sponsorship benefits, audience demographics, and more.
              </p>
            </div>
            <Button className="bg-primary font-bold text-white hover:bg-primary/90">
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </div>
        </motion.div>

        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">Our Previous Sponsors</h3>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="relative h-20 w-full grayscale transition-all duration-300 hover:grayscale-0">
                  <Image
                    src={`/placeholder.svg?height=100&width=200&text=Sponsor ${i}`}
                    alt={`Sponsor ${i}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

