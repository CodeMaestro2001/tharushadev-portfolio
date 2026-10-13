import type { HTMLAttributes, ReactNode } from "react";

type BentoCardTone = "default" | "accent" | "elevated";

type BentoCardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  eyebrow?: string;
  title?: string;
  titleAs?: "h2" | "h3" | "h4";
  tone?: BentoCardTone;
  interactive?: boolean;
};

const toneStyles: Record<BentoCardTone, string> = {
  default: "",
  accent: "border-accent/30 bg-accent/5",
  elevated: "bg-card-elevated",
};

export function BentoCard({
  children,
  className = "",
  eyebrow,
  title,
  titleAs: Title = "h2",
  tone = "default",
  interactive = false,
  ...props
}: BentoCardProps) {
  const cardClasses = [
    "group bento-card p-6 sm:p-8",
    toneStyles[tone],
    interactive ? "bento-card--interactive" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={cardClasses} {...props}>
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs font-medium tracking-[0.18em] text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <Title className="mb-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {title}
        </Title>
      ) : null}
      {children}
    </article>
  );
}
