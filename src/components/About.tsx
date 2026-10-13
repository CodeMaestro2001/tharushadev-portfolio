import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { NextPage } from "@/components/NextPage";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { experienceEntries } from "@/data/experience";

export function About() {
  return <div className="site-container interior-page">
    <div className="about-layout">
      <div>
        <PageIntro number="01" label="About">Hi, I&apos;m Tharusha —<br /><em>nice to meet you.</em></PageIntro>
        <div className="about-copy">
          <h2>I build across the stack, connecting <em>ideas</em> with practical software.</h2>
          <p>My work brings together web development, mobile applications, and AI-powered systems. I enjoy learning how the pieces fit, from the data and business logic to the experience on screen.</p>
          <p>Through internships, research, and real-client projects, I have contributed across the development lifecycle — planning, implementation, integration, and deployment.</p>
        </div>
      </div>
      <aside className="identity-panel">
        <div className="identity-art" aria-hidden="true"><span className="eyebrow">Software / Systems / Ideas</span><span className="identity-monogram">tr<span>.</span></span><span className="identity-signature">Tharusha Rathnayaka</span></div>
        <div className="identity-caption"><span>Full Stack Developer</span><span>Sri Lanka</span></div>
        {profile.resumeUrl ? <a className="text-link resume-link" href={profile.resumeUrl} download="Tharusha_Rathnayaka_CV.pdf">Download my résumé <ArrowDownToLine size={17} aria-hidden="true" /></a> : null}
      </aside>
    </div>
    <section className="ruled-section" aria-labelledby="facts-title">
      <div className="section-label"><h2 id="facts-title" className="eyebrow">At a glance</h2><span className="eyebrow">04</span></div>
      <div className="facts-grid">
        <div><strong>{String(projects.length).padStart(2, "0")}</strong><span>software projects</span></div>
        <div><strong>{String(experienceEntries.length).padStart(2, "0")}</strong><span>engineering internships</span></div>
        <div><strong>2026</strong><span>BSc (Hons) in IT · SLIIT</span></div>
        <div><strong>01</strong><span>IEEE SCSE publication</span></div>
      </div>
    </section>
    <section className="ruled-section" aria-labelledby="approach-title">
      <div className="section-label"><h2 id="approach-title" className="eyebrow">What I care about</h2><span className="eyebrow">03</span></div>
      <div className="principles-grid">
        <article><span className="eyebrow">01</span><h3>Security in the details.</h3><p>Role-based access, input validation, and tenant isolation are part of how I approach application development.</p></article>
        <article><span className="eyebrow">02</span><h3>Systems that can grow.</h3><p>Clear application layers, considered data models, and background processing help keep complex workflows manageable.</p></article>
        <article><span className="eyebrow">03</span><h3>Keep learning, keep building.</h3><p>My interests span computer vision, full-stack platforms, and agent automation. Research gives me another way to explore them.</p></article>
      </div>
    </section>
    <section className="research-note"><p className="eyebrow">Research / IEEE SCSE 2026</p><h2>MaizeGenie Mobile Platform for Sustainable and Profitable Corn Cultivation</h2><a href="https://ieeexplore.ieee.org/document/11499778" target="_blank" rel="noreferrer" className="text-link">Read the publication <ArrowUpRight size={18} aria-hidden="true" /></a></section>
    <NextPage text="Enough about me. Here's what I've built." label="See the work" href="/work" />
  </div>;
}
