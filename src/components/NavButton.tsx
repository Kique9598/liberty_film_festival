import { type ReactNode } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

interface NavButton {
  children: ReactNode;
  to: string;
}

const NavButton = ({ children, to }: NavButton) => {
  return (
    <RouterNavLink to={to} className="nav-cta">
      {children}
    </RouterNavLink>
  );
};

export default NavButton;
