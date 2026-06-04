import { useState, useEffect } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Calendar, Users, Tag } from "lucide-react";
import { useTranslation } from "react-i18next";

export function BookingWidget() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);

  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [promo, setPromo] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Make widget sticky after scrolling past hero height (approx 500px)
      setIsSticky(window.scrollY > 450);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingParams = {
      arrival,
      departure,
      adults: parseInt(adults),
      children: parseInt(children),
      promo,
    };
    try {
      localStorage.setItem("pr-pending-booking", JSON.stringify(bookingParams));
    } catch (err) {
      console.error(err);
    }
    navigate({ to: "/booking" });
  };

  return (
    <section
      id="booking-widget"
      className={`z-40 transition-all duration-300 ${
        isSticky
          ? "fixed top-16 md:top-20 inset-x-0 w-full px-0 shadow-lg animate-in slide-in-from-top duration-500"
          : "relative -mt-16 md:-mt-20 px-6"
      }`}
    >
      <div
        className={`container mx-auto max-w-6xl bg-card border border-border shadow-luxury transition-all duration-300 ${isSticky ? "rounded-none max-w-full border-x-0" : "rounded-sm"}`}
      >
        <form
          onSubmit={handleCheckAvailability}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border"
        >
          <Field label={t("booking.arrival")} icon={<Calendar className="h-4 w-4" />}>
            <input
              type="date"
              required
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              className="w-full bg-transparent outline-none text-sm text-foreground cursor-pointer"
            />
          </Field>
          <Field label={t("booking.departure")} icon={<Calendar className="h-4 w-4" />}>
            <input
              type="date"
              required
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              className="w-full bg-transparent outline-none text-sm text-foreground cursor-pointer"
            />
          </Field>
          <Field label={t("booking.adults")} icon={<Users className="h-4 w-4" />}>
            <select
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className="w-full bg-transparent outline-none text-sm text-foreground cursor-pointer"
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>
                  {n} {t("booking.adult")}
                  {n > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t("booking.children")} icon={<Users className="h-4 w-4" />}>
            <select
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              className="w-full bg-transparent outline-none text-sm text-foreground cursor-pointer"
            >
              {[0, 1, 2, 3].map((n) => (
                <option key={n} value={n}>
                  {n} {t("booking.child")}
                  {n !== 1 ? "ren" : ""}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t("booking.promoCode", "Promo Code")} icon={<Tag className="h-4 w-4" />}>
            <input
              type="text"
              placeholder="e.g. LUXURY20"
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
              className="w-full bg-transparent outline-none text-sm text-foreground uppercase placeholder-muted-foreground/60"
            />
          </Field>
          <button
            type="submit"
            className="bg-ocean-deep text-white text-xs uppercase tracking-[0.22em] font-medium px-6 py-6 hover:bg-gold hover:text-ocean-deep transition-colors flex items-center justify-center text-center cursor-pointer col-span-2 md:col-span-1"
          >
            {t("booking.checkAvailability")}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="bg-card p-4 md:p-5 flex flex-col gap-1.5 cursor-pointer hover:bg-secondary/50 transition-colors">
      <span className="eyebrow flex items-center gap-2">
        {icon}
        {label}
      </span>
      {children}
    </label>
  );
}
