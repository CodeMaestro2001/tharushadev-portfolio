"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || (href === "/work" && pathname.startsWith("/projects/"));

  return (
    <header className="nav-shell">
      <div className="nav-bar">
        <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Tharusha Rathnayaka — home">
          <span className="brand-mark">TR</span>
          <span className="brand-copy"><strong>{profile.name}</strong><span>Full Stack Developer</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>{item.label}</Link>)}
        </nav>
        <Link href="/contact" className="nav-cta">Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" /></Link>
        <button ref={toggle} className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
        {navigation.map((item, index) => <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} onClick={() => setOpen(false)}><span className="eyebrow">0{index}</span>{item.label}<ArrowUpRight size={20} aria-hidden="true" /></Link>)}
      </nav>
    </header>
  );
}
