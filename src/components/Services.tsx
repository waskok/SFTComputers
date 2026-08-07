import type { ComponentType, SVGProps } from "react";
import { ArrowUpRight, Building2, Check, DatabaseBackup, Wrench } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionBadge from "./ui/SectionBadge";
import { services, type ServiceIconName } from "../data/siteData";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const ICONS: Record<ServiceIconName, IconComponent> = { Wrench, Building2, DatabaseBackup };

export default function Services() {
  return (
    <section id="uslugi" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionBadge>Nasze usługi</SectionBadge>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Wsparcie na każdą sytuację
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Od pojedynczej naprawy do stałej opieki nad sprzętem firmowym — zajmiemy się Twoim komputerem
            tak, jakby był naszym własnym.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal
                key={service.id}
                delay={index * 120}
                className="group relative flex flex-col rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/60 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>

                <ul className="mt-6 flex flex-col gap-2.5 border-t border-slate-100 pt-6">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
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
