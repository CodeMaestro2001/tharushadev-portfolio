export type SkillCategory = "backend" | "frontend" | "database" | "devops" | "ai";

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
  description: string;
  monogram: string;
};

export type SkillCategoryDefinition = {
  id: SkillCategory;
  label: string;
};

export const skillCategories: readonly SkillCategoryDefinition[] = [
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "database", label: "Databases" },
  { id: "devops", label: "DevOps & Tools" },
  { id: "ai", label: "AI / ML" },
];

export const skills: readonly Skill[] = [
  { id: "java", name: "Java", category: "backend", monogram: "Ja", description: "Backend application development and object-oriented domain logic." },
  { id: "spring-boot", name: "Spring Boot", category: "backend", monogram: "Sp", description: "REST APIs, Spring Security, Spring Data JPA, and layered services." },
  { id: "python", name: "Python", category: "backend", monogram: "Py", description: "Web backends, scraping pipelines, automation, and machine-learning services." },
  { id: "php", name: "PHP", category: "backend", monogram: "PHP", description: "Backend business logic, REST endpoints, and custom WordPress plugins." },
  { id: "nodejs", name: "Node.js", category: "backend", monogram: "Node", description: "JavaScript server applications and API development." },
  { id: "express", name: "Express.js", category: "backend", monogram: "Ex", description: "RESTful services and Node.js application routing." },
  { id: "django", name: "Django", category: "backend", monogram: "Dj", description: "Multi-tenant applications, SEO platforms, authentication, and APIs." },
  { id: "fastapi", name: "FastAPI", category: "backend", monogram: "Fa", description: "Python API services and machine-learning integrations." },
  { id: "celery", name: "Celery", category: "backend", monogram: "Ce", description: "Asynchronous scraping and background audit processing." },

  { id: "react", name: "React", category: "frontend", monogram: "Re", description: "Component-based web interfaces, dashboards, and protected application views." },
  { id: "nextjs", name: "Next.js", category: "frontend", monogram: "N", description: "SEO-friendly applications, dashboards, SSR, API routes, and App Router sites." },
  { id: "typescript", name: "TypeScript", category: "frontend", monogram: "TS", description: "Typed application components, state, data models, and frontend workflows." },
  { id: "javascript", name: "JavaScript", category: "frontend", monogram: "JS", description: "Interactive web application behavior and client-side development." },
  { id: "html", name: "HTML5", category: "frontend", monogram: "H5", description: "Semantic and accessible web interface structure." },
  { id: "css", name: "CSS3", category: "frontend", monogram: "C3", description: "Responsive layouts, visual systems, and interface styling." },
  { id: "tailwind-css", name: "Tailwind CSS", category: "frontend", monogram: "Tw", description: "Responsive utility-first styling and consistent design systems." },
  { id: "react-native", name: "React Native", category: "frontend", monogram: "RN", description: "Cross-platform mobile application development." },
  { id: "flutter", name: "Flutter", category: "frontend", monogram: "Fl", description: "Cross-platform mobile UI implementation." },
  { id: "dart", name: "Dart", category: "frontend", monogram: "Da", description: "Flutter application logic and interface development." },
  { id: "electron", name: "Electron.js", category: "frontend", monogram: "El", description: "Cross-platform offline-first desktop applications." },

  { id: "mysql", name: "MySQL", category: "database", monogram: "My", description: "Relational schemas, indexes, optimized queries, and application persistence." },
  { id: "postgresql", name: "PostgreSQL", category: "database", monogram: "Pg", description: "Relational data for Spring Boot, Django, and multi-tenant systems." },
  { id: "mongodb", name: "MongoDB", category: "database", monogram: "Mo", description: "Document-oriented application data storage." },
  { id: "redis", name: "Redis", category: "database", monogram: "Rd", description: "Server-side sessions, caching, and background task coordination." },
  { id: "sqlite", name: "SQLite", category: "database", monogram: "Sq", description: "Local persistence for offline-first desktop software." },
  { id: "supabase", name: "Supabase", category: "database", monogram: "Su", description: "Authentication, row-level security, and SaaS data services." },

  { id: "git", name: "Git", category: "devops", monogram: "Git", description: "Version control, collaboration, and incremental delivery." },
  { id: "docker", name: "Docker", category: "devops", monogram: "Dk", description: "Application containerization and Docker Compose environments." },
  { id: "linux", name: "Linux", category: "devops", monogram: "Li", description: "Development, hosting, and deployment environments." },
  { id: "aws", name: "AWS", category: "devops", monogram: "AWS", description: "Cloud services including S3-backed application storage." },
  { id: "github-actions", name: "GitHub Actions", category: "devops", monogram: "GA", description: "CI/CD for tests, builds, image validation, and VPS deployment." },
  { id: "apache", name: "Apache", category: "devops", monogram: "Ap", description: "Web-server configuration and hosting management." },
  { id: "nginx", name: "Nginx", category: "devops", monogram: "Nx", description: "Web serving, hosting configuration, and deployment routing." },
  { id: "jira", name: "Jira", category: "devops", monogram: "Ji", description: "Project and issue tracking within team workflows." },
  { id: "slack", name: "Slack", category: "devops", monogram: "Sl", description: "Team communication and project collaboration." },
  { id: "n8n", name: "n8n", category: "devops", monogram: "n8n", description: "Workflow and agent automation with webhooks and external APIs." },

  { id: "machine-learning", name: "Machine Learning", category: "ai", monogram: "ML", description: "Applied learning systems and AI-powered application features." },
  { id: "deep-learning", name: "Deep Learning", category: "ai", monogram: "DL", description: "Image classification and computer-vision model workflows." },
  { id: "computer-vision", name: "Computer Vision", category: "ai", monogram: "CV", description: "Image-based pest identification and classification systems." },
  { id: "yolo", name: "YOLO", category: "ai", monogram: "YO", description: "Object detection for computer-vision applications." },
  { id: "openai", name: "OpenAI Models", category: "ai", monogram: "AI", description: "Context-aware agent workflows with memory and external integrations." },
];

export function getSkillsByCategory(category: SkillCategory) {
  return skills.filter((skill) => skill.category === category);
}
