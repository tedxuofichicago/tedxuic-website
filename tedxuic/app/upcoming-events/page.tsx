"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"

const upcomingEvents = [
  {
    id: "2025",
    title: "TEDxUofIChicago 2025: MetamorphoXis",
    date: "April 25, 2025",
    time: "Doors close at 5 p.m. | Check-in at 4:30 p.m.",
    location: "James J. Stukel Towers",
    image: "/pictures/upcoming-events/metamorphisis_wide_logo.avif",
    description:
      "A journey of relearning, regrowing, and resilience - this year's event will explore the profound transformations that shape individuals, communities, and the world.",
    speakers: [
      { name: "Will be announced soon!", topic: "Stay tuned!" },
    ],
    registration: {
      isOpen: true,
      url: "https://www.eventbrite.com/e/tedxuofichicago-metamorphoxis-tickets-1284814577989?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl",
      deadline: "April 1, 2025",
    },
  },
]

export default function UpcomingEventsPage() {
  return (
    <div className="pt-16">
      <div className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"><span className="text-red-600">Upcoming </span>Events</h1>
          <p className="mt-4 text-lg text-gray-600">
            Join us for our upcoming <span className="text-red-600">TEDx</span>UofIChicago events and be part of the conversation.
          </p>
        </motion.div>

        <div className="mt-16 space-y-20">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden bg-white rounded-lg shadow-lg"
            >
              {/* <div className="relative h-64 sm:h-80"> */}
              <div className="relative h-96 sm:h-[44rem]">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900">{event.title}</h2>
                <div className="flex flex-col gap-4 mt-4 sm:flex-row">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-red-600" />
                    <span className="text-gray-700">{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-red-600" />
                    <span className="text-gray-700">{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-red-600" />
                    <span className="text-gray-700">{event.location}</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-600">{event.description}</p>

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

                <div className="p-4 mt-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900">Registration</h3>
                  <p className="mt-2 text-gray-600">
                    {event.registration.isOpen
                      ? `Registration is open until ${event.registration.deadline}.`
                      : event.registration.deadline}
                  </p>
                  <div className="mt-4">
                    <Button
                      asChild
                      className={
                        event.registration.isOpen
                          ? "bg-red-600 hover:bg-red-700"
                          : "bg-gray-400 hover:bg-gray-500 cursor-not-allowed"
                      }
                      disabled={!event.registration.isOpen}
                    >
                      <Link href={event.registration.url}>
                        {event.registration.isOpen ? "Register Now" : "Registration Coming Soon"}
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild variant="outline">
                    <Link href={`/upcoming-events/${event.id}`}>
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

