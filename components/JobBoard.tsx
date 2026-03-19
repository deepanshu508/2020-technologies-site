import React, { useState } from 'react';
import { MOCK_JOBS } from '../constants';
import { MapPin, DollarSign, Clock, ArrowLeft, Search, Filter } from 'lucide-react';
import { JobCategory, Job } from '../types';

interface JobBoardProps {
    isGlass?: boolean;
    selectedCategory?: JobCategory | null;
    onBack?: () => void;
    onApply: (job: Job) => void;
}

const JobBoard: React.FC<JobBoardProps> = ({ selectedCategory, onBack, onApply }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('All');

  const displayedJobs = MOCK_JOBS.filter(job => {
    const matchesCategory = selectedCategory ? (job.category === selectedCategory.title) : true;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || job.type === filterType;

    return matchesCategory && matchesSearch && matchesType;
  });

  const title = selectedCategory ? `${selectedCategory.title} Roles` : 'Featured Opportunities';
  const jobTypes = ['All', 'Full-time', 'Contract', 'Part-time'];

  return (
    <section className="py-20 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div>
                {selectedCategory && (
                    <button 
                        onClick={onBack}
                        className="flex items-center gap-2 mb-4 text-white/60 hover:text-white transition-colors text-sm font-medium"
                    >
                        <ArrowLeft size={16} /> Back to Categories
                    </button>
                )}
                <h2 className="text-4xl font-bold text-white tracking-tight">{title}</h2>
            </div>

            {/* Filter Bar - Floating Glass Pill */}
            <div className="glass-pill rounded-full p-1.5 flex flex-col md:flex-row gap-2">
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/5">
                    <Search size={16} className="text-white/50" />
                    <input 
                        type="text" 
                        placeholder="Search jobs..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-transparent w-full focus:outline-none text-sm text-white placeholder-white/40" 
                    />
                </div>
                
                <div className="flex items-center gap-1">
                    {jobTypes.map(type => (
                        <button
                            key={type}
                            onClick={() => setFilterType(type)}
                            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                                filterType === type 
                                ? 'bg-white text-slate-900 shadow-sm' 
                                : 'text-white/60 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>
        </div>
        
        {/* Job Grid */}
        <div className="grid gap-4">
          {displayedJobs.length > 0 ? displayedJobs.map((job) => (
            <div
              key={job.id}
              onClick={() => onApply(job)}
              className="group glass-panel rounded-3xl p-6 md:p-8 transition-all duration-500 cursor-pointer hover:bg-white/10 hover:border-white/20 relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] group-hover:bg-blue-400/30 transition-all duration-500" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                     <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
                        {job.title}
                     </h3>
                     <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white/80 border border-white/10">
                        {job.type}
                     </span>
                  </div>
                  
                  <p className="text-lg font-medium text-white/60 mb-6">{job.company}</p>
                  
                  <div className="flex flex-wrap gap-6 text-sm text-white/50">
                    <span className="flex items-center gap-2">
                      <MapPin size={16} /> {job.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <DollarSign size={16} /> {job.salary}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock size={16} /> {job.postedAt}
                    </span>
                  </div>
                </div>

                <div className="flex items-center">
                  <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        onApply(job);
                    }}
                    className="px-8 py-3 rounded-full text-sm font-bold bg-white text-slate-900 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          )) : (
              <div className="text-center py-20 rounded-3xl glass-panel">
                  <Filter size={48} className="mx-auto mb-4 text-white/20" />
                  <h3 className="text-xl font-bold mb-2 text-white">No roles found</h3>
                  <button 
                    onClick={() => {setSearchTerm(''); setFilterType('All');}}
                    className="mt-6 px-6 py-2 rounded-full text-sm font-medium bg-white/10 text-white hover:bg-white/20"
                  >
                    Clear Filters
                  </button>
              </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobBoard;