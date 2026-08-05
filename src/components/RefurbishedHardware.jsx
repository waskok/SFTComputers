import { BadgeCheck, Laptop, PiggyBank, ShieldCheck } from "lucide-react";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import SectionBadge from "./ui/SectionBadge";
import { refurbishedHighlights } from "../data/siteData";

const ICONS = { PiggyBank, ShieldCheck, BadgeCheck };

export default function RefurbishedHardware() {
  return (
    <section id="poleasingowy" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-slate-200/70">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Wizualizacja — 5/12 */}
            <Reveal className="relative order-1 flex items-center justify-center bg-blue-50 p-10 lg:order-1 lg:col-span-5 lg:p-14">
              <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
                <div className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-blue-100 blur-3xl" />
              </div>
              <div className="relative flex aspect-square w-full max-w-xs flex-col items-center justify-center gap-5 rounded-[2rem] border border-blue-100 bg-white/70 p-8 text-center shadow-xl shadow-blue-900/5 backdrop-blur-md">
                <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                  <Laptop className="h-10 w-10" />
                </span>
                <p className="text-sm font-medium text-slate-500">
                  [TO-DO: zdjęcie laptopów/komputerów poleasingowych]
                </p>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-bold text-emerald-700">
                  TO-DO miesięcy gwarancji
                </span>
              </div>
            </Reveal>

            {/* Treść — 7/12 */}
            <Reveal delay={120} className="order-2 flex flex-col justify-center p-10 lg:order-2 lg:col-span-7 lg:p-16">
              <SectionBadge>Sprzęt poleasingowy</SectionBadge>
              <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Solidny sprzęt klasy biznesowej za mniej
              </h2>
              <p className="mt-4 max-w-xl text-lg text-slate-600">
                Laptopy i komputery używane wcześniej w firmach - sprawdzone, odnowione i gotowe do pracy.
                Oszczędzasz bez kompromisu na jakości i niezawodności.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
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
                <Button href="#kontakt">Jestem zainteresowany/a</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
