import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useCurrency } from "@/contexts/currency-context";
import {
  Maximize2,
  Users,
  Bed,
  Check,
  Sparkles,
  Calendar,
  ShieldCheck,
  Compass,
} from "lucide-react";

import roomSuite from "@/assets/room-suite.jpg";
import welcome from "@/assets/welcome.jpg";
import pool from "@/assets/pool.jpg";
import hero from "@/assets/hero.jpg";
import roomSeaFront from "@/assets/room-sea-front.jpg";

export const Route = createFileRoute("/suites-villas")({
  head: () => ({
    meta: [
      { title: "Luxury Suites & Villas — Park Regency Sharm El Sheikh" },
      {
        name: "description",
        content:
          "Experience the zenith of luxury on the Red Sea coast. Explore our private suites and exclusive beachfront Royal Villa.",
      },
    ],
  }),
  component: SuitesVillasPage,
});

interface SuiteVillaItem {
  id: string;
  name: string;
  size: string;
  occupancy: string;
  view: string;
  priceUsd: number;
  img: string;
  badge: string;
  privileges: string[];
  description: string;
}

const items: SuiteVillaItem[] = [
  {
    id: "regency-suite",
    name: "Regency Suite",
    size: "80 m²",
    occupancy: "2 Adults + 2 Children",
    view: "Panoramic Sea View",
    priceUsd: 650,
    img: roomSuite,
    badge: "Club Access Included",
    privileges: [
      "Regency Club Lounge access",
      "Private checkout & check-in",
      "Complimentary cocktails & hors d'oeuvres",
      "Spacious separate living area",
    ],
    description:
      "An elegant one-bedroom suite featuring a spacious separate living room, plush dressing area, and a marble bath. High-end textures and double balconies overlook the Gardens Bay shoreline.",
  },
  {
    id: "parlour-suite",
    name: "Parlour Suite",
    size: "95 m²",
    occupancy: "2 Adults + 2 Children",
    view: "Red Sea & Lagoon View",
    priceUsd: 780,
    img: welcome,
    badge: "Premier Suite",
    privileges: [
      "Separate dining table for 6 guests",
      "Nespresso coffee bar",
      "Full Regency Club lounge access",
      "VIP airport greeting & transfer",
    ],
    description:
      "Designed for entertaining and family stays, the Parlour Suite boasts an integrated dining area, premium sound systems, and panoramic windows framing both the pools and the sea.",
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    size: "110 m²",
    occupancy: "3 Adults or 2 Adults + 2 Children",
    view: "Direct Beachfront View",
    priceUsd: 950,
    img: roomSeaFront,
    badge: "Spectacular Seafront",
    privileges: [
      "Panoramic beachfront terrace",
      "Dedicated butler service on request",
      "In-suite private breakfast options",
      "Bespoke turn-down services",
    ],
    description:
      "A gorgeous luxury suite situated at the beachfront vertex of the resort. Enjoy unmatched proximity to the sand, an extra large marble bathroom with premium wellness products, and a workspace.",
  },
  {
    id: "diplomatic-suite",
    name: "Diplomatic Suite",
    size: "140 m²",
    occupancy: "4 Guests",
    view: "180° Red Sea Panorama",
    priceUsd: 1300,
    img: pool,
    badge: "Diplomatic Elite",
    privileges: [
      "Two separate bedrooms",
      "Dedicated guest powder room",
      "Private study & library corner",
      "Unlimited spa thermal zone access",
    ],
    description:
      "Our Diplomatic Suite offers the ultimate blend of business utility and leisure comfort. With separate entries, two large master bedrooms, and an expansive parlor, it represents absolute prestige.",
  },
  {
    id: "royal-villa",
    name: "Royal Villa",
    size: "320 m²",
    occupancy: "6 Adults + 3 Children",
    view: "Private Beachfront Cliffside",
    priceUsd: 2800,
    img: hero,
    badge: "Bespoke Royal Estate",
    privileges: [
      "Private heated infinity pool",
      "Dedicated 24/7 personal butler",
      "Private chef dining inside villa",
      "Exclusive cabana on the beach",
      "Full VIP airport protocol transfers",
    ],
    description:
      "The crown jewel of Sharm El Sheikh. Set atop a secluded cliffside, the Royal Villa features three master bedrooms, a private wellness treatment room, custom kitchen, lush gardens, and a heated infinity pool overlooking the Red Sea.",
  },
];

