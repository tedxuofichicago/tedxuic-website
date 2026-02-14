"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from a database or CMS
const eventData: Record<string, any> = {
  "2024": {
    id: "2024",
    title: "Voice Your Peace",
    date: "November 28, 2024",
    location: "UIC Student Center East",
    heroImage: "/pictures/past-events/VoiceYourPeaceFeature.png",
    description:
      "Our 2023 event brought together thought leaders, innovators, and changemakers to explore ideas that will shape our future. The event featured inspiring talks on artificial intelligence, sustainable development, education innovation, and community activism. Over 500 attendees gathered to experience ideas worth spreading and connect with like-minded individuals passionate about creating positive change in our world.",
    fullDescription:
      "Include full description here as a paragraph..",
    attendees: "500+",
    speakers: [
      { name: "Dr. Jane Smith", topic: "The Future of AI in Healthcare" },
      { name: "Prof. John Doe", topic: "Sustainable Urban Development" },
      { name: "Sarah Johnson", topic: "Reimagining Education in the Digital Age" },
      { name: "Michael Brown", topic: "The Power of Community Activism" },
    ],
    gallery: [
      {
        url: "/placeholder.svg?height=600&width=800&text=Speaker%20on%20Stage",
        alt: "Speaker presenting on stage",
        span: "col-span-2 row-span-2",
      },
      {
        url: "/placeholder.svg?height=400&width=600&text=Audience",
        alt: "Engaged audience",
        span: "col-span-1 row-span-1",
      },
      {
        url: "/placeholder.svg?height=400&width=600&text=Networking",
        alt: "Attendees networking",
        span: "col-span-1 row-span-1",
      },
      {
        url: "/placeholder.svg?height=400&width=600&text=Performance",
        alt: "Musical performance",
        span: "col-span-1 row-span-2",
      },
      {
        url: "/placeholder.svg?height=400&width=600&text=Panel%20Discussion",
        alt: "Panel discussion",
        span: "col-span-2 row-span-1",
      },
      {
        url: "/placeholder.svg?height=400&width=600&text=Venue",
        alt: "Event venue",
        span: "col-span-1 row-span-1",
      },
    ],
  },
  "2022": {
    id: "2022",
    title: "TEDxUIC 2022: Breaking Boundaries",
    date: "April 16, 2022",
    location: "UIC Forum",
    heroImage: "/placeholder.svg?height=720&width=1280&text=TEDxUIC%202022",
    description:
      "Our 2022 event focused on breaking boundaries in science, art, technology, and society. Speakers shared groundbreaking research, artistic innovations, and transformative ideas that challenged the status quo and inspired our community to think beyond conventional limits.",
    fullDescription:
      "TEDxUIC 2022 explored the concept of breaking boundaries across multiple disciplines. Our speakers demonstrated how pushing past perceived limitations leads to innovation and progress. The event showcased the power of interdisciplinary thinking and the importance of challenging established norms to create meaningful change.",
    attendees: "450+",
    speakers: [
      { name: "Dr. Robert Chen", topic: "Breaking Boundaries in Neuroscience" },
      { name: "Lisa Wong", topic: "Art as a Tool for Social Change" },
      { name: "David Martinez", topic: "Technological Innovation in Developing Countries" },
      { name: "Emily Taylor", topic: "Redefining Success in the Modern World" },
    ],
    gallery: [
      {
        url: "/placeholder.svg?height=600&width=800&text=Opening%20Ceremony",
        alt: "Opening ceremony",
        span: "col-span-2 row-span-2",
      },
      {
        url: "/placeholder.svg?height=400&width=600&text=Speaker%202",
        alt: "Speaker on stage",
        span: "col-span-1 row-span-1",
      },
      {
        url: "/placeholder.svg?height=400&width=600&text=Interactive%20Display",
        alt: "Interactive display",
        span: "col-span-1 row-span-1",
      },
      {
        url: "/placeholder.svg?height=400&width=600&text=Reception",
        alt: "Reception area",
        span: "col-span-1 row-span-1",
      },
      {
        url: "/placeholder.svg?height=400&width=600&text=Group%20Photo",
        alt: "Group photo",
        span: "col-span-2 row-span-1",
      },
    ],
  },
  "2021": {
    id: "2021",
    title: "TEDxUIC 2021: Resilience",
    date: "April 17, 2021",
    location: "Virtual Event",
    heroImage: "/placeholder.svg?height=720&width=1280&text=TEDxUIC%202021",
    description:
      "Our 2021 virtual event explored the theme of resilience in the face of unprecedented challenges. In a year marked by global uncertainty, our speakers shared powerful stories of adaptation, perseverance, and hope, demonstrating the incredible resilience of the human spirit.",
    fullDescription:
      "TEDxUIC 2021 was our first fully virtual event, bringing together speakers and attendees from around the world. Despite the physical distance, we created meaningful connections and shared ideas about building resilience in healthcare, mental health, communities, and business. The event proved that even in challenging times, ideas worth spreading can unite and inspire us.",
    attendees: "600+",
    speakers: [
      { name: "Dr. Amanda Lee", topic: "Building Resilient Healthcare Systems" },
      { name: "James Wilson", topic: "Mental Health and Resilience" },
      { name: "Sophia Garcia", topic: "Community Resilience in Times of Crisis" },
      { name: "Thomas Wright", topic: "Resilient Business Models for the Future" },
    ],
    gallery: [
      {
        url: "/placeholder.svg?height=600&width=800&text=Virtual%20Stage",
        alt: "Virtual stage setup",
        span: "col-span-2 row-span-2",
      },
      {
        url: "/placeholder.svg?height=400&width=600&text=Speaker%20Screen",
        alt: "Speaker presenting virtually",
        span: "col-span-1 row-span-1",
      },
      {
        url: "/placeholder.svg?height=400&width=600&text=Chat%20Interaction",
        alt: "Audience chat interaction",
        span: "col-span-1 row-span-1",
      },
      {
        url: "/placeholder.svg?height=400&width=600&text=Behind%20the%20Scenes",
        alt: "Behind the scenes",
        span: "col-span-1 row-span-2",
      },
      {
        url: "/placeholder.svg?height=400&width=600&text=Virtual%20Audience",
        alt: "Virtual audience grid",
        span: "col-span-2 row-span-1",
      },
    ],
  },
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = eventData[params.id]

  if (!event) {
    return (
      <div className="flex items-center justify-center min-h-screen pt-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Event not found</h1>
          <Button asChild className="mt-4">
            <Link href="/past-events">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Past Events
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Back button */}
      <div className="container px-4 py-8 mx-auto">
        <Button asChild variant="ghost" className="gap-2">
          <Link href="/past-events">
            <ArrowLeft className="w-4 h-4" />
            Back to Past Events
          </Link>
        </Button>
      </div>

      {/* Event title */}
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{event.title}</h1>

          {/* Event metadata */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-red-600" />
              <span className="text-gray-700">{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-600" />
              <span className="text-gray-700">{event.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-red-600" />
              <span className="text-gray-700">{event.attendees} Attendees</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="container px-4 mx-auto mt-12"
      >
        <div className="relative w-full overflow-hidden rounded-lg max-w-5xl mx-auto aspect-video">
          <Image src={event.heroImage || "/placeholder.svg"} alt={event.title} fill className="object-cover" priority />
        </div>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container px-4 mx-auto mt-16"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">About This Event</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">{event.description}</p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">{event.fullDescription}</p>

          {/* Speakers section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900">Featured Speakers</h3>
            <div className="grid gap-6 mt-6 sm:grid-cols-2">
              {event.speakers.map((speaker: any, index: number) => (
                <motion.div
                  key={speaker.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-6 bg-gray-50 rounded-lg"
                >
                  <h4 className="text-lg font-semibold text-gray-900">{speaker.name}</h4>
                  <p className="mt-2 text-gray-600">{speaker.topic}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bento-style gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="container px-4 mx-auto mt-16 mb-16"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900">Event Photos</h2>
          <p className="mt-2 text-center text-gray-600">Highlights and moments from the event</p>

          {/* Bento grid layout */}
          <div className="grid grid-cols-3 gap-4 mt-8 auto-rows-[200px]">
            {event.gallery.map((photo: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className={`relative overflow-hidden rounded-lg group ${photo.span}`}
              >
                <Image
                  src={photo.url || "/placeholder.svg"}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-black/50 group-hover:opacity-100">
                  <div className="flex items-center justify-center h-full">
                    <p className="px-4 text-sm font-medium text-center text-white">{photo.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
