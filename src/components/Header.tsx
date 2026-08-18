import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Button from "./ui/Button";
import logoSft from "../assets/Logo1.png";
import logoSftHover from "../assets/Logo2.png";
import { company, navLinks } from "../data/siteData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [announcementHeight, setAnnouncementHeight] = useState(0);

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
          ? "border-b border-slate-800/80 bg-[#0b0f19]/90 shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      } ${isScrolled ? "py-3.5" : "py-6"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between pl-3 pr-4 sm:pl-4 sm:pr-6 lg:pl-6 lg:pr-8">
        <a href="#top" className="group relative flex shrink-0 items-center">
          <img
            src={logoSft}
            alt={`Logo ${company.name}`}
            className="h-16 w-auto object-contain transition-opacity duration-200 ease-out group-hover:opacity-0 sm:h-20"
          />
          <img
            src={logoSftHover}
            alt=""
            aria-hidden="true"
            className="absolute left-0 top-0 h-16 w-auto object-contain opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 sm:h-20"
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 text-base font-medium text-slate-300 transition-colors duration-200 hover:text-white"
            >
              {link.label}
              <span
                className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-blue-500 transition-transform duration-300 ease-out group-hover:scale-x-100"
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        <div className="hidden lg:ml-10 lg:block">
          <Button href="#kontakt" variant="ghost" size="md" icon={ArrowRight}>
            Sprawdzam ofertę
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isMenuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full text-slate-300 transition-colors duration-200 hover:bg-slate-800 lg:hidden"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${
          isMenuOpen ? "max-h-[28rem] opacity-100 bg-[#0b0f19] border-b border-slate-800" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 pb-5 pt-2 sm:px-6 lg:px-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 transition-colors duration-200 hover:bg-slate-800 hover:text-white"
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