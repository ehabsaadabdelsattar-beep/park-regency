import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Reservation policies, cancellation rules, and guest conduct guidelines"
        image={hero}
        height="sm"
      />
      <section className="py-20 container mx-auto px-6 max-w-4xl">
        <div className="space-y-8 text-foreground">
          <p className="text-muted-foreground text-sm">
            <strong>Effective date:</strong> June 2025
          </p>

          {[
            {
              title: "1. Reservations",
              body: `All reservations are subject to availability and are not confirmed until you receive a written confirmation from Park Regency Sharm El Sheikh Resort. A valid credit card is required to guarantee all bookings.`,
            },
            {
              title: "2. Check-In & Check-Out",
              body: `Standard check-in time is 15:00 (3:00 PM). Check-out is at 12:00 noon. Early check-in and late check-out are subject to availability and may incur additional charges. Guests must present valid government-issued photo ID at check-in.`,
            },
            {
              title: "3. Cancellation Policy",
              body: `• Bed & Breakfast / Flexible Rate: Free cancellation up to 7 days before arrival. Cancellations within 7 days are charged the full first night.\n• Non-Refundable Rate: No cancellation or modification permitted. The full stay is charged immediately upon booking.\n• All Inclusive: Free cancellation up to 14 days before arrival. Cancellations within 14 days forfeit 50% of the total stay value.`,
            },
            {
              title: "4. Payment",
              body: `We accept Visa, Mastercard, and American Express. All prices are quoted in USD and converted at the prevailing rate. Taxes (14% Egyptian VAT) and service charge (10%) are applied at checkout. The resort does not store cardholder data.`,
            },
            {
              title: "5. Guest Conduct",
              body: `Guests are expected to respect the resort environment, fellow guests, and staff. The resort reserves the right to request departure without refund in cases of disruptive, illegal, or disrespectful behaviour. Damage to property will be charged to the registered card.`,
            },
            {
              title: "6. Pool & Beach Rules",
              body: `For safety, the use of glass containers in pool and beach areas is strictly prohibited. Children under 12 must be accompanied by an adult at all times in pool areas. Diving and snorkelling at the reef must be conducted through the resort's licensed PADI Dive Centre.`,
            },
            {
              title: "7. Liability",
              body: `Park Regency Sharm El Sheikh Resort is not liable for loss or damage to personal property, unless resulting from gross negligence on the part of the resort. Guests use all facilities at their own risk.`,
            },
            {
              title: "8. Governing Law",
              body: `These terms are governed by the laws of the Arab Republic of Egypt. Any disputes shall be subject to the exclusive jurisdiction of the courts of South Sinai Governorate, Egypt.`,
            },
            {
              title: "9. Modifications",
              body: `The resort reserves the right to amend these terms at any time. The most current version will always be published on our website. Continued use of our services constitutes acceptance of the updated terms.`,
            },
          ].map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl text-ocean-deep font-semibold mb-3">
                {s.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {s.body}
              </p>
            </div>
          ))}

          <div className="pt-8 border-t border-border flex flex-wrap gap-4">
            <Link to="/privacy" className="text-gold hover:underline text-sm">
              Privacy Policy →
            </Link>
            <Link to="/contact" className="text-gold hover:underline text-sm">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
