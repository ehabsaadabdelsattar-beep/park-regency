import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { Sun, Umbrella, Waves } from "lucide-react";
import hero from "@/assets/hero.jpg";
import pool from "@/assets/pool.jpg";
import diving from "@/assets/diving.jpg";

export const Route = createFileRoute("/beaches")({
  head: () => ({
    meta: [
      { title: "Private Beaches — Park Regency Sharm El Sheikh" },
      {
        name: "description",
        content:
          "Three private beaches on the shores of Gardens Bay — from family coves to adults-only sanctuaries.",
      },
      { property: "og:title", content: "Private Beaches" },
      {
        property: "og:description",
        content: "Powder-soft sand, turquoise water, world-class coral.",
      },
    ],
  }),
  component: BeachesPage,
});

const beaches = [
  {
    img: hero,
    name: "Main Beach",
    focus: "Family",
    text: "A wide crescent of golden sand with a shaded promenade, beachfront café and a gentle reef entry suitable for all ages.",
  },
  {
    img: pool,
    name: "Sunset Cove",
    focus: "Adults only",
    text: "A serene adults-only enclave with cabanas, attentive beach service and a dedicated bar for sunset rituals.",
  },
  {
    img: diving,
    name: "Reef Bay",
    focus: "Snorkel & dive",
    text: "The resort's house reef begins steps from the shore — a living aquarium for snorkelers and beginner divers.",
  },
];

function BeachesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The Beaches"
        title="Three shores, one Red Sea"
        subtitle="A private kilometre of coastline reserved exclusively for our guests."
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
                {[
                  { icon: Sun, label: "All day service" },
                  { icon: Umbrella, label: "Cabanas" },
                  { icon: Waves, label: "Lifeguarded" },
                ].map(({ icon: Icon, label }) => (
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
