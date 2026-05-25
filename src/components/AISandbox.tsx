import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Send, TerminalSquare, RefreshCw, Sparkles, Check, HelpCircle } from 'lucide-react';

const presetPrompts = [
  "Who is Abi Kamal?",
  "Analyze tech credentials & certifications",
  "How to contact Abi directly?",
  "What is his core professional focus?"
];

// Helper to provide realistic assistant responses mimicking prompt system architectures
const getSystemResponse = (prompt: string): string => {
  const norm = prompt.toLowerCase().trim();
  
  if (norm.includes("who is") || norm.includes("who") || norm.includes("siapa") || norm.includes("biography") || norm.includes("about")) {
    return `[SYSTEM CONFIG IDENTIFIED: READ_USER_BIO]
--------------------------------------------------
Abi Kamal is an undergraduate student majoring in Information Systems at State Islamic University (UIN) Syarif Hidayatullah Jakarta (Class of 2024).

He is intensely passionate about Data Analytics, exploratory architectures, Python scripting, and practical Generative AI applications (Prompt Engineering). Located in DKI Jakarta, Indonesia, he integrates structured analytical methods with solid visual designs.`;
  }
  
  if (norm.includes("credential") || norm.includes("cert") || norm.includes("sert") || norm.includes("skill") || norm.includes("tech") || norm.includes("keahlian")) {
    return `[SYSTEM CONFIG IDENTIFIED: COMPUTE_TECH_STACK]
--------------------------------------------------
Abi's verified competencies spanning technologies and methodologies include:

1. Technical Skills:
   • Data Analytics (Exploratory schemas, SQL optimization, Excel modeling, Tableau metrics)
   • Scripting: Python (Structured automation, procedural programming paradigms)
   • Frontend: Modern JavaScript (ES6+), React core components, declarative layouts, Tailwind CSS
   • AI Systems: Advanced Prompt Engineering (zero/few-shot tactics, chain-of-thought instructions), Generative AI pipelines

2. Key Verified Certifications:
   • Cisco: Data Analytics Essentials (09 May 2026 | ID: 6fe76218-0cdf-4c1f-860b-41062db71330)
   • Dicoding: Prompt Engineering untuk Software Developer (08 Nov 2025 | ID: L4PQ2W60OZO1)
   • Dicoding: Belajar Penggunaan Generative AI (08 Nov 2025 | ID: 1RXYQD66QZVM)
   • Dicoding: Memulai Pemrograman dengan Python (06 Jul 2025 | ID: 4EXG3EG9DZRL)
   • HITLAB x HI-NECT: Tech Class (Web Development, Aug 2025)`;
  }
  
  if (norm.includes("contact") || norm.includes("hubungi") || norm.includes("email") || norm.includes("phone") || norm.includes("wa") || norm.includes("whatsapp")) {
    return `[SYSTEM CONFIG IDENTIFIED: DEPLOY_CONTACT_APIS]
--------------------------------------------------
Direct credentials to contact Abi Kamal:

• Email Direct Mailbox: abii.kamall4@gmail.com
• Alternative Mailbox: abikamal964@gmail.com
• Cellular / Telegram Direct: +62 896-2194-9745 (Jakarta, ID)
• Main WhatsApp Link: https://wa.me/6289621949745

He responds quickly to opportunities, academic discussions, & creative design requests within 24 hours.`;
  }
  
  if (norm.includes("focus") || norm.includes("proyek") || norm.includes("project") || norm.includes("bikinlaris")) {
    return `[SYSTEM CONFIG IDENTIFIED: EXPLORE_VENTURES]
--------------------------------------------------
Abi's current technical developments:

• BikinLaris Digital — An operational digital framework for local Indonesian UMKM, assisting businesses in setting up and customizing web platforms.
• Exploratory Python Automation — Writing procedural automation workflows.
• SQL Database schema optimizations.
• Interactive UI/UX Design environments with pixel-level responsiveness.`;
  }

  // Fallback as simulated intelligent response demonstrating Prompt Structure
  return `[SYSTEM CONFIG IDENTIFIED: ADAPTIVE_PROMPT_PARSER]
--------------------------------------------------
Parsed Query: "${prompt}"

Your input was analyzed. The prompt context relates to Abi Kamal's digital workspace. Abi's skillset includes advanced system prompting:
• Constraining AI behaviors to prevent system hallucination
• Structuring system outputs in highly parseable, clean formats
• Creating specialized contextual instructions for LLM automation

Feel free to click any of the suggests below or enter specialized search terms in the shell input.`;
};

