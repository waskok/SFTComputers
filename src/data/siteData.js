// Dane placeholder — do zastąpienia realnymi treściami klienta przed wdrożeniem produkcyjnym.

export const company = {
  name: "SFT Computers",
  claim: "Serwis komputerowy Kraków",
  phone: "+48 123 456 789",
  phoneHref: "tel:+48123456789",
  email: "kontakt@sftcomputers.pl",
  address: {
    street: "ul. Przykładowa 12",
    city: "30-001 Kraków",
    full: "ul. Przykładowa 12, 30-001 Kraków",
  },
  hours: [
    { days: "Poniedziałek – Piątek", hours: "9:00 – 18:00" },
    { days: "Sobota", hours: "10:00 – 14:00" },
  ],
  registry: {
    company: "SFT Computers Sp. z o.o.",
    nip: "NIP: 000-000-00-00",
    krs: "KRS: 0000000000",
    regon: "REGON: 000000000",
  },
  googleRating: {
    score: "4.9 / 5",
    reviewsCount: "128 opinii",
  },
};

export const navLinks = [
  { label: "Usługi", href: "#uslugi" },
  { label: "Komputery do gier", href: "#konfigurator" },
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
    title: "Procesor — mózg Twojego komputera",
    description:
      "Dobieramy procesor dopasowany do gier i programów, w których grasz najczęściej. Dzięki temu płacisz tylko za moc, którą realnie wykorzystasz — bez przepłacania za niepotrzebne parametry.",
  },
  {
    id: "gpu",
    label: "Karta graficzna (GPU)",
    position: { top: "58%", left: "28%" },
    title: "Karta graficzna — płynność w Twoich ulubionych tytułach",
    description:
      "To ona odpowiada za liczbę klatek na sekundę i jakość grafiki. Podpowiemy, który model zapewni płynną rozgrywkę w rozdzielczości i detalach, na jakich Ci zależy.",
  },
  {
    id: "chlodzenie",
    label: "Chłodzenie",
    position: { top: "18%", left: "72%" },
    title: "Chłodzenie — cichy komputer, który żyje dłużej",
    description:
      "Dobrze dobrane chłodzenie oznacza niższe temperatury, cichszą pracę i dłuższą żywotność podzespołów — nawet podczas najbardziej intensywnych sesji grania.",
  },
  {
    id: "ram",
    label: "Pamięć RAM",
    position: { top: "68%", left: "70%" },
    title: "Pamięć RAM — płynne przełączanie się między zadaniami",
    description:
      "Odpowiednia ilość i szybkość pamięci RAM to gwarancja, że gra nie zwolni nawet z Discordem, przeglądarką i streamem działającymi w tle.",
  },
];

export const refurbishedHighlights = [
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
    description: "Marki takie jak Dell, HP i Lenovo, wcześniej używane w firmach — solidne i przetestowane.",
    icon: "BadgeCheck",
  },
];

export const testimonials = [
  {
    name: "Marek Nowak",
    role: "Klient indywidualny",
    rating: 5,
    quote:
      "Laptop odmówił posłuszeństwa tuż przed ważnym projektem. W SFT naprawili go tego samego dnia i jeszcze wyjaśnili, co się stało. Polecam każdemu.",
  },
  {
    name: "Anna Kowalska",
    role: "Właścicielka salonu kosmetycznego",
    rating: 5,
    quote:
      "Korzystamy z opieki IT dla firm od roku. Wreszcie nie musimy się martwić o komputery — jeden telefon i problem szybko zniknie.",
  },
  {
    name: "Piotr Zieliński",
    role: "Gracz, klient konfiguratora PC",
    rating: 5,
    quote:
      "Zamówiłem u nich komputer do gier pod konkretny budżet. Doradzili podzespoły, których sam bym nie wybrał — i gra śmiga świetnie.",
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
