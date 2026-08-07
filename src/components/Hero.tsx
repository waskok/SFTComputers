import { Clock3, MonitorSmartphone, ShieldCheck, Star, Wrench } from "lucide-react";
import Button from "./ui/Button";
import SectionBadge from "./ui/SectionBadge";
import Reveal from "./ui/Reveal";
import { company } from "../data/siteData";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-28 lg:pb-32">
      <div
        className="pointer-events-none absolute -top-32 -right-40 h-[32rem] w-[32rem] rounded-full bg-blue-100 opacity-70 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 -left-40 h-96 w-96 rounded-full bg-blue-50 opacity-80 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Kolumna tekstowa — 7/12, asymetryczny układ */}
          <Reveal className="lg:col-span-7">
            <SectionBadge>Serwis komputerowy w Krakowie</SectionBadge>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
              Szybka naprawa i serwis sprzętu{" "}
              <span className="text-blue-600">w Krakowie</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Diagnozujemy i naprawiamy komputery oraz laptopy bez zbędnego czekania. Zajmujemy się też
              opieką IT dla firm i budową komputerów pod Twój budżet.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#kontakt" icon={Wrench}>
                Zgłoś awarię
              </Button>
              <Button href="#konfigurator" variant="secondary" icon={MonitorSmartphone}>
                Skonfiguruj PC
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Clock3 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">Naprawa w 24-48h</p>
                  <p className="text-xs text-slate-500">w większości przypadków</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">Gwarancja na usługi</p>
                  <p className="text-xs text-slate-500">spokój na dłużej</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{company.googleRating.score} </p>
                  <p className="text-xs text-slate-500">{company.googleRating.reviewsCount}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Kolumna wizualna — 5/12 */}
          <Reveal delay={150} className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-slate-100 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 p-10 shadow-2xl shadow-blue-900/20">
                <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
                  <span className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-md">
                    <MonitorSmartphone className="h-12 w-12 text-white" />
                  </span>
                  <p className="text-sm font-medium text-blue-100">
                    [TO-DO: zdjęcie serwisu ]
                  </p>
                </div>

                <div
                  className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-blue-400/30 blur-3xl"
                  aria-hidden="true"
                />
              </div>

              {/* Floating badge — czas reakcji */}
              <div className="absolute -left-6 top-10 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/90 px-4 py-3 shadow-xl shadow-slate-200/70 backdrop-blur-md sm:-left-10">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Wrench className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-slate-500">Diagnoza usterki</p>
                  <p className="text-sm font-bold text-slate-900">Bezpłatnie</p>
                </div>
              </div>

              {/* Floating badge — ocena */}
              <div className="absolute -bottom-8 -right-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/90 px-4 py-3 shadow-xl shadow-slate-200/70 backdrop-blur-md sm:-right-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                  <Star className="h-5 w-5 fill-current" />
                </span>
                <div>
                  <p className="text-xs text-slate-500">Zaufało nam</p>
                  <p className="text-sm font-bold text-slate-900">1000+ klientów</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
