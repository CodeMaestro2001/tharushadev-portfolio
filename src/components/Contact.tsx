"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Copy, Download } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { profile } from "@/data/profile";

export function Contact() {
  const [time, setTime] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Colombo", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date()));
    update();
    const timer = window.setInterval(update, 60000);
    return () => window.clearInterval(timer);
  }, []);
  const copyEmail = async () => {
    if (!profile.links.email) return;
    try { await navigator.clipboard.writeText(profile.links.email); setCopyStatus("Email copied"); }
    catch { setCopyStatus("Copy unavailable. Select the email address to copy it."); }
  };
  return <div className="site-container interior-page contact-page">
    <div className="contact-layout">
      <div>
        <PageIntro number="05" label="Contact" description="Have a product, a problem, or an opportunity you'd like to discuss? I'd love to hear about it.">Let&apos;s work<br /><em>together.</em></PageIntro>
        <dl className="contact-facts"><div><dt className="eyebrow">Based in</dt><dd>{profile.location}</dd></div><div><dt className="eyebrow">Role</dt><dd>Full Stack Developer</dd></div><div><dt className="eyebrow">Local time</dt><dd>{time ? time + " · Sri Lanka" : "Sri Lanka · UTC+05:30"}</dd></div></dl>
        {profile.availability ? <p className="availability"><i className="status-dot" />{profile.availability}</p> : null}
      </div>
      <div className="contact-channel-list">
        <div className="email-panel">
          <p className="eyebrow">Email — the best way to reach me</p>
          <a className="email-address" href={`mailto:${profile.links.email}`}>{profile.links.email}</a>
          <div className="action-row"><a className="pill-button" href={`mailto:${profile.links.email}`}>Write an email <ArrowUpRight size={17} aria-hidden="true" /></a><button type="button" className="text-link" onClick={copyEmail}>{copyStatus === "Email copied" ? <Check size={16} /> : <Copy size={16} />}Copy email address</button></div>
          <p className="copy-status" role="status">{copyStatus}</p>
        </div>
        {profile.links.github ? <a className="social-row" href={profile.links.github} target="_blank" rel="noreferrer"><span>GitHub<small>Explore my code and repositories</small></span><ArrowUpRight aria-label="Opens in a new tab" size={25} /></a> : null}
        {profile.links.linkedin ? <a className="social-row" href={profile.links.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn<small>Connect professionally</small></span><ArrowUpRight aria-label="Opens in a new tab" size={25} /></a> : null}
        {profile.links.whatsapp ? <a className="social-row" href={profile.links.whatsapp} target="_blank" rel="noreferrer"><span>WhatsApp<small>{profile.links.phone}</small></span><ArrowUpRight aria-label="Opens in a new tab" size={25} /></a> : null}
        {profile.resumeUrl ? <a className="social-row" href={profile.resumeUrl} download="Tharusha_Rathnayaka_CV.pdf"><span>Résumé<small>Experience, education, and selected work</small></span><Download size={23} aria-hidden="true" /></a> : null}
      </div>
    </div>
  </div>;
}
