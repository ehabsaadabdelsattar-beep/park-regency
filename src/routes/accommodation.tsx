import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useCurrency } from "@/contexts/currency-context";
import { Bed, Maximize2, Users, Compass, Eye, Filter, RotateCcw } from "lucide-react";

import roomSeaView from "@/assets/room-sea-view.jpg";
import roomSeaFront from "@/assets/room-sea-front.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import welcome from "@/assets/welcome.jpg";
import pool from "@/assets/pool.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/accommodation")({
  head: () => ({
    meta: [
      { title: "Rooms, Suites & Villas — Park Regency Sharm El Sheikh" },
      {
        name: "description",
        content:
          "Explore our collection of 5-star Red Sea sanctuaries. Filter by view, size, and occupancy to find your ideal getaway.",
      },
    ],
  }),
  component: AccommodationPage,
});

interface RoomItem {
  id: string;
  img: string;
  name: string;
  type: "room" | "suite" | "villa";
  size: string;
  bed: string;
  occupancy: string;
  occupancyKey: number; // 2 for 2 guests, 3 for 3+ guests
  view: "sea" | "garden" | "pool";
  viewLabel: string;
  priceUsd: number;
  link: string;
  desc: string;
}

const roomsList: RoomItem[] = [
  {
    id: "garden-view",
    img: welcome,
    name: "Garden View Room",
    type: "room",
    size: "38 m²",
    bed: "King or Twin Beds",
    occupancy: "2 Adults",
    occupancyKey: 2,
    view: "garden",
    viewLabel: "Lush Gardens",
    priceUsd: 260,
    link: "/rooms/sea-view",
    desc: "Relaxing views of our manicured botanical gardens from your private terrace.",
  },
  {
    id: "sea-view",
    img: roomSeaView,
    name: "Sea View Room",
    type: "room",
    size: "42 m²",
    bed: "King or Twin Beds",
    occupancy: "2 Adults",
    occupancyKey: 2,
    view: "sea",
    viewLabel: "Panoramic Sea",
    priceUsd: 320,
    link: "/rooms/sea-view",
    desc: "Elevated vantage point offering sweeping blue horizons of the Red Sea.",
  },
  {
    id: "swim-up",
    img: pool,
    name: "Lagoon Swim Up Room",
    type: "room",
    size: "44 m²",
    bed: "King Bed",
    occupancy: "2 Adults",
    occupancyKey: 2,
    view: "pool",
    viewLabel: "Lagoon Pool",
    priceUsd: 380,
    link: "/rooms/swim-up",
    desc: "Step directly off your private deck and dive into our heated swim-up pool.",
  },
  {
    id: "sea-front",
    img: roomSeaFront,
    name: "Sea Front Room",
    type: "room",
    size: "48 m²",
    bed: "King Bed",
    occupancy: "2 Adults + 1 Child",
    occupancyKey: 3,
    view: "sea",
    viewLabel: "Direct Sea Front",
    priceUsd: 420,
    link: "/rooms/sea-front",
    desc: "Unobstructed views, immediate sand proximity, and sounds of the Red Sea waves.",
  },
  {
    id: "regency-club",
    img: roomSuite,
    name: "Regency Club Room",
    type: "room",
    size: "52 m²",
    bed: "King Bed",
    occupancy: "2 Adults + 1 Child",
    occupancyKey: 3,
    view: "sea",
    viewLabel: "Sea & Club Gardens",
    priceUsd: 580,
    link: "/rooms/regency-club",
    desc: "VIP room offering exclusive entry to the private Regency Club Lounge and pool.",
  },
  {
    id: "regency-suite",
    img: roomSuite,
    name: "Regency Suite",
    type: "suite",
    size: "80 m²",
    bed: "King Bed",
    occupancy: "2 Adults + 2 Children",
    occupancyKey: 3,
    view: "sea",
    viewLabel: "Panoramic Sea",
    priceUsd: 650,
    link: "/suites-villas",
    desc: "One-bedroom suite with a separate spacious lounge and double balcony.",
  },
  {
    id: "executive-suite",
    img: roomSeaFront,
    name: "Executive Suite",
    type: "suite",
    size: "110 m²",
    bed: "King Bed",
    occupancy: "3 Adults or 2 Adults + 2 Kids",
    occupancyKey: 3,
    view: "sea",
    viewLabel: "Direct Sea Front",
    priceUsd: 950,
    link: "/suites-villas",
    desc: "Bespoke beachfront suite with separate dining, terrace, and study corner.",
  },
  {
    id: "royal-villa",
    img: hero,
    name: "Royal Villa",
    type: "villa",
    size: "320 m²",
    bed: "3 King Bedrooms",
    occupancy: "6 Adults + 3 Children",
    occupancyKey: 3,
    view: "sea",
    viewLabel: "Panoramic Cliffside",
    priceUsd: 2800,
    link: "/suites-villas",
    desc: "Private multi-bedroom estate featuring a heated infinity pool and 24/7 personal butler.",
  },
];

