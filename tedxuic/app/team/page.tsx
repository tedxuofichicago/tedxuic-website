"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Mail, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Jane Doe",
    role: "President",
    image: "/placeholder.svg?height=400&width=400&text=Jane",
    bio: "Jane is a senior studying Computer Science with a passion for technology and innovation.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:jane@example.com",
    },
  },
  {
    name: "John Smith",
    role: "Vice President",
    image: "/placeholder.svg?height=400&width=400&text=John",
    bio: "John is a junior studying Business Administration with a focus on entrepreneurship.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:john@example.com",
    },
  },
  {
    name: "Alex Johnson",
    role: "Event Coordinator",
    image: "/placeholder.svg?height=400&width=400&text=Alex",
    bio: "Alex is a senior studying Communications with experience in event planning and management.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:alex@example.com",
    },
  },
  {
    name: "Sarah Williams",
    role: "Marketing Director",
    image: "/placeholder.svg?height=400&width=400&text=Sarah",
    bio: "Sarah is a junior studying Marketing with a passion for digital media and brand strategy.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:sarah@example.com",
    },
  },
  {
    name: "Michael Brown",
    role: "Speaker Coordinator",
    image: "/placeholder.svg?height=400&width=400&text=Michael",
    bio: "Michael is a senior studying Psychology with an interest in public speaking and communication.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:michael@example.com",
    },
  },
  {
    name: "Your Name",
    role: "Webmaster",
    image: "/pictures/our-team/ShashankChennaWebmaster.jpg",
    bio: "Responsible for maintaining and updating the TEDxUIC website, ensuring a seamless digital experience.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:webmaster@example.com",
    },
  },
]

export default function TeamPage() {
  return (
    <div className="pt-16">
      <div className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Team</h1>
          <p className="mt-4 text-lg text-gray-600">Meet the dedicated individuals who make TEDxUIC possible.</p>
        </motion.div>

        <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden bg-white rounded-lg shadow-md"
            >
              <div className="relative h-64">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900">{member.name}</h2>
                <p className="text-sm font-medium text-red-600">{member.role}</p>
                <p className="mt-4 text-gray-600">{member.bio}</p>
                <div className="flex mt-4 space-x-4">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-700"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-700"
                  >
                    <Twitter className="w-5 h-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href={member.social.email} className="text-gray-400 hover:text-gray-700">
                    <Mail className="w-5 h-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

