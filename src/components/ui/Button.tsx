"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

export function Button({
  href,
  variant = "primary",
  children,
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      data-cursor="pointer"
      className={cn(
        "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-all duration-500",
        variant === "primary" &&
          "bg-accent text-white hover:bg-accent/90",
        variant === "secondary" &&
          "border border-white/10 text-text-primary hover:border-accent/50 hover:text-accent",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 origin-left scale-x-0 bg-highlight transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100" />
      )}
    </Link>
  );
}
