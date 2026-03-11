"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, Github, X, Linkedin, Phone } from "lucide-react"
import { GradientOutlineBorder } from "@/components/effects/gradient-outline-border"

export function ContactForm() {
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Contact Form */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">CONTACT ME</h2>
          <p className="text-gray-400 leading-relaxed">
            I'm currently open to new opportunities and would love to hear from you! Whether you have a project in mind,
            want to discuss potential collaboration, or have any questions about my work, feel free to reach out. I'm
            available for both remote and on-site positions that align with my skills and interests.
          </p>
        </div>

        <GradientOutlineBorder gradientColors={["#06b6d4", "#8b5cf6", "#ec4899"]}>
          <form onSubmit={handleSubmit} className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-lg space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">
                Your Name:
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">
                Your Email:
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
                placeholder="Enter your email address"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">
                Your Message:
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400 resize-none"
                placeholder="Write your message here..."
              />
            </div>

            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg ${
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
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE</span>
                </div>
              )}
            </Button>
          </form>
        </GradientOutlineBorder>
      </div>

      {/* Contact Information */}
      <div className="space-y-8">
        {/* Vertical CONTACT Text */}
        <div className="hidden lg:block absolute right-8 top-1/2 transform -translate-y-1/2">
          <div className="writing-mode-vertical text-cyan-400 text-lg font-bold tracking-widest opacity-30">
            CONTACT
          </div>
        </div>

        {/* Email */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4 p-6 bg-slate-800/30 rounded-lg border border-slate-700/50">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Email Address</p>
              <p className="text-white font-medium">olusola.dave11@gmail.com</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Connect With Me</h3>
            <div className="flex space-x-4">
              <GradientOutlineBorder gradientColors={["#333", "#555"]} containerClassName="rounded-full">
                <a
                  href="https://github.com/olusolaDav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-slate-700/80 transition-colors duration-300 cursor-hover"
                >
                  <Github className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                </a>
              </GradientOutlineBorder>

              <GradientOutlineBorder gradientColors={["#1DA1F2", "#0d8bd9"]} containerClassName="rounded-full">
                <a
                  href="https://x.com/olusola_dav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-slate-700/80 transition-colors duration-300 cursor-hover"
                >
                  <X className="h-5 w-5 text-blue-400 hover:text-blue-300 transition-colors" />
                </a>
              </GradientOutlineBorder>

              <GradientOutlineBorder gradientColors={["#0077B5", "#005885"]} containerClassName="rounded-full">
                <a
                  href="https://www.linkedin.com/in/olusoladav/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-slate-700/80 transition-colors duration-300 cursor-hover"
                >
                  <Linkedin className="h-5 w-5 text-blue-500 hover:text-blue-400 transition-colors" />
                </a>
              </GradientOutlineBorder>

              <GradientOutlineBorder gradientColors={["#25D366", "#128C7E"]} containerClassName="rounded-full">
                <a
                  href="https://wa.link/7rqv43"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-slate-700/80 transition-colors duration-300 cursor-hover"
                >
                  <Phone className="h-5 w-5 text-green-400 hover:text-green-300 transition-colors" />
                </a>
              </GradientOutlineBorder>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-4 p-6 bg-slate-800/20 rounded-lg border border-slate-700/30">
            <h4 className="text-lg font-semibold text-cyan-400">Let's Work Together</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              I'm always excited to work on new projects and collaborate with amazing people. Whether you have a project
              in mind or just want to chat about technology, feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
