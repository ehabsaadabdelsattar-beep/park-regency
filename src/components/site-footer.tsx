import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone, Mail, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

export function SiteFooter() {
  const { t } = useTranslation();

  const explore = [
    { label: t("home.accommodation"), to: "/accommodation" },
    { label: t("nav.dining"), to: "/dining" },
    { label: t("nav.spa"), to: "/spa" },
    { label: t("nav.weddings"), to: "/weddings" },
    { label: t("nav.meetings"), to: "/meetings" },
    { label: t("nav.gallery"), to: "/gallery" },
  ];

  const info = [
    { label: t("nav.offers"), to: "/offers" },
    { label: t("nav.regencyClub"), to: "/regency-club" },
    { label: t("nav.reviews"), to: "/reviews" },
    { label: t("nav.virtualTour"), to: "/virtual-tour" },
    { label: t("nav.faqs"), to: "/faqs" },
    { label: t("nav.careers"), to: "/careers" },
  ];

  return (
    <footer className="bg-ocean-deep text-white/80">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-display text-2xl text-white mb-4">
                Park <span className="text-gold">Regency</span>
              </h3>
              <p className="text-sm leading-relaxed mb-4 max-w-sm">{t("footer.tagline")}</p>
              <div className="flex gap-4 items-center">
                <a
                  href="https://www.tripadvisor.com/Hotel_Review-g297555-d12345-Reviews-Park_Regency_Sharm_El_Sheikh_Resort.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold hover:text-white"
                >
                  <Star className="h-4 w-4 fill-current" /> {t("footer.rating")}
                </a>
              </div>
            </div>

            <div className="max-w-sm">
              <h4 className="eyebrow text-white mb-3">{t("footer.newsletter", "Newsletter")}</h4>
              <p className="text-xs text-white/60 mb-3">
                {t(
                  "footer.newsletterDesc",
                  "Subscribe to receive exclusive offers and seasonal news.",
                )}
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for subscribing!");
                }}
                className="flex"
              >
                <input
                  type="email"
                  required
                  placeholder={t("footer.emailPlaceholder", "Your email address")}
                  className="bg-white/10 text-white placeholder-white/40 border border-white/10 px-4 py-2.5 text-xs outline-none focus:border-gold flex-1"
                />
                <button
                  type="submit"
                  className="bg-gold text-ocean-deep px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] hover:bg-white hover:text-ocean-deep transition-colors"
                >
                  {t("footer.subscribe", "Subscribe")}
                </button>
              </form>
            </div>

            <div className="pt-2">
              <h4 className="eyebrow text-white mb-3">{t("footer.awards", "Recognition")}</h4>
              <div className="flex flex-wrap gap-4 text-[10px] uppercase tracking-[0.15em] text-white/50">
                <span className="border border-white/10 px-2.5 py-1">Condé Nast Gold List</span>
                <span className="border border-white/10 px-2.5 py-1">Luxury Hotel Awards</span>
                <span className="border border-white/10 px-2.5 py-1">PADI 5-Star Resort</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="eyebrow mb-5">{t("footer.explore")}</h4>
            <ul className="space-y-3 text-sm">
              {explore.map((x) => (
                <li key={x.to}>
                  <Link to={x.to} className="hover:text-gold transition-colors">
                    {x.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">{t("footer.information")}</h4>
            <ul className="space-y-3 text-sm">
              {info.map((x) => (
                <li key={x.to}>
                  <Link to={x.to} className="hover:text-gold transition-colors">
                    {x.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">{t("footer.contact")}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=Park+Regency+Sharm+El+Sheikh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  Gardens Bay, Sharm El Sheikh, Egypt
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <a href="tel:+20693600000" className="hover:text-gold" dir="ltr">
                  +20 69 360 0000
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <a href="mailto:reservations@parkregency.com" className="hover:text-gold">
                  reservations@parkregency.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/ParkRegencySharmElSheikh/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/parkregencysharm/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Park Regency Sharm El Sheikh. {t("footer.rights")}
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-gold">
              {t("footer.contact")}
            </Link>
            <a href="#" className="hover:text-gold">
              {t("footer.privacy")}
            </a>
            <a href="#" className="hover:text-gold">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
