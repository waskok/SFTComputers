// Dane placeholder - do zastąpienia realnymi treściami klienta przed wdrożeniem produkcyjnym.

export interface AddressInfo {
  street: string;
  city: string;
  full: string;
}

export interface HoursSlot {
  days: string;
  hours: string;
}

export interface RegistryInfo {
  company: string;
  nip: string;
  krs: string;
  regon: string;
}

export interface GoogleRatingInfo {
  score: string;
  reviewsCount: string;
}

export interface CompanyData {
  name: string;
  claim: string;
  phone: string;
  phoneHref: string;
  email: string;
  address: AddressInfo;
  hours: HoursSlot[];
  registry: RegistryInfo;
  googleRating: GoogleRatingInfo;
  mapsUrl: string;
  mapsEmbedUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export type ServiceIconName = "Wrench" | "Store" | "MonitorSmartphone";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: ServiceIconName;
}

export interface PcPartPosition {
  top: string;
  left: string;
}

export interface PcPart {
  id: string;
  label: string;
  position: PcPartPosition;
  title: string;
  description: string;
}

export type RefurbishedIconName = "PiggyBank" | "ShieldCheck" | "BadgeCheck";

export interface RefurbishedHighlight {
  title: string;
  description: string;
  icon: RefurbishedIconName;
}

export interface Opinion {
  name: string;
  rating: number;
  text: string;
}

export interface FooterLinkColumn {
  heading: string;
  links: NavLink[];
}

export interface ContactCategory {
  id: string;
  label: string;
}

// Hash pod którym otwiera się "podstrona" polityki prywatności (patrz App.tsx) -
// używany zarówno do linkowania do niej, jak i do wykrywania, że ma być widoczna.
export const privacyPolicyHash = "#polityka-prywatnosci";

/** Website ID widgetu Crisp Chat — skrypt ładujemy dopiero po zgodzie na cookies. */
export const crispWebsiteId = "131bfb46-4d68-4429-a261-e06023033820";

export const company: CompanyData = {
  name: "SFT Computers",
  claim: "Serwis komputerowy Kraków",
  phone: "12 640 10 50",
  phoneHref: "tel:+48126401050",
  email: "sklep@sft.net.pl",
  address: {
    street: "Osiedle 2 Pułku Lotniczego 1E",
    city: "31-867 Kraków",
    full: "Osiedle 2 Pułku Lotniczego 1E, 31-867 Kraków",
  },
  hours: [
    { days: "Poniedziałek - Piątek", hours: "10:00 - 18:00" },
    { days: "Sobota - Niedziela", hours: "Nieczynne" },
  ],
  registry: {
    company: "SFT COMPUTERS M.KUBIŃSKI SPÓŁKA JAWNA",
    nip: "NIP: 6782002498",
    krs: "KRS: 0000084555",
    regon: "REGON: 35116762700000",
  },
  googleRating: {
    score: "4.8 / 5",
    reviewsCount: "150+ opinii Google",
  },
  mapsUrl:
    "https://www.google.com/maps/place/SFT+Computers/@50.0790951,20.0142603,17z/data=!3m1!4b1!4m6!3m5!1s0x47164545b70faf69:0xeefc72e925ce152!8m2!3d50.0790951!4d20.0142603!16s%2Fg%2F1pp2tzr35",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.503384876389456!2d20.011685313451903!3d50.0790951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47164545b70faf69%3A0xeefc72e925ce152!2sSFT%20Computers!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl",
};

export const navLinks: NavLink[] = [
  { label: "Usługi", href: "#uslugi" },
  { label: "Komputery", href: "#konfigurator" },
  { label: "Sprzęt poleasingowy", href: "#poleasingowy" },
  { label: "Opinie", href: "#opinie" },
  { label: "Kontakt", href: "#kontakt" },
];

