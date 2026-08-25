import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { privacyPolicyHash } from "../data/siteData";

export type CookieConsentStatus = "accepted" | "rejected" | "undecided";

export default function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("sft_cookie_consent") as CookieConsentStatus | null;
    if (saved === "accepted" || saved === "rejected") {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }

    const handleOpenBanner = () => {
      setIsOpen(true);
    };

    window.addEventListener("sft:openCookieBanner", handleOpenBanner);
    return () => window.removeEventListener("sft:openCookieBanner", handleOpenBanner);
  }, []);

  const handleDecision = (status: "accepted" | "rejected") => {
    localStorage.setItem("sft_cookie_consent", status);
    setIsOpen(false);
    window.dispatchEvent(
      new CustomEvent("sft:cookieConsentChanged", {
        detail: { status },
      }),
    );
  };

  if (!isOpen) return null;

  return (
    <aside
      aria-label="Zgoda na pliki cookies"
      className="fixed bottom-4 inset-x-4 z-50 mx-auto max-w-4xl rounded-2xl border border-slate-700/80 bg-slate-900/95 p-4 text-white shadow-2xl backdrop-blur-md transition-all duration-300 sm:bottom-6 sm:px-6 sm:py-4 dark:border-slate-800 dark:bg-slate-950/95"
    >
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-slate-800 text-slate-300 dark:bg-slate-900">
            <Cookie className="h-4 w-4" />
          </div>
          <p className="text-xs text-slate-300 sm:text-sm">
            Ta strona korzysta z plików cookies niezbędnych do jej działania. Szczegóły znajdziesz w naszej{" "}
            <a href={privacyPolicyHash} className="font-semibold text-white underline hover:text-blue-400">
              Polityce prywatności
            </a>
            .
          </p>
        </div>

        <div className="flex w-full flex-none items-center justify-end gap-2 sm:w-auto">
          <button
            type="button"
            onClick={() => handleDecision("rejected")}
            className="flex-1 cursor-pointer rounded-full border border-slate-700 bg-transparent px-4 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-slate-800 sm:flex-none sm:text-sm dark:border-slate-800 dark:hover:bg-slate-900"
          >
            Odrzuć wszystkie
          </button>
          <button
            type="button"
            onClick={() => handleDecision("accepted")}
            className="flex-1 cursor-pointer rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-950 shadow-md transition-colors duration-200 hover:bg-slate-200 sm:flex-none sm:text-sm"
          >
            Zaakceptuj wszystkie
          </button>
        </div>
      </div>
    </aside>
  );
}