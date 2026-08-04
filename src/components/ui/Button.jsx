const VARIANT_STYLES = {
  primary:
    "bg-blue-600 text-white shadow-xl shadow-blue-600/25 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/35 hover:-translate-y-0.5",
  secondary:
    "bg-white text-slate-900 border border-slate-200 shadow-lg shadow-slate-200/60 hover:border-blue-200 hover:text-blue-700 hover:-translate-y-0.5",
  ghost: "bg-blue-50 text-blue-700 hover:bg-blue-100 hover:-translate-y-0.5",
  inverse:
    "bg-white text-blue-700 shadow-xl shadow-black/10 hover:bg-blue-50 hover:-translate-y-0.5",
};

const SIZE_STYLES = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

/**
 * Przycisk CTA — wysoki kontrast, duży obszar dotykowy (min. 44px), płynny hover.
 * Renderuje <a> jeśli podano `href`, w przeciwnym razie <button>.
 */
export default function Button({
  href,
  variant = "primary",
  size = "lg",
  icon: Icon,
  iconPosition = "right",
  className = "",
  children,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 ease-out whitespace-nowrap ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="h-4 w-4" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="h-4 w-4" aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}
