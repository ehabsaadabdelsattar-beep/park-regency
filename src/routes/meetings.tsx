import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { useState } from "react";
import { Users, Maximize2, Mic, Wifi, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import welcome from "@/assets/welcome.jpg";
import pool from "@/assets/pool.jpg";

export const Route = createFileRoute("/meetings")({
  head: () => ({
    meta: [
      { title: i18n.t("meetings.title") },
      {
        name: "description",
        content: i18n.t("meetings.metaDesc"),
      },
      { property: "og:title", content: i18n.t("meetings.ogTitle") },
      { property: "og:description", content: i18n.t("meetings.ogDesc") },
    ],
  }),
  component: MeetingsPage,
});

function MeetingsPage() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("50");
  const [requirements, setRequirements] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitProposal = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const venues = [
    {
      name: t("meetings.venues.grandBallroom.name"),
      size: "1,200 m²",
      capacity: "700",
      style: t("meetings.venues.grandBallroom.style"),
    },
    {
      name: t("meetings.venues.royalHall.name"),
      size: "650 m²",
      capacity: "400",
      style: t("meetings.venues.royalHall.style"),
    },
    {
      name: t("meetings.venues.sinaiHall.name"),
      size: "320 m²",
      capacity: "220",
      style: t("meetings.venues.sinaiHall.style"),
    },
    {
      name: t("meetings.venues.tiranRoom.name"),
      size: "180 m²",
      capacity: "120",
      style: t("meetings.venues.tiranRoom.style"),
    },
    {
      name: t("meetings.venues.library.name"),
      size: "60 m²",
      capacity: "20",
      style: t("meetings.venues.library.style"),
    },
    {
      name: t("meetings.venues.beach.name"),
      size: t("meetings.venues.openAir"),
      capacity: "300",
      style: t("meetings.venues.beach.style"),
    },
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow={t("meetings.heroEyebrow")}
        title={t("meetings.heroTitle")}
        subtitle={t("meetings.heroSubtitle")}
        image={welcome}
      />

      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {[
            ["700+", t("meetings.stats.guests")],
            ["8", t("meetings.stats.venues")],
            ["1,200m²", t("meetings.stats.ballroom")],
            ["4K", t("meetings.stats.production")],
          ].map(([n, l]) => (
            <div key={l as string} className="text-center">
              <div className="font-display text-4xl text-gold">{n}</div>
              <div className="eyebrow mt-2 text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <img
            src={pool}
            alt="Conference space"
            loading="lazy"
            className="w-full h-[460px] object-cover shadow-luxury"
          />
          <div>
            <span className="eyebrow">{t("meetings.capabilitiesEyebrow")}</span>
            <h2 className="font-display text-3xl md:text-4xl mt-3 text-ocean-deep">
              {t("meetings.capabilitiesTitle")}
            </h2>
            <div className="gold-divider my-6" />
            <ul className="space-y-4 text-sm text-muted-foreground">
              {[
                { icon: Mic, label: t("meetings.capabilities.0") },
                { icon: Wifi, label: t("meetings.capabilities.1") },
                { icon: Users, label: t("meetings.capabilities.2") },
                { icon: Maximize2, label: t("meetings.capabilities.3") },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex gap-3">
                  <Icon className="h-5 w-5 text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* VENUE CAPACITY TABLE */}
        <h2 className="font-display text-3xl text-center text-ocean-deep mb-8">
          {t("meetings.capacityTitle")}
        </h2>
        <div className="overflow-x-auto border border-border mb-24 max-w-5xl mx-auto shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-ocean-deep text-white text-xs uppercase tracking-[0.18em] text-left">
                <th className="py-4 px-6 font-medium">{t("meetings.table.venue")}</th>
                <th className="py-4 px-6 font-medium">{t("meetings.table.size")}</th>
                <th className="py-4 px-6 font-medium">{t("meetings.table.capacity")}</th>
                <th className="py-4 px-6 font-medium">{t("meetings.table.style")}</th>
              </tr>
            </thead>
            <tbody>
              {venues.map((v, i) => (
                <tr
                  key={v.name}
                  className={`border-b border-border text-sm ${i % 2 ? "bg-secondary/30" : ""}`}
                >
                  <td className="py-4 px-6 font-display text-ocean-deep font-semibold">{v.name}</td>
                  <td className="py-4 px-6 text-muted-foreground">{v.size}</td>
                  <td className="py-4 px-6 text-muted-foreground">
                    {v.capacity} {t("meetings.table.guests")}
                  </td>
                  <td className="py-4 px-6 text-muted-foreground">{v.style}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* LEAD GENERATION FORM */}
        <div
          id="proposal-form"
          className="max-w-3xl mx-auto bg-card border border-border p-8 md:p-12 shadow-luxury scroll-mt-24"
        >
          {isSubmitted ? (
            <div className="text-center py-10 space-y-6">
              <CheckCircle className="h-16 w-16 text-gold mx-auto" />
              <h3 className="font-display text-3xl text-ocean-deep">
                {t("meetings.form.successTitle")}
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                {t("meetings.form.successText")}
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 border border-border text-xs uppercase tracking-widest font-semibold hover:border-gold hover:text-gold transition-all cursor-pointer"
              >
                {t("meetings.form.submitAnother")}
              </button>
            </div>
          ) : (
            <div>
              <div className="text-center max-w-xl mx-auto mb-10">
                <span className="eyebrow">{t("meetings.form.eyebrow")}</span>
                <h3 className="font-display text-2xl md:text-3xl text-ocean-deep mt-2">
                  {t("meetings.form.title")}
                </h3>
                <div className="gold-divider mx-auto my-4" />
                <p className="text-xs text-muted-foreground">{t("meetings.form.subtitle")}</p>
              </div>

              <form onSubmit={handleSubmitProposal} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      {t("meetings.form.contactName")}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      {t("meetings.form.company")}
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      {t("meetings.form.email")}
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
                      {t("meetings.form.phone")}
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      {t("meetings.form.date")}
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      {t("meetings.form.guestsCount")}
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold cursor-pointer"
                    >
                      <option value="10-30">10 – 30 Guests</option>
                      <option value="30-100">30 – 100 Guests</option>
                      <option value="100-300">100 – 300 Guests</option>
                      <option value="300-700">300 – 700 Guests</option>
                      <option value="700+">700+ Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                    {t("meetings.form.details")}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold placeholder-muted-foreground/60"
                    placeholder={t("meetings.form.detailsPlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-ocean-deep hover:bg-gold text-white hover:text-ocean-deep text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer"
                >
                  {t("meetings.form.submitBtn")}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
