"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { NextPage } from "@/components/NextPage";
import { SkillIcon } from "@/components/SkillIcon";
import { skillCategories, skills, type SkillCategory } from "@/data/skills";
import { getVerifiedProjectsForTechnology } from "@/data/projects";

const coreIds = ["react", "nextjs", "typescript", "spring-boot", "postgresql"];
export function Skills() {
  const [filter, setFilter] = useState<"all" | SkillCategory>("all");
  return <div className="site-container interior-page">
    <PageIntro number="04" label="Skills" description="The tools I use across web, mobile, backend development, and applied AI.">What I<br /><em>work with.</em></PageIntro>
    <section className="core-stack" aria-labelledby="core-title"><h2 id="core-title" className="eyebrow">Core stack</h2><div className="core-grid">{coreIds.map((id) => { const skill = skills.find((item) => item.id === id)!; return <article key={id}><SkillIcon skillId={skill.id} /><h3>{skill.name}</h3><p>{skill.description}</p></article>; })}</div></section>
    <div className="filter-row" role="group" aria-label="Filter skills">
      <button type="button" aria-pressed={filter === "all"} onClick={() => setFilter("all")}>All skills</button>
      {skillCategories.map((category) => <button type="button" key={category.id} aria-pressed={filter === category.id} onClick={() => setFilter(category.id)}>{category.label}</button>)}
    </div>
    <p className="sr-only" aria-live="polite">{filter === "all" ? "Showing all skill categories" : "Showing " + skillCategories.find((c) => c.id === filter)?.label}</p>
    {skillCategories.filter((c) => filter === "all" || c.id === filter).map((category) => <section key={category.id} className="skill-group" aria-labelledby={category.id + "-title"}>
      <div><p className="eyebrow">0{skillCategories.indexOf(category) + 1}</p><h2 id={category.id + "-title"}>{category.label}</h2></div>
      <div className="skill-list">{skills.filter((s) => s.category === category.id).map((skill) => { const related = getVerifiedProjectsForTechnology(skill.id)[0]; return <article key={skill.id}><SkillIcon skillId={skill.id} /><div><h3>{skill.name}</h3><p>{skill.description}</p>{related ? <Link className="skill-project" href={`/projects/${related.slug}`}>See in a project <ArrowUpRight size={13} aria-hidden="true" /></Link> : null}</div></article>; })}</div>
    </section>)}
    <NextPage text="Let's put these tools to work on something useful." label="Get in touch" href="/contact" />
  </div>;
}
