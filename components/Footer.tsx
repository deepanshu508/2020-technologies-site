import React from 'react';
import { Briefcase, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
    isGlass?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isGlass }) => {
  return (
    <footer className={`pt-20 pb-10 ${isGlass ? 'bg-slate-900/80 backdrop-blur-lg border-t border-white/10 text-white' : 'bg-slate-900 text-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white text-slate-900 p-1.5 rounded-lg">
                <Briefcase size={20} />
              </div>
              <span className="text-xl font-semibold tracking-tight">
                2020 Technologies
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              We are a leading recruitment firm committed to connecting top talent with exciting career opportunities. Founded in 2020.
            </p>
            <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                    <MapPin size={16} className="text-blue-400" />
                    <span>Delhi, India</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Phone size={16} className="text-blue-400" />
                    <a href="tel:9555970748" className="hover:text-white transition-colors">9555970748</a>
                </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Specialties</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><span className="hover:text-white transition-colors cursor-default">Sales Hiring</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">IT & Tech Hiring</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">Non-IT Hiring</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">Executive Search</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">For Candidates</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Browse All Jobs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Submit Resume</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career Advice</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">For Employers</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Post a Job</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Request Talent</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recruitment Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © 2024 2020 Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://2020technologies.in/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors text-xs flex items-center gap-1">
                2020technologies.in
            </a>
            <div className="w-px h-3 bg-slate-700"></div>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={18} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;