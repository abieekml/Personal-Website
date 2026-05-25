import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, Award, Building, Compass, CornerDownRight, GraduationCap } from 'lucide-react';

const timelineData = [
  {
    category: "education",
    year: "Sep 2024 - Present",
    title: "Bachelor of Information Systems",
    institution: "State Islamic University (UIN) Syarif Hidayatullah Jakarta",
    description: "Focusing on enterprise information architectures, relational schemas, visual business intelligence, data modeling, & software design. Actively driving tech specialization through certified global curricula.",
    details: "Acquired fundamental competence in systems thinking, business processes modeling, database systems management (SQL), and algorithmic complexity. Core member of junior technology discussion circles.",
    icon: GraduationCap,
    badgeText: "UIN JAKARTA",
    accentColor: "text-blue-450",
    glowBg: "bg-blue-500/10",
    borderLeft: "border-blue-500/20"
  },
  {
    category: "experience",
    year: "Aug 2025 - Oct 2025",
    title: "Public Relations & Liaison Officer",
    institution: "HIMSI UIN Jakarta (MILAD HIMSI 2025 Gala)",
    description: "Managed external visual branding, drafted official organizational correspondence, & acted as the primary direct professional liaison for high-profile business speakers.",
    details: "Ensured frictionless coordination for 5+ major guest experts. Maintained communication lines under tight deadline constraints and facilitated logistical support for academic panels.",
    icon: Building,
    badgeText: "HIMSI ORGANIZATIONAL",
    accentColor: "text-emerald-450",
    glowBg: "bg-emerald-500/10",
    borderLeft: "border-emerald-500/20"
  },
  {
    category: "experience",
    year: "Aug 2025",
    title: "Deputy Logistics Coordinator",
    institution: "DEMA UIN Syarif Hidayatullah Jakarta",
    description: "Directed inventory management, procurement sequences, & physical setups for the large-scale orientation ceremonies of the university.",
    details: "Supervised a sub-unit of 15 members to optimize hardware and utility flow. Mitigated physical constraints under fast-evolving field parameters.",
    icon: Compass,
    badgeText: "DEMA LOGISTICS",
    accentColor: "text-indigo-405",
    glowBg: "bg-indigo-500/10",
    borderLeft: "border-indigo-500/20"
  },
  {
    category: "certifications",
    year: "May 2026",
    title: "Data Analytics Essentials",
    institution: "Cisco Networking Academy Credentials",
    description: "Accredited validation in exploratory data analysis (EDA), statistical methods, tabular data clean-up, & fundamentals of visual data communication.",
    details: "Demonstrated capacity to query, cleanse, parse, and formulate analytical takeaways from dirty dataset structures utilizing industry schemas.",
    icon: Award,
    badgeText: "CISCO CERTIFIED",
    accentColor: "text-amber-400",
    glowBg: "bg-amber-500/10",
    borderLeft: "border-amber-500/20"
  },
  {
    category: "certifications",
    year: "Nov 2025",
    title: "Prompt Engineering & Generative AI Mastery",
    institution: "Professional Credentials Panel",
    description: "Deep-dive techniques for structured prompting. Formulating robust task directives, contextual guardrails, and deterministic parameters for large language models.",
    details: "In-depth training on dynamic zero/few-shot prompts, chain-of-thought engineering, and leverage of instruction models to scale commercial output workflow.",
    icon: Award,
    badgeText: "AI CREDENTIAL",
    accentColor: "text-purple-400",
    glowBg: "bg-purple-500/10",
    borderLeft: "border-purple-500/20"
  },
  {
    category: "certifications",
    year: "Jul 2025",
    title: "Fundamentals of Python Programming",
    institution: "Professional Credentials Panel",
    description: "Validation in core procedural & object-oriented Python scripting, data collection parsing, dictionaries integration, & computational control flow.",
    details: "Concluded comprehensive evaluations regarding functions declarative paradigms, native file system IO, and basic data munging modules.",
    icon: Award,
    badgeText: "PYTHON CERTIFIED",
    accentColor: "text-emerald-400",
    glowBg: "bg-emerald-500/10",
    borderLeft: "border-emerald-500/20"
  },
  {
    category: "leadership",
    year: "Mar 2022 - Jul 2023",
    title: "Vice President & General Coordinator",
    institution: "ROHIS Student Association — SMAN 78 Jakarta",
    description: "Administered structural operations, designed weekly community programs, and supported standard institutional compliance targets for the executive board.",
    details: "Orchestrated collaborative student schedules, resolved internal resource allocations, and built alignment between school authority and peer leads.",
    icon: Building,
    badgeText: "SMAN 78 LEADERSHIP",
    accentColor: "text-pink-400",
    glowBg: "bg-pink-500/10",
    borderLeft: "border-pink-500/20"
  },
  {
    category: "leadership",
    year: "Feb 2023",
    title: "General Event Chair & Lead Organizer",
    institution: "Isra Mi'raj & Tafakur Alam Seminar Gala",
    description: "Envisioned and organized a large-scale student convention, drafting resource rundowns, coordinating physical spaces, & managing multi-divisional budgets.",
    details: "Assured timeline precision across 5 discrete sub-committees, ensuring safe, engaging, and compliant executions for hundreds of attendees.",
    icon: Calendar,
    badgeText: "EVENT EXECUTIVE",
    accentColor: "text-cyan-400",
    glowBg: "bg-cyan-500/10",
    borderLeft: "border-cyan-500/20"
  }
];

