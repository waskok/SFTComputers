import { useEffect, useState, useRef } from "react";
import {
  Clock3,
  ShieldCheck,
  ShoppingBag,
  Wrench,
  MonitorSmartphone,
  ChevronLeft,
  ChevronRight,
  Store,
  Sparkles,
  Gamepad2,
  Laptop,
} from "lucide-react";
import Button from "./ui/Button";
import SectionBadge from "./ui/SectionBadge";
import Reveal from "./ui/Reveal";
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
    id: "serwis",
    badge: "Serwis i Naprawa w Krakowie",
    titlePrefix: "Szybka naprawa i serwis sprzętu ",
    titleHighlight: "w Krakowie",
    description:
      "Diagnozujemy i naprawiamy komputery oraz laptopy bez zbędnego czekania. Zajmujemy się opieką IT dla firm, czyszczeniem układów chłodzenia i wymianą podzespołów.",
    primaryBtnText: "Zgłoś awarię",
    primaryBtnHref: "#kontakt",
    primaryBtnIcon: Wrench,
    secondaryBtnText: "Skonfiguruj PC",
    secondaryBtnHref: "#konfigurator",
    secondaryBtnIcon: MonitorSmartphone,
    categoryId: "serwis",
    image: serviceImage,
  },
  {
    id: "pc-build",
    badge: "Komputery na zamówienie",
    titlePrefix: "Indywidualne składanie komputerów ",
    titleHighlight: "pod Twój budżet",
    description:
      "Gaming, rendering czy stacje biurowe. Precyzyjny dobór podzespołów bez przepłacania za niewykorzystaną moc, estetyczny cable management i pełne testy stabilności.",
    primaryBtnText: "Otwórz konfigurator PC",
    primaryBtnHref: "#konfigurator",
    primaryBtnIcon: MonitorSmartphone,
    secondaryBtnText: "Zgłoś zapytanie",
    secondaryBtnHref: "#kontakt",
    secondaryBtnIcon: Wrench,
    categoryId: "konfiguracja-pc",
    image: pcBuildingImage,
  },
  {
    id: "sklep-gaming",
    badge: "Sklep stacjonarny w Krakowie",
    titlePrefix: "Karty graficzne, peryferia i ",
    titleHighlight: "sprzęt gamingowy",
    description:
      "Najnowsze karty graficzne, podzespoły komputerowe, klawiatury mechaniczne, myszki, pasty termoprzewodzące i akcesoria dostępne od ręki w naszym lokalu w Krakowie.",
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

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<number | null>(null);

  const setCategoryOnContact = (categoryId?: string) => {
    if (!categoryId) return;
    window.dispatchEvent(
      new CustomEvent("sft:setContactCategory", {
        detail: { categoryId },
      }),
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    if (isHovered) return;
    timerRef.current = window.setInterval(nextSlide, 7000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, currentSlide]);

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section id="top" className="relative w-full overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-32 lg:pb-20">
      <div
        className="relative min-h-[44rem] sm:min-h-[46rem] lg:min-h-[48rem] w-full overflow-hidden bg-slate-950 flex flex-col justify-between"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
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
              className="h-full w-full object-cover object-center brightness-[0.35] contrast-[1.08]"
            />
            {/* Gradient dla czytelności tekstu z lewej strony */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent sm:w-4/5 lg:w-2/3" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
          </div>
        ))}

        {/* Górne wskaźniki paskowe (Progress bar) */}
        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pt-8 sm:px-10 lg:px-12">
          <div className="flex items-center gap-3">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Przejdź do slajdu: ${slide.badge}`}
                className="group relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/20 transition-all cursor-pointer"
              >
                <div
                  className={`h-full bg-white transition-all duration-300 ${
                    index === currentSlide ? "w-full bg-blue-500" : "w-0 group-hover:w-full group-hover:bg-white/50"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Strzałki nawigacyjne */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Poprzedni slajd"
          className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-slate-950/60 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-blue-600 sm:left-8"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Następny slajd"
          className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-slate-950/60 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-blue-600 sm:right-8"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Główna treść aktywnego slajdu */}
        <div className="relative z-10 mx-auto my-auto w-full max-w-7xl px-6 py-12 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <Reveal key={activeSlide.id}>
              <SectionBadge>{activeSlide.badge}</SectionBadge>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
                {activeSlide.titlePrefix}
                <span className="text-blue-400">{activeSlide.titleHighlight}</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300">
                {activeSlide.description}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  href={activeSlide.primaryBtnHref}
                  icon={activeSlide.primaryBtnIcon}
                  onClick={() => setCategoryOnContact(activeSlide.categoryId)}
                >
                  {activeSlide.primaryBtnText}
                </Button>

                {activeSlide.secondaryBtnText && activeSlide.secondaryBtnHref && (
                  <Button
                    href={activeSlide.secondaryBtnHref}
                    variant="secondary"
                    icon={activeSlide.secondaryBtnIcon}
                    onClick={() => setCategoryOnContact(activeSlide.categoryId)}
                  >
                    {activeSlide.secondaryBtnText}
                  </Button>
                )}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Dolne stałe atuty serwisu - wyśrodkowane */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10 sm:px-10 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-12 sm:gap-x-16 gap-y-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-800/40 bg-blue-950/80 text-blue-400">
                <Clock3 className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-white">Naprawa w 24-48h</p>
                <p className="text-xs text-slate-400">w większości przypadków</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-800/40 bg-blue-950/80 text-blue-400">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-white">Gwarancja na usługi</p>
                <p className="text-xs text-slate-400">spokój na dłużej</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-800/40 bg-blue-950/80 text-blue-400">
                <ShoppingBag className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-white">Sklep stacjonarny</p>
                <p className="text-xs text-slate-400">Kable, podzespoły i sprzęt na miejscu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}