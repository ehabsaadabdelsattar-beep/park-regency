import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { useState } from "react";
import { Users, Maximize2, Mic, Wifi, Calendar, CheckCircle } from "lucide-react";
import welcome from "@/assets/welcome.jpg";
import pool from "@/assets/pool.jpg";

export const Route = createFileRoute("/meetings")({
  head: () => ({
    meta: [
      { title: "Meetings & Events — Park Regency Sharm El Sheikh" },
      {
        name: "description",
        content:
          "Flagship conference center hosting up to 700 guests across 8 venues including a 1,200 m² grand ballroom.",
      },
      { property: "og:title", content: "Meetings & Events" },
      { property: "og:description", content: "Where ambition meets occasion." },
    ],
  }),
  component: MeetingsPage,
});

const venues = [
  { name: "Grand Ballroom", size: "1,200 m²", capacity: "700", style: "Banquet / Theatre" },
  { name: "Royal Hall", size: "650 m²", capacity: "400", style: "Conference" },
  { name: "Sinai Hall", size: "320 m²", capacity: "220", style: "U-Shape / Boardroom" },
  { name: "Tiran Room", size: "180 m²", capacity: "120", style: "Classroom" },
  { name: "Library Boardroom", size: "60 m²", capacity: "20", style: "Executive Board" },
  { name: "Beach Pavilion", size: "Open Air", capacity: "300", style: "Cocktail / Gala" },
];

function MeetingsPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("50");
  const [requirements, setRequirements] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitProposal = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Meetings & Events"
        title="Where ambition meets occasion"
        subtitle="Eight venues, one flagship conference center, infinite possibility."
        image={welcome}
      />

      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {[
            ["700+", "Guests"],
            ["8", "Venues"],
            ["1,200m²", "Grand Ballroom"],
            ["4K", "AV Production"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="font-display text-4xl text-gold">{n}</div>
              <div className="eyebrow mt-2 text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <img
            src={pool}
            alt="Conference space"
            loading="lazy"
            className="w-full h-[460px] object-cover shadow-luxury"
          />
          <div>
            <span className="eyebrow">Capabilities</span>
            <h2 className="font-display text-3xl md:text-4xl mt-3 text-ocean-deep">
              Production-grade, hospitality-led
            </h2>
            <div className="gold-divider my-6" />
            <ul className="space-y-4 text-sm text-muted-foreground">
              {[
                { icon: Mic, label: "Full AV, lighting and live-stream production" },
                { icon: Wifi, label: "Dedicated 1 Gbps fibre for events" },
                { icon: Users, label: "On-site event managers and concierges" },
                { icon: Maximize2, label: "Modular venues — break-outs to 700-person plenaries" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex gap-3">
                  <Icon className="h-5 w-5 text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* VENUE CAPACITY TABLE */}
        <h2 className="font-display text-3xl text-center text-ocean-deep mb-8">
          Capacity Configuration
        </h2>
        <div className="overflow-x-auto border border-border mb-24 max-w-5xl mx-auto shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-ocean-deep text-white text-xs uppercase tracking-[0.18em] text-left">
                <th className="py-4 px-6 font-medium">Venue</th>
                <th className="py-4 px-6 font-medium">Size</th>
                <th className="py-4 px-6 font-medium">Capacity</th>
                <th className="py-4 px-6 font-medium">Style</th>
              </tr>
            </thead>
            <tbody>
              {venues.map((v, i) => (
                <tr
                  key={v.name}
                  className={`border-b border-border text-sm ${i % 2 ? "bg-secondary/30" : ""}`}
                >
                  <td className="py-4 px-6 font-display text-ocean-deep font-semibold">{v.name}</td>
                  <td className="py-4 px-6 text-muted-foreground">{v.size}</td>
                  <td className="py-4 px-6 text-muted-foreground">{v.capacity} Guests</td>
                  <td className="py-4 px-6 text-muted-foreground">{v.style}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* LEAD GENERATION FORM */}
        <div
          id="proposal-form"
          className="max-w-3xl mx-auto bg-card border border-border p-8 md:p-12 shadow-luxury scroll-mt-24"
        >
          {isSubmitted ? (
            <div className="text-center py-10 space-y-6">
              <CheckCircle className="h-16 w-16 text-gold mx-auto" />
              <h3 className="font-display text-3xl text-ocean-deep">Proposal Request Received</h3>
              <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                Thank you for contacting Park Regency. Our Senior Events Planner will review your
                requirements and send a customized proposal package within the next 24 business
                hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 border border-border text-xs uppercase tracking-widest font-semibold hover:border-gold hover:text-gold transition-all cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <div>
              <div className="text-center max-w-xl mx-auto mb-10">
                <span className="eyebrow">Request Proposal</span>
                <h3 className="font-display text-2xl md:text-3xl text-ocean-deep mt-2">
                  Plan Your Event
                </h3>
                <div className="gold-divider mx-auto my-4" />
                <p className="text-xs text-muted-foreground">
                  Provide your gathering details and our event planners will design a bespoke
                  package for you.
                </p>
              </div>

              <form onSubmit={handleSubmitProposal} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold"
                      placeholder="Company Name (Optional)"
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
                      placeholder="email@company.com"
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      Event Date
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                      Estimated Guest Count
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold cursor-pointer"
                    >
                      <option value="10-30">10 – 30 Guests</option>
                      <option value="30-100">30 – 100 Guests</option>
                      <option value="100-300">100 – 300 Guests</option>
                      <option value="300-700">300 – 700 Guests</option>
                      <option value="700+">700+ Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                    Event Details & Technical Requirements
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    className="w-full bg-secondary border border-border p-3 text-xs text-foreground outline-none focus:border-gold placeholder-muted-foreground/60"
                    placeholder="Describe your layout requirements, catering needs, audio-visual specs, and lodging configurations."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-ocean-deep hover:bg-gold text-white hover:text-ocean-deep text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Submit Proposal Request
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
