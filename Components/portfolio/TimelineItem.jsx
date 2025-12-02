import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Building2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function TimelineItem({ experience, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative pl-8 md:pl-12 pb-12"
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[11px] md:left-[19px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-100" />
      )}

      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-2 top-1">
        <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white" />
        </div>
      </div>

      {/* Content Card */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {experience.title}
            </h3>
            <div className="flex items-center gap-2 text-slate-600 mt-1">
              <Building2 className="w-4 h-4 text-blue-500" />
              <span className="font-medium">{experience.company}</span>
            </div>
          </div>
          <Badge className="bg-blue-50 text-blue-600 border-blue-100 w-fit">
            <Calendar className="w-3 h-3 mr-1" />
            {experience.period}
          </Badge>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
          <MapPin className="w-4 h-4" />
          {experience.location}
        </div>

        {/* Description */}
        <ul className="space-y-3">
          {experience.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>

        {/* Skills Used */}
        {experience.skills && (
          <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-100">
            {experience.skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="bg-slate-100 text-slate-600"
              >
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}