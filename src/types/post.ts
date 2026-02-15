// Post type definition
export interface Post {
  id: string;
  projectId: string;
  title: string;
  date: string; // format: YYYY-MM-DD
  category: string;
  excerpt: string;
  content: string; // HTML content
}

// Project type definition
export interface Project {
  id: string;
  name: string;
  description: string;
  screenshot: string; // URL or path to screenshot
  url?: string;
  tags: string[];
}
