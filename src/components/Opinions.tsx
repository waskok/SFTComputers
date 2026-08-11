import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionBadge from "./ui/SectionBadge";
import { company, opinions, type Opinion } from "../data/siteData";

// Duplikujemy listę, aby pętla była nieskończona i bez widocznego przeskoku.
const loopOpinions: Opinion[] = [...opinions, ...opinions];

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

// Prędkość auto-scrolla (px/s) — wolniejsza niż poprzedni marquee CSS.
const AUTO_SCROLL_SPEED = 42;
// Prędkość ręcznego przesuwania strzałkami (px/s) — płynne dopasowanie do ruchu karuzeli.
const MANUAL_SCROLL_SPEED = 720;
// Gap między kartami — musi odpowiadać klasie Tailwind `gap-6` (1.5rem = 24px).
const CARD_GAP = 24;

// 1 litera imienia i nazwiska (np. "Mateusz Jajeśnica" -> "MJ"), a jeśli podano
// tylko imię — sama jego pierwsza litera (np. "Oskar" -> "O").
function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function getAvatarColor(name: string): string {
  const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
}

function Stars({ rating }: { rating: number }) {
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

function wrapOffset(value: number, half: number) {
  if (half <= 0) return value;
  let next = value;
  while (next <= -half) next += half;
  while (next > 0) next -= half;
  return next;
}

export default function Opinions() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;
  const activeOpinion = activeIndex !== null ? loopOpinions[activeIndex] : null;

  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const isOpenRef = useRef(false);
  const prefersReducedMotionRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  // Pozostały dystans do płynnego dociągnięcia po kliknięciu strzałki (px).
  const manualDeltaRef = useRef(0);

  isOpenRef.current = isOpen;

  // Mierzymy połowę szerokości toru (jedna kopia listy) — punkt pętli nieskończonej.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const measure = () => {
      halfWidthRef.current = track.scrollWidth / 2;
    };
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);
    return () => resizeObserver.disconnect();
  }, []);

  // Auto-scroll + płynne dociąganie po kliknięciu strzałek.
  useEffect(() => {
    prefersReducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const tick = (timestamp: number) => {
      if (lastTsRef.current == null) lastTsRef.current = timestamp;
      const delta = Math.min((timestamp - lastTsRef.current) / 1000, 0.05);
      lastTsRef.current = timestamp;

      if (!isOpenRef.current && halfWidthRef.current > 0) {
        let nextOffset = offsetRef.current;

        // Stały ruch karuzeli w lewo (pauza przy reduced-motion).
        if (!prefersReducedMotionRef.current) {
          nextOffset -= AUTO_SCROLL_SPEED * delta;
        }

        // Ręczne przesunięcie — ten sam ciągły ruch, tylko szybszy i w wybranym kierunku.
        const remaining = manualDeltaRef.current;
        if (remaining !== 0) {
          const step = Math.sign(remaining) * Math.min(Math.abs(remaining), MANUAL_SCROLL_SPEED * delta);
          nextOffset += step;
          manualDeltaRef.current = remaining - step;

          // Jeśli zostało mikro-przesunięcie, domykamy od razu (unikamy drżenia na końcu).
          if (Math.abs(manualDeltaRef.current) < 0.5) {
            manualDeltaRef.current = 0;
          }
        }

        offsetRef.current = wrapOffset(nextOffset, halfWidthRef.current);

        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, []);

  // Blokujemy scroll strony i pozwalamy zamknąć podgląd klawiszem Escape.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    if (!isOpen) return undefined;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const getStep = () => {
    const firstCard = trackRef.current?.firstElementChild as HTMLElement | null;
    return (firstCard?.offsetWidth ?? 320) + CARD_GAP;
  };

  // direction: +1 = w prawo (wstecz), -1 = w lewo (do przodu, zgodnie z auto-scrollem).
  const shiftBy = (direction: -1 | 1) => {
    if (halfWidthRef.current <= 0) return;
    manualDeltaRef.current += direction * getStep();
  };

  return (
    <section id="opinie" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="max-w-xl">
            <SectionBadge>Opinie klientów</SectionBadge>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Zaufali nam mieszkańcy Krakowa
            </h2>
            <p className="mt-2 text-sm text-slate-400">Kliknij na opinię, by ją przeczytać</p>
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
              <p className="text-xs text-slate-500">  {company.googleRating.reviewsCount}</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Nieskończona karuzela — pełna szerokość ekranu, z przyciskami lewo/prawo */}
      <Reveal className="mt-14">
        <div className="relative w-full overflow-hidden">
          {/* Gradientowe maski po bokach — opinie płynnie znikają na krawędziach ekranu */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-50 to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-50 to-transparent sm:w-32" />

          <button
            type="button"
            onClick={() => shiftBy(1)}
            aria-label="Poprzednia opinia"
            className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg shadow-slate-300/50 transition-all duration-200 hover:-translate-y-[calc(50%+2px)] hover:border-blue-200 hover:text-blue-700 sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => shiftBy(-1)}
            aria-label="Następna opinia"
            className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg shadow-slate-300/50 transition-all duration-200 hover:-translate-y-[calc(50%+2px)] hover:border-blue-200 hover:text-blue-700 sm:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div ref={trackRef} className="flex w-max gap-6 py-6 will-change-transform">
            {loopOpinions.map((opinion, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={`group relative flex w-72 flex-none cursor-pointer flex-col rounded-xl border bg-white p-6 text-left shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-slate-50 hover:shadow-xl hover:shadow-slate-300/70 sm:w-80 ${
                    isActive ? "border-blue-300 ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-50" : "border-gray-100"
                  }`}
                >
                  <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600" />

                  <div className="flex items-center gap-3 pr-7">
                    <span
                      className={`flex h-10 w-10 flex-none items-center justify-center rounded-full text-sm font-bold text-white ${getAvatarColor(
                        opinion.name
                      )}`}
                    >
                      {getInitials(opinion.name)}
                    </span>
                    <p className="font-semibold text-gray-900">{opinion.name}</p>
                  </div>

                  <div className="mt-3">
                    <Stars rating={opinion.rating} />
                  </div>

                  <p className="mt-3 line-clamp-6 text-sm leading-relaxed text-gray-600">{opinion.text}</p>
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
        {activeOpinion && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Opinia — ${activeOpinion.name}`}
            onClick={(event) => event.stopPropagation()}
            className={`relative flex max-h-[80vh] w-full max-w-lg flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-2xl transition-all duration-300 ease-out ${
              isOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"
            }`}
          >
            <div className="min-h-0 flex-1 overflow-y-auto pb-14 pr-1">
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-12 w-12 flex-none items-center justify-center rounded-full text-base font-bold text-white ${getAvatarColor(
                    activeOpinion.name
                  )}`}
                >
                  {getInitials(activeOpinion.name)}
                </span>
                <p className="text-lg font-semibold text-gray-900">{activeOpinion.name}</p>
              </div>

              <div className="mt-4">
                <Stars rating={activeOpinion.rating} />
              </div>

              <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-gray-600 sm:text-base">
                {activeOpinion.text}
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
