import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">Selected <span className="text-zinc-500">Works.</span></h2>
        </div>
        <div className="h-[1px] flex-1 bg-zinc-800 mx-10 hidden md:block mb-4" />
        <p className="text-zinc-500 text-sm max-w-xs font-medium">A collection of engineering projects focused on scalability and UX.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="card bg-zinc-900/40 border border-sky-500/10 hover:border-sky-500/40 hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.3)] transition-all duration-500 hover:-translate-y-2 group shadow-2xl flex flex-col overflow-hidden"
          >
            <figure className="px-4 pt-4">
              <img 
                src={project.image} 
                alt={project.title} 
                className="rounded-xl w-full aspect-video object-cover transition-all duration-700 shadow-2xl group-hover:scale-105"
              />
            </figure>
            <div className="card-body p-6 flex-grow">
              <h3 className="card-title text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-zinc-800/50 text-zinc-400 text-[10px] font-bold rounded-lg border border-zinc-700/50">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto grid grid-cols-2 gap-3">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-zinc-800 hover:bg-zinc-700 text-white border-none rounded-xl py-4 h-auto flex items-center justify-center gap-2 group/btn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  GitHub
                </a>
                {project.demo ? (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-sm bg-sky-500 hover:bg-sky-400 text-white border-none rounded-xl py-4 h-auto flex items-center justify-center gap-2 group/btn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live Demo
                  </a>
                ) : (
                  <span 
                    className="btn btn-sm bg-sky-500/20 text-sky-400/50 border border-sky-500/20 rounded-xl py-4 h-auto flex items-center justify-center gap-2 cursor-not-allowed"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live Demo
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;