export default function AISandbox() {
  const [inputValue, setInputValue] = useState("");
  const [outputHistory, setOutputHistory] = useState<string>(
    "// Welcome to the Abi Kamal Interactive Virtual Command Assistant.\n// Enter a query below or select a preset prompt to test prompt parsed variables."
  );
  const [isTyping, setIsTyping] = useState(false);
  const [promptCount, setPromptCount] = useState(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    triggerResponse(inputValue);
  };

  const triggerResponse = (prompt: string) => {
    setIsTyping(true);
    setInputValue(prompt);
    
    // Smooth delay simulating system queries and LLMs
    setTimeout(() => {
      const response = getSystemResponse(prompt);
      setOutputHistory(response);
      setIsTyping(false);
      setPromptCount(prev => prev + 1);
    }, 850);
  };

  const clearSandbox = () => {
    setOutputHistory("// Console cache cleared. System idle.");
    setInputValue("");
  };

  return (
    <section id="ai-sandbox" className="py-24 bg-slate-950 relative overflow-hidden scroll-mt-20">
      {/* Dynamic ambient context light elements */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-slate-900/30 rounded-full blur-[140px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Typographic copy explaining AI prompt engineering expertise (NO rigid box) */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest block">[ 05. CORE SPECIALIZATION ]</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-tight">
              AI Sandbox.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed text-left">
              With professional credentials in <strong className="text-indigo-400 font-semibold font-mono">Prompt Engineering</strong> and <strong className="text-indigo-400 font-semibold font-mono">Generative AI</strong>, I designs functional interfaces that interface precisely with language processing services. 
            </p>
            <p className="text-slate-500 text-xs leading-relaxed text-left">
              Test my virtual assistant's routing logic below. Enter instructions manually or select any preset to execute instantly.
            </p>

            {/* Micro visual telemetry indicators */}
            <div className="pt-6 border-t border-slate-900/80 space-y-2.5">
              <span className="text-[9px] font-mono font-bold text-slate-600 uppercase tracking-widest block">TELEMETRY</span>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs font-mono font-bold text-white">{promptCount}</div>
                  <div className="text-[9px] font-mono text-slate-600 uppercase">Queries Sent</div>
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-emerald-400">ACTIVE</div>
                  <div className="text-[9px] font-mono text-slate-600 uppercase">System Status</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Terminal sandbox (sleek, high-contrast, boardless structure with elegant lines) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Terminal Panel structure (No boxy frames, just partitioned code layouts) */}
            <div className="border border-slate-900 rounded-3xl bg-slate-950/20 backdrop-blur-md overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

              {/* Shell header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-slate-900 bg-slate-950/40">
                <div className="flex items-center gap-3">
                  <Terminal size={14} className="text-indigo-400" />
                  <span className="text-[10px] font-mono font-semibold text-slate-400 tracking-wider">PROMPT_ENGINEERING_PLAYGROUND.sh</span>
                </div>
                
                <button 
                  onClick={clearSandbox}
                  style={{ touchAction: 'manipulation' }}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[9px] font-mono font-bold text-slate-500 hover:text-white transition-colors cursor-pointer"
                  title="Reset Sandbox"
                >
                  <RefreshCw size={10} /> RESET
                </button>
              </div>

              {/* Output Console Display */}
              <div className="p-6 md:p-8 space-y-4 min-h-[220px] bg-slate-950/60 font-mono text-xs text-slate-300">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-600 font-bold">$</span>
                    <span className="text-slate-405 italic text-[11px]">System executing parsing model...</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-900/60 leading-relaxed font-mono text-slate-300 whitespace-pre-line relative z-10 text-[11px] md:text-xs">
                    {outputHistory}
                    
                    {isTyping && (
                      <div className="mt-4 flex items-center gap-2 text-[10px] text-indigo-400 animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
                        Analyzing linguistic vectors...
                      </div>
                    )}
                  </div>
                </div>

                {/* Simulated Interface Suggests */}
                <div className="space-y-2 pt-4 border-t border-slate-900/40">
                  <span className="text-[9px] text-slate-500 uppercase tracking-widest block font-bold flex items-center gap-1.5">
                    <HelpCircle size={10} className="text-indigo-400" /> SELECT DYNAMIC TEST CONTEXT
                  </span>
                  
                  <div className="flex flex-wrap gap-2">
                    {presetPrompts.map((preset) => {
                      const isActive = inputValue === preset;
                      return (
                        <span
                          key={preset}
                          onClick={() => triggerResponse(preset)}
                          style={{ touchAction: 'manipulation' }}
                          className={`px-3 py-1.5 rounded-xl border text-[10px] font-black transition-all duration-300 cursor-pointer select-none ${
                            isActive 
                              ? 'bg-indigo-650 text-white border-indigo-405 shadow-md shadow-indigo-600/10'
                              : 'bg-slate-950 text-slate-400 border-slate-900 hover:border-slate-800 hover:text-white'
                          }`}
                        >
                          {preset}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Shell Command Input Form */}
                <form onSubmit={handleSubmit} className="flex gap-2.5 pt-6 border-t border-slate-900/40 relative z-10">
                  <div className="flex-1 relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-[11px] font-bold">$</span>
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Enter prompt (e.g. 'Analyze tech credentials')..."
                      className="w-full bg-slate-950/80 border border-slate-905 rounded-xl text-slate-200 placeholder-slate-600 text-[11px] md:text-xs font-mono uppercase focus:outline-none focus:border-indigo-500 pl-8 pr-4 py-3.5 transition-colors"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isTyping}
                    style={{ touchAction: 'manipulation' }}
                    className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-505 disabled:bg-slate-900 text-white font-bold transition-all flex items-center gap-2 cursor-pointer text-xs"
                    title="Execute prompt"
                  >
                    <Send size={12} /> SEND
                  </button>
                </form>

              </div>
            </div>

            {/* Bottom Info bar */}
            <div className="text-[10px] font-mono text-slate-600 flex justify-between items-center px-2">
              <span className="flex items-center gap-1"><Sparkles size={8} className="text-indigo-400" /> FULL STREAM CONTROLS</span>
              <span>DYNAMIC INTERACTIVE ENVIRONMENT</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
