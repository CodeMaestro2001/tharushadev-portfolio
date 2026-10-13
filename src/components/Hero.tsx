import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section id="home" className="editorial-hero site-container" aria-labelledby="hero-title">
      <Reveal>
        <div className="hero-meta"><span><i className="status-dot" />Full Stack Developer</span><span><MapPin size={20} aria-hidden="true" />{profile.location}</span></div>
        <h1 id="hero-title" className="hero-name">Tharusha<br />Rathnayaka</h1>
      </Reveal>
      <div className="hero-bottom">
        <p>I build web, mobile, and AI-powered software — from an idea to <em>something useful.</em></p>
        <div className="action-row"><Link href="/work" className="pill-button">View my work <ArrowRight size={19} aria-hidden="true" /></Link><Link href="/contact" className="text-link">Let&apos;s talk <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      </div>
    </section>
  );
}
