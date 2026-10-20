import Image from "next/image";
import { BrainCircuit, Braces, Network, ScanEye, ScanSearch } from "lucide-react";

const brandIcons: Record<string, string> = {
  java: "java",
  "spring-boot": "spring",
  python: "python",
  php: "php",
  nodejs: "nodejs",
  express: "express",
  django: "django",
  fastapi: "fastapi",
  celery: "celery",
  react: "react",
  nextjs: "nextjs",
  typescript: "typescript",
  javascript: "javascript",
  html: "html5",
  css: "css3",
  "tailwind-css": "tailwindcss",
  "react-native": "react",
  flutter: "flutter",
  dart: "dart",
  electron: "electron",
  mysql: "mysql",
  postgresql: "postgresql",
  mongodb: "mongodb",
  redis: "redis",
  sqlite: "sqlite",
  supabase: "supabase",
  git: "git",
  docker: "docker",
  linux: "linux",
  aws: "amazonwebservices",
  "github-actions": "githubactions",
  apache: "apache",
  nginx: "nginx",
  jira: "jira",
  slack: "slack",
  n8n: "n8n",
  openai: "openai",
};

const conceptIcons = {
  "machine-learning": BrainCircuit,
  "deep-learning": Network,
  "computer-vision": ScanEye,
  yolo: ScanSearch,
};

export function SkillIcon({ skillId }: { skillId: string }) {
  const brand = brandIcons[skillId];
  const ConceptIcon = conceptIcons[skillId as keyof typeof conceptIcons] ?? Braces;

  // The adjacent skill heading provides the accessible name.
  return (
    <span className={`skill-icon${brand ? "" : " skill-icon--concept"}`} aria-hidden="true">
      {brand ? (
        <Image src={`/icons/skills/${brand}.svg`} alt="" width={30} height={30} />
      ) : (
        <ConceptIcon size={28} strokeWidth={1.6} />
      )}
    </span>
  );
}
