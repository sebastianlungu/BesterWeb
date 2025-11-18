import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "gradient";
  padding?: "default" | "large" | "small";
  id?: string;
}

export const Section = ({
  children,
  className,
  variant = "default",
  padding = "default",
  id,
}: SectionProps) => {
  const variantClasses = {
    default: "bg-[var(--color-bg-primary)]",
    secondary: "bg-[var(--color-bg-secondary)]",
    gradient:
      "bg-gradient-to-br from-[var(--color-brand-primary)]/10 via-[var(--color-brand-secondary)]/10 to-[var(--color-brand-accent)]/10",
  };

  const paddingClasses = {
    small: "py-12 md:py-16",
    default: "py-16 md:py-24",
    large: "py-24 md:py-32",
  };

  return (
    <section
      id={id}
      className={cn(
        variantClasses[variant],
        paddingClasses[padding],
        "px-4",
        className
      )}
    >
      {children}
    </section>
  );
};
