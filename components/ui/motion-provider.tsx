"use client";
import { LazyMotion } from "motion/react";
const loadFeatures = () =>
  import("./motion-features").then((module) => module.default);
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}
