import { useEffect } from "react";
import { crispWebsiteId } from "../data/siteData";

declare global {
  interface Window {
    $crisp?: unknown[];
    CRISP_WEBSITE_ID?: string;
  }
}

const CRISP_SCRIPT_ID = "sft-crisp-chat";
const CRISP_SCRIPT_SRC = "https://client.crisp.chat/l.js";

function loadCrisp() {
  if (document.getElementById(CRISP_SCRIPT_ID)) return;

  window.$crisp = window.$crisp || [];
  window.CRISP_WEBSITE_ID = crispWebsiteId;

  const script = document.createElement("script");
  script.id = CRISP_SCRIPT_ID;
  script.src = CRISP_SCRIPT_SRC;
  script.async = true;
  document.head.appendChild(script);
}

function hideCrisp() {
  const crisp = window.$crisp;
  if (Array.isArray(crisp)) {
    crisp.push(["do", "chat:hide"]);
  }
}

/**
 * Ładuje dymek czatu Crisp dopiero po akceptacji cookies
 * (ten sam mechanizm zgody co Google Maps).
 */
export default function CrispChat() {
  useEffect(() => {
    const syncFromConsent = (status: string | null) => {
      if (status === "accepted") {
        loadCrisp();
        return;
      }
      // Odrzucenie / brak zgody — ukryj czat, jeśli był już załadowany.
      hideCrisp();
    };

    syncFromConsent(localStorage.getItem("sft_cookie_consent"));

    const handleConsentChange = (event: Event) => {
      const custom = event as CustomEvent<{ status?: string }>;
      syncFromConsent(custom.detail?.status ?? null);
    };

    window.addEventListener("sft:cookieConsentChanged", handleConsentChange);
    return () => window.removeEventListener("sft:cookieConsentChanged", handleConsentChange);
  }, []);

  return null;
}
