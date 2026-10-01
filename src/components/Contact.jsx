export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 scroll-mt-20 text-center">
      <h2 className="text-2xl font-bold text-black mb-4">Contact</h2>
      <p className="text-gray-700 mb-8">
        Feel free to reach out — replace these links with your own.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="mailto:your.email@example.com"
          className="rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
        >
          Email Me
        </a>
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-800 hover:border-gray-400 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-800 hover:border-gray-400 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
