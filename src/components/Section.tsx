type SectionProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "narrow" | "hero";
};

const variants = {
  default: "max-w-6xl px-6 md:px-10 py-12 md:py-14",
  narrow: "max-w-6xl px-6 md:px-10 py-6 md:py-8",
  hero: "max-w-7xl px-6 md:px-10 py-10 md:py-12",
};

const Section = ({
  children,
  className = "",
  variant = "default",
}: SectionProps) => {
  return (
    <section className={`w-full ${className}`}>
      <div className={`flex flex-col mx-auto ${variants[variant]}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
