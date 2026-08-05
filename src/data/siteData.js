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
    score: "4.8 / 5",
    reviewsCount: "+140 opinii",
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
