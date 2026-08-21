import type { ComponentType, SVGProps } from "react";
import { useRef, useState } from "react";
import { ArrowUpRight, Building2, Check, ChevronLeft, ChevronRight, DatabaseBackup, Wrench } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionBadge from "./ui/SectionBadge";
import { services, type ServiceIconName, type ServiceItem } from "../data/siteData";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
const ICONS: Record<ServiceIconName, IconComponent> = { Wrench, Building2, DatabaseBackup };

export default function Services() {
  const [activeSlide, setActiveSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const setCategoryFromService = (categoryId: string) => {
    window.dispatchEvent(
      new CustomEvent("sft:setContactCategory", {
        detail: { categoryId },
      }),
    );
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Karuzela na mobile/tablecie - przewijanie strzałkami synchronizowane z natywnym scrollem (swipe).
  // Zawija się w kółko: z ostatniej karty strzałka "dalej" wraca do pierwszej i odwrotnie.
  const scrollToSlide = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const wrapped = ((index % services.length) + services.length) % services.length;
    const card = track.children[wrapped] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setActiveSlide(wrapped);
  };

  const handleTrackScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    setActiveSlide(Math.max(0, Math.min(index, services.length - 1)));
  };

  const renderCardContent = (service: ServiceItem) => {
    const Icon = ICONS[service.icon];
    return (
      <>
        <div className="group/cta flex items-start justify-between">
          <button
            type="button"
            onClick={() => setCategoryFromService(service.id)}
            aria-label={`Wybierz usługę: ${service.title}`}
            className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover/cta:bg-blue-600 group-hover/cta:text-white dark:border dark:border-blue-800/40 dark:bg-blue-950/80 dark:text-blue-400"
          >
            <Icon className="h-7 w-7" />
          </button>
          <button
            type="button"
            onClick={() => setCategoryFromService(service.id)}
            aria-label={`Przejdź do formularza: ${service.title}`}
            className="cursor-pointer rounded-lg p-1 text-slate-300 transition-all duration-300 group-hover/cta:-translate-y-1 group-hover/cta:translate-x-1 group-hover/cta:text-blue-600 dark:text-slate-500 dark:group-hover/cta:text-blue-400"
          >
            <ArrowUpRight className="h-5 w-5" />
          </button>
        </div>

        <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900 dark:text-white">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{service.description}</p>

        <ul className="mt-6 flex flex-col gap-2.5 pt-6 dark:border-t dark:border-slate-800">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
              {bullet}
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <section id="uslugi" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionBadge>Nasze usługi</SectionBadge>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Wsparcie na każdą sytuację
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Od pojedynczej naprawy do stałej opieki nad sprzętem firmowym – zajmiemy się Twoim komputerem tak, jakby był naszym własnym.
          </p>
        </Reveal>

        {/* Desktop (lg i wyżej) - kompletna, niezmieniona wersja z kafelkami w gridzie */}
        <div className="mt-16 hidden lg:grid lg:grid-cols-3 lg:gap-16">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              delay={index * 120}
              className="group relative flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50 sm:p-8 dark:border-slate-800/80 dark:bg-slate-900/60 dark:shadow-none dark:hover:border-slate-700 dark:hover:bg-slate-900 dark:hover:shadow-xl dark:hover:shadow-black/40"
            >
              {renderCardContent(service)}
            </Reveal>
          ))}
        </div>

        {/* Mobile/tablet (poniżej lg) - karuzela: swipe lub strzałki/kropki do przełączania kart */}
        <div className="mt-12 lg:hidden">
          <div
            ref={trackRef}
            onScroll={handleTrackScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="flex w-full flex-shrink-0 snap-center flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800/80 dark:bg-slate-900/60 dark:shadow-none"
              >
                {renderCardContent(service)}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => scrollToSlide(activeSlide - 1)}
              aria-label="Poprzednia usługa"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-blue-200 hover:text-blue-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-blue-800 dark:hover:text-blue-400"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => scrollToSlide(index)}
                  aria-label={`Przejdź do usługi: ${service.title}`}
                  className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                    index === activeSlide ? "w-6 bg-blue-600" : "w-1.5 bg-slate-300 dark:bg-slate-700"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToSlide(activeSlide + 1)}
              aria-label="Następna usługa"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-blue-200 hover:text-blue-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-blue-800 dark:hover:text-blue-400"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
