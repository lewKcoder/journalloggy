import type { Project } from "../types/post";

interface FooterProps {
  isDarkMode: boolean;
  onNavigate: (path: string) => void;
  project: Project | null;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode, onNavigate, project }) => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    onNavigate(path);
  };

  const legalProject = project?.legalId ? project : null;

  return (
    <footer
      className={`mt-32 border-t py-20 transition-colors ${
        isDarkMode
          ? "border-neutral-900 text-neutral-600"
          : "border-neutral-50 text-neutral-400"
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 flex flex-col space-y-8 text-[10px] font-bold uppercase tracking-[0.25em]">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          <div>&copy; 2026 Journalloggy</div>
          {legalProject && (
            <div className="flex items-center space-x-10">
              <a
                href={`/projects/${legalProject.id}/terms`}
                onClick={(e) => handleClick(e, `/projects/${legalProject.id}/terms`)}
                className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                Terms
              </a>
              <a
                href={`/projects/${legalProject.id}/privacy`}
                onClick={(e) => handleClick(e, `/projects/${legalProject.id}/privacy`)}
                className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                Privacy
              </a>
              <a
                href={`/projects/${legalProject.id}/legal`}
                onClick={(e) => handleClick(e, `/projects/${legalProject.id}/legal`)}
                className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                Legal
              </a>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
