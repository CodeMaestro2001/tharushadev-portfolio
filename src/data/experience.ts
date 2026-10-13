export type ExperienceEntry = {
  id: string;
  role: string;
  organization: string;
  employmentType?: string;
  startDate: string;
  endDate?: string;
  location?: string;
  description?: string;
  responsibilities?: readonly string[];
  technologyIds?: readonly string[];
  achievements?: readonly string[];
};

export const experienceEntries: readonly ExperienceEntry[] = [
  {
    id: "digitalbee-labs-software-engineer-intern",
    role: "Intern Software Engineer",
    organization: "DigitalBee Labs",
    employmentType: "Internship",
    startDate: "March 2026",
    endDate: "September 2026",
    location: "Malabe, Sri Lanka",
    description:
      "Contributed to mobile, web, WordPress, SEO, API, and deployment work across multiple client-facing properties.",
    responsibilities: [
      "Assisted with cross-platform mobile application UI development using Flutter and Dart.",
      "Built SEO-friendly web applications using Next.js and React with server-side rendering and API routes.",
      "Developed custom WordPress plugins in PHP for business logic, task automation, and system extensions.",
      "Conducted on-page and technical SEO work covering site architecture, page speed, and search visibility.",
      "Designed and integrated RESTful APIs for web and mobile clients.",
      "Collaborated through Git and GitHub workflows, continuous integration, and release deployments.",
    ],
    technologyIds: ["flutter", "dart", "nextjs", "react", "php", "git"],
  },
  {
    id: "it-signature-full-stack-intern",
    role: "Intern Full Stack Web Developer",
    organization: "IT Signature",
    employmentType: "Internship",
    startDate: "January 2025",
    endDate: "August 2025",
    location: "Kollupitiya, Sri Lanka",
    description:
      "Worked on Learning Management System interfaces, backend business logic, relational data, security, and hosting infrastructure.",
    responsibilities: [
      "Built responsive LMS interfaces and user portals with React, JavaScript, HTML5, and CSS3.",
      "Developed PHP business logic and RESTful endpoints for course delivery, registration, and assessments.",
      "Designed and optimized MySQL schemas, indexes, and queries.",
      "Implemented role-based access control, encryption, validation, and protections against SQL injection, XSS, and CSRF.",
      "Managed cPanel, Apache, Nginx, SSL certificates, hosting environments, and DNS routing.",
    ],
    technologyIds: ["react", "javascript", "html", "css", "php", "mysql", "apache", "nginx"],
  },
];
