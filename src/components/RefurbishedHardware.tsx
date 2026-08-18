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
    // Ustawienie kategorii w formularzu "Kontakt" realizujemy przez event globalny.
    window.dispatchEvent(
      new CustomEvent("sft:setContactCategory", {
        detail: { categoryId },
      }),
    );
  };

  return (
    <section id="poleasingowy" className="relative overflow-hidden bg-[#e7e7e7]">
      <div className="grid grid-cols-1 lg:grid-cols-[55%_1fr]">
        {/* Zdjęcie — tło całej lewej połowy sekcji, na pełną jej wysokość, bez marginesu do krawędzi ekranu */}
        <Reveal className="relative h-72 sm:h-96 lg:h-auto">
          <img
            src={laptop}
            alt="Poleasingowe laptopy biznesowe Dell, HP, Lenovo w ofercie SFT Computers"
            className="absolute inset-0 h-full w-full object-cover object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0 lg:bg-gradient-to-r lg:from-black/10 lg:via-transparent lg:to-transparent" />
          <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold text-emerald-700 shadow-lg backdrop-blur-sm sm:bottom-6 sm:left-6">
            12 miesięcy gwarancji
          </span>
        </Reveal>

        {/* Treść — prawa połowa sekcji */}
        <Reveal
          delay={120}
          className="flex flex-col justify-center px-4 py-14 sm:px-6 sm:py-20 lg:px-12 lg:py-24 xl:px-20"
        >
          <div className="max-w-xl">
            <SectionBadge>Sprzęt poleasingowy</SectionBadge>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Solidny sprzęt klasy biznesowej za mniej
            </h2>
            <p className="mt-4 text-lg text-slate-600">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
