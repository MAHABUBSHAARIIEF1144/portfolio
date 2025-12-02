import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code, Heart, ArrowRight, MapPin, Calendar, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/portfolio/SectionHeader';

export default function About() {
  const journey = [
    {
      icon: GraduationCap,
      title: "Master's in Computer Science",
      place: "University of South Dakota",
      period: "2023 - 2025",
      description: "Pursuing advanced studies with a 3.7 GPA, focusing on software engineering and modern development practices."
    },
    {
      icon: Briefcase,
      title: "Project Engineer at Wipro",
      place: "Bhuvaneswar, India",
      period: "Mar - Jun 2023",
      description: "Completed rigorous training in Java, Spring Boot, and Docker. Selected for project allocation based on performance."
    },
    {
      icon: Code,
      title: "Software Development Intern",
      place: "Food Printer Pvt Ltd, Chennai",
      period: "Dec 2021 - May 2022",
      description: "Led UI/UX design for web and mobile applications using Adobe XD, collaborating with a team of 7 developers."
    }
  ];

  const hobbies = [
    { emoji: "💻", label: "Coding" },
    { emoji: "🏏", label: "Cricket" },
    { emoji: "📷", label: "Photography" },
    { emoji: "🎬", label: "Videography" },
    { emoji: "🎵", label: "Music" },
    { emoji: "✂️", label: "Video Editing" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 aspect-square flex items-center justify-center">
                {/* Decorative Elements */}
                <div className="absolute top-6 left-6 w-20 h-20 bg-blue-200 rounded-full opacity-50" />
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-200 rounded-full opacity-50" />
                
                {/* Main Content */}
                <div className="relative text-center">
                  <div className="text-8xl mb-6">👨‍💻</div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Mahabub Shaariief Shaik</h3>
                  <p className="text-slate-600">Full Stack Developer</p>
                  
                  {/* Location Badge */}
                  <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-white rounded-full shadow-sm">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-slate-600">Vermillion, SD</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100"
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-slate-800">MS CS '25</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-6">
                About Me
              </span>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Passionate about building{' '}
                <span className="text-blue-600">digital experiences</span>
              </h1>

              <div className="space-y-4 text-lg text-slate-600 leading-relaxed mb-8">
                <p>
                  I'm a detail-oriented Full Stack Developer with a passion for creating scalable, 
                  maintainable, and user-focused solutions. Currently completing my Master's in 
                  Computer Science at the University of South Dakota, I bring practical experience 
                  from Wipro Technologies and internship roles.
                </p>
                <p>
                  My journey in tech has equipped me with expertise in Java, Spring Boot, React, 
                  and modern deployment practices including Docker. I thrive in Agile environments 
                  and love collaborating with teams to bring ideas to life.
                </p>
                <p>
                  Beyond coding, I'm an avid photographer and cricket enthusiast who believes in 
                  continuous learning and creative problem-solving.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8"
                >
                  <Link to={createPageUrl('Experience')}>
                    View Experience
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8 border-slate-300"
                >
                  <Link to={createPageUrl('Contact')}>Get in Touch</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Education"
            title="Academic Background"
            description="Building a strong foundation in computer science and software engineering"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Master of Science in Computer Science
                  </h3>
                  <p className="text-lg text-slate-600 mb-4">
                    University of South Dakota, Vermillion, SD
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Calendar className="w-4 h-4" />
                      <span>Expected May 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <BookOpen className="w-4 h-4" />
                      <span>GPA: 3.7/4.0</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-slate-600">
                      Focused coursework in advanced software engineering, database systems, 
                      and modern development practices. Active participant in programming 
                      competitions and tech community events.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="My Journey"
            title="The Path So Far"
            description="Key milestones that shaped my career in software development"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-blue-600" />
                </div>
                <span className="text-sm text-blue-600 font-medium">{item.period}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{item.place}</p>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Beyond Code"
            title="When I'm Not Coding"
            description="A glimpse into my interests and hobbies outside of software development"
          />

          <div className="flex flex-wrap justify-center gap-4">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-3 bg-slate-50 hover:bg-blue-50 rounded-full px-6 py-4 cursor-pointer transition-colors"
              >
                <span className="text-2xl">{hobby.emoji}</span>
                <span className="font-medium text-slate-700">{hobby.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to build something amazing together?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, projects, or just have a chat about tech.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 h-14"
              >
                <Link to={createPageUrl('Contact')}>
                  <Heart className="w-5 h-5 mr-2" />
                  Let's Connect
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-slate-600 text-white hover:bg-slate-800 rounded-full px-8 h-14"
              >
                <Link to={createPageUrl('Projects')}>
                  View My Work
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}