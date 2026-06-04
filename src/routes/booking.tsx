import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  Bed,
  CreditCard,
  Download,
  Mail,
  Tag,
  Award,
  ShieldAlert,
} from "lucide-react";
import { useCurrency } from "@/contexts/currency-context";

import roomSeaView from "@/assets/room-sea-view.jpg";
import roomSeaFront from "@/assets/room-sea-front.jpg";
import roomSuite from "@/assets/room-suite.jpg";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Your Stay — Park Regency Sharm El Sheikh" },
      {
        name: "description",
        content:
          "Reserve your luxury escape at Park Regency. Real-time availability, best rate guarantee.",
      },
      { property: "og:title", content: "Book Your Stay" },
      { property: "og:description", content: "Five steps to your Red Sea escape." },
    ],
  }),
  component: BookingPage,
});

interface RoomOption {
  id: string;
  img: string;
  nameKey: string;
  size: string;
  viewKey: string;
  occupancyKey: string;
  features: string[];
  priceUsd: number;
}

const roomOptions: RoomOption[] = [
  {
    id: "sv",
    img: roomSeaView,
    nameKey: "home.rooms.seaViewName",
    size: "42 m²",
    viewKey: "Sea View",
    occupancyKey: "home.occupancy2A",
    features: ["Private balcony", "Rain shower", "Nespresso Maker", "Marble bath"],
    priceUsd: 320,
  },
  {
    id: "sf",
    img: roomSeaFront,
    nameKey: "home.rooms.seaFrontName",
    size: "48 m²",
    viewKey: "Direct Sea Front",
    occupancyKey: "home.occupancy2A1C",
    features: ["Beach access", "Soaking tub", "Premium minibar", "Terrace"],
    priceUsd: 420,
  },
  {
    id: "rs",
    img: roomSuite,
    nameKey: "home.rooms.suiteName",
    size: "120 m²",
    viewKey: "Panoramic Sea",
    occupancyKey: "home.occupancy2A2C",
    features: ["Separate living room", "Personal butler", "Private dining", "Club lounge access"],
    priceUsd: 890,
  },
];

interface RatePlan {
  id: string;
  name: string;
  description: string;
  priceModifier: number; // multiplier or flat offset
  isPercentage: boolean;
}

const ratePlans: RatePlan[] = [
  {
    id: "bb",
    name: "Bed & Breakfast",
    description:
      "Includes daily breakfast at The Main. Free cancellation up to 7 days before arrival.",
    priceModifier: 0,
    isPercentage: false,
  },
  {
    id: "flex",
    name: "Flexible Rate",
    description: "Best available rate. Fully refundable up to 48 hours prior to check-in.",
    priceModifier: 20,
    isPercentage: false,
  },
  {
    id: "nr",
    name: "Non Refundable Rate",
    description: "10% off. Advance purchase rate. Non-refundable and non-changeable.",
    priceModifier: -10,
    isPercentage: true,
  },
  {
    id: "ai",
    name: "All Inclusive",
    description:
      "Includes breakfast, lunch, dinner, premium local beverages, and selected activities.",
    priceModifier: 120,
    isPercentage: false,
  },
];

