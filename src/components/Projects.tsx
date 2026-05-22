import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowRight, CornerDownRight, CheckCircle2, Sparkles, BookOpen, X } from 'lucide-react';

const projects = [
  {
    title: "BikinLaris Digital",
    description: "A digital solution project aimed at helping Indonesian UMKM optimize their online presence and social media strategy.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Tailwind CSS", "Frontend"],
    link: "https://bikinlaris.netlify.app/",
    github: "https://github.com/abieekml/Bikin-Laris-web",
    badgeStyles: "text-amber-400 bg-amber-950/20 border border-amber-900/30",
    themeClass: "text-amber-400",
    accentColor: "border-amber-500/30",
    caseStudy: {
      problem: "Local businesses (UMKM) often lack the technical knowledge to build an effective digital presence, making it hard for them to reach a wider audience.",
      solution: "Developed a focused landing page and digital service concept that simplifies the digital onboarding process for Indonesian business owners.",
      process: [
        "Analyzed the digital needs of local Indonesian UMKM.",
        "Built a responsive landing page using React and Tailwind CSS.",
        "Optimized the user flow for lead generation and service inquiries.",
        "Integrated basic analytics to track user engagement."
      ]
    }
  },
  {
    title: "Personal Profile",
    description: "The initial version of my professional portfolio, showcasing my journey as a student and junior developer.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://abieekml.github.io/",
    github: "https://github.com/abieekml/abieekml.github.io",
    badgeStyles: "text-indigo-400 bg-indigo-950/20 border border-indigo-900/30",
    themeClass: "text-indigo-400",
    accentColor: "border-indigo-500/30",
    caseStudy: {
      problem: "Needed a centralized place to share my academic progress and side projects while learning frontend fundamentals.",
      solution: "Created a lightweight, mobile-responsive profile website using core web technologies to demonstrate fundamental coding skills.",
      process: [
        "Drafted a simple layout focused on readability and personal branding.",
        "Implemented semantic HTML and CSS for a clean look.",
        "Added JavaScript for basic interactivity (smooth scrolling, tab switching).",
        "Deployed via GitHub Pages for global accessibility."
      ]
    }
  },
];

export default function Projects() {
  const [activeProjectIdx, setActiveProjectIdx] = useState<number | null>(null);

  const toggleProject = (idx: number) => {
    setActiveProjectIdx(activeProjectIdx === idx ? null : idx);
  };

  return (
    <section id="projects" className="py-24 bg-slate-950 scroll-mt-20 relative overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-slate-900/40 rounded-full blur-[130px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Typographic Centered Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest block">[ 02. PORTFOLIO ]</span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-tight">
            Selected Work & Projects.
          </h2>
          <p className="text-xs font-mono text-slate-500 max-w-md mx-auto">
            Grounded in academic exploration and practical frontend engineering.
          </p>
        </div>

        {/* List layout instead of boxy cards */}
        <div className="space-y-16">
          {projects.map((project, idx) => {
            const isExpanded = activeProjectIdx === idx;
            return (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05, margin: "100px 0px" }}
                className={`py-8 border-b border-slate-900 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start transition-colors duration-300 relative group`}
              >
                {/* 1. Left Frame: High Quality Responsive Image Frame (No strict outer box) */}
                <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] bg-slate-900 transition-transform duration-500 shrink-0 select-none">
                  {/* Glass tint element */}
                  <div className="absolute inset-0 bg-slate-950/20 z-10 pointer-events-none group-hover:bg-transparent transition-colors" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-[1.03] group-hover:opacity-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Large absolute indicator floating */}
                  <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2 pointer-events-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className={`text-[8px] sm:text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full backdrop-blur-md ${project.badgeStyles}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2. Right Frame: Editorial Content (NO card container) */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
                  <div className="space-y-4">
                    {/* Index marker */}
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="font-bold text-slate-700">PROJECT / 0{idx + 1}</span>
                      <span className="text-slate-500">INDONESIA</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-display font-black text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm md:text-base leading-relaxed text-left">
                      {project.description}
                    </p>
                  </div>

                  {/* Actions Row */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button
                      onClick={() => toggleProject(idx)}
                      style={{ touchAction: 'manipulation' }}
                      className="py-3 px-6 border border-slate-850 hover:border-slate-800 bg-slate-900/20 active:bg-slate-900 rounded-xl text-xs font-bold font-mono text-white transition-all flex items-center gap-2 cursor-pointer select-none"
                    >
                      {isExpanded ? (
                        <>
                          CLOSE PROCESS <X size={13} className="text-indigo-400" />
                        </>
                      ) : (
                        <>
                          VIEW PROCESS <BookOpen size={13} className="text-indigo-400" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-xl border border-slate-900 hover:border-slate-800 bg-slate-900/30 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                        title="Repository"
                      >
                        <Github size={16} />
                      </a>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center transition-all duration-300 shadow-md shadow-indigo-650/10"
                        title="Live Site"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* 3. Inline Interactive Expansion (Fulfills multi-device touch-to-open logic without desktop requirements) */}
                <div className="col-span-1 lg:col-span-12 w-full">
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="mt-8 pt-8 border-t border-slate-900/80 grid grid-cols-1 md:grid-cols-12 gap-8">
                          
                          {/* Left core column expansion: Problem and Solution */}
                          <div className="md:col-span-7 space-y-6">
                            <div className="space-y-2">
                              <h4 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" /> The Core Problem
                              </h4>
                              <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans">
                                {project.caseStudy.problem}
                              </p>
                            </div>

                            <div className="space-y-2">
                              <h4 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> The Solution Delivered
                              </h4>
                              <p className="text-sm text-slate-400 leading-relaxed font-sans">
                                {project.caseStudy.solution}
                              </p>
                            </div>
                          </div>

                          {/* Right column expansion: Steps */}
                          <div className="md:col-span-5 space-y-4">
                            <h4 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                              DEVELOPMENT CHRONOLOGY
                            </h4>
                            <div className="space-y-2">
                              {project.caseStudy.process.map((step, sIdx) => (
                                <div key={sIdx} className="p-3.5 bg-slate-900/10 rounded-xl border border-slate-900 flex items-start gap-3">
                                  <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/30 px-2 py-0.5 rounded border border-indigo-900/20 shrink-0">
                                    0{sIdx + 1}
                                  </span>
                                  <p className="text-xs text-slate-400 leading-relaxed">
                                    {step}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      
      </div>
    </section>
  );
}
