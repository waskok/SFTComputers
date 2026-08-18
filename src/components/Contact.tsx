import { useEffect, useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Clock3, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import SectionBadge from "./ui/SectionBadge";
import {
  categoryPlaceholders,
  company,
  contactCategories,
  defaultMessagePlaceholder,
  privacyPolicyHash,
} from "../data/siteData";

interface ContactFormState {
  name: string;
  phone: string; // tylko cyfry (bez prefiksu +48), max 9 znaków
  email: string;
  category: string;
  message: string;
  website: string; // honeypot - niewidoczne pole na boty, ludzie nigdy go nie wypełniają
}

interface ContactFormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const initialForm: ContactFormState = {
  name: "",
  phone: "",
  email: "",
  category: "",
  message: "",
  website: "",
};

const POLISH_LETTERS = "A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż";
const NAME_PATTERN = new RegExp(`^[${POLISH_LETTERS}]+(?:[ -][${POLISH_LETTERS}]+)*$`);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateName(value: string): string | undefined {
  const trimmed = value.trim();
  if (trimmed.length < 3) return "Imię i nazwisko musi mieć co najmniej 3 znaki.";
  if (!NAME_PATTERN.test(trimmed)) return "Imię i nazwisko może zawierać tylko litery.";
  return undefined;
}

function validatePhone(value: string): string | undefined {
  if (value.length === 0) return "Numer telefonu jest wymagany.";
  if (!/^\d{9}$/.test(value)) return "Numer telefonu musi mieć 9 cyfr.";
  return undefined;
}

function validateEmail(value: string): string | undefined {
  const trimmed = value.trim();
  if (trimmed.length === 0) return "Adres e-mail jest wymagany.";
  if (!EMAIL_PATTERN.test(trimmed)) return "Podaj poprawny adres e-mail.";
  return undefined;
}

function validateMessage(value: string): string | undefined {
  if (value.trim().length < 10) return "Opis problemu musi mieć co najmniej 10 znaków.";
  return undefined;
}

function validateField(field: string, value: string): string | undefined {
  switch (field) {
    case "name":
      return validateName(value);
    case "phone":
      return validatePhone(value);
    case "email":
      return validateEmail(value);
    case "message":
      return validateMessage(value);
    default:
      return undefined;
  }
}

export default function Contact() {
  const [form, setForm] = useState<ContactFormState>(initialForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    function handleSetCategory(event: Event) {
      const custom = event as CustomEvent<{ categoryId?: string }>;
      const categoryId = custom.detail?.categoryId;
      if (!categoryId) return;

      setForm((prev) => ({ ...prev, category: categoryId }));
      setIsSubmitted(false);
      setSubmitError(null);
    }

    window.addEventListener("sft:setContactCategory", handleSetCategory as EventListener);
    return () => window.removeEventListener("sft:setContactCategory", handleSetCategory as EventListener);
  }, []);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Jeśli pole miało już błąd, sprawdzamy je na bieżąco, żeby czerwony komunikat
    // zniknął natychmiast po poprawieniu, a nie tylko po kolejnym opuszczeniu pola.
    setErrors((prev) => (prev[name as keyof ContactFormErrors] ? { ...prev, [name]: validateField(name, value) } : prev));
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = event.target.value.replace(/\D/g, "").slice(0, 9);
    setForm((prev) => ({ ...prev, phone: digitsOnly }));
    setErrors((prev) => (prev.phone ? { ...prev, phone: validatePhone(digitsOnly) } : prev));
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: ContactFormErrors = {
      name: validateName(form.name),
      phone: validatePhone(form.phone),
      email: validateEmail(form.email),
      message: validateMessage(form.message),
    };
    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const categoryLabel = contactCategories.find((item) => item.id === form.category)?.label ?? form.category;

    try {
      const response = await fetch("/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, phone: `+48 ${form.phone}`, category: categoryLabel }),
      });

      const result = (await response.json()) as { success: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Nie udało się wysłać wiadomości.");
      }

      setIsSubmitted(true);
      setForm(initialForm);
      setErrors({});
    } catch {
      setSubmitError("Nie udało się wysłać wiadomości. Spróbuj ponownie albo zadzwoń/napisz do nas bezpośrednio.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const messagePlaceholder = form.category
  ? categoryPlaceholders[form.category] || defaultMessagePlaceholder
  : defaultMessagePlaceholder;

  return (
    <section id="kontakt" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionBadge>Kontakt i lokalizacja</SectionBadge>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Skontaktuj się z nami
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Jeśli jesteś zainteresowany naszymi usługami - zadzwoń, wypełnij formularz kontaktowy lub odwiedź nas w Krakowie.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Formularz kontaktowy - 7/12 */}
          <Reveal className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-2xl shadow-slate-200/60 sm:p-10"
            >
              {/* Honeypot - niewidoczne dla ludzi pole na boty; nie usuwać z DOM, chowamy tylko wizualnie */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                    Imię i nazwisko
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Jan Kowalski"
                    aria-invalid={Boolean(errors.name)}
                    className={`rounded-2xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                      errors.name
                        ? "border-rose-400 focus:border-rose-400 focus:ring-rose-100"
                        : "border-slate-200 focus:border-blue-400 focus:ring-blue-100"
                    }`}
                  />
                  {errors.name && <p className="text-xs font-medium text-rose-600">{errors.name}</p>}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                    Numer telefonu
                  </label>
                  <div
                    className={`flex items-center gap-2 rounded-2xl border bg-slate-50 pl-4 pr-3 transition-colors duration-200 focus-within:bg-white focus-within:ring-4 ${
                      errors.phone
                        ? "border-rose-400 focus-within:border-rose-400 focus-within:ring-rose-100"
                        : "border-slate-200 focus-within:border-blue-400 focus-within:ring-blue-100"
                    }`}
                  >
                    <span className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
                      <span aria-hidden="true">🇵🇱</span>
                      +48
                    </span>
                    <span className="h-5 w-px bg-slate-200" aria-hidden="true" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      required
                      value={form.phone}
                      onChange={handlePhoneChange}
                      onBlur={handleBlur}
                      placeholder="123 456 789"
                      maxLength={9}
                      aria-invalid={Boolean(errors.phone)}
                      className="min-w-0 flex-1 bg-transparent py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    />
                  </div>
                  {errors.phone && <p className="text-xs font-medium text-rose-600">{errors.phone}</p>}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                    Adres e-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="jan.kowalski@example.com"
                    aria-invalid={Boolean(errors.email)}
                    className={`rounded-2xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                      errors.email
                        ? "border-rose-400 focus:border-rose-400 focus:ring-rose-100"
                        : "border-slate-200 focus:border-blue-400 focus:ring-blue-100"
                    }`}
                  />
                  {errors.email && <p className="text-xs font-medium text-rose-600">{errors.email}</p>}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="category" className="text-sm font-semibold text-slate-700">
                    Kategoria zapytania
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={form.category}
                    onChange={handleChange}
                    className="cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors duration-200 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Wybierz kategorię
                    </option>
                    {contactCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700">
                  Opis problemu
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={messagePlaceholder}
                  aria-invalid={Boolean(errors.message)}
                  className={`resize-none rounded-2xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                    errors.message
                      ? "border-rose-400 focus:border-rose-400 focus:ring-rose-100"
                      : "border-slate-200 focus:border-blue-400 focus:ring-blue-100"
                  }`}
                />
                {errors.message && <p className="text-xs font-medium text-rose-600">{errors.message}</p>}
              </div>

              <p className="mt-3 text-xs text-slate-400">
                Wysyłając formularz, wyrażasz zgodę na kontakt w celu udzielenia odpowiedzi na zapytanie oraz akceptujesz naszą {" "}
                <a href={privacyPolicyHash} className="font-semibold text-slate-500 underline hover:text-blue-700">
                  politykę prywatności
                </a>
                .
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  type="submit"
                  icon={isSubmitting ? undefined : Send}
                  disabled={isSubmitting}
                  className="cursor-pointer"
                >
                  {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                  {isSubmitting ? "Wysyłanie..." : "Wyślij zgłoszenie"}
                </Button>
                {isSubmitted && !isSubmitting && (
                  <span className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
                    <CheckCircle2 className="h-5 w-5" />
                    Dziękujemy! Odezwiemy się wkrótce.
                  </span>
                )}
                {submitError && !isSubmitting && (
                  <span className="flex items-center gap-2 text-sm font-semibold text-rose-600">
                    <AlertCircle className="h-5 w-5" />
                    {submitError}
                  </span>
                )}
              </div>
            </form>
          </Reveal>

          {/* Dane adresowe + mapa - 5/12, bez pudełka: elementy oddzielone samą przestrzenią */}
          <Reveal delay={120} className="flex flex-col gap-10 lg:col-span-5">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-slate-900">SFT Computers - Kraków</h3>

              <ul className="mt-6 flex flex-col gap-5">
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Adres</p>
                    <a
                      href={company.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-500 hover:text-blue-700"
                    >
                      {company.address.full}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Telefon</p>
                    <a href={company.phoneHref} className="text-sm text-slate-500 hover:text-blue-700">
                      {company.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">E-mail</p>
                    <a href={`mailto:${company.email}`} className="text-sm text-slate-500 hover:text-blue-700">
                      {company.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Clock3 className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Godziny otwarcia</p>
                    {company.hours.map((slot) => (
                      <p key={slot.days} className="text-sm text-slate-500">
                        {slot.days}: {slot.hours}
                      </p>
                    ))}
                  </div>
                </li>
              </ul>
            </div>

            <div
              id="mapa"
              className="flex min-h-[14rem] flex-1 scroll-mt-36 flex-col overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50 shadow-md shadow-slate-200/50"
            >
              <iframe
                title="Lokalizacja SFT Computers na mapie Google"
                src={company.mapsEmbedUrl}
                className="h-full min-h-[14rem] w-full flex-1 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-t border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
              >
                Otwórz w Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
