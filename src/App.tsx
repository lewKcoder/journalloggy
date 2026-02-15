import { useState, useEffect } from "react";
import { Navbar, PostDetail, PortfolioGrid, ProjectDetail, Footer } from "./components";
import { MOCK_POSTS } from "./data/posts";
import { PROJECTS } from "./data/projects";
import type { Post, Project } from "./types/post";
import "./App.css";

type View = "home" | "project" | "post";

function App() {
  const [view, setView] = useState<View>("home");
  const [currentPost, setCurrentPost] = useState<Post | null>(null);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const navigateToProject = (project: Project) => {
    setCurrentProject(project);
    setView("project");
    window.scrollTo(0, 0);
  };

  const navigateToPost = (post: Post) => {
    setCurrentPost(post);
    setView("post");
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setView("home");
    setCurrentPost(null);
    setCurrentProject(null);
    window.scrollTo(0, 0);
  };

  const navigateBackFromPost = () => {
    if (currentProject) {
      setView("project");
      setCurrentPost(null);
      window.scrollTo(0, 0);
    } else {
      navigateToHome();
    }
  };

  const projectPosts = currentProject
    ? MOCK_POSTS.filter((p) => p.projectId === currentProject.id)
    : [];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans ${
        isDarkMode
          ? "bg-neutral-950 text-neutral-200"
          : "bg-white text-neutral-900"
      }`}
    >
      <Navbar
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        onNavigateHome={navigateToHome}
      />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        {view === "home" && (
          <PortfolioGrid
            projects={PROJECTS}
            onProjectClick={navigateToProject}
          />
        )}
        {view === "project" && currentProject && (
          <ProjectDetail
            project={currentProject}
            posts={projectPosts}
            onBack={navigateToHome}
            onPostClick={navigateToPost}
          />
        )}
        {view === "post" && currentPost && (
          <PostDetail
            post={currentPost}
            onBack={navigateBackFromPost}
            isDarkMode={isDarkMode}
          />
        )}
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
