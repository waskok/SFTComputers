import { Mail, Phone } from "lucide-react";
import footerLogo from "../assets/FooterLogo.png";
import { company, footerLinks, privacyPolicyHash } from "../data/siteData";

export default function Footer() {
  const openCookieSettings = () => {
    window.dispatchEvent(new CustomEvent("sft:openCookieBanner"));
  };

  return (
    <footer className="border-t border-slate-100 bg-white text-slate-500 dark:border-slate-800/80 dark:bg-slate-950 dark:text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center">
              <img src={footerLogo} alt={`Logo ${company.name}`} className="h-32 w-auto object-contain sm:h-40" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-5 lg:grid-cols-2">
            {footerLinks.map((column) => (
              <div key={column.heading}>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{column.heading}</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-500 transition-colors duration-200 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-400"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-bold text-slate-900 dark:text-white">Dane rejestrowe</p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400">
              <li>{company.registry.company}</li>
              <li>{company.registry.nip}</li>
              <li>{company.registry.krs}</li>
              <li>{company.registry.regon}</li>
              <li className="pt-1">{company.address.full}</li>
            </ul>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400">
              <a href={company.phoneHref} className="flex items-center gap-2 hover:text-blue-700 dark:hover:text-blue-400">
                <Phone className="h-4 w-4" /> {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2 hover:text-blue-700 dark:hover:text-blue-400">
                <Mail className="h-4 w-4" /> {company.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row dark:border-slate-800/80">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} {company.registry.company}. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-6">
            <a href={privacyPolicyHash} className="text-xs text-slate-400 hover:text-blue-700 dark:text-slate-500 dark:hover:text-blue-400">
              Polityka prywatności
            </a>
            <button
              type="button"
              onClick={openCookieSettings}
              className="cursor-pointer text-xs text-slate-400 hover:text-blue-700 dark:text-slate-500 dark:hover:text-blue-400"
            >
              Zgoda cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}