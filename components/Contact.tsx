import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SOCIAL_LINKS } from '../constants';

// ── EmailJS config ─────────────────────────────────────────────────
// Set these three values in your .env.local file:
//   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
//   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
//   VITE_EMAILJS_PUBLIC_KEY=your_public_key
const SERVICE_ID  = process.env.VITE_EMAILJS_SERVICE_ID  ?? '';
const TEMPLATE_ID = process.env.VITE_EMAILJS_TEMPLATE_ID ?? '';
const PUBLIC_KEY  = process.env.VITE_EMAILJS_PUBLIC_KEY  ?? '';

type Status = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const missingConfig = !SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in all fields before sending.');
      return;
    }

    if (missingConfig) {
      setStatus('error');
      setErrorMsg('EmailJS is not configured yet. Add the VITE_EMAILJS_* keys to your .env.local file.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name:    name.trim(),
          user_email:   email.trim(),
          user_message: message.trim(),
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err: any) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMsg(err?.text ?? 'Something went wrong. Please try again.');
    }
  };

  const resetStatus = () => {
    if (status !== 'loading') setStatus('idle');
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* Left – info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-5xl font-bold mt-4 tracking-tighter">
              Let's build <br />the <span className="text-zinc-500">impossible.</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-md">
            Whether you have a question or just want to say hi, my terminal is always listening.
            Feel free to use the command line or the form below.
          </p>

          <div className="space-y-4 pt-6">
            {/* GitHub */}
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer"
              className="flex items-center gap-4 text-zinc-400 hover:text-white transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-600">Development</div>
                <div className="font-bold">github.com/Anshulsham</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer"
              className="flex items-center gap-4 text-zinc-400 hover:text-white transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-600">Professional</div>
                <div className="font-bold">linkedin.com/in/anshul-shambharkar</div>
              </div>
            </a>
          </div>
        </div>

        {/* Right – form */}
        <div className="bg-zinc-900/50 p-10 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
            </svg>
          </div>

          {/* Success state */}
          {status === 'success' && (
            <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Message Dispatched!</h3>
              <p className="text-zinc-400 text-sm">I'll get back to you shortly. Thanks for reaching out.</p>
              <button onClick={() => setStatus('idle')}
                className="mt-2 text-xs uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors font-bold">
                Send another →
              </button>
            </div>
          )}

          {/* Form */}
          {status !== 'success' && (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate>
              {/* Missing config warning */}
              {missingConfig && (
                <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-xs text-amber-400 font-mono">
                  ⚠ EmailJS keys not set. Add <span className="font-bold">VITE_EMAILJS_SERVICE_ID</span>,{' '}
                  <span className="font-bold">VITE_EMAILJS_TEMPLATE_ID</span>, and{' '}
                  <span className="font-bold">VITE_EMAILJS_PUBLIC_KEY</span> to <span className="font-bold">.env.local</span>.
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-zinc-400 font-bold uppercase text-[10px] tracking-widest">Alias / Name</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={e => { setName(e.target.value); resetStatus(); }}
                    className="input bg-zinc-950/50 border-zinc-800 focus:border-indigo-500 rounded-xl transition-all"
                    disabled={status === 'loading'}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-zinc-400 font-bold uppercase text-[10px] tracking-widest">Protocol / Email</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={e => { setEmail(e.target.value); resetStatus(); }}
                    className="input bg-zinc-950/50 border-zinc-800 focus:border-indigo-500 rounded-xl transition-all"
                    disabled={status === 'loading'}
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-zinc-400 font-bold uppercase text-[10px] tracking-widest">Signal / Message</span>
                </label>
                <textarea
                  id="contact-message"
                  className="textarea bg-zinc-950/50 border-zinc-800 focus:border-indigo-500 h-32 rounded-xl transition-all"
                  placeholder="Incoming transmission..."
                  value={message}
                  onChange={e => { setMessage(e.target.value); resetStatus(); }}
                  disabled={status === 'loading'}
                  required
                />
              </div>

              {/* Error message */}
              {status === 'error' && errorMsg && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-xs text-red-400">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn btn-block bg-indigo-600 hover:bg-indigo-500 text-white border-none rounded-xl h-14 font-bold tracking-widest uppercase disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Transmitting…
                  </span>
                ) : (
                  'Execute Dispatch'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;