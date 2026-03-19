import React, { useState } from 'react';
import { Job } from '../types';
import { X, UploadCloud, CheckCircle, ArrowRight } from 'lucide-react';

interface ApplicationModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
  isGlass: boolean;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ job, isOpen, onClose, isGlass }) => {
  const [step, setStep] = useState(1); // 1: Form, 2: Success

  if (!isOpen || !job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
        setStep(2);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className={`relative w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 ${isGlass ? 'glass-card bg-[#1a1a1a]/90' : 'bg-white'}`}>
        
        {/* Close Button */}
        <button 
            onClick={onClose}
            className={`absolute top-4 right-4 p-2 rounded-full transition-colors z-10 ${isGlass ? 'hover:bg-white/10 text-white' : 'hover:bg-gray-100 text-slate-500'}`}
        >
            <X size={20} />
        </button>

        {step === 1 ? (
            <div className="p-8">
                <div className="mb-6">
                    <span className={`text-xs font-bold tracking-wider uppercase ${isGlass ? 'text-blue-300' : 'text-blue-600'}`}>Applying For</span>
                    <h2 className={`text-2xl font-bold mt-1 ${isGlass ? 'text-white' : 'text-slate-900'}`}>{job.title}</h2>
                    <p className={`text-sm ${isGlass ? 'text-white/60' : 'text-slate-500'}`}>{job.company} • {job.location}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className={`text-xs font-medium ml-1 ${isGlass ? 'text-white/80' : 'text-slate-700'}`}>First Name</label>
                            <input required type="text" className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${isGlass ? 'bg-white/5 border border-white/10 text-white' : 'bg-gray-50 border border-gray-200'}`} placeholder="Jane" />
                        </div>
                        <div className="space-y-1">
                            <label className={`text-xs font-medium ml-1 ${isGlass ? 'text-white/80' : 'text-slate-700'}`}>Last Name</label>
                            <input required type="text" className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${isGlass ? 'bg-white/5 border border-white/10 text-white' : 'bg-gray-50 border border-gray-200'}`} placeholder="Doe" />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className={`text-xs font-medium ml-1 ${isGlass ? 'text-white/80' : 'text-slate-700'}`}>Email Address</label>
                        <input required type="email" className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${isGlass ? 'bg-white/5 border border-white/10 text-white' : 'bg-gray-50 border border-gray-200'}`} placeholder="jane@example.com" />
                    </div>

                    <div className="space-y-1">
                        <label className={`text-xs font-medium ml-1 ${isGlass ? 'text-white/80' : 'text-slate-700'}`}>Resume / CV</label>
                        <div className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${isGlass ? 'border-white/10 hover:border-white/30 hover:bg-white/5' : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'}`}>
                            <UploadCloud size={24} className={`mb-2 ${isGlass ? 'text-white/60' : 'text-slate-400'}`} />
                            <p className={`text-sm font-medium ${isGlass ? 'text-white' : 'text-slate-700'}`}>Click to upload or drag and drop</p>
                            <p className={`text-xs mt-1 ${isGlass ? 'text-white/40' : 'text-slate-400'}`}>PDF, DOCX up to 10MB</p>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className={`w-full py-4 mt-2 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] ${isGlass ? 'bg-white text-black hover:bg-gray-100' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        ) : (
            <div className="p-12 flex flex-col items-center text-center animate-in zoom-in-95">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/30">
                    <CheckCircle className="text-white" size={32} />
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${isGlass ? 'text-white' : 'text-slate-900'}`}>Application Sent!</h3>
                <p className={`mb-8 ${isGlass ? 'text-white/60' : 'text-slate-500'}`}>
                    Thanks for applying to <strong>{job.company}</strong>. We've sent a confirmation email to you.
                </p>
                <button 
                    onClick={() => { setStep(1); onClose(); }}
                    className={`px-8 py-3 rounded-full font-medium text-sm transition-colors ${isGlass ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-gray-100 text-slate-900 hover:bg-gray-200'}`}
                >
                    Close
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationModal;