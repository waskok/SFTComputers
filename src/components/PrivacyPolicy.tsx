import { ArrowLeft, Cookie } from "lucide-react";
import { company } from "../data/siteData";

export default function PrivacyPolicy() {
  const openCookieSettings = () => {
    window.dispatchEvent(new CustomEvent("sft:openCookieBanner"));
  };

  return (
    <main className="min-h-screen bg-white pt-40 pb-24 text-slate-600 sm:pt-44 lg:pt-40 dark:bg-[#0b0f19] dark:text-slate-300">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Powrót do strony głównej
        </a>

        <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Polityka prywatności i plików cookies
        </h1>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}
        </p>

        <div className="mt-10 flex flex-col gap-10 text-slate-600 dark:text-slate-300">
          <section className="rounded-3xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8 dark:border-slate-800/80 dark:bg-slate-900/60">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Administrator danych osobowych</h2>
            <p className="mt-3 leading-relaxed">
              Administratorem danych osobowych przetwarzanych za pośrednictwem niniejszej strony internetowej jest{" "}
              <span className="font-semibold text-slate-900 dark:text-white">{company.registry.company}</span>, {company.address.full} ({company.registry.nip}, {company.registry.krs},{" "}
              {company.registry.regon}). Kontakt w sprawach dotyczących ochrony danych osobowych:{" "}
              <a href={`mailto:${company.email}`} className="font-semibold text-blue-700 hover:underline dark:text-blue-400">
                {company.email}
              </a>{" "}
              lub telefonicznie: {company.phone}.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8 dark:border-slate-800/80 dark:bg-slate-900/60">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Formularz kontaktowy i przetwarzane dane</h2>
            <p className="mt-3 leading-relaxed">
              Dane osobowe przetwarzamy wyłącznie w zakresie, w jakim zostały nam dobrowolnie przekazane poprzez
              formularz kontaktowy na stronie. Obejmuje to: imię i nazwisko, numer telefonu, adres e-mail, wybraną kategorię oraz treść
              wiadomości. Dane te służą wyłącznie do skontaktowania się z Tobą i udzielenia odpowiedzi na przesłane
              zapytanie (np. wycena naprawy, dostępność sprzętu w sklepie, konfiguracja komputera).
            </p>
          </section>

          <section className="rounded-3xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8 dark:border-slate-800/80 dark:bg-slate-900/60">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Pliki cookies i technologie pamięci lokalnej (Local Storage)</h2>
            <p className="mt-3 leading-relaxed">
              Strona nie stosuje inwazyjnych mechanizmów śledzących, analitycznych ani profilujących. W celu zapewnienia prawidłowego działania oraz wygody użytkownika stosowane są:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
              <li>
                <strong className="text-slate-900 dark:text-white">Pamięć lokalna przeglądarki (Local Storage):</strong> służy do zapamiętania preferencji dotyczących wybranego motywu graficznego oraz statusu Twojej zgody na cookies. Informacje te nie są przekazywane na zewnątrz i pozostają wyłącznie w Twojej przeglądarce.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Zewnętrzne pliki cookies (Google Maps):</strong> na stronie w sekcji kontaktowej osadzona jest interaktywna mapa firmy Google LLC. Załadowanie mapy następuje <em>wyłącznie po wyrażeniu przez Ciebie dobrowolnej zgody</em> w banerze cookies lub bezpośrednio w module mapy. W przypadku braku zgody moduł mapy pozostaje zablokowany i nie pobiera żadnych danych zewnętrznych.
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:bg-slate-950">
              <div className="flex items-center gap-3">
                <Cookie className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Zarządzanie Twoją zgodą na cookies</span>
              </div>
              <button
                type="button"
                onClick={openCookieSettings}
                className="cursor-pointer rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 dark:hover:bg-blue-500"
              >
                Zmień ustawienia cookies
              </button>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8 dark:border-slate-800/80 dark:bg-slate-900/60">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. Podstawa prawna przetwarzania</h2>
            <p className="mt-3 leading-relaxed">
              Podstawą prawną przetwarzania danych jest art. 6 ust. 1 lit. a) RODO (zgoda wyrażona poprzez wysłanie
              formularza lub akceptację cookies) oraz art. 6 ust. 1 lit. b) RODO (podjęcie działań na Twoje żądanie przed ewentualnym
              zawarciem umowy, np. przygotowanie wyceny lub oferty).
            </p>
          </section>

          <section className="rounded-3xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8 dark:border-slate-800/80 dark:bg-slate-900/60">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">5. Okres przechowywania danych</h2>
            <p className="mt-3 leading-relaxed">
              Dane przekazane w formularzu przechowujemy przez czas niezbędny do udzielenia odpowiedzi i obsługi
              zapytania, a następnie przez okres nie dłuższy niż wynika to z ewentualnych obowiązków prawnych (np.
              przepisów podatkowych, jeśli doszło do zawarcia transakcji) lub do czasu wycofania zgody.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8 dark:border-slate-800/80 dark:bg-slate-900/60">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">6. Odbiorcy danych</h2>
            <p className="mt-3 leading-relaxed">
              Dane z formularza trafiają wyłącznie do skrzynki pocztowej administratora, obsługiwanej przez firmę
              hostingową świadczącą usługi poczty elektronicznej. Nie przekazujemy danych osobowych innym podmiotom
              trzecim ani nie wykorzystujemy ich do celów marketingowych bez odrębnej zgody. W przypadku wyrażenia zgody na mapę Google, podmiotem przetwarzającym dane techniczne połączenia jest Google LLC zgodnie z ich{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-700 hover:underline dark:text-blue-400"
              >
                polityką prywatności
              </a>
              .
            </p>
          </section>

          <section className="rounded-3xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8 dark:border-slate-800/80 dark:bg-slate-900/60">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">7. Twoje prawa</h2>
            <p className="mt-3 leading-relaxed">W związku z przetwarzaniem danych osobowych przysługuje Ci prawo do:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
              <li>dostępu do swoich danych oraz otrzymania ich kopii,</li>
              <li>sprostowania (poprawienia) danych,</li>
              <li>usunięcia danych (&quot;prawo do bycia zapomnianym&quot;),</li>
              <li>ograniczenia przetwarzania danych,</li>
              <li>wniesienia sprzeciwu wobec przetwarzania danych,</li>
              <li>przenoszenia danych,</li>
              <li>cofnięcia zgody w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej cofnięciem,</li>
              <li>
                wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO), jeśli uznasz, że przetwarzanie
                narusza przepisy o ochronie danych osobowych.
              </li>
            </ul>
            <p className="mt-3 leading-relaxed">
              Aby skorzystać z powyższych praw, skontaktuj się z nami pod adresem{" "}
              <a href={`mailto:${company.email}`} className="font-semibold text-blue-700 hover:underline dark:text-blue-400">
                {company.email}
              </a>
              .
            </p>
          </section>

          <section className="rounded-3xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8 dark:border-slate-800/80 dark:bg-slate-900/60">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">8. Zmiany polityki prywatności</h2>
            <p className="mt-3 leading-relaxed">
              Niniejsza polityka prywatności może być okresowo aktualizowana, np. w związku ze zmianą przepisów
              prawa lub sposobu działania strony. Aktualna wersja jest zawsze dostępna pod tym adresem.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}