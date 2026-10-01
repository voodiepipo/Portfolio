export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 text-center">
      <p className="text-xs text-gray-400">
        © {new Date().getFullYear()} Vootichote Chammunkong. Built with React
        &amp; Tailwind CSS.
      </p>
    </footer>
  );
}
