import type { ReactNode } from "react";

export interface SectionBadgeProps {
  children?: ReactNode;
}

export default function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
      {children}
    </span>
  );
}
