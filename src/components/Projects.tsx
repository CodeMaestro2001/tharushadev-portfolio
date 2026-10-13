"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { ProjectPreview } from "@/components/ProjectPreview";
import { NextPage } from "@/components/NextPage";
import { projects, projectCategoryLabels, type ProjectCategory } from "@/data/projects";
import { skills } from "@/data/skills";

const names = new Map(skills.map((skill) => [skill.id, skill.name]));
const categories = Array.from(new Set(projects.map((project) => project.category)));
export function Projects() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const visible = projects.filter((project) => filter === "all" || project.category === filter);
  return <div className="site-container interior-page">
    <PageIntro number="02" label="Work">Selected <em>Work</em></PageIntro>
    <div className="work-intro"><div className="work-index">{projects.map((project, index) => <a key={project.id} href={`#${project.slug}`} onClick={() => setFilter("all")}><span className="eyebrow">{String(index + 1).padStart(2, "0")}</span>{project.title}</a>)}<span className="eyebrow">{String(projects.length).padStart(2, "0")} projects</span></div><p>A few things I&apos;ve built.<br /><span>Full-stack platforms, applied AI, and tools for everyday work.</span></p></div>
    <div className="filter-row" role="group" aria-label="Filter projects">{(["all", ...categories] as const).map((item) => <button type="button" key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item === "all" ? "All projects" : projectCategoryLabels[item]}</button>)}</div>
    <p className="sr-only" aria-live="polite">Showing {visible.length} projects</p>
    <div className="work-list">{visible.map((project) => <article key={project.id} id={project.slug} className="work-entry">
      <Link href={`/projects/${project.slug}`} className="work-visual-link" aria-label={`View ${project.title} case study`}><ProjectPreview project={project} /></Link>
      <div className="work-details"><p className="work-number"><em>{String(projects.indexOf(project) + 1).padStart(2, "0")}</em><span className="eyebrow">{projectCategoryLabels[project.category]} {project.featured ? "/ Featured" : ""}</span></p><h2><Link href={`/projects/${project.slug}`}>{project.title}</Link></h2><p className="work-summary">{project.summary}</p>
        <dl className="work-stack"><dt>Stack</dt><dd>{project.technologyIds.map((id) => names.get(id) ?? id).join(" · ")}</dd></dl>
        <div className="action-row"><Link href={`/projects/${project.slug}`} className="pill-button">View case study <ArrowRight size={17} aria-hidden="true" /></Link>{project.liveUrl || project.externalUrl ? <a className="text-link" href={project.liveUrl ?? project.externalUrl} target="_blank" rel="noreferrer">{project.liveUrl ? "Live demo" : "Publication"}<ArrowUpRight size={17} aria-hidden="true" /></a> : null}</div>
      </div>
    </article>)}</div>
    <NextPage text="The experience behind this work." label="My journey" href="/experience" />
  </div>;
}
