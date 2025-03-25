"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send the form data to our API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      toast({
        title: "Message sent!",
        description: "We&apos;ll get back to you as soon as possible.",
      })

      // Reset form
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Something went wrong.",
        description: "Your message couldn&apos;t be sent. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-16">
      <div className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"><span className="text-red-600">Contact </span>Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            Have questions or want to get involved with <span className="text-red-600">TEDx</span>UofIChicago? We&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid max-w-4xl gap-8 mx-auto mt-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold text-gray-900">Get In Touch</h2>
            <p className="mt-4 text-gray-600">
              Whether you&apos;re interested in attending our events, becoming a speaker, or joining our team, we&apos;re here to
              help.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-base font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-gray-600">tedxuofichicago@gmail.com</p>
              </div>

              <div>
                <h3 className="text-base font-medium text-gray-900">Location</h3>
                <p className="mt-1 text-gray-600">
                  University of Illinois Chicago
                  <br />
                  750 S Halsted St
                  <br />
                  Chicago, IL 60607
                </p>
              </div>

              <div>
                <h3 className="text-base font-medium text-gray-900">Social Media</h3>
                <div className="flex mt-1 space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-600"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-600"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-600"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center">Sending...</span>
                ) : (
                  <span className="flex items-center">
                    Send Message <Send className="w-4 h-4 ml-2" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}