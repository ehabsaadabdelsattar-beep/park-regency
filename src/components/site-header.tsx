import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LocaleSwitcher } from "./locale-switcher";
import logoFull from "@/assets/park-regency-logo.svg";

export function SiteHeader() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav: { label: string; to: string; children?: { label: string; to: string }[] }[] = [
    {
      label: t("nav.stay"),
      to: "/accommodation",
      children: [
        { label: t("nav.rooms"), to: "/accommodation" },
        { label: t("nav.suitesVillas", "Suites & Villas"), to: "/suites-villas" },
        { label: t("nav.regencyClub"), to: "/regency-club" },
        { label: t("nav.offers"), to: "/offers" },
      ],
    },
    {
      label: t("nav.experience"),
      to: "/beaches",
      children: [
        { label: t("nav.beaches"), to: "/beaches" },
        { label: t("nav.diveCenter"), to: "/dive-center" },
        { label: t("nav.spa"), to: "/spa" },
        { label: t("nav.facilities", "Facilities & Amenities"), to: "/facilities" },
        { label: t("nav.attractions", "Area Attractions"), to: "/attractions" },
        { label: t("nav.virtualTour"), to: "/virtual-tour" },
      ],
    },
    { label: t("nav.dining"), to: "/dining" },
    {
      label: t("nav.celebrate"),
      to: "/weddings",
      children: [
        { label: t("nav.weddings"), to: "/weddings" },
        { label: t("nav.meetings"), to: "/meetings" },
      ],
    },
    { label: t("nav.gallery"), to: "/gallery" },
    {
      label: t("nav.about"),
      to: "/about",
      children: [
        { label: t("nav.aboutResort"), to: "/about" },
        { label: t("nav.reviews"), to: "/reviews" },
        { label: t("nav.faqs"), to: "/faqs" },
        { label: t("nav.careers"), to: "/careers" },
        { label: t("nav.contact"), to: "/contact" },
      ],
    },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="Park Regency Sharm El Sheikh Resort"
        >
          <img
            src={logoFull}
            alt="Park Regency Sharm El Sheikh Resort"
            className={`h-10 md:h-12 w-auto transition-all ${scrolled ? "" : "brightness-0 invert"}`}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <div key={n.to + n.label} className="relative group">
              <Link
                to={n.to}
                className={`flex items-center gap-1 text-xs uppercase tracking-[0.18em] font-medium hover:text-gold transition-colors ${
                  scrolled ? "text-foreground" : "text-white/90"
                }`}
              >
                {n.label}
                {n.children && <ChevronDown className="h-3 w-3" />}
              </Link>
              {n.children && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-background border border-border shadow-luxury py-3 min-w-[220px]">
                    {n.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-foreground hover:text-gold hover:bg-secondary/60 transition-colors"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className={`hidden md:flex items-center pe-2 me-1 border-e ${scrolled ? "border-border" : "border-white/20"}`}
          >
            <LocaleSwitcher light={!scrolled} />
          </div>
          <Link
            to="/booking"
            className="hidden md:inline-flex items-center px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium bg-gold text-ocean-deep hover:bg-gold/90 transition-colors"
          >
            {t("nav.bookNow")}
          </Link>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className={`lg:hidden ${scrolled ? "text-foreground" : "text-white"}`}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-ocean-deep z-50 flex flex-col p-6 lg:hidden overflow-auto">
          <div className="flex justify-between items-center">
            <img src={logoFull} alt="Park Regency" className="h-10 w-auto brightness-0 invert" />
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-white">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 pb-4 border-b border-white/10">
            <LocaleSwitcher light />
          </div>
          <nav className="flex flex-col gap-2 mt-12">
            {nav.flatMap((n) => [
              <Link
                key={n.to + "-h"}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-white text-lg font-display tracking-wide hover:text-gold py-2 border-b border-white/10"
              >
                {n.label}
              </Link>,
              ...(n.children?.map((c) => (
                <Link
                  key={c.to}
                  to={c.to}
                  onClick={() => setOpen(false)}
                  className="text-white/70 text-sm tracking-wider hover:text-gold ps-4 py-1.5"
                >
                  — {c.label}
                </Link>
              )) ?? []),
            ])}
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="mt-8 px-8 py-4 bg-gold text-ocean-deep text-xs uppercase tracking-[0.2em] text-center"
            >
              {t("nav.bookNow")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
