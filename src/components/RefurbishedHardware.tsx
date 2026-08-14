import type { ComponentType, SVGProps } from "react";
import { BadgeCheck, Laptop, PiggyBank, ShieldCheck } from "lucide-react";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import SectionBadge from "./ui/SectionBadge";
import { refurbishedHighlights, type RefurbishedIconName } from "../data/siteData";
import laptop from "../assets/laptop.jpg";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const ICONS: Record<RefurbishedIconName, IconComponent> = { PiggyBank, ShieldCheck, BadgeCheck };

export default function RefurbishedHardware() {
  const setCategoryOnContact = (categoryId: string) => {
    // Ustawienie kategorii w formularzu "Kontakt" realizujemy przez event globalny.
    window.dispatchEvent(
      new CustomEvent("sft:setContactCategory", {
        detail: { categoryId },
      }),
    );
  };

  return (
    <section id="poleasingowy" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Wizualizacja — 5/12, bez pudełka: ikona i opis leżą wprost na tle strony */}
          <Reveal className="relative order-1 flex flex-col items-center justify-center gap-5 text-center lg:order-1 lg:col-span-5">
            <div
              className="pointer-events-none absolute inset-10 rounded-full bg-blue-100/60 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl">
              <img
                src={laptop}
                alt="Poleasingowe laptopy biznesowe Dell, HP, Lenovo w ofercie SFT Computers"
                className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <span className="relative inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-bold text-emerald-700">
              12 miesięcy gwarancji
            </span>
          </Reveal>

          {/* Treść — 7/12 */}
          <Reveal delay={120} className="order-2 flex flex-col justify-center lg:order-2 lg:col-span-7">
            <SectionBadge>Sprzęt poleasingowy</SectionBadge>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Solidny sprzęt klasy biznesowej za mniej
            </h2>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Laptopy i komputery używane wcześniej w firmach - sprawdzone, odnowione i gotowe do pracy.
              Oszczędzasz bez kompromisu na jakości i niezawodności.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {refurbishedHighlights.map((item) => {
                const Icon = ICONS[item.icon];
                return (
                  <div key={item.title} className="flex flex-col gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-bold text-slate-900">{item.title}</p>
                    <p className="text-xs leading-relaxed text-slate-500">{item.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <Button href="#kontakt" onClick={() => setCategoryOnContact("poleasingowy")}>
                Sprawdzam ofertę
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
