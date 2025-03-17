"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"

const symposiums = [
  {
    id: "healthcare-innovation",
    title: "Healthcare Innovation Symposium",
    date: "October 15, 2024",
    location: "UIC College of Medicine",
    image: "/placeholder.svg?height=720&width=1280&text=Healthcare%20Symposium",
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
    id: "sustainability",
    title: "Sustainability and Climate Action Symposium",
    date: "February 22, 2025",
    location: "UIC Student Center West",
    image: "/placeholder.svg?height=720&width=1280&text=Sustainability%20Symposium",
    description:
      "This symposium brings together environmental experts, activists, and policymakers to discuss urgent climate challenges and innovative solutions for a sustainable future.",
    topics: [
      "Urban Sustainability Initiatives",
      "Renewable Energy Transitions",
      "Climate Justice and Equity",
      "Sustainable Business Practices",
    ],
  },
  {
    id: "technology-ethics",
    title: "Technology Ethics Symposium",
    date: "May 8, 2025",
    location: "UIC Engineering Research Facility",
    image: "/placeholder.svg?height=720&width=1280&text=Tech%20Ethics%20Symposium",
    description:
      "Explore the ethical dimensions of emerging technologies and their impact on society. This symposium features discussions on responsible innovation, digital rights, and the future of human-technology relationships.",
    topics: [
      "AI Ethics and Governance",
      "Privacy in the Digital Age",
      "Algorithmic Bias and Fairness",
      "Technology and Human Autonomy",
    ],
  },
]

export default function SymposiumsPage() {
  return (
    <div className="pt-16">
      <div className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">TEDxUIC Symposiums</h1>
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

