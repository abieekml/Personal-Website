import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ShieldCheck, ExternalLink, Calendar, BookOpen, User, Check, Sparkles, X, Globe, Copy, FileText } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuerFull: string;
  date: string;
  expiryDate?: string;
  idCode: string;
  verifyUrl: string;
  category: string;
  instructor?: string;
  instructorTitle?: string;
  skills: string[];
  accentColor: string;
  glowColor: string;
  logoLabel: string;
  textColor: string;
  ringColor: string;
}

const certificatesData: Certificate[] = [
  {
    id: "cisco-data-analytics",
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    issuerFull: "UIN Syarif Hidayatullah Jakarta & Cisco Networking Academy program",
    date: "09 May 2026",
    idCode: "6fe76218-0cdf-4c1f-860b-41062db71330",
    verifyUrl: "https://www.netacad.com/",
    category: "cisco",
    instructor: "Nidaul Hasanati",
    instructorTitle: "Instructor, UIN Syarif Hidayatullah Jakarta",
    skills: [
      "Explain how the data analytics process creates value from data",
      "Explain the characteristics of data, including formats, availability and methods to acquire",
      "Transform data using analytics tools",
      "Analyze data using basic statistical and data preparation techniques",
      "Complete hands-on labs using Excel, SQL, Tableau and other tools",
      "Evaluate and share project portfolio"
    ],
    accentColor: "border-blue-500/20 bg-blue-500/5 hover:border-blue-500/40 text-blue-400",
    glowColor: "rgba(59, 130, 246, 0.1)",
    logoLabel: "CISCO NETACAD",
    textColor: "text-blue-400",
    ringColor: "ring-blue-500/20"
  },
  {
    id: "dicoding-prompt-eng",
    title: "Prompt Engineering untuk Software Developer",
    issuer: "Dicoding Indonesia",
    issuerFull: "Dicoding Indonesia — Google Developer Partner Academy",
    date: "08 November 2025",
    expiryDate: "08 November 2028",
    idCode: "L4PQ2W60OZO1",
    verifyUrl: "https://dicoding.com/certificates/L4PQ2W60OZO1",
    category: "dicoding",
    skills: [
      "Expert parsing and formulation of system-level prompt boundaries",
      "Directives for large language models & conversational constraints setup",
      "Zero-shot, few-shot, and chain-of-thought code reasoning setups",
      "Optimizing generative development environments to mitigate hallucination"
    ],
    accentColor: "border-indigo-500/20 bg-indigo-500/5 hover:border-indigo-500/40 text-indigo-400",
    glowColor: "rgba(99, 102, 241, 0.1)",
    logoLabel: "DICODING ACAD.",
    textColor: "text-indigo-400",
    ringColor: "ring-indigo-500/20"
  },
  {
    id: "dicoding-gen-ai",
    title: "Belajar Penggunaan Generative AI",
    issuer: "Dicoding Indonesia",
    issuerFull: "Dicoding Indonesia — Google Developer Partner Academy",
    date: "08 November 2025",
    expiryDate: "08 November 2028",
    idCode: "1RXYQD66QZVM",
    verifyUrl: "https://dicoding.com/certificates/1RXYQD66QZVM",
    category: "dicoding",
    skills: [
      "Syllabus foundational focus on Large Language Models design",
      "Prompt design guidelines, defining robust system roles and context vectors",
      "Practical leverages of Generative AI tools in engineering daily tasks",
      "Safe interactions, alignment parameters, & hallucination limits"
    ],
    accentColor: "border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/40 text-cyan-400",
    glowColor: "rgba(6, 182, 212, 0.1)",
    logoLabel: "DICODING ACAD.",
    textColor: "text-cyan-400",
    ringColor: "ring-cyan-500/20"
  },
  {
    id: "dicoding-python",
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    issuerFull: "Dicoding Indonesia — Google Developer Partner Academy",
    date: "06 July 2025",
    expiryDate: "06 July 2028",
    idCode: "4EXG3EG9DZRL",
    verifyUrl: "https://dicoding.com/certificates/4EXG3EG9DZRL",
    category: "dicoding",
    skills: [
      "Fundamentals of procedural development & variables mappings",
      "Computational Control Flow logic (nested conditionals, custom loops)",
      "Standard native dictionaries, lists management & tuple sequences",
      "Interfacing modular functions & structured variable scoping rules"
    ],
    accentColor: "border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40 text-emerald-400",
    glowColor: "rgba(16, 185, 129, 0.1)",
    logoLabel: "DICODING ACAD.",
    textColor: "text-emerald-400",
    ringColor: "ring-emerald-500/20"
  },
  {
    id: "uin-web-dev",
    title: "HITLAB x HI-NECT Tech Class: Web Development",
    issuer: "HIMSI UIN Jakarta",
    issuerFull: "HITLAB x HI-NECT Study Circles (Information Systems Study Program, UIN Syarif Hidayatullah Jakarta)",
    date: "August 2025",
    idCode: "Certificate of Appreciation",
    verifyUrl: "",
    category: "uin",
    skills: [
      "Interpreting dynamic frontend documents with modern semantic structures",
      "Pixel-level styling precision leveraging grids and layout responsiveness",
      "Interactive workflows & client state operations",
      "Collaborative group sequences under HIMSI academic circles"
    ],
    accentColor: "border-purple-500/20 bg-purple-500/5 hover:border-purple-500/40 text-purple-400",
    glowColor: "rgba(168, 85, 247, 0.1)",
    logoLabel: "UIN JAKARTA",
    textColor: "text-purple-400",
    ringColor: "ring-purple-500/20"
  }
];

