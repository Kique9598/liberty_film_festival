import { NavLink as RouterNavLink } from "react-router-dom";
import Icon from "./Icon";

type ButtonProps = {
  label: string;
  ghost?: boolean;
  variant?: "default" | "gold";
} & ({ to: string; link?: never } | { link: string; to?: never });

const Button = ({
  to,
  link,
  label,
  ghost = false,
  variant = "default",
}: ButtonProps) => {
  // const classes = `flex w-fit items-center gap-2 rounded-md border ${variant === "gold" ? "border-[#A8945C]" : "border-[#5D745D]"} ${ghost ? "text-[#5D745D]" : variant === "gold" ? "bg-[#A8945C] text-[#2A2420]" : "bg-[#5D745D] hover:bg-[#677E67] hover:border-[#677E67] text-white"} px-7 py-3.5 text-sm font-medium  transition-all hover:-translate-y-1 duration-200   hover:shadow-md`;

  const classes = `button ${variant === "gold" ? "gold-button" : ""} ${ghost ? "ghost-button" : ""}`;

  return to ? (
    <RouterNavLink to={to} className={`${classes} group`}>
      <span className="btn-content">{label}</span>
    </RouterNavLink>
  ) : (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${classes} group`}
    >
      <span className="btn-content">
        {label} <Icon size="14" />
      </span>{" "}
    </a>
  );
};

export default Button;
