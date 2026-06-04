import React from 'react';
import { PERSONAL_INFO } from '../constants';

interface HeroProps {
  onNavigate: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-24 pt-20 relative overflow-hidden">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-in fade-in slide-in-from-left-12 duration-1000">
          {/* Avatar and Status */}
          <div className="flex items-center gap-4">
            {/* Animated Human Avatar */}
            <div className="relative w-16 h-16 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-purple-600/20 border-2 border-sky-500/40 shadow-[0_0_24px_rgba(14,165,233,0.3)] flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 64 72" width="64" height="64" xmlns="http://www.w3.org/2000/svg" style={{animation:'float 3s ease-in-out infinite'}}>
                  <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}`}</style>

                  {/* ── Shirt / shoulders ── */}
                  <path d="M8 72 C8 52 16 46 22 44 L26 48 L32 50 L38 48 L42 44 C48 46 56 52 56 72Z" fill="#6366f1" stroke="#312e81" strokeWidth="2" strokeLinejoin="round"/>

                  {/* ── Laptop base ── */}
                  <rect x="15" y="50" width="34" height="20" rx="3" fill="#1e1b4b" stroke="#312e81" strokeWidth="1.5"/>
                  <rect x="16" y="44" width="32" height="20" rx="3" fill="#3730a3" stroke="#312e81" strokeWidth="1.5"/>
                  <rect x="18" y="46" width="28" height="16" rx="2" fill="#4338ca"/>
                  <text x="32" y="57" textAnchor="middle" fontSize="8" fontWeight="bold" fontFamily="monospace" fill="#e0e7ff" stroke="#312e81" strokeWidth="0.3">&lt;/&gt;</text>
                  <line x1="15" y1="64" x2="49" y2="64" stroke="#312e81" strokeWidth="1.5"/>

                  {/* ── Neck ── */}
                  <rect x="28" y="38" width="8" height="8" rx="3" fill="#f8c5a0" stroke="#d4956a" strokeWidth="1"/>

                  {/* ── Face ── (drawn before hair so hair covers the top) */}
                  <ellipse cx="32" cy="28" rx="12" ry="13" fill="#f8c5a0" stroke="#d4956a" strokeWidth="1.5"/>

                  {/* ── Eyes ── */}
                  <rect x="26.5" y="27" width="3" height="4" rx="1.5" fill="#1a1a2e"/>
                  <rect x="34.5" y="27" width="3" height="4" rx="1.5" fill="#1a1a2e"/>

                  {/* ── Smile ── */}
                  <path d="M27 34 Q32 39 37 34" fill="none" stroke="#d4956a" strokeWidth="1.8" strokeLinecap="round"/>

                  {/* ── HAIR (drawn last = on top of face) ── */}
                  {/* Full scalp cap — covers entire top of head */}
                  <path d="M20 26 C20 10 44 10 44 26 L44 20 C44 11 20 11 20 20 Z" fill="#3b1f0a"/>
                  {/* Thick top bulk */}
                  <ellipse cx="32" cy="15" rx="13" ry="8" fill="#3b1f0a"/>
                  {/* Left side strand — thick, hangs down past ear */}
                  <path d="M20 20 C16 22 15 28 16 34 C17 30 19 26 20 22 Z" fill="#3b1f0a"/>
                  {/* Right side strand */}
                  <path d="M44 20 C48 22 49 28 48 34 C47 30 45 26 44 22 Z" fill="#3b1f0a"/>
                  {/* Hairline definition on forehead */}
                  <path d="M21 23 Q32 18 43 23" fill="none" stroke="#5c3015" strokeWidth="1" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-black/60 border border-sky-500/40 rounded-full text-[15px] font-bold text-sky-100 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(14,165,233,0.4)]">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_15px_#34d399]" />
              {PERSONAL_INFO.status}
            </div>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.85]">
              {PERSONAL_INFO.name.split(' ')[0]} <br />
              <span className="text-sky-400 drop-shadow-[0_0_15px_rgba(14,165,233,0.5)]">{PERSONAL_INFO.name.split(' ')[1]}</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-zinc-400 tracking-tight max-w-lg leading-tight">
              {PERSONAL_INFO.title}
            </p>
            
            <div className="flex flex-wrap gap-2 pt-4">
              {PERSONAL_INFO.tags.map((tag, idx) => (
                <span key={tag} className={`px-4 py-1.5 rounded-xl text-[15px] font-bold border ${
                  idx === 0 ? 'bg-sky-500/10 border-sky-400/40 text-sky-400' : 
                  idx === 1 ? 'bg-purple-500/10 border-purple-400/40 text-purple-400' :
                  'bg-emerald-500/10 border-emerald-400/40 text-emerald-400'
                }`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <p className="text-zinc-300 text-lg max-w-xl leading-relaxed font-medium">
            {PERSONAL_INFO.description}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => onNavigate('projects')}
              className="px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-extrabold rounded-2xl transition-all shadow-xl shadow-sky-500/20 active:scale-95 flex items-center gap-2 group"
            >
              Launch Works
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white/5 border border-white/10 hover:border-white/20 text-white font-bold rounded-2xl transition-all active:scale-95"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right Side Illustration */}
        <div className="hidden lg:flex justify-center items-center animate-in fade-in slide-in-from-right-12 duration-1000 delay-300">
          <div className="relative p-1 bg-gradient-to-br from-sky-500/40 via-purple-500/20 to-transparent rounded-[48px] shadow-[0_0_60px_-15px_rgba(14,165,233,0.4)] backdrop-blur-sm border border-white/10">
             <div className="relative overflow-hidden rounded-[40px] bg-black/90 border border-white/5">
                <img 
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJidmc1Ym95eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/qgQUggAC3Pfv687qPC/giphy.gif" 
                  alt="Animated Coding Session" 
                  className="w-full max-w-lg opacity-80 mix-blend-screen"
                />
             </div>
             <div className="absolute -top-6 -right-6 w-12 h-12 bg-sky-500/30 rounded-full blur-xl" />
             <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-purple-500/30 rounded-full blur-xl" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sky-400">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-sky-500 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;