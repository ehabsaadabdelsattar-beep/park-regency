import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { Award, Users, Heart, Leaf } from "lucide-react";
import welcome from "@/assets/welcome.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Park Regency Sharm El Sheikh" },
      {
        name: "description",
        content:
          "A landmark of Red Sea hospitality since 1991 — 35 years of refined luxury in Gardens Bay, Sharm El Sheikh.",
      },
      { property: "og:title", content: "About Park Regency" },
      { property: "og:description", content: "Our story, our values, our promise." },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Heart,
    title: "Intuitive Service",
    text: "We anticipate, never interrupt. Service felt, never seen.",
  },
  {
    icon: Award,
    title: "Craftsmanship",
    text: "From the brick of our archways to the plating of every course.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    text: "A working reef-conservation programme and 100% renewable energy by 2030.",
  },
  {
    icon: Users,
    title: "Community",
    text: "Eighty percent of our team is from the Sinai region we proudly call home.",
  },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="A landmark of the Red Sea"
        subtitle="Since 1991, a quiet pioneer of luxury in Sharm El Sheikh."
        image={welcome}
      />

      <section className="py-20 md:py-28 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">
              35 years of refined hospitality
            </h2>
            <div className="gold-divider my-6" />
            <p className="text-muted-foreground leading-relaxed mb-5">
              Park Regency opened its doors in 1991 as one of the first true luxury resorts on the
              Sinai Peninsula. Three decades on, we remain family-owned — guided by the same belief
              that quietly excellent service is the rarest luxury of all.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, Park Regency stretches across 22 hectares of beachfront in Gardens Bay, with
              344 rooms and suites, three private beaches, seven restaurants and a flagship
              conference center.
            </p>
          </div>
          <img
            src={hero}
            alt="Resort grounds"
            loading="lazy"
            className="w-full h-[560px] object-cover shadow-luxury"
          />
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="eyebrow">Our Values</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">What we stand for</h2>
            <div className="gold-divider mx-auto my-6" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-background p-8">
                <Icon className="h-9 w-9 text-gold" strokeWidth={1.2} />
                <h3 className="font-display text-xl mt-5 text-ocean-deep">{title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-ocean-deep">
          Begin your story with us
        </h2>
        <div className="gold-divider mx-auto my-6" />
        <Link
          to="/booking"
          className="inline-block mt-4 px-10 py-4 bg-gold text-ocean-deep text-xs uppercase tracking-[0.22em] hover:bg-ocean-deep hover:text-white transition-colors"
        >
          Book Your Stay
        </Link>
      </section>
    </PageShell>
  );
}
