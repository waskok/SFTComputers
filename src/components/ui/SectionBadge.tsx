import type { ReactNode } from "react";

export interface SectionBadgeProps {
  children?: ReactNode;
}

export default function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 transition-colors duration-200 dark:border dark:border-blue-800/40 dark:bg-blue-950/60 dark:text-blue-400 dark:shadow-sm dark:shadow-blue-950">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 dark:animate-pulse" />
      {children}
    </span>
  );
}