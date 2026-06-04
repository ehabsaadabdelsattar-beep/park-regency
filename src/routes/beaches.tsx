import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { Sun, Umbrella, Waves } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import hero from "@/assets/hero.jpg";
import pool from "@/assets/pool.jpg";
import diving from "@/assets/diving.jpg";

export const Route = createFileRoute("/beaches")({
  head: () => ({
    meta: [
      { title: `${i18n.t("beaches.title")}` },
      {
        name: "description",
        content: i18n.t("beaches.metaDesc"),
      },
      { property: "og:title", content: i18n.t("beaches.ogTitle") },
      { property: "og:description", content: i18n.t("beaches.ogDesc") },
    ],
  }),
  component: BeachesPage,
});

function BeachesPage() {
  const { t } = useTranslation();

  const beaches = [
    {
      img: hero,
      name: t("beaches.items.main.name"),
      focus: t("beaches.items.main.focus"),
      text: t("beaches.items.main.text"),
      features: [
        { icon: Sun, label: t("beaches.items.main.allDay", "All day service") },
        { icon: Umbrella, label: t("beaches.items.main.cabanas", "Cabanas") },
        { icon: Waves, label: t("beaches.items.main.lifeguard", "Lifeguarded") },
      ],
    },
    {
      img: pool,
      name: t("beaches.items.sunset.name"),
      focus: t("beaches.items.sunset.focus"),
      text: t("beaches.items.sunset.text"),
      features: [
        { icon: Sun, label: t("beaches.items.main.allDay", "All day service") },
        { icon: Umbrella, label: t("beaches.items.main.cabanas", "Cabanas") },
      ],
    },
    {
      img: diving,
      name: t("beaches.items.reef.name"),
      focus: t("beaches.items.reef.focus"),
      text: t("beaches.items.reef.text"),
      features: [{ icon: Waves, label: t("beaches.items.main.lifeguard", "Lifeguarded") }],
    },
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow={t("beaches.heroEyebrow")}
        title={t("beaches.heroTitle")}
        subtitle={t("beaches.heroSubtitle")}
        image={hero}
      />

      <section className="py-20 md:py-28 container mx-auto px-6 space-y-20">
        {beaches.map((b, i) => (
          <article
            key={b.name}
            className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:flex-row-reverse" : ""}`}
          >
            <img
              src={b.img}
              alt={b.name}
              loading="lazy"
              className={`w-full h-[480px] object-cover shadow-luxury ${i % 2 ? "lg:order-2" : ""}`}
            />
            <div className={i % 2 ? "lg:order-1" : ""}>
              <span className="eyebrow">{b.focus}</span>
              <h2 className="font-display text-4xl md:text-5xl mt-3 text-ocean-deep">{b.name}</h2>
              <div className="gold-divider my-6" />
              <p className="text-muted-foreground leading-relaxed">{b.text}</p>
              <div className="mt-8 flex gap-6 text-sm">
                {b.features.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-muted-foreground">
                    <Icon className="h-4 w-4 text-gold" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
