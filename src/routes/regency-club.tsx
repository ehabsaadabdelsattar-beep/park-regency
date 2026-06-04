import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { Crown, Wine, Coffee, Sparkles, Clock, UserCheck } from "lucide-react";
import roomSuite from "@/assets/room-suite.jpg";
import welcome from "@/assets/welcome.jpg";

export const Route = createFileRoute("/regency-club")({
  head: () => ({
    meta: [
      { title: "Regency Club — Park Regency Sharm El Sheikh" },
      {
        name: "description",
        content:
          "An exclusive enclave with private lounge, butler service and curated culinary moments throughout the day.",
      },
      { property: "og:title", content: "The Regency Club" },
      { property: "og:description", content: "A private hotel within the hotel." },
    ],
  }),
  component: ClubPage,
});

const benefits = [
  {
    icon: UserCheck,
    title: "Private Check-in",
    text: "Welcomed at a dedicated lounge with a personal greeter and refreshments.",
  },
  {
    icon: Crown,
    title: "Personal Butler",
    text: "A 24-hour butler attends to packing, reservations and personal preferences.",
  },
  {
    icon: Coffee,
    title: "All-day Lounge",
    text: "Continental breakfast, afternoon tea, evening hors d'oeuvres and nightcaps.",
  },
  {
    icon: Wine,
    title: "Open Bar",
    text: "Premium spirits, fine wines and signature cocktails throughout the day.",
  },
  {
    icon: Sparkles,
    title: "Spa Privileges",
    text: "Complimentary spa access and priority booking for treatments.",
  },
  {
    icon: Clock,
    title: "Flexible Stay",
    text: "Early check-in, late check-out and complimentary garment pressing.",
  },
];

function ClubPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Regency Club"
        title="A private hotel within the hotel"
        subtitle="An enclave reserved for those who value the privilege of less."
        image={roomSuite}
      />

      <section className="py-20 md:py-28 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={welcome}
            alt="Regency Club lounge"
            loading="lazy"
            className="w-full h-[560px] object-cover shadow-luxury"
          />
          <div>
            <span className="eyebrow">The Privilege</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4">
              Where every detail anticipates you
            </h2>
            <div className="gold-divider my-6" />
            <p className="text-muted-foreground leading-relaxed mb-5">
              The Regency Club occupies the resort's most coveted floors, with sweeping Red Sea
              views and access to a private lounge that flows from sunrise to nightfall.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From the moment of arrival, a personal butler curates your stay — from preferred
              pillow choice to a candlelit dinner on your terrace.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Privileges</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4">The Regency Club experience</h2>
            <div className="gold-divider mx-auto my-6" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-background p-10">
                <Icon className="h-9 w-9 text-gold" strokeWidth={1.2} />
                <h3 className="font-display text-xl mt-5 text-ocean-deep">{title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              to="/booking"
              className="inline-block px-10 py-4 bg-gold text-ocean-deep text-xs uppercase tracking-[0.22em] hover:bg-ocean-deep hover:text-white transition-colors"
            >
              Reserve a Club Suite
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
