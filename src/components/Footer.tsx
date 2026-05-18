import { Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] text-slate-600 font-mono tracking-wider uppercase">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p>© {currentYear} Abi Kamal</p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2">
           <p className="text-indigo-400">Back to top ↑</p>
        </div>
      </div>
    </footer>
  );
}