function SuitesVillasPage() {
  const { formatPrice } = useCurrency();
  const { t } = useTranslation();

  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [suiteId, setSuiteId] = useState("royal-villa");

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const params = {
      arrival,
      departure,
      adults: 2,
      children: 0,
      roomId: "rs", // Maps to royal suite/villas in booking system
    };
    try {
      localStorage.setItem("pr-pending-booking", JSON.stringify(params));
    } catch {
      void 0;
    }
    window.location.href = "/booking";
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Sanctuaries of Pure Opulence"
        title="Suites & Villas"
        subtitle="Uncompromising comfort, breathtaking panoramas, and highly personalized service."
        image={roomSuite}
      />

      {/* QUICK AVAILABILITY CHECKER */}
      <section className="py-10 bg-secondary border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <form
            onSubmit={handleBooking}
            className="bg-card border border-border p-6 shadow-card grid md:grid-cols-4 gap-4 items-end"
          >
            <div>
              <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1">
                Check Availability
              </label>
              <select
                value={suiteId}
                onChange={(e) => setSuiteId(e.target.value)}
                className="w-full bg-secondary border border-border p-2.5 text-xs text-foreground outline-none focus:border-gold"
              >
                {items.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1">
                Arrival Date
              </label>
              <input
                type="date"
                required
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
                className="w-full bg-secondary border border-border p-2 text-xs text-foreground outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1">
                Departure Date
              </label>
              <input
                type="date"
                required
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                className="w-full bg-secondary border border-border p-2 text-xs text-foreground outline-none focus:border-gold"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-ocean-deep hover:bg-gold text-white hover:text-ocean-deep text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer"
            >
              Verify Unit
            </button>
          </form>
        </div>
      </section>

      {/* SHOWCASE SECTION */}
      <section className="py-20 container mx-auto px-6 space-y-24">
        {items.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <article
              key={item.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
            >
              {/* Image Frame */}
              <div
                className={`relative overflow-hidden aspect-[16/10] shadow-luxury group ${isEven ? "" : "lg:order-2"}`}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <span className="absolute top-6 left-6 bg-gold text-ocean-deep text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 shadow-md">
                  {item.badge}
                </span>
              </div>

              {/* Text Information */}
              <div className={isEven ? "" : "lg:order-1"}>
                <span className="eyebrow flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" /> Luxury Suite Suite
                </span>
                <h3 className="font-display text-3xl md:text-4xl mt-3 text-ocean-deep">
                  {item.name}
                </h3>

                <div className="flex gap-6 mt-4 text-[10px] uppercase tracking-wider text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Maximize2 className="h-3.5 w-3.5 text-gold" />
                    {item.size}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-gold" />
                    {item.occupancy}
                  </span>
                  <span className="flex items-center gap-1">
                    <Compass className="h-3.5 w-3.5 text-gold" />
                    {item.view}
                  </span>
                </div>

                <div className="gold-divider my-6" />
                <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>

                {/* VIP Privileges */}
                <div className="bg-secondary p-5 border border-border mb-8">
                  <h4 className="text-[10px] uppercase tracking-widest font-semibold text-ocean-deep mb-3 flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-gold" /> VIP Privileges
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-muted-foreground">
                    {item.privileges.map((priv, pIdx) => (
                      <li key={pIdx} className="flex gap-2 items-center">
                        <span className="text-gold font-bold">—</span> {priv}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & CTA */}
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <span className="text-[10px] text-muted-foreground uppercase">
                      Starting From
                    </span>
                    <div className="font-display text-3xl text-ocean-deep mt-0.5">
                      {formatPrice(item.priceUsd)}
                      <span className="text-xs font-sans text-muted-foreground font-normal">
                        {" "}
                        /night
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/booking"
                    onClick={() => {
                      const params = {
                        arrival: "",
                        departure: "",
                        adults: 2,
                        children: 0,
                        roomId: "rs",
                      };
                      try {
                        localStorage.setItem("pr-pending-booking", JSON.stringify(params));
                      } catch {
                        void 0;
                      }
                    }}
                    className="px-6 py-3.5 bg-ocean-deep text-white hover:bg-gold hover:text-ocean-deep text-xs uppercase tracking-widest font-semibold transition-colors"
                  >
                    Request Stay
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </PageShell>
  );
}
