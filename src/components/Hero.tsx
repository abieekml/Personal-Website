import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-12 overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
        {/* Main Intro Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:col-span-2 md:row-span-1 bento-card p-8 flex flex-col justify-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 blur-3xl -mr-10 -mt-10" />
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
            Crafting Digital <br />
            <span className="text-indigo-400">Experiences.</span>
          </h1>
          <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
            Abi Kamal — a Frontend developer and UI/UX enthusiast focused on building performant, aesthetic, and user-centric web applications.
          </p>
        </motion.div>

        {/* Availability Badge */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.1 }}
           className="md:col-span-1 md:row-span-1 bg-indigo-600 rounded-3xl p-6 flex flex-col justify-between text-white"
        >
          <div className="flex justify-between items-start">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">⚡</div>
            <span className="text-[10px] font-bold uppercase border border-white/30 px-2 py-0.5 rounded-full">Active</span>
          </div>
          <div>
            <p className="text-sm font-medium opacity-80">Currently available for</p>
            <h4 className="text-xl font-bold">Freelance Projects</h4>
          </div>
        </motion.div>

        {/* Social Links Card */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.2 }}
           className="md:col-span-1 md:row-span-1 bento-card p-6 flex flex-col justify-between"
        >
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Connect</h3>
          <div className="flex gap-3">
             <a href="https://github.com/abieekml" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-slate-700 hover:text-white transition-all">
               <Github size={18} />
             </a>
             <a href="https://www.linkedin.com/in/abi-kamal-29821731b" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-slate-700 hover:text-white transition-all">
               <Linkedin size={18} />
             </a>
             <a href="https://instagram.com/abii.kamal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-slate-700 hover:text-white transition-all">
               <Instagram size={18} />
             </a>
          </div>
        </motion.div>

        {/* Big Visual Card */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3 }}
           className="md:col-span-4 md:row-span-1 bento-card overflow-hidden group p-1"
        >
          <div className="h-full w-full rounded-[calc(2rem-4px)] bg-slate-950 flex flex-col md:flex-row items-center justify-between p-8 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-emerald-500/10" />
             <div className="relative z-10 max-w-xl">
               <p className="text-indigo-400 font-mono text-xs mb-4">LATEST PROJECT</p>
               <h3 className="text-3xl font-display font-bold text-white mb-6">BikinLaris Digital — Solusi Digital UMKM Indonesia</h3>
               <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium transition-all backdrop-blur-sm border border-white/10">
                 Explore Project <ArrowDown size={16} />
               </a>
             </div>
             <div className="relative mt-8 md:mt-0 w-full md:w-[40%] bg-slate-900 rounded-2xl border border-slate-800 p-2 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                  alt="Feature preview"
                  className="w-full h-auto rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
