"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Mail, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Nazra Zafar",
    role: "President & Coordinator",
    image: "/pictures/our-team/NazraZafarPresident.png",
    bio: "Hello, beautiful humans! My name is Nazra and I’m a senior double-majoring in Integrated Health Studies and Biological Sciences as a pre-med. I re-launched TEDxUofIChicago because I saw the power of another person serving as inspiration for young people who have yet to pave their path in life, and it’s been the best part of my time in college so far. :) Outside of TEDxUofIChicago, I also serve as the president for the Minority Association of Pre-Medical Students (MAPS), and work in an urgent care facility. I love exploring, spending time with my friends and family, doing spontaneous things like singing in jazz clubs, and most importantly, bringing people together. My one hope for MetamorphoXis is that it helps at least one person find their calling.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:jane@example.com",
    },
  },
  {
    name: "Cieona Kumpuckal",
    role: "Vice President",
    image: "/placeholder.svg?height=400&width=400&text=John",
    bio: "Hello everyone! My name is Cieona and I am a senior majoring in Integrated Health Sciences! I joined TEDxUofIChicago because I believe that a helping hand is what makes the world go round. I believe that this organization has the potential to reach a hand to the students of UIC and motivate them to never forget their dreams and to continue chasing them! Other than TEDxUofIChicago, I serve as president for Thaakat at UIC and work as a CNA at a nursing home. My family and friends are my support circle, so if I’m free I’m spending time with them – whether that be shopping/thrifting, cooking/baking/eating, or exploring. And on the off chance I have a bit more free time, I’ll crack open a book! My hope for this year’s symposium is to bring the UIC students a group of well-rounded speakers, where every student in the room feels heard. My fun fact is that I love a good sunset :)",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:john@example.com",
    },
  },
  {
    name: "Bhavya Vegesna",
    role: "Secretary",
    image: "/placeholder.svg?height=400&width=400&text=Alex",
    bio: "Hey everyone! My name is Bhavya and I’m a second year majoring in IHS! I joined TEDx because I love the transformative power of storytelling. This platform not only disseminates powerful ideas, but also fosters connections that inspire positive change through diverse perspectives. With this year’s conference, I’m excited to hear the metamorphic stories that the speakers have to share. A fun fact about me is that I’ve danced for 14 years!",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:alex@example.com",
    },
  },
  {
    name: "Malyika Hussain",
    role: "Director of Fundraising/Sponsorships",
    image: "/placeholder.svg?height=400&width=400&text=Sarah",
    bio: "Hey everyone! I’m a senior majoring in Finance and Accounting at UIC. I joined TEDx at UIC in 2024 because I love being part of something that sparks new ideas and challenges perspectives. There’s something powerful about bringing people together to share stories that inspire change, and I’m excited to play a role in making that happen. As Treasurer, I want to help create a well-funded, unforgettable conference where speakers and attendees alike leave feeling energized. This year, I’m looking forward to seeing fresh, bold ideas take the stage. One fun fact about me—I love listening to music and even write songs from time to time!",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:sarah@example.com",
    },
  },
  {
    name: "Sabrina Arshad",
    role: "Co-Director of Logistics",
    image: "/pictures/our-team/SabrinaArshadLogistics.png",
    bio: "Hi everybody! My name is Sabrina Arshad. I’m a second year majoring in Computer Engineering. I joined TEDx because I am passionate about making events come to life and sharing ideas with like minded people. With this year's conference, I am really excited to meet some interesting speakers. A fun fact about me is that I am an art teacher at Pinot’s Palette!",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:michael@example.com",
    },
  },
  {
    name: "Iliya Rivkin",
    role: "Co-Director of Logistics",
    image: "/placeholder.svg?height=400&width=400&text=Michael",
    bio: "My name is Iliya Rivkin, and I serve as the Co-Director of Logistics with Sabrina Arshad. I am a second-year student studying Biomedical Engineering with aspirations of becoming a physician. From this year’s speakers, I hope to gain insight on the experiences that catalyze growth and development. A quick fun fact is that I was the first member of my family to be born in the United States of America.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:michael@example.com",
    },
  },
  {
    name: "Henry Huynh",
    role: "Co-Director of Marketing",
    image: "/placeholder.svg?height=400&width=400&text=Michael",
    bio: "Hey everyone! I’m Henry Huynh, a junior majoring in Finance at UIC. I joined TEDx in the fall of 2024 because it felt like the perfect place to explore new ideas, challenge perspectives, spark innovation, and engage in meaningful conversations—all of which I’m thrilled to be a part of! For this year’s symposium, I’m eager to listen, learn, and be inspired by our incredible speakers and their powerful stories. It’s an honor to be part of an amazing e-board filled with passionate individuals who are dedicated to bringing this event to life! Fun fact about me: I can ???",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:michael@example.com",
    },
  },
  {
    name: "Abia Siddiqui",
    role: "Co-Director of Marketing",
    image: "/placeholder.svg?height=400&width=400&text=Michael",
    bio: "Hi everyone! My name is Abia, I’m a junior studying Engineering Management on the pre-law track. I love food and music and just hanging out with my friends and family. I absolutely love to travel and explore. I joined Tedx to be able to help others in telling their stories. I love how inclusive Tedx is and the people I got to meet while being a part of the organization. I hope to see more stories on self growth and applying your skills into your future self. One fun fact: I really love exotic cars",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:michael@example.com",
    },
  },
  {
    name: "Eddie Ning",
    role: "Director of Outreach",
    image: "/placeholder.svg?height=400&width=400&text=Michael",
    bio: "Hello everyone, my name is Eddie and I am this year’s Director of Outreach! I joined TEDX after seeing the impact videos created by TED had for students around the world. I am a Biology and Sociology double major aspiring to become a physician. For this year’s symposium? I am really interested in breaking boundaries with our speakers and providing unique stories that create conversations about the world we live in. One fun fact about me is I can play badminton.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:michael@example.com",
    },
  },
  {
    name: "Shashank Chenna",
    role: "Webmaster",
    image: "/pictures/our-team/ShashankChennaWebmasterCropped.jpg",
    bio: "Hi, I’m Shashank! I’m a second-year computer engineering major. I joined TEDxUofIChicago this semester because I enjoy many of the topics you can find on the TED platform, and I wanted to work with the team to share those ideas at UIC. At this year’s conference, I’m excited to listen to some interesting speakers. A fun fact about me is that I practiced karate for about 10 years before college! Responsible for maintaining and updating the TEDxUIC website, ensuring a seamless digital experience.",
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

              <div className="relative h-80">
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

