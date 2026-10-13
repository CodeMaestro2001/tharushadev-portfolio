import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function PageIntro({ number, label, children, description }: { number: string; label: string; children: ReactNode; description?: string }) {
  return (
    <Reveal className="page-intro">
      <p className="eyebrow"><span>({number})</span> {label}</p>
      <h1 className="display-title">{children}</h1>
      {description ? <p className="page-description">{description}</p> : null}
    </Reveal>
  );
}
