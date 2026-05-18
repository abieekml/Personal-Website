import { motion } from 'motion/react';
import { Target, Lightbulb, Code, GraduationCap } from 'lucide-react';

const stats = [
  { icon: GraduationCap, label: 'Education', value: 'Information System student at UIN Jakarta' },
  { icon: Target, label: 'Focus', value: 'Frontend Development & UI Design' },
  { icon: Lightbulb, label: 'Interests', value: 'Digital Transformation & Data' },
  { icon: Code, label: 'Languages', value: 'JavaScript, SQL, Python, HTML/CSS' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bento-card p-10"
          >
            <h2 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-6">01. About Me</h2>
            <h3 className="text-4xl font-display font-bold text-white leading-tight mb-8">
              Turning complex problems into <br />
              <span className="text-slate-500">elegant digital solutions.</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <p className="text-slate-400 text-sm leading-relaxed">
                Hi, I'm Abi Kamal. As an Information System undergraduate at UIN Syarif Hidayatullah Jakarta, I've cultivated a deep passion for digital transformation and technological innovation.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                My journey as a Junior Developer is driven by curiosity and a commitment to excellence. I specialize in building web applications that aren't just functional, but provide a seamless and engaging experience for users. 
              </p>
            </div>
          </motion.div>

          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bento-card p-8 flex flex-col justify-between group"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-300 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <stat.icon size={24} />
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</h4>
                <p className="text-white font-medium leading-snug">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
