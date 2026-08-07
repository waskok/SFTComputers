# SFT Computers - landing page

Statyczna strona landing page dla serwisu komputerowego SFT Computers (Kraków).

## Stos technologiczny

- React 19 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Vite (bundler, dev server, build)
- lucide-react (ikony SVG)

## Przeznaczenie

Prezentacja usług (serwis/naprawa, opieka IT, odzyskiwanie danych), konfigurator PC,
sprzęt poleasingowy, opinie klientów oraz formularz kontaktowy. Build statyczny
(`base: './'`), przeznaczony do wgrania na serwer FTP.

## Komendy

```bash
npm install
npm run dev        # serwer deweloperski
npm run build      # tsc -b && vite build -> dist/
npm run preview    # podgląd builda lokalnie
```
