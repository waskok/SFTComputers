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

export type ServiceIconName = "Wrench" | "Building2" | "DatabaseBackup";

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

export const company: CompanyData = {
  name: "SFT Computers",
  claim: "Serwis komputerowy Kraków",
  phone: "12 640 10 50",
  phoneHref: "tel:+48126401050",
  email: "biuro@sft.net.pl",
  address: {
    street: "Osiedle 2 Pułku Lotniczego 1E",
    city: "31-867 Kraków",
    full: "Osiedle 2 Pułku Lotniczego 1E, 31-867 Kraków",
  },
  hours: [
    { days: "Poniedziałek – Piątek", hours: "10:00 – 18:00" },
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
    reviewsCount: "opinie Google",
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
      "Szybka diagnoza i naprawa komputerów oraz laptopów. Oddajesz sprzęt sprawny, bez zbędnego czekania i niejasnych kosztów.",
    bullets: ["Bezpłatna diagnoza usterki", "Naprawa najczęściej w 24–48h", "Gwarancja na wykonaną usługę"],
    icon: "Wrench",
  },
  {
    id: "it-firmy",
    title: "Opieka IT dla firm",
    description:
      "Stały nadzór nad sprzętem i siecią w Twojej firmie. Mniej przestojów, szybsza pomoc i jeden numer do wszystkich problemów IT.",
    bullets: ["Zdalna i stacjonarna pomoc", "Bezpieczeństwo danych", "Reakcja tego samego dnia"],
    icon: "Building2",
  },
  {
    id: "dane",
    title: "Odzyskiwanie danych",
    description:
      "Utracone zdjęcia, dokumenty czy baza klientów? Odzyskujemy dane z dysków, kart pamięci i uszkodzonych nośników.",
    bullets: ["Dyski HDD, SSD i pendrive'y", "Bezpieczna, poufna procedura", "Płatność tylko za sukces"],
    icon: "DatabaseBackup",
  },
];

export const pcParts: PcPart[] = [
  {
    id: "cpu",
    label: "Procesor (CPU)",
    position: { top: "28%", left: "50%" },
    title: "Procesor - mózg Twojego komputera",
    description: "Precyzyjnie dobieramy jednostkę pod kątem Twoich wymagań, dbając o idealne zbalansowanie zestawu. Eliminujemy zjawisko bottlenecku, dzięki czemu wykorzystujesz pełen potencjał procesora bez nadmiarowych kosztów.",
  },
  {
    id: "gpu",
    label: "Karta graficzna (GPU)",
    position: { top: "58%", left: "28%" },
    title: "Karta graficzna - płynność w Twoich ulubionych tytułach",
    description: "Kluczowy element odpowiadający za generowanie obrazu i klatek na sekundę. Konfigurujemy ją w taki sposób, aby pozostałe komponenty nie ograniczały jej mocy, co gwarantuje maksymalną płynność w najwyższych ustawieniach.",
  },
  {
    id: "chlodzenie",
    label: "Chłodzenie",
    position: { top: "18%", left: "72%" },
    title: "Chłodzenie - cichy komputer, który żyje dłużej",
    description: "Stosujemy przemyślane układy chłodzenia oraz optymalną cyrkulację powietrza, zapobiegając throtlingowi termicznemu. Prawidłowy montaż przekłada się na niskie temperatury i kulturę pracy sprzętu nawet przy ekstremalnym obciążeniu.",
  },
  {
    id: "ram",
    label: "Pamięć RAM",
    position: { top: "68%", left: "70%" },
    title: "Pamięć RAM - płynne przełączanie się między zadaniami",
    description: "Wybieramy sprawdzone moduły o wysokiej przepustowości i niskich opóźnieniach. Zapewniają one stabilność platformy, optymalną współpracę z procesorem oraz bezproblemową pracę wielozadaniową.",
  },
  {
    id: "obudowa",
    label: "Obudowa",
    position: { top: "42%", left: "18%" },
    title: "Obudowa - wygląd, chłodzenie i miejsce na rozbudowę",
    description: "Selekcjonujemy konstrukcje łączące estetykę z odpowiednią wentylacją. Profesjonalny cable management we wnętrzu obudowy zapewnia niezakłócony przepływ powietrza i ułatwia ewentualną rozbudowę w przyszłości.",
  },
  {
    id: "dysk",
    label: "Dysk",
    position: { top: "78%", left: "42%" },
    title: "Dysk - szybki start systemu i bezpieczeństwo danych",
    description: "Wykorzystujemy wyselekcjonowane dyski M.2 NVMe o wysokich parametrach odczytu i zapisu. Gwarantują one błyskawiczny start systemu, natychmiastowe wczytywanie gier oraz wysokie bezpieczeństwo przechowywanych danych.",
  },
  {
    id: "zasilacz",
    label: "Zasilacz",
    position: { top: "82%", left: "78%" },
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
  { id: "dostepnosc", label: "Dostępność produktu w sklepie" },
  { id: "konfiguracja-pc", label: "Konfiguracja PC na zamówienie" },
  { id: "serwis", label: "Serwis / naprawa sprzętu" },
  { id: "dane", label: "Odzyskiwanie danych" },
  { id: "it-firmy", label: "Opieka IT dla firmy" },
  { id: "poleasingowy", label: "Sprzęt poleasingowy" },
  { id: "inny-problem", label: "Inny problem" },
];

export const footerLinks: FooterLinkColumn[] = [
  {
    heading: "Oferta",
    links: [
      { label: "Serwis i naprawa", href: "#uslugi" },
      { label: "Opieka IT dla firm", href: "#uslugi" },
      { label: "Odzyskiwanie danych", href: "#uslugi" },
      { label: "Konfiguracja komputerów na zamówienie", href: "#konfigurator" },
      { label: "Sprzęt poleasingowy", href: "#poleasingowy" },
    ],
  },
  {
    heading: "Firma",
    links: [
      { label: "Opinie klientów", href: "#opinie" },
      { label: "Kontakt", href: "#kontakt" },
      { label: "Polityka prywatności", href: "#" },
      { label: "Regulamin", href: "#" },
    ],
  },
];

export const categoryPlaceholders: Record<string, string> = {
  dostepnosc: "Podaj nazwę, model lub kod poszukiwanego komponentu bądź akcesorium...",

  "konfiguracja-pc": "Określ przewidywany budżet, główne zastosowanie komputera (gry, praca, obróbka wideo) oraz indywidualne preferencje...",

  serwis: "Opisz zaobserwowane objawy usterki (np. brak reakcji na włącznik, wyłączanie pod obciążeniem, głośna praca układu chłodzenia)...",

  dane: "Wskaż rodzaj nośnika (dysk SSD, HDD, pendrive) oraz opisz okoliczności, w jakich doszło do utraty dostępu do plików...",

  "it-firmy": "Przedstaw krótko profil działalności, liczbę stanowisk komputerowych oraz zakres oczekiwanego wsparcia technicznego...",
  
  poleasingowy: "Określ typ poszukiwanego sprzętu (laptop czy komputer stacjonarny) oraz wymagania dotyczące wydajności lub budżetu...",
  "inny-problem": "Opisz krótko, w czym możemy Ci pomóc...",
};

export const defaultMessagePlaceholder = "Opisz krótko, w czym możemy Ci pomóc...";
