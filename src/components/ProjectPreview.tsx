import { ArrowDown, ArrowUpRight, Braces, Database, Layers3, Server } from "lucide-react";
import { type Project } from "@/data/projects";
import { skills } from "@/data/skills";

export function ProjectPreview({ project, featured = false }: { project: Project; featured?: boolean }) {
  const names = new Map(skills.map((skill) => [skill.id, skill.name]));
  const nodes = project.architecture?.nodes ?? project.technologyIds.slice(0, 4).map((id) => ({ id, label: names.get(id) ?? id }));
  return <div className={`project-art project-art--${project.id === "maizegenie" ? "sage" : project.category === "backend" ? "clay" : "ink"} ${featured ? "project-art--large" : ""}`}>
    <div className="art-window">
      <div className="art-toolbar"><span className="art-dots" aria-hidden="true"><i /><i /><i /></span><span>{project.slug}</span><ArrowUpRight size={13} aria-hidden="true" /></div>
      <div className="art-content">
        <p className="art-eyebrow">System overview</p><h3>{project.title}</h3>
        <div className="art-flow">
          {nodes.map((node, index) => { const Icon = [Layers3, Server, Database, Braces][index % 4]; return <div key={node.id}><div className="art-node"><Icon size={21} aria-hidden="true" /><span>{node.label}</span></div>{index < nodes.length - 1 ? <ArrowDown className="art-connector" size={18} aria-hidden="true" /> : null}</div>; })}
        </div>
        <div className="art-features">{project.features?.slice(0, 3).map((feature) => <span key={feature}>{feature}</span>)}</div>
      </div>
    </div>
    <span className="art-caption">Architecture illustration</span>
  </div>;
}
