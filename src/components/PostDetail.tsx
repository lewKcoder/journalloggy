import { ArrowLeft } from "lucide-react";
import type { Post } from "../types/post";

interface PostDetailProps {
  post: Post;
  onBack: () => void;
  isDarkMode: boolean;
}

export const PostDetail: React.FC<PostDetailProps> = ({
  post,
  onBack,
  isDarkMode,
}) => {
  const formatDate = (date: string) => date.replace(/-/g, ".");

  return (
    <article className="animate-in max-w-2xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center text-sm font-bold mb-16 opacity-30 hover:opacity-100 transition-opacity uppercase tracking-widest"
      >
        <ArrowLeft size={16} strokeWidth={2.5} className="mr-2" /> Back
      </button>

      <header className="mb-16">
        <div className="flex items-center space-x-3 text-[12px] font-mono opacity-40 uppercase tracking-widest mb-6">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>/</span>
          <span>{post.category}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tighter leading-[1.15] mb-10">
          {post.title}
        </h1>
        <div className="h-0.5 w-16 bg-neutral-900 dark:bg-neutral-100" />
      </header>

      <div
        className={`prose-custom text-[1.125rem] leading-[1.8] space-y-8 ${isDarkMode ? "text-neutral-300" : "text-neutral-800"}`}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <footer className="mt-32 pt-12 border-t border-neutral-100 dark:border-neutral-900">
        <div className="flex items-center justify-between text-[11px] opacity-40 font-mono tracking-widest uppercase">
          <div className="flex items-center space-x-4">
            <button className="hover:opacity-100 cursor-pointer transition-opacity">
              SHARE
            </button>
            <button className="hover:opacity-100 cursor-pointer transition-opacity">
              COPY LINK
            </button>
          </div>
          <div>EOF</div>
        </div>
      </footer>
    </article>
  );
};
