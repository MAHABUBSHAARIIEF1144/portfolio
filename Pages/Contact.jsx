import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Clock, Send } from 'lucide-react';
import ContactForm from '@/components/portfolio/ContactForm';
import SectionHeader from '@/components/portfolio/SectionHeader';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sharuksmart1144@gmail.com",
      href: "mailto:sharuksmart1144@gmail.com",
      color: "bg-blue-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(605) 585-6271",
      href: "tel:6055856271",
      color: "bg-green-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vermillion, SD 57069",
      href: null,
      color: "bg-purple-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "shaik-mahabub",
      href: "https://www.linkedin.com/in/shaik-mahabub/",
      color: "bg-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-6">
              <Send className="w-4 h-4" />
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Let's <span className="text-blue-600">Connect</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-10">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300"
                      >
                        <div className={`w-12 h-12 ${info.color} bg-opacity-10 rounded-xl flex items-center justify-center`}>
                          <info.icon className={`w-5 h-5 ${info.color.replace('bg-', 'text-')}`} />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">{info.label}</p>
                          <p className="font-medium text-slate-900">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                        <div className={`w-12 h-12 ${info.color} bg-opacity-10 rounded-xl flex items-center justify-center`}>
                          <info.icon className={`w-5 h-5 ${info.color.replace('bg-', 'text-')}`} />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">{info.label}</p>
                          <p className="font-medium text-slate-900">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-slate-900">Available for Opportunities</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  I'm currently open to full-time positions, internships, and freelance projects. 
                  Let's discuss how I can contribute to your team!
                </p>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-3 mt-6 text-slate-500">
                <Clock className="w-5 h-5" />
                <span>Average response time: Within 24 hours</span>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Location"
            title="Based in South Dakota"
            description="Currently studying at the University of South Dakota, open to remote and relocation opportunities"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100"
          >
            <div className="h-80 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Vermillion, SD</h3>
                <p className="text-slate-600">University of South Dakota</p>
                <p className="text-slate-500 text-sm mt-2">Open to opportunities worldwide</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Whether it's a new project, a job opportunity, or just a conversation about tech, 
              I'm always excited to connect with like-minded individuals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:sharuksmart1144@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-medium transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Me Directly
              </a>
              <a
                href="https://www.linkedin.com/in/shaik-mahabub/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-slate-600 text-white hover:bg-slate-800 px-8 py-4 rounded-full font-medium transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}