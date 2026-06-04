import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Compass, MapPin, Anchor, HelpCircle, Info } from "lucide-react";

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
      { title: "Local Attractions & Excursions — Park Regency Sharm El Sheikh" },
      {
        name: "description",
        content:
          "Explore the best of Sharm El Sheikh. From the world-famous dive sites of Ras Mohammed to desert safaris and historical monasteries.",
      },
    ],
  }),
  component: AttractionsPage,
});

interface AttractionItem {
  category: "beaches" | "diving" | "spa" | "pools" | "entertainment" | "kids" | "sports";
  title: string;
  distance: string;
  description: string;
  img: string;
  coordinates: string;
}

const items: AttractionItem[] = [
  {
    category: "beaches",
    title: "Gardens Bay Private Beach",
    distance: "Direct Access",
    description:
      "Our private three-tier beach offers soft sands, private cabanas, and immediate reef entry. Widely regarded as Sharm El Sheikh's most tranquil cove.",
    img: roomSeaView,
    coordinates: "Resort Grounds",
  },
  {
    category: "diving",
    title: "Ras Mohammed National Park",
    distance: "40 mins by Boat",
    description:
      "Ranked among the top ten dive sites globally. Explore vertical coral walls, shipwrecks, and shark observatories with legendary marine biodiversity.",
    img: diving,
    coordinates: "Red Sea Marine Protected Area",
  },
  {
    category: "diving",
    title: "Straits of Tiran",
    distance: "30 mins by Boat",
    description:
      "Home to four dramatic reef systems (Jackson, Woodhouse, Thomas, Gordon) rising from deep water, attracting turtles, barracuda, and hammerheads.",
    img: hero,
    coordinates: "Gulf of Aqaba Entrance",
  },
  {
    category: "spa",
    title: "Bedouin Desert Spa Stargazing",
    distance: "25 mins away",
    description:
      "An authentic desert wellness experience. Enjoy hot sand therapy, customized oil massage in private luxury tents, and traditional Bedouin herbal tea under the stars.",
    img: spa,
    coordinates: "Sinai Desert Echo Valley",
  },
  {
    category: "pools",
    title: "Gardens Bay Lagoon Complex",
    distance: "Direct Access",
    description:
      "Our landmark multi-level lagoon features high waterfalls, a cave pool, lazy river channels, and separate quiet zones for premium adult relaxation.",
    img: pool,
    coordinates: "Resort Center",
  },
  {
    category: "entertainment",
    title: "Soho Square Sharm El Sheikh",
    distance: "10 mins by Shuttle",
    description:
      "A premier entertainment, shopping, and dining hub. Features high-end boutiques, ice skating, dancing fountains, and international restaurants.",
    img: welcome,
    coordinates: "Shark's Bay District",
  },
  {
    category: "kids",
    title: "Naama Bay Water Park",
    distance: "15 mins away",
    description:
      "A massive kids-friendly water park featuring over 30 slides, splash grounds, wave pools, and dedicated dining zones perfect for a full family day out.",
    img: pool,
    coordinates: "Naama District Center",
  },
  {
    category: "sports",
    title: "Jolie Ville Championship Golf Course",
    distance: "12 mins by Taxi",
    description:
      "An 18-hole par 72 championship golf course set amidst artificial lakes, offering spectacular mountain ranges and Red Sea vistas.",
    img: dining,
    coordinates: "Sharm El Sheikh North",
  },
];

function AttractionsPage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Sights" },
    { id: "beaches", label: "Beaches" },
    { id: "diving", label: "Diving & Snorkeling" },
    { id: "spa", label: "Spa & Desert" },
    { id: "pools", label: "Pool Complexes" },
    { id: "entertainment", label: "Entertainment" },
    { id: "kids", label: "Kids Activities" },
    { id: "sports", label: "Sports" },
  ];

  const filteredItems = filter === "all" ? items : items.filter((item) => item.category === filter);

  return (
    <PageShell>
      <PageHero
        eyebrow="Sinai Discoveries"
        title="Area Attractions"
        subtitle="Venture beyond the resort gates to discover spectacular reef systems, rich histories, and vibrant entertainment hubs."
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
                  <span className="eyebrow block mb-2">{att.category}</span>
                  <h3 className="font-display text-2xl text-ocean-deep mb-3">{att.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{att.description}</p>
                </div>
              </div>

              <div className="p-8 pt-0 border-t border-transparent flex items-center justify-between text-xs text-muted-foreground uppercase font-medium">
                <span className="flex items-center gap-1">
                  <Compass className="h-3.5 w-3.5 text-gold" /> {att.coordinates}
                </span>
                <Link to="/contact" className="text-gold hover:text-ocean-deep font-semibold">
                  Book Excursion
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No attractions found in this category.
          </div>
        )}
      </section>

      {/* CONCIERGE CALLOUT */}
      <section className="bg-ocean-deep py-20 text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="eyebrow text-gold">Custom Excursion Planning</span>
          <h2 className="font-display text-3xl md:text-5xl mt-3 mb-6">
            Let Our Clefs d'Or Concierge Guide You
          </h2>
          <p className="text-white/80 leading-relaxed mb-8">
            From private yacht charters at sunrise to customized desert safaris and historical tours
            of Mount Sinai, our certified team is dedicated to crafting bespoke itineraries tailored
            to your exact preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gold text-ocean-deep hover:bg-white hover:text-ocean-deep transition-colors text-xs font-semibold uppercase tracking-widest"
            >
              Contact Concierge
            </Link>
            <a
              href="https://wa.me/20693600000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/40 hover:bg-white/10 transition-colors text-xs font-semibold uppercase tracking-widest inline-flex items-center justify-center gap-2"
            >
              WhatsApp Concierge
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