const categoryTabs = [
  { id: "all", label: "ALL CREDENTIALS" },
  { id: "cisco", label: "CISCO NETWORKING ACADEMY" },
  { id: "dicoding", label: "DICODING INDONESIA" },
  { id: "uin", label: "UIN JAKARTA / HIMSI" }
];

export default function Certificates() {
  const [filter, setFilter] = useState("all");
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [viewMode, setViewMode] = useState<'document' | 'spec'>('document');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredCerts = filter === "all"
    ? certificatesData
    : certificatesData.filter(cert => cert.category === filter);

  const handleCopyId = (idCode: string) => {
    navigator.clipboard.writeText(idCode);
    setCopiedId(idCode);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // HIGH FIDELITY REALISTIC CERTIFICATE CSS RENDERERS
  const renderCiscoCertificate = (cert: Certificate) => {
    return (
      <div className="relative w-full overflow-x-auto select-none rounded-xl">
        <div className="min-w-[700px] aspect-[1.414/1] bg-white border-[12px] border-slate-100 p-8 flex flex-col justify-between text-slate-800 font-sans relative shadow-inner">
          {/* Wave decor backgrounds in gray tints */}
          <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 100 Q 200 300 400 100 T 800 200 T 1200 500" fill="none" stroke="#2563eb" strokeWidth="4" />
              <path d="M 0 150 Q 250 350 500 150 T 1000 250 T 1400 600" fill="none" stroke="#3b82f6" strokeWidth="2" />
            </svg>
          </div>

          {/* Top Row: Cisco Corporate header */}
          <div className="flex justify-between items-start">
            <div className="flex flex-col items-start">
              <div className="flex items-end gap-1 mb-1">
                {/* Cisco styled icon strip */}
                <span className="w-1 h-6 bg-blue-600 rounded-sm"></span>
                <span className="w-1 h-4 bg-blue-500 rounded-sm"></span>
                <span className="w-1 h-8 bg-blue-700 rounded-sm"></span>
                <span className="w-1 h-5 bg-blue-500 rounded-sm"></span>
                <span className="w-1 h-7 bg-blue-600 rounded-sm"></span>
              </div>
              <span className="text-[12px] font-black tracking-tight text-blue-900">Cisco</span>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none">Networking Academy</span>
            </div>
            <div className="text-right">
              <span className="text-[9px] font-bold text-slate-400 font-mono">CCNA LEVEL EXAM SPECIFICATION</span>
            </div>
          </div>

          {/* Middle Body Copy */}
          <div className="text-center space-y-4 my-auto">
            <span className="text-xs text-slate-400 tracking-wider">This certificate is awarded to</span>
            <h1 className="text-3xl font-black text-blue-900 leading-tight border-b-2 border-slate-100 pb-2 max-w-lg mx-auto">
              Abi Kamal
            </h1>
            <span className="text-xs text-slate-400 block pt-1">for successfully completing</span>
            <h2 className="text-2xl font-black text-blue-800 tracking-tight">
              {cert.title}
            </h2>
            <p className="text-[11px] text-slate-500 max-w-md mx-auto leading-relaxed">
              offered by <span className="font-semibold text-slate-700">UIN Syarif Hidayatullah Jakarta</span> through the Cisco Networking Academy program.
            </p>
          </div>

          {/* Bottom Row: Signatures & Validation ID */}
          <div className="flex justify-between items-end border-t border-slate-100 pt-6">
            <div className="text-left space-y-1">
              <span className="font-serif italic text-base text-slate-800 block border-b border-slate-300 pb-1 w-32 font-bold select-none text-left">
                Nidaul Hasanati
              </span>
              <p className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Instructor</p>
              <p className="text-[8px] text-slate-400 font-medium">UIN Syarif Hidayatullah Jakarta</p>
            </div>

            <div className="text-center">
              <span className="text-[7.5px] font-mono text-slate-400 uppercase block">CREDENTIAL VERIFICATION CODE</span>
              <div className="bg-slate-50 border border-slate-200 px-3 py-1 rounded text-[8px] font-mono text-slate-600 mt-1 font-semibold select-all">
                Cert ID: {cert.idCode}
              </div>
            </div>

            <div className="text-right space-y-1">
              <span className="text-xs font-bold text-slate-800 block border-b border-slate-300 pb-1 font-mono">
                09 May 2026
              </span>
              <p className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Completion Date</p>
              <p className="text-[8px] text-slate-400 font-medium font-mono">UTC TIME REGISTERED</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderDicodingCertificate = (cert: Certificate) => {
    return (
      <div className="relative w-full overflow-x-auto select-none rounded-xl">
        <div className="min-w-[700px] aspect-[1.414/1] bg-white border-[12px] border-slate-200 p-8 flex flex-col justify-between text-slate-800 font-sans relative shadow-inner">
          {/* Certificate layout frame grids */}
          <div className="absolute top-0 right-0 w-32 h-full bg-slate-900/5 -skew-x-12 origin-top pointer-events-none" />

          {/* Top Row: Dicoding Branding Left & Slate Seal Badge Right */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-slate-900 rounded flex items-center justify-center text-white font-extrabold text-sm border-r-2 border-b-2 border-teal-400">
                d
              </div>
              <div className="leading-none">
                <span className="font-sans font-black text-slate-900 text-lg tracking-tight">dicoding</span>
                <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest block font-bold">certified academy partner</span>
              </div>
            </div>

            {/* Simulated Hanging Seal Badge */}
            <div className="relative bg-slate-800 text-white py-3 px-4 rounded-b-xl border border-slate-700 shadow flex flex-col items-center justify-center w-28 -mt-8">
              <span className="text-[7px] font-mono font-black text-center text-slate-400 tracking-widest uppercase">SERTIFIKAT</span>
              <span className="text-[8px] font-sans font-bold text-center text-teal-400 uppercase tracking-wider leading-tight">KOMPETENSI</span>
              <div className="w-6 h-6 rounded-full border border-teal-400 flex items-center justify-center text-[10px] font-bold text-white my-1 shadow-inner bg-slate-900">
                9
              </div>
              <span className="text-[6.5px] font-mono text-center text-slate-400">academy</span>
            </div>
          </div>

          {/* Verification Box top left */}
          <div className="flex items-start mt-2">
            <div className="bg-slate-900 text-[8px] font-mono text-white px-3 py-1.5 rounded font-extrabold transform hover:scale-105 transition-transform">
              ID: {cert.idCode}
            </div>
          </div>

          {/* Academic Recipient Detail */}
          <div className="text-center space-y-3 my-auto">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Diberikan Kepada</span>
            <h1 className="text-3xl font-black text-slate-900 font-display">
              Abi Kamal
            </h1>
            <span className="text-[10px] text-slate-400 block">Atas kelulusannya pada kelas</span>
            <h2 className="text-xl font-black text-teal-600 tracking-tight my-1 max-w-lg mx-auto leading-relaxed border border-teal-500/10 bg-teal-500/5 py-1 px-4 rounded-xl">
              {cert.title}
            </h2>
          </div>

          {/* Footer Grid: Signature, QR Code Representation */}
          <div className="grid grid-cols-12 gap-4 items-end border-t border-slate-100 pt-6">
            <div className="col-span-4 text-left space-y-1">
              <span className="text-[9px] font-mono text-slate-400 block font-bold">{cert.date}</span>
              {/* Cursive style mockup signature */}
              <div className="py-1">
                <svg width="120" height="35" viewBox="0 0 120 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 25 C30 15, 40 5, 50 15 C60 25, 65 30, 80 15 C95 0, 100 25, 110 20" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
                  <path d="M30 20 L90 20" stroke="#0d9488" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
              </div>
              <span className="font-bold text-[10px] text-slate-900 block border-t border-slate-200 pt-1 leading-tight">
                Narenda Wicaksono
              </span>
              <p className="text-[8px] text-slate-400 uppercase leading-none font-bold">Chief Executive Officer, Dicoding Indonesia</p>
            </div>

            {/* Spacer */}
            <div className="col-span-3"></div>

            {/* Mini QR code element mockup representation */}
            <div className="col-span-5 flex items-center gap-3 justify-end text-right">
              <div className="text-[8px] text-slate-400 leading-tight space-y-0.5">
                <span className="font-bold text-slate-600 block">Verifikasi Sertifikat</span>
                <span className="font-mono text-[7px] block text-teal-600">dicoding.com/certificates/{cert.idCode}</span>
                {cert.expiryDate && (
                  <span className="block font-sans text-slate-400 font-semibold italic text-[7px]">Berlaku hingga {cert.expiryDate}</span>
                )}
              </div>
              
              {/* Stylized QR Vector Box grid representation */}
              <div className="w-11 h-11 bg-white border border-slate-200 p-1 flex items-center justify-center shrink-0 shadow-sm rounded-lg hover:scale-105 transition-transform cursor-pointer">
                <div className="grid grid-cols-4 gap-0.5 w-full h-full">
                  <div className="bg-slate-900 rounded-sm"></div>
                  <div className="bg-slate-900 rounded-sm"></div>
                  <div className="bg-white"></div>
                  <div className="bg-slate-900 rounded-sm"></div>
                  <div className="bg-white"></div>
                  <div className="bg-slate-900 rounded-sm"></div>
                  <div className="bg-slate-900 rounded-sm"></div>
                  <div className="bg-white"></div>
                  <div className="bg-slate-900 rounded-sm"></div>
                  <div className="bg-white"></div>
                  <div className="bg-slate-900 rounded-sm"></div>
                  <div className="bg-slate-900 rounded-sm"></div>
                  <div className="bg-slate-900 rounded-sm"></div>
                  <div className="bg-slate-800 rounded-sm"></div>
                  <div className="bg-white"></div>
                  <div className="bg-slate-900 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderUinCertificate = (cert: Certificate) => {
    return (
      <div className="relative w-full overflow-x-auto select-none rounded-xl">
        <div className="min-w-[700px] aspect-[1.414/1] bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 border-[16px] border-indigo-950 p-8 flex flex-col justify-between text-white font-sans relative shadow-2xl overflow-hidden rounded-xl">
          {/* Executive double borders overlay */}
          <div className="absolute inset-4 border border-indigo-400/20 rounded-md pointer-events-none" />
          <div className="absolute inset-5 border border-indigo-300/10 rounded-md pointer-events-none" />

          {/* Top logos array representation */}
          <div className="flex justify-between items-center relative z-10">
            <div className="flex items-center gap-1.5 bg-white/5 py-1 px-3 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[8px] font-mono text-indigo-200 tracking-widest font-black uppercase">UIN JAKARTA</span>
            </div>
            
            <div className="flex gap-2">
              <span className="text-[8.5px] font-black text-indigo-150 uppercase bg-blue-900/40 border border-blue-800 px-2 py-0.5 rounded font-mono">HIMSI</span>
              <span className="text-[8.5px] font-black text-purple-150 uppercase bg-purple-900/40 border border-purple-800 px-2 py-0.5 rounded font-mono">HITLAB</span>
              <span className="text-[8.5px] font-black text-pink-150 uppercase bg-pink-900/40 border border-pink-800 px-2 py-0.5 rounded font-mono">HI-NECT</span>
            </div>
          </div>

          {/* Golden Centerpiece laurels */}
          <div className="text-center my-auto space-y-3 relative z-10 py-1">
            <div className="flex justify-center mb-1">
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-b from-amber-300 to-yellow-600 flex items-center justify-center border border-yellow-200 shadow-lg group-hover:scale-110 transition-transform">
                {/* Glowing light behind seal */}
                <div className="absolute inset-0 rounded-full bg-yellow-400/30 blur-md animate-pulse" />
                <span className="text-white text-lg font-black relative z-10">★</span>
              </div>
            </div>

            <span className="text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest block">
              CERTIFICATE OF APPRECIATION
            </span>
            <span className="text-[10px] text-slate-400 italic font-medium block">is dedicated to</span>

            <h1 className="text-3xl font-black text-yellow-300 font-serif italic py-1 tracking-wide leading-none select-text">
              Abi Kamal
            </h1>

            <p className="text-[10px] text-slate-300 max-w-lg mx-auto leading-relaxed border-t border-b border-indigo-400/15 py-2.5 px-6">
              For successfully completing <strong className="text-white font-semibold">HITLAB x HI-NECT's Tech Class: Web Development</strong> administered by the <span className="text-indigo-200">Information Systems Study Program, State Islamic University (UIN) Syarif Hidayatullah Jakarta</span>.
            </p>
          </div>

          {/* Symmetrical Executive Signees panel mockup */}
          <div className="grid grid-cols-3 gap-6 text-[8.5px] text-indigo-300 text-center relative z-10 border-t border-indigo-400/10 pt-5 mt-auto">
            <div className="space-y-1">
              <div className="font-serif italic text-[11px] text-white/95 select-all h-5 border-b border-white/10 pb-1 flex items-end justify-center">
                Raden Achmad Zildhan
              </div>
              <p className="text-[7.5px] font-mono text-indigo-400 font-bold uppercase tracking-wider mt-1.5">Project Manager</p>
              <p className="text-[7px] text-slate-500 leading-none">Tech Class Coordinator</p>
            </div>

            <div className="space-y-1">
              <div className="font-serif italic text-[11px] text-yellow-300/95 select-all h-5 border-b border-white/10 pb-1 flex items-end justify-center">
                Fajar Yudha Baskara
              </div>
              <p className="text-[7.5px] font-mono text-yellow-400 font-bold uppercase tracking-wider mt-1.5">Chief of HIMSI</p>
              <p className="text-[7px] text-slate-500 leading-none">Academic Representative</p>
            </div>

            <div className="space-y-1">
              <div className="font-serif italic text-[11px] text-white/95 select-all h-5 border-b border-white/10 pb-1 flex items-end justify-center">
                Nabila Raihana Qalby
              </div>
              <p className="text-[7.5px] font-mono text-indigo-400 font-bold uppercase tracking-wider mt-1.5">Chief Executive</p>
              <p className="text-[7px] text-slate-500 leading-none">HITLAB Development Unit</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCertificateDoc = (cert: Certificate) => {
    switch(cert.category) {
      case "cisco":
        return renderCiscoCertificate(cert);
      case "dicoding":
        return renderDicodingCertificate(cert);
      case "uin":
        return renderUinCertificate(cert);
      default:
        return renderCiscoCertificate(cert);
    }
  };

  return (
    <section id="certificates" className="py-24 bg-slate-950 relative overflow-hidden scroll-mt-20">
      {/* Dynamic atmospheric back glows */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-slate-900/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[450px] h-[450px] bg-indigo-900/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Title Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest block">[ 04. ACADEMIC CREDENTIALS ]</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-tight">
              Verified<br/>Certificates.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              A detailed curation of my official academic and professional technical credentials. Issued by global academies, Google Developer Partners, & leading campus circles.
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="lg:col-span-7 pt-4 lg:pt-8">
            <span className="text-[9px] font-mono font-bold text-slate-600 uppercase tracking-widest block mb-3.5">FILTER BY ACCREDITOR</span>
            <div className="flex flex-wrap gap-2.5">
              {categoryTabs.map((tab) => {
                const isSelected = filter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setFilter(tab.id)}
                    style={{ touchAction: 'manipulation' }}
                    className={`px-4 py-2.5 rounded-xl text-[10px] font-mono font-bold tracking-widest uppercase transition-all duration-300 border cursor-pointer select-none ${
                      isSelected
                        ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/10'
                        : 'bg-slate-950 border-slate-900 text-slate-400 hover:border-slate-800 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-[9px] font-mono text-slate-600">
              <ShieldCheck size={11} className="text-indigo-400" />
              <span>All certificate structures are validated against official issuer registries.</span>
            </div>
          </div>
        </div>

        {/* Certificates Grid List (Raw visual outline partition, NO box containment) */}
        <div className="space-y-1">
          <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-4 block">
            CREDENTIAL INDEX ({filteredCerts.length} CODES RECORDED)
          </div>

          <div className="divide-y divide-slate-900 border-t border-b border-slate-900">
            <AnimatePresence mode="popLayout">
              {filteredCerts.map((cert) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="py-6 relative group"
                >
                  {/* Row Highlight background */}
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none -mx-4" />

                  {/* Desktop / Core row flex distribution */}
                  <div 
                    onClick={() => {
                      setSelectedCert(cert);
                      setViewMode('document'); // Always open document-preview directly as requested!
                    }}
                    style={{ touchAction: 'manipulation' }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between items-start sm:items-center cursor-pointer select-none relative z-10"
                  >
                    <div className="flex gap-4 sm:gap-6 items-start flex-1">
                      {/* Interactive graphic tag resembling stamp */}
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-slate-950 border border-slate-900 ${cert.textColor}`}>
                        <Award size={20} className="group-hover:scale-110 transition-transform" />
                      </div>

                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`text-[9px] font-mono font-bold uppercase tracking-wider ${cert.textColor}`}>
                            {cert.logoLabel}
                          </span>
                          <span className="text-slate-700 font-mono text-[9px]">•</span>
                          <span className="text-[9px] font-mono text-slate-500">{cert.date}</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-400 transition-colors leading-snug">
                          {cert.title}
                        </h3>
                        <p className="text-slate-400 text-xs font-sans uppercase font-medium tracking-wide">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    {/* Action panel triggers */}
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-end pt-2 sm:pt-0">
                      <span className="text-[10px] font-mono text-slate-500 hidden md:block">
                        ID: {cert.idCode.length > 15 ? cert.idCode.substring(0, 15) + '...' : cert.idCode}
                      </span>
                      <button
                        style={{ touchAction: 'manipulation' }}
                        className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-mono font-bold text-slate-400 group-hover:text-white group-hover:border-slate-700 transition-all flex items-center gap-1 cursor-pointer"
                      >
                        VIEW CERTIFICATE
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Micro Tips bar info */}
        <div className="flex justify-between items-center text-[10px] font-mono text-slate-600 px-2 pt-2 mt-4">
          <span className="flex items-center gap-1">
            <Sparkles size={8} className="text-indigo-400" /> TAP ROW Renders Full Visual Document Replica
          </span>
        </div>

      </div>

      {/* STUNNING ACCREDITATION BADGE MODAL DISPLAY overlay */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
            {/* Dark glass backdrop layout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Simulated Digital Certificate Layout Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-gradient-to-b from-slate-950 to-slate-905 border border-slate-900 rounded-3xl p-5 md:p-8 w-full max-w-4xl relative overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close corner control button */}
              <button
                onClick={() => setSelectedCert(null)}
                style={{ touchAction: 'manipulation' }}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-900 text-slate-500 hover:text-white transition-colors cursor-pointer z-20"
                title="Dismiss"
              >
                <X size={14} />
              </button>

              {/* Header inside modal: Option tab selector */}
              <div className="flex items-center gap-2 mb-6 border-b border-slate-900 pb-4 pr-12">
                <button
                  onClick={() => setViewMode('document')}
                  style={{ touchAction: 'manipulation' }}
                  className={`px-4 py-2 rounded-xl text-[10px] font-mono font-bold tracking-wider uppercase transition-colors flex items-center gap-1.5 cursor-pointer ${
                    viewMode === 'document'
                      ? 'bg-indigo-650 text-white'
                      : 'text-slate-400 hover:text-white bg-slate-900'
                  }`}
                >
                  <FileText size={11} /> 📄 CERTIFICATE DOCUMENT
                </button>
                <button
                  onClick={() => setViewMode('spec')}
                  style={{ touchAction: 'manipulation' }}
                  className={`px-4 py-2 rounded-xl text-[10px] font-mono font-bold tracking-wider uppercase transition-colors flex items-center gap-1.5 cursor-pointer ${
                    viewMode === 'spec'
                      ? 'bg-indigo-650 text-white'
                      : 'text-slate-400 hover:text-white bg-slate-900'
                  }`}
                >
                  <BookOpen size={11} /> ⚙️ SYLLABUS SPEC
                </button>
              </div>

              {/* VIEW SWITCHER CONTAINER */}
              <AnimatePresence mode="wait">
                {viewMode === 'document' ? (
                  <motion.div
                    key="document-view"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-4"
                  >
                    {/* The elegant document mockup layout */}
                    <div className="border border-slate-800 rounded-2xl p-2 bg-slate-900/35 overflow-hidden">
                      {renderCertificateDoc(selectedCert)}
                    </div>
                    
                    <div className="text-center text-[10px] font-mono text-slate-500">
                      <span>* Fully simulated visual rendering based strictly on certified document parameters.</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="spec-view"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-6"
                  >
                    {/* Inner ambient glow relative strictly to standard selected types */}
                    <div 
                      className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] pointer-events-none -not-z-10"
                      style={{ backgroundColor: selectedCert.glowColor }}
                    />

                    {/* Certificate main text copy details */}
                    <div className="space-y-3">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${selectedCert.textColor}`}>
                        STUDENT CREDENTIAL VERIFIED
                      </span>
                      
                      <h3 className="text-xl sm:text-2xl font-black text-white leading-tight font-display">
                        {selectedCert.title}
                      </h3>
                      
                      <p className="text-xs font-sans text-slate-400">
                        Awarded autonomously to <strong className="text-white font-semibold">Abi Kamal</strong> for successfully executing curriculum sequences under the official guidance of <span className="text-slate-350 italic font-mono uppercase">{selectedCert.issuerFull}</span>.
                      </p>
                    </div>

                    {/* Certificate metadata panel (Code parameters raw list look) */}
                    <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-900/60 font-mono text-[9px] sm:text-[10px] text-slate-400">
                      <div className="space-y-1">
                        <span className="text-slate-600 block uppercase font-bold tracking-wider">ISSUE DATE</span>
                        <span className="text-white flex items-center gap-1 font-bold">
                          <Calendar size={11} className="text-indigo-400" /> {selectedCert.date}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <span className="text-slate-600 block uppercase font-bold tracking-wider">VALIDITY LIMIT</span>
                        <span className="text-white flex items-center gap-1 font-bold">
                          {selectedCert.expiryDate ? selectedCert.expiryDate : "LIFETIME (NO LIMIT)"}
                        </span>
                      </div>

                      {selectedCert.instructor && (
                        <div className="space-y-1 col-span-2 pt-2 border-t border-slate-900/20">
                          <span className="text-slate-600 block uppercase font-bold tracking-wider">AUTHORIZED INSTRUCTOR</span>
                          <span className="text-white flex items-center gap-1">
                            <User size={11} className="text-indigo-400" /> {selectedCert.instructor} ({selectedCert.instructorTitle})
                          </span>
                        </div>
                      )}

                      <div className="space-y-1.5 col-span-2 pt-2 border-t border-slate-900/20 relative">
                        <span className="text-slate-600 block uppercase font-bold tracking-wider">SECURE GENUINE CERT_ID</span>
                        <div className="flex justify-between items-center gap-2 bg-slate-950/70 py-1.5 px-2.5 rounded border border-slate-900 text-slate-300 font-mono text-[9px]">
                          <span className="text-white font-semibold flex-1 truncate">{selectedCert.idCode}</span>
                          <button
                            onClick={() => handleCopyId(selectedCert.idCode)}
                            style={{ touchAction: 'manipulation' }}
                            className="text-slate-500 hover:text-white transition-colors cursor-pointer shrink-0 pl-1"
                            title="Copy credential code"
                          >
                            {copiedId === selectedCert.idCode ? (
                              <Check size={11} className="text-emerald-400" />
                            ) : (
                              <Copy size={11} />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* System curriculum breakdown section */}
                    <div className="space-y-2">
                      <span className="text-[9px] font-mono font-black text-slate-500 uppercase tracking-widest block flex items-center gap-1">
                        <BookOpen size={10} className="text-indigo-400" /> CORE VERIFIED SYLLABUS SKILLS:
                      </span>
                      
                      <ul className="grid grid-cols-1 gap-1.5 pl-2">
                        {selectedCert.skills.map((skill, index) => (
                          <li key={index} className="text-[10px] text-slate-400 font-sans leading-relaxed flex items-start gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                              selectedCert.category === 'uin' ? 'bg-purple-500' :
                              selectedCert.category === 'cisco' ? 'bg-blue-500' :
                              selectedCert.accentColor.includes('cyan') ? 'bg-cyan-500' :
                              'bg-emerald-500'
                            }`} />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Validation links button bar */}
              <div className="pt-6 mt-6 border-t border-slate-900 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedCert(null)}
                  style={{ touchAction: 'manipulation' }}
                  className="px-4 py-2.5 bg-slate-950 border border-slate-805 hover:border-slate-700 text-[10px] font-mono font-bold text-slate-400 hover:text-white rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  DISMISS
                </button>

                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ touchAction: 'manipulation' }}
                    className="px-4 py-2.5 bg-indigo-650 hover:bg-indigo-505 text-[10px] font-mono font-black text-white rounded-xl transition-all flex items-center gap-1.5 cursor-pointer hover:shadow-lg hover:shadow-indigo-600/10"
                  >
                    <Globe size={11} /> VERIFY ON REGISTRY
                  </a>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
