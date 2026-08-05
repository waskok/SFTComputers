import { useEffect, useState } from "react";
import { ArrowLeft, Star } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionBadge from "./ui/SectionBadge";
import { company, testimonials } from "../data/siteData";

// Duplikujemy listę, aby pętla marquee była nieskończona i bez widocznego przeskoku.
const loopTestimonials = [...testimonials, ...testimonials];

// Paleta kolorów awatarów — dobierana deterministycznie na podstawie imienia,
// żeby ta sama osoba zawsze miała to samo kółko, a różne osoby różne kolory.
const AVATAR_COLORS = [
  "bg-blue-600",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-rose-500",
  "bg-violet-500",
  "bg-cyan-600",
  "bg-orange-500",
  "bg-pink-500",
  "bg-teal-500",
  "bg-indigo-500",
];

// 1 litera imienia i nazwiska (np. "Mateusz Jajeśnica" -> "MJ"), a jeśli podano
// tylko imię — sama jego pierwsza litera (np. "Oskar" -> "O").
function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function getAvatarColor(name) {
  const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
}

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-current text-yellow-400" : "fill-current text-gray-200"}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;
  const activeTestimonial = isOpen ? loopTestimonials[activeIndex] : null;

  // Blokujemy scroll strony i pozwalamy zamknąć podgląd klawiszem Escape.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    if (!isOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") setActiveIndex(null);
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

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
              <p className="text-xs text-slate-500">Google  {company.googleRating.reviewsCount}</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Nieskończona karuzela (marquee) — pełna szerokość ekranu, zatrzymuje się po kliknięciu w opinię */}
      <Reveal className="mt-14">
        <div className="relative w-full overflow-hidden">
          {/* Gradientowe maski po bokach — opinie płynnie znikają na krawędziach ekranu */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-50 to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-50 to-transparent sm:w-32" />

          <div
            className={`flex w-max gap-6 py-6 animate-marquee ${isOpen ? "is-paused" : ""}`}
            style={{ "--marquee-duration": `${testimonials.length * 4}s` }}
          >
            {loopTestimonials.map((testimonial, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={`relative flex w-72 flex-none flex-col rounded-xl border bg-white p-6 text-left shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-slate-50 hover:shadow-xl hover:shadow-slate-300/70 sm:w-80 ${
                    isActive ? "border-blue-300 ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-50" : "border-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 flex-none items-center justify-center rounded-full text-sm font-bold text-white ${getAvatarColor(
                        testimonial.name
                      )}`}
                    >
                      {getInitials(testimonial.name)}
                    </span>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  </div>

                  <div className="mt-3">
                    <Stars rating={testimonial.rating} />
                  </div>

                  <p className="mt-3 line-clamp-6 text-sm leading-relaxed text-gray-600">{testimonial.text}</p>
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* Podgląd pełnej opinii — wyśrodkowany, pauzuje karuzelę, zamykany strzałką lub kliknięciem w tło */}
      <div
        role="presentation"
        onClick={() => setActiveIndex(null)}
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-900/20 p-4 backdrop-blur-[2px] transition-opacity duration-300 ease-out sm:p-6 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {activeTestimonial && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Opinia — ${activeTestimonial.name}`}
            onClick={(event) => event.stopPropagation()}
            className={`relative flex max-h-[80vh] w-full max-w-lg flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-2xl transition-all duration-300 ease-out ${
              isOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"
            }`}
          >
            <div className="min-h-0 flex-1 overflow-y-auto pb-14 pr-1">
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-12 w-12 flex-none items-center justify-center rounded-full text-base font-bold text-white ${getAvatarColor(
                    activeTestimonial.name
                  )}`}
                >
                  {getInitials(activeTestimonial.name)}
                </span>
                <p className="text-lg font-semibold text-gray-900">{activeTestimonial.name}</p>
              </div>

              <div className="mt-4">
                <Stars rating={activeTestimonial.rating} />
              </div>

              <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-gray-600 sm:text-base">
                {activeTestimonial.text}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Wróć do karuzeli opinii"
              className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
