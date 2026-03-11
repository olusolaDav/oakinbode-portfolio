"use client"

import { SectionWrapper } from "@/components/layout/section-wrapper"
import { SectionHeading } from "@/components/ui/section-heading"
import { ContactForm } from "@/components/ui/contact-form"
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
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Let's Work Together" 
          subtitle="Ready to bring your ideas to life? Let's start a conversation."
          size="lg"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                I'm always excited to discuss new opportunities and interesting projects. 
                Whether you're a startup looking to build your first product or an 
                established company seeking to enhance your digital presence, let's talk!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-colors">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📧</span>
                </div>
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-gray-400 text-sm">{contactInfo.email}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-colors">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📱</span>
                </div>
                <div>
                  <div className="text-white font-medium">WhatsApp</div>
                  <div className="text-gray-400 text-sm">Quick response</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-colors">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">🌍</span>
                </div>
                <div>
                  <div className="text-white font-medium">Location</div>
                  <div className="text-gray-400 text-sm">{contactInfo.location}</div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Usually responds within</span>
              </div>
              <div className="text-2xl font-bold text-white">24 hours</div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ContactForm contactInfo={contactInfo} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
