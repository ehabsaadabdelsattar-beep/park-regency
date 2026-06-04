import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronDown,
  Waves,
  Sparkles,
  UtensilsCrossed,
  Anchor,
  Crown,
  Heart,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BookingWidget } from "@/components/booking-widget";
import { useCurrency } from "@/contexts/currency-context";
import i18n from "@/i18n";

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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: i18n.t("home.eyebrow") + " — Park Regency Sharm El Sheikh" },
      {
        name: "description",
        content:
          "5-star luxury resort on the Red Sea. Private beaches, world-class dining, spa & suites in Gardens Bay, Sharm El Sheikh.",
      },
      { property: "og:title", content: "Park Regency Sharm El Sheikh Resort" },
      { property: "og:description", content: i18n.t("home.heroSub") },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useTranslation();
  const { formatPrice } = useCurrency();

  // Highlight Cards
  const highlights = [
    {
      icon: Waves,
      title: t("home.highlights.beachesTitle"),
      text: t("home.highlights.beachesText"),
      link: "/beaches",
    },
    {
      icon: Sparkles,
      title: t("home.highlights.spaTitle"),
      text: t("home.highlights.spaText"),
      link: "/spa",
    },
    {
      icon: UtensilsCrossed,
      title: t("home.highlights.diningTitle"),
      text: t("home.highlights.diningText"),
      link: "/dining",
    },
    {
      icon: Anchor,
      title: t("home.highlights.divingTitle"),
      text: t("home.highlights.divingText"),
      link: "/dive-center",
    },
    {
      icon: Crown,
      title: t("home.highlights.clubTitle"),
      text: t("home.highlights.clubText"),
      link: "/regency-club",
    },
    {
      icon: Heart,
      title: t("home.highlights.weddingTitle"),
      text: t("home.highlights.weddingText"),
      link: "/weddings",
    },
  ];

  // Accommodations Preview List
  const rooms = [
    {
      id: "sea-view",
      img: roomSeaView,
      name: t("home.rooms.seaViewName"),
      size: "42 m²",
      occupancy: t("home.occupancy2A"),
      desc: t("home.rooms.seaViewDesc"),
      priceUsd: 320,
      link: "/rooms/sea-view",
    },
    {
      id: "sea-front",
      img: roomSeaFront,
      name: t("home.rooms.seaFrontName"),
      size: "48 m²",
      occupancy: t("home.occupancy2A1C"),
      desc: t("home.rooms.seaFrontDesc"),
      priceUsd: 420,
      link: "/rooms/sea-front",
    },
    {
      id: "swim-up",
      img: pool,
      name: t("home.rooms.swimUpName"),
      size: "44 m²",
      occupancy: t("home.occupancy2A"),
      desc: t("home.rooms.swimUpDesc"),
      priceUsd: 380,
      link: "/rooms/swim-up",
    },
    {
      id: "regency-club",
      img: roomSuite,
      name: t("home.rooms.clubName"),
      size: "52 m²",
      occupancy: t("home.occupancy2A1C"),
      desc: t("home.rooms.clubDesc"),
      priceUsd: 580,
      link: "/rooms/regency-club",
    },
    {
      id: "royal-villa",
      img: hero,
      name: t("home.rooms.villaName"),
      size: "320 m²",
      occupancy: t("home.occupancyVilla"),
      desc: t("home.rooms.villaDesc"),
      priceUsd: 2800,
      link: "/suites-villas",
    },
  ];

  // Experiences List
  const experiences = [
    { img: diving, title: t("home.experienceDiving"), link: "/dive-center" },
    { img: spa, title: t("home.experienceSpa"), link: "/spa" },
    { img: pool, title: t("home.experiencePools"), link: "/facilities" },
  ];

  // Testimonials Slider State
  const testimonials = [
    {
      name: t("home.testimonials.isabella.name"),
      country: t("home.testimonials.isabella.country"),
      text: t("home.testimonials.isabella.text"),
    },
    {
      name: t("home.testimonials.james.name"),
      country: t("home.testimonials.james.country"),
      text: t("home.testimonials.james.text"),
    },
    {
      name: t("home.testimonials.hana.name"),
      country: t("home.testimonials.hana.country"),
      text: t("home.testimonials.hana.text"),
    },
    {
      name: t("home.testimonials.alexei.name"),
      country: t("home.testimonials.alexei.country"),
      text: t("home.testimonials.alexei.text"),
    },
  ];

  const diningFeatures = t("home.diningFeatures", { returnObjects: true }) as string[];

  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNextReview = () => {
    setActiveReview((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevReview = () => {
    setActiveReview((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-full">
      <SiteHeader />
      <main className="flex-grow">
        {/* HERO WITH VIDEO BACKGROUND */}
        <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-black">
          {/* HTML5 Loop Video */}
          <div className="absolute inset-0 h-full w-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
              poster={hero}
            >
              <source
                src="https://player.vimeo.com/external/435674703.sd.mp4?s=7db317de90176bf7d73010b98eb69ad3b48227b6&profile_id=165&oauth2_token_id=57447761"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute inset-0 gradient-hero bg-gradient-to-b from-ocean-deep/30 via-ocean-deep/40 to-ocean-deep/90" />

          <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center items-center text-center text-white">
            <span className="eyebrow text-gold mb-6 animate-fade-in">{t("home.eyebrow")}</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-normal max-w-5xl leading-[1.05] tracking-tight">
              Park Regency
              <br />
              <span className="italic text-gold">Sharm El Sheikh</span>
            </h1>
            <div className="gold-divider my-8" />
            <p className="max-w-xl text-white/85 text-base md:text-lg leading-relaxed">
              {t("home.heroSub")}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#highlights"
                className="px-8 py-4 bg-gold text-ocean-deep text-xs uppercase tracking-[0.22em] font-semibold hover:bg-white hover:text-ocean-deep transition-all"
              >
                {t("home.exploreResort")}
              </a>
              <Link
                to="/booking"
                className="px-8 py-4 border border-white/60 text-white text-xs uppercase tracking-[0.22em] font-semibold hover:bg-white hover:text-ocean-deep transition-all"
              >
                {t("booking.bookYourStay")}
              </Link>
            </div>
          </div>

          <ChevronDown className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 h-6 w-6 text-white/70 animate-bounce" />
        </section>

        {/* FLOATING BOOKING WIDGET */}
        <BookingWidget />

        {/* WELCOME SECTION */}
        <section className="py-24 md:py-32 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative group">
              <div className="overflow-hidden aspect-[4/5] h-[600px] shadow-luxury">
                <img
                  src={welcome}
                  alt="Luxury resort interior view"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="hidden md:block absolute -bottom-8 -right-8 bg-gold text-ocean-deep p-8 max-w-xs shadow-md">
                <div className="font-display text-5xl font-medium">35</div>
                <div className="eyebrow text-ocean-deep/80 mt-2">{t("home.yearsHospitality")}</div>
              </div>
            </div>

            <div>
              <span className="eyebrow">{t("home.welcome")}</span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight text-ocean-deep">
                {t("home.welcomeTitle")}
              </h2>
              <div className="gold-divider my-8" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t("home.welcomeP1")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">{t("home.welcomeP2")}</p>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] font-semibold text-ocean-deep border-b border-gold pb-2 hover:text-gold transition-colors"
              >
                {t("home.discoverMore")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS SECTION */}
        <section id="highlights" className="py-24 md:py-32 bg-secondary/60 border-y border-border">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="eyebrow">{t("home.theExperience")}</span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 text-ocean-deep">
                {t("home.resortHighlights")}
              </h2>
              <div className="gold-divider mx-auto my-6" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlights.map(({ icon: Icon, title, text, link }) => (
                <div
                  key={title}
                  className="bg-card p-10 border border-border group hover:border-gold/50 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
                >
                  <div>
                    <Icon className="h-9 w-9 text-gold" strokeWidth={1.2} />
                    <h3 className="font-display text-2xl mt-6 text-ocean-deep">{title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{text}</p>
                  </div>
                  <div className="mt-8">
                    <Link
                      to={link}
                      className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-wider text-gold hover:text-ocean-deep transition-colors"
                    >
                      {t("home.learnMore")} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACCOMMODATION CAROUSEL PREVIEW */}
        <section className="py-24 md:py-32 container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <span className="eyebrow">{t("home.accommodation")}</span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 text-ocean-deep">
                {t("home.roomsSuites")}
              </h2>
              <div className="gold-divider my-6" />
            </div>
            <Link
              to="/accommodation"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] font-semibold text-ocean-deep hover:text-gold transition-colors"
            >
              {t("home.viewAll")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.slice(0, 3).map((r) => (
              <article
                key={r.id}
                className="group bg-card border border-border shadow-card overflow-hidden hover:border-gold/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="overflow-hidden aspect-[4/3]">
                    <img
                      src={r.img}
                      alt={r.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl text-ocean-deep">{r.name}</h3>
                    <div className="flex gap-4 mt-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
                      <span>{r.size}</span>
                      <span>·</span>
                      <span>{r.occupancy}</span>
                    </div>
                    <p className="mt-5 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {r.desc}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <div className="mt-4 flex items-end justify-between pt-6 border-t border-border">
                    <div>
                      <div className="eyebrow text-[9px]">{t("booking.from")}</div>
                      <div className="font-display text-2xl text-ocean-deep mt-1">
                        {formatPrice(r.priceUsd)}
                        <span className="text-xs text-muted-foreground font-sans font-normal">
                          {" "}
                          {t("booking.perNight")}
                        </span>
                      </div>
                    </div>
                    <Link
                      to={r.link}
                      className="text-xs uppercase font-semibold tracking-[0.2em] text-gold hover:text-ocean-deep"
                    >
                      {t("home.viewDetails")} →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* DINING EXPERIENCE */}
        <section className="relative py-24 md:py-32 bg-ocean-deep text-white overflow-hidden">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow text-gold">{t("home.diningEyebrow")}</span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
                {t("home.diningTitle")}
              </h2>
              <div className="gold-divider my-6" />
              <p className="text-white/80 leading-relaxed mb-6">{t("home.diningText")}</p>
              <ul className="space-y-4 text-white/85 mb-10 font-medium text-sm">
                {diningFeatures.map((x) => (
                  <li key={x} className="flex gap-3 items-center">
                    <span className="text-gold font-bold">—</span>
                    {x}
                  </li>
                ))}
              </ul>
              <Link
                to="/dining"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] font-semibold text-gold border-b border-gold pb-2 hover:text-white hover:border-white transition-all"
              >
                {t("home.exploreDining")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Gallery Cluster */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src={dining}
                alt="Dining setup table"
                loading="lazy"
                className="w-full h-80 object-cover shadow-lg hover:opacity-90 transition-opacity"
              />
              <img
                src={welcome}
                alt="Signature drink presentation"
                loading="lazy"
                className="w-full h-80 object-cover mt-8 shadow-lg hover:opacity-90 transition-opacity"
              />
            </div>
          </div>
        </section>

        {/* EXPERIENCES SECTION */}
        <section className="py-24 md:py-32 container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">{t("home.experiences")}</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-ocean-deep">
              {t("home.experiencesTitle")}
            </h2>
            <div className="gold-divider mx-auto my-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((e) => (
              <Link
                key={e.title}
                to={e.link}
                className="group relative aspect-[3/4] overflow-hidden shadow-md"
              >
                <img
                  src={e.img}
                  alt={e.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                  <h3 className="font-display text-2xl">{e.title}</h3>
                  <div className="gold-divider mt-4 w-12 group-hover:w-24 transition-all duration-500" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* WEDDING SHOWCASE WITH STATIC PHOTO/VIDEO CONTAINER */}
        <section className="relative h-[650px] overflow-hidden bg-black">
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover opacity-70"
              poster={wedding}
            >
              <source
                src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054ba2078bd0c67e85c5b50d51be6a3&profile_id=165&oauth2_token_id=57447761"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute inset-0 bg-ocean-deep/50 bg-gradient-to-t from-ocean-deep/90 to-transparent" />

          <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
            <span className="eyebrow text-gold">{t("home.weddingsEyebrow")}</span>
            <h2 className="font-display text-4xl md:text-6xl mt-6 max-w-3xl leading-tight">
              {t("home.weddingsTitle")}
            </h2>
            <div className="gold-divider my-6" />
            <p className="max-w-xl text-white/85 mb-8">{t("home.weddingsText")}</p>
            <Link
              to="/weddings"
              className="px-8 py-4 bg-gold text-ocean-deep text-xs uppercase tracking-[0.22em] font-semibold hover:bg-white hover:text-ocean-deep transition-all"
            >
              {t("home.planWedding")}
            </Link>
          </div>
        </section>

        {/* MEETINGS & EVENTS */}
        <section className="py-24 md:py-32 bg-secondary/50 border-t border-border">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow">{t("home.meetingsEyebrow")}</span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 text-ocean-deep">
                {t("home.meetingsTitle")}
              </h2>
              <div className="gold-divider my-6" />
              <p className="text-muted-foreground leading-relaxed mb-8">{t("home.meetingsText")}</p>

              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  ["700+", t("home.guestsLabel")],
                  ["8", t("home.venuesLabel")],
                  ["1,200m²", t("home.ballroomLabel")],
                ].map(([n, l]) => (
                  <div key={l as string}>
                    <div className="font-display text-3xl font-medium text-gold">{n}</div>
                    <div className="eyebrow mt-1 text-muted-foreground text-[10px]">{l}</div>
                  </div>
                ))}
              </div>

              <Link
                to="/meetings"
                className="px-8 py-4 bg-gold text-ocean-deep text-xs uppercase tracking-[0.22em] font-semibold hover:bg-white hover:text-ocean-deep transition-all inline-block"
              >
                {t("home.requestProposal")}
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src={welcome}
                alt="Conference table arrangement"
                loading="lazy"
                className="w-full h-72 object-cover shadow-md"
              />
              <img
                src={pool}
                alt="Cocktail gala poolside venue"
                loading="lazy"
                className="w-full h-72 object-cover mt-12 shadow-md"
              />
            </div>
          </div>
        </section>

        {/* TESTIMONIAL SLIDER */}
        <section className="py-24 md:py-32 bg-card relative">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="eyebrow">{t("home.guestReviews")}</span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 text-ocean-deep">
                {t("home.reviewsTitle")}
              </h2>
              <div className="gold-divider mx-auto my-6" />
            </div>

            <div className="max-w-4xl mx-auto bg-secondary/30 border border-border p-10 md:p-16 relative">
              <div className="flex gap-1 text-gold justify-center mb-8">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <div className="min-h-[160px] flex items-center justify-center text-center">
                <blockquote className="font-display text-2xl md:text-3xl text-ocean-deep italic leading-relaxed transition-all duration-500">
                  "{testimonials[activeReview].text}"
                </blockquote>
              </div>

              <div className="text-center mt-8">
                <cite className="eyebrow text-muted-foreground not-italic block font-semibold text-xs">
                  {testimonials[activeReview].name} · {testimonials[activeReview].country}
                </cite>
              </div>

              {/* Slider Arrows */}
              <div className="flex justify-center gap-4 mt-10">
                <button
                  onClick={handlePrevReview}
                  className="p-3 border border-border hover:border-gold hover:text-gold transition-colors text-ocean-deep cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNextReview}
                  className="p-3 border border-border hover:border-gold hover:text-gold transition-colors text-ocean-deep cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE LOCATION MAP SECTION */}
        <section className="h-[450px] w-full border-t border-border relative bg-secondary">
          {/* Beautiful Google Map Iframe pointing specifically to Park Regency Sharm El Sheikh */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.929828556488!2d34.3387823!3d27.9179929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145625c150c2658b%3A0xe212cc4be848be48!2sPark%20Regency%20Sharm%20El%20Sheikh%20Resort!5e0!3m2!1sen!2seg!4v1680000000000!5m2!1sen!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Park Regency location in Gardens Bay, Sharm El Sheikh"
            className="grayscale contrast-125 opacity-90"
          />
          {/* Floating Details Overlay Card */}
          <div className="absolute top-10 left-6 md:left-20 bg-card p-6 border border-border shadow-luxury max-w-sm">
            <span className="eyebrow text-gold">{t("home.locationEyebrow")}</span>
            <h3 className="font-display text-xl text-ocean-deep mt-2 mb-3">
              {t("home.locationTitle")}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              {t("home.locationDesc")}
            </p>
            <a
              href="https://maps.google.com/?q=Park+Regency+Sharm+El+Sheikh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider font-semibold text-gold hover:text-ocean-deep transition-colors"
            >
              {t("home.directions")}
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
