import React from 'react';
import { ShieldCheck, Zap, Globe, Users } from 'lucide-react';

interface FeaturesProps {
    isGlass?: boolean;
}

const Features: React.FC<FeaturesProps> = ({ isGlass }) => {
  return (
    <section className={`py-32 ${!isGlass && 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Feature 1 - Brand Identity */}
          <div className={`col-span-1 lg:col-span-1 p-8 rounded-3xl min-h-[300px] flex flex-col justify-end transition-all duration-500 group ${isGlass ? 'glass-card hover:bg-white/10' : 'bg-gray-50'}`}>
            <div className="mb-6">
                 <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white mb-4">
                    <Zap size={18} />
                 </div>
            </div>
            <h3 className={`text-2xl font-serif italic mb-2 ${isGlass ? 'text-white' : 'text-slate-900'}`}>Brand Identity</h3>
            <p className={`text-sm leading-relaxed ${isGlass ? 'text-white/60' : 'text-slate-500'}`}>
              Visual system, logo direction, color strategy & clear positioning.
            </p>
          </div>

           {/* Feature 2 - Content Generator */}
           <div className={`col-span-1 lg:col-span-1 p-8 rounded-3xl min-h-[300px] flex flex-col justify-end transition-all duration-500 group ${isGlass ? 'bg-white text-black' : 'bg-slate-900 text-white'}`}>
            <div className="mb-6">
                 <div className="text-2xl font-bold tracking-widest mb-4">.....</div>
            </div>
            <h3 className="text-2xl font-serif italic mb-2">Content Generator</h3>
            <p className="text-sm leading-relaxed opacity-70">
              High-impact posts, strong hooks, scripts & launch content.
            </p>
          </div>

           {/* Feature 3 - Digital Presence */}
           <div className={`col-span-1 lg:col-span-1 p-8 rounded-3xl min-h-[300px] flex flex-col justify-end transition-all duration-500 group ${isGlass ? 'glass-card hover:bg-white/10' : 'bg-gray-50'}`}>
            <div className="mb-6">
                 <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white mb-4">
                    <Globe size={18} />
                 </div>
            </div>
            <h3 className={`text-2xl font-serif italic mb-2 ${isGlass ? 'text-white' : 'text-slate-900'}`}>Digital Presence</h3>
            <p className={`text-sm leading-relaxed ${isGlass ? 'text-white/60' : 'text-slate-500'}`}>
              Landing page structure, LinkedIn optimization, Media Kit.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
