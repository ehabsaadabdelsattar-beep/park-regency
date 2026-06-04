import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { Award, Waves, Compass, Fish, GraduationCap, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import diving from "@/assets/diving.jpg";

export const Route = createFileRoute("/dive-center")({
  head: () => ({
    meta: [
      { title: i18n.t("diveCenter.title") },
      {
        name: "description",
        content: i18n.t("diveCenter.metaDesc"),
      },
      { property: "og:title", content: i18n.t("diveCenter.ogTitle") },
      {
        property: "og:description",
        content: i18n.t("diveCenter.ogDesc"),
      },
    ],
  }),
  component: DivePage,
});

function DivePage() {
  const { t } = useTranslation();

  const courses = [
    {
      title: t("diveCenter.courses.discover.title"),
      level: t("diveCenter.courses.discover.level"),
      duration: t("diveCenter.courses.discover.duration"),
      price: "85",
      text: t("diveCenter.courses.discover.text"),
    },
    {
      title: t("diveCenter.courses.openWater.title"),
      level: t("diveCenter.courses.openWater.level"),
      duration: t("diveCenter.courses.openWater.duration"),
      price: "420",
      text: t("diveCenter.courses.openWater.text"),
    },
    {
      title: t("diveCenter.courses.advanced.title"),
      level: t("diveCenter.courses.advanced.level"),
      duration: t("diveCenter.courses.advanced.duration"),
      price: "320",
      text: t("diveCenter.courses.advanced.text"),
    },
    {
      title: t("diveCenter.courses.rescue.title"),
      level: t("diveCenter.courses.rescue.level"),
      duration: t("diveCenter.courses.rescue.duration"),
      price: "390",
      text: t("diveCenter.courses.rescue.text"),
    },
  ];

  const sites = [
    {
      name: t("diveCenter.sites.rasM.name"),
      text: t("diveCenter.sites.rasM.text"),
    },
    {
      name: t("diveCenter.sites.tiran.name"),
      text: t("diveCenter.sites.tiran.text"),
    },
    {
      name: t("diveCenter.sites.thistlegorm.name"),
      text: t("diveCenter.sites.thistlegorm.text"),
    },
    {
      name: t("diveCenter.sites.shark.name"),
      text: t("diveCenter.sites.shark.text"),
    },
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow={t("diveCenter.heroEyebrow")}
        title={t("diveCenter.heroTitle")}
        subtitle={t("diveCenter.heroSubtitle")}
        image={diving}
      />

      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-px bg-border max-w-5xl mx-auto">
          {[
            { icon: Award, title: t("diveCenter.padi") },
            { icon: ShieldCheck, title: t("diveCenter.safety") },
            { icon: GraduationCap, title: t("diveCenter.multilingual") },
          ].map(({ icon: Icon, title }) => (
            <div key={title} className="bg-background p-8 text-center">
              <Icon className="h-9 w-9 text-gold mx-auto" strokeWidth={1.2} />
              <div className="font-display text-lg text-ocean-deep mt-4">{title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow">{t("diveCenter.coursesEyebrow")}</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">
              {t("diveCenter.coursesTitle")}
            </h2>
            <div className="gold-divider mx-auto my-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {courses.map((c) => (
              <article key={c.title} className="bg-background p-8 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{c.level}</span>
                  <span className="text-xs text-muted-foreground">{c.duration}</span>
                </div>
                <h3 className="font-display text-2xl text-ocean-deep mt-3">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{c.text}</p>
                <div className="mt-6 flex items-end justify-between pt-5 border-t border-border">
                  <div className="font-display text-2xl text-ocean-deep">${c.price}</div>
                  <button className="text-xs uppercase tracking-[0.2em] text-gold hover:text-ocean-deep">
                    {t("diveCenter.enquire")}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="eyebrow">{t("diveCenter.sitesEyebrow")}</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">{t("diveCenter.sitesTitle")}</h2>
            <div className="gold-divider my-6" />
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t("diveCenter.sitesDesc")}
            </p>
            <ul className="space-y-5">
              {sites.map((s) => (
                <li key={s.name} className="flex gap-4">
                  <Fish className="h-5 w-5 text-gold shrink-0 mt-1" />
                  <div>
                    <div className="font-display text-lg text-ocean-deep">{s.name}</div>
                    <div className="text-sm text-muted-foreground mt-1">{s.text}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={diving}
            alt="Diving in the Red Sea"
            loading="lazy"
            className="w-full h-[560px] object-cover shadow-luxury"
          />
        </div>
      </section>
    </PageShell>
  );
}
