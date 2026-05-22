import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layout, Server, Palette, Wrench, Sparkles, Check } from 'lucide-react';

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Layout,
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS"],
    skillsExplanation: {
      "HTML5": "Semantic structure, modern layouts & SEO standards.",
      "CSS3": "Responsive layout design, preprocessors, variables & standard animations.",
      "JavaScript (ES6+)": "Data objects mapping, custom state workflows & modular scripting.",
      "React": "Functional components, declarative state hook structures & custom hooks.",
      "Tailwind CSS": "Utility-first rapid prototyping, responsive breaks & high fidelity layouts."
    },
    accentGlow: "shadow-[inset_0_1px_15px_rgba(59,130,246,0.1)]",
    textClass: "text-blue-400 group-hover:text-blue-300",
    progressColor: "bg-blue-500",
    subBg: "from-blue-950/20 to-transparent"
  },
  {
    id: "backend",
    title: "Programming & Data",
    icon: Server,
    skills: ["SQL", "Python", "Problem Solving", "Data Analysis"],
    skillsExplanation: {
      "SQL": "Writing structured enterprise queries & optimizing database retrievals.",
      "Python": "Scripting, task automation & structured procedural operations.",
      "Problem Solving": "Algorithmic thinking, clean debugging & systematic error fixing.",
      "Data Analysis": "Interpreting dynamic requirements & visualizing system parameters."
    },
    accentGlow: "shadow-[inset_0_1px_15px_rgba(16,185,129,0.1)]",
    textClass: "text-emerald-400 group-hover:text-emerald-300",
    progressColor: "bg-emerald-500",
    subBg: "from-emerald-950/20 to-transparent"
  },
  {
    id: "design",
    title: "Design & UX",
    icon: Palette,
    skills: ["UI Principles", "Figma", "Responsive Design", "User Experience"],
    skillsExplanation: {
      "UI Principles": "Grid alignment, high color contrast, balance, rhythm & typography pairing.",
      "Figma": "Building UI blueprints, static mockups & wireframe systems.",
      "Responsive Design": "Ensuring fluid screens that run flawlessly on all screens.",
      "User Experience": "Mapping friction-free digital paths for the user."
    },
    accentGlow: "shadow-[inset_0_1px_15px_rgba(168,85,247,0.1)]",
    textClass: "text-purple-400 group-hover:text-purple-300",
    progressColor: "bg-purple-500",
    subBg: "from-purple-950/20 to-transparent"
  },
  {
    id: "tools",
    title: "Tools & Others",
    icon: Wrench,
    skills: ["Git / GitHub", "VS Code", "Vercel / Netlify", "Communication"],
    skillsExplanation: {
      "Git / GitHub": "Source tracking, commit standards & team collaboration.",
      "VS Code": "Productive environment workflow & tailored coding plugins.",
      "Vercel / Netlify": "Continuous deployment, static staging & build checks.",
      "Communication": "Collaborating effectively to convert visual designs to products."
    },
    accentGlow: "shadow-[inset_0_1px_15px_rgba(245,158,11,0.1)]",
    textClass: "text-amber-400 group-hover:text-amber-300",
    progressColor: "bg-amber-500",
    subBg: "from-amber-950/20 to-transparent"
  }
];

export default function Skills() {
  const [focusedSkill, setFocusedSkill] = useState<{ category: string, skill: string } | null>(null);

  const handleSkillTap = (catId: string, skill: string) => {
    if (focusedSkill?.category === catId && focusedSkill?.skill === skill) {
      setFocusedSkill(null);
    } else {
      setFocusedSkill({ category: catId, skill });
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-950 scroll-mt-20 overflow-hidden relative">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-slate-900/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          

          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest block">[ 03. SKILLS & TECHSTACK ]</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-none tracking-tight">
              My Stack.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed text-left">
              I focus on modern frontend environments, maintaining clean developer workflows, and building structured logic.
            </p>

            <div className="p-4 bg-slate-900/10 border border-slate-950 rounded-2xl">
            
              <AnimatePresence mode="wait">
                {focusedSkill ? (
                  <motion.div
                    key={`${focusedSkill.category}-${focusedSkill.skill}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      <span className="text-xs font-mono font-bold text-white uppercase">{focusedSkill.skill}</span>
                    </div>
                    <p className="text-xs text-slate-400 font-sans leading-relaxed">
                      {(skillCategories.find(c => c.id === focusedSkill.category)?.skillsExplanation as any)?.[focusedSkill.skill] || "Verified standard tech proficiency."}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    className="text-xs font-sans text-slate-500 italic flex items-center gap-2"
                  >
                    <Sparkles size={12} className="text-indigo-400 shrink-0" />
                    Tap any skill tags on the right to read details.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>


          <div className="lg:col-span-8 space-y-8">
            <div className="divide-y divide-slate-900 border-t border-b border-slate-950">
              {skillCategories.map((category) => (
                <div 
                  key={category.id}
                  className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-start relative group"
                >
                  {/* Small absolute top overlay */}
                  <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none -mx-4" />

                  {/* Icon & Category label */}
                  <div className="md:col-span-4 flex items-center gap-4 relative z-10">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${category.textClass} bg-slate-900/45 border border-slate-900`}>
                      <category.icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-white tracking-wide">{category.title}</h4>
                    </div>
                  </div>

                  {/* Skill tags list */}
                  <div className="md:col-span-8 flex flex-wrap gap-2.5 pt-2 md:pt-1 relative z-10 select-none">
                    {category.skills.map((skill) => {
                      const isFocused = focusedSkill?.category === category.id && focusedSkill?.skill === skill;
                      return (
                        <span
                          key={skill}
                          onClick={() => handleSkillTap(category.id, skill)}
                          style={{ touchAction: 'manipulation' }}
                          className={`px-4 py-2 text-xs font-mono font-semibold rounded-xl border transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                            isFocused 
                              ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_8px_20px_-4px_rgba(79,70,229,0.3)] scale-[1.04]'
                              : 'bg-slate-950 text-slate-400 border-slate-900 hover:border-slate-805 hover:text-white hover:bg-slate-900/40'
                          }`}
                        >
                          {skill}
                          {isFocused && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                            />
                          )}
                        </span>
                      );
                    })}
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
