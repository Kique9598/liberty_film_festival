import { Link } from "react-router-dom";
import NavLink from "./NavLink.tsx";
import NavButton from "./NavButton.tsx";

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="site-logo">
          Liberty Film Festival
        </Link>

        <nav className="hidden flex-1 items-center justify-center md:flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/submit">Submit</NavLink>
          <NavLink to="/donate">Donate</NavLink>
        </nav>

        <div className="ml-auto shrink-0">
          <NavButton to="/submit">Submit a Film</NavButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
