import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, ArrowRight, Clipboard, Check, Sparkles, Clock } from 'lucide-react';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  // Live real-time clock representing Jakarta time (WIB / UTC+7)
  useEffect(() => {
    const updateClock = () => {
      const options = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit" as const,
        minute: "2-digit" as const,
        second: "2-digit" as const,
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setTime(formatter.format(new Date()));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("abii.kamall4@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-slate-950">
      
      {/* Absolute visual fluid atmosphere (glowing mesh particles) */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Core responsive grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Editorial Typography & CTAs (NO Card Boxes) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Real-time Telemetry & Location Ribbon */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-505 animate-pulse" />
                Jakarta, ID (WIB)
              </span>
              <span className="text-slate-800">•</span>
              <span className="flex items-center gap-1.5 font-bold text-slate-400">
                <Clock size={11} className="text-indigo-400" /> {time || "12:00:00"}
              </span>
              <span className="text-slate-800">•</span>
              <span className="text-emerald-400 font-bold uppercase tracking-widest bg-emerald-950/25 border border-emerald-900/30 px-2.5 py-0.5 rounded">
                Open for Collaboration
              </span>
            </div>

            {/* Bold Display Heading Pair */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">
                [ UNDERGRADUATE MAJOR IN SYSTEMS INFORMATION ]
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-white leading-[1.05] tracking-tight">
                Abi Kamal.<br />
                <span className="bg-gradient-to-r from-indigo-400 via-indigo-400 to-indigo-305 bg-clip-text text-transparent">Information</span> <br />
                <span className="text-slate-550 italic font-medium font-serif leading-none">Systems Analyst.</span>
              </h1>
            </div>

            {/* Narrative Context block */}
            <p className="text-slate-300 text-sm md:text-base max-w-xl leading-relaxed">
              Studying at State Islamic University (UIN) Syarif Hidayatullah Jakarta. Dedicated to optimizing enterprise digital architectures, mapping actionable pipelines through <strong className="text-white font-semibold">Data Analytics</strong>, & configuring automated AI workflows utilizing <strong className="text-indigo-400 font-semibold font-mono">Prompt Engineering</strong>.
            </p>

            {/* Dynamic Buttons Matrix */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#timeline" 
                style={{ touchAction: 'manipulation' }}
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-505 active:scale-95 text-white rounded-2xl font-bold transition-all text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/15 cursor-pointer select-none"
              >
                Explore Journey <ArrowRight size={16} />
              </a>

              <button 
                onClick={copyEmail}
                style={{ touchAction: 'manipulation' }}
                className="px-6 py-4 bg-slate-950 hover:bg-slate-900 border border-slate-900 hover:border-slate-800 text-slate-300 hover:text-white rounded-2xl font-bold active:scale-95 transition-all text-sm flex items-center gap-2 cursor-pointer select-none"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-emerald-400 animate-bounce" /> Copied Email!
                  </>
                ) : (
                  <>
                    <Clipboard size={16} className="text-slate-500" /> Copy Email
                  </>
                )}
              </button>
            </div>

            {/* Raw Horizontal Statistics Row */}
            <div className="pt-8 border-t border-slate-900/80 grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl md:text-3xl font-display font-black text-indigo-400">5+</div>
                <div className="text-[10px] font-mono uppercase text-slate-550 mt-1 tracking-wider">Tech Credentials</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-display font-black text-white">3+</div>
                <div className="text-[10px] font-mono uppercase text-slate-550 mt-1 tracking-wider">Leadership Roles</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-display font-black text-emerald-400">S1</div>
                <div className="text-[10px] font-mono uppercase text-slate-550 mt-1 tracking-wider">Information Systems</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Profile Representation Panel (NO Card Box) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              
              {/* Absolutes back glows */}
              <div className="absolute inset-0 bg-indigo-500/10 rounded-3xl blur-2xl -z-10" />
              
              {/* Highly styled profile parameters list */}
              <div className="space-y-5 p-6 md:p-8 bg-gradient-to-b from-slate-905 to-slate-950 border border-slate-900 rounded-3xl relative overflow-hidden backdrop-blur-md">
                
                {/* Visual code parameters header */}
                <div className="flex justify-between items-center pb-4 border-b border-slate-900">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-black">candidate_file.sh</span>
                  </div>
                  <span className="text-[8px] font-mono text-emerald-400 bg-emerald-950/25 border border-emerald-900/30 px-2 py-0.5 rounded font-bold uppercase tracking-widest">
                    VERIFIED
                  </span>
                </div>

                {/* Core Attributes */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[8px] font-mono font-bold text-indigo-400 uppercase tracking-wide">Candidate Name</span>
                    <p className="text-base font-bold text-white font-sans">Abi Kamal</p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[8px] font-mono font-bold text-indigo-400 uppercase tracking-wide">Institutional Focus</span>
                    <p className="text-xs text-slate-300 font-sans">UIN Syarif Hidayatullah Jakarta — Batch 2024</p>
                  </div>

                  {/* Core Tech badging on-board */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-wide block">ACTIVE TECHNICAL DOMAINS</span>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-900 text-[10px] font-mono text-slate-300">
                        Data Analytics
                      </span>
                      <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-900 text-[10px] font-mono text-slate-300">
                        Python Logic
                      </span>
                      <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-900 text-[10px] font-mono text-slate-300">
                        AI Automation
                      </span>
                    </div>
                  </div>
                </div>

                {/* Minimalist raw social connect panel (Unboxed items inside) */}
                <div className="pt-6 border-t border-slate-900/80 space-y-3">
                  <span className="text-[8px] font-mono font-bold text-slate-600 uppercase tracking-wide block">DIRECT NETWORKS</span>
                  
                  <div className="flex gap-2.5">
                    <a 
                      href="https://github.com/abieekml" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-xl bg-slate-950 hover:bg-white text-slate-400 hover:text-black border border-slate-900 hover:border-white flex items-center justify-center transition-all duration-300"
                      title="GitHub Profile"
                    >
                      <Github size={16} />
                    </a>
                    
                    <a 
                      href="https://www.linkedin.com/in/abi-kamal-29821731b" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-xl bg-slate-950 hover:bg-blue-600/10 text-slate-400 hover:text-blue-400 border border-slate-900 hover:border-blue-900/40 flex items-center justify-center transition-all duration-300"
                      title="LinkedIn Page"
                    >
                      <Linkedin size={16} />
                    </a>
                    
                    <a 
                      href="https://instagram.com/abikyml" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-xl bg-slate-950 hover:bg-pink-600/10 text-slate-400 hover:text-pink-400 border border-slate-900 hover:border-pink-900/40 flex items-center justify-center transition-all duration-300"
                      title="Instagram Feed"
                    >
                      <Instagram size={16} />
                    </a>
                  </div>
                </div>

                {/* Micro decorative subtitle quotes */}
                <p className="text-[10px] italic text-slate-500 font-sans leading-relaxed pt-2">
                  "Converting raw databases and structural logic schemas into robust, high-fidelity real world solutions."
                </p>

              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
