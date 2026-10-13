import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectPreview } from "@/components/ProjectPreview";
import { projectCategoryLabels, type Project } from "@/data/projects";
import { skills } from "@/data/skills";

const names = new Map(skills.map((skill) => [skill.id, skill.name]));

export function ProjectCaseStudy({ project, previousProject, nextProject }: { project: Project; previousProject?: Project; nextProject?: Project }) {
  return <main id="main-content" className="site-container interior-page case-page">
    <Link href="/work" className="text-link"><ArrowLeft size={16} aria-hidden="true" />All work</Link>
    <header className="case-header"><p className="eyebrow">{projectCategoryLabels[project.category]} / Engineering case study</p><h1 className="display-title">{project.title}</h1><p className="page-description">{project.summary}</p><div className="tag-list">{project.technologyIds.map((id) => <span key={id} className="tech-tag">{names.get(id) ?? id}</span>)}</div><div className="action-row">{[{url:project.liveUrl,label:"Live demo"},{url:project.githubUrl,label:"View repository"},{url:project.externalUrl,label:project.externalLabel ?? "Publication"}].filter((link) => link.url).map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="pill-button">{link.label}<ArrowUpRight size={17} aria-hidden="true" /></a>)}</div></header>
    {project.images?.[0] ? <Image className="case-image" src={project.images[0].src} alt={project.images[0].alt} width={1200} height={800} sizes="90vw" priority /> : <ProjectPreview project={project} featured />}
    <div className="case-sections">
      {[{label:"Overview",title:"About the project",text:project.description},{label:"The problem",title:"What it addresses",text:project.problem},{label:"The approach",title:"How it works",text:project.solution}].filter((section) => section.text).map((section, index) => <section key={section.label} className="case-section"><div><p className="eyebrow">0{index + 1} / {section.label}</p><h2>{section.title}</h2></div><p>{section.text}</p></section>)}
      {project.architecture ? <section className="case-section"><div><p className="eyebrow">System design</p><h2>How the pieces connect.</h2></div><div><div className="architecture-nodes">{project.architecture.nodes.map((node) => <article key={node.id}><h3>{node.label}</h3><p>{node.description}</p></article>)}</div><ul className="architecture-edges">{project.architecture.edges.map((edge) => <li key={edge.source + edge.target}>{project.architecture?.nodes.find((node) => node.id === edge.source)?.label ?? edge.source}<ArrowRight size={14} aria-hidden="true" />{project.architecture?.nodes.find((node) => node.id === edge.target)?.label ?? edge.target}</li>)}</ul></div></section> : null}
      {[{title:"Key features",items:project.features},{title:"Technical challenges",items:project.challenges},{title:"Lessons learned",items:project.learnings}].filter((section) => section.items?.length).map((section) => <section className="case-section" key={section.title}><h2>{section.title}</h2><ul className="responsibilities">{section.items?.map((item) => <li key={item}>{item}</li>)}</ul></section>)}
      {project.images && project.images.length > 1 ? <section className="case-gallery">{project.images.slice(1).map((image) => <Image key={image.src} src={image.src} alt={image.alt} width={1200} height={800} sizes="(min-width:768px) 45vw, 90vw" />)}</section> : null}
    </div>
    <nav className="case-pagination" aria-label="More case studies">{previousProject ? <Link href={`/projects/${previousProject.slug}`}><span className="eyebrow">Previous project</span><span><ArrowLeft size={18} aria-hidden="true" />{previousProject.title}</span></Link> : <span />}{nextProject ? <Link href={`/projects/${nextProject.slug}`}><span className="eyebrow">Next project</span><span>{nextProject.title}<ArrowRight size={18} aria-hidden="true" /></span></Link> : null}</nav>
  </main>;
}
