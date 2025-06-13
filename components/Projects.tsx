
'use client';
export default function Projects() {
  const projects = [
    "InvestIQ – Real-time stock prediction",
    "Sign Language Detector (Python + MediaPipe)",
    "Movie Recommendation App (Flask + TMDB)",
    "Responsive Landing Page",
    "Tic Tac Toe"
  ];
  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-800 text-center px-6">
      <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6">Projects</h2>
      <ul className="space-y-3 max-w-2xl mx-auto text-left text-gray-800 dark:text-gray-200 list-disc list-inside">
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </section>
  );
}
