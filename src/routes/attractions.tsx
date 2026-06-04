import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { Compass, MapPin } from "lucide-react";

import diving from "@/assets/diving.jpg";
import dining from "@/assets/dining.jpg";
import spa from "@/assets/spa.jpg";
import pool from "@/assets/pool.jpg";
import roomSeaView from "@/assets/room-sea-view.jpg";
import welcome from "@/assets/welcome.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/attractions")({
  head: () => ({
    meta: [
      { title: i18n.t("attractions.title") },
      {
        name: "description",
        content: i18n.t("attractions.metaDesc"),
      },
    ],
  }),
  component: AttractionsPage,
});

interface AttractionItem {
  category: string;
  title: string;
  distance: string;
  description: string;
  img: string;
  coordinates: string;
}

function AttractionsPage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: t("attractions.categories.all") },
    { id: "beaches", label: t("attractions.categories.beaches") },
    { id: "diving", label: t("attractions.categories.diving") },
    { id: "spa", label: t("attractions.categories.spa") },
    { id: "pools", label: t("attractions.categories.pools") },
    { id: "entertainment", label: t("attractions.categories.entertainment") },
    { id: "kids", label: t("attractions.categories.kids") },
    { id: "sports", label: t("attractions.categories.sports") },
  ];

  const items: AttractionItem[] = [
    {
      category: "beaches",
      title: t("attractions.items.gardensBay.title"),
      distance: t("attractions.items.gardensBay.distance"),
      description: t("attractions.items.gardensBay.desc"),
      img: roomSeaView,
      coordinates: t("attractions.items.gardensBay.coords"),
    },
    {
      category: "diving",
      title: t("attractions.items.rasMohammed.title"),
      distance: t("attractions.items.rasMohammed.distance"),
      description: t("attractions.items.rasMohammed.desc"),
      img: diving,
      coordinates: t("attractions.items.rasMohammed.coords"),
    },
    {
      category: "diving",
      title: t("attractions.items.tiran.title"),
      distance: t("attractions.items.tiran.distance"),
      description: t("attractions.items.tiran.desc"),
      img: hero,
      coordinates: t("attractions.items.tiran.coords"),
    },
    {
      category: "spa",
      title: t("attractions.items.bedouinSpa.title"),
      distance: t("attractions.items.bedouinSpa.distance"),
      description: t("attractions.items.bedouinSpa.desc"),
      img: spa,
      coordinates: t("attractions.items.bedouinSpa.coords"),
    },
    {
      category: "pools",
      title: t("attractions.items.lagoon.title"),
      distance: t("attractions.items.lagoon.distance"),
      description: t("attractions.items.lagoon.desc"),
      img: pool,
      coordinates: t("attractions.items.lagoon.coords"),
    },
    {
      category: "entertainment",
      title: t("attractions.items.soho.title"),
      distance: t("attractions.items.soho.distance"),
      description: t("attractions.items.soho.desc"),
      img: welcome,
      coordinates: t("attractions.items.soho.coords"),
    },
    {
      category: "kids",
      title: t("attractions.items.naama.title"),
      distance: t("attractions.items.naama.distance"),
      description: t("attractions.items.naama.desc"),
      img: pool,
      coordinates: t("attractions.items.naama.coords"),
    },
    {
      category: "sports",
      title: t("attractions.items.golf.title"),
      distance: t("attractions.items.golf.distance"),
      description: t("attractions.items.golf.desc"),
      img: dining,
      coordinates: t("attractions.items.golf.coords"),
    },
  ];

  const filteredItems = filter === "all" ? items : items.filter((item) => item.category === filter);

  return (
    <PageShell>
      <PageHero
        eyebrow={t("attractions.heroEyebrow")}
        title={t("attractions.heroTitle")}
        subtitle={t("attractions.heroSubtitle")}
        image={diving}
      />

      {/* FILTER TABS */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer border ${
                  filter === cat.id
                    ? "bg-ocean-deep text-white border-ocean-deep"
                    : "bg-card text-muted-foreground border-border hover:border-gold/50 hover:text-gold"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((att, idx) => (
            <article
              key={idx}
              className="group bg-card border border-border shadow-card overflow-hidden hover:border-gold/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={att.img}
                    alt={att.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-[10px] uppercase font-semibold px-2.5 py-1 flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-gold" /> {att.distance}
                  </span>
                </div>

                <div className="p-8">
                  <span className="eyebrow block mb-2">
                    {t(`attractions.categories.${att.category}`)}
                  </span>
                  <h3 className="font-display text-2xl text-ocean-deep mb-3">{att.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{att.description}</p>
                </div>
              </div>

              <div className="p-8 pt-0 border-t border-transparent flex items-center justify-between text-xs text-muted-foreground uppercase font-medium">
                <span className="flex items-center gap-1">
                  <Compass className="h-3.5 w-3.5 text-gold" /> {att.coordinates}
                </span>
                <Link to="/contact" className="text-gold hover:text-ocean-deep font-semibold">
                  {t("attractions.bookExcursion")}
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            {t("attractions.noAttractions")}
          </div>
        )}
      </section>

      {/* CONCIERGE CALLOUT */}
      <section className="bg-ocean-deep py-20 text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="eyebrow text-gold">{t("attractions.conciergeEyebrow")}</span>
          <h2 className="font-display text-3xl md:text-5xl mt-3 mb-6">
            {t("attractions.conciergeTitle")}
          </h2>
          <p className="text-white/80 leading-relaxed mb-8">{t("attractions.conciergeText")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gold text-ocean-deep hover:bg-white hover:text-ocean-deep transition-colors text-xs font-semibold uppercase tracking-widest"
            >
              {t("attractions.contactConcierge")}
            </Link>
            <a
              href="https://wa.me/20693600000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/40 hover:bg-white/10 transition-colors text-xs font-semibold uppercase tracking-widest inline-flex items-center justify-center gap-2"
            >
              {t("attractions.whatsappConcierge")}
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
