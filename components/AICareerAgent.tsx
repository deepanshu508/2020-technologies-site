import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AICareerAgentProps {
    isGlass?: boolean;
}

const AICareerAgent: React.FC<AICareerAgentProps> = ({ isGlass }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'model',
      text: "Hello! I'm the 2020 Technologies AI Recruiter. I can help you find the perfect role, refine your career goals, or answer questions about our hiring process. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(inputValue);
      
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`rounded-3xl overflow-hidden flex flex-col h-[70vh] md:h-[600px] w-full max-w-4xl mx-auto my-6 md:my-12 ${isGlass ? 'glass-card border-white/50' : 'bg-white shadow-2xl border border-gray-200'}`}>
      {/* Header */}
      <div className={`p-4 md:p-6 flex items-center justify-between ${isGlass ? 'bg-white/10 backdrop-blur-md border-b border-white/20' : 'bg-slate-900'}`}>
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isGlass ? 'bg-blue-500/80' : 'bg-blue-600'}`}>
            <Sparkles className="text-white" size={20} />
          </div>
          <div className="text-left">
            <h3 className={`font-bold text-lg text-white`}>Recruiter AI</h3>
            <p className={`text-xs ${isGlass ? 'text-white/60' : 'text-blue-200'}`}>Powered by Gemini 3 Flash</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-xs font-medium text-gray-400">Online</span>
        </div>
      </div>

      {/* Messages Area */}
      <div className={`flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6 ${isGlass ? 'bg-transparent' : 'bg-gray-50'}`}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 md:gap-4 ${
              msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                msg.role === 'user' 
                  ? (isGlass ? 'bg-slate-800 text-white' : 'bg-slate-200') 
                  : (isGlass ? 'bg-blue-100' : 'bg-blue-100')
              }`}
            >
              {msg.role === 'user' ? (
                <User size={16} className={isGlass ? 'text-white' : 'text-slate-600'} />
              ) : (
                <Bot size={16} className="text-blue-600" />
              )}
            </div>
            
            <div
              className={`max-w-[85%] md:max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm backdrop-blur-sm ${
                msg.role === 'user'
                  ? (isGlass ? 'bg-slate-900/90 text-white rounded-tr-none' : 'bg-slate-900 text-white rounded-tr-none')
                  : (isGlass ? 'bg-white/60 text-slate-900 rounded-tl-none border border-white/40' : 'bg-white text-slate-700 rounded-tl-none border border-gray-100')
              }`}
            >
              {msg.text.split('\n').map((line, i) => (
                <p key={i} className={i > 0 ? 'mt-2' : ''}>
                  {line}
                </p>
              ))}
              <span className={`text-[10px] block mt-2 opacity-70 ${msg.role === 'user' ? 'text-slate-300' : 'text-slate-500'}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-start gap-4">
             <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                <Bot size={16} className="text-blue-600" />
            </div>
            <div className={`rounded-2xl rounded-tl-none px-5 py-4 shadow-sm ${isGlass ? 'bg-white/40 border border-white/40' : 'bg-white border border-gray-100'}`}>
              <Loader2 className="animate-spin text-blue-600" size={20} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className={`p-4 border-t ${isGlass ? 'bg-white/10 border-white/20' : 'bg-white border-gray-100'}`}>
        <div className="relative flex items-center">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            className={`w-full rounded-2xl pl-5 pr-14 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all resize-none h-[50px] md:h-[60px] text-sm ${isGlass ? 'bg-white/20 border border-white/20 placeholder-white/50 text-white' : 'bg-gray-50 border border-gray-200'}`}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AICareerAgent;