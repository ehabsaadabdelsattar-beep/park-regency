import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { Check } from "lucide-react";
import hero from "@/assets/hero.jpg";
import pool from "@/assets/pool.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import wedding from "@/assets/wedding.jpg";
import dining from "@/assets/dining.jpg";
import spa from "@/assets/spa.jpg";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Special Offers — Park Regency Sharm El Sheikh" },
      {
        name: "description",
        content:
          "Exclusive packages: Summer Escape, Honeymoon, Family, Long Stay and Early Booking offers at Park Regency Sharm El Sheikh.",
      },
      { property: "og:title", content: "Special Offers at Park Regency" },
      { property: "og:description", content: "Save more on your Red Sea luxury stay." },
    ],
  }),
  component: OffersPage,
});

const offers = [
  {
    img: pool,
    tag: "Seasonal",
    title: "Summer Escape",
    save: "Save 25%",
    desc: "Beat the heat with sun-drenched days by the Red Sea, daily breakfast and a complimentary cocktail.",
    bullets: ["Daily breakfast for two", "Welcome cocktail", "Late check-out", "20% off spa"],
    price: "240",
  },
  {
    img: wedding,
    tag: "Romance",
    title: "Honeymoon Package",
    save: "Bonus inclusions",
    desc: "Begin your forever with rose-petal turndown, champagne and a private candlelit dinner on the beach.",
    bullets: [
      "5-night minimum",
      "Private beach dinner",
      "Couples spa ritual",
      "Suite upgrade subject to availability",
    ],
    price: "490",
  },
  {
    img: roomSuite,
    tag: "Families",
    title: "Family Package",
    save: "Kids stay & eat free",
    desc: "Connecting rooms, supervised kids' club and family activities on the reef.",
    bullets: [
      "2 kids under 12 free",
      "Daily kids' club",
      "Family snorkel session",
      "Pool-side cabana",
    ],
    price: "380",
  },
  {
    img: hero,
    tag: "Extended",
    title: "Long Stay Offer",
    save: "Stay 7, pay 5",
    desc: "Settle in. Two nights on us when you book a week or more, with weekly laundry and butler service.",
    bullets: ["Min 7 nights", "Two free nights", "Weekly laundry", "Personal concierge"],
    price: "210",
  },
  {
    img: dining,
    tag: "Plan ahead",
    title: "Early Booking",
    save: "Save 30%",
    desc: "Book 60+ days in advance and enjoy our best available rate plus daily half-board dining.",
    bullets: ["60-day advance", "Half-board included", "Free cancellation", "Best rate guarantee"],
    price: "199",
  },
  {
    img: spa,
    tag: "Wellness",
    title: "Wellness Retreat",
    save: "Spa credit $200",
    desc: "Daily yoga, a personalised wellness journey and a $200 spa credit per stay.",
    bullets: [
      "Daily yoga & meditation",
      "$200 spa credit",
      "Wellness breakfast",
      "Aqua-fitness classes",
    ],
    price: "320",
  },
];

function OffersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Special Offers"
        title="Exclusive packages, crafted for you"
        subtitle="Hand-picked offers across the seasons — from honeymoons to family escapes."
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
                  {o.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-foreground/80">
                      <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6 flex items-end justify-between">
                  <div>
                    <div className="eyebrow">From</div>
                    <div className="font-display text-2xl text-ocean-deep">
                      ${o.price}
                      <span className="text-xs font-sans text-muted-foreground"> /night</span>
                    </div>
                  </div>
                  <Link
                    to="/booking"
                    className="px-5 py-3 text-xs uppercase tracking-[0.2em] bg-ocean-deep text-white hover:bg-gold hover:text-ocean-deep transition-colors"
                  >
                    Book
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
