/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Timeline from './components/Timeline';
import AISandbox from './components/AISandbox';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-indigo-600 selection:text-white animate-fade-in">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Timeline />
        <AISandbox />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
