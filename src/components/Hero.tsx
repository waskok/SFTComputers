import { useEffect, useState, useRef } from "react";
import {
  ShoppingBag,
  Wrench,
  MonitorSmartphone,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Pause,
  Play,
  Store,
  Gamepad2,
  Laptop,
} from "lucide-react";
import Button from "./ui/Button";
import SectionBadge from "./ui/SectionBadge";
import serviceImage from "../assets/service.jpg";
import hardwareImage from "../assets/hardware.jpg";
import pcBuildingImage from "../assets/pc-building.jpg";
import laptopImage from "../assets/laptop-hero.jpg";

interface HeroSlide {
  id: string;
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  primaryBtnText: string;
  primaryBtnHref: string;
  primaryBtnIcon: typeof Wrench;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  secondaryBtnIcon?: typeof MonitorSmartphone;
  categoryId?: string;
  image: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "sklep-gaming",
    badge: "Sprzęt i peryferia na miejscu",
    titlePrefix: "Stacjonarny sklep kompuerowy w ",
    titleHighlight: "Krakowie",
    description:
      "Najnowsze karty graficzne, podzespoły komputerowe, klawiatury mechaniczne, myszki, pasty termoprzewodzące i akcesoria dostępne od ręki lub na zamówienie w naszym lokalu w Krakowie.",
    primaryBtnText: "Jak do nas trafić",
    primaryBtnHref: "#mapa",
    primaryBtnIcon: Store,
    secondaryBtnText: "Zapytaj o dostępność",
    secondaryBtnHref: "#kontakt",
    secondaryBtnIcon: Gamepad2,
    categoryId: "sklep",
    image: hardwareImage,
  },
  {
    id: "serwis",
    badge: "Serwis i Naprawa w Krakowie",
    titlePrefix: "Szybka naprawa i serwis sprzętu ",
    titleHighlight: "w Krakowie",
    description:
      "Diagnozujemy i naprawiamy komputery oraz laptopy bez zbędnego czekania. Zajmujemy się opieką IT dla firm, czyszczeniem układów chłodzenia i wymianą podzespołów.",
    primaryBtnText: "Zgłoś awarię",
    primaryBtnHref: "#kontakt",
    primaryBtnIcon: Wrench,
    categoryId: "serwis",
    image: serviceImage,
  },
  {
    id: "pc-build",
    badge: "Komputery na zamówienie",
    titlePrefix: "Złożymy komputer ",
    titleHighlight: "pod Twój budżet",
    description:
      "Gaming, rendering czy stacje biurowe. Precyzyjny dobór podzespołów bez przepłacania za niewykorzystaną moc, estetyczne ułożenie przewodów i pełne testy stabilności.",
    primaryBtnText: "Otwórz konfigurator PC",
    primaryBtnHref: "#konfigurator",
    primaryBtnIcon: MonitorSmartphone,
    secondaryBtnText: "Zadaj pytanie",
    secondaryBtnHref: "#kontakt",
    secondaryBtnIcon: Wrench,
    categoryId: "konfiguracja-pc",
    image: pcBuildingImage,
  },
  {
    id: "poleasingowy",
    badge: "Sprzęt poleasingowy z gwarancją",
    titlePrefix: "Laptopy klasy biznesowej ",
    titleHighlight: "nawet 40% taniej",
    description:
      "Sprawdzone serie Dell Latitude, Lenovo ThinkPad i HP EliteBook. Przetestowany sprzęt z 12-miesięczną gwarancją i gotowym systemem - idealny do pracy i nauki.",
    primaryBtnText: "Zobacz sprzęt poleasingowy",
    primaryBtnHref: "#poleasingowy",
    primaryBtnIcon: Laptop,
    secondaryBtnText: "Zadaj pytanie",
    secondaryBtnHref: "#kontakt",
    secondaryBtnIcon: ShoppingBag,
    categoryId: "poleasingowy",
    image: laptopImage,
  },

/*
  =============================================================================
  💡 INSTRUKCJA DODAWANIA BANERU REKLAMOWEGO / WSPÓŁPRACY:
  =============================================================================
  1. Wrzuć plik graficzny do folderu: src/assets/ (najlepiej w formacie poziomym 16:9, np. promocja.jpg).
  2. Na samej górze tego pliku dopisz import zdjęcia:
     import banerPromocja from "../assets/promocja.jpg";
  3. Skopiuj poniższy gotowy szablon, wklej go do tej tablicy (oddzielając przecinkiem) i uzupełnij teksty.
  
  --- GOTOWY SZABLON DO WKLEJENIA: ---
  {
    id: "wspolpraca-asus",                                   // Unikalna nazwa (bez spacji i polskich znaków)
    badge: "Współpraca / Promocja",                          // Mały napis nad tytułem (np. Partner Miesiąca, Promocja)
    titlePrefix: "Oficjalny partner marki ",                 // Początek głównego nagłówka
    titleHighlight: "ASUS ROG",                              // Pogrubiona, niebieska część nagłówka
    description: "Kup płytę główną lub kartę graficzną ASUS i odbierz darmowy montaż oraz grę w prezencie!", // Krótki opis
    primaryBtnText: "Sprawdź promocję",                      // Napis na głównym (niebieskim) przycisku
    primaryBtnHref: "https://twoj-link.pl",                  // Link docelowy (strona partnera lub #kontakt)
    primaryBtnIcon: Sparkles,                                // Ikona przycisku (np. Sparkles, ShoppingBag, Wrench)
    secondaryBtnText: "Regulamin akcji",                     // (Opcjonalnie) Napis na drugim przycisku
    secondaryBtnHref: "#kontakt",                            // (Opcjonalnie) Link drugiego przycisku
    secondaryBtnIcon: Store,                                 // (Opcjonalnie) Ikona drugiego przycisku
    image: banerPromocja,                                    // Zaimportowana zmienna ze zdjęciem
  },
  =============================================================================
  */


];

