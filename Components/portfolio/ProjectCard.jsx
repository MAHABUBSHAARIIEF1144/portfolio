import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500"
    >
      {/* Image Section */}
      <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-indigo-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            className="flex gap-4"
          >
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
              >
                <ExternalLink className="w-6 h-6 text-white" />
              </a>
            )}
          </motion.div>
        </div>
        
        {/* Project Icon/Visual */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl">{project.emoji}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
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

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {project.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        {project.liveUrl && (
          <Button 
            asChild 
            className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl group/btn"
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              View Live Project
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
}