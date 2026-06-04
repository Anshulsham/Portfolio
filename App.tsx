import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Terminal from './components/Terminal';

const App: React.FC = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // For the most robust smooth scrolling in snap containers, we use scrollIntoView 
      // block: 'start' aligns with the section's scroll-snap-align: start.
      // The browser's scroll-padding-top (defined in index.html) will ensure the navbar isn't overlapping.
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative">
      <Navbar 
        onTerminalToggle={() => setIsTerminalOpen(!isTerminalOpen)} 
        onNavigate={handleNavigate}
      />
      
      <main className="relative z-10">
        <Hero onNavigate={handleNavigate} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Terminal - Fixed and non-scrolling relative to viewport */}
      {isTerminalOpen && (
        <Terminal 
          onClose={() => setIsTerminalOpen(false)} 
          onNavigate={handleNavigate}
        />
      )}

      {/* Hidden Terminal Recovery Button */}
      {!isTerminalOpen && (
        <button 
          onClick={() => setIsTerminalOpen(true)}
          className="fixed bottom-10 right-10 w-16 h-16 bg-black/80 border border-sky-500/40 text-sky-400 rounded-3xl flex items-center justify-center shadow-[0_0_30px_-5px_rgba(14,165,233,0.5)] hover:scale-110 hover:bg-zinc-900 transition-all z-[100] group animate-in slide-in-from-right-8 duration-500 backdrop-blur-md"
          aria-label="Restore Terminal"
        >
          <div className="flex gap-1 group-hover:gap-1.5 transition-all">
             <div className="w-2 h-2 rounded-full bg-[#FF5F56] shadow-[0_0_10px_#FF5F56]" />
             <div className="w-2 h-2 rounded-full bg-[#27C93F] shadow-[0_0_10px_#27C93F]" style={{animationDelay: '0.2s'}} />
          </div>
        </button>
      )}

      <footer className="py-20 border-t border-white/5 bg-black/60 backdrop-blur-md relative z-10 overflow-hidden snap-start">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white font-black tracking-tighter text-xl uppercase">
             Anshul<span className="text-sky-500">Shambharkar</span>
          </div>
          <div className="flex gap-6 text-[10px] uppercase font-bold tracking-widest text-zinc-600">
             <button className="hover:text-sky-400 cursor-pointer transition-colors uppercase" onClick={() => handleNavigate('hero')}>Home</button>
             <button className="hover:text-sky-400 cursor-pointer transition-colors uppercase" onClick={() => handleNavigate('projects')}>Source</button>
             <button className="hover:text-sky-400 cursor-pointer transition-colors uppercase" onClick={() => handleNavigate('contact')}>Connect</button>
          </div>
          <p className="text-zinc-600 text-xs font-mono">© 2024 • BUILT FOR THE FUTURE</p>
        </div>
      </footer>
    </div>
  );
};

export default App;