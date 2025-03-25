"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/pictures/home/HomePageFeature.jpg"
            alt="TEDxUIC Event"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
              <span className="text-red-600">TEDx</span>UofIChicago
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-xl text-gray-200">
              Ideas worth spreading at the University of Illinois Chicago
            </p>
            <div className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link href="/upcoming-events">
                  Upcoming Events <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-300">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="px-3 py-1 text-sm font-medium text-white rounded-full bg-red-600">Coming Soon</span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
              Our Next Event
            </h2>
            <p className="max-w-2xl mt-4 text-center text-gray-600">
              Join us for an inspiring evening of ideas, innovation, and conversation.
            </p>
          </motion.div>

          <div className="grid gap-8 mt-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg aspect-video"
            >
              <Image
                src="/pictures/upcoming-events/metamorphisis_wide_logo.avif"
                alt="Next TEDxUIC Event"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold text-gray-900">TEDxUofIChicago 2025: MetamorphoXis</h3>
              <p className="mt-4 text-gray-600">
                A journey of relearning, regrowing, and resilience - this year&apos;s 
                event will explore the profound transformations that shape individuals, communities, and the world.
              </p>
              <div className="flex flex-col gap-4 mt-6 sm:flex-row">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-red-600" />
                  <span className="text-gray-700">April 25, 2025</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-red-600" />
                  <span className="text-gray-700">James J. Stukel Towers</span>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <Link href="/upcoming-events">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Past Events Highlight, figure out how to differentiate the cards, currently changes are linked together */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Past Events</h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-600">
              Explore our previous TEDxUofIChicago events and the ideas that were shared.
            </p>
          </motion.div>

          <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Define an array of events */}
            {[
              {
                id: 1,
                title: "TEDxUofIChicago 2024: Comedy Night",
                description: "A collection of talks exploring innovation, creativity, and the future of society.",
                imageSrc: "/pictures/past-events/ComedyNightFeature.png",
                link: "/past-events-symposiums",
              },
              {
                id: 2,
                title: "When TED met X",
                description: "An event focused on breakthroughs in technology and the impact of change.",
                imageSrc: "/pictures/past-events/WhenTedMetXFeature2.png",
                link: "/past-events-symposiums",
              },
              {
                id: 3,
                title: "TEDxUofIChicago 2023: Voice Your Peace",
                description: "Exploring creativity, diversity, and the role of art in shaping the future.",
                imageSrc: "/pictures/past-events/VoiceYourPeaceFeature.png",
                link: "/past-events-symposiums",
              },
            ].map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: event.id * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden bg-white rounded-lg shadow-md"
              >
                <div className="relative h-60">
                  <Image
                    src={event.imageSrc}
                    alt={`Past TEDxUIC Event ${event.id}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                  <p className="mt-2 text-gray-600">{event.description}</p>
                  <Link
                    href={event.link}
                    className="inline-flex items-center mt-4 text-sm font-medium text-red-600 hover:text-red-800"
                  >
                    View Event <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/past-events">View All Past Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Old dynamic mapping implementation */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Past Events</h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-600">
              Explore our previous TEDxUofIChicago events and the ideas that were shared.
            </p>
          </motion.div>

          <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden bg-white rounded-lg shadow-md"
              >
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=480&width=640&text=Event%20${i}`}
                    alt={`Past TEDxUIC Event ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">TEDxUIC {2024 - i}</h3>
                  <p className="mt-2 text-gray-600">
                    A collection of talks exploring innovation, creativity, and the future of society.
                  </p>
                  <Link
                    href="/past-events"
                    className="inline-flex items-center mt-4 text-sm font-medium text-red-600 hover:text-red-800"
                  >
                    View Event <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/past-events">View All Past Events</Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* About TEDx Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About TEDx</h2>
              <p className="mt-6 text-gray-600">
                TEDx is a program of local, self-organized events that bring people together to share a TED-like
                experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and
                connection.
              </p>
              <p className="mt-4 text-gray-600">
                TEDxUofIChicago is independently organized by students at the University of Illinois Chicago, bringing together
                the brightest minds to share ideas worth spreading.
              </p>
              <div className="mt-8">
                {/* Check usage of this styling in other parts of this page */}
                <Button asChild variant="outline">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg aspect-video"
            >
              <Image
                src="/pictures/about/VYP-group-pic.png"
                alt="About TEDx"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-red-600">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Get Involved with TEDxUofIChicago</h2>
            <p className="max-w-2xl mx-auto mt-4 text-white/90">
              Join our community of thinkers, innovators, and changemakers. Attend our events, volunteer, or share your
              ideas.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                <Link href="/upcoming-events">Upcoming Events</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

