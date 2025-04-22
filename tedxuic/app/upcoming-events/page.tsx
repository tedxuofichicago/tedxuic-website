"use client"
// Add speakers bios asap
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
// ArrowRight
import { Calendar, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

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

const featuredSpeakers = [
  {
    name: "Berthine Crèvecoeur West",
    role: "CEO of Westbridge Solutions",
    image: "/pictures/upcoming-events/metamorphisis-speakers/Berthine_Crèvecoeur_West.png",
    bio: "Berthine Crèvecoeur West, MA, EMBA, CDE® is a nationally recognized Strategist, Certified Diversity Executive®, Global Keynote Speaker, Author and CEO of Westbridge Solutions, a strategic advisory and management consulting firm dedicated to transforming complexity into clarity through strategic frameworks and leadership development. She is the creator of the PROI Framework™—a model that helps organizations align People, Policies, Practices, and Procedures to drive purpose-led growth. A first-generation American and lifelong advocate for equity and belonging, Berthine brings a powerful blend of cultural fluency, deep-focus strategy, and heart-centered leadership to every stage she steps on. Her work spans industries such as healthcare, education, government, and finance, where she advises enterprise leaders and builds scalable systems that generate lasting impact. Through her TEDx Talk, Berthine explores the intersection of identity and leadership, challenging audiences to reconsider the unseen power of names and the profound role they play in how we connect, communicate, and lead.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:jane@example.com",
    },
  },
  {
    name: "Bushra Amiwala",
    role: "Elected Official & Solutions Consultant @ Google",
    image: "/pictures/upcoming-events/metamorphisis-speakers/Bushra_Amiwala.png",
    bio: "Bushra Amiwala is a trailblazing activist and the first Gen Z elected official in the U.S., serving on the Skokie Board of Education. Acclaimed by TIME and Glamour Magazine, she's a media figure featured in PBS, Hulu, and Amazon documentaries. Bushra Amiwala is known to empower youth through civic engagement, and was awarded the Women’s Champion Award sponsored by the United Nations, has graced the cover of TIME magazine, and was recognized on Forbes 30 under 30. Bushra is currently a Kellogg MBA candidate and Solutions Consultant at Google, and a dynamic speaker advocating for underrepresented voices, demonstrating exceptional leadership and resilience.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:john@example.com",
    },
  },
  {
    name: "Brian Will",
    role: "Entrepreneur & WSJ Bestselling Author",
    image: "/pictures/upcoming-events/metamorphisis-speakers/Brian_Will.jpg",
    bio: "Brian Will is a serial entrepreneur, two-time Wall Street Journal bestselling author, and a leading consultant in business and sales management. He has founded or co-founded ten companies across four industries, with combined valuations exceeding half a billion dollars. Today, he oversees a successful restaurant chain in Atlanta and a diverse real estate portfolio in Georgia and Florida. Brian also serves on the city council in his hometown of Alpharetta, Georgia.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:john@example.com",
    },
  },
  {
    name: "Angela Burgess",
    role: "President & CEO of Broad Oaks Consulting",
    image: "/pictures/upcoming-events/metamorphisis-speakers/Angela_Burgess.jpg",
    bio: "Angela Burgess is the President & CEO of Broad Oaks Consulting, a nonprofit consulting firm transforming the way organizations fundraise and lead. She is also the best-selling author of Are You on the Right Bus? Navigating Change on the Road to Success, a compelling memoir to making meaningful, measurable change—starting with yourself. Before founding Broad Oaks, Angela spent a decade in wealth management, helping financial advisors grow and scale their businesses. But her true calling emerged when she pivoted to the nonprofit sector, bringing the same strategic rigor to mission-driven work. As a consultant with frontline experience, Angela brings an insider’s perspective to the challenges nonprofit leaders face. Her experience goes beyond advising organizations—she’s worked in the trenches as a fundraiser and as an Executive Director. She has transformed nonprofits by increasing revenue, improving outcomes, and building stronger, more engaged boards. Her firsthand knowledge fuels her work today, helping mission-driven organizations unlock their potential and achieve breakthrough results. Angela brings real-world insight, results-driven strategies, and a dash of Iowa pragmatism to her work. Originally from Iowa City, she now lives in Houston, TX with her husband and their dog, Enzo. She’s an avid traveler, passionate cook, and never misses her daily workout.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:john@example.com",
    },
  },
  {
    name: "Anna Juanita Jattkowski-Hudson",
    role: "Retired Educator & Alzheimer’s Advocate",
    image: "/pictures/upcoming-events/metamorphisis-speakers/Anna_Jattkowski.jpeg",
    bio: "Anna Juanita Jattkowski-Hudson, M.A., Hon FTL, is a retired educator, dancer, and Alzheimer’s disease advocate. Over a 45 year career in education, she has served in various capacities as a university Registrar and college lecturer in dance both in the United States and the United Kingdom (UK). She was honored in the inaugural class receiving the Honorary Fellowship (the conservatoire’s highest honor) from her alma mater, Trinity Laban Conservatoire of Music and Dance, in London, UK, for her service to arts education and student success. A company member of Chicago’s Desueño Latin Footwork Team, Anna has performed at some of the city’s biggest stages including Taste of Chicago, Navy Pier’s Wave Wall Moves, and Chicago SummerDance. Her dance talents have extended to choreography where she was invited to perform at the 101st Miss America competition. Passionate about advocating for her late mother’s story, Anna is a designated eight year champion of the Alzheimer’s Association Walk to End Alzheimer’s in her alter ego as Rosie the Rex.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:john@example.com",
    },
  },
  {
    name: "Josh Bandoch",
    role: "Persuasive Advocacy & Public Policy Strategist",
    image: "/pictures/upcoming-events/metamorphisis-speakers/Joshua_Bandoch.jpg",
    bio: "Josh Bandoch works at the nexus of cutting-edge persuasive advocacy and rigorous public policy research. His book on persuasion is forthcoming in 2026. He has extensive experience advising senior leaders on their communications strategies. His policy advocacy centers on how to make the American Dream become reality for more of our neighbors. Central to that Dream is social mobility; and antithetical to it is poverty. We have too much of the latter, and not enough of the former. Josh is committed to turning that around.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:john@example.com",
    },
  },
  {
    name: "Erica Bauer",
    role: "Health Communication Expert & Equity Strategist",
    image: "/pictures/upcoming-events/metamorphisis-speakers/Erica_Bauer.jpg",
    bio: "Erica is a health communication expert and equity strategist who has spent her career turning data into actionable insights that drive systemic change. Across academia, health care, education, and even professional sports, her work has always centered one powerful principle: community voice must lead the way. She’s held roles most dream of—including Director of Community Engagement for the Chicago Bulls, where she used the platform of basketball to invest in disinvested communities through strategic partnerships, alumni engagement, and high-impact programming. Before that, she spent seven years in Chicago Public Schools designing student-centered, equity-driven systems that reshaped enrollment, achievement, and support services. Her research roots run deep—she completed a postdoctoral fellowship in health services at the VA, studying how to improve care for veterans with complex chronic conditions. But Erica is also a storyteller at heart. She writes and performs children’s music about Black women who changed the world—because she believes every child deserves more Harriet Tubman and less Yankee Doodle. Whether she’s on a stage, in a classroom, at a board table, or behind the mic—Erica’s work is rooted in making complex information accessible, actionable, and deeply human. She is regularly invited to deliver keynotes, lead workshops, and serve on panels focused on DEI, equitable systems design, and strategic transformation. Erica earned her PhD in Communication Studies (Health Communication) from the University of Illinois at Urbana-Champaign, and both her BA and MA in Communication from the University of Dayton. At her core, Erica is committed to expanding access, honoring lived experience, and building a world where every voice matters—especially the ones we don’t hear enough.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:john@example.com",
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
                      <Link href={event.registration.url} target="_blank" rel="noopener noreferrer">
                        {event.registration.isOpen ? "Register Now" : "Registration Coming Soon"}
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Will decide later if dedicated page for event is needed      
                <div className="mt-8">
                  <Button asChild variant="outline">
                    <Link href={`/upcoming-events/${event.id}`}>
                      View Event Details <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Separator className="w-full max-w-screen-xl mx-auto my-4 border-t-2"/>
        <div className="container px-4 py-16 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"><span className="text-red-600">Featured </span>Speakers</h1>
            <p className="mt-4 text-lg text-gray-600">Learn about the individuals who will share their ideas at this <span className="text-red-600">TEDx</span>UofIChicago event.</p>
          </motion.div>
  
          <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {featuredSpeakers.map((member, index) => (
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
    </div>
  )
}

