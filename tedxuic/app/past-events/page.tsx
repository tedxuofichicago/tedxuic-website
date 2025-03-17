"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"

const pastEvents = [
  {
    id: "2024",
    title: "Voice Your Peace",
    date: "November 28, 2024",
    location: "UIC Student Center East",
    image: "/placeholder.svg?height=720&width=1280&text=TEDxUIC%202023",
    description:
      "Our 2023 event brought together thought leaders, innovators, and changemakers to explore ideas that will shape our future.",
    speakers: [
      { name: "Dr. Jane Smith", topic: "The Future of AI in Healthcare" },
      { name: "Prof. John Doe", topic: "Sustainable Urban Development" },
      { name: "Sarah Johnson", topic: "Reimagining Education in the Digital Age" },
      { name: "Michael Brown", topic: "The Power of Community Activism" },
    ],
  },
  {
    id: "2022",
    title: "TEDxUIC 2022: Breaking Boundaries",
    date: "April 16, 2022",
    location: "UIC Forum",
    image: "/placeholder.svg?height=720&width=1280&text=TEDxUIC%202022",
    description: "Our 2022 event focused on breaking boundaries in science, art, technology, and society.",
    speakers: [
      { name: "Dr. Robert Chen", topic: "Breaking Boundaries in Neuroscience" },
      { name: "Lisa Wong", topic: "Art as a Tool for Social Change" },
      { name: "David Martinez", topic: "Technological Innovation in Developing Countries" },
      { name: "Emily Taylor", topic: "Redefining Success in the Modern World" },
    ],
  },
  {
    id: "2021",
    title: "TEDxUIC 2021: Resilience",
    date: "April 17, 2021",
    location: "Virtual Event",
    image: "/placeholder.svg?height=720&width=1280&text=TEDxUIC%202021",
    description: "Our 2021 virtual event explored the theme of resilience in the face of unprecedented challenges.",
    speakers: [
      { name: "Dr. Amanda Lee", topic: "Building Resilient Healthcare Systems" },
      { name: "James Wilson", topic: "Mental Health and Resilience" },
      { name: "Sophia Garcia", topic: "Community Resilience in Times of Crisis" },
      { name: "Thomas Wright", topic: "Resilient Business Models for the Future" },
    ],
  },
]

export default function PastEventsPage() {
  return (
    <div className="pt-16">
      <div className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Past Events</h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore our previous TEDxUIC events and the ideas that were shared.
          </p>
        </motion.div>

        <div className="mt-16 space-y-20">
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid gap-8 md:grid-cols-2"
            >
              <div className="relative overflow-hidden rounded-lg aspect-video">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-center">
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
                  <h3 className="text-lg font-semibold text-gray-900">Speakers</h3>
                  <ul className="mt-2 space-y-2">
                    {event.speakers.map((speaker) => (
                      <li key={speaker.name} className="text-gray-600">
                        <span className="font-medium">{speaker.name}</span> - {speaker.topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Button asChild variant="outline">
                    <Link href={`/past-events/${event.id}`}>
                      View Event Details <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

