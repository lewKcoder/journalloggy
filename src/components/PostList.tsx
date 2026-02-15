import { Github, Twitter, Mail } from "lucide-react";
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
