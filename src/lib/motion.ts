import type { Transition, Variants } from "motion/react";

export const motionTokens = {
  duration: {
    hover: 0.2,
    interface: 0.3,
    reveal: 0.5,
    hero: 0.6,
  },
  ease: [0.22, 1, 0.36, 1] as const,
  distance: {
    subtle: 12,
    reveal: 20,
  },
} as const;

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0.55, y: motionTokens.distance.reveal },
  visible: { opacity: 1, y: 0 },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0.55 },
  visible: { opacity: 1 },
};

export const scaleRevealVariants: Variants = {
  hidden: { opacity: 0.6, scale: 0.975 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const cardHover = {
  y: -2,
  transition: { duration: motionTokens.duration.hover, ease: motionTokens.ease },
} as const;

export const buttonTap = { scale: 0.985 } as const;

export function revealTransition(delay = 0, reducedMotion = false): Transition {
  return {
    duration: reducedMotion ? 0 : motionTokens.duration.reveal,
    delay: reducedMotion ? 0 : delay,
    ease: motionTokens.ease,
  };
}

export function heroTransition(delay = 0, reducedMotion = false): Transition {
  return {
    duration: reducedMotion ? 0 : motionTokens.duration.hero,
    delay: reducedMotion ? 0 : delay,
    ease: motionTokens.ease,
  };
}
