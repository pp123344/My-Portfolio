
'use client';
export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800 text-center px-6">
      <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Contact</h2>
      <div className="text-lg text-gray-700 dark:text-gray-300 space-y-2">
        <p>Email: <a href="mailto:amgepranav@gmail.com" className="text-blue-500 underline">amgepranav@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/pp123344" className="text-blue-500 underline">github.com/pp123344</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/pranav-amge-256724308/" className="text-blue-500 underline">linkedin.com/in/pranav-amge</a></p>
      </div>
    </section>
  );
}
