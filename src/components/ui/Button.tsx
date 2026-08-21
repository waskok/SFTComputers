import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ComponentType,
  ReactNode,
  SVGProps,
} from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";
type ButtonSize = "md" | "lg";

interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconComponent;
  iconPosition?: "left" | "right";
  className?: string;
  children?: ReactNode;
}

type ButtonAsAnchorProps = ButtonOwnProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };
type ButtonAsButtonProps = ButtonOwnProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export type ButtonProps = ButtonAsAnchorProps | ButtonAsButtonProps;

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white shadow-xl shadow-blue-600/25 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/35 hover:-translate-y-0.5 dark:shadow-blue-600/30 dark:hover:bg-blue-500",
  secondary:
    "bg-white text-slate-900 border border-slate-200 shadow-lg shadow-slate-200/60 hover:border-blue-200 hover:text-blue-700 hover:-translate-y-0.5 dark:bg-slate-900 dark:text-white dark:border-slate-700 dark:shadow-black/40 dark:hover:bg-slate-800 dark:hover:border-blue-400",
  ghost:
    "bg-blue-50 text-blue-700 hover:bg-blue-100 hover:-translate-y-0.5 dark:bg-blue-950/60 dark:border dark:border-blue-800/40 dark:text-blue-400 dark:hover:bg-blue-900/60 dark:hover:text-white",
  inverse:
    "bg-white text-blue-700 shadow-xl shadow-black/10 hover:bg-blue-50 hover:-translate-y-0.5 font-semibold dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 dark:shadow-black/30",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  href,
  variant = "primary",
  size = "lg",
  icon: Icon,
  iconPosition = "right",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 ease-out whitespace-nowrap disabled:pointer-events-none disabled:opacity-60 disabled:shadow-none disabled:hover:translate-y-0 ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="h-4 w-4" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="h-4 w-4" aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}