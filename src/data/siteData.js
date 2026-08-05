// Dane placeholder - do zastąpienia realnymi treściami klienta przed wdrożeniem produkcyjnym.

export const company = {
  name: "SFT Computers",
  claim: "Serwis komputerowy Kraków",
  phone: "TO-DO",
  phoneHref: "tel:+48123456789",
  email: "TO-DO",
  address: {
    street: "ul. Przykładowa 12",
    city: "30-001 Kraków",
    full: "TO-DO",
  },
  hours: [
    { days: "Poniedziałek – Piątek", hours: "10:00 – 18:00" },
    { days: "Sobota - Niedziela", hours: "Nieczynne" },
  ],
  registry: {
    company: "SFT Computers",
    nip: "NIP: TO-DO",
    krs: "KRS: TO-DO",
    regon: "REGON: TO-DO",
  },
  googleRating: {
    score: "4.9 / 5",
    reviewsCount: "128 opinii",
  },
};

export const navLinks = [
  { label: "Usługi", href: "#uslugi" },
  { label: "Komputery", href: "#konfigurator" },
  { label: "Sprzęt poleasingowy", href: "#poleasingowy" },
  { label: "Opinie", href: "#opinie" },
  { label: "Kontakt", href: "#kontakt" },
];

export const services = [
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
    bullets: ["Zdalna i stacjonarna pomoc", "Stałe pakiety abonamentowe", "Reakcja tego samego dnia"],
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

export const pcParts = [
  {
    id: "cpu",
    label: "Procesor (CPU)",
    position: { top: "28%", left: "50%" },
    title: "Procesor - mózg Twojego komputera",
    description:
      "TO-DO",
  },
  {
    id: "gpu",
    label: "Karta graficzna (GPU)",
    position: { top: "58%", left: "28%" },
    title: "Karta graficzna - płynność w Twoich ulubionych tytułach",
    description:
      "TO-DO",
  },
  {
    id: "chlodzenie",
    label: "Chłodzenie",
    position: { top: "18%", left: "72%" },
    title: "Chłodzenie - cichy komputer, który żyje dłużej",
    description:
      "TO-DO",
  },
  {
    id: "ram",
    label: "Pamięć RAM",
    position: { top: "68%", left: "70%" },
    title: "Pamięć RAM - płynne przełączanie się między zadaniami",
    description:
      "TO-DO",
  },
  {
    id: "obudowa",
    label: "Obudowa",
    position: { top: "42%", left: "18%" },
    title: "Obudowa - wygląd, chłodzenie i miejsce na rozbudowę",
    description:
      "TO-DO",
  },
  {
    id: "dysk",
    label: "Dysk",
    position: { top: "78%", left: "42%" },
    title: "Dysk - szybki start systemu i bezpieczeństwo danych",
    description:
      "TO-DO",
  },
  {
    id: "zasilacz",
    label: "Zasilacz",
    position: { top: "82%", left: "78%" },
    title: "Zasilacz - stabilna moc i bezpieczeństwo podzespołów",
    description:
      "TO-DO",
  },
];

export const refurbishedHighlights = [
  {
    title: "Nawet X% niższa cena",
    description: "Sprzęt klasy biznesowej w cenie znacznie niższej niż nowe modele o podobnych parametrach.",
    icon: "PiggyBank",
  },
  {
    title: "X miesięcy gwarancji",
    description: "Każdy laptop i komputer przechodzi pełny serwis i testy przed sprzedażą.",
    icon: "ShieldCheck",
  },
  {
    title: "Sprawdzona niezawodność",
    description: "Marki takie jak Dell, HP i Lenovo, wcześniej używane w firmach - solidne i przetestowane.",
    icon: "BadgeCheck",
  },
];

export const testimonials = [
  {
    name: "TO-DO",
    role: "TO-DO",
    rating: 5,
    quote:
      "TO-DO.",
  },
  {
    name: "TO-DO",
    role: "TO-DO",
    rating: 5,
    quote:
      "TO-DO",
  },
  {
    name: "TO-DO",
    role: "TO-DO",
    rating: 5,
    quote:
      "TO-DO",
  },
];

export const footerLinks = [
  {
    heading: "Oferta",
    links: [
      { label: "Serwis i naprawa", href: "#uslugi" },
      { label: "Opieka IT dla firm", href: "#uslugi" },
      { label: "Odzyskiwanie danych", href: "#uslugi" },
      { label: "Komputery do gier", href: "#konfigurator" },
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
