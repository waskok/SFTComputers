import { useReveal } from "../../hooks/useReveal";

/**
 * Uniwersalny wrapper do animacji scroll-reveal (fade-in-up).
 * `delay` w ms pozwala tworzyć efekt "stagger" dla list/grid'ów kart.
 */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...props }) {
  const { ref, isVisible } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
      {...props}
    >
      {children}
    </Tag>
  );
}
