import { NavLink as RouterNavLink } from "react-router-dom";
import { LuExternalLink } from "react-icons/lu";
import { IconContext } from "react-icons/lib";
import Icon from "./Icon";

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
    <RouterNavLink to={to} className={`${classes} group`}>
      <span className="btn-content">{children}</span>
    </RouterNavLink>
  ) : (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${classes} group`}
    >
      <span className="btn-content">
        {children}{" "}
        <Icon size="14"/>
      </span>{" "}
    </a>
  );
};

export default HeroButton;
