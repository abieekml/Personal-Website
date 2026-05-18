import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowRight, X, CheckCircle2, Search, Zap } from 'lucide-react';

const projects = [
  {
    title: "BikinLaris Digital",
    description: "A digital solution project aimed at helping Indonesian UMKM optimize their online presence and social media strategy.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Tailwind CSS", "Frontend"],
    link: "https://bikinlaris.netlify.app/",
    github: "https://github.com/abieekml/Bikin-Laris-web",
    color: "bg-orange-50",
    caseStudy: {
      problem: "Local businesses (UMKM) often lack the technical knowledge to build an effective digital presence, making it hard for them to reach a wider audience.",
      solution: "Developed a focused landing page and digital service concept that simplifies the digital onboarding process for non-technical business owners.",
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
    color: "bg-blue-50",
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
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 bg-slate-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">02. Works</h2>
        <h3 className="text-4xl font-display font-bold text-white">Selected Projects</h3>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`bento-card group flex flex-col overflow-hidden ${i === 0 ? 'md:col-span-2' : ''}`}
          >
            <div className="aspect-[16/9] overflow-hidden bg-slate-950 p-2">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                  <div className="flex gap-2">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">#{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all">
                    <Github size={16} />
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white hover:bg-indigo-500 transition-all">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-8">
                {project.description}
              </p>
              
              <button 
                onClick={() => setSelectedProject(project)}
                className="mt-auto w-full py-4 border border-slate-800 rounded-2xl text-xs font-bold text-white hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group/btn"
              >
                VIEW CASE STUDY <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-5xl h-full max-h-[90vh] bg-slate-900 border border-slate-800 rounded-[3rem] overflow-hidden flex flex-col relative"
            >
              {/* Header */}
              <div className="p-8 md:p-12 border-b border-slate-800 flex justify-between items-center bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
                 <div>
                   <h2 className="text-3xl font-display font-bold text-white mb-2">{selectedProject.title}</h2>
                   <div className="flex gap-4">
                     {selectedProject.tags.map(tag => (
                       <span key={tag} className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">{tag}</span>
                     ))}
                   </div>
                 </div>
                 <button 
                   onClick={() => setSelectedProject(null)}
                   className="p-4 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-all shadow-xl"
                 >
                   <X size={24} />
                 </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                   {/* Column 1: Context */}
                   <div className="lg:col-span-4 space-y-12">
                      <div className="rounded-3xl overflow-hidden border border-slate-800 aspect-[4/5]">
                        <img 
                          src={selectedProject.image} 
                          alt="Cover" 
                          className="w-full h-full object-cover grayscale"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="space-y-6">
                        <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-800">
                           <h4 className="flex items-center gap-2 text-white font-bold mb-4">
                             <Zap size={18} className="text-indigo-400" /> Key Features
                           </h4>
                           <ul className="space-y-3">
                             {selectedProject.tags.map(tag => (
                               <li key={tag} className="text-sm text-slate-400 flex items-center gap-2">
                                 <CheckCircle2 size={14} className="text-slate-600" /> {tag}
                               </li>
                             ))}
                           </ul>
                        </div>
                        <div className="flex gap-4">
                           <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-indigo-600 text-white rounded-2xl text-center font-bold text-sm hover:bg-indigo-500 transition-all flex items-center justify-center gap-2">
                             Live Demo <ExternalLink size={16} />
                           </a>
                           <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="w-14 items-center justify-center flex py-4 border border-slate-800 text-white rounded-2xl hover:bg-slate-800 transition-all">
                             <Github size={20} />
                           </a>
                        </div>
                      </div>
                   </div>

                   {/* Column 2: Details */}
                   <div className="lg:col-span-8 space-y-16">
                      <section>
                         <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                           <span className="w-8 h-px bg-slate-800" /> 01. The Problem
                         </h4>
                         <p className="text-xl text-slate-200 leading-relaxed font-display">
                           {selectedProject.caseStudy.problem}
                         </p>
                      </section>

                      <section>
                         <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                           <span className="w-8 h-px bg-slate-800" /> 02. The Solution
                         </h4>
                         <p className="text-lg text-slate-400 leading-relaxed">
                           {selectedProject.caseStudy.solution}
                         </p>
                      </section>

                      <section>
                         <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                           <span className="w-8 h-px bg-slate-800" /> 03. The Process
                         </h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {selectedProject.caseStudy.process.map((step, idx) => (
                              <div key={idx} className="p-6 bg-slate-950/50 rounded-2xl border border-slate-800 flex gap-4">
                                 <span className="text-indigo-400 font-mono font-bold">{idx + 1}.</span>
                                 <p className="text-xs text-slate-400 leading-relaxed">{step}</p>
                              </div>
                            ))}
                         </div>
                      </section>
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
