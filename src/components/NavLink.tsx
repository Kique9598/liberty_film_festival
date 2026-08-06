import React, { type ReactNode } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `p-3 font-medium ${isActive ? "text-black" : "text-[#B3B3B3]"}`
      }
    >
      {children}
    </RouterNavLink>
  );
};

export default NavLink;
