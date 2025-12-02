import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Award, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/portfolio/SectionHeader';
import TimelineItem from '@/components/portfolio/TimelineItem';
import CertificationCard from '@/components/portfolio/CertificationCard';

export default function Experience() {
  const experiences = [
    {
      title: "Project Engineer",
      company: "Wipro Technologies",
      location: "Bhuvaneswar, India",
      period: "Mar 2023 - Jun 2023",
      points: [
        "Successfully completed Wipro's rigorous 3-month training program, including comprehensive assessments and a capstone project",
        "Gained hands-on expertise in Java, Spring Boot, and Docker through intensive practical sessions",
        "Cleared all evaluations and was selected for project allocation based on outstanding performance",
        "Developed understanding of enterprise IT workflows, documentation standards, and client interaction protocols",
        "Collaborated in Agile-based environments, participating in sprint planning and daily standups"
      ],
      skills: ["Java", "Spring Boot", "Docker", "Agile", "PHP"]
    },
    {
      title: "Software Development Intern",
      company: "Food Printer Pvt Ltd",
      location: "Chennai, India",
      period: "Dec 2021 - May 2022",
      points: [
        "Designed complete UI for web and mobile applications using Adobe XD, creating wireframes and high-fidelity mockups",
        "Collaborated with a development team of 7 members to discuss and implement user interface ideas",
        "Worked on backend database development, gaining full-stack experience",
        "Participated in daily company meetings to present design ideas and incorporate feedback from professionals",
        "Gained valuable experience in the complete software development lifecycle (SDLC)"
      ],
      skills: ["Adobe XD", "UI Design", "Database", "Team Collaboration"]
    }
  ];

  const trainings = [
    {
      name: "Cyber Security and Security Operations",
      issuer: "Kalasalingam Academy of Research and Education",
      date: "June 2020"
    },
    {
      name: "AI and Deep Learning",
      issuer: "Kalasalingam Academy of Research and Education",
      date: "August 2020"
    },
    {
      name: "5-Day SQL Workshop",
      issuer: "Skill Nation",
      date: "November 2022"
    }
  ];

  const certifications = [
    { name: "Java Full Stack Developer", issuer: "StackRoute (NIIT Venture)" },
    { name: "Python for Everybody", issuer: "Coursera" },
    { name: "Cyber Security & Security Operations", issuer: "Kalasalingam University" },
    { name: "AI and Deep Learning", issuer: "Kalasalingam University" },
    { name: "SQL Workshop", issuer: "Skill Nation" },
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
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-6">
              Professional Journey
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Work <span className="text-blue-600">Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Building real-world solutions through hands-on experience in software development
            </p>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 border-slate-300"
            >
              <a 
                href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6927881bf0f061ca6dda291d/b75790c83_MAHABUB_SHAARIIEFSHAIK_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Full Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="Timeline"
            title="Professional Experience"
          />

          <div className="mt-12">
            {experiences.map((exp, index) => (
              <TimelineItem 
                key={index} 
                experience={exp} 
                index={index} 
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Education"
            title="Professional Training"
            description="Specialized training programs and workshops that enhanced my expertise"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {trainings.map((training, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm text-blue-600 font-medium">{training.date}</span>
                <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2">{training.name}</h3>
                <p className="text-slate-500 text-sm">{training.issuer}</p>
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
            title="Certifications"
            description="Professional certifications that validate my technical expertise"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Highlight */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready for New Challenges
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                With a strong foundation in full-stack development and a passion for creating 
                impactful solutions, I'm eager to contribute to innovative projects and grow 
                alongside talented teams.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8"
                >
                  <Link to={createPageUrl('Contact')}>
                    Get in Touch
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-slate-600 text-white hover:bg-slate-800 rounded-full px-8"
                >
                  <Link to={createPageUrl('Projects')}>View Projects</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "3.7", label: "GPA", suffix: "/4.0" },
                { value: "5+", label: "Certifications", suffix: "" },
                { value: "2+", label: "Real Projects", suffix: "" },
                { value: "1+", label: "Years Exp", suffix: "" },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
                >
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                    <span className="text-blue-400">{stat.suffix}</span>
                  </div>
                  <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}