import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import JobBoard from './components/JobBoard';
import JobCategories from './components/JobCategories';
import Testimonials from './components/Testimonials';
import AICareerAgent from './components/AICareerAgent';
import Footer from './components/Footer';
import ApplicationModal from './components/ApplicationModal';
import { ViewState, JobCategory, Job } from './types';
import { Phone, MapPin } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [isGlass, setIsGlass] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<JobCategory | null>(null);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const toggleTheme = () => setIsGlass(!isGlass);

  const handleCategorySelect = (category: JobCategory) => {
    setSelectedCategory(category);
    setCurrentView(ViewState.JOBS);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (view: ViewState) => {
    if (view !== ViewState.JOBS) {
      setSelectedCategory(null);
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openApplyModal = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const renderContent = () => {
    switch (currentView) {
      case ViewState.JOB_CATEGORIES:
        return (
          <div className="pt-24 min-h-screen animate-in fade-in duration-500">
             <JobCategories isGlass={isGlass} onSelectCategory={handleCategorySelect} />
          </div>
        );
      case ViewState.JOBS:
        return (
          <div className="pt-24 animate-in fade-in duration-500">
            <JobBoard 
                isGlass={isGlass} 
                selectedCategory={selectedCategory} 
                onBack={() => setCurrentView(ViewState.JOB_CATEGORIES)}
                onApply={openApplyModal}
            />
          </div>
        );
      case ViewState.AI_AGENT:
        return (
          <div className={`pt-24 min-h-screen animate-in fade-in duration-500`}>
            <div className="max-w-7xl mx-auto px-6 pt-10 text-center">
              <h1 className="text-5xl font-bold mb-6 text-white">Your AI Career Copilot</h1>
              <p className="text-lg mb-12 max-w-2xl mx-auto text-white/60">
                Not sure where to apply? Chat with our intelligent agent to analyze your skills and find the perfect match.
              </p>
              <AICareerAgent isGlass={isGlass} />
            </div>
          </div>
        );
      case ViewState.CONTACT:
         return (
          <div className={`pt-32 pb-20 min-h-screen animate-in fade-in duration-500`}>
            <div className="max-w-3xl mx-auto px-6 text-center">
              <h1 className="text-5xl font-bold mb-6 text-white">Partner with 2020</h1>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-white/60">
                 Whether you're a job seeker looking for your next role or an employer searching for top talent, we are here to help.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                  <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white">
                      <Phone size={18} className="text-blue-400" />
                      <span className="font-medium">9555970748</span>
                  </div>
                   <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white">
                      <MapPin size={18} className="text-blue-400" />
                      <span className="font-medium">Delhi, India</span>
                  </div>
              </div>

              <form className="text-left space-y-6 p-8 md:p-12 rounded-3xl shadow-xl glass-panel">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white/5 border border-white/10 text-white placeholder-white/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white/5 border border-white/10 text-white placeholder-white/30" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Work Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white/5 border border-white/10 text-white placeholder-white/30" />
                </div>
                <button type="button" className="w-full py-4 font-bold text-lg rounded-xl transition-all hover:scale-[1.02] bg-white text-black hover:bg-gray-200">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        );
      case ViewState.HOME:
      default:
        return (
          <div className="animate-in fade-in duration-500">
            <Hero onNavigate={handleNavigate} isGlass={isGlass} />
            <JobCategories isGlass={isGlass} onSelectCategory={handleCategorySelect} />
            <JobBoard isGlass={isGlass} onApply={openApplyModal} />
            <Testimonials isGlass={isGlass} />
            <Features isGlass={isGlass} />
            <section className="py-24 text-center px-6">
                <div className="max-w-5xl mx-auto rounded-[3rem] p-16 glass-panel relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 pointer-events-none" />
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white relative z-10">Ready to shape the future?</h2>
                    <button 
                    onClick={() => setCurrentView(ViewState.CONTACT)}
                    className="px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)] bg-white text-slate-900 relative z-10"
                    >
                    Get Started
                    </button>
                </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen font-sans text-white relative">
      
      {/* Immersive Background */}
      <div className="atmosphere-bg" />
      <div className="dot-grid-overlay" />

      <Navbar currentView={currentView} onNavigate={handleNavigate} isGlass={isGlass} onToggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        {renderContent()}
      </main>
      
      <Footer isGlass={isGlass} />

      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        job={selectedJob} 
        isGlass={isGlass}
      />
    </div>
  );
};

export default App;