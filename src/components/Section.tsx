type SectionProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "narrow" | "hero" | "banner" | "alt" | "prose";
  scrollMargin?: boolean;
};

const containerVariants = {
  default: "max-w-6xl px-6 md:px-10 py-12 md:py-14",
  narrow: "max-w-6xl px-6 md:px-10 py-6 md:py-8",
  hero: "max-w-7xl px-6 md:px-10 py-8 md:py-12 lg:py-14",
  banner: "max-w-7xl px-6 md:px-10 py-16 md:py-24",
  alt: "max-w-6xl px-6 md:px-10 py-12 md:py-14",
  prose: "max-w-3xl px-6 md:px-10 py-12 md:py-14",
};

const Section = ({
  children,
  className = "",
  id,
  variant = "default",
  scrollMargin = false,
}: SectionProps) => {
  const isAlt = variant === "alt";
  const scrollClass = scrollMargin ? "scroll-mt-24" : "";

  return (
    <section
      id={id}
      className={`w-full ${isAlt ? "bg-section-alt" : ""} ${scrollClass} ${className}`}
    >
      <div className={`mx-auto flex flex-col ${containerVariants[variant]}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
