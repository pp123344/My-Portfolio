
'use client';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
