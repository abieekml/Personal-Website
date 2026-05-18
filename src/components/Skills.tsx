import { motion } from 'motion/react';
import { Layout, Server, Palette, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS"],
    color: "text-blue-500"
  },
  {
    title: "Programming & Data",
    icon: Server,
    skills: ["SQL", "Python", "Problem Solving", "Data Analysis"],
    color: "text-green-500"
  },
  {
    title: "Design & UX",
    icon: Palette,
    skills: ["UI Principles", "Figma", "Responsive Design", "User Experience"],
    color: "text-purple-500"
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: ["Git / GitHub", "VS Code", "Vercel / Netlify", "Communication"],
    color: "text-orange-500"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-12 text-center">03. Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bento-card p-10 flex flex-col group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-12 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 text-slate-300">
                <category.icon size={24} />
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-slate-800 text-slate-400 rounded-full text-[10px] font-bold border border-slate-700 transition-all border-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
