"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"

interface EventCardProps {
  id: string
  title: string
  date: string
  location: string
  image: string
  description: string
  topics: string[]
  delay?: number
}

export default function EventCard({
  id,
  title,
  date,
  location,
  image,
  description,
  topics,
  delay = 0,
}: EventCardProps) {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="overflow-hidden bg-white rounded-lg shadow-lg"
    >
      <div className="grid md:grid-cols-2">
        <div className="relative h-64 md:h-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <div className="flex flex-col gap-2 mt-4 sm:flex-row">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-red-600" />
              <span className="text-gray-700">{date}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-red-600" />
              <span className="text-gray-700">{location}</span>
            </div>
          </div>
          <p className="mt-4 text-gray-600">{description}</p>

          <div className="mt-6">
            <ul className="mt-2 space-y-1">
              {topics.map((topic) => (
                <li key={topic} className="flex items-start">
                  <span className="mr-2 text-red-600">•</span>
                  <span className="text-gray-600">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}