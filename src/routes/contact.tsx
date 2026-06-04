import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { MapPin, Phone, Mail, Facebook, Instagram, Plane, MessageSquare } from "lucide-react";
import welcome from "@/assets/welcome.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: i18n.t("contact.title") },
      {
        name: "description",
        content: i18n.t("contact.metaDesc"),
      },
      { property: "og:title", content: i18n.t("contact.ogTitle") },
      { property: "og:description", content: i18n.t("contact.ogDesc") },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Reservation");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setSubject("Reservation");
      setMessage("");
      alert(t("contact.successMsg"));
    }, 1500);
  };

  return (
    <PageShell>
      <PageHero
        eyebrow={t("contact.heroEyebrow")}
        title={t("contact.heroTitle")}
        subtitle={t("contact.heroSubtitle")}
        image={welcome}
        height="sm"
      />

      <section className="py-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <h2 className="font-display text-3xl text-ocean-deep">{t("contact.getInTouch")}</h2>
            <div className="gold-divider my-5" />

            <div className="space-y-6 mt-8">
              <div className="flex gap-4">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-1" />
                <div>
                  <div className="eyebrow">{t("contact.addressLabel")}</div>
                  <a
                    href="https://maps.google.com/?q=Park+Regency+Sharm+El+Sheikh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-gold mt-1 block text-sm font-medium whitespace-pre-line"
                  >
                    {t("contact.address")}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="h-5 w-5 text-gold shrink-0 mt-1" />
                <div>
                  <div className="eyebrow">{t("contact.reservationsLabel")}</div>
                  <a
                    href="tel:+20693600000"
                    className="text-foreground hover:text-gold text-sm font-medium"
                  >
                    +20 69 360 0000
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="h-5 w-5 text-gold shrink-0 mt-1" />
                <div>
                  <div className="eyebrow">{t("contact.emailLabel")}</div>
                  <a
                    href="mailto:reservations@parkregency.com"
                    className="text-foreground hover:text-gold block text-sm font-medium"
                  >
                    reservations@parkregency.com
                  </a>
                  <a
                    href="mailto:weddings@parkregency.com"
                    className="text-muted-foreground text-xs hover:text-gold block mt-1"
                  >
                    weddings@parkregency.com
                  </a>
                  <a
                    href="mailto:events@parkregency.com"
                    className="text-muted-foreground text-xs hover:text-gold block mt-1"
                  >
                    events@parkregency.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Plane className="h-5 w-5 text-gold shrink-0 mt-1" />
                <div>
                  <div className="eyebrow">{t("contact.airportLabel")}</div>
                  <div className="text-foreground text-sm font-medium mt-1">
                    {t("contact.airportDesc")}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="mt-10 p-6 bg-secondary/40 border border-border max-w-md">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-ocean-deep flex items-center gap-2 mb-3">
                <MessageSquare className="h-4.5 w-4.5 text-gold" /> {t("contact.chatEyebrow")}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {t("contact.chatDesc")}
              </p>
              <a
                href="https://wa.me/20693600000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white hover:bg-[#20ba5a] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                {t("contact.chatBtn")}
              </a>
            </div>

            {/* Social Media Link Icons */}
            <div className="mt-10 flex gap-4">
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/ParkRegencySharmElSheikh/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 border border-border flex items-center justify-center hover:bg-gold hover:text-ocean-deep hover:border-gold transition-colors text-ocean-deep"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/parkregencysharm/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 border border-border flex items-center justify-center hover:bg-gold hover:text-ocean-deep hover:border-gold transition-colors text-ocean-deep"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Contact Inquiry Message Form */}
          <form
            className="bg-card border border-border shadow-luxury p-8 md:p-10 space-y-5"
            onSubmit={handleSubmit}
          >
            <h2 className="font-display text-2xl text-ocean-deep">{t("contact.sendMessage")}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="eyebrow block mb-2">{t("contact.firstName")}</label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                />
              </div>
              <div>
                <label className="eyebrow block mb-2">{t("contact.lastName")}</label>
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                />
              </div>
            </div>

            <div>
              <label className="eyebrow block mb-2">{t("contact.emailInput")}</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
              />
            </div>

            <div>
              <label className="eyebrow block mb-2">{t("contact.phoneInput")}</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
              />
            </div>

            <div>
              <label className="eyebrow block mb-2">{t("contact.subject")}</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold cursor-pointer"
              >
                <option value="Reservation">{t("contact.subjects.reservation")}</option>
                <option value="Wedding">{t("contact.subjects.wedding")}</option>
                <option value="Meeting / Event">{t("contact.subjects.meeting")}</option>
                <option value="Concierge">{t("contact.subjects.concierge")}</option>
                <option value="Other">{t("contact.subjects.other")}</option>
              </select>
            </div>

            <div>
              <label className="eyebrow block mb-2">{t("contact.messageLabel")}</label>
              <textarea
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-ocean-deep text-white text-xs uppercase tracking-[0.22em] font-semibold hover:bg-gold hover:text-ocean-deep transition-colors cursor-pointer"
            >
              {t("contact.sendBtn")}
            </button>
          </form>
        </div>
      </section>

      {/* EMBEDDED LOCATION MAP */}
      <section className="h-[450px] w-full border-t border-border bg-secondary">
        <iframe
          title="Park Regency location in Gardens Bay, Sharm El Sheikh"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.929828556488!2d34.3387823!3d27.9179929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145625c150c2658b%3A0xe212cc4be848be48!2sPark%20Regency%20Sharm%20El%20Sheikh%20Resort!5e0!3m2!1sen!2seg!4v1680000000000!5m2!1sen!2seg"
          className="w-full h-full border-0 grayscale opacity-90 contrast-125"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </PageShell>
  );
}
