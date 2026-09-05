type SectionHeaderProps = {
  title: string;
  description?: string;
  centered?: boolean;
  showDivider?: boolean;
};

const SectionHeader = ({
  title,
  description,
  centered = false,
  showDivider = false,
}: SectionHeaderProps) => {
  const align = centered ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${align}`}>
      <h2 className="mb-0">{title}</h2>
      {description && (
        <p className={`mb-0 text-muted ${centered ? "max-w-md" : ""}`}>
          {description}
        </p>
      )}
      {showDivider && <div className="section-divider" />}
    </div>
  );
};

export default SectionHeader;