function AccommodationPage() {
  const { t } = useTranslation();
  const { formatPrice } = useCurrency();

  // Filters State
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedView, setSelectedView] = useState<string>("all");
  const [selectedGuests, setSelectedGuests] = useState<string>("all");

  // Reset Filters
  const handleReset = () => {
    setSelectedType("all");
    setSelectedView("all");
    setSelectedGuests("all");
  };

  // Filter Logic
  const filteredRooms = roomsList.filter((r) => {
    const matchType = selectedType === "all" || r.type === selectedType;
    const matchView = selectedView === "all" || r.view === selectedView;
    const matchGuests =
      selectedGuests === "all" ||
      (selectedGuests === "2" && r.occupancyKey === 2) ||
      (selectedGuests === "3" && r.occupancyKey === 3);

    return matchType && matchView && matchGuests;
  });

  return (
    <PageShell>
      <PageHero
        eyebrow="Accommodations"
        title="Sanctuaries & Estates"
        subtitle="344 beachfront retreats overlooking the Red Sea, blending clean modern design with warm Egyptian hospitality."
        image={roomSeaView}
      />

      {/* LUXURY FILTER PANEL */}
      <section className="bg-secondary/40 border-y border-border py-8">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-card border border-border p-6 shadow-sm flex flex-col lg:flex-row gap-6 justify-between items-stretch lg:items-center">
            {/* Left Title */}
            <div className="flex items-center gap-2 text-ocean-deep border-b lg:border-b-0 pb-4 lg:pb-0 border-border">
              <Filter className="h-5 w-5 text-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest">
                Filter Sanctuaries
              </span>
            </div>

            {/* Filter Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1 max-w-3xl">
              {/* Room Type */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                  Accommodation Type
                </span>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-secondary border border-border px-3 py-2 text-xs text-foreground outline-none focus:border-gold cursor-pointer"
                >
                  <option value="all">All Tiers</option>
                  <option value="room">Rooms</option>
                  <option value="suite">Suites</option>
                  <option value="villa">Villas</option>
                </select>
              </div>

              {/* View Type */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                  View View
                </span>
                <select
                  value={selectedView}
                  onChange={(e) => setSelectedView(e.target.value)}
                  className="bg-secondary border border-border px-3 py-2 text-xs text-foreground outline-none focus:border-gold cursor-pointer"
                >
                  <option value="all">All Views</option>
                  <option value="sea">Sea View</option>
                  <option value="pool">Pool / Lagoon View</option>
                  <option value="garden">Garden View</option>
                </select>
              </div>

              {/* Occupancy */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                  Occupancy Max
                </span>
                <select
                  value={selectedGuests}
                  onChange={(e) => setSelectedGuests(e.target.value)}
                  className="bg-secondary border border-border px-3 py-2 text-xs text-foreground outline-none focus:border-gold cursor-pointer"
                >
                  <option value="all">All Occupancies</option>
                  <option value="2">2 Adults Max</option>
                  <option value="3">3+ Guests / Families</option>
                </select>
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={handleReset}
              className="px-5 py-2.5 border border-border text-xs uppercase tracking-widest font-semibold hover:border-gold hover:text-gold transition-colors inline-flex items-center gap-2 justify-center cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Clear Filters
            </button>
          </div>
        </div>
      </section>

      {/* ACCOMMODATIONS GRID LIST */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredRooms.map((r) => (
            <article
              key={r.id}
              className="group bg-card border border-border shadow-card overflow-hidden flex flex-col justify-between hover:border-gold/50 transition-all"
            >
              <div>
                {/* Image Aspect Box */}
                <div className="overflow-hidden aspect-[16/10] relative">
                  <img
                    src={r.img}
                    alt={r.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-ocean-deep/90 text-gold text-[9px] uppercase tracking-widest font-bold px-3 py-1 shadow-md">
                    {r.type.toUpperCase()}
                  </span>
                </div>

                {/* Information Body */}
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="eyebrow flex items-center gap-1">
                        <Compass className="h-3.5 w-3.5 text-gold" /> {r.viewLabel}
                      </span>
                      <h3 className="font-display text-2xl text-ocean-deep mt-2">{r.name}</h3>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="eyebrow text-[9px]">From</div>
                      <div className="font-display text-2xl text-ocean-deep mt-0.5">
                        {formatPrice(r.priceUsd)}
                        <span className="text-xs font-sans text-muted-foreground font-normal">
                          {" "}
                          /night
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {r.desc}
                  </p>

                  {/* Key Metrics */}
                  <div className="flex flex-wrap gap-5 mt-6 text-xs uppercase tracking-[0.16em] text-muted-foreground border-t border-border pt-6 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Maximize2 className="h-3.5 w-3.5 text-gold" />
                      {r.size}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Bed className="h-3.5 w-3.5 text-gold" />
                      {r.bed}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-gold" />
                      {r.occupancy}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card CTAs */}
              <div className="p-8 pt-0 flex gap-4">
                <Link
                  to="/booking"
                  onClick={() => {
                    const bookingParams = {
                      arrival: "",
                      departure: "",
                      adults: 2,
                      children: 0,
                      roomId:
                        r.id === "swim-up"
                          ? "sv"
                          : r.id === "regency-club"
                            ? "rs"
                            : r.id === "sea-front"
                              ? "sf"
                              : "sv",
                    };
                    try {
                      localStorage.setItem("pr-pending-booking", JSON.stringify(bookingParams));
                    } catch {
                      void 0;
                    }
                  }}
                  className="px-5 py-3.5 bg-ocean-deep text-white text-xs font-semibold uppercase tracking-[0.2em] hover:bg-gold hover:text-ocean-deep transition-colors text-center cursor-pointer flex-1"
                >
                  Book Now
                </Link>
                <Link
                  to={r.link}
                  className="px-5 py-3.5 border border-border text-xs font-semibold uppercase tracking-[0.2em] hover:border-gold hover:text-gold transition-colors text-center cursor-pointer flex-1"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredRooms.length === 0 && (
          <div className="text-center py-20 max-w-md mx-auto">
            <h3 className="font-display text-2xl text-ocean-deep mb-3">
              No Sanctuaries Match Your Criteria
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Try clearing your filters or choosing different options to explore our accommodation
              tiers.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-3.5 bg-ocean-deep text-white hover:bg-gold hover:text-ocean-deep text-xs font-semibold uppercase tracking-widest cursor-pointer transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </PageShell>
  );
}
