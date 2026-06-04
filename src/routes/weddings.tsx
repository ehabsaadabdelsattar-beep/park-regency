import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { useState } from "react";
import { Heart, Flower2, Camera, Music, Sparkles, Cake, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import wedding from "@/assets/wedding.jpg";

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      { title: i18n.t("weddings.title") },
      {
        name: "description",
        content: i18n.t("weddings.metaDesc"),
      },
      { property: "og:title", content: i18n.t("weddings.ogTitle") },
      { property: "og:description", content: i18n.t("weddings.ogDesc") },
    ],
  }),
  component: WeddingsPage,
});

function WeddingsPage() {
  const { t } = useTranslation();
  const [partner1, setPartner1] = useState("");
  const [partner2, setPartner2] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [weddingDate, setWeddingDate] = useState("");
  const [guestsCount, setGuestsCount] = useState("50-100");
  const [pkgSelection, setPkgSelection] = useState("The Classic");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const packages = [
    {
      name: t("weddings.packages.elopement.name"),
      guests: "2–10",
      price: "2,400",
      text: t("weddings.packages.elopement.text"),
    },
    {
      name: t("weddings.packages.classic.name"),
      guests: "30–80",
      price: "8,900",
      text: t("weddings.packages.classic.text"),
    },
    {
      name: t("weddings.packages.grand.name"),
      guests: "100–250",
      price: "24,000",
      text: t("weddings.packages.grand.text"),
    },
  ];

  const services = [
    { icon: Heart, label: t("weddings.services.planner") },
    { icon: Flower2, label: t("weddings.services.floral") },
    { icon: Camera, label: t("weddings.services.photo") },
    { icon: Music, label: t("weddings.services.music") },
    { icon: Cake, label: t("weddings.services.cake") },
    { icon: Sparkles, label: t("weddings.services.spa") },
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow={t("weddings.heroEyebrow")}
        title={t("weddings.heroTitle")}
        subtitle={t("weddings.heroSubtitle")}
        image={wedding}
      />

      {/* PACKAGES */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="eyebrow">{t("weddings.packagesEyebrow")}</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3 text-ocean-deep">
            {t("weddings.packagesTitle")}
          </h2>
          <div className="gold-divider mx-auto my-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((p) => (
            <article
              key={p.name}
              className="bg-card border border-border shadow-card p-8 text-center flex flex-col justify-between hover:border-gold/50 transition-colors"
            >
              <div>
                <span className="eyebrow text-gold">
                  {p.guests} {t("weddings.guests")}
                </span>
                <h3 className="font-display text-2xl text-ocean-deep mt-3">{p.name}</h3>
                <div className="gold-divider mx-auto my-5" />
                <p className="text-sm text-muted-foreground leading-relaxed min-h-[90px]">
                  {p.text}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="eyebrow text-[9px]">{t("weddings.from")}</div>
                <div className="font-display text-3xl text-ocean-deep mt-1">${p.price}</div>
                <a
                  href="#inquiry-form"
                  onClick={() => setPkgSelection(p.name)}
                  className="mt-5 block w-full py-2.5 border border-gold hover:bg-gold hover:text-ocean-deep text-[10px] uppercase font-bold tracking-widest text-gold transition-all"
                >
                  {t("weddings.inquire")}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-secondary/50 border-t border-b border-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="eyebrow">{t("weddings.servicesEyebrow")}</span>
            <h2 className="font-display text-3xl md:text-4xl mt-3 text-ocean-deep">
              {t("weddings.servicesTitle")}
            </h2>
            <div className="gold-divider mx-auto my-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border max-w-5xl mx-auto">
            {services.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-background p-8 text-center hover:bg-secondary/20 transition-all"
              >
                <Icon className="h-9 w-9 text-gold mx-auto" strokeWidth={1.2} />
                <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-ocean-deep mt-4">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#inquiry-form"
              className="inline-block px-10 py-4 bg-gold text-ocean-deep text-xs uppercase tracking-[0.22em] font-bold hover:bg-ocean-deep hover:text-white transition-all shadow-sm"
            >
              {t("weddings.plan")}
            </a>
          </div>
        </div>
      </section>

      {/* WEDDING INQUIRY FORM */}
      <section className="py-24 container mx-auto px-6">
        <div
          id="inquiry-form"
          className="max-w-3xl mx-auto bg-card border border-border p-8 md:p-12 shadow-luxury scroll-mt-24"
        >
          {isSubmitted ? (
            <div className="text-center py-10 space-y-6">
              <CheckCircle className="h-16 w-16 text-gold mx-auto" />
              <h3 className="font-display text-3xl text-ocean-deep">
                {t("weddings.form.successTitle")}
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto leading-relaxed text-sm">
                {t("weddings.form.successText")}
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 border border-border text-xs uppercase tracking-widest font-semibold hover:border-gold hover:text-gold transition-all cursor-pointer"
              >
                {t("weddings.form.submitAnother")}
              </button>
            </div>
          ) : (
            <div>
              <div className="text-center max-w-xl mx-auto mb-10">
                <span className="eyebrow">{t("weddings.form.eyebrow")}</span>
                <h3 className="font-display text-2xl md:text-3xl text-ocean-deep mt-2">
                  {t("weddings.form.title")}
                </h3>
                <div className="gold-divider mx-auto my-4" />
                <p className="text-xs text-muted-foreground">{t("weddings.form.subtitle")}</p>
              </div>

              <form onSubmit={handleInquirySubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      {t("weddings.form.partner1")}
                    </label>
                    <input
                      type="text"
                      required
                      value={partner1}
                      onChange={(e) => setPartner1(e.target.value)}
                      className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      {t("weddings.form.partner2")}
                    </label>
                    <input
                      type="text"
                      required
                      value={partner2}
                      onChange={(e) => setPartner2(e.target.value)}
                      className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      {t("weddings.form.email")}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      {t("weddings.form.phone")}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      {t("weddings.form.date")}
                    </label>
                    <input
                      type="date"
                      required
                      value={weddingDate}
                      onChange={(e) => setWeddingDate(e.target.value)}
                      className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      {t("weddings.form.guestsCount")}
                    </label>
                    <select
                      value={guestsCount}
                      onChange={(e) => setGuestsCount(e.target.value)}
                      className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold cursor-pointer"
                    >
                      <option value="2-10">2 – 10 Guests (Elopement)</option>
                      <option value="10-50">10 – 50 Guests</option>
                      <option value="50-100">50 – 100 Guests</option>
                      <option value="100-250">100 – 250 Guests</option>
                      <option value="250+">250+ Guests</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      {t("weddings.form.experience")}
                    </label>
                    <select
                      value={pkgSelection}
                      onChange={(e) => setPkgSelection(e.target.value)}
                      className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold cursor-pointer"
                    >
                      <option value="The Elopement">The Elopement Package</option>
                      <option value="The Classic">The Classic Package</option>
                      <option value="The Grand">The Grand Package</option>
                      <option value="Bespoke Atelier">Bespoke / Custom Atelier</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                    {t("weddings.form.vision")}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold placeholder-muted-foreground/60"
                    placeholder={t("weddings.form.visionPlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-ocean-deep hover:bg-gold text-white hover:text-ocean-deep text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer"
                >
                  {t("weddings.form.submitBtn")}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
