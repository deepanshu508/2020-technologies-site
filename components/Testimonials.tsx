import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

interface TestimonialsProps {
    isGlass?: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ isGlass }) => {
  return (
    <section className={`py-24 ${isGlass ? 'bg-transparent' : 'bg-white border-t border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-3xl md:text-5xl font-bold text-center tracking-tight mb-16 ${isGlass ? 'text-white' : 'text-slate-900'}`}>
          Trusted by Industry Leaders
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className={`rounded-3xl p-8 relative ${isGlass ? 'glass-card border border-white/10' : 'bg-gray-50'}`}>
              <Quote className={`${isGlass ? 'text-blue-300' : 'text-blue-300'} mb-6`} size={40} />
              <p className={`text-lg leading-relaxed mb-8 font-light ${isGlass ? 'text-white/80' : 'text-slate-700'}`}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale" />
                <div>
                  <h4 className={`font-bold ${isGlass ? 'text-white' : 'text-slate-900'}`}>{t.name}</h4>
                  <p className={`text-sm ${isGlass ? 'text-white/60' : 'text-slate-500'}`}>{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;