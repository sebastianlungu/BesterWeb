import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export const Container = ({ children, className, size = "default" }: ContainerProps) => {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
  };

  return (
    <div className={cn(sizeClasses[size], "mx-auto px-4 md:px-6", className)}>
      {children}
    </div>
  );
};
