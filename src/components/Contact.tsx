import { motion } from 'motion/react';
import { Mail, MessageSquare, ArrowUpRight, Instagram, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bento-card p-12 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px] -mr-32 -mt-32" />
            <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">05. Collaboration</h2>
            <h3 className="text-5xl font-display font-bold text-white mb-8">
              Let's build <br />
              something <br />
              <span className="text-indigo-400 italic">Legendary.</span>
            </h3>
            <p className="text-slate-400 max-w-sm mb-12">
              Currently open for new projects and professional opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
               <a href="mailto:abikamal964@gmail.com" className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-500 transition-all">
                 Email Me
               </a>
               <a href="https://wa.me/6289621949745" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-2xl font-bold hover:bg-slate-700 transition-all flex items-center gap-2">
                 WhatsApp <ArrowUpRight size={18} />
               </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bento-card p-8 flex flex-col justify-between"
          >
             <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Connect</h3>
             <div className="space-y-4">
                 <a href="https://github.com/abieekml" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-colors">
                    <span className="text-white font-medium">GitHub</span>
                    <Github size={20} className="text-slate-500" />
                 </a>
                 <a href="https://www.linkedin.com/in/abi-kamal-29821731b" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-colors">
                    <span className="text-white font-medium">LinkedIn</span>
                    <Linkedin size={20} className="text-slate-500" />
                 </a>
                 <a href="https://instagram.com/abii.kamal" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-colors">
                    <span className="text-white font-medium">Instagram</span>
                    <Instagram size={20} className="text-slate-500" />
                 </a>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