const categories = [
  { id: "all", label: "ALL EVENTS" },
  { id: "education", label: "EDUCATION" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "certifications", label: "CERTIFICATIONS" },
  { id: "leadership", label: "LEADERSHIP" },
];

export default function Timeline() {
  const [filter, setFilter] = useState("all");
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const filteredData = filter === "all" 
    ? timelineData 
    : timelineData.filter(item => item.category === filter);

  const toggleExpand = (idx: number) => {
    setExpandedItem(expandedItem === idx ? null : idx);
  };

  return (
    <section id="timeline" className="py-24 bg-slate-950 relative overflow-hidden scroll-mt-20">
      {/* Dynamic ambient context light elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-slate-900/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-indigo-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Core Layout Grid splits Header Left & Flow Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Header & Filter Column (Sticky) */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest block">[ 04. TRAJECTORY & EXPERIENCE ]</span>
              <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-tight">
                My Path.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                A structured breakdown of my academic path, professional and leadership positions, and certified global credentials as an Information Systems major.
              </p>
            </div>

            {/* Categorization dynamic tabs (Raw visual structure, NO card container) */}
            <div className="space-y-2 pt-6 border-t border-slate-900/80">
              <span className="text-[9px] font-mono font-bold text-slate-600 uppercase tracking-widest block mb-2">FILTER TRAJECTORY</span>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {categories.map((cat) => {
                  const isSelected = filter === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setFilter(cat.id);
                        setExpandedItem(null);
                      }}
                      style={{ touchAction: 'manipulation' }}
                      className={`px-4 py-2.5 rounded-xl text-[10px] font-mono font-black tracking-widest text-left uppercase transition-all duration-300 border cursor-pointer select-none ${
                        isSelected 
                          ? 'bg-indigo-600 border-indigo-505 text-white shadow-lg shadow-indigo-600/10 translate-x-1' 
                          : 'bg-slate-950 border-slate-900 text-slate-400 hover:border-slate-800 hover:text-white'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-2 text-[10px] font-mono text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
              <span>Real-time Dynamic Filter Engine</span>
            </div>
          </div>

          {/* Timeline Items Feed (No rigid cards, raw responsive rows) */}
          <div className="lg:col-span-8 space-y-1">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-6 block">
              CHRONOLOGY FEED ({filteredData.length} SECS RECORDED)
            </div>

            <div className="divide-y divide-slate-900 border-t border-b border-slate-950">
              <AnimatePresence mode="popLayout">
                {filteredData.map((item, idx) => {
                  const isExpanded = expandedItem === idx;
                  const IconComponent = item.icon;

                  return (
                    <motion.div
                      key={item.title + item.institution}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="py-6 relative group"
                    >
                      {/* Interactive background highlight */}
                      <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none -mx-4" />

                      <div 
                        onClick={() => toggleExpand(idx)}
                        style={{ touchAction: 'manipulation' }}
                        className="flex gap-4 md:gap-6 items-start justify-between cursor-pointer select-none relative z-10"
                      >
                        <div className="flex gap-4 md:gap-6 items-start flex-1 text-left">
                          {/* Chronological Label */}
                          <div className="text-[10px] font-mono text-slate-600 pt-1.5 w-24 shrink-0 hidden sm:block">
                            {item.year}
                          </div>

                          {/* Icon marker */}
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.glowBg} ${item.accentColor} border border-slate-900`}>
                            <IconComponent size={18} />
                          </div>

                          {/* Primary content preview */}
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[10px] font-mono text-slate-500 sm:hidden">{item.year}</span>
                              <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                                {item.badgeText}
                              </span>
                            </div>
                            <h3 className="text-base md:text-lg font-bold text-white leading-snug group-hover:text-indigo-400 transition-colors">
                              {item.title}
                            </h3>
                            <h4 className="text-xs font-mono text-slate-400 mt-1 uppercase font-medium">
                              {item.institution}
                            </h4>
                            
                            {/* Brief non-expanded description */}
                            <p className="text-xs text-slate-500 leading-relaxed mt-2.5 max-w-xl font-sans">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {/* Expand indicator symbol */}
                        <div>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-slate-600 group-hover:text-indigo-400 p-2"
                          >
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </motion.div>
                        </div>
                      </div>

                      {/* Expanded core study chronologies */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="overflow-hidden"
                          >
                            <div className="pl-14 sm:pl-36 pr-4 pt-4 pb-2 text-slate-400 text-xs sm:text-sm leading-relaxed flex items-start gap-2.5">
                              <CornerDownRight size={14} className="text-indigo-500 shrink-0 mt-1" />
                              <div className="font-sans space-y-1 py-1 px-3 bg-slate-900/20 border border-slate-900/60 rounded-xl">
                                <span className="text-[8px] font-mono font-bold text-indigo-400 uppercase tracking-wide block">DETAILED CONTEXT:</span>
                                <p className="text-slate-300">
                                  {item.details}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Micro visual tip */}
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-600 px-2 pt-2">
              <span className="flex items-center gap-1"><Sparkles size={8} className="text-indigo-400 animate-pulse" /> TAP ROW EXPANDS CHRONOLOGY BLUEPRINT</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
