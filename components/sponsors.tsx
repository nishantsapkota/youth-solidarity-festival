"use client"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function Sponsors() {
  // Method 1: Using onClick handler
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Prospectus.pdf'
    link.download = 'prospectus.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Sponsor data with categories, names, and logo paths
  const sponsorCategories = [
    {
      title: "Powered By:",
      sponsors: [
        { id: 1, name: "Evolve Education and Migration", logoPath: "/sponsors/evolve_logo.jpeg", website: "https://evolvemigration.com.au/" },
      ],
    },
    // Commented out sponsor categories
    // {
    //   title: "Travel Partner",
    //   sponsors: [
    //     { id: 3, name: "SkyWays", logoPath: "/sponsors/skyways-logo.png", website: "https://skyways.example.com" },
    //   ],
    // },
    // {
    //   title: "Food Partner",
    //   sponsors: [
    //     { id: 4, name: "Tasty Bites", logoPath: "/sponsors/tastybites-logo.png", website: "https://tastybites.example.com" },
    //   ],
    // },
    // {
    //   title: "Technology Partner",
    //   sponsors: [
    //     { id: 5, name: "TechNova", logoPath: "/sponsors/technova-logo.png", website: "https://technova.example.com" },
    //   ],
    // },
    // {
    //   title: "Media Partner",
    //   sponsors: [
    //     { id: 6, name: "MediaMax", logoPath: "/sponsors/mediamax-logo.png", website: "https://mediamax.example.com" },
    //   ],
    // },
  ]

  return (
    <>
      {/* Prospectus Download Section */}
      <section id="prospectus" className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Download Sponsorship Prospectus</h3>
                <p className="text-gray-600">
                  Get detailed information about sponsorship benefits, audience demographics, and more.
                </p>
              </div>
              <Button
                onClick={handleDownload}
                className="bg-primary font-bold text-white hover:bg-primary/90"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </section>
    
      {/* Sponsors Section */}
      <section id="sponsors" className="bg-white py-20">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Sponsors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're grateful to all our sponsors who make this event possible. Their support helps us create an exceptional experience for all attendees.
            </p>
          </div>

        {/* Sponsor Categories */}
        <div className="space-y-12">
          {sponsorCategories.map((category, index) => (
            <div key={index} className="sponsor-category">
              {/* Left-aligned category title */}
              <h4 className="text-xl font-semibold text-gray-700 mb-6 text-left">
                {category.title}
              </h4>
              
              {/* Sponsors grid using full width */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                {category.sponsors.map((sponsor) => (
                  <div key={sponsor.id} className="flex items-center justify-center">
                    <a 
                      href={sponsor.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <div className="relative h-24 w-full">
                        <Image
                          src={sponsor.logoPath || `/placeholder.svg?height=100&width=200&text=${sponsor.name}`}
                          alt={`${sponsor.name} - ${category.title} Sponsor`}
                          fill
                          className="object-contain"
                          onError={(e) => {
                            e.currentTarget.src = `/placeholder.svg?height=100&width=200&text=${sponsor.name}`;
                          }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-center font-medium text-black">{sponsor.name}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}