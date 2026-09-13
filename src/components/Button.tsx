import { NavLink as RouterNavLink } from "react-router-dom";
import { LuExternalLink } from "react-icons/lu";
import { IconContext } from "react-icons/lib";
import Icon from "./Icon";

type ButtonProps = {
  label: string;
  ghost?: boolean;
} & ({ to: string; link?: never } | { link: string; to?: never });

const Button = ({ to, link, label, ghost = false }: ButtonProps) => {
  const classes = `flex w-fit items-center gap-2 rounded-md border border-[#5D745D] ${ghost ? "text-[#5D745D]" : "bg-[#5D745D] hover:bg-[#677E67] text-white"} px-7 py-3.5 text-sm font-medium  transition-all hover:-translate-y-1 duration-200 hover:border-[#677E67]  hover:shadow-md`;

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
