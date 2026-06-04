import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { Star, ExternalLink } from "lucide-react";
import welcome from "@/assets/welcome.jpg";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Guest Reviews — Park Regency Sharm El Sheikh" },
      {
        name: "description",
        content: "Read authentic reviews from our guests on TripAdvisor, Google and Facebook.",
      },
      { property: "og:title", content: "Guest Reviews" },
      {
        property: "og:description",
        content: "Thousands of guests, one common verdict — luxury done right.",
      },
    ],
  }),
  component: ReviewsPage,
});

const summary = [
  {
    source: "TripAdvisor",
    rating: 4.6,
    count: "3,200+",
    color: "#00AA6C",
    url: "https://www.tripadvisor.com/Hotel_Review-g297555-d12345-Reviews-Park_Regency_Sharm_El_Sheikh_Resort.html",
  },
  {
    source: "Google",
    rating: 4.7,
    count: "1,800+",
    color: "#4285F4",
    url: "https://maps.google.com/?q=Park+Regency+Sharm+El+Sheikh",
  },
  {
    source: "Facebook",
    rating: 4.8,
    count: "2,400+",
    color: "#1877F2",
    url: "https://www.facebook.com/ParkRegencySharmElSheikh/",
  },
];

const reviews = [
  {
    name: "Isabella M.",
    country: "Italy",
    source: "TripAdvisor",
    date: "Aug 2026",
    rating: 5,
    text: "The most magical week of our lives. Every detail, from the butler service to the sunset dinners, was flawless.",
  },
  {
    name: "James R.",
    country: "United Kingdom",
    source: "Google",
    date: "Jul 2026",
    rating: 5,
    text: "A genuine 5-star experience. The Regency Club lounge alone is worth the trip — and the diving was world-class.",
  },
  {
    name: "Hana K.",
    country: "Germany",
    source: "Facebook",
    date: "Jun 2026",
    rating: 5,
    text: "Pure luxury without pretense. The spa rituals were transformative and the service felt deeply personal.",
  },
  {
    name: "Ahmed S.",
    country: "Saudi Arabia",
    source: "TripAdvisor",
    date: "Jun 2026",
    rating: 5,
    text: "Best family vacation we've ever had. The kids loved the pools and we loved the privacy of the Regency Club.",
  },
  {
    name: "Sofia L.",
    country: "Spain",
    source: "Google",
    date: "May 2026",
    rating: 4,
    text: "Beautiful location with stunning views. Sala Thai was a highlight — the food was exceptional.",
  },
  {
    name: "Marcus B.",
    country: "USA",
    source: "TripAdvisor",
    date: "May 2026",
    rating: 5,
    text: "Diving at Park Regency was the trip of a lifetime. The PADI team is world-class and the reefs are unbelievable.",
  },
  {
    name: "Yuki T.",
    country: "Japan",
    source: "Facebook",
    date: "Apr 2026",
    rating: 5,
    text: "Honeymoon paradise. The beach dinner under the stars was straight out of a movie.",
  },
  {
    name: "Olga P.",
    country: "Russia",
    source: "Google",
    date: "Apr 2026",
    rating: 5,
    text: "We've stayed in many 5-star resorts. Park Regency stands out for warmth and detail. We'll be back.",
  },
  {
    name: "François D.",
    country: "France",
    source: "TripAdvisor",
    date: "Mar 2026",
    rating: 5,
    text: "Exceptional cuisine, impeccable service, and the location in Gardens Bay is paradise. Highly recommend.",
  },
];

function ReviewsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Guest Reviews"
        title="Voices of our guests"
        subtitle="Thousands of stays. One consistent verdict."
        image={welcome}
        height="sm"
      />

      <section className="py-16 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {summary.map((s) => (
            <a
              key={s.source}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card shadow-card p-8 text-center group hover:shadow-luxury transition-shadow"
            >
              <div className="font-display text-5xl text-ocean-deep">{s.rating}</div>
              <div className="flex justify-center gap-0.5 my-3 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div className="eyebrow">{s.source}</div>
              <div className="text-sm text-muted-foreground mt-2">{s.count} reviews</div>
              <div className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-gold group-hover:text-ocean-deep">
                Read all <ExternalLink className="h-3 w-3" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <figure key={i} className="bg-background p-8 shadow-card flex flex-col">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="font-display text-lg text-ocean-deep mt-5 leading-snug flex-1">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-6 flex justify-between items-end text-xs">
                  <div>
                    <div className="font-medium text-foreground">{r.name}</div>
                    <div className="text-muted-foreground">{r.country}</div>
                  </div>
                  <div className="text-right text-muted-foreground">
                    <div className="eyebrow text-[10px]">{r.source}</div>
                    <div className="mt-1">{r.date}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
