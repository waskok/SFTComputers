import { useEffect, useState } from "react";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import Button from "./ui/Button";
import logoSft from "../assets/SFT-Logo.png";
import { company, navLinks } from "../data/siteData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [announcementHeight, setAnnouncementHeight] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Domyślnie strona ma się otwierać w motywie jasnym, niezależnie od preferencji
    // systemowych użytkownika - motyw ciemny włącza się tylko, jeśli został wcześniej
    // wybrany ręcznie (i zapamiętany w localStorage).
    const savedTheme = localStorage.getItem("theme");
    const shouldBeDark = savedTheme === "dark";

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const announcementBar = document.getElementById("announcement-bar");
    if (!announcementBar) return undefined;
    const measure = () => setAnnouncementHeight(announcementBar.offsetHeight);
    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(announcementBar);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isSolid = isScrolled || isMenuOpen;

  return (
    <header
      style={{ top: isScrolled ? 0 : announcementHeight }}
      className={`fixed inset-x-0 z-50 w-full transition-all duration-300 ease-out ${
        isSolid
          ? "border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-[#0b0f19]/90 dark:shadow-black/20"
          : "border-b border-transparent bg-slate-950"
      } ${isScrolled ? "h-16 lg:h-24" : "h-20 lg:h-30"}`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between pl-3 pr-4 sm:pl-4 sm:pr-6 lg:pl-6 lg:pr-8">
        <a href="#top" className="flex h-full shrink-0 items-center py-2">
          <img
            src={logoSft}
            alt={`Logo ${company.name}`}
            className="h-full w-auto aspect-square rounded-xl object-cover sm:rounded-xl"
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative py-1 text-base font-bold transition-colors duration-200 ${
                isSolid
                  ? "text-slate-700 hover:text-blue-700 dark:text-slate-300 dark:hover:text-white"
                  : "text-white hover:text-blue-300"
              }`}
            >
              {link.label}
              <span
                className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-blue-600 transition-transform duration-300 ease-out group-hover:scale-x-100 dark:bg-blue-500"
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isMenuOpen}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 lg:hidden ${
              isSolid
                ? "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Guzik ma "odwrócony" wygląd względem aktywnego motywu: przy księżycu (przełączenie
              na tryb ciemny) sam guzik jest ciemny, przy słońcu (przełączenie na tryb jasny) - jasny. */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Przełącz na tryb jasny" : "Przełącz na tryb nocny"}
            className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full shadow-sm transition-all duration-200 ${
              isDark
                ? "bg-white text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
            }`}
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-amber-500" strokeWidth={2.2} />
            ) : (
              <Moon className="h-5 w-5 text-slate-200" strokeWidth={2.2} />
            )}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${
          isMenuOpen
            ? "max-h-[28rem] border-b border-slate-100 bg-white opacity-100 dark:border-slate-800 dark:bg-[#0b0f19]"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 pb-5 pt-2 sm:px-6 lg:px-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 px-1">
            <Button href="#kontakt" icon={ArrowRight} className="w-full" onClick={() => setIsMenuOpen(false)}>
              Sprawdzam ofertę
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}