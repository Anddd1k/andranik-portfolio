"use client";
import { m, useReducedMotion } from "motion/react";
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <m.div
      className={className}
      initial={reduced ? false : { y: 12 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: reduced ? 0 : 0.55 }}
    >
      {children}
    </m.div>
  );
}
