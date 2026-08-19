import type { ComponentType, SVGProps } from "react";
import { BadgeCheck, PiggyBank, ShieldCheck } from "lucide-react";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import SectionBadge from "./ui/SectionBadge";
import { refurbishedHighlights, type RefurbishedIconName } from "../data/siteData";
import laptop from "../assets/laptop.jpg";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
const ICONS: Record<RefurbishedIconName, IconComponent> = { PiggyBank, ShieldCheck, BadgeCheck };

export default function RefurbishedHardware() {
  const setCategoryOnContact = (categoryId: string) => {
    window.dispatchEvent(
      new CustomEvent("sft:setContactCategory", {
        detail: { categoryId },
      }),
    );
  };

  return (
    <section
      id="poleasingowy"
      className="relative w-full overflow-hidden bg-[#eef0f3] transition-colors duration-300 dark:border-y dark:border-slate-800/80 dark:bg-slate-950"
    >
      {/* Miękkie gradienty na łączeniach z sąsiednimi sekcjami (góra / dół) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-slate-900 to-transparent dark:from-slate-950"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-slate-50 to-transparent dark:from-[#0b0f19]"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Lewa kolumna: zdjęcie laptopa na pełną wysokość */}
        <Reveal className="relative min-h-[22rem] sm:min-h-[28rem] lg:min-h-[38rem] lg:col-span-6 xl:col-span-7 overflow-hidden bg-[#eef0f3] dark:bg-slate-950">
          <img
            src={laptop}
            alt="Poleasingowe laptopy biznesowe Dell, HP, Lenovo w ofercie SFT Computers"
            className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-300 dark:brightness-[0.78] dark:contrast-[1.12] dark:opacity-90"
          />

          {/* Maski wtapiające w trybie ciemnym oraz delikatna winieta w trybie jasnym */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#eef0f3] dark:lg:to-slate-950"
            aria-hidden="true"
          />

          <span className="absolute bottom-6 left-6 z-20 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold text-emerald-700 shadow-xl backdrop-blur-sm dark:border dark:border-emerald-500/40 dark:bg-slate-900/95 dark:text-emerald-400">
            12 miesięcy gwarancji
          </span>
        </Reveal>

        {/* Prawa kolumna: treść oferty */}
        <Reveal
          delay={120}
          className="flex flex-col justify-center px-6 py-14 sm:px-12 sm:py-20 lg:col-span-6 xl:col-span-5 lg:py-24 lg:pl-10 lg:pr-12 xl:pr-20"
        >
          <div className="max-w-xl">
            <SectionBadge>Sprzęt poleasingowy</SectionBadge>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Solidny sprzęt klasy biznesowej za mniej
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Laptopy i komputery używane wcześniej w firmach – sprawdzone, odnowione i gotowe do pracy.
              Oszczędzasz bez kompromisu na jakości i niezawodności.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {refurbishedHighlights.map((item) => {
                const Icon = ICONS[item.icon];
                return (
                  <div key={item.title} className="flex flex-col gap-2.5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:border dark:border-blue-800/40 dark:bg-blue-950/70 dark:text-blue-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</p>
                    <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">{item.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <Button href="#kontakt" onClick={() => setCategoryOnContact("poleasingowy")}>
                Sprawdzam ofertę
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}