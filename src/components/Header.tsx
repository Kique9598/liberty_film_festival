import { Link, useLocation } from "react-router-dom";
import NavLink from "./NavLink.tsx";
import NavButton from "./NavButton.tsx";
import { handleSameRouteClick } from "../utils/scroll";
import { useEffect, useState } from "react";
import textLogo from "../assets/text-logo.png";

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
          onClick={() => handleSameRouteClick(pathname, "/")}
        >
          <img src={textLogo} className="block h-11 hover:translate-x-1 transition-all duration-200" alt="Liberty Film Festival" />
        </Link>

        <nav className="hidden flex-1 justify-end items-center md:flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/submit">Submit</NavLink>
          <NavLink to="/tickets">Tickets</NavLink>
          <NavLink to="/donate">Donate</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
