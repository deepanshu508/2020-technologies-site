import React from 'react';
import { Home, Briefcase, Sparkles, User } from 'lucide-react';
import { ViewState } from '../types';

interface FloatingDockProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  isGlass: boolean;
}

const FloatingDock: React.FC<FloatingDockProps> = ({ currentView, onNavigate, isGlass }) => {
  
  // Define the tabs
  const tabs = [
    { id: 'home', icon: Home, view: ViewState.HOME, label: 'Home' },
    { id: 'jobs', icon: Briefcase, view: ViewState.JOB_CATEGORIES, label: 'Explore' }, // Maps to Categories
    { id: 'ai', icon: Sparkles, view: ViewState.AI_AGENT, label: 'AI Agent' },
  ];

  // Logic to find active index (handling nested views like JOBS under JOB_CATEGORIES)
  const getActiveIndex = () => {
    if (currentView === ViewState.HOME) return 0;
    if (currentView === ViewState.JOB_CATEGORIES || currentView === ViewState.JOBS) return 1;
    if (currentView === ViewState.AI_AGENT) return 2;
    return -1;
  };

  const activeIndex = getActiveIndex();

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] dock-container animate-in fade-in slide-in-from-top-4 duration-700">
      <div className={`relative flex items-center p-1.5 rounded-full transition-all duration-300 ${isGlass ? 'bg-black shadow-2xl border border-white/10' : 'bg-slate-900 shadow-xl'}`}>
        
        {/* The Liquid Glass Pill (Background for active item) */}
        <div 
            className="liquid-pill-glass absolute top-1.5 bottom-1.5 rounded-full"
            style={{
                left: `calc(${activeIndex * 80}px + 6px)`,
                width: '80px',
                opacity: activeIndex === -1 ? 0 : 1,
            }}
        />

        {/* Icons */}
        {tabs.map((tab, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.view)}
              className="relative w-20 h-14 flex flex-col items-center justify-center gap-1 z-10 transition-all duration-300 focus:outline-none"
            >
              <tab.icon 
                size={isActive ? 20 : 22} 
                className={`transition-all duration-300 ${isActive ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              
              <span className={`text-[10px] font-medium tracking-wide transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0 text-white' : 'opacity-0 translate-y-2 absolute'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}

        {/* Extra contact button hidden in this mini dock, or could be added as 4th */}
      </div>
    </div>
  );
};

export default FloatingDock;
