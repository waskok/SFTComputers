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
    "bg-blue-600 text-white shadow-xl shadow-blue-600/30 hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-0.5",
  secondary:
    "bg-slate-900 text-white border border-slate-700 shadow-lg shadow-black/40 hover:bg-slate-800 hover:border-blue-400 hover:-translate-y-0.5",
  ghost: "bg-blue-950/60 border border-blue-800/40 text-blue-400 hover:bg-blue-900/60 hover:text-white hover:-translate-y-0.5",
  inverse: "bg-white text-slate-950 shadow-xl shadow-black/30 hover:bg-slate-200 hover:-translate-y-0.5 font-bold",
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