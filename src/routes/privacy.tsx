import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import welcome from "@/assets/welcome.jpg";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information"
        image={welcome}
        height="sm"
      />
      <section className="py-20 container mx-auto px-6 max-w-4xl">
        <div className="prose prose-sm max-w-none space-y-8 text-foreground">
          <p className="text-muted-foreground text-sm">
            <strong>Last updated:</strong> June 2025
          </p>

          {[
            {
              title: "1. Information We Collect",
              body: `We collect information you provide directly, including name, email address, phone number, nationality, and payment details when making a reservation. We also collect technical data such as IP address, browser type, and pages visited to improve our services.`,
            },
            {
              title: "2. How We Use Your Information",
              body: `We use your information to: process and confirm reservations; communicate updates about your booking; personalise your stay experience; comply with legal obligations; and send marketing communications (with your consent).`,
            },
            {
              title: "3. Sharing of Information",
              body: `We do not sell your personal data. We may share it with trusted partners (payment processors, email service providers) solely to fulfil your reservation. All partners are bound by strict confidentiality agreements.`,
            },
            {
              title: "4. Data Security",
              body: `Park Regency implements industry-standard SSL encryption and secure data storage practices. Card details entered during booking are processed through PCI-DSS compliant payment gateways and are never stored on our servers.`,
            },
            {
              title: "5. Cookies",
              body: `We use essential cookies to remember your language and currency preferences. No third-party advertising cookies are used. You may disable cookies in your browser settings, though this may affect functionality.`,
            },
            {
              title: "6. Your Rights",
              body: `You have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at privacy@parkregency.com. We will respond within 30 days.`,
            },
            {
              title: "7. Data Retention",
              body: `Booking data is retained for 7 years to comply with Egyptian tax and hospitality regulations. Marketing data is retained until you withdraw consent.`,
            },
            {
              title: "8. Contact",
              body: `For privacy-related questions, please contact our Data Protection Officer at: privacy@parkregency.com or write to: Park Regency Sharm El Sheikh Resort, Gardens Bay, Naama Bay, Sharm El Sheikh, Egypt.`,
            },
          ].map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl text-ocean-deep font-semibold mb-3">
                {s.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}

          <div className="pt-8 border-t border-border flex flex-wrap gap-4">
            <Link to="/terms" className="text-gold hover:underline text-sm">
              Terms &amp; Conditions →
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
