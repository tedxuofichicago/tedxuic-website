"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
          <Link href="/" className="inline-block">
              <Image src="/pictures/logos/tedx-logo-white.png" alt="TEDxUofIChicago Logo" width={150} height={50} className="h-12 w-auto" />
            </Link>
            {/* <h2 className="text-2xl font-bold">
              <span className="text-red-600">TEDx</span>UofIChicago
            </h2> */}
            {/* <p className="mt-4 text-gray-400">
              TEDxUIC is an independently organized TED event at the University of Illinois Chicago.
            </p> */}
            <p className="mt-4 text-gray-400">
            &copy; {new Date().getFullYear()} TEDxUofIChicago. All rights reserved. This is an independent TEDx event operated under license from TED at the University of Illinois Chicago.
          </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/past-events" className="text-gray-400 hover:text-white">
                  Past Events
                </Link>
              </li>
              <li>
                <Link href="/upcoming-events" className="text-gray-400 hover:text-white">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex mt-4 space-x-4">
              <a
                href="https://www.facebook.com/TEDxUofIChicago/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/tedxuofichicago/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a> */}
              <a
                href="https://www.youtube.com/playlist?list=PLsRNoUx8w3rPKELdqHqfDljnLumP6tyJE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Youtube className="w-6 h-6" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
            <p className="mt-4 text-gray-400">
              University of Illinois Chicago
              <br />
              750 S Halsted St
              <br />
              Chicago, IL 60607
            </p>
          </div>
        </div>

        {/* <div className="pt-8 mt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} TEDxUIC. All rights reserved. This independent TEDx event is operated
            under license from TED.
          </p>
        </div> */}
        {/* Replace copyright with typewriter effect */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center">
          <div className="inline-flex items-center justify-center text-sm text-gray-300">
            <span>Built by TEDxUofIChicago with </span>
            <TypeAnimation
              sequence={[
                "passion",
                2000,
                "creativity",
                2000,
                "innovation",
                2000,
                "dedication",
                2000,
                "inspiration",
                2000,
                "❤️",
                2000,
              ]}
              wrapper="span"
              speed={50}
              deletionSpeed={65}
              repeat={Number.POSITIVE_INFINITY}
              cursor={true}
              className="text-red-400 font-medium ml-1"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

