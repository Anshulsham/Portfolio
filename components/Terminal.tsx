import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS, SOCIAL_LINKS, COMMAND_HELP, SKILLS, PERSONAL_INFO } from '../constants';
import { TerminalEntry } from '../types';

interface TerminalProps {
  onClose: () => void;
  onNavigate: (section: string) => void;
}

const Terminal: React.FC<TerminalProps> = ({ onClose, onNavigate }) => {
  const [input, setInput] = useState('');
  
  const [history, setHistory] = useState<TerminalEntry[]>([
    {
      type: 'output',
      output: (
        <div className="mb-4">
          <p className="text-sky-400 font-bold mb-1">AnshulShell v3.1.0 (zsh)</p>
          <p className="text-zinc-500 text-xs italic">
            Type <span className="text-emerald-400 font-mono font-bold not-italic">'help'</span> to explore the system.
          </p>
        </div>
      )
    }
  ]);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.toLowerCase().trim();
    if (trimmedCmd === '') return;

    const newEntry: TerminalEntry = { command: trimmedCmd, type: 'input', output: null };
    let outputEntry: TerminalEntry | null = null;

    switch (trimmedCmd) {
      case 'help':
        outputEntry = {
          type: 'output',
          output: (
            <div className="grid grid-cols-1 gap-1 text-[11px] mb-2">
              {COMMAND_HELP.map((h) => (
                <div key={h.cmd} className="flex gap-4">
                  <span className="text-emerald-400 w-20 shrink-0 font-mono font-bold">{h.cmd}</span>
                  <span className="text-zinc-500">{h.desc}</span>
                </div>
              ))}
            </div>
          )
        };
        break;

      case 'skills':
        onNavigate('skills');
        outputEntry = {
          type: 'output',
          output: (
            <div className="mb-2">
              <p className="text-sky-400 font-bold mb-1 underline">Technical Stack Loaded:</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px]">
                {SKILLS.map((s) => (
                  <div key={s.name} className="flex items-center gap-1.5">
                    <span className="text-emerald-400">●</span>
                    <span className="text-zinc-200">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        };
        break;

      case 'projects':
        onNavigate('projects');
        outputEntry = {
          type: 'output',
          output: (
            <div className="mb-2">
              <p className="text-sky-400 font-bold mb-1 underline">Active Deployments:</p>
              <div className="space-y-1">
                {PROJECTS.map((p, idx) => (
                  <div key={p.id} className="text-[11px] flex gap-2">
                    <span className="text-zinc-500">[{idx + 1}]</span>
                    <span className="text-zinc-200 font-bold">{p.title}</span>
                    <span className="text-zinc-600">— {p.tags.join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        };
        break;

      case 'contact':
        onNavigate('contact');
        outputEntry = {
          type: 'output',
          output: (
            <div className="mb-2">
              <p className="text-sky-400 font-bold mb-1 underline">Transmission Channels:</p>
              <div className="text-[11px] space-y-1">
                <p className="flex gap-2"><span className="text-zinc-500">GitHub:</span> <a href={SOCIAL_LINKS.github} target="_blank" className="text-emerald-400 hover:underline">{SOCIAL_LINKS.github}</a></p>
                <p className="flex gap-2"><span className="text-zinc-500">LinkedIn:</span> <a href={SOCIAL_LINKS.linkedin} target="_blank" className="text-emerald-400 hover:underline">{SOCIAL_LINKS.linkedin}</a></p>
                <p className="flex gap-2"><span className="text-zinc-500">Email:</span> <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-emerald-400 hover:underline">{SOCIAL_LINKS.email}</a></p>
              </div>
            </div>
          )
        };
        break;

      case 'about':
        onNavigate('about');
        outputEntry = {
          type: 'output',
          output: (
            <div className="mb-2">
              <p className="text-sky-400 font-bold mb-1 underline">Subject Profile:</p>
              <div className="text-[11px] space-y-2">
                <p className="text-zinc-300 italic">{PERSONAL_INFO.description}</p>
                <div className="space-y-1">
                  {PERSONAL_INFO.education.map((edu, i) => (
                    <p key={i} className="text-zinc-400">
                      <span className="text-emerald-400 font-bold">[{edu.duration}]</span> {edu.institution} — {edu.degree} ({edu.score})
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )
        };
        break;

      case 'whoami':
        outputEntry = {
          type: 'output',
          output: <p className="text-zinc-300 text-[11px] mb-2 leading-relaxed">System Architect specializing in MERN stack development and competitive programming. Currently engineering the future at NIT Bhopal.</p>
        };
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        outputEntry = {
          type: 'output',
          output: <p className="text-rose-500 text-[11px] mb-2 font-bold">Error: Command "{trimmedCmd}" not found. Type "help".</p>
        };
    }

    setHistory(prev => [...prev, newEntry, ...(outputEntry ? [outputEntry] : [])]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 w-[95vw] sm:w-[520px] h-[460px] z-[100] bg-zinc-950/95 backdrop-blur-3xl border border-white/5 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7),0_0_40px_-10px_rgba(14,165,233,0.3)] overflow-hidden flex flex-col font-mono animate-in fade-in slide-in-from-bottom-8 duration-500">
      {/* Apple Style Header */}
      <div className="bg-zinc-900/60 px-5 py-4 flex items-center border-b border-white/5 cursor-default select-none">
        <div className="flex gap-2.5">
          <button onClick={onClose} className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/80 transition-colors shadow-inner" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/40" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]/40" />
        </div>
        <div className="flex-1 text-center text-[10px] text-zinc-500 font-black tracking-[0.2em] uppercase flex justify-center items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
          anshul — portfolio — 80x24
        </div>
        <div className="w-12"></div>
      </div>

      {/* Body */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-7 terminal-scroll text-sm"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, i) => (
          <div key={i} className="mb-3.5">
            {entry.type === 'input' && (
              <div className="flex gap-2">
                <span className="text-emerald-400 font-black shrink-0">➜</span>
                <span className="text-sky-400 font-bold shrink-0">~</span>
                <span className="text-zinc-100 break-all font-medium">{entry.command}</span>
              </div>
            )}
            {entry.type === 'output' && <div className="animate-in fade-in duration-300">{entry.output}</div>}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex gap-2 items-center group">
          <span className="text-emerald-400 font-black shrink-0">➜</span>
          <span className="text-sky-400 font-bold shrink-0">~</span>
          <input
            ref={inputRef}
            type="text"
            className="bg-transparent border-none outline-none text-zinc-100 flex-1 p-0 caret-emerald-400 selection:bg-sky-500/50 font-medium"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;