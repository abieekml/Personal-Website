import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Lightbulb, Code, GraduationCap, ArrowDownRight, CornerDownRight, Sparkles } from 'lucide-react';

const stats = [
  { 
    icon: GraduationCap, 
    label: 'Education', 
    value: 'Information System student at UIN Jakarta',
    details: 'Undergraduate study at UIN Syarif Hidayatullah Jakarta. Focusing on enterprise systems analysis, database design, and programming methodologies.',
    colorText: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10 text-emerald-400',
    badgeText: 'Academic Profile'
  },
  { 
    icon: Target, 
    label: 'Focus', 
    value: 'Frontend Development & UI Design',
    details: 'Dedicated to translating pixel-perfect designs into robust interfaces. Specialized in React framework, component modeling, and accessible semantic layouts.',
    colorText: 'text-blue-400',
    iconBg: 'bg-blue-500/10 text-blue-400',
    badgeText: 'Technical Core'
  },
  { 
    icon: Lightbulb, 
    label: 'Interests', 
    value: 'Digital Transformation & Data',
    details: 'Fascinated by high-impact visual design systems, cloud integration, interactive animations, and how data products shape human decisions.',
    colorText: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10 text-indigo-400',
    badgeText: 'Aspiration'
  },
  { 
    icon: Code, 
    label: 'Languages', 
    value: 'JavaScript, SQL, Python, HTML/CSS',
    details: 'Versed in modern JavaScript scripting, declarative CSS architectures, structured SQL query optimization, and scripting workflows via Python.',
    colorText: 'text-amber-400',
    iconBg: 'bg-amber-500/10 text-amber-400',
    badgeText: 'Core Syntax'
  },
];

export default function About() {
  const [activeStat, setActiveStat] = useState<number | null>(null);

  const toggleStat = (idx: number) => {
    setActiveStat(activeStat === idx ? null : idx);
  };

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">

      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          

          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-4">[ 01. IDENTITY ]</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white leading-tight tracking-tight">
                About <br />
                <span className="text-slate-500">My Path.</span>
              </h2>
            </div>

            <div className="space-y-6 pt-4 border-t border-slate-900">
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Hi, I'm Abi Kamal. As an Information System student at UIN Syarif Hidayatullah Jakarta, I’ve cultivated a deep appreciation for structured software architectures and polished visual experiences.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
              My journey as a Junior Developer is driven by curiosity and a commitment to excellence. I specialize in building web applications that aren't just functional, but provide a seamless and engaging experience for users.
              </p>
            </div>

            <div className="pt-6 flex items-center gap-2 text-xs font-mono text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
              <span>Based in Jakarta, ID</span>
              <span className="mx-2 text-slate-800">•</span>
              <span>Open for creative opportunities</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest block mb-2">[ PROFILE ATTRIBUTES ]</span>
            
            <div className="divide-y divide-slate-900 border-t border-b border-slate-950">
              {stats.map((stat, i) => {
                const isActive = activeStat === i;
                return (
                  <div 
                    key={stat.label}
                    className="py-6 transition-colors duration-300 relative group"
                  >
 
                    <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none -mx-4" />

                    <div 
                      onClick={() => toggleStat(i)}
                      style={{ touchAction: 'manipulation' }}
                      className="flex gap-4 md:gap-6 items-start justify-between cursor-pointer select-none relative z-10"
                    >
                      <div className="flex gap-4 md:gap-6 items-start flex-1">

                        <div className="text-xs font-mono text-slate-700 pt-1">
                          0{i + 1}
                        </div>
                        

                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${stat.iconBg}`}>
                          <stat.icon size={18} />
                        </div>

                        <div>
                          <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</h4>
                          <p className={`text-white text-base md:text-lg font-bold leading-snug transition-colors duration-300 ${isActive ? stat.colorText : 'group-hover:text-indigo-400'}`}>
                            {stat.value}
                          </p>
                        </div>
                      </div>


                      <div className="flex flex-col items-center">
                        <motion.div
                          animate={{ rotate: isActive ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className={`text-slate-600 group-hover:text-indigo-400 transition-colors p-1`}
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </motion.div>
                        {isActive && (
                          <span className="text-[8px] font-mono text-indigo-400/80 mt-1 uppercase font-bold tracking-wider hidden md:block">
                            {stat.badgeText}
                          </span>
                        )}
                      </div>
                    </div>


                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pl-14 pr-4 pt-4 pb-2 text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                            <CornerDownRight size={14} className="text-indigo-500 shrink-0 mt-1" />
                            <p className="font-sans">
                              {stat.details}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="text-[10px] sm:text-xs font-mono text-slate-600 flex justify-between items-center px-2 pt-2">
              <span className="flex items-center gap-1"><Sparkles size={10} className="text-indigo-500" /> TAP ROWS TO DEEP DIVE</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
