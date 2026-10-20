import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { navigation } from "@/data/navigation";

export default function Home() {
  return <main id="main-content"><Hero /><section className="site-container explore-section" aria-labelledby="explore-title">
    <div className="section-label"><h2 id="explore-title" className="eyebrow">Explore</h2><span className="eyebrow">06</span></div>
    <nav aria-label="Explore the portfolio">
      {navigation.filter((item) => item.href !== "/").map((item, index) => <Link className="explore-row" id={item.href === "/work" ? "projects" : item.href.slice(1)} href={item.href} key={item.href}>
        <span className="eyebrow">0{index + 1}</span><span className="explore-name">{item.label}</span><span className="explore-description">{"description" in item ? item.description : ""}</span><span className="round-arrow"><ArrowUpRight size={21} aria-hidden="true" /></span>
      </Link>)}
    </nav>
  </section></main>;
}
