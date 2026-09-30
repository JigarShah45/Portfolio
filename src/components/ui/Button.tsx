"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

type MotionButtonProps = HTMLMotionProps<"button">;

interface ButtonProps extends Omit<MotionButtonProps, "children"> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-xl",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variant === "primary" &&
            "bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40",
          variant === "secondary" &&
            "bg-transparent text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 hover:border-orange-500 hover:text-orange-500",
          variant === "ghost" &&
            "bg-transparent text-neutral-600 dark:text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5",
          variant === "outline" &&
            "bg-transparent text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700 hover:border-orange-500/50 hover:text-orange-500",
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
