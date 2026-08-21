import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Clock3, ShieldCheck, ShoppingBag, Star, Wrench, MonitorSmartphone } from "lucide-react";
import Button from "./ui/Button";
import SectionBadge from "./ui/SectionBadge";
import Reveal from "./ui/Reveal";
import { company } from "../data/siteData";
import serviceImage from "../assets/service.jpg";
import service2Image from "../assets/service2.jpg";
import service3Image from "../assets/service3.jpg";

const SLIDE_DURATION_MS = 7000;

const heroSlides = [
  {
    image: serviceImage,
    alt: "Diagnoza i naprawa sprzętu komputerowego SFT Computers w Krakowie",
    icon: Wrench,
    label: "Diagnoza usterki",
    value: "Bezpłatnie",
  },
  {
    image: service2Image,
    alt: "Szybka naprawa laptopów i komputerów w serwisie SFT Computers",
    icon: Clock3,
    label: "Szybka naprawa",
    value: "do 48h",
  },
  {
    image: service3Image,
    alt: "Gwarancja na usługi serwisowe SFT Computers",
    icon: ShieldCheck,
    label: "Gwarancja",
    value: "Spokój na dłużej",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Automatyczna karuzela zdjęć w tle - zmiana co SLIDE_DURATION_MS. Timer resetuje się przy
  // każdej zmianie aktywnego zdjęcia (również po kliknięciu paska), więc pasek postępu zawsze
  // startuje od nowa razem z licznikiem.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_DURATION_MS);
    return () => clearTimeout(timeout);
  }, [activeSlide]);

  const activeSlideData = heroSlides[activeSlide];
  const ActiveIcon = activeSlideData.icon;

  const goToPrevSlide = () => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const goToNextSlide = () => setActiveSlide((prev) => (prev + 1) % heroSlides.length);

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
                {heroSlides.map((slide, index) => (
                  <img
                    key={slide.image}
                    src={slide.image}
                    alt={slide.alt}
                    className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
                      index === activeSlide ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                {/* Przyciemnienie zdjęcia - w trybie ciemnym mocne (zdjęcie wtapia się w ciemne UI),
                    w jasnym motywie ledwo zauważalne, żeby zdjęcie zostało jasne i dopasowane do tła */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent dark:from-black/60 dark:via-transparent dark:to-black/10"
                  aria-hidden="true"
                />

                {/* Scrim pod paskami postępu, żeby zawsze były czytelne niezależnie od jasności zdjęcia */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/45 to-transparent"
                  aria-hidden="true"
                />

                {/* Paski postępu - jeden na zdjęcie, klikalne, wypełniają się przez 7s i przeskakują do kolejnego */}
                <div className="absolute top-2 left-1/2 z-10 flex w-48 -translate-x-1/2 gap-1.5 sm:w-60">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.image}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Pokaż: ${slide.label}`}
                      className="h-[4px] flex-1 cursor-pointer overflow-hidden rounded-full bg-white/30"
                    >
                      {index < activeSlide && <div className="h-full w-full bg-white" />}
                      {index === activeSlide && (
                        <div key={activeSlide} className="h-full w-0 bg-white animate-hero-progress" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Strzałki do zmiany zdjęcia - widoczne zawsze, na desktopie odrobinę mniejsze */}
                <button
                  type="button"
                  onClick={goToPrevSlide}
                  aria-label="Poprzednie zdjęcie"
                  className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm transition-colors hover:bg-white/40 lg:h-6 lg:w-6"
                >
                  <ChevronLeft className="h-4 w-4 lg:h-3 lg:w-3" />
                </button>
                <button
                  type="button"
                  onClick={goToNextSlide}
                  aria-label="Następne zdjęcie"
                  className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm transition-colors hover:bg-white/40 lg:h-6 lg:w-6"
                >
                  <ChevronRight className="h-4 w-4 lg:h-3 lg:w-3" />
                </button>
              </div>

              <div className="absolute -left-4 top-16 flex items-center gap-3 rounded-2xl bg-white/95 px-3.5 py-2.5 shadow-lg shadow-slate-900/10 backdrop-blur-md sm:-left-8 dark:border dark:border-slate-800 dark:bg-slate-900/95 dark:shadow-xl">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:border dark:border-blue-800/50 dark:bg-blue-950 dark:text-blue-400">
                  <ActiveIcon className="h-5 w-5" />
                </span>
                <div className="text-left">
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-300">{activeSlideData.label}</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{activeSlideData.value}</p>
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