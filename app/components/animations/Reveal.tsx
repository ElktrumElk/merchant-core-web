"use client";

import { Animation } from "elk-components";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
  whileInView?: Record<string, unknown>;
  viewport?: { once?: boolean; amount?: number | "some" | "all" };
  transition?: Record<string, unknown>;
  delay?: number;
};

const Reveal = ({
  children,
  className,
  style = { width: "100%" },
  initial = { opacity: 0, y: 40 },
  animate,
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: false, amount: 0.2 },
  transition = { type: "spring", stiffness: 100, damping: 15 },
  delay = 0,
}: RevealProps) => {
  const isMount = animate !== undefined;

  return (
    <Animation
      className={className}
      style={style}
      child={() => <>{children}</>}
      initial={initial}
      animate={animate}
      whileInView={isMount ? undefined : whileInView}
      viewport={viewport}
      transition={delay > 0 ? { ...transition, delay } : transition}
    />
  );
};

export default Reveal;
