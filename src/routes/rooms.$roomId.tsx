import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useCurrency } from "@/contexts/currency-context";
import type { LucideIcon } from "lucide-react";
import {
  Maximize2,
  Users,
  Bed,
  Eye,
  Check,
  ChevronLeft,
  ChevronRight,
  Wifi,
  Coffee,
  Tv,
  ShieldCheck,
  Compass,
  Wind,
  ShowerHead,
} from "lucide-react";

import roomSeaView from "@/assets/room-sea-view.jpg";
import roomSeaFront from "@/assets/room-sea-front.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import pool from "@/assets/pool.jpg";
import welcome from "@/assets/welcome.jpg";

export const Route = createFileRoute("/rooms/$roomId")({
  head: ({ params }) => {
    const titles: Record<string, string> = {
      "sea-view": "Sea View Room — Park Regency Sharm El Sheikh",
      "sea-front": "Sea Front Room — Park Regency Sharm El Sheikh",
      "swim-up": "Swim Up Room — Park Regency Sharm El Sheikh",
      "regency-club": "Regency Club Room — Park Regency Sharm El Sheikh",
    };
    return {
      meta: [
        { title: titles[params.roomId] || "Luxury Accommodation — Park Regency" },
        {
          name: "description",
          content: "Discover 5-star comfort and luxury with sweeping views of the Red Sea.",
        },
      ],
    };
  },
  component: RoomDetailsPage,
});

interface RoomDetails {
  name: string;
  size: string;
  occupancy: string;
  view: string;
  bed: string;
  priceUsd: number;
  description: string;
  gallery: string[];
  amenities: { icon: LucideIcon; label: string }[];
  features: string[];
}

