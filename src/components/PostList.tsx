import type { Post } from "../types/post";

interface PostListProps {
  posts: Post[];
  onPostClick: (post: Post) => void;
}

export const PostList: React.FC<PostListProps> = ({ posts, onPostClick }) => {
  const formatDate = (date: string) => date.replace(/-/g, ".");

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

      <div className="space-y-16">
        <div className="h-px w-12 bg-neutral-200 dark:bg-neutral-800" />
        {posts.map((post) => (
          <article
            key={post.id}
            className="group cursor-pointer relative"
            onClick={() => onPostClick(post)}
          >
            <div className="flex flex-col space-y-3">
              <div className="text-[12px] font-mono opacity-40 uppercase tracking-widest">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <h2 className="text-2xl font-bold tracking-tight leading-snug group-hover:text-blue-500 transition-colors">
                {post.title}
              </h2>
              <p className="text-lg leading-relaxed line-clamp-2 opacity-70">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
