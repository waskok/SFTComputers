// lucide-react nie zawiera ikon marek — proste, lekkie zamienniki SVG.

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 9H15V6.5h-1.5C11.6 6.5 10 8.1 10 10v2H8.5v2.5H10V21h2.5v-6.5H14L14.5 12H12.5v-2c0-.6.4-1 1-1Z" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="16.2" cy="7.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
