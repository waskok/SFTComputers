import { useEffect, useState } from "react";
import { Menu, MonitorCog, Phone, X } from "lucide-react";
import Button from "./ui/Button";
import { company, navLinks } from "../data/siteData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Blokujemy scroll strony, gdy otwarte jest menu mobilne.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-full border border-slate-100 bg-white/80 px-4 py-2.5 backdrop-blur-md transition-shadow duration-300 sm:px-6 ${
            isScrolled ? "shadow-xl shadow-slate-200/70" : "shadow-md shadow-slate-200/40"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 shrink-0">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
              <MonitorCog className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-base font-extrabold tracking-tight text-slate-900">{company.name}</span>
              <span className="hidden text-[11px] font-medium text-slate-500 sm:block">{company.claim}</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href={company.phoneHref} icon={Phone} size="md">
              Zadzwoń: {company.phone}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isMenuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full text-slate-700 transition-colors duration-200 hover:bg-slate-100 lg:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu mobilne */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${
            isMenuOpen ? "mt-3 max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 rounded-3xl border border-slate-100 bg-white/95 p-4 shadow-xl shadow-slate-200/70 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 px-1">
              <Button href={company.phoneHref} icon={Phone} className="w-full">
                Zadzwoń: {company.phone}
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
