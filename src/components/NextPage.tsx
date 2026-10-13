import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function NextPage({ text, label, href }: { text: string; label: string; href: string }) {
  return <div className="next-page"><p>{text}</p><Link href={href} className="pill-button">{label}<ArrowUpRight size={18} aria-hidden="true" /></Link></div>;
}
