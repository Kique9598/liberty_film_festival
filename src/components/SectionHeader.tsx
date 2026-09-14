type SectionHeaderProps = {
  title: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
  showDivider?: boolean;
};

const SectionHeader = ({
  title,
  description,
  centered = false,
  dark = false,
  showDivider = true,
}: SectionHeaderProps) => {
  const align = centered ? "" : "sm:items-start sm:text-left";

  return (
    <div className={`flex flex-col gap-3 items-center text-center ${align}`}>
      <h2 className={`${dark ? "text-white" : ""}`}>{title}</h2>
      {description && (
        <p
          className={`${dark ? "text-[#D4C9B0]" : "text-muted"} ${centered ? "max-w-md" : ""}`}
        >
          {description}
        </p>
      )}
      {showDivider && <div className="section-divider" />}
    </div>
  );
};

export default SectionHeader;
