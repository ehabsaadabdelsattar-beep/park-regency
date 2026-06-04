import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import welcome from "@/assets/welcome.jpg";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Park Regency Sharm El Sheikh" },
      {
        name: "description",
        content:
          "Answers to the most common questions about your stay — check-in, transfers, kids, pets, Wi-Fi and parking.",
      },
      { property: "og:title", content: "Frequently Asked Questions" },
      { property: "og:description", content: "Plan your stay with confidence." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  {
    cat: "Arrival & Departure",
    items: [
      {
        q: "What are your check-in and check-out times?",
        a: "Check-in from 14:00, check-out by 12:00. Early check-in and late check-out are available subject to occupancy and may be complimentary for Regency Club guests.",
      },
      {
        q: "Do you offer airport transfers?",
        a: "Yes — private chauffeur transfers from Sharm El Sheikh International Airport (SSH) can be arranged for $45 per car (one-way). Please request 48 hours in advance.",
      },
    ],
  },
  {
    cat: "Families & Pets",
    items: [
      {
        q: "What is your kids policy?",
        a: "Children of all ages are welcome. Kids under 6 stay free in their parents' room; ages 6–12 receive a 50% discount. A complimentary kids' club operates daily for ages 4–12.",
      },
      {
        q: "Are pets allowed?",
        a: "We are not able to accommodate pets at the resort, with the exception of registered service animals.",
      },
    ],
  },
  {
    cat: "On Property",
    items: [
      {
        q: "Is Wi-Fi included?",
        a: "Yes — complimentary high-speed Wi-Fi is available throughout the resort.",
      },
      {
        q: "Is parking available?",
        a: "Yes — complimentary self-parking and valet parking are available for all guests.",
      },
      {
        q: "Do you have currency exchange?",
        a: "Yes, our front desk offers exchange for major currencies. We also accept USD, EUR, GBP, EGP and SAR.",
      },
    ],
  },
  {
    cat: "Reservations",
    items: [
      {
        q: "What is your cancellation policy?",
        a: "Cancellations made at least 7 days prior to arrival are fully refundable. Non-refundable rates are clearly marked at the time of booking.",
      },
      {
        q: "Can I modify my reservation?",
        a: "Yes, reservations can be modified up to 7 days before arrival. Please contact our reservations team for changes.",
      },
    ],
  },
];

function FAQPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions"
        subtitle="Everything you need to know before your stay."
        image={welcome}
        height="sm"
      />

      <section className="py-20 container mx-auto px-6 max-w-4xl">
        {faqs.map((group) => (
          <div key={group.cat} className="mb-12">
            <h2 className="font-display text-2xl text-ocean-deep mb-6">{group.cat}</h2>
            <div className="divide-y divide-border border-y border-border">
              {group.items.map((item) => (
                <FAQItem key={item.q} {...item} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </PageShell>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left py-5 gap-6 hover:text-gold transition-colors"
      >
        <span className="font-medium text-foreground">{q}</span>
        <ChevronDown
          className={`h-5 w-5 text-gold shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="pb-6 text-muted-foreground leading-relaxed">{a}</p>}
    </div>
  );
}
