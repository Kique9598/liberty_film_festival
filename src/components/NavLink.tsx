import { type ReactNode } from "react";
import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { handleSameRouteClick } from "../utils/scroll";

interface NavLinkProps {
  to: string;
  children: ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => {
  const { pathname } = useLocation();

  return (
    <RouterNavLink
      to={to}
      onClick={() => handleSameRouteClick(pathname, to)}
      className={({ isActive }) =>
        `nav-link ${isActive ? "nav-link-active" : ""}`
      }
    >
      {children}
    </RouterNavLink>
  );
};

export default NavLink;
