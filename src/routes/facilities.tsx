import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Waves,
  Heart,
  Crown,
  Smile,
  Trophy,
  Anchor,
  Plane,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import spa from "@/assets/spa.jpg";
import pool from "@/assets/pool.jpg";
import dining from "@/assets/dining.jpg";
import hero from "@/assets/hero.jpg";
import welcome from "@/assets/welcome.jpg";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities & Amenities — Park Regency Sharm El Sheikh" },
      {
        name: "description",
        content:
          "Discover 5-star amenities at Park Regency. Award-winning spa, private beaches, fitness club, PADI dive center, and airport valet.",
      },
    ],
  }),
  component: FacilitiesPage,
});

interface FacilityItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  img: string;
  link?: string;
  tag?: string;
}

function FacilitiesPage() {
  const { t } = useTranslation();

  const facilities: FacilityItem[] = [
    {
      id: "oasis-spa",
      icon: Sparkles,
      title: "Oasis Spa & Wellness",
      description:
        "Indulge in holistic therapies, traditional Turkish hammams, and therapeutic scrubs inspired by Sinai minerals. A sanctuary of restoration.",
      img: spa,
      link: "/spa",
      tag: "Award Winning",
    },
    {
      id: "cascading-pools",
      icon: Waves,
      title: "Cascading Pools",
      description:
        "Three interconnected freshwater lagoon pools, dynamic waterfalls, lazy rivers, and outdoor jacuzzis surrounded by lush botanical gardens.",
      img: pool,
      link: "/virtual-tour",
      tag: "Heated in Winter",
    },
    {
      id: "regency-club",
      icon: Crown,
      title: "Regency Club",
      description:
        "An exclusive VIP retreat offering private beach areas, club pool, private lounge, gourmet breakfast, afternoon teas, and evening cocktails.",
      img: welcome,
      link: "/regency-club",
      tag: "VIP Access",
    },
    {
      id: "padi-dive",
      icon: Anchor,
      title: "PADI Diving Center",
      description:
        "Explore the legendary corals and underwater marine life of Gardens Bay with our expert, certified PADI instructors and diving excursions.",
      img: hero,
      link: "/dive-center",
      tag: "Gardens Bay Reef",
    },
    {
      id: "kids-club",
      icon: Smile,
      title: "Regency Kids Club",
      description:
        "A secure, interactive playground with kids pool, slide, scheduled daily educational crafts, movie sessions, and professional care.",
      img: pool,
      tag: "Complimentary for Guests",
    },
    {
      id: "sports-center",
      icon: Trophy,
      title: "Sports Center & Courts",
      description:
        "Five championship floodlit tennis courts, squash courts, table tennis, and beach volleyball zones for competitive recreation.",
      img: dining,
      tag: "Equipment Provided",
    },
    {
      id: "olympus-fitness",
      icon: Heart,
      title: "Club Olympus Fitness",
      description:
        "Fully equipped gym overlooking the Red Sea. Features premium Technogym cardio systems, free weights, sauna, and private steam rooms.",
      img: spa,
      tag: "24/7 Access",
    },
    {
      id: "airport-concierge",
      icon: Plane,
      title: "Airport Concierge Services",
      description:
        "Bespoke airport greetings, fast-track customs assistance, and premium private Mercedes-Benz shuttle transfers to and from SSH airport.",
      img: welcome,
      tag: "Advance Booking Required",
    },
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow={t("facilities.heroEyebrow")}
        title={t("facilities.heroTitle")}
        subtitle={t("facilities.heroSubtitle")}
        image={pool}
      />

      <section className="py-24 container mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="eyebrow">{t("facilities.eyebrow")}</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 text-ocean-deep">
            {t("facilities.sectionTitle")}
          </h2>
          <div className="gold-divider mx-auto my-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                className="group bg-card border border-border shadow-card overflow-hidden hover:border-gold/50 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Image Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={fac.img}
                      alt={t(`facilities.items.${fac.id}.title`)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {fac.tag && (
                      <span className="absolute top-4 left-4 bg-ocean-deep/90 text-gold text-[9px] uppercase tracking-wider font-bold px-2 py-1">
                        {t(`facilities.items.${fac.id}.tag`)}
                      </span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4 text-gold">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground">
                        {t("facilities.resortFacility")}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl text-ocean-deep mb-3">
                      {t(`facilities.items.${fac.id}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`facilities.items.${fac.id}.description`)}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-8 pt-0 border-t border-transparent">
                  {fac.link ? (
                    <Link
                      to={fac.link}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold hover:text-ocean-deep transition-colors"
                    >
                      {t("facilities.exploreService")} <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                      {t("facilities.inquireConcierge")}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
