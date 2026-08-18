import type { ComponentType, SVGProps } from "react";
import { useState } from "react";
import { Cpu, Fan, Gpu, HardDrive, MemoryStick, PcCase, Zap } from "lucide-react";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import SectionBadge from "./ui/SectionBadge";
import { pcParts } from "../data/siteData";
import gamingPcImage from "../assets/GamingPC.png";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const PART_ICONS: Record<string, IconComponent> = {
  cpu: Cpu,
  gpu: Gpu,
  chlodzenie: Fan,
  ram: MemoryStick,
  obudowa: PcCase,
  dysk: HardDrive,
  zasilacz: Zap,
};

export default function PcBuilder() {
  const [activeId, setActiveId] = useState<string>(pcParts[0].id);
  const activePart = pcParts.find((part) => part.id === activeId) ?? pcParts[0];
  const ActiveIcon = PART_ICONS[activePart.id] ?? Cpu;

  const setCategoryOnContact = (categoryId: string) => {
    // Ustawienie kategorii w formularzu "Kontakt" realizujemy przez event globalny.
    window.dispatchEvent(
      new CustomEvent("sft:setContactCategory", {
        detail: { categoryId },
      }),
    );
  };

  return (
    <section id="konfigurator" className="overflow-hidden bg-slate-900 pt-16 pb-6 sm:pt-20 sm:pb-8">
      <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-10 xl:px-16">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionBadge>Komputery na zamówienie</SectionBadge>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Składamy komputer pod Twoje potrzeby
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            Kliknij podzespół na wizualizacji, aby zobaczyć, jak dobieramy go pod kątem twoich potrzeb - bez przepłacania za moc, której nie wykorzystasz.
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 items-center gap-3 sm:mt-8 sm:gap-5 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Wizualizacja PC z hotspotami - 7/12, bez pudełka, przesunięta bliżej lewej krawędzi ekranu */}
          <Reveal className="relative lg:col-span-7">
            <div className="relative mx-auto aspect-[1664/2544] w-full max-w-[220px] sm:max-w-xs md:max-w-sm lg:mx-0 lg:max-w-lg">
              {/* Poświata RGB dookoła całej obudowy, w kolorach jej podświetlenia.
                  Pozycje "top"/"bottom" w % (a nie w px), bo zdjęcie ma sporo przezroczystego
                  marginesu nad/pod samą obudową - stałe px "wędrowały" przy zmianie rozmiaru kontenera. */}
              <div
  className="pointer-events-none absolute top-[8%] -left-10 h-52 w-52 rounded-full bg-cyan-400/40 blur-3xl"
  aria-hidden="true"
/>
<div
  className="pointer-events-none absolute top-[8%] -right-10 h-52 w-52 rounded-full bg-teal-400/35 blur-3xl"
  aria-hidden="true"
/>
<div
  className="pointer-events-none absolute bottom-[6%] -left-10 h-52 w-52 rounded-full bg-teal-400/30 blur-3xl"
  aria-hidden="true"
/>
<div
  className="pointer-events-none absolute bottom-[6%] -right-10 h-52 w-52 rounded-full bg-cyan-500/40 blur-3xl"
  aria-hidden="true"
/>
              <img
                src={gamingPcImage}
                alt="Wizualizacja komputera do gier w białej obudowie z podświetleniem RGB"
                className="relative h-full w-full object-contain drop-shadow-[0_45px_70px_rgba(0,0,0,0.6)]"
              />

              {pcParts.map((part) => {
                const isActive = part.id === activeId;
                const PartIcon = PART_ICONS[part.id] ?? Cpu;
                return (
                  <button
                    key={part.id}
                    type="button"
                    onClick={() => setActiveId(part.id)}
                    aria-pressed={isActive}
                    aria-label={part.label}
                    style={{ top: part.position.top, left: part.position.left }}
                    className="absolute flex -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center focus:outline-none"
                  >
                    <span className="relative flex h-7 w-7 items-center justify-center sm:h-8 sm:w-8">
                      {isActive && (
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-50" />
                      )}
                      <span
                        className={`relative flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all duration-300 sm:h-7 sm:w-7 ${
                          isActive
                            ? "scale-110 border-white bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                            : "border-white/80 bg-slate-900/75 text-white hover:scale-105 hover:border-white"
                        }`}
                      >
                        <PartIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      </span>
                    </span>
                    {isActive && (
                      <span className="mt-1.5 block w-max rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-semibold text-white">
                        {part.label}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Opis wybranego podzespołu - 5/12, bez pudełka, przesunięty bliżej prawej krawędzi ekranu */}
          <Reveal delay={150} className="lg:col-span-5">
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white sm:h-14 sm:w-14">
                <ActiveIcon className="h-5 w-5 sm:h-7 sm:w-7" />
              </span>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">{activePart.title}</h3>
              <p className="mt-2.5 text-base leading-relaxed text-slate-300">{activePart.description}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {pcParts.map((part) => (
                  <button
                    key={part.id}
                    type="button"
                    onClick={() => setActiveId(part.id)}
                    className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors duration-200 sm:px-4 sm:py-2 sm:text-xs ${
                      part.id === activeId
                        ? "bg-blue-600 text-white"
                        : "bg-white/5 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    {part.label}
                  </button>
                ))}
              </div>

              <div className="mt-6">
                <Button href="#kontakt" variant="inverse" onClick={() => setCategoryOnContact("konfiguracja-pc")}>
                  Skonfiguruj swój PC
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
