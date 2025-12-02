import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Mail, MapPin, Sparkles, Code2, Layers, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const stats = [
    { value: '3.7', label: 'GPA', suffix: '/4.0' },
    { value: '2+', label: 'Projects', suffix: '' },
    { value: '5+', label: 'Certifications', suffix: '' },
  ];

  const highlights = [
    { icon: Code2, title: 'Full Stack', description: 'End-to-end development' },
    { icon: Layers, title: 'UI/UX Design', description: 'Adobe XD expertise' },
    { icon: Zap, title: 'Agile Ready', description: 'Collaborative workflows' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-40" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Open to Opportunities</span>
              </div>

              {/* Name & Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Hi, I'm <span className="text-blue-600">Mahabub</span>
                <br />
                <span className="text-slate-600">Full Stack Developer</span>
              </h1>

              {/* Bio */}
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
                I build scalable, user-focused web applications with modern technologies. 
                Currently pursuing my Master's in Computer Science at the University of South Dakota, 
                with hands-on experience in Java, Spring Boot, React, and cloud deployment.
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 text-slate-500 mb-8">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Vermillion, SD • Available Worldwide</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-12">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 h-14 text-base"
                >
                  <Link to={createPageUrl('Projects')}>
                    View My Work
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8 h-14 text-base border-slate-300 hover:bg-slate-50"
                >
                  <a 
                    href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6927881bf0f061ca6dda291d/b75790c83_MAHABUB_SHAARIIEFSHAIK_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-400">Find me on:</span>
                <a 
                  href="https://www.linkedin.com/in/shaik-mahabub/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-slate-600" />
                </a>
                <a 
                  href="mailto:sharuksmart1144@gmail.com"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 text-slate-600" />
                </a>
              </div>
            </motion.div>

            {/* Right Content - Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Visual Card */}
                <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-2xl shadow-blue-200">
                  <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm" />
                  
                  {/* Code Preview */}
                  <div className="relative font-mono text-sm text-white/90 space-y-2">
                    <div className="text-blue-200">// Developer Profile</div>
                    <div>
                      <span className="text-pink-300">const</span>{' '}
                      <span className="text-yellow-300">developer</span> = {'{'}
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-200">name:</span>{' '}
                      <span className="text-green-300">"Mahabub Shaik"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-200">role:</span>{' '}
                      <span className="text-green-300">"Full Stack Dev"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-200">skills:</span> [
                      <span className="text-green-300">"Java"</span>,{' '}
                      <span className="text-green-300">"React"</span>,{' '}
                      <span className="text-green-300">"Spring"</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-200">passion:</span>{' '}
                      <span className="text-green-300">"Building solutions"</span>
                    </div>
                    <div>{'};'}</div>
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100"
                >
                  <div className="text-2xl font-bold text-slate-900">MS</div>
                  <div className="text-xs text-slate-500">Computer Science</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100"
                >
                  <div className="text-2xl">🎓</div>
                  <div className="text-xs text-slate-500 font-medium">USD 2025</div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 mt-20 max-w-2xl"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">
                  {stat.value}
                  <span className="text-blue-600">{stat.suffix}</span>
                </div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What I Bring to the Table
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A unique blend of technical expertise and creative problem-solving
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group bg-slate-50 hover:bg-blue-50 rounded-2xl p-8 transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 bg-white group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-6 shadow-sm transition-colors">
                  <item.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 h-14 border-slate-300"
            >
              <Link to={createPageUrl('About')}>
                Learn More About Me
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}