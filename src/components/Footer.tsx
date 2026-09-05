import { Link } from "react-router-dom";
import { CONTACT_EMAIL } from "../constants/links";

const sectionLabelClass = "label-caps mb-3 block";

const footerLinkClass =
  "font-cormorant text-base text-ink transition-colors hover:text-muted sm:text-lg";

const Footer = () => {
  return (
    <footer className="border-t border-parch-300 bg-parch-200">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-10">
          <div className="flex flex-col gap-3">
            <span className="font-cormorant text-xl font-semibold text-ink sm:text-2xl">
              Liberty Film Festival
            </span>
            <p className="mb-0 max-w-xs text-sm leading-relaxed text-muted">
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
              <a href={`mailto:${CONTACT_EMAIL}`} className={footerLinkClass}>
                {CONTACT_EMAIL}
              </a>
              <a href="#" className={footerLinkClass}>
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-parch-300 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="mb-0 font-cormorant text-sm text-subtle">
            © 2027 Liberty Film Festival. All rights reserved.
          </p>
          <p className="mb-0 font-cormorant text-sm text-subtle">
            Made by students, for students.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
