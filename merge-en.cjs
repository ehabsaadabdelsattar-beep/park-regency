const fs = require("fs");
const path = require("path");

const enPath = path.join(__dirname, "src/i18n/locales/en.json");
const en = JSON.parse(fs.readFileSync(enPath, "utf8"));

const newTranslations = {
  about: {
    title: "About",
    metaDesc:
      "A landmark of Red Sea hospitality since 1991 — 35 years of refined luxury in Gardens Bay, Sharm El Sheikh.",
    ogTitle: "About Park Regency",
    ogDesc: "Our story, our values, our promise.",
    heroEyebrow: "About",
    heroTitle: "A landmark of the Red Sea",
    heroSubtitle: "Since 1991, a quiet pioneer of luxury in Sharm El Sheikh.",
    ourStory: "Our Story",
    storyTitle: "35 years of refined hospitality",
    storyP1:
      "Park Regency opened its doors in 1991 as one of the first true luxury resorts on the Sinai Peninsula. Three decades on, we remain family-owned — guided by the same belief that quietly excellent service is the rarest luxury of all.",
    storyP2:
      "Today, Park Regency stretches across 22 hectares of beachfront in Gardens Bay, with 344 rooms and suites, three private beaches, seven restaurants and a flagship conference center.",
    ourValues: "Our Values",
    valuesTitle: "What we stand for",
    values: {
      intuitiveService: "Intuitive Service",
      intuitiveServiceText: "We anticipate, never interrupt. Service felt, never seen.",
      craftsmanship: "Craftsmanship",
      craftsmanshipText: "From the brick of our archways to the plating of every course.",
      sustainability: "Sustainability",
      sustainabilityText:
        "A working reef-conservation programme and 100% renewable energy by 2030.",
      community: "Community",
      communityText: "Eighty percent of our team is from the Sinai region we proudly call home.",
    },
    beginStory: "Begin your story with us",
    bookStay: "Book Your Stay",
  },
  attractions: {
    title: "Local Attractions & Excursions — Park Regency Sharm El Sheikh",
    metaDesc:
      "Explore the best of Sharm El Sheikh. From the world-famous dive sites of Ras Mohammed to desert safaris and historical monasteries.",
    heroEyebrow: "Sinai Discoveries",
    heroTitle: "Area Attractions",
    heroSubtitle:
      "Venture beyond the resort gates to discover spectacular reef systems, rich histories, and vibrant entertainment hubs.",
    categories: {
      all: "All Sights",
      beaches: "Beaches",
      diving: "Diving & Snorkeling",
      spa: "Spa & Desert",
      pools: "Pool Complexes",
      entertainment: "Entertainment",
      kids: "Kids Activities",
      sports: "Sports",
    },
    items: {
      gardensBay: {
        title: "Gardens Bay Private Beach",
        distance: "Direct Access",
        desc: "Our private three-tier beach offers soft sands, private cabanas, and immediate reef entry. Widely regarded as Sharm El Sheikh's most tranquil cove.",
        coords: "Resort Grounds",
      },
      rasMohammed: {
        title: "Ras Mohammed National Park",
        distance: "40 mins by Boat",
        desc: "Ranked among the top ten dive sites globally. Explore vertical coral walls, shipwrecks, and shark observatories with legendary marine biodiversity.",
        coords: "Red Sea Marine Protected Area",
      },
      tiran: {
        title: "Straits of Tiran",
        distance: "30 mins by Boat",
        desc: "Home to four dramatic reef systems (Jackson, Woodhouse, Thomas, Gordon) rising from deep water, attracting turtles, barracuda, and hammerheads.",
        coords: "Gulf of Aqaba Entrance",
      },
      bedouinSpa: {
        title: "Bedouin Desert Spa Stargazing",
        distance: "25 mins away",
        desc: "An authentic desert wellness experience. Enjoy hot sand therapy, customized oil massage in private luxury tents, and traditional Bedouin herbal tea under the stars.",
        coords: "Sinai Desert Echo Valley",
      },
      lagoon: {
        title: "Gardens Bay Lagoon Complex",
        distance: "Direct Access",
        desc: "Our landmark multi-level lagoon features high waterfalls, a cave pool, lazy river channels, and separate quiet zones for premium adult relaxation.",
        coords: "Resort Center",
      },
      soho: {
        title: "Soho Square Sharm El Sheikh",
        distance: "10 mins by Shuttle",
        desc: "A premier entertainment, shopping, and dining hub. Features high-end boutiques, ice skating, dancing fountains, and international restaurants.",
        coords: "Shark's Bay District",
      },
      naama: {
        title: "Naama Bay Water Park",
        distance: "15 mins away",
        desc: "A massive kids-friendly water park featuring over 30 slides, splash grounds, wave pools, and dedicated dining zones perfect for a full family day out.",
        coords: "Naama District Center",
      },
      golf: {
        title: "Jolie Ville Championship Golf Course",
        distance: "12 mins by Taxi",
        desc: "An 18-hole par 72 championship golf course set amidst artificial lakes, offering spectacular mountain ranges and Red Sea vistas.",
        coords: "Sharm El Sheikh North",
      },
    },
    bookExcursion: "Book Excursion",
    noAttractions: "No attractions found in this category.",
    conciergeEyebrow: "Custom Excursion Planning",
    conciergeTitle: "Let Our Clefs d'Or Concierge Guide You",
    conciergeText:
      "From private yacht charters at sunrise to customized desert safaris and historical tours of Mount Sinai, our certified team is dedicated to crafting bespoke itineraries tailored to your exact preferences.",
    contactConcierge: "Contact Concierge",
    whatsappConcierge: "WhatsApp Concierge",
  },
  beaches: {
    title: "Private Beaches — Park Regency Sharm El Sheikh",
    metaDesc:
      "Three private beaches on the shores of Gardens Bay — from family coves to adults-only sanctuaries.",
    ogTitle: "Private Beaches",
    ogDesc: "Powder-soft sand, turquoise water, world-class coral.",
    heroEyebrow: "The Beaches",
    heroTitle: "Three shores, one Red Sea",
    heroSubtitle: "A private kilometre of coastline reserved exclusively for our guests.",
    items: {
      main: {
        name: "Main Beach",
        focus: "Family",
        text: "A wide crescent of golden sand with a shaded promenade, beachfront café and a gentle reef entry suitable for all ages.",
        allDay: "All day service",
        cabanas: "Cabanas",
        lifeguard: "Lifeguarded",
      },
      sunset: {
        name: "Sunset Cove",
        focus: "Adults only",
        text: "A serene adults-only enclave with cabanas, attentive beach service and a dedicated bar for sunset rituals.",
      },
      reef: {
        name: "Reef Bay",
        focus: "Snorkel & dive",
        text: "The resort's house reef begins steps from the shore — a living aquarium for snorkelers and beginner divers.",
      },
    },
  },
  careers: {
    title: "Careers — Park Regency Sharm El Sheikh",
    metaDesc:
      "Join the Park Regency family. Open positions in hospitality, F&B, spa and management.",
    ogTitle: "Careers at Park Regency",
    ogDesc: "Build your career with one of the Red Sea's leading luxury resorts.",
    heroEyebrow: "Careers",
    heroTitle: "Build your story with us",
    heroSubtitle:
      "A career at Park Regency is a craft — refined every day, in service of the extraordinary.",
    openPositions: "Open Positions",
    nowHiring: "Now hiring",
    notSeeRole: "Don't see your role?",
    sendCv:
      "We are always interested in meeting exceptional talent. Send your CV to our People & Culture team.",
  },
  contact: {
    title: "Contact — Park Regency Sharm El Sheikh",
    metaDesc:
      "Get in touch with our reservations, events or concierge teams. Located in Gardens Bay, Sharm El Sheikh.",
    ogTitle: "Contact Park Regency",
    ogDesc: "We look forward to welcoming you.",
    heroEyebrow: "Contact",
    heroTitle: "We look forward to welcoming you",
    heroSubtitle: "Our team is available 24/7 to plan every detail.",
    getInTouch: "Get in touch",
    addressLabel: "Address",
    address: "Gardens Bay, Sharm El Sheikh\nSouth Sinai, Egypt",
    reservationsLabel: "Reservations",
    emailLabel: "Email",
    airportLabel: "Airport Link",
    airportDesc: "15 minutes from Sharm El Sheikh International (SSH)",
    chatEyebrow: "Live Chat Assistance",
    chatDesc:
      "Chat directly with our 24/7 reception desk for immediate support, villa booking verification, or transfer coordinates.",
    chatBtn: "Chat on WhatsApp",
    sendMessage: "Send a message",
    firstName: "First name",
    lastName: "Last name",
    emailInput: "Email",
    phoneInput: "Phone",
    subject: "Subject",
    subjects: {
      reservation: "Reservation",
      wedding: "Wedding",
      meeting: "Meeting / Event",
      concierge: "Concierge",
      other: "Other",
    },
    messageLabel: "Message",
    sendBtn: "Send Message",
    successMsg: "Message Sent successfully! A concierge agent will respond shortly.",
  },
  diveCenter: {
    title: "Dive Center — Park Regency Sharm El Sheikh",
    metaDesc:
      "PADI 5-Star dive center with daily trips to Ras Mohammed, Tiran Island and the SS Thistlegorm wreck.",
    ogTitle: "Park Regency Dive Center",
    ogDesc: "Discover the legendary reefs of the Red Sea with PADI experts.",
    heroEyebrow: "Dive Center",
    heroTitle: "Beneath the surface, another world",
    heroSubtitle: "A PADI 5-Star Dive Center on the doorstep of the world's finest reefs.",
    padi: "PADI 5-Star",
    safety: "Safety First",
    multilingual: "Multilingual Instructors",
    coursesEyebrow: "Courses",
    coursesTitle: "From first breath to pro",
    enquire: "Enquire →",
    courses: {
      discover: {
        title: "Discover Scuba",
        level: "Beginner",
        duration: "Half day",
        text: "Try diving in the safety of our private bay with a PADI instructor.",
      },
      openWater: {
        title: "Open Water Course",
        level: "Certification",
        duration: "4 days",
        text: "Become a certified diver with theory, pool sessions and four open-water dives.",
      },
      advanced: {
        title: "Advanced Open Water",
        level: "Advanced",
        duration: "2 days",
        text: "Expand your skills with deep, navigation and three specialty dives.",
      },
      rescue: {
        title: "Rescue Diver",
        level: "Pro path",
        duration: "3 days",
        text: "Prepare for any underwater scenario with rescue scenarios and emergency planning.",
      },
    },
    sitesEyebrow: "Dive Sites",
    sitesTitle: "The legends of the Red Sea",
    sitesDesc:
      "Daily dive trips depart from our private marina. Equipment, transfers and a fresh-cooked lunch on the boat included.",
    sites: {
      rasM: {
        name: "Ras Mohammed",
        text: "Egypt's first national park — sheer walls, gardens of soft coral.",
      },
      tiran: {
        name: "Tiran Island",
        text: "Four legendary reefs in the Strait of Tiran teeming with reef sharks.",
      },
      thistlegorm: {
        name: "SS Thistlegorm",
        text: "WWII British wreck — one of the most famous dive sites in the world.",
      },
      shark: {
        name: "Shark & Yolanda Reef",
        text: "Cargo of toilets and turtles on a single dive — surreal and unforgettable.",
      },
    },
  },
  faqs: {
    title: "FAQs — Park Regency Sharm El Sheikh",
    metaDesc:
      "Answers to the most common questions about your stay — check-in, transfers, kids, pets, Wi-Fi and parking.",
    ogTitle: "Frequently Asked Questions",
    ogDesc: "Plan your stay with confidence.",
    heroEyebrow: "FAQs",
    heroTitle: "Frequently asked questions",
    heroSubtitle: "Everything you need to know before your stay.",
    cats: {
      arrival: "Arrival & Departure",
      families: "Families & Pets",
      property: "On Property",
      reservations: "Reservations",
    },
    items: {
      q1: "What are your check-in and check-out times?",
      a1: "Check-in from 14:00, check-out by 12:00. Early check-in and late check-out are available subject to occupancy and may be complimentary for Regency Club guests.",
      q2: "Do you offer airport transfers?",
      a2: "Yes — private chauffeur transfers from Sharm El Sheikh International Airport (SSH) can be arranged for $45 per car (one-way). Please request 48 hours in advance.",
      q3: "What is your kids policy?",
      a3: "Children of all ages are welcome. Kids under 6 stay free in their parents' room; ages 6–12 receive a 50% discount. A complimentary kids' club operates daily for ages 4–12.",
      q4: "Are pets allowed?",
      a4: "We are not able to accommodate pets at the resort, with the exception of registered service animals.",
      q5: "Is Wi-Fi included?",
      a5: "Yes — complimentary high-speed Wi-Fi is available throughout the resort.",
      q6: "Is parking available?",
      a6: "Yes — complimentary self-parking and valet parking are available for all guests.",
      q7: "Do you have currency exchange?",
      a7: "Yes, our front desk offers exchange for major currencies. We also accept USD, EUR, GBP, EGP and SAR.",
      q8: "What is your cancellation policy?",
      a8: "Cancellations made at least 7 days prior to arrival are fully refundable. Non-refundable rates are clearly marked at the time of booking.",
      q9: "Can I modify my reservation?",
      a9: "Yes, reservations can be modified up to 7 days before arrival. Please contact our reservations team for changes.",
    },
  },
};

Object.assign(en, newTranslations);
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
console.log("en.json updated successfully!");
