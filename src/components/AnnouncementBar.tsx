import { useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      id="announcement-bar"
      className={`w-full overflow-hidden transition-all duration-300 ease-out ${
        isVisible ? "max-h-28 py-2 opacity-100" : "max-h-0 py-0 opacity-0"
      } bg-slate-900 text-slate-200 dark:bg-white dark:text-slate-900 text-sm`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-9 sm:px-12">
        <p className="text-center font-medium leading-snug">
          Prowadzimy również sklep stacjonarny: podzespoły, przewody i sprzęt IT od ręki lub na zamówienie w świetnych cenach!
        </p>
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          aria-label="Zamknij pasek ogłoszeń"
          className="absolute right-1 flex h-6 w-6 flex-none cursor-pointer items-center justify-center rounded-full bg-white/10 text-slate-200 transition-colors duration-200 hover:bg-white/25 hover:text-white sm:right-3 dark:bg-slate-900/10 dark:text-slate-700 dark:hover:bg-slate-900/20 dark:hover:text-slate-950"
        >
          <X className="h-4 w-4" strokeWidth={2.75} />
        </button>
      </div>
    </div>
  );
}