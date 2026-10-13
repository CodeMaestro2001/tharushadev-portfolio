"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUp, ArrowUpRight, GitBranch, Mail } from "lucide-react";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Footer() {
  const [year, setYear] = useState<string>("");
  useEffect(() => { const timer = window.setTimeout(() => setYear(String(new Date().getFullYear())), 0); return () => window.clearTimeout(timer); }, []);
  return <footer className="site-footer"><div className="site-container">
    <div className="footer-grid">
      <div><Link className="footer-name" href="/">{profile.name}</Link><p>Full Stack Developer — <em>based in Sri Lanka</em></p><a className="footer-email" href={`mailto:${profile.links.email}`}>{profile.links.email}</a></div>
      <div><p className="eyebrow">Menu</p><nav className="footer-menu" aria-label="Footer navigation">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav></div>
      <div><p className="eyebrow">Connect</p><div className="footer-socials flex-wrap"><a href={`mailto:${profile.links.email}`} aria-label="Email Tharusha"><Mail size={18} /></a>{profile.links.github ? <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub (opens in a new tab)"><GitBranch size={18} aria-hidden="true" /></a> : null}{profile.links.linkedin ? <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in a new tab)"><span>in</span></a> : null}{profile.links.whatsapp ? <a href={profile.links.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp (opens in a new tab)"><ArrowUpRight size={19} /></a> : null}</div></div>
    </div>
    <div className="footer-bottom"><p>© {year} {profile.name}. All rights reserved.</p><a href="#top">Back to top <span className="round-arrow"><ArrowUp size={16} aria-hidden="true" /></span></a></div>
  </div></footer>;
}
