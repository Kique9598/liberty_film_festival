import { NavLink as RouterNavLink } from "react-router-dom";

interface HeroButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const HeroButton = ({ to, children, variant = "primary" }: HeroButtonProps) => {
  const baseClasses = "px-4 py-2 rounded-lg font-medium text-sm";
  const variantClasses =
    variant === "primary"
      ? "bg-[#8DA88E] text-white hover:bg-[#A5BCA6] border border-[#8DA88E] hover:border-[#A5BCA6]"
      : "text-[#8DA88E] border border-[#8DA88E]";
  const classes = `${baseClasses} ${variantClasses}`;

  return (
    <RouterNavLink to={to} className={classes}>
      {children}
    </RouterNavLink>
  );
};

export default HeroButton;
