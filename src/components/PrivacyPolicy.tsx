import { ArrowLeft } from "lucide-react";
import { company } from "../data/siteData";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0b0f19] pt-40 pb-24 text-slate-300 sm:pt-44 lg:pt-40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Powrót do strony głównej
        </a>

        <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Polityka prywatności
        </h1>
        <p className="mt-3 text-sm text-slate-400">
          Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}
        </p>

        <div className="mt-10 flex flex-col gap-10 text-slate-300">
          <section className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-white">1. Administrator danych osobowych</h2>
            <p className="mt-3 leading-relaxed text-slate-300">
              Administratorem danych osobowych przetwarzanych za pośrednictwem niniejszej strony internetowej jest{" "}
              <span className="text-white">{company.registry.company}</span>, {company.address.full} ({company.registry.nip}, {company.registry.krs},{" "}
              {company.registry.regon}). Kontakt w sprawach dotyczących ochrony danych osobowych:{" "}
              <a href={`mailto:${company.email}`} className="font-semibold text-blue-400 hover:underline">
                {company.email}
              </a>{" "}
              lub telefonicznie: {company.phone}.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-white">2. Jakie dane zbieramy i w jakim celu</h2>
            <p className="mt-3 leading-relaxed text-slate-300">
              Dane osobowe przetwarzamy wyłącznie w zakresie, w jakim zostały nam dobrowolnie przekazane poprzez
              formularz kontaktowy na stronie. Obejmuje to: imię i nazwisko, numer telefonu, adres e-mail oraz treść
              wiadomości. Dane te służą wyłącznie do skontaktowania się z Tobą i udzielenia odpowiedzi na przesłane
              zapytanie (np. wycena naprawy, dostępność sprzętu, konfiguracja komputera).
            </p>
            <p className="mt-3 leading-relaxed text-slate-300">
              Strona nie wykorzystuje plików cookies do celów analitycznych ani reklamowych. Jedynym elementem
              zewnętrznym osadzonym na stronie jest mapa Google (Google Maps) w sekcji kontaktowej – jej wczytanie
              może wiązać się z zapisaniem plików cookies przez Google, zgodnie z{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-400 hover:underline"
              >
                polityką prywatności Google
              </a>
              , na którą nie mamy wpływu.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-white">3. Podstawa prawna przetwarzania</h2>
            <p className="mt-3 leading-relaxed text-slate-300">
              Podstawą prawną przetwarzania danych jest art. 6 ust. 1 lit. a) RODO (zgoda wyrażona poprzez wysłanie
              formularza) oraz art. 6 ust. 1 lit. b) RODO (podjęcie działań na Twoje żądanie przed ewentualnym
              zawarciem umowy, np. przygotowanie wyceny lub oferty).
            </p>
          </section>

          <section className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-white">4. Okres przechowywania danych</h2>
            <p className="mt-3 leading-relaxed text-slate-300">
              Dane przekazane w formularzu przechowujemy przez czas niezbędny do udzielenia odpowiedzi i obsługi
              zapytania, a następnie przez okres nie dłuższy niż wynika to z ewentualnych obowiązków prawnych (np.
              przepisów podatkowych, jeśli doszło do zawarcia transakcji) lub do czasu wycofania zgody.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-white">5. Odbiorcy danych</h2>
            <p className="mt-3 leading-relaxed text-slate-300">
              Dane z formularza trafiają wyłącznie do skrzynki pocztowej administratora, obsługiwanej przez firmę
              hostingową świadczącą usługi poczty elektronicznej. Nie przekazujemy danych osobowych innym podmiotom
              trzecim ani nie wykorzystujemy ich do celów marketingowych bez odrębnej zgody.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-white">6. Twoje prawa</h2>
            <p className="mt-3 leading-relaxed text-slate-300">W związku z przetwarzaniem danych osobowych przysługuje Ci prawo do:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-slate-300">
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
            <p className="mt-3 leading-relaxed text-slate-300">
              Aby skorzystać z powyższych praw, skontaktuj się z nami pod adresem{" "}
              <a href={`mailto:${company.email}`} className="font-semibold text-blue-400 hover:underline">
                {company.email}
              </a>
              .
            </p>
          </section>

          <section className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-white">7. Dobrowolność podania danych</h2>
            <p className="mt-3 leading-relaxed text-slate-300">
              Podanie danych w formularzu kontaktowym jest całkowicie dobrowolne, jednak niezbędne do tego, abyśmy
              mogli odpowiedzieć na przesłane zapytanie. Nie podejmujemy decyzji opartych wyłącznie na
              zautomatyzowanym przetwarzaniu danych, w tym profilowaniu.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-white">8. Bezpieczeństwo danych</h2>
            <p className="mt-3 leading-relaxed text-slate-300">
              Stosujemy odpowiednie środki techniczne i organizacyjne, aby chronić przekazane nam dane osobowe przed
              nieuprawnionym dostępem, utratą lub zniszczeniem.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-white">9. Zmiany polityki prywatności</h2>
            <p className="mt-3 leading-relaxed text-slate-300">
              Niniejsza polityka prywatności może być okresowo aktualizowana, np. w związku ze zmianą przepisów
              prawa lub sposobu działania strony. Aktualna wersja jest zawsze dostępna pod tym adresem.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}