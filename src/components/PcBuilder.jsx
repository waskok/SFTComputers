import { useState } from "react";
import { Cpu, Gamepad2, Plus } from "lucide-react";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import SectionBadge from "./ui/SectionBadge";
import { pcParts } from "../data/siteData";

export default function PcBuilder() {
  const [activeId, setActiveId] = useState(pcParts[0].id);
  const activePart = pcParts.find((part) => part.id === activeId) ?? pcParts[0];

  return (
    <section id="konfigurator" className="bg-slate-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionBadge>Komputery do gier na zamówienie</SectionBadge>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Składamy komputer pod Twoje potrzeby
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Kliknij podzespół na wizualizacji, aby zobaczyć, jak dobieramy go pod kątem twoich potrzeb - bez przepłacania za moc, której nie wykorzystasz.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Wizualizacja PC z hotspotami - 7/12 */}
          <Reveal className="relative lg:col-span-7">
            <div className="relative mx-auto aspect-[6/5] max-w-2xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-8 shadow-2xl shadow-black/40 sm:p-12">
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/5">
                  <Gamepad2 className="h-10 w-10 text-blue-400" />
                </span>
                <p className="max-w-xs text-sm font-medium text-slate-400">
                  [TO-DO: zdjęcie/wizualizacja obudowy PC ]
                </p>
              </div>

              {pcParts.map((part) => {
                const isActive = part.id === activeId;
                return (
                  <button
                    key={part.id}
                    type="button"
                    onClick={() => setActiveId(part.id)}
                    aria-pressed={isActive}
                    style={{ top: part.position.top, left: part.position.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                  >
                    <span className="relative flex h-11 w-11 items-center justify-center">
                      {isActive && (
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-50" />
                      )}
                      <span
                        className={`relative flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs font-bold transition-all duration-300 ${
                          isActive
                            ? "scale-110 border-white bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                            : "border-white/30 bg-white/10 text-white hover:scale-105 hover:border-white/70"
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </span>
                    <span
                      className={`mt-2 block w-max rounded-full px-2.5 py-1 text-[11px] font-semibold backdrop-blur-md transition-colors duration-300 ${
                        isActive ? "bg-blue-600 text-white" : "bg-white/10 text-slate-200"
                      }`}
                    >
                      {part.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Opis wybranego podzespołu - 5/12 */}
          <Reveal delay={150} className="lg:col-span-5">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md sm:p-10">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                <Cpu className="h-7 w-7" />
              </span>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-white">{activePart.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-300">{activePart.description}</p>

              <div className="mt-8 flex flex-wrap gap-2">
                {pcParts.map((part) => (
                  <button
                    key={part.id}
                    type="button"
                    onClick={() => setActiveId(part.id)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-200 ${
                      part.id === activeId
                        ? "bg-blue-600 text-white"
                        : "bg-white/5 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    {part.label}
                  </button>
                ))}
              </div>

              <div className="mt-10">
                <Button href="#kontakt" variant="inverse">
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
