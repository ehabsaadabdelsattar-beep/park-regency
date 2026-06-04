import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useCurrency } from "@/contexts/currency-context";
import { Clock, Utensils, Shield, Check, Calendar, Users, X, Info } from "lucide-react";

import dining from "@/assets/dining.jpg";
import welcome from "@/assets/welcome.jpg";
import pool from "@/assets/pool.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/dining")({
  head: () => ({
    meta: [
      { title: "Dining & Signature Restaurants — Park Regency Sharm El Sheikh" },
      {
        name: "description",
        content:
          "Indulge in seven signature restaurants and bars. From royal Thai cuisine at Sala Thai to beachside Mediterranean dining.",
      },
    ],
  }),
  component: DiningPage,
});

interface VenueItem {
  id: string;
  img: string;
  name: string;
  cuisine: string;
  hours: string;
  dress: string;
  text: string;
  signatureDishes: string[];
  mockMenu: { category: string; items: { name: string; desc: string; priceUsd: number }[] }[];
}

const venuesList: VenueItem[] = [
  {
    id: "sala-thai",
    img: dining,
    name: "Sala Thai",
    cuisine: "Royal Thai Fine Dining",
    hours: "18:00 – 23:00",
    dress: "Smart Casual",
    text: "An intimate pavilion of teak wood and lotus ponds — authentic Thai cuisine guided by chefs from Bangkok.",
    signatureDishes: ["Tom Yum Goong", "Phad Thai Goong Sod", "Gaeng Kiew Wan (Green Curry)"],
    mockMenu: [
      {
        category: "Appetizers",
        items: [
          {
            name: "Por Pia Thod",
            desc: "Crispy vegetable spring rolls with sweet chili dip",
            priceUsd: 18,
          },
          {
            name: "Satay Ruam",
            desc: "Grilled chicken and beef skewers with signature peanut sauce",
            priceUsd: 22,
          },
        ],
      },
      {
        category: "Mains",
        items: [
          {
            name: "Gaeng Massaman Nua",
            desc: "Slow-braised beef brisket massaman curry with baby potatoes and cardamom",
            priceUsd: 38,
          },
          {
            name: "Pla Rad Prik",
            desc: "Crispy whole Red Sea sea bass with sweet, sour, and spicy chili glaze",
            priceUsd: 42,
          },
        ],
      },
    ],
  },
  {
    id: "the-main",
    img: welcome,
    name: "The Main",
    cuisine: "International Live Cooking",
    hours: "06:30 – 11:00, 18:30 – 22:30",
    dress: "Resort Casual",
    text: "Live cooking stations and a sweeping international breakfast spread that opens onto the sea.",
    signatureDishes: [
      "Fresh Baked Egyptian Feteer",
      "Slow-Roasted Prime Rib",
      "Bespoke Seafood Grill",
    ],
    mockMenu: [
      {
        category: "Breakfast Highlight",
        items: [
          {
            name: "Egyptian Shakshuka",
            desc: "Poached farm eggs in spiced tomato, bell pepper, and cumin sauce",
            priceUsd: 15,
          },
          {
            name: "Royal Waffles",
            desc: "Warm Belgian waffles with local honey, clotted cream, and fresh berries",
            priceUsd: 14,
          },
        ],
      },
      {
        category: "Dinner Highlight",
        items: [
          {
            name: "Sinai Spiced Lamb Chops",
            desc: "Charcoal-grilled lamb chops, aromatic oriental rice, garlic yogurt sauce",
            priceUsd: 36,
          },
        ],
      },
    ],
  },
  {
    id: "beach-house",
    img: pool,
    name: "Beach House",
    cuisine: "Mediterranean Shoreline Grill",
    hours: "12:00 – 23:00",
    dress: "Beach Casual / Chic",
    text: "Wood-fired catch of the day, hand-stretched pizzas, ice-cold rosé, and your feet in the sand.",
    signatureDishes: [
      "Charcoal Red Sea Calamari",
      "Neapolitan Burrata Pizza",
      "Salt-Baked Sea Bass",
    ],
    mockMenu: [
      {
        category: "Starters & Salads",
        items: [
          {
            name: "Insalata Caprese",
            desc: "Fresh heirloom tomatoes, buffalo mozzarella, basil pesto, aged balsamic",
            priceUsd: 19,
          },
          {
            name: "Fritto Misto",
            desc: "Crispy calamari, shrimp, zucchini sticks, preserved lemon aioli",
            priceUsd: 24,
          },
        ],
      },
      {
        category: "From the Wood Oven",
        items: [
          {
            name: "Grigliata Mista di Pesce",
            desc: "Grilled lobster tail, Red Sea prawns, calamari, lemon-herb glaze",
            priceUsd: 55,
          },
        ],
      },
    ],
  },
  {
    id: "sunset-bar",
    img: hero,
    name: "Sunset Bar & Terrace",
    cuisine: "Cocktails & Shisha Lounge",
    hours: "16:00 – 02:00",
    dress: "Resort Casual",
    text: "Hand-crafted signature cocktails, premium shisha, and the finest sunset vantage point at the resort.",
    signatureDishes: [
      "Gardens Bay Sunset Mule",
      "Premium Double Apple Shisha",
      "Mezze Tasting Platter",
    ],
    mockMenu: [
      {
        category: "Signature Libations",
        items: [
          {
            name: "Hibiscus Royal",
            desc: "Local organic Karkadeh hibiscus infusion, dry gin, prosecco, lime",
            priceUsd: 16,
          },
          {
            name: "Sinai Old Fashioned",
            desc: "Bourbon, local date molasses, orange bitters, smoked cinnamon",
            priceUsd: 18,
          },
        ],
      },
      {
        category: "Cold & Hot Mezze",
        items: [
          {
            name: "Sinai Dipping Platter",
            desc: "Hummus, Baba Ghanoush, Labneh, hot fresh-baked pita bread",
            priceUsd: 20,
          },
        ],
      },
    ],
  },
  {
    id: "trattoria",
    img: dining,
    name: "La Trattoria",
    cuisine: "Classic Italian Bistro",
    hours: "18:30 – 23:00",
    dress: "Smart Casual",
    text: "Handmade pastas, wood-fired stone oven pizzas, and a carefully curated all-Italian wine cellar.",
    signatureDishes: ["Truffle Tagliolini", "Risotto ai Frutti di Mare", "Signature Tiramisu"],
    mockMenu: [
      {
        category: "Handcrafted Pasta",
        items: [
          {
            name: "Tagliatelle al Ragu",
            desc: "Handmade egg pasta, slow-cooked Angus beef bolognese, Parmigiano Reggiano",
            priceUsd: 28,
          },
          {
            name: "Gnocchi della Casa",
            desc: "Potato gnocchi, gorgonzola cream, toasted local walnuts, fresh sage",
            priceUsd: 26,
          },
        ],
      },
    ],
  },
  {
    id: "sakura",
    img: welcome,
    name: "Sakura",
    cuisine: "Japanese Omakase & Sushi",
    hours: "19:00 – 23:00",
    dress: "Smart Casual",
    text: "An exclusive eight-seat omakase counter and premium à la carte sushi prepared by master sushi chefs.",
    signatureDishes: ["Omakase Sashimi Selection", "Red Sea Dragon Roll", "Wagyu Beef Tataki"],
    mockMenu: [
      {
        category: "Sushi & Sashimi",
        items: [
          {
            name: "Moriawase Sashimi",
            desc: "Chef's selection of 9 premium sashimi cuts (Tuna, Salmon, Red Snapper)",
            priceUsd: 38,
          },
          {
            name: "Spicy Red Sea Crab Roll",
            desc: "Spicy blue crab, cucumber, topped with avocado and sweet unagi sauce",
            priceUsd: 24,
          },
        ],
      },
    ],
  },
  {
    id: "library",
    img: pool,
    name: "The Library Lounge",
    cuisine: "Fine Cognacs & Cigars",
    hours: "15:00 – 00:00",
    dress: "Smart Casual / Formal",
    text: "Vintage cognacs, single-estate cigars, and a curated afternoon high tea service inside an elegant study.",
    signatureDishes: [
      "Park Regency Signature High Tea",
      "Rare Single Malt flight",
      "Cuban Cohiba Cigar selection",
    ],
    mockMenu: [
      {
        category: "Afternoon High Tea",
        items: [
          {
            name: "Royal High Tea Service",
            desc: "Assorted finger sandwiches, scones, devonshire cream, preserves, pot of tea",
            priceUsd: 30,
          },
        ],
      },
    ],
  },
];

