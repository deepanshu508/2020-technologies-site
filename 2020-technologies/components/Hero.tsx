import React from 'react';
import { ViewState } from '../types';
import { CheckCircle, Briefcase, TrendingUp, Code, Building2 } from 'lucide-react';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
  isGlass?: boolean;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 md:pt-20">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10 grid grid-cols-12 h-full items-center">
        
        {/* Left Side: Social Proof (Hidden on small mobile, visible on larger screens) */}
        <div className="col-span-12 md:col-span-2 flex flex-col justify-center items-center md:items-start space-y-4 mb-8 md:mb-0 order-3 md:order-1 opacity-60 md:opacity-100">
            <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                    <img key={i} src={`https://picsum.photos/100/100?random=${i}`} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-slate-900 object-cover" alt="User" />
                ))}
            </div>
            <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tighter">90K<sup className="text-lg md:text-xl">+</sup></h3>
                <p className="text-xs md:text-sm text-white/60 leading-tight mt-1">Chosen by companies<br/>globally for hiring</p>
            </div>
        </div>

        {/* Center: Big Typography */}
        <div className="col-span-12 md:col-span-8 flex flex-col items-center justify-center text-center relative order-1 md:order-2 mb-8 md:mb-0">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] xl:text-[9rem] font-bold leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 select-none pb-4 md:pb-0">
                HIRING BEST<br/>
                <span className="text-white/20">TALENT WORLDWIDE</span>
            </h1>
            
            {/* The "3D Object" Composition in the center/foreground */}
            <div className="relative w-full max-w-3xl h-[360px] md:h-[400px] mt-4 md:mt-[-100px]">
                
                {/* Main Card: New Roles (Center) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-sm md:w-96 p-6 glass-panel rounded-3xl z-20 animate-float">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-white font-bold text-lg flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                            New Roles
                        </h3>
                        <span className="text-xs text-white/40 border border-white/10 px-2 py-1 rounded-full">Live Feed</span>
                    </div>

                    <div className="space-y-3">
                         {/* Item 1 */}
                         <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group cursor-pointer">
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                <Code size={18} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white">Sr. React Dev</h4>
                                <p className="text-[10px] text-white/50">Remote • $140k</p>
                            </div>
                         </div>

                         {/* Item 2 */}
                         <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group cursor-pointer">
                            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                                <Briefcase size={18} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white">Product Lead</h4>
                                <p className="text-[10px] text-white/50">Hybrid • $160k</p>
                            </div>
                         </div>

                         {/* Item 3 */}
                         <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group cursor-pointer">
                            <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                                <TrendingUp size={18} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white">Growth Marketer</h4>
                                <p className="text-[10px] text-white/50">On-site • $90k</p>
                            </div>
                         </div>
                    </div>
                </div>

                {/* Left Widget: Verified Companies - Repositioned for mobile safely */}
                <div className="absolute top-0 left-4 md:top-[20%] md:left-[5%] p-4 glass-panel rounded-2xl z-10 animate-float scale-90 md:scale-100 origin-top-left" style={{ animationDelay: '1.5s' }}>
                    <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 border border-indigo-500/30">
                             <Building2 size={18} />
                         </div>
                         <div>
                             <p className="text-lg font-bold text-white leading-none">500+</p>
                             <p className="text-[10px] text-white/50 mt-1">Verified Partners</p>
                         </div>
                    </div>
                </div>

                {/* Connecting Lines (Desktop Only) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 hidden md:block">
                    <line x1="30%" y1="35%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

            </div>
        </div>

        {/* Right Side: Spacer */}
        <div className="col-span-12 md:col-span-2 order-3"></div>
      </div>
    </section>
  );
};

export default Hero;