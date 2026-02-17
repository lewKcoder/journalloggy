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
          <span className="flex">これは個人のためのデジタル・ログ。</span>
          各プロダクトのリリースノートやブログ、日々の技術的な気づきや思索の断片をここに記録します。
        </p>
      </header>

      <div className="h-px w-12 bg-neutral-200 dark:bg-neutral-800 mb-12" />

      <p className="text-[12px] font-mono opacity-40 uppercase tracking-widest mb-8">
        Projects
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group cursor-pointer rounded-xl border border-neutral-100/50 dark:border-neutral-800/30 overflow-hidden hover:border-neutral-200 dark:hover:border-neutral-700 transition-colors duration-300"
            onClick={() => onProjectClick(project)}
          >
            <div className="aspect-[16/9] overflow-hidden bg-[#FAFAF8] dark:bg-[#161615]">
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
