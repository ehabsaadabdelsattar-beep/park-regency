import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import hero from "@/assets/hero.jpg";
import welcome from "@/assets/welcome.jpg";
import roomSeaView from "@/assets/room-sea-view.jpg";
import roomSeaFront from "@/assets/room-sea-front.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import dining from "@/assets/dining.jpg";
import wedding from "@/assets/wedding.jpg";
import diving from "@/assets/diving.jpg";
import spa from "@/assets/spa.jpg";
import pool from "@/assets/pool.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Park Regency Sharm El Sheikh" },
      {
        name: "description",
        content:
          "Explore the beaches, suites, restaurants, spa and gardens of Park Regency Sharm El Sheikh through our photo gallery.",
      },
      { property: "og:title", content: "Park Regency Gallery" },
      {
        property: "og:description",
        content: "A visual journey through the Park Regency Resort experience.",
      },
    ],
  }),
  component: GalleryPage,
});

const categories = [
  "All",
  "Beaches",
  "Rooms",
  "Dining",
  "Spa",
  "Pools",
  "Weddings",
  "Activities",
] as const;

const photos: { src: string; cat: string; alt: string }[] = [
  { src: hero, cat: "Beaches", alt: "Aerial view of resort" },
  { src: welcome, cat: "Rooms", alt: "Lobby" },
  { src: roomSeaView, cat: "Rooms", alt: "Sea View room" },
  { src: roomSeaFront, cat: "Rooms", alt: "Sea Front room" },
  { src: roomSuite, cat: "Rooms", alt: "Royal Suite" },
  { src: dining, cat: "Dining", alt: "Signature restaurant" },
  { src: wedding, cat: "Weddings", alt: "Beach wedding" },
  { src: diving, cat: "Activities", alt: "Diving in Red Sea" },
  { src: spa, cat: "Spa", alt: "Spa treatment" },
  { src: pool, cat: "Pools", alt: "Infinity pool" },
  { src: hero, cat: "Beaches", alt: "Private beach" },
  { src: pool, cat: "Pools", alt: "Pool deck at sunset" },
];

function GalleryPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Gallery"
        title="A visual journey"
        subtitle="From sunrise on the Red Sea to candlelit dinners under the stars."
        image={hero}
        height="sm"
      />
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((c) => (
            <button
              key={c}
              className="px-5 py-2 text-xs uppercase tracking-[0.2em] border border-border hover:bg-ocean-deep hover:text-white hover:border-ocean-deep transition-colors"
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden ${i % 5 === 0 ? "md:row-span-2 md:col-span-2 aspect-square" : "aspect-square"}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ocean-deep/0 group-hover:bg-ocean-deep/30 transition-colors" />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs uppercase tracking-[0.18em] text-white bg-ocean-deep/70 px-3 py-1">
                  {p.cat}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            to="/booking"
            className="inline-block px-10 py-4 bg-gold text-ocean-deep text-xs uppercase tracking-[0.22em] hover:bg-ocean-deep hover:text-white transition-colors"
          >
            Book Your Stay
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
