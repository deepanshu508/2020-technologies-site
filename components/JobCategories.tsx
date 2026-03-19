import React from 'react';
import { JOB_CATEGORIES_DATA } from '../constants';
import { 
  TrendingUp, Briefcase, Wrench, Cpu, ShoppingBag, 
  Headphones, Phone, Code, Calculator, FileText, 
  Award, Users, ClipboardList, Server, Grid 
} from 'lucide-react';
import { JobCategory } from '../types';

interface JobCategoriesProps {
  isGlass: boolean;
  onSelectCategory: (category: JobCategory) => void;
}

const IconMap: Record<string, React.ElementType> = {
  TrendingUp, Briefcase, Wrench, Cpu, ShoppingBag,
  Headphones, Phone, Code, Calculator, FileText,
  Award, Users, ClipboardList, Server
};

const JobCategories: React.FC<JobCategoriesProps> = ({ onSelectCategory }) => {
  
  // Duplicate the array to ensure smooth continuous scrolling
  const sliderData = [...JOB_CATEGORIES_DATA, ...JOB_CATEGORIES_DATA];

  return (
    <div className="w-full py-20 overflow-hidden relative">
      
      <div className="max-w-[1400px] mx-auto px-6 mb-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6">
            <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">Explore Roles</h2>
                <p className="text-white/50 text-lg">Curated opportunities for every skill set.</p>
            </div>
            <button className="hidden md:block px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all text-sm font-medium">
                View All Categories
            </button>
        </div>
      </div>

      {/* Slider Container with Mask Gradient for fade edges */}
      <div className="relative w-full mask-gradient-x">
          
          {/* Left/Right fade masks to blend into background - thinner on mobile */}
          <div className="absolute top-0 left-0 w-8 md:w-24 h-full bg-gradient-to-r from-[#0f172a] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-8 md:w-24 h-full bg-gradient-to-l from-[#0f172a] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-scroll hover:pause gap-4 md:gap-6 px-6">
            {sliderData.map((cat, index) => {
              const IconComponent = IconMap[cat.iconName] || Briefcase;
              // Use index in key to handle duplicates
              return (
                <div 
                  key={`${cat.id}-${index}`}
                  onClick={() => onSelectCategory(cat)}
                  className="group liquid-glass rounded-[2rem] w-[180px] h-[220px] md:w-[200px] md:h-[240px] flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-500 hover:scale-105 flex-shrink-0"
                >
                  
                  {/* New Badge */}
                  {cat.isNew && (
                    <span className="absolute top-4 right-4 px-2 py-0.5 text-[10px] font-bold bg-blue-500/80 text-white rounded-full shadow-[0_0_10px_#3b82f6]">
                      NEW
                    </span>
                  )}

                  <div className="w-14 h-14 md:w-16 md:h-16 mb-4 md:mb-6 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500 shadow-inner">
                    <IconComponent size={24} className="text-white/80 group-hover:text-white" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-bold text-sm md:text-base text-white mb-2 leading-tight px-4 group-hover:text-blue-200 transition-colors">
                    {cat.title}
                  </h3>
                  
                  <div className="w-8 h-1 bg-white/10 rounded-full mb-3" />

                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">
                    {cat.count} Jobs
                  </p>
                </div>
              );
            })}
          </div>
      </div>
    </div>
  );
};

export default JobCategories;