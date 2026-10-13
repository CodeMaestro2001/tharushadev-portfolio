import { PageIntro } from "@/components/PageIntro";
import { NextPage } from "@/components/NextPage";
import { experienceEntries } from "@/data/experience";
import { educationEntries } from "@/data/education";
import { skills } from "@/data/skills";

const names = new Map(skills.map((skill) => [skill.id, skill.name]));

export function Experience() {
  return <div className="site-container interior-page">
    <PageIntro number="03" label="Experience" description="Hands-on experience across mobile, web, and backend development, working with software teams on client-facing products.">Where I&apos;ve<br /><em>worked.</em></PageIntro>
    <div className="career-list">
      {experienceEntries.map((entry, index) => <article key={entry.id} className="career-entry">
        <div className="career-dates"><span className="eyebrow">Role 0{index + 1}</span><p>{entry.startDate} — {entry.endDate ?? "Present"}</p><span>{entry.employmentType}</span></div>
        <div><h2>{entry.role}</h2><p className="career-company">{entry.organization} · {entry.location}</p><p className="career-description">{entry.description}</p><ul className="responsibilities">{entry.responsibilities?.map((item) => <li key={item}>{item}</li>)}</ul><div className="tag-list">{entry.technologyIds?.map((id) => <span className="tech-tag" key={id}>{names.get(id) ?? id}</span>)}</div></div>
      </article>)}
    </div>
    <section className="ruled-section" aria-labelledby="education-title"><div className="section-label"><h2 id="education-title" className="eyebrow">Education</h2></div>
      {educationEntries.map((entry) => <article className="education-entry" key={entry.id}><p className="eyebrow">{entry.startDate} — {entry.endDate}</p><div><h3>{entry.qualification}</h3><p>{entry.institution}</p></div></article>)}
    </section>
    <NextPage text="The tools behind the work." label="What I work with" href="/skills" />
  </div>;
}
