import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, Palette, Settings, Cloud, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/portfolio/SectionHeader';
import CertificationCard from '@/components/portfolio/CertificationCard';

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code2,
      color: "bg-blue-500",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 75 },
        { name: "React", level: 85 },
        { name: "Angular", level: 70 },
        { name: "Spring Boot", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "PHP", level: 60 },
      ]
    },
    {
      title: "Database & Backend",
      icon: Database,
      color: "bg-green-500",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "Docker", level: 70 },
      ]
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      color: "bg-purple-500",
      skills: [
        { name: "Adobe XD", level: 85 },
        { name: "UI Design", level: 80 },
        { name: "Responsive Design", level: 90 },
        { name: "Wireframing", level: 75 },
      ]
    },
    {
      title: "Tools & DevOps",
      icon: Settings,
      color: "bg-orange-500",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "Firebase Hosting", level: 80 },
        { name: "Agile/Scrum", level: 85 },
      ]
    },
  ];

  const certifications = [
    { name: "Java Full Stack Developer", issuer: "StackRoute (NIIT Venture)" },
    { name: "Python for Everybody", issuer: "Coursera" },
    { name: "Cyber Security & Security Operations", issuer: "Kalasalingam University" },
    { name: "AI and Deep Learning", issuer: "Kalasalingam University" },
    { name: "SQL Workshop", issuer: "Skill Nation" },
  ];

  const softSkills = [
    { emoji: "🤝", label: "Team Collaboration" },
    { emoji: "💬", label: "Communication" },
    { emoji: "🎯", label: "Problem Solving" },
    { emoji: "⏰", label: "Time Management" },
    { emoji: "📊", label: "Project Management" },
    { emoji: "🔄", label: "Adaptability" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-6">
              Technical Arsenal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Skills & <span className="text-blue-600">Expertise</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              A comprehensive toolkit built through academic excellence and real-world experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 ${category.color} bg-opacity-10 rounded-xl flex items-center justify-center`}>
                    <category.icon className={`w-6 h-6 ${category.color.replace('bg-', 'text-')}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-700 font-medium">{skill.name}</span>
                        <span className="text-slate-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full ${category.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Beyond Technical"
            title="Soft Skills"
            description="The interpersonal abilities that complement my technical expertise"
          />

          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-3 bg-white hover:bg-blue-50 rounded-2xl px-6 py-4 shadow-sm border border-slate-100 cursor-pointer transition-all duration-300"
              >
                <span className="text-2xl">{skill.emoji}</span>
                <span className="font-medium text-slate-700">{skill.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Credentials"
            title="Certifications & Training"
            description="Professional certifications that validate my expertise"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to see these skills in action?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Check out my projects where I've applied these technologies to build real solutions.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 h-14"
            >
              <Link to={createPageUrl('Projects')}>
                View Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}