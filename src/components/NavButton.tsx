import { type ReactNode } from "react";
import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { handleSameRouteClick } from "../utils/scroll";

interface NavButton {
  children: ReactNode;
  to: string;
}

const NavButton = ({ children, to }: NavButton) => {
  const { pathname } = useLocation();

  return (
    <RouterNavLink
      to={to}
      className="nav-cta"
      onClick={() => handleSameRouteClick(pathname, to)}
    >
      {children}
    </RouterNavLink>
  );
};

export default NavButton;
