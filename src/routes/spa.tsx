import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { Clock, Leaf, Flame, Droplets } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import spa from "@/assets/spa.jpg";

export const Route = createFileRoute("/spa")({
  head: () => ({
    meta: [
      { title: i18n.t("spa.title") },
      {
        name: "description",
        content: i18n.t("spa.metaDesc"),
      },
      { property: "og:title", content: i18n.t("spa.ogTitle") },
      { property: "og:description", content: i18n.t("spa.ogDesc") },
    ],
  }),
  component: SpaPage,
});

function SpaPage() {
  const { t } = useTranslation();

  const treatments = [
    {
      icon: Flame,
      name: t("spa.treatments.hammam.name"),
      duration: "90 min",
      price: "180",
      text: t("spa.treatments.hammam.text"),
    },
    {
      icon: Leaf,
      name: t("spa.treatments.aroma.name"),
      duration: "60 min",
      price: "140",
      text: t("spa.treatments.aroma.text"),
    },
    {
      icon: Droplets,
      name: t("spa.treatments.salt.name"),
      duration: "75 min",
      price: "160",
      text: t("spa.treatments.salt.text"),
    },
    {
      icon: Clock,
      name: t("spa.treatments.couples.name"),
      duration: "120 min",
      price: "420",
      text: t("spa.treatments.couples.text"),
    },
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow={t("spa.heroEyebrow")}
        title={t("spa.heroTitle")}
        subtitle={t("spa.heroSubtitle")}
        image={spa}
      />

      <section className="py-20 md:py-28 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={spa}
            alt="Spa treatment room"
            loading="lazy"
            className="w-full h-[560px] object-cover shadow-luxury"
          />
          <div>
            <span className="eyebrow">{t("spa.sanctuaryEyebrow")}</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">{t("spa.sanctuaryTitle")}</h2>
            <div className="gold-divider my-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">{t("spa.sanctuaryP1")}</p>
            <p className="text-muted-foreground leading-relaxed">{t("spa.sanctuaryP2")}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow">{t("spa.treatmentsEyebrow")}</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">{t("spa.treatmentsTitle")}</h2>
            <div className="gold-divider mx-auto my-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {treatments.map(({ icon: Icon, ...tItem }) => (
              <article key={tItem.name} className="bg-background p-8 shadow-card flex gap-6">
                <Icon className="h-9 w-9 text-gold shrink-0" strokeWidth={1.2} />
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl text-ocean-deep">{tItem.name}</h3>
                    <div className="font-display text-xl text-ocean-deep">${tItem.price}</div>
                  </div>
                  <div className="eyebrow mt-1">{tItem.duration}</div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{tItem.text}</p>
                  <button className="mt-4 text-xs uppercase tracking-[0.2em] text-gold hover:text-ocean-deep">
                    {t("spa.bookTreatment")}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
