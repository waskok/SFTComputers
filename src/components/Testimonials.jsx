import { Quote, Star } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionBadge from "./ui/SectionBadge";
import { company, testimonials } from "../data/siteData";

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export default function Testimonials() {
  return (
    <section id="opinie" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="max-w-xl">
            <SectionBadge>Opinie klientów</SectionBadge>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Zaufali nam mieszkańcy Krakowa
            </h2>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white px-6 py-4 shadow-lg shadow-slate-200/60">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <div className="h-8 w-px bg-slate-100" />
            <div className="text-left">
              <p className="text-lg font-extrabold leading-none text-slate-900">
                {company.googleRating.score}
              </p>
              <p className="text-xs text-slate-500">Google · {company.googleRating.reviewsCount}</p>
            </div>
          </div>
        </Reveal>

        {/* Mobile: przewijalna karuzela ze snapem. Desktop: siatka 3 kolumn. */}
        <div className="mt-14 -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 no-scrollbar sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={index * 120}
              className="relative flex min-w-[85%] flex-none snap-center flex-col rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/60 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10 sm:min-w-0"
            >
              <Quote className="h-8 w-8 text-blue-100" />
              <div className="mt-3 flex text-amber-400">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">“{testimonial.quote}”</p>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {initials(testimonial.name)}
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
