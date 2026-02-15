import { Moon, Sun } from "lucide-react";

interface NavbarProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onNavigateHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  onToggleDarkMode,
  onNavigateHome,
}) => {
  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors ${
        isDarkMode
          ? "border-neutral-800 bg-neutral-950/80"
          : "border-neutral-100 bg-white/80"
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={onNavigateHome}
          className="text-xl font-black tracking-tighter hover:opacity-60 transition-opacity"
        >
          Journalloggy
        </button>
        <div className="flex items-center space-x-6">
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? (
              <Sun size={18} strokeWidth={2.5} />
            ) : (
              <Moon size={18} strokeWidth={2.5} />
            )}
          </button>
          <span className="text-xs font-bold uppercase tracking-widest opacity-40 hidden sm:block">
            2026 Edition
          </span>
        </div>
      </div>
    </nav>
  );
};
