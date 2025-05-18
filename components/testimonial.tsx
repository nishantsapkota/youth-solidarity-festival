"use client"
import Image from "next/image"

export default function MessageFromClub() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-lg bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-center text-black mb-10">Message from the Club</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Advisor */}
            <div className="bg-gradient-to-br from-gray-100 to-pink-100 rounded-xl shadow-2xl p-6 flex flex-col items-center text-center border border-gray-200 hover:translate-y-[-12px] hover:scale-[1.04] transition-transform duration-300">
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                <Image src="/ganesh.jpg" alt="Ganesh Thapa" width={96} height={96} className="object-cover w-full h-full" />
              </div>
              <h4 className="text-lg font-semibold text-primary">Mr. Ganesh Thapa</h4>
              <p className="text-sm text-gray-500 mb-2">Advisor</p>
              <p className="text-black text-base">
                As an advisor, I have witnessed the Youth Solidarity Festival grow into a powerful platform for youth expression through art, music, and culture. The 2023 revival was not just a return, but a reawakening of unity and creativity. The enthusiasm since then proves its lasting impact. I am proud of the students' dedication and hope this year's festival continues to strengthen youth connections and national solidarity.
              </p>
            </div>
            
            {/* President */}
            <div className="bg-gradient-to-br from-gray-100 to-pink-100 rounded-xl shadow-2xl p-6 flex flex-col items-center text-center border border-gray-200 hover:translate-y-[-12px] hover:scale-[1.04] transition-transform duration-300">
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                <Image src="/nischal.jpg" alt="Nishchal Rasaili" width={96} height={96} className="object-cover w-full h-full" />
              </div>
              <h4 className="text-lg font-semibold text-primary">Mr. Nishchal Rasaili</h4>
              <p className="text-sm text-gray-500 mb-2">President, Youth Solidarity Club</p>
              <p className="text-black text-base">
                As President of the Youth Solidarity Club, I see the festival as more than an event—it is a movement driven by youth passion and purpose. Since 2023, it has shown what young people can accomplish with the right platform. We aim to create a space where every voice counts. I welcome all supporters to join us in making the 2025 edition a landmark celebration of Nepal's youth.
              </p>
            </div>
            
            {/* Event Coordinator */}
            <div className="bg-gradient-to-br from-gray-100 to-pink-100 rounded-xl shadow-2xl p-6 flex flex-col items-center text-center border border-gray-200 hover:translate-y-[-12px] hover:scale-[1.04] transition-transform duration-300">
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                <Image src="/nishant.jpg" alt="Nishant Sapkota" width={96} height={96} className="object-cover w-full h-full" />
              </div>
              <h4 className="text-lg font-semibold text-primary">Mr. Nishant Sapkota</h4>
              <p className="text-sm text-gray-500 mb-2">Event Coordinator</p>
              <p className="text-black text-base">
                Coordinating this festival is both a privilege and a joy. It is where youth from across Nepal unite through creativity and ideas. Despite the challenges, the energy from students, artists, and partners keeps us going. Every part of the event is designed to inspire connection. I invite everyone who believes in youth potential to join us in creating something extraordinary for 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}