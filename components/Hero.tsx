'use client';

export default function Hero() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md fixed top-0 left-0 w-full shadow-md z-50">
        <div className="container flex justify-between items-center py-4 px-4">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">🌐Pranav's Portfolio</h1>
          <ul className="flex space-x-6 text-sm font-medium">
            <li>
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Skills</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-hero text-white text-center pt-32 pb-20">
        <div className="container px-4">
          <img
            src="/profilee.jpg"
            alt="Pranav Amge"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg mb-6"
          />
          <h1 className="text-5xl font-bold text-glow mb-4">Hi, I'm Pranav Amge</h1>
          <p className="text-xl font-medium">
            Full-Stack Developer | AI Enthusiast | Intern
          </p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a
              href="#projects"
              className="bg-white text-blue-600 font-semibold px-6 py-2 rounded shadow hover:bg-blue-100 transition"
            >
              View Projects
            </a>
            <a
              href="/Pranav_Amge_Resume.pdf"
              download
              className="bg-transparent border border-white text-white font-semibold px-6 py-2 rounded hover:bg-white hover:text-blue-600 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
