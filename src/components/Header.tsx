import { Link, useLocation } from "react-router-dom";
import NavLink from "./NavLink.tsx";
import NavButton from "./NavButton.tsx";
import { handleSameRouteClick } from "../utils/scroll";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56); // threshold in px
    onScroll(); // set correct state on mount (e.g. reloaded mid-page)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { pathname } = useLocation();

  return (
    <header
      className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
    >
      <div className="site-header-inner">
        <Link
          to="/"
          className="site-logo"
          onClick={() => handleSameRouteClick(pathname, "/")}
        >
          Liberty Film Festival
        </Link>

        <nav className="hidden flex-1 items-center justify-center md:flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/submit">Submit</NavLink>
          <NavLink to="/tickets">Tickets</NavLink>
          <NavLink to="/donate">Donate</NavLink>
        </nav>

        <div className="ml-auto shrink-0">
          <NavButton to="/tickets">Get Ticket Alerts</NavButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
