import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import PcBuilder from "./components/PcBuilder";
import RefurbishedHardware from "./components/RefurbishedHardware";
import Opinions from "./components/Opinions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Services />
        <PcBuilder />
        <RefurbishedHardware />
        <Opinions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
