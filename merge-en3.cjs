const fs = require("fs");
const path = require("path");

const enPath = path.join(__dirname, "src/i18n/locales/en.json");
const en = JSON.parse(fs.readFileSync(enPath, "utf8"));

const newHomeTranslations = {
  rooms: {
    ...en.home.rooms,
    swimUpName: "Swim Up Room",
    swimUpDesc: "Dive directly into our heated lagoon pool from your private deck.",
    clubName: "Regency Club Room",
    clubDesc: "Private lounge access, complimentary breakfast, and dedicated concierge.",
    villaName: "Royal Villa",
    villaDesc: "Opulent private cliffside villa with private infinity pool & 24/7 butler.",
  },
  occupancyVilla: "6 Adults + 3 Children",
  testimonials: {
    isabella: {
      name: "Isabella M.",
      country: "Italy",
      text: "The most magical week of our lives. Every detail, from the private butler service to the sunset dinners overlooking the Red Sea, was flawless.",
    },
    james: {
      name: "James R.",
      country: "United Kingdom",
      text: "A genuine 5-star experience. The Regency Club lounge alone is worth the trip — and the house reef diving was world-class.",
    },
    hana: {
      name: "Hana K.",
      country: "Germany",
      text: "Pure luxury without pretense. The spa rituals were transformative, and the hospitality felt deeply personal.",
    },
    alexei: {
      name: "Alexei V.",
      country: "Kazakhstan",
      text: "Exceptional dining options, beautiful beach bays, and very helpful staff. The Royal Villa exceeded all expectations.",
    },
  },
  diningFeatures: [
    "Sala Thai · Authentic Royal Thai Fine Dining",
    "Beach House · Beachfront Mediterranean Grill",
    "The Main · Dynamic International Live Buffet Stations",
    "Sunset Bar & Terrace · Handcrafted Cocktails & Shisha Lounge",
  ],
  locationEyebrow: "Resort Location",
  locationTitle: "Gardens Bay, Sinai",
  locationDesc:
    "Conveniently located just 10 minutes from Sharm El Sheikh International Airport (SSH) and 15 minutes from Naama Bay central district.",
  directions: "Directions via Google Maps →",
  learnMore: "Learn More",
};

en.home = { ...en.home, ...newHomeTranslations };
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
console.log("en.json updated successfully via merge-en3.cjs!");
