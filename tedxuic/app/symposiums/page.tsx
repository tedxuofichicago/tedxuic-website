"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"

const pastEvents = [
  {
    id: "comedy-night",
    title: "Comedy Night",
    date: "November 21, 2024",
    location: "UIC Student Center East",
    image: "/pictures/past-events/ComedyNightFeature5.png",
    description:
      "A focused symposium exploring innovations in healthcare technology, policy, and practice. Join healthcare professionals, researchers, and innovators for a day of insightful discussions and networking.",
    topics: [
      "AI in Medical Diagnostics",
      "Telemedicine and Remote Patient Monitoring",
      "Health Equity and Access",
      "Future of Medical Education",
    ], 
  },
  {
    id: "voice-your-peace",
    title: "Voice Your Peace",
    date: "November 28, 2023",
    location: "UIC Student Center East",
    image: "/pictures/past-events/VoiceYourPeaceFeature.png",
    description:
      "A focused symposium exploring innovations in healthcare technology, policy, and practice. Join healthcare professionals, researchers, and innovators for a day of insightful discussions and networking.",
    topics: [
      "AI in Medical Diagnostics",
      "Telemedicine and Remote Patient Monitoring",
      "Health Equity and Access",
      "Future of Medical Education",
    ], 
  },
]
const symposiums = [
  {
    id: "when-ted-met-x",
    title: "When TED met X",
    date: "April 8, 2024",
    location: "James J. Stukel Towers",
    image: "/pictures/past-events/WhenTedMetXFeature2.png",
    description:
      "A focused symposium exploring innovations in healthcare technology, policy, and practice. Join healthcare professionals, researchers, and innovators for a day of insightful discussions and networking.",
    topics: [
      "AI in Medical Diagnostics",
      "Telemedicine and Remote Patient Monitoring",
      "Health Equity and Access",
      "Future of Medical Education",
    ],
  },
]

export default function SymposiumsPage() {
  return (
    <div className="pt-16">
      {/* Past Events */}
      <div className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Past Events</h1>
          <p className="mt-4 text-lg text-gray-600">
            Focused events that dive deep into specific topics and foster meaningful discussions.
          </p>
        </motion.div>

        <div className="mt-16 space-y-16">
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden bg-white rounded-lg shadow-lg"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900">{event.title}</h2>
                  <div className="flex flex-col gap-2 mt-4 sm:flex-row">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-red-600" />
                      <span className="text-gray-700">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-red-600" />
                      <span className="text-gray-700">{event.location}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{event.description}</p>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900">Key Topics</h3>
                    <ul className="mt-2 space-y-1">
                      {event.topics.map((topic) => (
                        <li key={topic} className="flex items-start">
                          <span className="mr-2 text-red-600">•</span>
                          <span className="text-gray-600">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Button asChild className="bg-red-600 hover:bg-red-700">
                      <Link href={`/symposiums/${event.id}`}>
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Symposiums */}
      <div className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Past Symposiums</h1>
          <p className="mt-4 text-lg text-gray-600">
            Focused events that dive deep into specific topics and foster meaningful discussions.
          </p>
        </motion.div>

        <div className="mt-16 space-y-16">
          {symposiums.map((symposium, index) => (
            <motion.div
              key={symposium.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden bg-white rounded-lg shadow-lg"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={symposium.image || "/placeholder.svg"}
                    alt={symposium.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900">{symposium.title}</h2>
                  <div className="flex flex-col gap-2 mt-4 sm:flex-row">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-red-600" />
                      <span className="text-gray-700">{symposium.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-red-600" />
                      <span className="text-gray-700">{symposium.location}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{symposium.description}</p>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900">Key Topics</h3>
                    <ul className="mt-2 space-y-1">
                      {symposium.topics.map((topic) => (
                        <li key={topic} className="flex items-start">
                          <span className="mr-2 text-red-600">•</span>
                          <span className="text-gray-600">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Button asChild className="bg-red-600 hover:bg-red-700">
                      <Link href={`/symposiums/${symposium.id}`}>
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

