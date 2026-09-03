import { Link, NavLink as RouterNavLink } from "react-router-dom";

type HeroButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
} & ({ to: string; link?: never } | { link: string; to?: never });

const HeroButton = ({
  to,
  link,
  children,
  variant = "primary",
}: HeroButtonProps) => {
  const baseClasses =
    "inline-block px-4 py-2 rounded-lg font-medium text-sm transition-colors";
  const variantClasses =
    variant === "primary"
      ? "bg-[#8DA88E] text-white hover:bg-[#A5BCA6] border border-[#8DA88E] hover:border-[#A5BCA6]"
      : "text-[#8DA88E] border border-[#8DA88E] hover:bg-[#8DA88E]/10";
  const classes = `${baseClasses} ${variantClasses}`;

  return to ? (
    <RouterNavLink to={to} className={classes}>
      {children}
    </RouterNavLink>
  ) : (
    <a href={link} target="_blank" className={classes}>
      {children}
    </a>
  );
};

export default HeroButton;