export const services: ServiceItem[] = [
  {
    id: "serwis",
    title: "Serwis i naprawa",
    description:
      "Szybko diagnozujemy usterkę i przywracamy urządzenie do życia. Odbierasz w pełni sprawny sprzęt na jasnych zasadach i bez ukrytych opłat.",
    bullets: ["Bezpłatna diagnoza usterki", "Naprawa najczęściej w 24-48h", "Gwarancja na wykonaną usługę"],
    icon: "Wrench",
  },
  {
    id: "sklep",
    title: "Sklep stacjonarny",
    description:
      "Salon w Krakowie z podzespołami, akcesoriami i sprzętem IT. Oferujemy produkty dostępne od ręki oraz sprowadzane na zamówienie.",
    bullets: [
      "Sprzęt i akcesoria od ręki",
      "Zamówienia indywidualne",
      "Doradztwo przy wyborze sprzętu",
    ],
    icon: "Store",
  },
  {
    id: "konfiguracja-pc",
    title: "Składanie i konfiguracja PC",
    description:
      "Budujemy komputer pod Twój budżet i zastosowanie - od zestawów gamingowych po maszyny do pracy i nauki, bez przepłacania za zbędną moc.",
    bullets: ["Gaming, praca i codzienny użytek", "Dobór podzespołów pod budżet", "Montaż, testy i konfiguracja systemu"],
    icon: "MonitorSmartphone",
  },
];

export const pcParts: PcPart[] = [
  {
    id: "cpu",
    label: "Procesor (CPU)",
    position: { top: "40%", left: "41%" },
    title: "Procesor - mózg Twojego komputera",
    description: "Dobieramy procesor tak, aby idealnie pasował do Twoich potrzeb. Zamiast wciskać najdroższy model, szukamy złotego środka. Dzięki temu komputer działa błyskawicznie, a Ty nie przepłacasz za moc, której nie wykorzystasz.",
  },
  {
    id: "gpu",
    label: "Karta graficzna (GPU)",
    position: { top: "56%", left: "23%" },
    title: "Karta graficzna - płynność w Twoich ulubionych tytułach",
    description: "To ona odpowiada za generowanie obrazu i klatek na sekundę. Dostosujeny ją w taki sposób, aby pozostałe komponenty nie ograniczały jej mocy.",
  },
  {
    id: "chlodzenie",
    label: "Chłodzenie",
    position: { top: "62%", left: "75%" },
    title: "Chłodzenie - cichy komputer, który żyje dłużej",
    description: "Koniec z komputerem wyjącym jak odkurzacz. Projektujemy ciche i chłodne zestawy, które działają stabilnie nawet podczas wielogodzinnego grania czy pracy. Chłodny sprzęt to sprzęt, który służy latami.",
  },
  {
    id: "ram",
    label: "Pamięć RAM",
    position: { top: "45%", left: "56%" },
    title: "Pamięć RAM - płynne przełączanie się między zadaniami",
    description: "Kilka programów, zakładki w przeglądarce, gra w tle i Spotify? Żaden problem. Używamy szybkich i sprawdzonych pamięci, które pozwolą Ci na płynną pracę z wieloma programami naraz, bez najmniejszych zacięć.",
  },
  {
    id: "obudowa",
    label: "Obudowa",
    position: { top: "39%", left: "89%" },
    title: "Obudowa - wygląd, chłodzenie i miejsce na rozbudowę",
    description: "Selekcjonujemy konstrukcje łączące estetykę z odpowiednią wentylacją. Profesjonalnie układamy i chowamy każdy przewód, co poprawia przepływ powietrza i ułatwia rozbudowę.",
  },
  {
    id: "dysk",
    label: "Dysk",
    position: { top: "64%", left: "39%" },
    title: "Dysk - szybki start systemu i bezpieczeństwo danych",
    description: "Stosujemy tylko nowoczesne dyski, dzięki którym system uruchamia się błyskawicznie, a gry ładują się w mgnieniu oka. Zależy nam na Twoim spokoju, dlatego stawiamy na sprawdzone marki, by Twoje dane były zawsze bezpieczne.",
  },
  {
    id: "zasilacz",
    label: "Zasilacz",
    position: { top: "78%", left: "22%" },
    title: "Zasilacz - stabilna moc i bezpieczeństwo podzespołów",
    description: "Dobieramy jednostki z certyfikatem sprawności oraz zapasem mocy, dostosowane do specyfiki zestawu. To stabilne napięcia i pełny pakiet zabezpieczeń, stanowiące gwarancję bezawaryjnej pracy całego systemu.",
  },
];

