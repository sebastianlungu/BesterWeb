import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-brand-primary)] text-white shadow-lg hover:shadow-xl hover:bg-[var(--color-brand-primary)]/90 hover:scale-[1.02] focus-visible:ring-[var(--color-brand-primary)]",
        accent:
          "bg-[var(--color-accent-500)] text-white shadow-lg hover:shadow-xl hover:bg-[var(--color-accent-600)] hover:scale-[1.02] focus-visible:ring-[var(--color-accent-500)]",
        destructive:
          "bg-destructive text-white shadow-sm hover:bg-destructive/90",
        outline:
          "border-2 border-[var(--color-brand-primary)] bg-transparent text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/5",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200",
        ghost: "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
        link: "text-[var(--color-brand-primary)] underline-offset-4 hover:underline hover:text-[var(--color-brand-primary)]/80",
      },
      size: {
        default: "h-11 px-6 py-2.5 rounded-xl",
        sm: "h-9 rounded-lg px-4 text-sm",
        lg: "h-12 rounded-full px-8 text-base",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
