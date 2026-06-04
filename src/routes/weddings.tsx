import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { useState } from "react";
import { Heart, Flower2, Camera, Music, Sparkles, Cake, CheckCircle } from "lucide-react";
import wedding from "@/assets/wedding.jpg";

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      { title: "Weddings — Park Regency Sharm El Sheikh" },
      {
        name: "description",
        content:
          "Beachfront ceremonies, ballroom receptions and intimate elopements crafted by our wedding atelier.",
      },
      { property: "og:title", content: "Weddings at Park Regency" },
      { property: "og:description", content: "Say 'I do' by the Red Sea." },
    ],
  }),
  component: WeddingsPage,
});

const packages = [
  {
    name: "The Elopement",
    guests: "2–10",
    price: "2,400",
    text: "An intimate beach ceremony, photographer, two-tier cake and a private candlelit dinner.",
  },
  {
    name: "The Classic",
    guests: "30–80",
    price: "8,900",
    text: "Beach ceremony, three-course reception, floral arch, live music and a dedicated planner.",
  },
  {
    name: "The Grand",
    guests: "100–250",
    price: "24,000",
    text: "Ballroom or beach venue, multi-course tasting menu, premium bar, fireworks and full production.",
  },
];

const services = [
  { icon: Heart, label: "Dedicated Planner" },
  { icon: Flower2, label: "Floral Design" },
  { icon: Camera, label: "Photo & Video" },
  { icon: Music, label: "Live Entertainment" },
  { icon: Cake, label: "Patisserie" },
  { icon: Sparkles, label: "Spa & Bridal Suite" },
];

function WeddingsPage() {
  const [partner1, setPartner1] = useState("");
  const [partner2, setPartner2] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [weddingDate, setWeddingDate] = useState("");
  const [guestsCount, setGuestsCount] = useState("50-100");
  const [pkgSelection, setPkgSelection] = useState("The Classic");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Weddings & Celebrations"
        title="Say 'I do' by the Red Sea"
        subtitle="From intimate elopements to grand celebrations, every detail composed by our atelier."
        image={wedding}
      />

      {/* PACKAGES */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="eyebrow">Luxury Packages</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3 text-ocean-deep">
            Curated Bridal Experiences
          </h2>
          <div className="gold-divider mx-auto my-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((p) => (
            <article
              key={p.name}
              className="bg-card border border-border shadow-card p-8 text-center flex flex-col justify-between hover:border-gold/50 transition-colors"
            >
              <div>
                <span className="eyebrow text-gold">{p.guests} Guests</span>
                <h3 className="font-display text-2xl text-ocean-deep mt-3">{p.name}</h3>
                <div className="gold-divider mx-auto my-5" />
                <p className="text-sm text-muted-foreground leading-relaxed min-h-[90px]">
                  {p.text}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="eyebrow text-[9px]">From</div>
                <div className="font-display text-3xl text-ocean-deep mt-1">${p.price}</div>
                <a
                  href="#inquiry-form"
                  onClick={() => setPkgSelection(p.name)}
                  className="mt-5 block w-full py-2.5 border border-gold hover:bg-gold hover:text-ocean-deep text-[10px] uppercase font-bold tracking-widest text-gold transition-all"
                >
                  Inquire Package
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-secondary/50 border-t border-b border-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="eyebrow">Atelier Services</span>
            <h2 className="font-display text-3xl md:text-4xl mt-3 text-ocean-deep">
              Composed in every detail
            </h2>
            <div className="gold-divider mx-auto my-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border max-w-5xl mx-auto">
            {services.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-background p-8 text-center hover:bg-secondary/20 transition-all"
              >
                <Icon className="h-9 w-9 text-gold mx-auto" strokeWidth={1.2} />
                <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-ocean-deep mt-4">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#inquiry-form"
              className="inline-block px-10 py-4 bg-gold text-ocean-deep text-xs uppercase tracking-[0.22em] font-bold hover:bg-ocean-deep hover:text-white transition-all shadow-sm"
            >
              Plan Your Wedding
            </a>
          </div>
        </div>
      </section>

      {/* WEDDING INQUIRY FORM */}
      <section className="py-24 container mx-auto px-6">
        <div
          id="inquiry-form"
          className="max-w-3xl mx-auto bg-card border border-border p-8 md:p-12 shadow-luxury scroll-mt-24"
        >
          {isSubmitted ? (
            <div className="text-center py-10 space-y-6">
              <CheckCircle className="h-16 w-16 text-gold mx-auto" />
              <h3 className="font-display text-3xl text-ocean-deep">Congratulations!</h3>
              <p className="text-muted-foreground max-w-md mx-auto leading-relaxed text-sm">
                Your wedding inquiry has been received by the Park Regency Wedding Atelier. Our Lead
                Wedding Coordinator will contact you within 24 hours to schedule a private
                consultation.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 border border-border text-xs uppercase tracking-widest font-semibold hover:border-gold hover:text-gold transition-all cursor-pointer"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <div>
              <div className="text-center max-w-xl mx-auto mb-10">
                <span className="eyebrow">Wedding Atelier</span>
                <h3 className="font-display text-2xl md:text-3xl text-ocean-deep mt-2">
                  Bespoke Inquiry
                </h3>
                <div className="gold-divider mx-auto my-4" />
                <p className="text-xs text-muted-foreground">
                  Share the details of your dream wedding. Let us compose your perfect day.
                </p>
              </div>

              <form onSubmit={handleInquirySubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      Partner 1 Name
                    </label>
                    <input
                      type="text"
                      required
                      value={partner1}
                      onChange={(e) => setPartner1(e.target.value)}
                      className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      Partner 2 Name
                    </label>
                    <input
                      type="text"
                      required
                      value={partner2}
                      onChange={(e) => setPartner2(e.target.value)}
                      className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold"
                      placeholder="Full Name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={weddingDate}
                      onChange={(e) => setWeddingDate(e.target.value)}
                      className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      Guests Count
                    </label>
                    <select
                      value={guestsCount}
                      onChange={(e) => setGuestsCount(e.target.value)}
                      className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold cursor-pointer"
                    >
                      <option value="2-10">2 – 10 Guests (Elopement)</option>
                      <option value="10-50">10 – 50 Guests</option>
                      <option value="50-100">50 – 100 Guests</option>
                      <option value="100-250">100 – 250 Guests</option>
                      <option value="250+">250+ Guests</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      Desired Experience
                    </label>
                    <select
                      value={pkgSelection}
                      onChange={(e) => setPkgSelection(e.target.value)}
                      className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold cursor-pointer"
                    >
                      <option value="The Elopement">The Elopement Package</option>
                      <option value="The Classic">The Classic Package</option>
                      <option value="The Grand">The Grand Package</option>
                      <option value="Bespoke Atelier">Bespoke / Custom Atelier</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                    Your Wedding Vision
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold placeholder-muted-foreground/60"
                    placeholder="Tell us about your theme, floral inspirations, color palette, catering desires, and whether you require guest lodging accommodations."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-ocean-deep hover:bg-gold text-white hover:text-ocean-deep text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Send Atelier Inquiry
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
