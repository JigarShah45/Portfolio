"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        variant === "default" &&
          "bg-orange-500/10 text-orange-500 dark:bg-orange-500/15",
        variant === "outline" &&
          "border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400",
        className
      )}
    >
      {children}
    </span>
  );
}