export const refurbishedHighlights: RefurbishedHighlight[] = [
  {
    title: "Nawet 40% niższa cena",
    description: "Sprzęt klasy biznesowej w cenie znacznie niższej niż nowe modele o podobnych parametrach.",
    icon: "PiggyBank",
  },
  {
    title: "12 miesięcy gwarancji",
    description: "Każdy laptop i komputer przechodzi pełny serwis i testy przed sprzedażą.",
    icon: "ShieldCheck",
  },
  {
    title: "Sprawdzona niezawodność",
    description: "Renomowane marki takie jak Dell, HP i Lenovo, wcześniej używane w firmach - solidne i przetestowane.",
    icon: "BadgeCheck",
  },
];

export const opinions: Opinion[] = [
  { name: "Mateusz Jajeśnica", rating: 5, text: "Ekspresowa diagnoza, ekspresowa naprawa. Super miły Pan obsługujący. Polecam z czystego serca." },
  { name: "Urszula Ryznar", rating: 5, text: "Już któryś raz przyszłam po pomoc w awaryjnej sytuacji i Panowie kompetentnie podeszli do problemu, po raz kolejny dobrali odpowiedni sprzęt 😊 bardzo dziękuję, że względu na wyjazd nie miałam czasu podejść podziękować osobiście😊" },
  { name: "Włodzimierz", rating: 5, text: "Bardzo miła i pomocna obsługa, w kilka minut nauczyli mnie - komputerowego analfabetę - jak wymienić zasilacz. Na pewno będę tu zaglądał w razie przyszłych usterek. Bardzo dziękuję za pomoc w naprawie mojego złoma." },
  { name: "Oskar", rating: 5, text: "Serdecznie polecam to miejsce! Miła obsługa, konkretna i rzeczowa. Diagnoza usterki bardzo szybka, (w moim przypadku awaria systemu chłodzenia w laptopie gamingowym) naprawa również błyskawiczna. Laptop śmiga, aż miło 😁 Dziękuję jeszcze raz za profesjonalną pomoc!" },
  { name: "Monika Rogoza", rating: 5, text: "Jestem bardzo zadowolona z usług tego serwisu komputerowego. Naprawa została wykonana szybko. Komputer odebrałam już następnego dnia, w pełni sprawny. Wszystko działa bez zarzutu i bardzo szybko. Pan był niezwykle cierpliwy i uprzejmy, odpowiadał na wszystkie moje pytania. Zostałam dokładnie i rzeczowo skonsultowana. Serdecznie polecam ten serwis! 😉" },
  { name: "Panajota C", rating: 5, text: "Bardzo profesjonalna, fachowa, życzliwa i miła obsługa. Panowie w ciągu paru minut wybawili mnie z kłopotu, który miałam z laptopem. Bardzo dziękuję za pomoc. POLECAM TEN SERWIS." },
  { name: "Ewelina Wojtacha", rating: 5, text: "Dwukrotnie pomogli mi z laptopem, który zawieszał się w ładowaniu i nie mogłam go włączyć. Dzięki nim szybko mogłam korzystać ze sprzętu. Od ręki i miło mnie obsłużyli." },
  { name: "Michał Nowak", rating: 5, text: "Fachowa pomoc w rozsądnych pieniądzach. Podejście do klienta bardzo dobre. Polecam z problemami" },
  { name: "Maciej Mikuszewski", rating: 5, text: "Wielokrotnie korzystałem z usług serwisu i za każdym razem wyszedłem naprawdę zadowolony. Panowie rozmowni, zawsze chętnie wszystko wyjaśnią, doradzą i polecą najlepsze rozwiązanie. Wyznaczają realne terminy odbioru sprzętu, nigdy nic się nie opóźniło. Dbają o powierzony sprzęt. Cenowo zawsze uczciwie. Polecam!" },
  { name: "Barti S", rating: 5, text: "Obsługa bardzo szybka, wyszedłem przed chwilą a przyszedłem tylko po śruby do dysku. Atmosfera ocena na 6 i obsługa jak i ich poczucie humoru tak samo na ocenę celującą. Polecam bo naprawę dostaniecie i akcesoria do komputera też dostaniecie. Polecam" },
  { name: "Kasia Solecka", rating: 5, text: "Mega polecam! Panowie bardzo mili i profesjonalni. Naprawili mój laptop szybko i porządnie, podczas naprawy informowali mnie na bieżąco o procesie i pytali o moje preferencje wymiany elementów. Zdecydowanie polecam każdemu i sama też nieraz skorzystam! :)" },
  { name: "Jola Libera", rating: 5, text: "Bardzo uprzejme, kulturalne i profesjonalne podejście do klienta. Szybka diagnoza i naprawa z uprzednim poinformowaniem o wszystkim, łącznie z kosztami. Informacje o każdych plusach i minusach komputera. Z całego serca mogę polecić każdemu! :)" },
  { name: "Joanna Tatarczuch-Pawlik", rating: 5, text: "Świetna obługa, profesjonalna i bardzo uprzejma. Szybka i skuteczna naprawa sprzętu. Gorąco polecam." },
  { name: "Jakub Dziwura", rating: 5, text: "Szybka i trafna diagnoza komputera, bez naciągania na koszty." },
  { name: "Katarzyna", rating: 5, text: "Szanowni Czytelnicy, jestem szczerze zachwycona profesjonalizmem pracujących w Sklepie Specjalistów, którzy z pasją zdiagnozowali usterki i dokonali naprawy laptopa. Dzięki fachowemu doradztwu Pracowników Sklepu zakupiłam dwa nowe laptopy i wybór ich był strzałem w dziesiątkę. Solidny, najwyższej klasy sprzęt, profesjonalizm w obsłudze klienta i korzystne ceny to cechy SFT Computers. Polecam każedemu." },
  { name: "Agata Gąsiorek", rating: 5, text: "Dołączam do chóru bardzo zadowolonych klientów - oprócz szerokiego asortymentu, rozległej wiedzy, fachowego doradztwa, ekspresowego i rzetelnego serwisu za na prawdę rozsądne pieniądze, jest coś równie istotnego - w SFT jesteś ważny Ty, Twój sprzęt i problem z którym przyszedłeś oraz jego rozwiązanie, na pewno nie zadasz tam głupiego pytania bo takie mogą być tylko odpowiedzi ;)" },
  { name: "Hanka", rating: 5, text: "Szczerze polecam - super specjaliści, a co najważniejsze, potrafią przemówić językiem zrozumiałym dla laika. Szybko i sprawnie uratowali mój zalany komputer :) 5 gwiazdek w pełni zasłużone." },
  { name: "Małgorzata Pasierska", rating: 5, text: "Serdecznie POLECAM!! Profesjonalny serwis i podejście do klienta" },
  { name: "Paweł Bober", rating: 5, text: "Profesjonalnie, miła obsługa. Polecam." },
];

