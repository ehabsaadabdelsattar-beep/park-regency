import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { Play, Maximize } from "lucide-react";
import hero from "@/assets/hero.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import pool from "@/assets/pool.jpg";
import dining from "@/assets/dining.jpg";
import spa from "@/assets/spa.jpg";

export const Route = createFileRoute("/virtual-tour")({
  head: () => ({
    meta: [
      { title: "Virtual Tour — Park Regency Sharm El Sheikh" },
      {
        name: "description",
        content:
          "Step inside Park Regency with our immersive 360° virtual tour — rooms, beaches, restaurants and spa.",
      },
      { property: "og:title", content: "360° Virtual Tour" },
      { property: "og:description", content: "Experience the resort before you arrive." },
    ],
  }),
  component: TourPage,
});

const scenes = [
  { img: hero, label: "Main Beach" },
  { img: roomSuite, label: "Royal Suite" },
  { img: pool, label: "Infinity Pool" },
  { img: dining, label: "Sala Thai" },
  { img: spa, label: "Spa Reception" },
];

function TourPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Virtual Tour"
        title="Step inside Park Regency"
        subtitle="Wander our beaches, suites and dining venues in immersive 360°."
        image={hero}
        height="sm"
      />

      <section className="py-16 container mx-auto px-6">
        <div className="relative aspect-video bg-ocean-deep max-w-6xl mx-auto shadow-luxury overflow-hidden group">
          <img
            src={hero}
            alt="360 tour preview"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 to-transparent" />
          <button className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="h-20 w-20 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="h-8 w-8 text-ocean-deep fill-current ml-1" />
            </div>
            <div className="mt-6 font-display text-3xl">Launch 360° Tour</div>
            <div className="eyebrow text-white/70 mt-2">12 scenes · 4K resolution</div>
          </button>
          <button
            aria-label="Fullscreen"
            className="absolute top-4 right-4 h-10 w-10 bg-black/40 text-white flex items-center justify-center hover:bg-gold hover:text-ocean-deep transition-colors"
          >
            <Maximize className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-8 max-w-6xl mx-auto">
          {scenes.map((s) => (
            <button key={s.label} className="group relative aspect-square overflow-hidden">
              <img
                src={s.img}
                alt={s.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ocean-deep/40 group-hover:bg-ocean-deep/20 transition-colors" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs uppercase tracking-[0.18em] text-left">
                {s.label}
              </div>
            </button>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
