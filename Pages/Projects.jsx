import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SectionHeader from '@/components/portfolio/SectionHeader';

export default function Projects() {
  const projects = [
    {
      title: "Farmer Buddy – The Farmer Guide",
      subtitle: "Agricultural Decision Support Platform",
      emoji: "🌾",
      description: "A comprehensive web application designed to empower farmers with data-driven crop planning and agricultural decisions. Features an intelligent crop prediction tool and organic product marketplace.",
      tech: ["Angular", "Firebase", "TypeScript", "HTML", "CSS"],
      features: [
        "Intelligent crop prediction system based on location, season, and soil data",
        "Organic product store with detailed product information",
        "Dynamic farming tips and seasonal agricultural advice",
        "Real-time agri-news integration",
        "Responsive design optimized for rural connectivity"
      ],
      impact: [
        { label: "Live Platform", value: "✓" },
        { label: "Tech Stack", value: "Angular + Firebase" },
        { label: "Users", value: "Farmers across India" }
      ],
      liveUrl: "https://farmerbuddy-4281d.web.app/",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "ATA Travels – Bus Management System",
      subtitle: "Enterprise Travel Management Solution",
      emoji: "🚌",
      description: "A full-stack enterprise application for managing bus travel services with comprehensive CRUD operations, secure authentication, and real-time fleet management capabilities.",
      tech: ["Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
      features: [
        "Complete vehicle fleet management with CRUD operations",
        "Admin dashboard for route and schedule management",
        "Secure RESTful API architecture",
        "Real-time data synchronization",
        "Responsive interface for desktop and mobile"
      ],
      impact: [
        { label: "Architecture", value: "Full Stack" },
        { label: "Backend", value: "Spring Boot" },
        { label: "Database", value: "MySQL" }
      ],
      color: "from-blue-500 to-indigo-600"
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
              <Sparkles className="w-4 h-4" />
              Featured Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Projects & <span className="text-blue-600">Creations</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Real-world applications that showcase my ability to build scalable, user-focused solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Project Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500">
                <div className="grid lg:grid-cols-2">
                  {/* Left - Visual */}
                  <div className={`relative h-64 lg:h-auto bg-gradient-to-br ${project.color} p-8 flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-white/10" />
                    
                    {/* Large Emoji */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-8xl md:text-9xl"
                    >
                      {project.emoji}
                    </motion.div>

                    {/* Tech Badges Floating */}
                    <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} className="bg-white/20 text-white border-white/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="p-8 lg:p-12">
                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                      {project.title}
                    </h2>
                    <p className="text-blue-600 font-medium mb-4">{project.subtitle}</p>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Impact Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-slate-50 rounded-xl">
                      {project.impact.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-lg font-bold text-slate-900">{stat.value}</div>
                          <div className="text-xs text-slate-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    {project.liveUrl && (
                      <Button 
                        asChild 
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl h-12"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          View Live Project
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* More Projects CTA */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              More Projects Coming Soon
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
              I'm constantly working on new ideas and expanding my portfolio. 
              Want to collaborate on something exciting?
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 h-14"
            >
              <Link to={createPageUrl('Contact')}>
                Let's Build Together
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}