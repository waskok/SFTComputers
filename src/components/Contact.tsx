import { useState, type ChangeEvent, type FormEvent } from "react";
import { CheckCircle2, Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import SectionBadge from "./ui/SectionBadge";
import { company, contactCategories } from "../data/siteData";

interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  category: string;
  message: string;
}

const initialForm: ContactFormState = { name: "", phone: "", email: "", category: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<ContactFormState>(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: podłączyć wysyłkę formularza do backendu / usługi mailingowej.
    setIsSubmitted(true);
    setForm(initialForm);
  };

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
                    placeholder="TODO"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                    Numer telefonu
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+48 123 456 789"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
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
                    placeholder="jan.kowalski@example.com"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
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
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors duration-200 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
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
                  placeholder="TO DO"
                  className="resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <p className="mt-3 text-xs text-slate-400">
                Wysyłając formularz, wyrażasz zgodę na kontakt w celu udzielenia odpowiedzi na zapytanie oraz akceptujesz naszą politykę prywatności.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button type="submit" icon={Send}>
                  Wyślij zgłoszenie
                </Button>
                {isSubmitted && (
                  <span className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
                    <CheckCircle2 className="h-5 w-5" />
                    Dziękujemy! Odezwiemy się wkrótce.
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
                    <p className="text-sm text-slate-500">{company.address.full}</p>
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

            {/* [TO-DO: Google Maps Widget] */}
            <div className="flex min-h-[14rem] flex-1 flex-col items-center justify-center gap-3 rounded-[2.5rem] border border-dashed border-slate-200 bg-slate-50 p-8 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-md shadow-slate-200/70">
                <MapPin className="h-6 w-6" />
              </span>
              <p className="text-sm font-semibold text-slate-500">
                [TO-DO: Google Maps Widget]
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
