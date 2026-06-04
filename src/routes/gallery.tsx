import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

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
  component: GalleryPage,
});

type Category =
  | "All"
  | "Rooms"
  | "Suites"
  | "Restaurants"
  | "Spa"
  | "Pool"
  | "Beach"
  | "Events";

interface Photo {
  src: string;
  alt: string;
  cat: Category;
  span?: boolean;
}

const PHOTOS: Photo[] = [
  { src: hero, alt: "Aerial view of resort & Red Sea", cat: "Beach", span: true },
  { src: welcome, alt: "Grand Lobby & Reception", cat: "Rooms" },
  { src: roomSeaView, alt: "Deluxe Sea View Room", cat: "Rooms" },
  { src: roomSeaFront, alt: "Superior Sea Front Room", cat: "Rooms" },
  { src: roomSuite, alt: "Royal Suite — Panoramic View", cat: "Suites", span: true },
  { src: dining, alt: "Sala Thai Signature Restaurant", cat: "Restaurants" },
  { src: wedding, alt: "Beachfront Wedding Ceremony", cat: "Events", span: true },
  { src: diving, alt: "PADI Diving in Gardens Bay Reef", cat: "Beach" },
  { src: spa, alt: "Oasis Spa & Wellness Treatment", cat: "Spa" },
  { src: pool, alt: "Cascading Infinity Pool", cat: "Pool", span: true },
  { src: hero, alt: "Private Beach at Sunrise", cat: "Beach" },
  { src: pool, alt: "Pool Deck at Golden Hour", cat: "Pool" },
  { src: dining, alt: "The Main — International Live Cooking", cat: "Restaurants" },
  { src: spa, alt: "Hammam & Steam Room", cat: "Spa" },
  { src: welcome, alt: "Corporate Events & Meetings", cat: "Events" },
  { src: roomSuite, alt: "Presidential Villa — Private Terrace", cat: "Suites" },
];

const CATEGORIES: Category[] = [
  "All",
  "Rooms",
  "Suites",
  "Restaurants",
  "Spa",
  "Pool",
  "Beach",
  "Events",
];

function GalleryPage() {
  const { t } = useTranslation();
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? PHOTOS : PHOTOS.filter((p) => p.cat === active);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevPhoto = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);
  const nextPhoto = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, closeLightbox, prevPhoto, nextPhoto]);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <PageShell>
      <PageHero
        eyebrow={t("gallery.heroEyebrow")}
        title={t("gallery.heroTitle")}
        subtitle={t("gallery.heroSubtitle")}
        image={hero}
        height="sm"
      />

      <section className="py-16 md:py-24 container mx-auto px-6">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActive(cat); setLightbox(null); }}
              className={`px-5 py-2 text-xs uppercase tracking-[0.2em] border transition-colors cursor-pointer ${
                active === cat
                  ? "bg-ocean-deep text-white border-ocean-deep"
                  : "border-border hover:bg-ocean-deep hover:text-white hover:border-ocean-deep"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[220px]">
          {filtered.map((p, i) => (
            <div
              key={`${p.src}-${i}`}
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden cursor-zoom-in ${
                p.span ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-ocean-deep/0 group-hover:bg-ocean-deep/50 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
              </div>
              {/* Category badge */}
              <div className="absolute bottom-3 start-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] uppercase tracking-[0.15em] text-white bg-ocean-deep/80 px-3 py-1">
                  {p.cat}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/booking"
            className="inline-block px-10 py-4 bg-gold text-ocean-deep text-xs uppercase tracking-[0.22em] hover:bg-ocean-deep hover:text-white transition-colors"
          >
            {t("gallery.bookStay")}
          </a>
        </div>
      </section>

      {/* ---- LIGHTBOX ---- */}
      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 end-4 text-white/80 hover:text-white transition-colors z-10 cursor-pointer"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute start-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 cursor-pointer bg-white/10 hover:bg-white/20 rounded-full p-2"
            aria-label="Previous"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute end-14 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 cursor-pointer bg-white/10 hover:bg-white/20 rounded-full p-2"
            aria-label="Next"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] mx-auto px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-w-full max-h-[80vh] object-contain shadow-2xl"
            />
            <p className="text-white/60 text-xs uppercase tracking-widest text-center mt-4">
              {filtered[lightbox].alt} · {lightbox + 1} / {filtered.length}
            </p>
          </div>
        </div>
      )}
    </PageShell>
  );
}
