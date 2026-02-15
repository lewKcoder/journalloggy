import { useState, useEffect, useSyncExternalStore } from "react";
import { Navbar, PostDetail, PortfolioGrid, ProjectDetail, Footer } from "./components";
import { MOCK_POSTS } from "./data/posts";
import { PROJECTS } from "./data/projects";
import type { Post, Project } from "./types/post";
import "./App.css";

type View = "home" | "project" | "post";

function resolveRoute(url: string): { view: View; project: Project | null; post: Post | null } {
  const [pathname, search] = url.split("?");
  const segments = pathname.replace(/^\/|\/$/g, "").split("/");
  const params = new URLSearchParams(search ?? "");

  // /projects/{projectId}/posts?id={postId}
  if (segments[0] === "projects" && segments[1] && segments[2] === "posts") {
    const project = PROJECTS.find((p) => p.id === segments[1]) ?? null;
    const postId = params.get("id");
    const post = postId ? MOCK_POSTS.find((p) => p.id === postId) ?? null : null;
    if (project && post) return { view: "post", project, post };
  }

  // /projects/{projectId}
  if (segments[0] === "projects" && segments[1]) {
    const project = PROJECTS.find((p) => p.id === segments[1]) ?? null;
    if (project) return { view: "project", project, post: null };
  }

  // /posts?id={postId} (project-less)
  if (segments[0] === "posts") {
    const postId = params.get("id");
    const post = postId ? MOCK_POSTS.find((p) => p.id === postId) ?? null : null;
    if (post) return { view: "post", project: null, post };
  }

  return { view: "home", project: null, post: null };
}

function postPath(post: Post, project: Project | null): string {
  if (project) return `/projects/${project.id}/posts?id=${post.id}`;
  return `/posts?id=${post.id}`;
}

function subscribeToPopState(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function getURL() {
  return window.location.pathname + window.location.search;
}

function App() {
  const url = useSyncExternalStore(subscribeToPopState, getURL);
  const route = resolveRoute(url);

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const navigate = (path: string) => {
    history.pushState(null, "", path);
    // Dispatch popstate so useSyncExternalStore picks up the change
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo(0, 0);
  };

  const navigateToProject = (project: Project) => {
    navigate(`/projects/${project.id}`);
  };

  const navigateToPost = (post: Post) => {
    navigate(postPath(post, route.project));
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateBackFromPost = () => {
    if (route.project) {
      navigate(`/projects/${route.project.id}`);
    } else {
      navigateToHome();
    }
  };

  const { view, project: currentProject, post: currentPost } = route;

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
