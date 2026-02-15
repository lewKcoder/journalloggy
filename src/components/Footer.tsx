interface FooterProps {
  isDarkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer
      className={`mt-32 border-t py-20 transition-colors ${
        isDarkMode
          ? "border-neutral-900 text-neutral-600"
          : "border-neutral-50 text-neutral-400"
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 text-[10px] font-bold uppercase tracking-[0.25em]">
        <div>© 2026 Journalloggy</div>
        <div className="flex items-center space-x-10">
          <a
            href="#"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Archive
          </a>
          <a
            href="#"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            RSS
          </a>
          <a
            href="#"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
