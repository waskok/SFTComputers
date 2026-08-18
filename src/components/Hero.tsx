import { Clock3, MonitorSmartphone, ShieldCheck, ShoppingBag, Star, Wrench } from "lucide-react";
import Button from "./ui/Button";
import SectionBadge from "./ui/SectionBadge";
import Reveal from "./ui/Reveal";
import { company } from "../data/siteData";

export default function Hero() {
  const setCategoryOnContact = (categoryId: string) => {
    window.dispatchEvent(
      new CustomEvent("sft:setContactCategory", {
        detail: { categoryId },
      }),
    );
  };

  return (
    <section id="top" className="relative overflow-hidden pt-56 pb-20 sm:pb-28 lg:pt-48 lg:pb-32 bg-[#0b0f19]">
      {/* Poświaty tła */}
      <div
        className="pointer-events-none absolute -top-32 -right-40 h-[32rem] w-[32rem] rounded-full bg-blue-600/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-16 xl:gap-24">
          <Reveal className="lg:col-span-7">
            <SectionBadge>Sklep i serwis komputerowy w Krakowie</SectionBadge>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
              Szybka naprawa i serwis sprzętu{" "}
              <a href="#mapa" className="text-blue-400 transition-colors hover:text-blue-300">
                w Krakowie
              </a>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              Diagnozujemy i naprawiamy komputery oraz laptopy bez zbędnego czekania. Zajmujemy się
              opieką IT dla firm i budową komputerów pod Twój budżet.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#kontakt" icon={Wrench} onClick={() => setCategoryOnContact("serwis")}>
                Zgłoś awarię
              </Button>
              <Button href="#konfigurator" variant="secondary" icon={MonitorSmartphone}>
                Skonfiguruj PC
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-950/70 border border-blue-800/40 text-blue-400">
                  <Clock3 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">Naprawa w 24-48h</p>
                  <p className="text-xs text-slate-400">w większości przypadków</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-950/70 border border-blue-800/40 text-blue-400">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">Gwarancja na usługi</p>
                  <p className="text-xs text-slate-400">spokój na dłużej</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-950/70 border border-blue-800/40 text-blue-400">
                  <ShoppingBag className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">Sklep stacjonarny</p>
                  <p className="text-xs text-slate-400">Kable, podzespoły i sprzęt na miejscu</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:ml-auto lg:mr-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/40 p-10 shadow-2xl shadow-black/60">
                <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
                  <span className="flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-600/20 border border-blue-500/30 backdrop-blur-md">
                    <MonitorSmartphone className="h-12 w-12 text-blue-400" />
                  </span>
                  <p className="text-sm font-medium text-slate-300">
                    Profesjonalny serwis sprzętu komputerowego
                  </p>
                </div>
                <div
                  className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl"
                  aria-hidden="true"
                />
              </div>

              <div className="absolute -left-2 top-10 flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/90 px-3 py-2.5 shadow-xl backdrop-blur-md sm:-left-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-950 border border-blue-800/50 text-blue-400">
                  <Wrench className="h-5 w-5" />
                </span>
                <div className="text-left">
                  <p className="text-xs text-slate-400">Diagnoza usterki</p>
                  <p className="text-sm font-bold text-white">Bezpłatnie</p>
                </div>
              </div>

              <div className="absolute -bottom-4 right-0 flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/90 px-3 py-2.5 shadow-xl backdrop-blur-md sm:right-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-950/80 border border-amber-800/40 text-amber-400">
                  <Star className="h-5 w-5 fill-current" />
                </span>
                <div className="text-left">
                  <p className="text-sm font-bold text-white">{company.googleRating.score}</p>
                  <p className="text-xs text-slate-400">{company.googleRating.reviewsCount}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}