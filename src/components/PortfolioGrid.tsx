import { Github, Twitter, Mail } from "lucide-react";
import type { Project } from "../types/post";

interface PortfolioGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  projects,
  onProjectClick,
}) => {
  return (
    <div className="animate-in">
      <header className="mb-20">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-8 leading-[1.1]">
          Thoughts,
          <br />
          Code & Design.
        </h1>
        <p className="text-lg leading-relaxed max-w-xl opacity-60">
          これは個人のためのデジタル・ログです。
          日々の技術的な気づきや、思索の断片をここに記録します。
        </p>
        <div className="flex items-center space-x-5 mt-10 opacity-40">
          <a href="#" aria-label="GitHub">
            <Github
              size={20}
              strokeWidth={2.5}
              className="hover:text-blue-500 cursor-pointer transition-colors"
            />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter
              size={20}
              strokeWidth={2.5}
              className="hover:text-blue-400 cursor-pointer transition-colors"
            />
          </a>
          <a href="#" aria-label="Email">
            <Mail
              size={20}
              strokeWidth={2.5}
              className="hover:text-red-400 cursor-pointer transition-colors"
            />
          </a>
        </div>
      </header>

      <div className="h-px w-12 bg-neutral-200 dark:bg-neutral-800 mb-12" />

      <p className="text-[12px] font-mono opacity-40 uppercase tracking-widest mb-8">
        Projects
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group cursor-pointer rounded-xl border border-neutral-50 dark:border-neutral-800/60 overflow-hidden hover:border-neutral-200 dark:hover:border-neutral-700 transition-colors duration-300"
            onClick={() => onProjectClick(project)}
          >
            <div className="aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
              <img
                src={project.screenshot}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h2 className="text-base font-bold tracking-tight mb-2 group-hover:text-blue-500 transition-colors">
                {project.name}
              </h2>
              <p className="text-sm leading-relaxed opacity-50 line-clamp-2">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