const SLIDE_DURATION_MS = 10000;

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);
  const remainingRef = useRef(SLIDE_DURATION_MS);
  const startedAtRef = useRef(0);

  const setCategoryOnContact = (categoryId?: string) => {
    if (!categoryId) return;
    window.dispatchEvent(
      new CustomEvent("sft:setContactCategory", {
        detail: { categoryId },
      }),
    );
  };

  const goToSlide = (index: number) => {
    remainingRef.current = SLIDE_DURATION_MS;
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    remainingRef.current = SLIDE_DURATION_MS;
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    remainingRef.current = SLIDE_DURATION_MS;
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const togglePause = () => {
    if (!isPaused) {
      const elapsed = Date.now() - startedAtRef.current;
      remainingRef.current = Math.max(0, remainingRef.current - elapsed);
    }
    setIsPaused((paused) => !paused);
  };

  const scrollToServices = () => {
    document.getElementById("uslugi")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (isPaused) return;

    startedAtRef.current = Date.now();
    timerRef.current = window.setTimeout(() => {
      remainingRef.current = SLIDE_DURATION_MS;
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, remainingRef.current);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentSlide, isPaused]);

  return (
    <section id="top" className="relative w-full overflow-hidden pt-20 pb-0 lg:pt-30">
      <div className="relative flex min-h-[36rem] w-full flex-col justify-between overflow-hidden bg-slate-950 sm:min-h-[40rem] lg:min-h-[42rem]">
        {/* Tła slajdów */}
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-0 pointer-events-auto" : "opacity-0 -z-10 pointer-events-none"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.badge}
              className="h-full w-full object-cover object-center brightness-[0.62] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/55 to-transparent sm:w-4/5 lg:w-2/3" />
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950 to-transparent sm:h-36" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 to-transparent" />
          </div>
        ))}

        {/* Paski postępu — białe, dłuższe, na środku */}
        <div className="absolute left-1/2 top-5 z-20 flex w-72 -translate-x-1/2 items-center gap-2 sm:top-6 sm:w-96 lg:w-[28rem]">
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Przejdź do slajdu: ${slide.badge}`}
              className="group relative h-1 flex-1 overflow-hidden rounded-full bg-white/25 cursor-pointer"
            >
              {index < currentSlide && <div className="absolute inset-0 bg-white" />}
              {index === currentSlide && (
                <div
                  key={`fill-${currentSlide}`}
                  className={`absolute inset-y-0 left-0 w-0 rounded-full bg-white animate-hero-progress${isPaused ? " is-paused" : ""}`}
                />
              )}
              {index > currentSlide && (
                <div className="absolute inset-0 bg-white/25 transition-colors group-hover:bg-white/45" />
              )}
            </button>
          ))}
        </div>

        {/* Strzałki na desktopie — po bokach */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Poprzedni slajd"
          className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-slate-950/60 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-blue-600 lg:flex lg:left-8"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Następny slajd"
          className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-slate-950/60 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-blue-600 lg:flex lg:right-8"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Treść slajdów — wszystkie w jednym gridzie, wysokość = najwyższy (bez skakania) */}
        <div className="relative z-10 mx-auto my-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-12">
          <div className="grid max-w-2xl px-2 sm:px-4 lg:px-0">
            {HERO_SLIDES.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={slide.id}
                  className={`col-start-1 row-start-1 transition-opacity duration-500 ${
                    isActive ? "z-10 opacity-100" : "z-0 opacity-0 pointer-events-none"
                  }`}
                  aria-hidden={!isActive}
                >
                  <SectionBadge>{slide.badge}</SectionBadge>
                  <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
                    {slide.titlePrefix}
                    <span className="text-blue-400">{slide.titleHighlight}</span>
                  </h1>
                  <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300">{slide.description}</p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Button
                      href={slide.primaryBtnHref}
                      icon={slide.primaryBtnIcon}
                      tabIndex={isActive ? undefined : -1}
                      onClick={() => setCategoryOnContact(slide.categoryId)}
                    >
                      {slide.primaryBtnText}
                    </Button>

                    {slide.secondaryBtnText && slide.secondaryBtnHref && (
                      <Button
                        href={slide.secondaryBtnHref}
                        variant="secondary"
                        icon={slide.secondaryBtnIcon}
                        tabIndex={isActive ? undefined : -1}
                        onClick={() => setCategoryOnContact(slide.categoryId)}
                      >
                        {slide.secondaryBtnText}
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Strzałki na telefonie — pod tekstem, przy lewej i prawej krawędzi */}
          <div className="mt-8 flex items-center justify-between lg:hidden">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Poprzedni slajd"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-blue-600"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Następny slajd"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-blue-600"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Sprawdź nasze usługi + pauza po prawej */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-6 sm:px-6 lg:px-12 lg:pb-8">
          <div className="relative flex items-center border-t border-white/10 pt-5">
            <button
              type="button"
              onClick={scrollToServices}
              className="mx-auto flex cursor-pointer items-center justify-center gap-3 text-slate-200 transition-colors hover:text-white"
            >
              <ChevronDown className="h-4 w-4 animate-bounce" />
              <span className="text-sm font-semibold tracking-wide">Sprawdź nasze usługi</span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </button>

            <button
              type="button"
              onClick={togglePause}
              aria-label={isPaused ? "Wznów baner" : "Wstrzymaj baner"}
              className="absolute right-0 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white backdrop-blur-md transition-colors hover:bg-blue-600"
            >
              {isPaused ? <Play className="h-3.5 w-3.5 fill-current" /> : <Pause className="h-3.5 w-3.5 fill-current" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
