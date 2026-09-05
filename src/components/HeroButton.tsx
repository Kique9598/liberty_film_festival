import { NavLink as RouterNavLink } from "react-router-dom";
import { LuExternalLink } from "react-icons/lu";

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
  const classes = variant === "primary" ? "btn-primary" : "btn-secondary";

  return to ? (
    <RouterNavLink to={to} className={classes}>
      {children}
    </RouterNavLink>
  ) : (
    <a href={link} target="_blank" rel="noopener noreferrer" className={classes}>
      {children} <LuExternalLink />
    </a>
  );
};

export default HeroButton;
