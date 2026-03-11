"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { GradientOutlineBorder } from "@/components/effects/gradient-outline-border"
import type { ContactInfo } from "@/types"

interface ContactFormProps {
  contactInfo?: ContactInfo
}

export function ContactForm({ contactInfo }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <GradientOutlineBorder gradientColors={["#06b6d4", "#8b5cf6", "#ec4899"]} className="rounded-xl">
      <form onSubmit={handleSubmit} className="bg-slate-900/95 backdrop-blur-sm p-8 lg:p-10 rounded-xl space-y-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">CONTACT ME</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          I'm currently open to new opportunities and would love to hear from you!
        </p>

        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-300 block">
            Your Name:
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/50 h-12"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-300 block">
            Your Email:
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/50 h-12"
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-300 block">
            Your Message:
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/50 resize-none"
            placeholder="Tell me about your project or inquiry..."
          />
        </div>

        {submitStatus.type && (
          <div
            className={`p-4 rounded-lg text-sm font-medium ${
              submitStatus.type === "success"
                ? "bg-green-500/20 border border-green-500/30 text-green-400"
                : "bg-red-500/20 border border-red-500/30 text-red-400"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed h-12 flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </Button>
      </form>
    </GradientOutlineBorder>
  )
}
