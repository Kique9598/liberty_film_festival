type SectionProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "narrow" | "hero" | "banner" | "prose";
  row?: boolean;
  scrollMargin?: boolean;
};

const containerVariants = {
  default: "max-w-6xl px-6 md:px-10 py-12 md:py-14",
  narrow: "max-w-6xl px-6 md:px-10 py-6 md:py-8",
  hero: "max-w-7xl px-6 md:px-10 py-8 md:py-12 lg:py-14",
  banner: "max-w-6xl px-6 md:px-10 py-12 md:py-14 items-center",
  prose: "max-w-3xl px-6 md:px-10 py-12 md:py-14",
};

const Section = ({
  children,
  className = "",
  variant = "default",
  row = false,
  scrollMargin = false,
}: SectionProps) => {
  const scrollClass = scrollMargin ? "scroll-mt-24" : "";

  return (
    <section className={`w-full ${scrollClass} ${className}`}>
      <div
        className={`mx-auto flex flex-col ${containerVariants[variant]} ${row ? "gap-10 lg:flex-row" : "gap-4"}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
