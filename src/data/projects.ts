export type ProjectCategory = "backend" | "fullstack" | "frontend";

export type ProjectArchitectureNode = {
  id: string;
  label: string;
  description?: string;
};

export type ProjectArchitectureEdge = {
  source: string;
  target: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  technologyIds: readonly string[];
  featured: boolean;
  isPlaceholder: boolean;
  githubUrl?: string;
  liveUrl?: string;
  externalUrl?: string;
  externalLabel?: string;
  problem?: string;
  solution?: string;
  architecture?: {
    nodes: readonly ProjectArchitectureNode[];
    edges: readonly ProjectArchitectureEdge[];
  };
  features?: readonly string[];
  challenges?: readonly string[];
  learnings?: readonly string[];
  images?: readonly ProjectImage[];
};

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  backend: "Backend",
  fullstack: "Full Stack",
  frontend: "Frontend",
};

export const projects: readonly Project[] = [
  {
    id: "b2b-foodservice-platform",
    slug: "b2b-foodservice-platform",
    title: "B2B Foodservice Ordering Platform",
    summary:
      "A full-stack ordering platform for restaurants to browse products, manage carts, place orders, and track order history.",
    description:
      "The platform combines a Spring Boot backend with a React and TypeScript frontend, PostgreSQL persistence, Redis-backed sessions, containerized development, and an automated deployment workflow.",
    category: "fullstack",
    technologyIds: ["java", "spring-boot", "react", "typescript", "postgresql", "redis", "docker", "github-actions"],
    featured: true,
    isPlaceholder: false,
    liveUrl: "https://react-spring.tharushadev.online/",
    problem:
      "Restaurants needed a structured workflow for discovering products, managing carts, submitting orders, and reviewing previous purchases.",
    solution:
      "Built layered Spring Boot services and secured APIs alongside a typed React storefront and administrative fulfilment interface.",
    architecture: {
      nodes: [
        { id: "react", label: "React + TypeScript", description: "Catalog, cart, checkout, and admin views" },
        { id: "spring", label: "Spring Boot API", description: "Security, business logic, and persistence" },
        { id: "postgres", label: "PostgreSQL", description: "Products, users, and order data" },
        { id: "redis", label: "Redis", description: "Server-side session storage" },
      ],
      edges: [
        { source: "react", target: "spring" },
        { source: "spring", target: "postgres" },
        { source: "spring", target: "redis" },
      ],
    },
    features: [
      "Catalog search and pagination",
      "Cart quantity management and checkout flow",
      "Customer authentication and role-based access control",
      "Admin product management and order fulfilment views",
      "CSRF protection and Redis-backed sessions",
      "Docker Compose and GitHub Actions CI/CD",
    ],
  },
  {
    id: "maizegenie",
    slug: "maizegenie",
    title: "MaizeGenie",
    summary:
      "An AI-powered mobile platform supporting sustainable and profitable corn cultivation through pest identification and control guidance.",
    description:
      "Developed the Corn Pest Identification and Control component, applying computer vision, object detection, and image classification to uploaded crop images.",
    category: "fullstack",
    technologyIds: ["python", "machine-learning", "deep-learning", "computer-vision", "yolo"],
    featured: true,
    isPlaceholder: false,
    externalUrl: "https://ieeexplore.ieee.org/document/11499778",
    externalLabel: "View IEEE publication",
    problem:
      "Maize farmers need accessible support for identifying pests and understanding appropriate lifecycle-based control methods.",
    solution:
      "Integrated image-based pest identification with bilingual lifecycle information and stage-based control recommendations in Sinhala and English.",
    features: [
      "Image-based maize pest identification",
      "Object detection and image classification",
      "Pest lifecycle information",
      "Stage-based control recommendations",
      "Sinhala and English guidance",
      "Machine-learning service integration with a mobile application",
    ],
  },
  {
    id: "seo-audit-platform",
    slug: "seo-audit-platform",
    title: "SEO Audit & Scraping Platform",
    summary:
      "A full-stack SEO platform that crawls websites and creates automated reports for technical and on-page issues.",
    description:
      "Built with Django, Next.js, PostgreSQL, Celery, and Redis, the platform manages asynchronous audits, live progress, historical results, and downloadable reports.",
    category: "fullstack",
    technologyIds: ["python", "django", "nextjs", "postgresql", "celery", "redis"],
    featured: false,
    isPlaceholder: false,
    solution:
      "Created an asynchronous crawling and reporting pipeline with external performance and search-ranking integrations, JWT authentication, and a live Next.js dashboard.",
    architecture: {
      nodes: [
        { id: "dashboard", label: "Next.js Dashboard", description: "Audit management and live status polling" },
        { id: "django", label: "Django API", description: "Authentication, audit orchestration, and reports" },
        { id: "workers", label: "Celery + Redis", description: "Asynchronous crawling and background tasks" },
        { id: "postgres", label: "PostgreSQL", description: "Users, audit history, and rankings" },
      ],
      edges: [
        { source: "dashboard", target: "django" },
        { source: "django", target: "workers" },
        { source: "django", target: "postgres" },
      ],
    },
    features: [
      "On-page SEO, Core Web Vitals, broken-link, and keyword audits",
      "Google PageSpeed Insights integration",
      "Background audit execution with Celery and Redis",
      "Branded downloadable PDF reports",
      "JWT multi-user authentication",
      "SERP rank tracking and audit history",
    ],
  },
  {
    id: "multi-tenant-crm",
    slug: "multi-tenant-crm",
    title: "Multi-Tenant CRM System",
    summary:
      "A production-oriented CRM with organization-level data isolation, role-based access, audit tracking, and cloud file storage.",
    description:
      "Designed a Django and React system with PostgreSQL, JWT authentication, protected frontend routing, Zustand state management, and AWS S3 integration.",
    category: "fullstack",
    technologyIds: ["django", "python", "react", "typescript", "postgresql", "aws"],
    featured: false,
    isPlaceholder: false,
    solution:
      "Applied tenant-aware data boundaries, role-based permissions, Django signal-driven activity logging, and protected frontend routes.",
    architecture: {
      nodes: [
        { id: "react", label: "React + TypeScript", description: "Protected CRM interface and Zustand state" },
        { id: "django", label: "Django API", description: "Tenant isolation, JWT, and RBAC" },
        { id: "postgres", label: "PostgreSQL", description: "Organization-scoped relational data" },
        { id: "s3", label: "AWS S3", description: "Application file storage" },
      ],
      edges: [
        { source: "react", target: "django" },
        { source: "django", target: "postgres" },
        { source: "django", target: "s3" },
      ],
    },
    features: [
      "Organization-level data isolation",
      "Admin, Manager, and Staff access roles",
      "Automated activity logging through Django signals",
      "JWT authentication and protected routing",
      "AWS S3 file storage",
    ],
  },
  {
    id: "user-management-system",
    slug: "user-management-system",
    title: "User Management System",
    summary:
      "A layered Spring Boot backend for creating, viewing, updating, and deleting user records.",
    description:
      "Implemented RESTful user-management APIs using Spring Boot, Spring Data JPA, MySQL, DTOs, and ModelMapper.",
    category: "backend",
    technologyIds: ["java", "spring-boot", "mysql"],
    featured: false,
    isPlaceholder: false,
    solution:
      "Separated controller, service, and repository responsibilities and used DTO mapping between the API and persistence models.",
    features: [
      "User CRUD REST APIs",
      "Controller, service, and repository layers",
      "Spring Data JPA persistence",
      "DTO and ModelMapper data transformation",
    ],
  },
  {
    id: "salon-management-saas",
    slug: "salon-management-saas",
    title: "Salon Management SaaS Platform",
    summary:
      "A multi-tenant SaaS platform covering appointments, invoicing, customers, staff, analytics, and reporting.",
    description:
      "Built using React, TypeScript, Tailwind CSS, and Supabase with tenant isolation and role-based access.",
    category: "fullstack",
    technologyIds: ["react", "typescript", "tailwind-css", "supabase"],
    featured: false,
    isPlaceholder: false,
    solution:
      "Used Supabase Auth and Row Level Security to isolate tenant information while delivering operational and analytics workflows in a typed React interface.",
    features: [
      "Appointment scheduling",
      "Invoicing",
      "Customer and staff management",
      "Supabase Row Level Security",
      "Role-based access",
      "Analytics with CSV and PDF export",
    ],
  },
  {
    id: "universal-pos",
    slug: "universal-pos",
    title: "Universal POS System",
    summary:
      "A cross-platform offline-first desktop point-of-sale system supporting grocery, restaurant, and retail workflows.",
    description:
      "Built with Electron.js, React, and SQLite and packaged as native installers for Windows and macOS.",
    category: "fullstack",
    technologyIds: ["electron", "react", "sqlite"],
    featured: false,
    isPlaceholder: false,
    solution:
      "Combined a desktop React interface with local SQLite persistence to keep sales and inventory workflows available offline.",
    features: [
      "Offline-first operation",
      "Multi-business-type support",
      "Real-time inventory tracking",
      "Sales analytics dashboard",
      "Receipt printing",
      "Windows and macOS installers",
    ],
  },
  {
    id: "ai-agent-automation",
    slug: "ai-agent-automation",
    title: "AI Agent Workflow Automation",
    summary:
      "A context-aware AI agent workflow integrating memory, external APIs, weather data, and webhook triggers.",
    description:
      "Designed an AI-powered agent that manages conversational context and responds to real-time requests through OpenAI models, OpenWeatherMap, and webhooks.",
    category: "backend",
    technologyIds: ["openai", "n8n"],
    featured: false,
    isPlaceholder: false,
    solution:
      "Connected agent memory, external data services, and webhook-triggered workflows to support context-aware conversation and weather queries.",
    features: [
      "Context-aware response generation",
      "Agent memory management",
      "OpenWeatherMap API integration",
      "Real-time webhook triggers",
    ],
  },
];

export const verifiedProjects = projects.filter((project) => !project.isPlaceholder);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getVerifiedProjectsForTechnology(technologyId: string) {
  return verifiedProjects.filter((project) => project.technologyIds.includes(technologyId));
}
