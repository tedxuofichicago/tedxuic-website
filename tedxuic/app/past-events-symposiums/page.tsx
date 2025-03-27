"use client"

import { motion } from "framer-motion"
import Image from "next/image"
// import Link from "next/link"
// ArrowRight
import { Calendar, MapPin } from "lucide-react"

// Alternatively, prefix them with _ (e.g., _Button) if you plan to use them later.
// import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const pastEvents = [
  {
    id: "comedy-night",
    title: "TEDxUofIChicago 2024: Comedy Night",
    date: "November 21, 2024",
    location: "UIC Student Center East",
    image: "/pictures/past-events/ComedyNightFeature.png",
    description:
      "TEDxUofIChicago hosted a Comedy Night themed fundraiser event to hear some laughter through the tears of exams, student org events, pre-professisonal life, work and so on.",
    topics: [
      "Featured incredible Chicago comedian Ben Noble!",
      "Included an open stage for all UIC students & student organizations to show off their improv skills and comedy sketches",
      "Had a performance by Red Light School District, UIC's student-run improv troupe",
      "Portion of the proceeds went to Sparkathon, an organization that raises funds for the patients at the Children’s Cancer unit in our UI Health hospital",
    ], 
  },
  {
    id: "voice-your-peace",
    title: "TEDxUofIChicago 2023: Voice Your Peace",
    date: "November 28, 2023",
    location: "UIC Student Center East",
    image: "/pictures/past-events/VoiceYourPeaceFeature.png",
    description:
      "Voice Your Peace was TEDxUofIChicago's inaugural Open Mic Night with UIC's Honors College Advisory Board.",
    topics: [
      "An enchanting exhibition of student talent and unforgettable moments",
      "Featured many students of different backgrounds who performed a variety of spoken word",
      "Was a space for people to come and express themselves and their emotions about different social justice issues",
      "Included pieces on current events, racism, bullying, and more",
    ], 
  },
]
const symposiums = [
  {
    id: "when-ted-met-x",
    title: "When TED met X: Unveiling the X-Factor",
    date: "April 8, 2024",
    location: "James J. Stukel Towers Event Center",
    image: "/pictures/past-events/WhenTedMetXFeature2.png",
    description:
      "When TED met X: Unveiling the X-Factor was UIC’s very own live TED Talk that featured 7 renowned speakers sharing their life stories on how they discovered their defining X factors within their stories — leading them to excelling in their life’s work and finding their passions.",
    topics: [
      "Included a performance by Downtown Voices, UIC's premier a cappella group",
      "Brandon Morio Ishikata – Award-winning educator, professional dancer, and advocate for Asian American voices",
      "Julie Jancius – Best-selling author, host of a top #5 global spiritual podcast, and expert on intuition and happiness",
      "Also welcomed Dr. Shaniqua Jones (Restorative Justice expert), Dr. Renee Matthews (\"Ask Dr. Renee\" health advocate), Marva Bailer (Tech and AI leader), Elizabeth (AI-Humanist thought leader), and Olga V. Mack (Legal Tech Innovator)",
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
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"><span className="text-red-600">Past </span>Events</h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore our previous <span className="text-red-600">TEDx</span>UofIChicago events and the ideas that were shared.
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
                    {/* <h3 className="text-lg font-semibold text-gray-900">Key Topics</h3> */}
                    <ul className="mt-2 space-y-1">
                      {event.topics.map((topic) => (
                        <li key={topic} className="flex items-start">
                          <span className="mr-2 text-red-600">•</span>
                          <span className="text-gray-600">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Will decide later if dedicated page for event is needed
                  <div className="mt-8">
                    <Button asChild className="bg-red-600 hover:bg-red-700">
                      <Link href={`/symposiums/${event.id}`}>
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Separator className="w-full max-w-screen-xl mx-auto my-4 border-t-2"/>
      {/* Symposiums */}
      <div className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"><span className="text-red-600">Past </span>Symposiums</h1>
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
                    {/* <h3 className="text-lg font-semibold text-gray-900">Key Topics</h3> */}
                    <ul className="mt-2 space-y-1">
                      {symposium.topics.map((topic) => (
                        <li key={topic} className="flex items-start">
                          <span className="mr-2 text-red-600">•</span>
                          <span className="text-gray-600">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Will decide later if dedicated page for event is needed
                  <div className="mt-8">
                    <Button asChild className="bg-red-600 hover:bg-red-700">
                      <Link href={`/symposiums/${symposium.id}`}>
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

