const fs = require("fs");
const path = require("path");

const enPath = path.join(__dirname, "src/i18n/locales/en.json");
const en = JSON.parse(fs.readFileSync(enPath, "utf8"));

const newTranslations = {
  gallery: {
    title: "Gallery — Park Regency Sharm El Sheikh",
    metaDesc:
      "Explore the beaches, suites, restaurants, spa and gardens of Park Regency Sharm El Sheikh through our photo gallery.",
    ogTitle: "Park Regency Gallery",
    ogDesc: "A visual journey through the Park Regency Resort experience.",
    heroEyebrow: "Gallery",
    heroTitle: "A visual journey",
    heroSubtitle: "From sunrise on the Red Sea to candlelit dinners under the stars.",
    categories: {
      all: "All",
      beaches: "Beaches",
      rooms: "Rooms",
      dining: "Dining",
      spa: "Spa",
      pools: "Pools",
      weddings: "Weddings",
      activities: "Activities",
    },
    bookStay: "Book Your Stay",
  },
  meetings: {
    title: "Meetings & Events — Park Regency Sharm El Sheikh",
    metaDesc:
      "Flagship conference center hosting up to 700 guests across 8 venues including a 1,200 m² grand ballroom.",
    ogTitle: "Meetings & Events",
    ogDesc: "Where ambition meets occasion.",
    heroEyebrow: "Meetings & Events",
    heroTitle: "Where ambition meets occasion",
    heroSubtitle: "Eight venues, one flagship conference center, infinite possibility.",
    stats: {
      guests: "Guests",
      venues: "Venues",
      ballroom: "Grand Ballroom",
      production: "AV Production",
    },
    capabilitiesEyebrow: "Capabilities",
    capabilitiesTitle: "Production-grade, hospitality-led",
    capabilities: [
      "Full AV, lighting and live-stream production",
      "Dedicated 1 Gbps fibre for events",
      "On-site event managers and concierges",
      "Modular venues — break-outs to 700-person plenaries",
    ],
    capacityTitle: "Capacity Configuration",
    table: {
      venue: "Venue",
      size: "Size",
      capacity: "Capacity",
      style: "Style",
      guests: "Guests",
    },
    venues: {
      grandBallroom: { name: "Grand Ballroom", style: "Banquet / Theatre" },
      royalHall: { name: "Royal Hall", style: "Conference" },
      sinaiHall: { name: "Sinai Hall", style: "U-Shape / Boardroom" },
      tiranRoom: { name: "Tiran Room", style: "Classroom" },
      library: { name: "Library Boardroom", style: "Executive Board" },
      beach: { name: "Beach Pavilion", style: "Cocktail / Gala" },
      openAir: "Open Air",
    },
    form: {
      successTitle: "Proposal Request Received",
      successText:
        "Thank you for contacting Park Regency. Our Senior Events Planner will review your requirements and send a customized proposal package within the next 24 business hours.",
      submitAnother: "Submit Another Request",
      eyebrow: "Request Proposal",
      title: "Plan Your Event",
      subtitle:
        "Provide your gathering details and our event planners will design a bespoke package for you.",
      contactName: "Contact Name",
      company: "Company / Organization",
      email: "Email Address",
      phone: "Phone Number",
      date: "Event Date",
      guestsCount: "Estimated Guest Count",
      details: "Event Details & Technical Requirements",
      detailsPlaceholder:
        "Describe your layout requirements, catering needs, audio-visual specs, and lodging configurations.",
      submitBtn: "Submit Proposal Request",
    },
  },
  offers: {
    title: "Special Offers — Park Regency Sharm El Sheikh",
    metaDesc:
      "Exclusive packages: Summer Escape, Honeymoon, Family, Long Stay and Early Booking offers at Park Regency Sharm El Sheikh.",
    ogTitle: "Special Offers at Park Regency",
    ogDesc: "Save more on your Red Sea luxury stay.",
    heroEyebrow: "Special Offers",
    heroTitle: "Exclusive packages, crafted for you",
    heroSubtitle: "Hand-picked offers across the seasons — from honeymoons to family escapes.",
    from: "From",
    night: "/night",
    book: "Book",
    items: {
      summer: {
        tag: "Seasonal",
        title: "Summer Escape",
        save: "Save 25%",
        desc: "Beat the heat with sun-drenched days by the Red Sea, daily breakfast and a complimentary cocktail.",
        bullets: ["Daily breakfast for two", "Welcome cocktail", "Late check-out", "20% off spa"],
      },
      honeymoon: {
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
      },
      family: {
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
      },
      longStay: {
        tag: "Extended",
        title: "Long Stay Offer",
        save: "Stay 7, pay 5",
        desc: "Settle in. Two nights on us when you book a week or more, with weekly laundry and butler service.",
        bullets: ["Min 7 nights", "Two free nights", "Weekly laundry", "Personal concierge"],
      },
      early: {
        tag: "Plan ahead",
        title: "Early Booking",
        save: "Save 30%",
        desc: "Book 60+ days in advance and enjoy our best available rate plus daily half-board dining.",
        bullets: [
          "60-day advance",
          "Half-board included",
          "Free cancellation",
          "Best rate guarantee",
        ],
      },
      wellness: {
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
      },
    },
  },
  regencyClub: {
    title: "Regency Club — Park Regency Sharm El Sheikh",
    metaDesc:
      "An exclusive enclave with private lounge, butler service and curated culinary moments throughout the day.",
    ogTitle: "The Regency Club",
    ogDesc: "A private hotel within the hotel.",
    heroEyebrow: "Regency Club",
    heroTitle: "A private hotel within the hotel",
    heroSubtitle: "An enclave reserved for those who value the privilege of less.",
    privilegeEyebrow: "The Privilege",
    privilegeTitle: "Where every detail anticipates you",
    privilegeP1:
      "The Regency Club occupies the resort's most coveted floors, with sweeping Red Sea views and access to a private lounge that flows from sunrise to nightfall.",
    privilegeP2:
      "From the moment of arrival, a personal butler curates your stay — from preferred pillow choice to a candlelit dinner on your terrace.",
    privilegesEyebrow: "Privileges",
    privilegesTitle: "The Regency Club experience",
    reserve: "Reserve a Club Suite",
    benefits: {
      checkin: {
        title: "Private Check-in",
        text: "Welcomed at a dedicated lounge with a personal greeter and refreshments.",
      },
      butler: {
        title: "Personal Butler",
        text: "A 24-hour butler attends to packing, reservations and personal preferences.",
      },
      lounge: {
        title: "All-day Lounge",
        text: "Continental breakfast, afternoon tea, evening hors d'oeuvres and nightcaps.",
      },
      bar: {
        title: "Open Bar",
        text: "Premium spirits, fine wines and signature cocktails throughout the day.",
      },
      spa: {
        title: "Spa Privileges",
        text: "Complimentary spa access and priority booking for treatments.",
      },
      flexible: {
        title: "Flexible Stay",
        text: "Early check-in, late check-out and complimentary garment pressing.",
      },
    },
  },
  reviews: {
    title: "Guest Reviews — Park Regency Sharm El Sheikh",
    metaDesc: "Read authentic reviews from our guests on TripAdvisor, Google and Facebook.",
    ogTitle: "Guest Reviews",
    ogDesc: "Thousands of guests, one common verdict — luxury done right.",
    heroEyebrow: "Guest Reviews",
    heroTitle: "Voices of our guests",
    heroSubtitle: "Thousands of stays. One consistent verdict.",
    reviewsCount: "reviews",
    readAll: "Read all",
  },
  spa: {
    title: "Spa & Wellness — Park Regency Sharm El Sheikh",
    metaDesc:
      "A holistic spa journey inspired by the Sinai — Hammam rituals, signature massages and personalized wellness programs.",
    ogTitle: "Spa & Wellness",
    ogDesc: "Restore mind, body and spirit by the Red Sea.",
    heroEyebrow: "Spa & Wellness",
    heroTitle: "A sanctuary for body and spirit",
    heroSubtitle: "Holistic rituals drawn from the timeless wisdom of the Sinai.",
    sanctuaryEyebrow: "The Sanctuary",
    sanctuaryTitle: "Twelve treatment suites. One philosophy.",
    sanctuaryP1:
      "Our spa unfolds across 2,000 m² of marble, soft light and the quiet hush of running water. Twelve treatment suites, a traditional Hammam, hydrotherapy circuit and a heated indoor pool form the foundation of every journey.",
    sanctuaryP2:
      "Every ritual begins with a private consultation and ends with herbal tea on the terrace.",
    treatmentsEyebrow: "Treatments",
    treatmentsTitle: "Signature rituals",
    bookTreatment: "Book Treatment →",
    treatments: {
      hammam: {
        name: "Sinai Hammam Ritual",
        text: "Steam, exfoliation and a black-soap cleanse rooted in centuries-old Egyptian tradition.",
      },
      aroma: {
        name: "Aromatherapy Massage",
        text: "Tailored essential-oil blend with deep tissue and Swedish techniques.",
      },
      salt: {
        name: "Red Sea Salt Glow",
        text: "Mineral-rich scrub followed by a hydrating wrap and rain-shower rinse.",
      },
      couples: {
        name: "Couples Retreat",
        text: "Private suite with side-by-side rituals, champagne and a candlelit bath.",
      },
    },
  },
  virtualTour: {
    title: "Virtual Tour — Park Regency Sharm El Sheikh",
    metaDesc:
      "Step inside Park Regency with our immersive 360° virtual tour — rooms, beaches, restaurants and spa.",
    ogTitle: "360° Virtual Tour",
    ogDesc: "Experience the resort before you arrive.",
    heroEyebrow: "Virtual Tour",
    heroTitle: "Step inside Park Regency",
    heroSubtitle: "Wander our beaches, suites and dining venues in immersive 360°.",
    launch: "Launch 360° Tour",
    details: "12 scenes · 4K resolution",
    scenes: {
      beach: "Main Beach",
      suite: "Royal Suite",
      pool: "Infinity Pool",
      dining: "Sala Thai",
      spa: "Spa Reception",
    },
  },
  weddings: {
    title: "Weddings — Park Regency Sharm El Sheikh",
    metaDesc:
      "Beachfront ceremonies, ballroom receptions and intimate elopements crafted by our wedding atelier.",
    ogTitle: "Weddings at Park Regency",
    ogDesc: "Say 'I do' by the Red Sea.",
    heroEyebrow: "Weddings & Celebrations",
    heroTitle: "Say 'I do' by the Red Sea",
    heroSubtitle:
      "From intimate elopements to grand celebrations, every detail composed by our atelier.",
    packagesEyebrow: "Luxury Packages",
    packagesTitle: "Curated Bridal Experiences",
    guests: "Guests",
    from: "From",
    inquire: "Inquire Package",
    packages: {
      elopement: {
        name: "The Elopement",
        text: "An intimate beach ceremony, photographer, two-tier cake and a private candlelit dinner.",
      },
      classic: {
        name: "The Classic",
        text: "Beach ceremony, three-course reception, floral arch, live music and a dedicated planner.",
      },
      grand: {
        name: "The Grand",
        text: "Ballroom or beach venue, multi-course tasting menu, premium bar, fireworks and full production.",
      },
    },
    servicesEyebrow: "Atelier Services",
    servicesTitle: "Composed in every detail",
    plan: "Plan Your Wedding",
    services: {
      planner: "Dedicated Planner",
      floral: "Floral Design",
      photo: "Photo & Video",
      music: "Live Entertainment",
      cake: "Patisserie",
      spa: "Spa & Bridal Suite",
    },
    form: {
      successTitle: "Congratulations!",
      successText:
        "Your wedding inquiry has been received by the Park Regency Wedding Atelier. Our Lead Wedding Coordinator will contact you within 24 hours to schedule a private consultation.",
      submitAnother: "Submit Another Inquiry",
      eyebrow: "Wedding Atelier",
      title: "Bespoke Inquiry",
      subtitle: "Share the details of your dream wedding. Let us compose your perfect day.",
      partner1: "Partner 1 Name",
      partner2: "Partner 2 Name",
      email: "Email Address",
      phone: "Phone Number",
      date: "Preferred Date",
      guestsCount: "Guests Count",
      experience: "Desired Experience",
      vision: "Your Wedding Vision",
      visionPlaceholder:
        "Tell us about your theme, floral inspirations, color palette, catering desires, and whether you require guest lodging accommodations.",
      submitBtn: "Send Atelier Inquiry",
    },
  },
};

Object.assign(en, newTranslations);
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
console.log("en.json updated successfully via merge-en2.cjs!");
