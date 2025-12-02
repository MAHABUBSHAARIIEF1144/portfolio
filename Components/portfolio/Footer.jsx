import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Mahabub<span className="text-blue-400">.</span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Full Stack Developer passionate about building scalable, user-focused solutions with modern technologies.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://www.linkedin.com/in/shaik-mahabub/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-blue-600 rounded-lg transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:sharuksmart1144@gmail.com"
                className="p-3 bg-slate-800 hover:bg-blue-600 rounded-lg transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <Link
                  key={link}
                  to={createPageUrl(link)}
                  className="block text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-4">
              <a 
                href="mailto:sharuksmart1144@gmail.com" 
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-all"
              >
                <Mail className="w-5 h-5 text-blue-400" />
                sharuksmart1144@gmail.com
              </a>
              <a 
                href="tel:6055856271" 
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-all"
              >
                <Phone className="w-5 h-5 text-blue-400" />
                (605) 585-6271
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-blue-400" />
                Vermillion, SD 57069
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Mahabub Shaariief Shaik. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> in South Dakota
          </p>
        </div>
      </div>
    </footer>
  );
}