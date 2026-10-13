export type ProfileLinks = {
  email?: string;
  github?: string;
  linkedin?: string;
  phone?: string;
  whatsapp?: string;
};

export type Profile = {
  brand: string;
  name: string;
  role: string;
  tagline: string;
  summary: string;
  location?: string;
  nationality?: string;
  resumeUrl?: string;
  links: ProfileLinks;
  availability?: string;
};

export const profile: Profile = {
  brand: "Tharusha",
  name: "Tharusha Rathnayaka",
  role: "Software Engineer / Full Stack Developer",
  tagline: "Building reliable systems and thoughtful digital experiences.",
  summary:
    "I build secure, scalable web and software solutions across full-stack development, mobile applications, and AI-powered systems.",
  location: "Malabe, Sri Lanka",
  nationality: "Sri Lankan",
  resumeUrl: "/resume.pdf",
  links: {
    github: "https://github.com/CodeMaestro2001",
    email: "rathnayakarcc@gmail.com",
    linkedin: "https://www.linkedin.com/in/tharusha-rathnayaka-b46119285/",
    phone: "+94766120661",
    whatsapp: "https://wa.me/94766120661",
  },
  availability: "Available for opportunities",
};
