import { motion } from 'motion/react';
import { Mail, ArrowUpRight, Instagram, Linkedin, Github, Sparkles } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          

          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">
                <Sparkles size={12} className="animate-pulse" /> [ 04. COLLABORATION ]
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white leading-tight tracking-tight">
                Let's Build <br />
                Something <br />
                <span className="text-indigo-400 italic font-bold">Legendary.</span>
              </h2>
            </div>

            <p className="text-slate-400 text-sm md:text-base max-w-md leading-relaxed">
              I am currently open to exciting frontend project opportunities, team internships, and creative design collaborations.
            </p>


            <div className="flex flex-wrap items-center gap-4 pt-4 shrink-0">
              <a 
                href="mailto:abikamal964@gmail.com" 
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-505 text-white rounded-2xl font-bold active:scale-95 transition-all text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/10 cursor-pointer"
                title="Send mail inquiry"
                style={{ touchAction: 'manipulation' }}
              >
                <Mail size={16} /> Email Me
              </a>
              <a 
                href="https://wa.me/6289621949745" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-4 bg-slate-900 border border-slate-900 hover:border-slate-800 text-white rounded-2xl font-bold active:scale-95 transition-all text-sm flex items-center gap-2 cursor-pointer"
                title="Contact via WhatsApp"
                style={{ touchAction: 'manipulation' }}
              >
                WhatsApp <ArrowUpRight size={16} className="text-slate-500" />
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs font-mono text-slate-600 pt-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Response Time — Within 24 Hours</span>
            </div>
          </div>


          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest block">[ CONNECT CHANNELS ]</span>
            
            <div className="divide-y divide-slate-900 border-t border-b border-slate-950">
              {/* GitHub */}
              <a 
                href="https://github.com/abieekml" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ touchAction: 'manipulation' }}
                className="py-5 flex items-center justify-between group transition-all duration-300 relative select-none"
              >
                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none -mx-4" />
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-900 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors duration-300">
                    <Github size={18} />
                  </div>
                  <div>
                    <span className="font-bold text-sm text-slate-300 group-hover:text-white transition-colors duration-300">GitHub Profile</span>
                    <span className="text-[9px] font-mono text-slate-600 block uppercase tracking-wide mt-0.5">@abieekml</span>
                  </div>
                </div>
                <div className="text-slate-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all relative z-10">
                  <ArrowUpRight size={16} />
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/abi-kamal-29821731b" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ touchAction: 'manipulation' }}
                className="py-5 flex items-center justify-between group transition-all duration-300 relative select-none"
              >
                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none -mx-4" />
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-900 flex items-center justify-center text-slate-400 group-hover:text-blue-400 transition-colors duration-300">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <span className="font-bold text-sm text-slate-300 group-hover:text-blue-400 transition-colors duration-300">LinkedIn Network</span>
                    <span className="text-[9px] font-mono text-slate-600 block uppercase tracking-wide mt-0.5">Professional Page</span>
                  </div>
                </div>
                <div className="text-slate-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all relative z-10">
                  <ArrowUpRight size={16} />
                </div>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/abikyml" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ touchAction: 'manipulation' }}
                className="py-5 flex items-center justify-between group transition-all duration-300 relative select-none"
              >
                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none -mx-4" />
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-900 flex items-center justify-center text-slate-400 group-hover:text-pink-400 transition-colors duration-300">
                    <Instagram size={18} />
                  </div>
                  <div>
                    <span className="font-bold text-sm text-slate-300 group-hover:text-pink-400 transition-colors duration-300">Instagram Feed</span>
                    <span className="text-[9px] font-mono text-slate-600 block uppercase tracking-wide mt-0.5">@abikyml</span>
                  </div>
                </div>
                <div className="text-slate-600 group-hover:text-pink-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all relative z-10">
                  <ArrowUpRight size={16} />
                </div>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-slate-600 pt-6 gap-2">
              <span>PORTFOLIO © 2026</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