export const contactCategories: ContactCategory[] = [
  { id: "serwis", label: "Serwis / naprawa sprzętu" },
  { id: "sklep", label: "Sklep stacjonarny / dostępność produktu" },
  { id: "konfiguracja-pc", label: "Składanie i konfiguracja PC" },
  { id: "poleasingowy", label: "Sprzęt poleasingowy" },
  { id: "wspolpraca", label: "Zapytanie o współpracę" },
  { id: "inny-problem", label: "Inny problem" },
];

export const footerLinks: FooterLinkColumn[] = [
  {
    heading: "Oferta",
    links: [
      { label: "Serwis i naprawa", href: "#uslugi" },
      { label: "Sklep stacjonarny", href: "#uslugi" },
      { label: "Składanie i konfiguracja PC", href: "#konfigurator" },
      { label: "Sprzęt poleasingowy", href: "#poleasingowy" },
    ],
  },
  {
    heading: "Firma",
    links: [
      { label: "Opinie klientów", href: "#opinie" },
      { label: "Kontakt", href: "#kontakt" },
      { label: "Polityka prywatności", href: privacyPolicyHash },
    ],
  },
];

export const categoryPlaceholders: Record<string, string> = {
  serwis: "Opisz zaobserwowane objawy usterki oraz jakiego urządzenia dotyczą",

  sklep: "Podaj nazwę lub model poszukiwanego produktu - sprawdzimy dostępność w sklepie stacjonarnym",

  "konfiguracja-pc":
    "Określ przewidywany budżet, główne zastosowanie komputera (gry, praca, obróbka wideo) oraz indywidualne preferencje",

  poleasingowy: "Określ typ poszukiwanego sprzętu (laptop czy komputer stacjonarny) oraz wymagania dotyczące wydajności lub budżetu",

  wspolpraca: "Krótko opisz propozycję współpracy",

  "inny-problem": "Opisz krótko, w czym możemy Ci pomóc",
};

export const defaultMessagePlaceholder = "Opisz krótko, w czym możemy Ci pomóc...";
