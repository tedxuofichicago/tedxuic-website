"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="pt-16">
      <div className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"><span className="text-red-600">About</span> Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            Bringing ideas worth spreading to the University of Illinois Chicago community.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <h2>Our Mission</h2>
            <p>
              TEDxUIC is an independently organized TED event operated under license from TED. Our mission is to bring
              together bright minds to give talks that are idea-focused, and on a wide range of subjects, to foster
              learning, inspiration and wonder – and provoke conversations that matter.
            </p>

            <div className="relative my-8 overflow-hidden rounded-lg aspect-video">
              <Image
                src="/placeholder.svg?height=720&width=1280&text=TEDxUIC%20Event"
                alt="TEDxUIC Event"
                fill
                className="object-cover"
              />
            </div>

            <h2>What is TEDx?</h2>
            <p>
              In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local,
              self-organized events that bring people together to share a TED-like experience. Our event is called
              TEDxUIC, where x = independently organized TED event. At our TEDxUIC event, TED Talks video and live
              speakers combine to spark deep discussion and connection in a small group. The TED Conference provides
              general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
            </p>

            <h2>About TED</h2>
            <p>
              TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in
              California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual
              TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of
              these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane
              Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala,
              Sal Khan and Daniel Kahneman.
            </p>

            <h2>Our History</h2>
            <p>
              TEDxUIC was founded in 2018 by a group of passionate students who wanted to bring the spirit of TED to the
              University of Illinois Chicago campus. Since then, we have organized annual conferences featuring speakers
              from various disciplines, backgrounds, and experiences.
            </p>
            <p>
              Our events have covered topics ranging from technology and design to education, health, and social
              justice. We strive to create a platform where innovative ideas can be shared and where our community can
              engage in meaningful conversations about the issues that matter most.
            </p>

            <div className="relative my-8 overflow-hidden rounded-lg aspect-video">
              <Image
                src="/placeholder.svg?height=720&width=1280&text=TEDxUIC%20Team"
                alt="TEDxUIC Team"
                fill
                className="object-cover"
              />
            </div>

            <h2>Our Values</h2>
            <p>At TEDxUIC, we are guided by a set of core values that inform everything we do:</p>
            <ul>
              <li>
                <strong>Innovation:</strong> We celebrate new ideas and creative approaches to solving problems.
              </li>
              <li>
                <strong>Diversity:</strong> We believe in the power of diverse perspectives and experiences.
              </li>
              <li>
                <strong>Community:</strong> We foster a sense of belonging and connection among our attendees, speakers,
                and team members.
              </li>
              <li>
                <strong>Excellence:</strong> We strive for excellence in all aspects of our events and operations.
              </li>
              <li>
                <strong>Impact:</strong> We aim to inspire action and create positive change in our community and
                beyond.
              </li>
            </ul>

            <h2>Join Us</h2>
            <p>
              We invite you to join us on this journey of exploration and discovery. Attend our events, volunteer with
              our team, or share your ideas. Together, we can create a platform for ideas worth spreading at UIC.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

