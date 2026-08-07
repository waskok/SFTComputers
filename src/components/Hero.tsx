import { Clock3, MonitorSmartphone, ShieldCheck, ShoppingBag, Star, Wrench } from "lucide-react";
import Button from "./ui/Button";
import SectionBadge from "./ui/SectionBadge";
import Reveal from "./ui/Reveal";
import { company } from "../data/siteData";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-44 pb-20 sm:pb-28 lg:pt-40 lg:pb-32">
      <div
        className="pointer-events-none absolute -top-32 -right-40 h-[32rem] w-[32rem] rounded-full bg-blue-100 opacity-70 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 -left-40 h-96 w-96 rounded-full bg-blue-50 opacity-80 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-16 xl:gap-24">
          {/* Kolumna tekstowa — 7/12, przesunięta bliżej lewej krawędzi ekranu */}
          <Reveal className="lg:col-span-7">
            <SectionBadge>Sklep komputerowy w Krakowie</SectionBadge>

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
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <ShoppingBag className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">Sklep stacjonarny</p>
                  <p className="text-xs text-slate-500">Kable, podzespoły i sprzęt na miejscu</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Kolumna wizualna — 5/12, bez pudełek, przesunięta bliżej prawej krawędzi ekranu */}
          <Reveal delay={150} className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:ml-auto lg:mr-0">
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

              {/* Wolno stojący element — czas reakcji; lekko przezroczyste tło, żeby było czytelne na ciemnym panelu */}
              <div className="absolute -left-2 top-10 flex items-center gap-3 rounded-2xl bg-white/75 px-3 py-2.5 shadow-lg shadow-slate-900/10 backdrop-blur-md sm:-left-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Wrench className="h-5 w-5" />
                </span>
                <div className="text-left">
                  <p className="text-xs text-slate-500">Diagnoza usterki</p>
                  <p className="text-sm font-bold text-slate-900">Bezpłatnie</p>
                </div>
              </div>

              {/* Wolno stojący element — ocena Google; lekko przezroczyste tło, żeby było czytelne na ciemnym panelu */}
              <div className="absolute -bottom-4 right-0 flex items-center gap-3 rounded-2xl bg-white/75 px-3 py-2.5 shadow-lg shadow-slate-900/10 backdrop-blur-md sm:right-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                  <Star className="h-5 w-5 fill-current" />
                </span>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-900">{company.googleRating.score}</p>
                  <p className="text-xs text-slate-500">{company.googleRating.reviewsCount}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
