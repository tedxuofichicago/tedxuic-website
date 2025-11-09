"use client"

import { motion } from "framer-motion"
import Image from "next/image"
// import { Linkedin, Mail, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Nazra Zafar",
    role: "President & Coordinator",
    image: "/pictures/our-team/NazraZafarPresident.png",
    bio: "Nazra is a senior double-majoring in Integrated Health Studies and Biological Sciences, with a focus on pre-med. She re-launched TEDxUofIChicago after recognizing the powerful impact that inspirational figures can have on young individuals still navigating their life paths. This initiative has become one of the most rewarding aspects of her college experience. In addition to her work with TEDxUofIChicago, Nazra serves as the president of the Minority Association of Pre-Medical Students (MAPS) and works in an urgent care facility. Outside of her academic and leadership roles, she enjoys exploring new activities, spending quality time with friends and family, and engaging in spontaneous experiences such as singing in jazz clubs. Above all, Nazra is passionate about bringing people together. Her primary goal for MetamorphoXis is to inspire at least one person to discover their true calling.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:jane@example.com",
    },
  },
  // {
  //   name: "Cieona Kumpuckal",
  //   role: "Vice President",
  //   image: "/pictures/our-team/CieonaKumpuckalVP.png",
  //   bio: "Cieona is a senior majoring in Integrated Health Sciences. She joined TEDxUofIChicago because she believes in the power of lending a helping hand to make a positive impact on the world. She sees the organization as an opportunity to inspire and motivate UIC students to pursue their dreams and never lose sight of them. In addition to her involvement with TEDxUofIChicago, Cieona serves as the president of Thaakat at UIC and works as a CNA at a nursing home. Her family and friends are her primary support system, and she enjoys spending her free time with them, whether it’s shopping, thrifting, cooking, baking, eating, or exploring. When she has extra time, she enjoys reading a good book. Cieona’s goal for this year’s symposium is to bring a diverse group of speakers who can ensure that every student in the room feels heard and valued. A fun fact about Cieona is her love for a beautiful sunset!",
  //   social: {
  //     linkedin: "https://linkedin.com",
  //     twitter: "https://twitter.com",
  //     email: "mailto:john@example.com",
  //   },
  // },
  // {
  //   name: "Malyika Hussain",
  //   role: "Director of Fundraising/Sponsorships",
  //   image: "/pictures/our-team/MalyikaHussainFundraising.png",
  //   bio: "Malyika is a senior majoring in Finance and Accounting at UIC. She joined TEDxUofIChicago in 2024 because of her passion for being part of an organization that sparks new ideas and challenges perspectives. Malyika believes in the power of bringing people together to share stories that inspire meaningful change and is excited to contribute to making that happen. As Treasurer, her goal is to help create a well-funded, unforgettable conference where both speakers and attendees leave feeling energized. This year, Malyika is particularly looking forward to seeing fresh, bold ideas take the stage. A fun fact about her is her love for listening to music, and she even writes songs from time to time!",
  //   social: {
  //     linkedin: "https://linkedin.com",
  //     twitter: "https://twitter.com",
  //     email: "mailto:sarah@example.com",
  //   },
  // },
  {
    name: "Bhavya Vegesna",
    role: "Secretary",
    image: "/pictures/our-team/BhavyaVegesnaSecretary.png",
    bio: "Bhavya is a second-year student majoring in Integrated Health Sciences. She joined TEDxUofIChicago because of her passion for the transformative power of storytelling. She believes that TEDx provides a platform not only for sharing powerful ideas but also for fostering connections that inspire positive change through diverse perspectives. For this year's conference, Bhavya is excited to hear the transformative stories that the speakers will share. A fun fact about her is that she has been dancing for 14 years!",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:alex@example.com",
    },
  },
  {
    name: "Sabrina Arshad",
    role: "Co-Director of Logistics",
    image: "/pictures/our-team/SabrinaArshadLogistics.png",
    bio: "Sabrina is a second-year student majoring in Computer Engineering. She joined TEDxUofIChicago because of her passion for bringing events to life and sharing ideas with like-minded individuals. For this year’s conference, Sabrina is excited to meet interesting speakers and be a part of the inspiring exchange of ideas. A fun fact about her is that she is also an art teacher at Pinot’s Palette!",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:michael@example.com",
    },
  },
  {
    name: "Iliya Rivkin",
    role: "Co-Director of Logistics",
    image: "/pictures/our-team/IliyaRivkinLogistics.png",
    bio: "Iliya is a second-year student studying Biomedical Engineering with aspirations of becoming a physician. He serves as the Co-Director of Logistics alongside Sabrina. For this year’s conference, Iliya hopes to gain insights from the speakers on the experiences that catalyze growth and development. A fun fact about him is that he was the first member of his family to be born in the United States!",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:michael@example.com",
    },
  },
  {
    name: "Abia Siddiqui",
    role: "Vice President",
    image: "/pictures/our-team/AbiaSiddiquiMarketing.png",
    bio: "Abia is a junior studying Engineering Management on the pre-law track. She has a deep love for food, music, and spending time with her friends and family. Passionate about travel and exploration, Abia joined TEDxUofIChicago to help others share their stories. She values the inclusivity of TEDx and has enjoyed meeting so many inspiring individuals through the organization. For this year’s conference, Abia hopes to see stories centered around self-growth and applying one’s skills to shape a better future. A fun fact about Abia is her fascination with exotic cars!",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:michael@example.com",
    },
  },
  {
    name: "Eddie Ning",
    role: "Director of Fundraising/Sponsorships",
    image: "/pictures/our-team/EddieNingOutreach.png",
    bio: "Eddie is this year’s Director of Outreach for TEDx. He joined the organization after being inspired by the impact that TED videos have had on students globally. Eddie is currently pursuing a double major in Biology and Sociology, with aspirations of becoming a physician. For this year’s symposium, he is focused on breaking boundaries with the selection of speakers and providing unique stories that spark meaningful conversations about the world we live in. A fun fact about Eddie is that he is skilled at playing badminton!",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:michael@example.com",
    },
  },
  {
    name: "Shashank Chenna",
    role: "Webmaster",
    image: "/pictures/our-team/ShashankChennaWebmaster.png",
    bio: "Shashank is a third-year Computer Engineering major. He joined TEDxUofIChicago this semester because of his appreciation for the diverse range of topics featured on the TED platform, and his desire to help bring those ideas to the UIC community. At this year’s conference, he is particularly excited to hear from a variety of engaging speakers. A fun fact about Shashank is that he practiced karate for approximately 10 years before starting college!",
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
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"><span className="text-red-600">Our </span>Team</h1>
          <p className="mt-4 text-lg text-gray-600">Meet the dedicated individuals who make <span className="text-red-600">TEDx</span>UofIChicago possible.</p>
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
                {/* <div className="flex mt-4 space-x-4">
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
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

