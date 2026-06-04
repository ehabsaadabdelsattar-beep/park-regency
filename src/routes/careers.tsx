import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import welcome from "@/assets/welcome.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Park Regency Sharm El Sheikh" },
      {
        name: "description",
        content:
          "Join the Park Regency family. Open positions in hospitality, F&B, spa and management.",
      },
      { property: "og:title", content: "Careers at Park Regency" },
      {
        property: "og:description",
        content: "Build your career with one of the Red Sea's leading luxury resorts.",
      },
    ],
  }),
  component: CareersPage,
});

const jobs = [
  {
    title: "Front Office Manager",
    dept: "Rooms Division",
    type: "Full-time",
    location: "Sharm El Sheikh",
  },
  {
    title: "Sous Chef — Sala Thai",
    dept: "Culinary",
    type: "Full-time",
    location: "Sharm El Sheikh",
  },
  {
    title: "Spa Therapist",
    dept: "Spa & Wellness",
    type: "Full-time",
    location: "Sharm El Sheikh",
  },
  {
    title: "Dive Instructor (PADI)",
    dept: "Recreation",
    type: "Seasonal",
    location: "Sharm El Sheikh",
  },
  { title: "Sommelier", dept: "Food & Beverage", type: "Full-time", location: "Sharm El Sheikh" },
  {
    title: "Wedding Planner",
    dept: "Sales & Events",
    type: "Full-time",
    location: "Sharm El Sheikh",
  },
];

function CareersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Careers"
        title="Build your story with us"
        subtitle="A career at Park Regency is a craft — refined every day, in service of the extraordinary."
        image={welcome}
      />

      <section className="py-20 container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <span className="eyebrow">Open Positions</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3">Now hiring</h2>
          <div className="gold-divider mx-auto my-6" />
        </div>
        <div className="divide-y divide-border border-y border-border">
          {jobs.map((j) => (
            <a
              key={j.title}
              href="#"
              className="group flex flex-col md:flex-row md:items-center justify-between py-6 hover:bg-secondary/40 px-4 -mx-4 transition-colors gap-4"
            >
              <div>
                <h3 className="font-display text-xl text-ocean-deep group-hover:text-gold">
                  {j.title}
                </h3>
                <div className="flex flex-wrap gap-4 mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-3 w-3 text-gold" />
                    {j.dept}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-gold" />
                    {j.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-gold" />
                    {j.location}
                  </span>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-gold group-hover:translate-x-1 transition-transform" />
            </a>
          ))}
        </div>

        <div className="mt-16 bg-secondary p-10 md:p-14 text-center">
          <h3 className="font-display text-2xl md:text-3xl text-ocean-deep">
            Don't see your role?
          </h3>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            We are always interested in meeting exceptional talent. Send your CV to our People &
            Culture team.
          </p>
          <a
            href="mailto:careers@parkregency.com"
            className="inline-block mt-6 px-8 py-3 bg-ocean-deep text-white text-xs uppercase tracking-[0.22em] hover:bg-gold hover:text-ocean-deep transition-colors"
          >
            careers@parkregency.com
          </a>
        </div>
      </section>
    </PageShell>
  );
}
