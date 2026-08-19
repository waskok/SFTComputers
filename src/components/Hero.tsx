import { Clock3, ShieldCheck, ShoppingBag, Star, Wrench, MonitorSmartphone } from "lucide-react";
import Button from "./ui/Button";
import SectionBadge from "./ui/SectionBadge";
import Reveal from "./ui/Reveal";
import { company } from "../data/siteData";
import serviceImage from "../assets/service.jpg";

export default function Hero() {
  const setCategoryOnContact = (categoryId: string) => {
    window.dispatchEvent(
      new CustomEvent("sft:setContactCategory", {
        detail: { categoryId },
      }),
    );
  };

  return (
    <section id="top" className="relative overflow-hidden pt-56 pb-20 sm:pb-28 lg:pt-48 lg:pb-32">
      <div
        className="pointer-events-none absolute -top-32 -right-40 h-[32rem] w-[32rem] rounded-full bg-blue-100 opacity-70 blur-3xl dark:bg-blue-600/15 dark:opacity-100"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 -left-40 h-96 w-96 rounded-full bg-blue-50 opacity-80 blur-3xl dark:bg-cyan-500/10 dark:opacity-100"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-16 xl:gap-24">
          <Reveal className="lg:col-span-7">
            <SectionBadge>Sklep komputerowy w Krakowie</SectionBadge>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08] dark:text-white">
              Szybka naprawa i serwis sprzętu{" "}
              <a href="#mapa" className="text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                w Krakowie
              </a>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
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
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:border dark:border-blue-800/40 dark:bg-blue-950/70 dark:text-blue-400">
                  <Clock3 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Naprawa w 24-48h</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">w większości przypadków</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:border dark:border-blue-800/40 dark:bg-blue-950/70 dark:text-blue-400">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Gwarancja na usługi</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">spokój na dłużej</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:border dark:border-blue-800/40 dark:bg-blue-950/70 dark:text-blue-400">
                  <ShoppingBag className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Sklep stacjonarny</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Kable, podzespoły i sprzęt na miejscu</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:ml-auto lg:mr-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-slate-100 bg-slate-900 shadow-2xl shadow-blue-900/20 dark:border-slate-800 dark:shadow-black/60">
                <img
                  src={serviceImage}
                  alt="Serwis i naprawa sprzętu komputerowego SFT Computers w Krakowie"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"
                  aria-hidden="true"
                />
              </div>

              <div className="absolute -left-2 top-10 flex items-center gap-3 rounded-2xl bg-white/85 px-3.5 py-2.5 shadow-lg shadow-slate-900/10 backdrop-blur-md sm:-left-6 dark:border dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-xl">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:border dark:border-blue-800/50 dark:bg-blue-950 dark:text-blue-400">
                  <Wrench className="h-5 w-5" />
                </span>
                <div className="text-left">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Diagnoza usterki</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Bezpłatnie</p>
                </div>
              </div>

              <div className="absolute -bottom-4 right-0 flex items-center gap-3 rounded-2xl bg-white/85 px-3.5 py-2.5 shadow-lg shadow-slate-900/10 backdrop-blur-md sm:right-6 dark:border dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-xl">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-500 dark:border dark:border-amber-800/40 dark:bg-amber-950/80 dark:text-amber-400">
                  <Star className="h-5 w-5 fill-current" />
                </span>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{company.googleRating.score}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{company.googleRating.reviewsCount}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}