import NavLink from "./NavLink.tsx";
import NavButton from "./NavButton.tsx";

const Header = () => {
  return (
    <header className="flex items-center m-4 px-4 py-2 shadow-md rounded-md bg-[#FDFBFC]">
      <div className="flex-1 font-bold">[ LOGO ]</div>
      <nav className="flex items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/submit">Submit</NavLink>
      </nav>
      <div className="flex-1 flex justify-end">
        <NavButton to="/submit">Submit a Film</NavButton>
      </div>
    </header>
  );
};

export default Header;
