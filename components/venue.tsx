"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { MapPin, Calendar, Users } from "lucide-react"
import { useState, useEffect } from "react"

export default function Venue() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // State for map loading
  const [mapLoaded, setMapLoaded] = useState(false)

  // Kathmandu University coordinates
  const universityLocation = {
    lat: 27.6195,
    lng: 85.5386,
    name: "Kathmandu University, Dhulikhel"
  }

  // Initialize Leaflet map
  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined") return;

    // Function to load Leaflet CSS
    const loadLeafletCSS = () => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
      document.head.appendChild(link);
    };

    // Function to load Leaflet JS
    const loadLeafletJS = () => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
        script.onload = resolve;
        document.body.appendChild(script);
      });
    };

    // Function to initialize map
    const initMap = () => {
      const L = window.L;
      if (!L) return;

      const mapContainer = document.getElementById('ku-map');
      if (!mapContainer) return;

      // Create map centered on Kathmandu University
      const map = L.map('ku-map').setView([universityLocation.lat, universityLocation.lng], 15);

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Add marker for Kathmandu University
      L.marker([universityLocation.lat, universityLocation.lng])
        .addTo(map)
        .bindPopup(universityLocation.name)
        .openPopup();

      setMapLoaded(true);
    };

    const setupMap = async () => {
      loadLeafletCSS();
      await loadLeafletJS();
      initMap();
    };

    setupMap();

    // Cleanup function
    return () => {
      // Clean up if needed
    };
  }, []);

  return (
    <section id="venue" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">Our Venue</h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
          <p className="mt-4 text-xl text-gray-600">Kathmandu University, Dhulikhel</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] overflow-hidden rounded-lg shadow-xl"
          >
            {/* Map container */}
            <div id="ku-map" className="h-full w-full z-10 border-4 border-gray-300"></div>

            {/* Fallback if map isn't loaded */}
            {!mapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <p className="text-gray-600">Loading map...</p>
              </div>
            )}

            {/* Google Maps link button */}
            <div className="absolute bottom-4 right-4 z-20">
              <a
                href="https://maps.app.goo.gl/UHbKMAFdKrZzv6uv7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-md transition-colors hover:bg-gray-100"
              >
                <MapPin className="h-4 w-4 text-primary" />
                Find in Google Maps
              </a>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800">Kathmandu University</h3>
            <p className="text-gray-600">
              Kathmandu University (KU), founded in December 1991, stands as a leading autonomous, not-for-profit public
              institution dedicated to fostering academic excellence across a wide array of disciplines. With a mission
              to provide quality education for leadership and a vision of serving humanity through knowledge and
              technology, KU has garnered a strong reputation both nationally and internationally.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="text-gray-700">28 Kilo, Dhulikhel-4, Kavre, Nepal</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-primary" />
                <span className="text-gray-700">May 31, 2025</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <span className="text-gray-700">Expected attendance: 6,500+</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
        </motion.div>
      </div>
    </section>
  )
}
