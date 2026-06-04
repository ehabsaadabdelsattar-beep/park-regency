import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { Award, Users, Heart, Leaf } from "lucide-react";
import welcome from "@/assets/welcome.jpg";
import hero from "@/assets/hero.jpg";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `${i18n.t("about.title")} — Park Regency Sharm El Sheikh` },
      {
        name: "description",
        content: i18n.t("about.metaDesc"),
      },
      { property: "og:title", content: i18n.t("about.ogTitle") },
      { property: "og:description", content: i18n.t("about.ogDesc") },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Heart,
      title: t("about.values.intuitiveService"),
      text: t("about.values.intuitiveServiceText"),
    },
    {
      icon: Award,
      title: t("about.values.craftsmanship"),
      text: t("about.values.craftsmanshipText"),
    },
    {
      icon: Leaf,
      title: t("about.values.sustainability"),
      text: t("about.values.sustainabilityText"),
    },
    {
      icon: Users,
      title: t("about.values.community"),
      text: t("about.values.communityText"),
    },
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow={t("about.heroEyebrow")}
        title={t("about.heroTitle")}
        subtitle={t("about.heroSubtitle")}
        image={welcome}
      />

      <section className="py-20 md:py-28 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="eyebrow">{t("about.ourStory")}</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">{t("about.storyTitle")}</h2>
            <div className="gold-divider my-6" />
            <p className="text-muted-foreground leading-relaxed mb-5">{t("about.storyP1")}</p>
            <p className="text-muted-foreground leading-relaxed">{t("about.storyP2")}</p>
          </div>
          <img
            src={hero}
            alt="Resort grounds"
            loading="lazy"
            className="w-full h-[560px] object-cover shadow-luxury"
          />
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="eyebrow">{t("about.ourValues")}</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">{t("about.valuesTitle")}</h2>
            <div className="gold-divider mx-auto my-6" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-background p-8">
                <Icon className="h-9 w-9 text-gold" strokeWidth={1.2} />
                <h3 className="font-display text-xl mt-5 text-ocean-deep">{title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-ocean-deep">
          {t("about.beginStory")}
        </h2>
        <div className="gold-divider mx-auto my-6" />
        <Link
          to="/booking"
          className="inline-block mt-4 px-10 py-4 bg-gold text-ocean-deep text-xs uppercase tracking-[0.22em] hover:bg-ocean-deep hover:text-white transition-colors"
        >
          {t("about.bookStay")}
        </Link>
      </section>
    </PageShell>
  );
}
