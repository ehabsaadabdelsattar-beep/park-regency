type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  height?: "sm" | "md" | "lg";
};

export function PageHero({ eyebrow, title, subtitle, image, height = "md" }: Props) {
  const h =
    height === "sm"
      ? "h-[48vh] min-h-[380px]"
      : height === "lg"
        ? "h-[78vh] min-h-[620px]"
        : "h-[62vh] min-h-[480px]";
  return (
    <section className={`relative ${h} w-full overflow-hidden`}>
      <img src={image} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/40 via-ocean-deep/30 to-ocean-deep/70" />
      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center items-center text-center text-white pt-20">
        {eyebrow && <span className="eyebrow text-gold mb-5">{eyebrow}</span>}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-normal max-w-4xl leading-[1.05]">
          {title}
        </h1>
        <div className="gold-divider my-7" />
        {subtitle && (
          <p className="max-w-2xl text-white/85 text-base md:text-lg leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
