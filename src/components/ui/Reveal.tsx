import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";

export interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  delay?: number;
  className?: string;
  children?: ReactNode;
}

/**
 * Uniwersalny wrapper do animacji scroll-reveal (fade-in-up).
 * `delay` w ms pozwala tworzyć efekt "stagger" dla list/grid'ów kart.
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  style,
  ...props
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLElement>();

  const mergedStyle: CSSProperties = {
    ...style,
    transitionDelay: isVisible ? `${delay}ms` : "0ms",
  };

  return (
    <Tag ref={ref} className={`reveal ${isVisible ? "is-visible" : ""} ${className}`} style={mergedStyle} {...props}>
      {children}
    </Tag>
  );
}
