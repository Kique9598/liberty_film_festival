import { Link } from "react-router-dom";

const sectionLabelClass =
  "mb-3 block font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#8a8578]";

const footerLinkClass =
  "font-cormorant text-lg text-[#2a2420] transition-colors hover:text-[#635748]";

const Footer = () => {
  return (
    <footer className="border-t border-[#e6ddd4] bg-[#F1ECE7]">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-10">
          <div className="flex flex-col gap-3">
            <span className="font-cormorant text-2xl font-semibold text-[#2a2420]">
              Liberty Film Festival
            </span>
            <p className="mb-0 max-w-xs text-sm leading-relaxed text-[#635748]">
              An intercollegiate film festival uniting New York City's top
              universities to celebrate the next generation of student
              filmmakers.
            </p>
          </div>

          <div>
            <span className={sectionLabelClass}>Festival</span>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className={footerLinkClass}>
                About
              </Link>
              <Link to="/submit" className={footerLinkClass}>
                Submit a Film
              </Link>
              <Link to="/donate" className={footerLinkClass}>
                Donate
              </Link>
            </nav>
          </div>

          <div>
            <span className={sectionLabelClass}>Contact</span>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@libertyfilmfest.org"
                className={footerLinkClass}
              >
                hello@libertyfilmfest.org
              </a>
              <a
                href="#"
                className={footerLinkClass}
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-[#e6ddd4] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="mb-0 font-cormorant text-sm text-[#8a8578]">
            © 2027 Liberty Film Festival. All rights reserved.
          </p>
          <p className="mb-0 font-cormorant text-sm text-[#8a8578]">
            Made by students, for students.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
