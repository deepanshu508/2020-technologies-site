import React, { useState } from 'react';
import { ViewState } from '../types';
import { Briefcase, Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  isGlass: boolean;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [activeTab, setActiveTab] = useState(currentView);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (view: ViewState) => {
    setActiveTab(view);
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', view: ViewState.HOME },
    { label: 'Jobs', view: ViewState.JOBS },
    { label: 'Employers', view: ViewState.CONTACT },
    { label: 'AI Agent', view: ViewState.AI_AGENT },
    { label: 'Categories', view: ViewState.JOB_CATEGORIES }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 pointer-events-none">
        
        {/* Logo - Left */}
        <div 
          className="pointer-events-auto flex items-center gap-2 cursor-pointer group"
          onClick={() => handleNav(ViewState.HOME)}
        >
          <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 shadow-lg group-hover:bg-white/20 transition-all">
             <Briefcase size={20} className="text-white" />
          </div>
          <span className="hidden md:block font-bold text-lg tracking-tight text-white drop-shadow-md">2020 Technologies</span>
        </div>

        {/* Desktop: Center Pill Navigation */}
        <div className="hidden md:flex pointer-events-auto glass-pill rounded-full px-2 py-1.5 items-center gap-1 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.view)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === item.view 
                ? 'bg-white text-slate-900 shadow-md' 
                : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Actions & Mobile Menu Toggle */}
        <div className="pointer-events-auto flex items-center gap-3 md:gap-4">
          <button className="hidden md:flex w-10 h-10 rounded-full glass-pill items-center justify-center text-white hover:bg-white/20 transition-all">
              <Search size={18} />
          </button>
          
          <button className="hidden md:flex w-10 h-10 rounded-full bg-white items-center justify-center shadow-lg overflow-hidden border-2 border-white/20">
              <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="User" 
                  className="w-full h-full object-cover"
              />
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-10 h-10 rounded-full glass-pill flex items-center justify-center text-white hover:bg-white/20 transition-all"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-900/95 backdrop-blur-2xl flex flex-col animate-in fade-in duration-200">
          <div className="flex justify-end p-6">
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col items-center justify-center flex-1 gap-8 p-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.view)}
                className={`text-3xl font-bold tracking-tight transition-colors ${
                  activeTab === item.view ? 'text-blue-400' : 'text-white hover:text-blue-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="w-16 h-1 bg-white/10 rounded-full my-4" />
            
            <button className="flex items-center gap-2 text-white/60 font-medium">
               <Search size={18} /> Search Jobs
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;