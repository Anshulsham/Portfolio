import React from 'react';

interface NavbarProps {
  onTerminalToggle: () => void;
  onNavigate: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onTerminalToggle, onNavigate }) => {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[90] px-6 py-3 glass-nav rounded-full flex items-center gap-8 shadow-[0_0_30px_-5px_rgba(14,165,233,0.3)] border border-sky-500/20">
      <div className="flex items-center gap-8 text-[15px] font-bold uppercase tracking-[0.2em]">
        <button onClick={() => onNavigate('hero')} className="text-zinc-400 hover:text-white transition-all">Home</button>
        <button onClick={() => onNavigate('about')} className="text-zinc-400 hover:text-white transition-all">About</button>
        <button onClick={() => onNavigate('skills')} className="text-zinc-400 hover:text-white transition-all">Skills</button>
        <button onClick={() => onNavigate('projects')} className="text-zinc-400 hover:text-white transition-all">Work</button>
        <button onClick={() => onNavigate('contact')} className="text-zinc-400 hover:text-white transition-all">Contact</button>
      </div>
      <div className="h-4 w-[1px] bg-sky-500/20" />
      <button 
        onClick={onTerminalToggle}
        className="flex items-center gap-2.5 px-4 py-1.5 bg-sky-500/10 border border-sky-500/30 text-sky-400 rounded-full hover:bg-sky-500/20 transition-all text-[10px] font-mono font-bold uppercase tracking-widest shadow-[0_0_15px_-3px_rgba(14,165,233,0.4)]"
      >
        <div className="flex gap-1">
           <div className="w-1.5 h-1.5 rounded-full bg-[#FF5F56]" />
           <div className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]" />
           <div className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
        </div>
        Terminal
      </button>
    </nav>
  );
};

export default Navbar;