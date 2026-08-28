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
import CookieBanner from "./components/CookieBanner";
import CrispChat from "./components/CrispChat";
import { privacyPolicyHash } from "./data/siteData";

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(() => window.location.hash === privacyPolicyHash);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash;
      const nextIsPrivacy = hash === privacyPolicyHash;
      setIsPrivacyOpen(nextIsPrivacy);

      requestAnimationFrame(() => {
        if (nextIsPrivacy) {
          window.scrollTo({ top: 0 });
          return;
        }
        if (!hash || hash === "#top") {
          window.scrollTo({ top: 0 });
          return;
        }
        const target = document.getElementById(hash.slice(1));
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
    <div id="top" className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#0b0f19] dark:text-slate-300">
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
      <CookieBanner />
      <CrispChat />
    </div>
  );
}

export default App;