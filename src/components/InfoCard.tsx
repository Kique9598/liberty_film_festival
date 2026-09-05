type InfoCardProps = {
  title: string;
  children: React.ReactNode;
  variant?: "default" | "light" | "highlight";
  titleSize?: "md" | "lg";
};

const variantClasses = {
  default: "card-default",
  light: "card-light",
  highlight: "card-highlight",
};

const titleSizeClasses = {
  md: "text-xl",
  lg: "text-2xl",
};

const InfoCard = ({
  title,
  children,
  variant = "default",
  titleSize = "md",
}: InfoCardProps) => {
  return (
    <div className={`flex h-full flex-col gap-2 ${variantClasses[variant]}`}>
      <h4 className={`text-left ${titleSizeClasses[titleSize]}`}>{title}</h4>
      {children}
    </div>
  );
};

export default InfoCard;
