import { type ReactNode } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

interface NavButton {
  children: ReactNode;
  to: string;
}

const NavButton = ({ children, to }: NavButton) => {
  return (
    <RouterNavLink
      to={to}
      className="px-4 py-2 rounded-lg bg-[#8DA88E] text-white hover:bg-[#A5BCA6] font-medium text-sm"
    >
      {children}
    </RouterNavLink>
  );
};

export default NavButton;
