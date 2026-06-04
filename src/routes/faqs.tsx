import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import welcome from "@/assets/welcome.jpg";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: i18n.t("faqs.title") },
      {
        name: "description",
        content: i18n.t("faqs.metaDesc"),
      },
      { property: "og:title", content: i18n.t("faqs.ogTitle") },
      { property: "og:description", content: i18n.t("faqs.ogDesc") },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  const { t } = useTranslation();

  const faqs = [
    {
      cat: t("faqs.cats.arrival"),
      items: [
        { q: t("faqs.items.q1"), a: t("faqs.items.a1") },
        { q: t("faqs.items.q2"), a: t("faqs.items.a2") },
      ],
    },
    {
      cat: t("faqs.cats.families"),
      items: [
        { q: t("faqs.items.q3"), a: t("faqs.items.a3") },
        { q: t("faqs.items.q4"), a: t("faqs.items.a4") },
      ],
    },
    {
      cat: t("faqs.cats.property"),
      items: [
        { q: t("faqs.items.q5"), a: t("faqs.items.a5") },
        { q: t("faqs.items.q6"), a: t("faqs.items.a6") },
        { q: t("faqs.items.q7"), a: t("faqs.items.a7") },
      ],
    },
    {
      cat: t("faqs.cats.reservations"),
      items: [
        { q: t("faqs.items.q8"), a: t("faqs.items.a8") },
        { q: t("faqs.items.q9"), a: t("faqs.items.a9") },
      ],
    },
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow={t("faqs.heroEyebrow")}
        title={t("faqs.heroTitle")}
        subtitle={t("faqs.heroSubtitle")}
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
