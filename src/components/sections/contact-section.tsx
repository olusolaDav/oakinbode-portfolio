"use client"

import { SectionWrapper } from "@/components/layout/section-wrapper"
import { SectionHeading } from "@/components/ui/section-heading"
import { ContactForm } from "@/components/ui/contact-form"
import { Mail, Phone, MapPin, MessageCircle, Github, Linkedin, X } from "lucide-react"
import Link from "next/link"
import type { ContactInfo } from "@/types"

interface ContactSectionProps {
  contactInfo: ContactInfo
}

export function ContactSection({ contactInfo }: ContactSectionProps) {
  return (
    <SectionWrapper
      id="contact"
      spacing="lg"
      containerVariant="wide"
      gradientColor="from-pink-500/10 via-purple-500/5 to-blue-500/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Section - Contact Info */}
          <div className="space-y-12">
            <SectionHeading 
              title="Get in Touch" 
              size="lg"
            />
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              I'm always excited to discuss new opportunities and interesting projects. Whether you're a startup
              looking to build your first product or an established company seeking to enhance your digital
              presence, let's talk!
            </p>

            {/* Contact Methods */}
            <div className="space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-start space-x-4 p-5 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 hover:from-cyan-500/20 hover:to-blue-500/15 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 cursor-hover"
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">Email Address</div>
                  <div className="text-gray-400 text-sm">{contactInfo.email}</div>
                </div>
              </a>

              <a
                href={`https://wa.me/2348032158383`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start space-x-4 p-5 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 hover:from-green-500/20 hover:to-emerald-500/15 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 cursor-hover"
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold group-hover:text-green-400 transition-colors">WhatsApp</div>
                  <div className="text-gray-400 text-sm">Quick response</div>
                </div>
              </a>

              <div className="flex items-start space-x-4 p-5 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20">
                <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Location</div>
                  <div className="text-gray-400 text-sm">{contactInfo.location}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <div className="text-white font-semibold">Connect With Me</div>
              <div className="flex items-center space-x-3">
                <Link href="https://github.com/olusolaDav" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors group">
                  <Github className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </Link>
                <Link href="https://linkedin.com/in/olusoladav" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors group">
                  <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </Link>
                <Link href="https://x.com/olusola_dav" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors group">
                  <X className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </Link>
                <Link href="https://wa.me/2348032158383" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors group">
                  <MessageCircle className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </Link>
              </div>
            </div>

            {/* Response Time */}
            <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Usually responds within</span>
              </div>
              <div className="text-3xl font-bold text-white">24 hours</div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="lg:sticky lg:top-24">
            <ContactForm contactInfo={contactInfo} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
