import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
          Technical <span className="text-zinc-500">Toolkit.</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {SKILLS.map((skill) => (
          <div 
            key={skill.name} 
            className="group relative p-6 bg-zinc-900/40 border border-sky-500/10 rounded-2xl hover:border-sky-500/40 hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.3)] transition-all duration-500 flex flex-col items-center gap-4 hover:-translate-y-2"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className={`w-10 h-10 group-hover:scale-110 transition-transform duration-300 object-contain ${
                  skill.name === 'Express' || skill.name === 'Socket.io' ? 'brightness-125 contrast-125' : ''
                }`} 
              />
            </div>
            <span className="text-sm font-bold text-zinc-400 group-hover:text-white transition-colors">{skill.name}</span>
            <div className="absolute inset-0 bg-sky-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;