import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white">
            About <span className="text-sky-300">Me</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
            Passionate full-stack developer crafting scalable web apps with clean code, strong problem-solving and a love for delightful UX.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Side: Education & DSA */}
          <div className="space-y-16">
            {/* Education */}
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 bg-sky-500 text-white text-xs font-bold rounded-lg shadow-lg shadow-sky-500/20">
                Education
              </span>
              <div className="space-y-8">
                {PERSONAL_INFO.education.map((edu, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="mt-2 w-2 h-2 rounded-full shrink-0 bg-sky-400 group-hover:scale-150 transition-transform" />
                    <div>
                      <h4 className="text-xl font-bold text-white">{edu.institution}</h4>
                      <p className="text-zinc-400 text-sm mt-1">
                        {edu.duration} • {edu.degree} • <span className="text-zinc-200 font-bold">{edu.score}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DSA Section */}
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 bg-sky-500 text-white text-xs font-bold rounded-lg shadow-lg shadow-sky-500/20">
                Data Structures & Algorithms
              </span>
              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="mt-2 w-2 h-2 rounded-full shrink-0 bg-sky-400 group-hover:scale-150 transition-transform" />
                  <p className="text-zinc-200 font-medium leading-relaxed">
                    Strong DSA foundation in <span className="text-white font-bold">C++</span> with extensive problem-solving.
                  </p>
                </div>
                <div className="space-y-4 pl-6">
                  {PERSONAL_INFO.dsa.ratings.map((rate, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <p className="text-zinc-400 text-sm flex items-center gap-2 flex-wrap">
                        {rate.platform} Rating:{' '}
                        <span className="text-white font-bold">{rate.rating}</span>
                        {rate.profileUrl && (
                          <a
                            href={rate.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`View ${rate.platform} profile`}
                            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border transition-all text-xs font-semibold group/link"
                            style={
                              rate.platform === 'LeetCode'
                                ? { background: 'rgba(255,161,22,0.08)', borderColor: 'rgba(255,161,22,0.35)', color: '#ffa116' }
                                : { background: 'rgba(26,133,255,0.08)', borderColor: 'rgba(26,133,255,0.35)', color: '#1a85ff' }
                            }
                          >
                            {rate.platform === 'LeetCode' ? (
                              /* LeetCode icon */
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                              </svg>
                            ) : (
                              /* Codeforces icon */
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"/>
                              </svg>
                            )}
                            Profile
                          </a>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Extracurricular & Achievements */}
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 bg-sky-500 text-white text-xs font-bold rounded-lg shadow-lg shadow-sky-500/20">
              Extracurricular & Achievements
            </span>
            <div className="space-y-6">
              {PERSONAL_INFO.achievements.map((achieve, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className={`mt-2 w-2 h-2 rounded-full shrink-0 group-hover:scale-150 transition-transform ${
                    i % 2 === 0 ? 'bg-sky-400' : 'bg-pink-400'
                  }`} />
                  <p className="text-zinc-300 text-sm leading-relaxed" dangerouslySetInnerHTML={{
                    __html: achieve.replace(/(Solved [\d\+]+ DSA|Rank [\d\/\,]+|Finalist|Global Rank [\d]+)/g, '<span class="text-white font-bold">$1</span>')
                  }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;