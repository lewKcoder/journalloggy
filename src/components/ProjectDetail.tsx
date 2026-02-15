import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Project, Post } from "../types/post";

interface ProjectDetailProps {
  project: Project;
  posts: Post[];
  onBack: () => void;
  onPostClick: (post: Post) => void;
  onNavigate: (path: string) => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  posts,
  onBack,
  onPostClick,
  onNavigate,
}) => {
  const formatDate = (date: string) => date.replace(/-/g, ".");

  return (
    <div className="animate-in">
      <button
        onClick={onBack}
        className="flex items-center text-sm font-bold mb-16 opacity-30 hover:opacity-100 transition-opacity uppercase tracking-widest"
      >
        <ArrowLeft size={16} strokeWidth={2.5} className="mr-2" /> Back
      </button>

      <div className="rounded-xl overflow-hidden dark:border-neutral-800 mb-10">
        <img
          src={project.screenshot}
          alt={project.name}
          className="w-full aspect-[16/9] object-cover"
        />
      </div>

      <header className="mb-16">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tighter leading-[1.15] mb-4">
          {project.name}
        </h1>
        <p className="text-lg leading-relaxed opacity-50 mb-6">
          {project.description}
        </p>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold opacity-40 hover:opacity-100 transition-opacity uppercase tracking-widest"
          >
            <ExternalLink size={14} strokeWidth={2.5} />
            Visit Site
          </a>
        )}
      </header>

      <div className="h-px w-12 bg-neutral-200 dark:bg-neutral-800 mb-10" />

      <p className="text-[12px] font-mono opacity-40 uppercase tracking-widest mb-8">
        Related Posts ({posts.length})
      </p>

      <div className="space-y-10">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group cursor-pointer"
            onClick={() => onPostClick(post)}
          >
            <div className="flex flex-col space-y-2">
              <div className="text-[12px] font-mono opacity-40 uppercase tracking-widest">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="mx-2">/</span>
                <span>{post.category}</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight leading-snug group-hover:text-blue-500 transition-colors">
                {post.title}
              </h2>
              <p className="text-base leading-relaxed line-clamp-2 opacity-50">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="h-px w-12 bg-neutral-200 dark:bg-neutral-800 mt-16 mb-10" />
      <div className="flex items-center space-x-8 text-[11px] font-mono opacity-30 uppercase tracking-widest">
        <a
          href={`/projects/${project.id}/terms`}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(`/projects/${project.id}/terms`);
          }}
          className="hover:opacity-100 transition-opacity"
        >
          Terms
        </a>
        <a
          href={`/projects/${project.id}/privacy`}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(`/projects/${project.id}/privacy`);
          }}
          className="hover:opacity-100 transition-opacity"
        >
          Privacy
        </a>
        <a
          href={`/projects/${project.id}/legal`}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(`/projects/${project.id}/legal`);
          }}
          className="hover:opacity-100 transition-opacity"
        >
          Legal
        </a>
      </div>
    </div>
  );
};