const roomsData: Record<string, RoomDetails> = {
  "sea-view": {
    name: "Sea View Room",
    size: "42 m²",
    occupancy: "2 Adults",
    view: "Panoramic Sea View",
    bed: "King or Twin Beds",
    priceUsd: 320,
    description:
      "Enjoy stunning vistas of the azure Red Sea from your private balcony. The Sea View Room combines modern, clean aesthetics with rich Egyptian textures, offering a sanctuary of complete relaxation. Indulge in premium amenities, marble bathrooms, and a sleep experience crafted to restore the senses.",
    gallery: [roomSeaView, welcome, pool],
    amenities: [
      { icon: Wifi, label: "Complimentary High-Speed Wi-Fi" },
      { icon: Coffee, label: "Nespresso Coffee Maker" },
      { icon: Tv, label: "55-inch Smart TV with Chromecast" },
      { icon: ShowerHead, label: "Marble Walk-in Rain Shower" },
      { icon: Wind, label: "Individual Climate Control" },
      { icon: ShieldCheck, label: "In-room Digital Safe" },
    ],
    features: [
      "Private balcony with plush lounge seating",
      "Plush cotton bathrobes & slippers",
      "Premium minibar stocked with local delicacies",
      "Signature bath amenities by local artisans",
      "24-hour in-room luxury dining service",
    ],
  },
  "sea-front": {
    name: "Sea Front Room",
    size: "48 m²",
    occupancy: "2 Adults + 1 Child",
    view: "Direct Sea Front",
    bed: "King Bed",
    priceUsd: 420,
    description:
      "Steps from the gentle waves of Gardens Bay, our Sea Front Room offers direct proximity to the shore. Floor-to-ceiling windows slide open to reveal the warm sea breeze. Styled with minimalist luxury, this room features enhanced living area spaces and an expansive terrace designed for private sunset views.",
    gallery: [roomSeaFront, pool, welcome],
    amenities: [
      { icon: Wifi, label: "Complimentary High-Speed Wi-Fi" },
      { icon: Coffee, label: "Nespresso Coffee Maker" },
      { icon: Tv, label: "65-inch Smart TV with Chromecast" },
      { icon: ShowerHead, label: "Double Marble Vanity & Soaking Tub" },
      { icon: Wind, label: "Individual Climate Control" },
      { icon: ShieldCheck, label: "In-room Digital Safe" },
    ],
    features: [
      "Spacious beachfront terrace with direct beach access",
      "Complimentary airport transfer service",
      "Daily replenishment of fresh fruit & pastries",
      "Upgraded premium minibar selection",
      "Turn-down pillow menu selections",
    ],
  },
  "swim-up": {
    name: "Swim Up Room",
    size: "44 m²",
    occupancy: "2 Adults",
    view: "Lagoon & Sea Views",
    bed: "King Bed",
    priceUsd: 380,
    description:
      "Dive directly into our heated lagoon pool from your private sun deck. The Swim Up Room blends luxury coastal living with unmatched water accessibility. Perfect for couples, this suite features a sunken outdoor terrace, designer sun loungers, and immediate access to the resort's legendary pool facilities.",
    gallery: [pool, roomSeaView, welcome],
    amenities: [
      { icon: Wifi, label: "Complimentary High-Speed Wi-Fi" },
      { icon: Coffee, label: "Nespresso Coffee Maker" },
      { icon: Tv, label: "55-inch Smart TV" },
      { icon: ShowerHead, label: "Marble Vanity & Walk-in Rain Shower" },
      { icon: Wind, label: "Individual Climate Control" },
      { icon: ShieldCheck, label: "In-room Digital Safe" },
    ],
    features: [
      "Private sun deck with direct access to Swim-Up Lagoon",
      "Reserved loungers on your private terrace",
      "Complimentary signature beach bag",
      "Daily pre-dinner sundowners delivered to deck",
      "Priority dining reservations across signature restaurants",
    ],
  },
  "regency-club": {
    name: "Regency Club Room",
    size: "52 m²",
    occupancy: "2 Adults + 1 Child",
    view: "Panoramic Red Sea & Club Grounds",
    bed: "King Bed",
    priceUsd: 580,
    description:
      "Indulge in the ultimate luxury experience. The Regency Club Room grants exclusive access to the Regency Club Lounge, featuring private check-in, complimentary continental breakfast, afternoon tea, and evening cocktails. Designed for discerning guests, this room features premium positioning and personalized butler service.",
    gallery: [roomSuite, roomSeaFront, welcome],
    amenities: [
      { icon: Wifi, label: "Ultra High-Speed Wi-Fi" },
      { icon: Coffee, label: "Premium Nespresso & Tea Selection" },
      { icon: Tv, label: "65-inch Smart TV" },
      { icon: ShowerHead, label: "Soaking Tub & Luxury Spa Shower" },
      { icon: Wind, label: "Individual Climate Control" },
      { icon: ShieldCheck, label: "In-room Safe" },
    ],
    features: [
      "Access to the private Regency Club Lounge & Pool",
      "Personal Butler service on demand",
      "Complimentary VIP Airport Arrival & Departure transfers",
      "Ironing of two garments per stay",
      "Bespoke bathroom amenities by luxury brands",
    ],
  },
};

