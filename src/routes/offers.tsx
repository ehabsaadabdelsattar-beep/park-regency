import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import hero from "@/assets/hero.jpg";
import pool from "@/assets/pool.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import wedding from "@/assets/wedding.jpg";
import dining from "@/assets/dining.jpg";
import spa from "@/assets/spa.jpg";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: i18n.t("offers.title") },
      {
        name: "description",
        content: i18n.t("offers.metaDesc"),
      },
      { property: "og:title", content: i18n.t("offers.ogTitle") },
      { property: "og:description", content: i18n.t("offers.ogDesc") },
    ],
  }),
  component: OffersPage,
});

function OffersPage() {
  const { t } = useTranslation();

  const offers = [
    {
      img: pool,
      tag: t("offers.items.summer.tag"),
      title: t("offers.items.summer.title"),
      save: t("offers.items.summer.save"),
      desc: t("offers.items.summer.desc"),
      bullets: t("offers.items.summer.bullets", { returnObjects: true }) as string[],
      price: "240",
    },
    {
      img: wedding,
      tag: t("offers.items.honeymoon.tag"),
      title: t("offers.items.honeymoon.title"),
      save: t("offers.items.honeymoon.save"),
      desc: t("offers.items.honeymoon.desc"),
      bullets: t("offers.items.honeymoon.bullets", { returnObjects: true }) as string[],
      price: "490",
    },
    {
      img: roomSuite,
      tag: t("offers.items.family.tag"),
      title: t("offers.items.family.title"),
      save: t("offers.items.family.save"),
      desc: t("offers.items.family.desc"),
      bullets: t("offers.items.family.bullets", { returnObjects: true }) as string[],
      price: "380",
    },
    {
      img: hero,
      tag: t("offers.items.longStay.tag"),
      title: t("offers.items.longStay.title"),
      save: t("offers.items.longStay.save"),
      desc: t("offers.items.longStay.desc"),
      bullets: t("offers.items.longStay.bullets", { returnObjects: true }) as string[],
      price: "210",
    },
    {
      img: dining,
      tag: t("offers.items.early.tag"),
      title: t("offers.items.early.title"),
      save: t("offers.items.early.save"),
      desc: t("offers.items.early.desc"),
      bullets: t("offers.items.early.bullets", { returnObjects: true }) as string[],
      price: "199",
    },
    {
      img: spa,
      tag: t("offers.items.wellness.tag"),
      title: t("offers.items.wellness.title"),
      save: t("offers.items.wellness.save"),
      desc: t("offers.items.wellness.desc"),
      bullets: t("offers.items.wellness.bullets", { returnObjects: true }) as string[],
      price: "320",
    },
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow={t("offers.heroEyebrow")}
        title={t("offers.heroTitle")}
        subtitle={t("offers.heroSubtitle")}
        image={pool}
        height="sm"
      />
      <section className="py-20 md:py-28 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {offers.map((o) => (
            <article
              key={o.title}
              className="group bg-card shadow-card overflow-hidden grid sm:grid-cols-5"
            >
              <div className="sm:col-span-2 relative overflow-hidden aspect-[4/3] sm:aspect-auto">
                <img
                  src={o.img}
                  alt={o.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-gold text-ocean-deep text-[10px] uppercase tracking-[0.22em] px-3 py-1.5">
                  {o.tag}
                </span>
              </div>
              <div className="sm:col-span-3 p-8 flex flex-col">
                <div className="eyebrow">{o.save}</div>
                <h3 className="font-display text-2xl mt-2 text-ocean-deep">{o.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {o.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-foreground/80">
                      <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6 flex items-end justify-between">
                  <div>
                    <div className="eyebrow">{t("offers.from")}</div>
                    <div className="font-display text-2xl text-ocean-deep">
                      ${o.price}
                      <span className="text-xs font-sans text-muted-foreground">
                        {" "}
                        {t("offers.night")}
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/booking"
                    className="px-5 py-3 text-xs uppercase tracking-[0.2em] bg-ocean-deep text-white hover:bg-gold hover:text-ocean-deep transition-colors"
                  >
                    {t("offers.book")}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