function DiningPage() {
  const { formatPrice } = useCurrency();

  // Dialog State
  const [selectedMenuVenue, setSelectedMenuVenue] = useState<VenueItem | null>(null);
  const [selectedReserveVenue, setSelectedReserveVenue] = useState<VenueItem | null>(null);

  // Reservation Form State
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [resGuests, setResGuests] = useState("2");
  const [resNotes, setResNotes] = useState("");
  const [isReserved, setIsReserved] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsReserved(true);
    setTimeout(() => {
      setIsReserved(false);
      setSelectedReserveVenue(null);
      setResDate("");
      setResTime("");
      setResGuests("2");
      setResNotes("");
      alert("Table Reservation Confirmed! A confirmation email and SMS have been sent to you.");
    }, 1500);
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Epicurean Journeys"
        title="Signature Dining"
        subtitle="Seven distinct venues celebrating culinary artistry, from royal Thai spices to beachside grills."
        image={dining}
      />

      {/* VENUES LISTING */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="eyebrow">A Taste of the Extraordinary</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 text-ocean-deep">
            Our Restaurants & Bars
          </h2>
          <div className="gold-divider mx-auto my-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {venuesList.map((v) => (
            <article
              key={v.id}
              className="group bg-card border border-border shadow-card overflow-hidden flex flex-col justify-between hover:border-gold/50 transition-all"
            >
              <div>
                <div className="overflow-hidden aspect-[16/10]">
                  <img
                    src={v.img}
                    alt={v.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <span className="eyebrow text-gold block mb-2">{v.cuisine}</span>
                  <h3 className="font-display text-2xl text-ocean-deep mb-3">{v.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{v.text}</p>

                  {/* Signature items */}
                  <div className="bg-secondary/40 p-4 border border-border mb-6">
                    <h4 className="text-[10px] uppercase tracking-widest font-semibold text-ocean-deep mb-2 flex items-center gap-1.5">
                      <Utensils className="h-3.5 w-3.5 text-gold" /> Signature Specialties
                    </h4>
                    <ul className="text-xs text-muted-foreground space-y-1.5">
                      {v.signatureDishes.map((dish, dIdx) => (
                        <li key={dIdx} className="flex gap-2 items-center">
                          <Check className="h-3.5 w-3.5 text-gold shrink-0" /> {dish}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-5 text-xs uppercase tracking-[0.16em] text-muted-foreground border-t border-border pt-5 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-gold" />
                      {v.hours}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Shield className="h-3.5 w-3.5 text-gold" />
                      Dress: {v.dress}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-8 pt-0 flex gap-4">
                <button
                  onClick={() => setSelectedMenuVenue(v)}
                  className="px-5 py-3.5 border border-border text-xs font-semibold uppercase tracking-[0.2em] hover:border-gold hover:text-gold transition-colors text-center cursor-pointer flex-1"
                >
                  View Menu
                </button>
                <button
                  onClick={() => setSelectedReserveVenue(v)}
                  className="px-5 py-3.5 bg-ocean-deep text-white text-xs font-semibold uppercase tracking-[0.2em] hover:bg-gold hover:text-ocean-deep transition-colors text-center cursor-pointer flex-1"
                >
                  Reserve Table
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* POPUP 1: INTERACTIVE MENU OVERLAY */}
      {selectedMenuVenue && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="relative bg-card border border-border max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 shadow-luxury animate-in zoom-in duration-300">
            <button
              onClick={() => setSelectedMenuVenue(null)}
              className="absolute top-6 right-6 text-muted-foreground hover:text-gold p-1"
              aria-label="Close menu modal"
            >
              <X className="h-6 w-6" />
            </button>

            <span className="eyebrow text-gold">{selectedMenuVenue.cuisine}</span>
            <h3 className="font-display text-3xl text-ocean-deep mt-2 mb-1">
              {selectedMenuVenue.name}
            </h3>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              {selectedMenuVenue.hours} · Dress: {selectedMenuVenue.dress}
            </p>
            <div className="gold-divider my-6" />

            <div className="space-y-8">
              {selectedMenuVenue.mockMenu.map((cat, cIdx) => (
                <div key={cIdx} className="space-y-4">
                  <h4 className="font-display text-xl text-ocean-deep border-b border-border pb-2 italic">
                    {cat.category}
                  </h4>
                  <div className="space-y-6">
                    {cat.items.map((menuItem, mIdx) => (
                      <div key={mIdx} className="flex justify-between items-start gap-6">
                        <div>
                          <h5 className="font-sans text-sm font-semibold text-ocean-deep uppercase tracking-wider">
                            {menuItem.name}
                          </h5>
                          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                            {menuItem.desc}
                          </p>
                        </div>
                        <div className="font-display text-base text-gold shrink-0 font-medium">
                          {formatPrice(menuItem.priceUsd)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-border pt-6 text-center text-[10px] text-muted-foreground uppercase tracking-widest">
              * Government taxes and service charges are included. Menu selections subject to
              seasonal changes.
            </div>
          </div>
        </div>
      )}

      {/* POPUP 2: TABLE RESERVATION FORM MODAL */}
      {selectedReserveVenue && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="relative bg-card border border-border max-w-md w-full p-8 shadow-luxury animate-in zoom-in duration-300">
            <button
              onClick={() => setSelectedReserveVenue(null)}
              className="absolute top-6 right-6 text-muted-foreground hover:text-gold p-1"
              aria-label="Close reservation modal"
            >
              <X className="h-6 w-6" />
            </button>

            <span className="eyebrow text-gold">Dining Reservations</span>
            <h3 className="font-display text-2xl text-ocean-deep mt-2 mb-2">Book a Table</h3>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Venue: {selectedReserveVenue.name}
            </p>
            <div className="gold-divider my-5" />

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1">
                  Reservation Date
                </label>
                <input
                  type="date"
                  required
                  value={resDate}
                  onChange={(e) => setResDate(e.target.value)}
                  className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1">
                    Time Slot
                  </label>
                  <select
                    required
                    value={resTime}
                    onChange={(e) => setResTime(e.target.value)}
                    className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold cursor-pointer"
                  >
                    <option value="">Choose Time</option>
                    <option value="18:00">18:00</option>
                    <option value="18:30">18:30</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                    <option value="21:30">21:30</option>
                    <option value="22:00">22:00</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1">
                    Guests
                  </label>
                  <select
                    value={resGuests}
                    onChange={(e) => setResGuests(e.target.value)}
                    className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1">
                  Special Dietary Requests
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Allergies, window table, celebrating anniversary"
                  value={resNotes}
                  onChange={(e) => setResNotes(e.target.value)}
                  className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold placeholder-muted-foreground/60"
                />
              </div>

              <button
                type="submit"
                disabled={isReserved}
                className="w-full py-4 bg-ocean-deep hover:bg-gold text-white hover:text-ocean-deep text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer disabled:opacity-50"
              >
                {isReserved ? "Booking Table..." : "Confirm Table Reservation"}
              </button>
            </form>

            <div className="mt-5 text-[10px] text-muted-foreground leading-normal flex gap-1.5 items-start">
              <Info className="h-4.5 w-4.5 text-gold shrink-0 mt-0.5" />
              <span>
                Tables will be held for a maximum of 15 minutes past reservation time. Dress code
                guidelines apply.
              </span>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
