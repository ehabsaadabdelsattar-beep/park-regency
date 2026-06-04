import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { Award, Waves, Compass, Fish, GraduationCap, ShieldCheck } from "lucide-react";
import diving from "@/assets/diving.jpg";

export const Route = createFileRoute("/dive-center")({
  head: () => ({
    meta: [
      { title: "Dive Center — Park Regency Sharm El Sheikh" },
      {
        name: "description",
        content:
          "PADI 5-Star dive center with daily trips to Ras Mohammed, Tiran Island and the SS Thistlegorm wreck.",
      },
      { property: "og:title", content: "Park Regency Dive Center" },
      {
        property: "og:description",
        content: "Discover the legendary reefs of the Red Sea with PADI experts.",
      },
    ],
  }),
  component: DivePage,
});

const courses = [
  {
    title: "Discover Scuba",
    level: "Beginner",
    duration: "Half day",
    price: "85",
    text: "Try diving in the safety of our private bay with a PADI instructor.",
  },
  {
    title: "Open Water Course",
    level: "Certification",
    duration: "4 days",
    price: "420",
    text: "Become a certified diver with theory, pool sessions and four open-water dives.",
  },
  {
    title: "Advanced Open Water",
    level: "Advanced",
    duration: "2 days",
    price: "320",
    text: "Expand your skills with deep, navigation and three specialty dives.",
  },
  {
    title: "Rescue Diver",
    level: "Pro path",
    duration: "3 days",
    price: "390",
    text: "Prepare for any underwater scenario with rescue scenarios and emergency planning.",
  },
];

const sites = [
  {
    name: "Ras Mohammed",
    text: "Egypt's first national park — sheer walls, gardens of soft coral.",
  },
  {
    name: "Tiran Island",
    text: "Four legendary reefs in the Strait of Tiran teeming with reef sharks.",
  },
  {
    name: "SS Thistlegorm",
    text: "WWII British wreck — one of the most famous dive sites in the world.",
  },
  {
    name: "Shark & Yolanda Reef",
    text: "Cargo of toilets and turtles on a single dive — surreal and unforgettable.",
  },
];

function DivePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Dive Center"
        title="Beneath the surface, another world"
        subtitle="A PADI 5-Star Dive Center on the doorstep of the world's finest reefs."
        image={diving}
      />

      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-px bg-border max-w-5xl mx-auto">
          {[
            { icon: Award, title: "PADI 5-Star" },
            { icon: ShieldCheck, title: "Safety First" },
            { icon: GraduationCap, title: "Multilingual Instructors" },
          ].map(({ icon: Icon, title }) => (
            <div key={title} className="bg-background p-8 text-center">
              <Icon className="h-9 w-9 text-gold mx-auto" strokeWidth={1.2} />
              <div className="font-display text-lg text-ocean-deep mt-4">{title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow">Courses</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">From first breath to pro</h2>
            <div className="gold-divider mx-auto my-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {courses.map((c) => (
              <article key={c.title} className="bg-background p-8 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{c.level}</span>
                  <span className="text-xs text-muted-foreground">{c.duration}</span>
                </div>
                <h3 className="font-display text-2xl text-ocean-deep mt-3">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{c.text}</p>
                <div className="mt-6 flex items-end justify-between pt-5 border-t border-border">
                  <div className="font-display text-2xl text-ocean-deep">${c.price}</div>
                  <button className="text-xs uppercase tracking-[0.2em] text-gold hover:text-ocean-deep">
                    Enquire →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="eyebrow">Dive Sites</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">The legends of the Red Sea</h2>
            <div className="gold-divider my-6" />
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Daily dive trips depart from our private marina. Equipment, transfers and a
              fresh-cooked lunch on the boat included.
            </p>
            <ul className="space-y-5">
              {sites.map((s) => (
                <li key={s.name} className="flex gap-4">
                  <Fish className="h-5 w-5 text-gold shrink-0 mt-1" />
                  <div>
                    <div className="font-display text-lg text-ocean-deep">{s.name}</div>
                    <div className="text-sm text-muted-foreground mt-1">{s.text}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={diving}
            alt="Diving in the Red Sea"
            loading="lazy"
            className="w-full h-[560px] object-cover shadow-luxury"
          />
        </div>
      </section>
    </PageShell>
  );
}
