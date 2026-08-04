# SFT Computers — strona landing page

Szkielet nowoczesnej strony typu landing page dla serwisu komputerowego **SFT Computers** (Kraków).
Zbudowany jako statyczna aplikacja **React + Tailwind CSS (v4) + Vite**, gotowa do wgrania na serwer FTP
jako statyczny build.

## Stos technologiczny

- **React 19** — komponenty funkcyjne
- **Tailwind CSS v4** (`@tailwindcss/vite`) — utility-first, jasna paleta (biel/szarości + błękit `blue-600` jako akcent)
- **Vite** — bundler / dev server
- **lucide-react** — ikony SVG (bez emoji)

## Struktura komponentów (`src/components`)

| Komponent | Sekcja |
|---|---|
| `Header.jsx` | Nawigacja + logo + CTA "Zadzwoń" (sticky, glass effect) |
| `Hero.jsx` | Nagłówek z korzyścią, 2× CTA, wskaźniki zaufania |
| `Services.jsx` | 3 karty usług (Serwis, Opieka IT, Odzyskiwanie danych) |
| `PcBuilder.jsx` | Interaktywny konfigurator PC z hotspotami (CPU/GPU/Chłodzenie/RAM) |
| `RefurbishedHardware.jsx` | Sprzęt poleasingowy — oszczędność i gwarancja |
| `Testimonials.jsx` | Opinie klientów + ocena Google |
| `Contact.jsx` | Formularz kontaktowy + dane adresowe + placeholder mapy Google |
| `Footer.jsx` | Stopka: nawigacja, dane rejestrowe, social media |
| `ui/Button.jsx`, `ui/SectionBadge.jsx`, `ui/Reveal.jsx`, `ui/SocialIcons.jsx` | Reużywalne elementy UI |

Wszystkie treści (numer telefonu, adres, opinie, dane rejestrowe) znajdują się w
`src/data/siteData.js` jako **dane placeholder** — do zastąpienia przed wdrożeniem produkcyjnym.

Miejsce osadzenia mapy Google jest oznaczone komentarzem `[TO-DO: Google Maps Widget]` w `Contact.jsx`.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

## Build produkcyjny (do wgrania na FTP)

```bash
npm run build
```

Wygenerowany folder `dist/` zawiera statyczne pliki (HTML/CSS/JS) gotowe do wgrania na serwer FTP.
Ścieżki w `vite.config.js` są ustawione jako względne (`base: './'`), dzięki czemu strona działa
niezależnie od tego, w jakim podkatalogu domeny zostanie umieszczona.

## Podgląd builda lokalnie

```bash
npm run preview
```