function BookingPage() {
  const { t } = useTranslation();
  const { formatPrice } = useCurrency();

  // Booking Flow Step State (0 to 4)
  const [step, setStep] = useState(0);

  // Form Fields State
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0); // in percent

  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const [selectedRateId, setSelectedRateId] = useState<string>("bb");

  // Guest Details
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nationality, setNationality] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  // Payment Details
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Reservation Number Cache
  const [bookingRef, setBookingRef] = useState("");

  // Load from local storage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("pr-pending-booking");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.arrival) setArrival(parsed.arrival);
        if (parsed.departure) setDeparture(parsed.departure);
        if (parsed.adults) setAdults(parsed.adults);
        if (parsed.children) setChildren(parsed.children);
        if (parsed.promo) {
          setPromoCode(parsed.promo);
          // Apply LUXURY20 immediately if present
          if (parsed.promo.toUpperCase() === "LUXURY20") {
            setPromoApplied(true);
            setPromoDiscount(20);
          }
        }
        if (parsed.roomId) {
          setSelectedRoomId(parsed.roomId);
        }
        localStorage.removeItem("pr-pending-booking");
      }
    } catch (err) {
      console.error(err);
    }

    // Set a random booking ref once
    setBookingRef("PR-" + Math.random().toString(36).slice(2, 8).toUpperCase());
  }, []);

  const steps = [
    t("booking.steps.dates"),
    t("booking.steps.room"),
    t("booking.steps.guest"),
    t("booking.steps.checkout"),
    t("booking.steps.confirmation"),
  ];

  const handleApplyPromo = (e: React.MouseEvent) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === "LUXURY20") {
      setPromoApplied(true);
      setPromoDiscount(20);
    } else {
      alert("Invalid Promo Code. Try entering 'LUXURY20' for a 20% discount.");
      setPromoApplied(false);
      setPromoDiscount(0);
    }
  };

  const nights = (() => {
    if (!arrival || !departure) return 0;
    const a = new Date(arrival).getTime();
    const b = new Date(departure).getTime();
    const diff = Math.round((b - a) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  })();

  const selectedRoom = roomOptions.find((r) => r.id === selectedRoomId);
  const selectedRate = ratePlans.find((r) => r.id === selectedRateId);

  // Price Calculation Logic
  const getPricing = () => {
    if (!selectedRoom || !selectedRate)
      return { subtotal: 0, discount: 0, taxes: 0, fees: 0, total: 0 };

    let basePrice = selectedRoom.priceUsd;

    if (selectedRate.isPercentage) {
      basePrice = basePrice * (1 + selectedRate.priceModifier / 100);
    } else {
      basePrice = basePrice + selectedRate.priceModifier;
    }

    const calculatedNights = nights > 0 ? nights : 1;
    const subtotal = basePrice * calculatedNights;
    let discount = 0;

    if (promoApplied) {
      discount = subtotal * (promoDiscount / 100);
    }

    const netSubtotal = subtotal - discount;
    const taxes = Math.round(netSubtotal * 0.14); // 14% Government Tax
    const fees = Math.round(netSubtotal * 0.1); // 10% Service Fee
    const total = netSubtotal + taxes + fees;

    return { subtotal, discount, taxes, fees, total };
  };

  const pricing = getPricing();

  const canNext = () => {
    if (step === 0) return arrival && departure && nights > 0;
    if (step === 1) return selectedRoomId !== null && selectedRateId !== "";
    if (step === 2) return firstName && lastName && email && phone && nationality;
    if (step === 3) return cardNumber && cardExpiry && cardCvc && cardholderName && agreeTerms;
    return true;
  };

  const handleNextStep = () => {
    if (canNext()) {
      const nextStep = step + 1;
      setStep(nextStep);
      window.scrollTo(0, 0);

      // Step 3 → 4: booking confirmed — send WhatsApp notification
      if (step === 3 && selectedRoom) {
        const ref = bookingRef || "PR-" + Math.random().toString(36).slice(2, 8).toUpperCase();
        const msg = encodeURIComponent(
          `🏨 *New Booking Request — Park Regency*\n\n` +
          `Ref: ${ref}\n` +
          `Guest: ${firstName} ${lastName}\n` +
          `Email: ${email}\n` +
          `Phone: ${phone}\n` +
          `Nationality: ${nationality}\n\n` +
          `Room: ${selectedRoom.nameKey}\n` +
          `Rate: ${selectedRate?.name || ""}\n` +
          `Arrival: ${arrival}\n` +
          `Departure: ${departure}\n` +
          `Nights: ${nights}\n` +
          `Adults: ${adults} | Children: ${children}\n\n` +
          `Special Requests: ${specialRequests || "None"}\n\n` +
          `Please confirm this reservation. Thank you! 🌊`
        );
        window.open(`https://wa.me/20693600000?text=${msg}`, "_blank");
      }
    }
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(0, prev - 1));
    window.scrollTo(0, 0);
  };

  return (
    <PageShell>
      {/* Page Header */}
      <section className="pt-32 pb-10 bg-ocean-deep text-white">
        <div className="container mx-auto px-6 text-center">
          <span className="eyebrow text-gold">{t("booking.reservations")}</span>
          <h1 className="font-display text-3xl md:text-5xl mt-3">{t("booking.bookYourStay")}</h1>
        </div>
      </section>

      {/* STEP INDICATORS */}
      <section className="bg-ocean-deep/95 text-white pb-8 border-b border-white/5">
        <div className="container mx-auto px-6">
          <ol className="flex items-center justify-between gap-2 max-w-4xl mx-auto">
            {steps.map((s, i) => (
              <li key={s} className="flex-1 flex flex-col items-center text-center gap-2">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                    i < step
                      ? "bg-gold text-ocean-deep"
                      : i === step
                        ? "bg-white text-ocean-deep ring-4 ring-white/20"
                        : "bg-white/20 text-white/60"
                  }`}
                >
                  {i < step ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <span
                  className={`hidden md:block text-[10px] uppercase tracking-[0.18em] font-medium ${i <= step ? "text-white" : "text-white/50"}`}
                >
                  {s}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CORE DISPLAY PAGES */}
      <section className="py-16 container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Form Fields Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* STEP 1: SELECT DATES & PROMO CODE */}
            {step === 0 && (
              <Card icon={<Calendar />} title={t("booking.chooseDates")}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label={t("booking.arrival")}>
                    <input
                      type="date"
                      required
                      value={arrival}
                      onChange={(e) => setArrival(e.target.value)}
                      className="input cursor-pointer"
                    />
                  </Field>
                  <Field label={t("booking.departure")}>
                    <input
                      type="date"
                      required
                      value={departure}
                      onChange={(e) => setDeparture(e.target.value)}
                      className="input cursor-pointer"
                    />
                  </Field>
                  <Field label={t("booking.adults")}>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(parseInt(e.target.value))}
                      className="input cursor-pointer"
                    >
                      {[1, 2, 3, 4].map((n) => (
                        <option key={n} value={n}>
                          {n} {t("booking.adult")}
                          {n > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label={t("booking.children")}>
                    <select
                      value={children}
                      onChange={(e) => setChildren(parseInt(e.target.value))}
                      className="input cursor-pointer"
                    >
                      {[0, 1, 2, 3].map((n) => (
                        <option key={n} value={n}>
                          {n} {t("booking.child")}
                          {n !== 1 ? "ren" : ""}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <label className="eyebrow block mb-2">
                    {t("booking.promoCode", "Promo Code")}
                  </label>
                  <div className="flex max-w-sm gap-2">
                    <input
                      type="text"
                      placeholder="e.g. LUXURY20"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="input uppercase placeholder-muted-foreground/60 flex-1"
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="px-5 bg-ocean-deep text-white hover:bg-gold hover:text-ocean-deep transition-colors text-xs font-semibold uppercase tracking-wider cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                  {promoApplied && (
                    <div className="mt-3 text-xs text-[#25D366] font-semibold flex items-center gap-1">
                      <Tag className="h-4 w-4" /> Code 'LUXURY20' applied successfully! (20%
                      Discount)
                    </div>
                  )}
                </div>

                {nights > 0 && (
                  <div className="mt-6 p-4 bg-secondary/50 border border-border text-sm text-ocean-deep font-semibold">
                    Stay Duration: {nights}{" "}
                    {nights === 1 ? t("booking.night") : t("booking.nightsPlural")}
                  </div>
                )}
              </Card>
            )}

            {/* STEP 2: ROOM & RATE SELECTION */}
            {step === 1 && (
              <Card icon={<Bed />} title={t("booking.chooseRoom")}>
                <div className="space-y-6">
                  {roomOptions.map((r) => {
                    const isSelected = selectedRoomId === r.id;
                    return (
                      <div
                        key={r.id}
                        className={`border-2 transition-all p-5 flex flex-col ${
                          isSelected
                            ? "border-gold bg-secondary/30"
                            : "border-border hover:border-gold/40"
                        }`}
                      >
                        {/* Upper Room Details */}
                        <div className="grid md:grid-cols-3 gap-6">
                          <img
                            src={r.img}
                            alt={t(r.nameKey)}
                            className="w-full h-44 object-cover shadow-sm"
                          />
                          <div className="md:col-span-2 flex flex-col justify-between">
                            <div>
                              <div className="flex items-start justify-between">
                                <div>
                                  <span className="eyebrow">{r.viewKey}</span>
                                  <h3 className="font-display text-xl text-ocean-deep font-semibold mt-1">
                                    {t(r.nameKey)}
                                  </h3>
                                </div>
                                <div className="text-right shrink-0">
                                  <span className="text-[10px] text-muted-foreground uppercase">
                                    Base Rate
                                  </span>
                                  <div className="font-display text-2xl text-ocean-deep mt-0.5">
                                    {formatPrice(r.priceUsd)}
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-4 text-[10px] uppercase tracking-wider text-muted-foreground mt-2 font-semibold">
                                <span>{r.size}</span>·<span>{t(r.occupancyKey)}</span>
                              </div>
                              <ul className="grid grid-cols-2 gap-2 mt-4 text-xs text-muted-foreground">
                                {r.features.slice(0, 4).map((f) => (
                                  <li key={f} className="flex items-center gap-1.5">
                                    <Check className="h-3.5 w-3.5 text-gold shrink-0" />
                                    {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <button
                              onClick={() => setSelectedRoomId(r.id)}
                              className={`mt-4 w-full py-2.5 text-xs uppercase tracking-widest font-semibold cursor-pointer border ${
                                isSelected
                                  ? "bg-gold text-ocean-deep border-gold"
                                  : "bg-white text-ocean-deep border-border hover:border-gold/50"
                              }`}
                            >
                              {isSelected ? "Room Selected" : "Select Room"}
                            </button>
                          </div>
                        </div>

                        {/* Dropdown rate selection inside active card */}
                        {isSelected && (
                          <div className="mt-6 pt-6 border-t border-border">
                            <h4 className="eyebrow block mb-3">Available Rate Options</h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                              {ratePlans.map((plan) => {
                                const isRateSelected = selectedRateId === plan.id;
                                const calculatedPrice = plan.isPercentage
                                  ? r.priceUsd * (1 + plan.priceModifier / 100)
                                  : r.priceUsd + plan.priceModifier;

                                return (
                                  <button
                                    key={plan.id}
                                    type="button"
                                    onClick={() => setSelectedRateId(plan.id)}
                                    className={`text-left p-4 border transition-all cursor-pointer ${
                                      isRateSelected
                                        ? "border-gold bg-card ring-2 ring-gold/10"
                                        : "border-border hover:border-gold/30 bg-card/50"
                                    }`}
                                  >
                                    <div className="flex justify-between items-start">
                                      <span className="text-xs font-semibold text-ocean-deep uppercase tracking-wider">
                                        {plan.name}
                                      </span>
                                      <span className="text-sm font-display text-gold font-medium">
                                        {formatPrice(calculatedPrice)}
                                      </span>
                                    </div>
                                    <p className="text-[11px] text-muted-foreground mt-1.5 leading-normal">
                                      {plan.description}
                                    </p>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </Card>
            )}

            {/* STEP 3: GUEST INFORMATION */}
            {step === 2 && (
              <Card icon={<Users />} title={t("booking.guestInfo")}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="First Name">
                    <input
                      required
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="input"
                    />
                  </Field>
                  <Field label="Last Name">
                    <input
                      required
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="input"
                    />
                  </Field>
                  <Field label={t("booking.email")}>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input"
                    />
                  </Field>
                  <Field label={t("booking.phone")}>
                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="input"
                    />
                  </Field>
                  <Field label="Nationality">
                    <input
                      required
                      type="text"
                      placeholder="e.g. British, Egyptian, German"
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                      className="input"
                    />
                  </Field>
                </div>
                <div className="mt-6">
                  <Field label={t("booking.specialRequests")}>
                    <textarea
                      rows={4}
                      placeholder="e.g. Room preference, late arrival timing, wedding anniversary notes"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      className="input placeholder-muted-foreground/60"
                    />
                  </Field>
                </div>
              </Card>
            )}

            {/* STEP 4: CHECKOUT & CC PAYMENT */}
            {step === 3 && selectedRoom && selectedRate && (
              <Card icon={<CreditCard />} title={t("booking.reviewPayment")}>
                <div className="space-y-6">
                  <div>
                    <h4 className="eyebrow mb-4">{t("booking.paymentMethod")}</h4>
                    <div className="bg-secondary/40 p-6 border border-border space-y-4">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                        <Award className="h-4.5 w-4.5 text-gold" /> Encrypted Secure SSL Payment
                        Gateway
                      </div>

                      <Field label={t("booking.cardNumber")}>
                        <input
                          required
                          type="text"
                          placeholder="4111 2222 3333 4444"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          className="input"
                        />
                      </Field>

                      <div className="grid grid-cols-2 gap-4">
                        <Field label={t("booking.expiry")}>
                          <input
                            required
                            type="text"
                            placeholder="MM/YY"
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                            className="input"
                          />
                        </Field>
                        <Field label={t("booking.cvc")}>
                          <input
                            required
                            type="text"
                            placeholder="123"
                            value={cardCvc}
                            onChange={(e) => setCardCvc(e.target.value)}
                            className="input"
                          />
                        </Field>
                      </div>

                      <Field label={t("booking.cardholderName")}>
                        <input
                          required
                          type="text"
                          placeholder="JOHN SMITH"
                          value={cardholderName}
                          onChange={(e) => setCardholderName(e.target.value)}
                          className="input"
                        />
                      </Field>
                    </div>
                  </div>

                  {/* Terms & Conditions Checkbox */}
                  <div className="pt-4 border-t border-border">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        className="mt-1 accent-gold h-4 w-4 cursor-pointer"
                      />
                      <span className="text-xs text-muted-foreground leading-normal">
                        I authorize the resort to guarantee this booking on my card. I agree to the{" "}
                        <a href="#" className="text-gold hover:underline">
                          Terms & Conditions
                        </a>
                        , reservation guidelines, and cancellation policies of the Park Regency
                        Resort.
                      </span>
                    </label>
                  </div>
                </div>
              </Card>
            )}

            {/* STEP 5: RESERVATION CONFIRMED RECEIPT */}
            {step === 4 && (
              <div className="text-center max-w-2xl mx-auto py-6">
                <div className="h-20 w-20 rounded-full bg-gold mx-auto flex items-center justify-center shadow-md">
                  <Check className="h-10 w-10 text-ocean-deep" strokeWidth={3} />
                </div>

                <h2 className="font-display text-4xl md:text-5xl mt-8 text-ocean-deep">
                  {t("booking.confirmed")}
                </h2>
                <div className="gold-divider mx-auto my-6" />
                <p className="text-muted-foreground text-base">
                  Thank you,{" "}
                  <span className="font-semibold text-ocean-deep">
                    {firstName} {lastName}
                  </span>
                  . We look forward to welcoming you to the Park Regency Sharm El Sheikh Resort.
                </p>

                <div className="bg-secondary p-8 mt-10 text-left border border-border">
                  <div className="eyebrow">{t("booking.bookingNumber")}</div>
                  <div className="font-display text-2xl text-ocean-deep mt-1 font-semibold">
                    {bookingRef}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mt-6 text-sm">
                    <div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                        Arrival Date
                      </div>
                      <div className="font-semibold text-ocean-deep mt-0.5">{arrival}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                        Departure Date
                      </div>
                      <div className="font-semibold text-ocean-deep mt-0.5">{departure}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                        Sanctuary
                      </div>
                      <div className="font-semibold text-ocean-deep mt-0.5">
                        {selectedRoom && t(selectedRoom.nameKey)}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                        Total Bill (with taxes)
                      </div>
                      <div className="font-semibold text-ocean-deep mt-0.5">
                        {formatPrice(pricing.total)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                  <a
                    href={`https://wa.me/20693600000?text=${encodeURIComponent(`Booking ref: ${bookingRef} — ${firstName} ${lastName}. Arrival: ${arrival}. Departure: ${departure}. Please send my confirmation receipt.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-[#25D366] text-white hover:bg-[#20ba5a] text-xs font-semibold uppercase tracking-[0.2em] inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    <Download className="h-4 w-4" /> WhatsApp Receipt
                  </a>
                  <a
                    href={`mailto:reservations@parkregency.com?subject=Booking Confirmation ${bookingRef}&body=Dear Park Regency Team,%0A%0APlease send the confirmation for booking ref: ${bookingRef}%0AGuest: ${firstName} ${lastName}%0AArrival: ${arrival} | Departure: ${departure}%0A%0AThank you.`}
                    className="px-6 py-3.5 border border-border text-xs font-semibold uppercase tracking-[0.2em] inline-flex items-center justify-center gap-2 hover:border-gold hover:text-gold transition-colors"
                  >
                    <Mail className="h-4 w-4" /> {t("booking.emailConfirmation")}
                  </a>
                  <Link
                    to="/"
                    className="px-6 py-3.5 border border-border text-xs font-semibold uppercase tracking-[0.2em] hover:border-gold hover:text-gold transition-colors text-center cursor-pointer"
                  >
                    {t("booking.returnHome")}
                  </Link>
                </div>
              </div>
            )}

            {/* Back / Continue Wizard Buttons */}
            {step < 4 && (
              <div className="flex justify-between items-center mt-8 border-t border-border pt-8">
                <button
                  onClick={handlePrevStep}
                  disabled={step === 0}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] disabled:opacity-30 disabled:cursor-not-allowed hover:text-gold transition-colors text-ocean-deep cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" /> {t("booking.back")}
                </button>
                <button
                  onClick={handleNextStep}
                  disabled={!canNext()}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-ocean-deep text-white text-xs font-semibold uppercase tracking-[0.2em] hover:bg-gold hover:text-ocean-deep transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  {step === 3 ? t("booking.confirmPay") : t("booking.continue")}{" "}
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          {/* Right Summary Column (Visible for Steps 1-4) */}
          {step < 4 && (
            <aside className="bg-secondary/40 border border-border p-6 md:p-8 h-fit space-y-6">
              <div>
                <h4 className="eyebrow mb-4">{t("booking.bookingSummary")}</h4>

                {selectedRoom ? (
                  <div className="space-y-4">
                    <SummaryRow label="Sanctuary" value={t(selectedRoom.nameKey)} />
                    <SummaryRow label="View" value={selectedRoom.viewKey} />
                    <SummaryRow label="Rate Tier" value={selectedRate?.name || ""} />

                    {arrival && departure && (
                      <SummaryRow label="Dates" value={`${arrival} — ${departure}`} />
                    )}

                    <SummaryRow label="Nights" value={`${nights > 0 ? nights : 1}`} />
                    <SummaryRow
                      label="Guests"
                      value={`${adults} ${t("booking.adult")}${adults > 1 ? "s" : ""}${children ? `, ${children} ${t("booking.child")}${children > 1 ? "ren" : ""}` : ""}`}
                    />

                    <div className="border-t border-border pt-4 mt-4 space-y-2">
                      <SummaryRow
                        label={t("booking.subtotal")}
                        value={formatPrice(pricing.subtotal)}
                      />
                      {promoApplied && (
                        <SummaryRow
                          label="Promo Discount (20%)"
                          value={`-${formatPrice(pricing.discount)}`}
                        />
                      )}
                      <SummaryRow label="Taxes (14%)" value={formatPrice(pricing.taxes)} />
                      <SummaryRow label="Service Fees (10%)" value={formatPrice(pricing.fees)} />

                      <div className="border-t border-border pt-4 mt-4 flex justify-between items-baseline">
                        <span className="eyebrow text-ocean-deep font-semibold">
                          {t("booking.total")}
                        </span>
                        <span className="font-display text-2xl text-ocean-deep font-bold">
                          {formatPrice(pricing.total)}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-xs text-muted-foreground leading-normal flex gap-2">
                    <ShieldAlert className="h-4.5 w-4.5 text-gold shrink-0" />
                    <span>
                      Choose your stay dates and select a room to view the itemized billing details.
                    </span>
                  </div>
                )}
              </div>

              <div className="border-t border-border pt-6 text-[10px] text-muted-foreground uppercase tracking-widest text-center">
                Check-in: 14:00 · Check-out: 12:00
              </div>
            </aside>
          )}
        </div>
      </section>

      {/* Styled Input Override rules */}
      <style>{`
        .input { 
          width: 100%; 
          border: 1px solid var(--border); 
          background: var(--background); 
          padding: 0.75rem 1rem; 
          font-size: 0.825rem; 
          outline: none; 
          transition: border-color .2s; 
        } 
        .input:focus { 
          border-color: var(--gold); 
        }
      `}</style>
    </PageShell>
  );
}

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card border border-border shadow-card p-8 md:p-10">
      <div className="flex items-center gap-3 mb-8 text-ocean-deep">
        <span className="text-gold">{icon}</span>
        <h2 className="font-display text-2xl md:text-3xl">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label className="eyebrow block font-semibold">{label}</label>
      {children}
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-xs py-1.5 border-b border-border/10">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-ocean-deep font-semibold text-right">{value}</span>
    </div>
  );
}
