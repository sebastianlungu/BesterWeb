"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HeroHighlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("relative", className)}
    >
      {children}
    </motion.div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn(
        "relative inline-block bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </motion.span>
  );
};
