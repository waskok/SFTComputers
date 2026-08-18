import type { ComponentType, SVGProps } from "react";
import { ArrowUpRight, Building2, Check, DatabaseBackup, Wrench } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionBadge from "./ui/SectionBadge";
import { services, type ServiceIconName } from "../data/siteData";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
const ICONS: Record<ServiceIconName, IconComponent> = { Wrench, Building2, DatabaseBackup };

export default function Services() {
  const setCategoryFromService = (categoryId: string) => {
    window.dispatchEvent(
      new CustomEvent("sft:setContactCategory", {
        detail: { categoryId },
      }),
    );
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="uslugi" className="py-20 sm:py-28 bg-[#0b0f19]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionBadge>Nasze usługi</SectionBadge>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Wsparcie na każdą sytuację
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Od pojedynczej naprawy do stałej opieki nad sprzętem firmowym – zajmiemy się Twoim komputerem tak, jakby był naszym własnym.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal
                key={service.id}
                delay={index * 120}
                className="group relative flex flex-col rounded-3xl border border-slate-800/80 bg-slate-900/60 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900 hover:shadow-xl hover:shadow-black/40"
              >
                <div className="group/cta flex items-start justify-between">
                  <button
                    type="button"
                    onClick={() => setCategoryFromService(service.id)}
                    aria-label={`Wybierz usługę: ${service.title}`}
                    className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl bg-blue-950/80 border border-blue-800/40 text-blue-400 transition-colors duration-300 group-hover/cta:bg-blue-600 group-hover/cta:text-white"
                  >
                    <Icon className="h-7 w-7" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setCategoryFromService(service.id)}
                    aria-label={`Przejdź do formularza: ${service.title}`}
                    className="cursor-pointer rounded-lg p-1 text-slate-500 transition-all duration-300 group-hover/cta:-translate-y-1 group-hover/cta:translate-x-1 group-hover/cta:text-blue-400"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </button>
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{service.description}</p>

                <ul className="mt-6 flex flex-col gap-2.5 pt-6 border-t border-slate-800">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}