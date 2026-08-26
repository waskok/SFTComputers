import type { ComponentType, SVGProps } from "react";
import { useState } from "react";
import { Cpu, Fan, Gpu, HardDrive, MemoryStick, PcCase, Zap, ArrowUpRight } from "lucide-react";
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
    window.dispatchEvent(
      new CustomEvent("sft:setContactCategory", {
        detail: { categoryId },
      }),
    );
  };

  return (
    <section id="konfigurator" className="overflow-hidden bg-slate-900 pt-10 pb-10 sm:pt-12 sm:pb-14 dark:bg-slate-950 dark:border-y dark:border-slate-800/80">
      <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-10 xl:px-16">
        <Reveal className="relative z-10 mx-auto max-w-2xl text-center">
          <SectionBadge>Komputery na zamówienie</SectionBadge>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Składamy komputer pod Twoje potrzeby
          </h2>
          <p className="mt-2 text-base text-slate-300 sm:text-lg dark:text-slate-400">
            Kliknij podzespół na wizualizacji, aby zobaczyć, jak dobieramy go pod kątem Twoich potrzeb – bez przepłacania za moc, której nie wykorzystasz.
          </p>
        </Reveal>

        <div className="relative z-0 mt-1 grid grid-cols-1 items-start gap-1 sm:mt-2 sm:gap-2 lg:mt-2 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          <Reveal className="relative lg:col-span-7">
            <div className="relative mx-auto aspect-[800/846] w-full max-w-[220px] sm:max-w-xs md:max-w-sm lg:mx-0 lg:max-w-lg">
              <div
                className="pointer-events-none absolute top-[8%] -left-10 h-52 w-52 rounded-full bg-sky-400/45 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute top-[8%] -right-10 h-52 w-52 rounded-full bg-pink-400/40 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute bottom-[6%] -left-10 h-52 w-52 rounded-full bg-pink-400/35 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute bottom-[6%] -right-10 h-52 w-52 rounded-full bg-sky-400/40 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-full bg-white/15 blur-3xl"
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

          <Reveal delay={150} className="lg:col-span-5">
            <div className="lg:pt-8 xl:pt-10">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white sm:h-14 sm:w-14">
                <ActiveIcon className="h-5 w-5 sm:h-7 sm:w-7" />
              </span>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">{activePart.title}</h3>
              <p className="mt-2.5 text-base leading-relaxed text-slate-300 dark:text-slate-400">{activePart.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {pcParts.map((part) => (
                  <button
                    key={part.id}
                    type="button"
                    onClick={() => setActiveId(part.id)}
                    className={`cursor-pointer rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors duration-200 sm:px-4 sm:py-2 sm:text-xs ${
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
                <Button href="#kontakt" variant="inverse" icon={ArrowUpRight} onClick={() => setCategoryOnContact("konfiguracja-pc")}>
                  Jestem zainteresowany/a
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}