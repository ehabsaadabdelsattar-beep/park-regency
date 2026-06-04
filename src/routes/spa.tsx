import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { Clock, Leaf, Flame, Droplets } from "lucide-react";
import spa from "@/assets/spa.jpg";

export const Route = createFileRoute("/spa")({
  head: () => ({
    meta: [
      { title: "Spa & Wellness — Park Regency Sharm El Sheikh" },
      {
        name: "description",
        content:
          "A holistic spa journey inspired by the Sinai — Hammam rituals, signature massages and personalized wellness programs.",
      },
      { property: "og:title", content: "Spa & Wellness" },
      { property: "og:description", content: "Restore mind, body and spirit by the Red Sea." },
    ],
  }),
  component: SpaPage,
});

const treatments = [
  {
    icon: Flame,
    name: "Sinai Hammam Ritual",
    duration: "90 min",
    price: "180",
    text: "Steam, exfoliation and a black-soap cleanse rooted in centuries-old Egyptian tradition.",
  },
  {
    icon: Leaf,
    name: "Aromatherapy Massage",
    duration: "60 min",
    price: "140",
    text: "Tailored essential-oil blend with deep tissue and Swedish techniques.",
  },
  {
    icon: Droplets,
    name: "Red Sea Salt Glow",
    duration: "75 min",
    price: "160",
    text: "Mineral-rich scrub followed by a hydrating wrap and rain-shower rinse.",
  },
  {
    icon: Clock,
    name: "Couples Retreat",
    duration: "120 min",
    price: "420",
    text: "Private suite with side-by-side rituals, champagne and a candlelit bath.",
  },
];

function SpaPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Spa & Wellness"
        title="A sanctuary for body and spirit"
        subtitle="Holistic rituals drawn from the timeless wisdom of the Sinai."
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
            <span className="eyebrow">The Sanctuary</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">
              Twelve treatment suites. One philosophy.
            </h2>
            <div className="gold-divider my-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our spa unfolds across 2,000 m² of marble, soft light and the quiet hush of running
              water. Twelve treatment suites, a traditional Hammam, hydrotherapy circuit and a
              heated indoor pool form the foundation of every journey.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every ritual begins with a private consultation and ends with herbal tea on the
              terrace.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow">Treatments</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Signature rituals</h2>
            <div className="gold-divider mx-auto my-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {treatments.map(({ icon: Icon, ...t }) => (
              <article key={t.name} className="bg-background p-8 shadow-card flex gap-6">
                <Icon className="h-9 w-9 text-gold shrink-0" strokeWidth={1.2} />
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl text-ocean-deep">{t.name}</h3>
                    <div className="font-display text-xl text-ocean-deep">${t.price}</div>
                  </div>
                  <div className="eyebrow mt-1">{t.duration}</div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{t.text}</p>
                  <button className="mt-4 text-xs uppercase tracking-[0.2em] text-gold hover:text-ocean-deep">
                    Book Treatment →
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