function RoomDetailsPage() {
  const { roomId } = useParams({ from: "/rooms/$roomId" });
  const { formatPrice } = useCurrency();
  const { t } = useTranslation();

  const room = roomsData[roomId] || roomsData["sea-view"];

  const [activeImg, setActiveImg] = useState(0);
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [guestsCount, setGuestsCount] = useState("2");

  const handleNextImg = () => {
    setActiveImg((prev) => (prev + 1) % room.gallery.length);
  };

  const handlePrevImg = () => {
    setActiveImg((prev) => (prev - 1 + room.gallery.length) % room.gallery.length);
  };

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    const params = {
      arrival: arrivalDate,
      departure: departureDate,
      adults: parseInt(guestsCount),
      children: 0,
      roomId:
        roomId === "swim-up"
          ? "sv"
          : roomId === "regency-club"
            ? "rs"
            : roomId === "sea-front"
              ? "sf"
              : "sv",
    };
    try {
      localStorage.setItem("pr-pending-booking", JSON.stringify(params));
    } catch {
      void 0;
    }
    window.location.href = "/booking";
  };

  const otherRooms = Object.entries(roomsData)
    .filter(([id]) => id !== roomId)
    .slice(0, 2);

  return (
    <PageShell>
      {/* HERO GALLERY */}
      <section className="relative h-[60vh] min-h-[450px] w-full overflow-hidden bg-black mt-16 md:mt-20">
        <img
          src={room.gallery[activeImg]}
          alt={`${room.name} gallery image`}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-transparent to-black/35" />

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevImg}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-gold text-white hover:text-ocean-deep p-3 rounded-full transition-colors cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={handleNextImg}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-gold text-white hover:text-ocean-deep p-3 rounded-full transition-colors cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Thumbnail Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {room.gallery.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImg(idx)}
              className={`h-2.5 w-2.5 rounded-full transition-all cursor-pointer ${idx === activeImg ? "bg-gold w-8" : "bg-white/50"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-10 left-6 right-6 container mx-auto text-white">
          <span className="eyebrow text-gold">{room.view}</span>
          <h1 className="font-display text-4xl md:text-6xl mt-2">{room.name}</h1>
        </div>
      </section>

      {/* CORE SPECIFICATIONS BAR */}
      <section className="bg-secondary py-6 border-b border-border">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-border">
          <div className="flex flex-col items-center">
            <Maximize2 className="h-5 w-5 text-gold mb-1" />
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Room Size
            </span>
            <span className="font-medium text-ocean-deep mt-0.5">{room.size}</span>
          </div>
          <div className="flex flex-col items-center">
            <Users className="h-5 w-5 text-gold mb-1" />
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Occupancy
            </span>
            <span className="font-medium text-ocean-deep mt-0.5">{room.occupancy}</span>
          </div>
          <div className="flex flex-col items-center">
            <Eye className="h-5 w-5 text-gold mb-1" />
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
              View Type
            </span>
            <span className="font-medium text-ocean-deep mt-0.5">{room.view}</span>
          </div>
          <div className="flex flex-col items-center">
            <Bed className="h-5 w-5 text-gold mb-1" />
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Bed Config
            </span>
            <span className="font-medium text-ocean-deep mt-0.5">{room.bed}</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT & DETAILS */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Left Column: Description & Specs */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="font-display text-3xl text-ocean-deep mb-6">A Coastal Sanctuary</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{room.description}</p>
            </div>

            {/* Exclusive Features */}
            <div>
              <h3 className="font-display text-2xl text-ocean-deep mb-6">Signature Features</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {room.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                  >
                    <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenities Grid */}
            <div>
              <h3 className="font-display text-2xl text-ocean-deep mb-6">Room Amenities</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {room.amenities.map((amenity, idx) => {
                  const Icon = amenity.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 bg-card border border-border"
                    >
                      <Icon className="h-5 w-5 text-gold shrink-0" />
                      <span className="text-xs font-medium tracking-wide uppercase text-ocean-deep">
                        {amenity.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Floor Plan Showcase */}
            <div>
              <h3 className="font-display text-2xl text-ocean-deep mb-4">Floor Plan</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Architectural rendering of the room layout, balcony, and private entry spaces.
              </p>

              {/* Luxury SVG Floor Plan Graphic */}
              <div className="bg-secondary p-8 border border-border flex items-center justify-center">
                <svg
                  className="w-full max-w-[500px] h-[300px] text-ocean-deep/30"
                  viewBox="0 0 500 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer Wall */}
                  <rect
                    x="20"
                    y="20"
                    width="460"
                    height="260"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <rect
                    x="25"
                    y="25"
                    width="450"
                    height="250"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  {/* Balcony Terrace */}
                  <line x1="360" y1="25" x2="360" y2="275" stroke="currentColor" strokeWidth="2" />
                  <text
                    x="410"
                    y="150"
                    fill="currentColor"
                    className="text-[10px] uppercase font-sans tracking-widest font-medium"
                    textAnchor="middle"
                  >
                    Private Terrace
                  </text>

                  {/* Bathroom Divider */}
                  <line x1="25" y1="120" x2="180" y2="120" stroke="currentColor" strokeWidth="2" />
                  <line x1="180" y1="25" x2="180" y2="120" stroke="currentColor" strokeWidth="2" />
                  <text
                    x="100"
                    y="80"
                    fill="currentColor"
                    className="text-[10px] uppercase font-sans tracking-widest font-medium"
                    textAnchor="middle"
                  >
                    Marble Bath
                  </text>

                  {/* King Bed Placement */}
                  <rect
                    x="210"
                    y="90"
                    width="110"
                    height="120"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="220"
                    y="100"
                    width="45"
                    height="30"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <rect
                    x="275"
                    y="100"
                    width="45"
                    height="30"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <text
                    x="265"
                    y="170"
                    fill="currentColor"
                    className="text-[10px] uppercase font-sans tracking-widest font-medium"
                    textAnchor="middle"
                  >
                    King Bed
                  </text>

                  {/* Sofa Entry */}
                  <rect
                    x="40"
                    y="200"
                    width="100"
                    height="40"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <text
                    x="90"
                    y="225"
                    fill="currentColor"
                    className="text-[10px] uppercase font-sans tracking-widest font-medium"
                    textAnchor="middle"
                  >
                    Entry Vestibule
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Booking Card */}
          <div>
            <div className="bg-card border border-border shadow-luxury p-8 sticky top-32">
              <span className="eyebrow text-gold">Exclusive Rate Guarantee</span>
              <div className="font-display text-4xl text-ocean-deep mt-2">
                {formatPrice(room.priceUsd)}
                <span className="text-xs font-sans text-muted-foreground font-normal"> /night</span>
              </div>
              <div className="gold-divider my-6" />

              <form onSubmit={handleQuickBook} className="space-y-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium block mb-1">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    required
                    value={arrivalDate}
                    onChange={(e) => setArrivalDate(e.target.value)}
                    className="w-full bg-secondary border border-border p-3 text-sm text-foreground outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium block mb-1">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    required
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full bg-secondary border border-border p-3 text-sm text-foreground outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium block mb-1">
                    Guests
                  </label>
                  <select
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(e.target.value)}
                    className="w-full bg-secondary border border-border p-3 text-sm text-foreground outline-none focus:border-gold"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-ocean-deep text-white hover:bg-gold hover:text-ocean-deep text-xs font-semibold uppercase tracking-[0.2em] transition-colors cursor-pointer"
                >
                  Book This Room
                </button>
              </form>

              <div className="mt-6 text-center">
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center justify-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-gold" /> Best Price & Flexibility Guaranteed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED ACCOMMODATIONS */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow">Explore More</span>
            <h2 className="font-display text-3xl md:text-4xl mt-2 text-ocean-deep">
              Related Sanctuaries
            </h2>
            <div className="gold-divider mx-auto my-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {otherRooms.map(([id, details]) => (
              <article
                key={id}
                className="group bg-card border border-border shadow-card overflow-hidden"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={details.gallery[0]}
                    alt={details.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl text-ocean-deep">{details.name}</h3>
                  <div className="flex gap-4 text-[10px] uppercase tracking-wider text-muted-foreground mt-2">
                    <span>{details.size}</span>·<span>{details.view}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 line-clamp-2 leading-relaxed">
                    {details.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-muted-foreground uppercase">From</div>
                      <div className="font-display text-xl text-ocean-deep">
                        {formatPrice(details.priceUsd)}
                      </div>
                    </div>
                    <Link
                      to="/rooms/$roomId"
                      params={{ roomId: id }}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-xs uppercase font-semibold tracking-wider text-gold hover:text-ocean-deep"
                    >
                      Explore Room →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
