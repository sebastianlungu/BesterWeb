"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

export const SpotlightCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const springConfig = { damping: 20, stiffness: 100 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const maskImage = useTransform(
    [x, y],
    ([latestX, latestY]) =>
      `radial-gradient(400px circle at ${latestX}px ${latestY}px, rgba(47, 0, 255, 0.1) 0%, transparent 100%)`
  );

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-[var(--color-primary-600)]/5 to-[var(--color-secondary-400)]/5",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-600)]/20 to-[var(--color-secondary-400)]/20" />
      </motion.div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};
