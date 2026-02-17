import type { Post } from "../types/post";

interface BlogSectionProps {
  posts: Post[];
  onPostClick: (post: Post) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ posts, onPostClick }) => {
  const formatDate = (date: string) => date.replace(/-/g, ".");

  return (
    <section className="mt-24">
      <div className="h-px w-12 bg-neutral-200 dark:bg-neutral-800 mb-12" />
      <p className="text-[12px] font-mono opacity-40 uppercase tracking-widest mb-8">
        Blog
      </p>
      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group cursor-pointer"
            onClick={() => onPostClick(post)}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-6">
              <time
                dateTime={post.date}
                className="text-[12px] font-mono opacity-40 tracking-widest shrink-0"
              >
                {formatDate(post.date)}
              </time>
              <div className="flex flex-col gap-1.5 min-w-0">
                <h3 className="text-base font-bold tracking-tight group-hover:text-blue-500 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-50 line-clamp-1">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
