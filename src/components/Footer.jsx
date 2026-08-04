import { Mail, MonitorCog, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./ui/SocialIcons";
import { company, footerLinks } from "../data/siteData";

const socials = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <MonitorCog className="h-5 w-5" />
              </span>
              <span className="text-base font-extrabold tracking-tight text-slate-900">{company.name}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Serwis komputerowy, opieka IT i komputery do gier na zamówienie. Zaufany partner
              technologiczny w Krakowie.
            </p>

            <div className="mt-6 flex flex-col gap-2 text-sm text-slate-500">
              <a href={company.phoneHref} className="flex items-center gap-2 hover:text-blue-700">
                <Phone className="h-4 w-4" /> {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2 hover:text-blue-700">
                <Mail className="h-4 w-4" /> {company.email}
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-500 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-5 lg:grid-cols-2">
            {footerLinks.map((column) => (
              <div key={column.heading}>
                <p className="text-sm font-bold text-slate-900">{column.heading}</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-500 transition-colors duration-200 hover:text-blue-700"
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
            <p className="text-sm font-bold text-slate-900">Dane rejestrowe</p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-slate-500">
              <li>{company.registry.company}</li>
              <li>{company.registry.nip}</li>
              <li>{company.registry.krs}</li>
              <li>{company.registry.regon}</li>
              <li className="pt-1">{company.address.full}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} {company.registry.company}. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-400 hover:text-blue-700">
              Polityka prywatności
            </a>
            <a href="#" className="text-xs text-slate-400 hover:text-blue-700">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
