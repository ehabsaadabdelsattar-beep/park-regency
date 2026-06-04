import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { Crown, Wine, Coffee, Sparkles, Clock, UserCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import roomSuite from "@/assets/room-suite.jpg";
import welcome from "@/assets/welcome.jpg";

export const Route = createFileRoute("/regency-club")({
  head: () => ({
    meta: [
      { title: i18n.t("regencyClub.title") },
      {
        name: "description",
        content: i18n.t("regencyClub.metaDesc"),
      },
      { property: "og:title", content: i18n.t("regencyClub.ogTitle") },
      { property: "og:description", content: i18n.t("regencyClub.ogDesc") },
    ],
  }),
  component: ClubPage,
});

function ClubPage() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: UserCheck,
      title: t("regencyClub.benefits.checkin.title"),
      text: t("regencyClub.benefits.checkin.text"),
    },
    {
      icon: Crown,
      title: t("regencyClub.benefits.butler.title"),
      text: t("regencyClub.benefits.butler.text"),
    },
    {
      icon: Coffee,
      title: t("regencyClub.benefits.lounge.title"),
      text: t("regencyClub.benefits.lounge.text"),
    },
    {
      icon: Wine,
      title: t("regencyClub.benefits.bar.title"),
      text: t("regencyClub.benefits.bar.text"),
    },
    {
      icon: Sparkles,
      title: t("regencyClub.benefits.spa.title"),
      text: t("regencyClub.benefits.spa.text"),
    },
    {
      icon: Clock,
      title: t("regencyClub.benefits.flexible.title"),
      text: t("regencyClub.benefits.flexible.text"),
    },
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow={t("regencyClub.heroEyebrow")}
        title={t("regencyClub.heroTitle")}
        subtitle={t("regencyClub.heroSubtitle")}
        image={roomSuite}
      />

      <section className="py-20 md:py-28 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={welcome}
            alt="Regency Club lounge"
            loading="lazy"
            className="w-full h-[560px] object-cover shadow-luxury"
          />
          <div>
            <span className="eyebrow">{t("regencyClub.privilegeEyebrow")}</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4">
              {t("regencyClub.privilegeTitle")}
            </h2>
            <div className="gold-divider my-6" />
            <p className="text-muted-foreground leading-relaxed mb-5">
              {t("regencyClub.privilegeP1")}
            </p>
            <p className="text-muted-foreground leading-relaxed">{t("regencyClub.privilegeP2")}</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">{t("regencyClub.privilegesEyebrow")}</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4">
              {t("regencyClub.privilegesTitle")}
            </h2>
            <div className="gold-divider mx-auto my-6" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-background p-10">
                <Icon className="h-9 w-9 text-gold" strokeWidth={1.2} />
                <h3 className="font-display text-xl mt-5 text-ocean-deep">{title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              to="/booking"
              className="inline-block px-10 py-4 bg-gold text-ocean-deep text-xs uppercase tracking-[0.22em] hover:bg-ocean-deep hover:text-white transition-colors"
            >
              {t("regencyClub.reserve")}
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
