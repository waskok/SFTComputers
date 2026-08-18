import { useEffect, useState } from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import PcBuilder from "./components/PcBuilder";
import RefurbishedHardware from "./components/RefurbishedHardware";
import Opinions from "./components/Opinions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { privacyPolicyHash } from "./data/siteData";

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(() => window.location.hash === privacyPolicyHash);

  // Polityka prywatności "żyje" pod własnym hashem w adresie - dzięki temu można ją
  // wysłać jako link i wrócić do niej przyciskiem "wstecz" przeglądarki. Nagłówek
  // (Header) zostaje zamontowany bez zmian, więc nawigacja działa tak samo jak zawsze.
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash;
      const nextIsPrivacy = hash === privacyPolicyHash;
      setIsPrivacyOpen(nextIsPrivacy);

      // Docelowy element (sekcja strony głównej albo góra polityki) pojawia się
      // w DOM dopiero po przerenderowaniu - doczekujemy jednej klatki, zanim przewiniemy.
      requestAnimationFrame(() => {
        if (nextIsPrivacy) {
          window.scrollTo({ top: 0 });
          return;
        }
        const target = hash ? document.getElementById(hash.slice(1)) : null;
        if (target) {
          target.scrollIntoView();
        } else {
          window.scrollTo({ top: 0 });
        }
      });
    };

    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <AnnouncementBar />
      <Header />
      {isPrivacyOpen ? (
        <PrivacyPolicy />
      ) : (
        <>
          <main>
            <Hero />
            <Services />
            <PcBuilder />
            <RefurbishedHardware />
            <Opinions />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
