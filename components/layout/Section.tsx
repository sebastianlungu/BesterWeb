import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "cream-subtle" | "cream-strong" | "mint-subtle" | "mint-strong" | "gradient";
  padding?: "default" | "large" | "small";
  id?: string;
}

export const Section = ({
  children,
  className,
  variant = "cream-strong",
  padding = "default",
  id,
}: SectionProps) => {
  const variantClasses = {
    "cream-subtle": "bg-bg-cream-subtle",
    "cream-strong": "bg-bg-cream-strong",
    "mint-subtle": "bg-bg-mint-subtle",
    "mint-strong": "bg-bg-mint-strong",
    gradient:
      "bg-gradient-to-br from-[var(--color-primary-600)]/10 via-[var(--color-secondary-500)]/10 to-[var(--color-secondary-300)]/10",
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
