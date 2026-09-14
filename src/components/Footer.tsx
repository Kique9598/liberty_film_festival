import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";
import { CONTACT_EMAIL } from "../constants/links";
import { contactLinks } from "../data/contactLinks";

const sectionLabelClass = "label-caps mb-3 block";

const footerLinkClass =
  "font-cormorant text-base text-ink transition-colors hover:text-muted sm:text-lg";

const socialIconClass =
  "flex h-9 w-9 items-center justify-center rounded-full border border-parch-400 text-green-700 transition-all hover:-translate-y-0.5 hover:border-green-500 hover:bg-green-50";

const Footer = () => {
  return (
    <footer className="border-t border-parch-300">
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
            <h5 className={sectionLabelClass}>Festival</h5>
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
            <h5 className={sectionLabelClass}>Contact</h5>
            <div className="flex flex-col items-start gap-3">
              <div className="flex flex-wrap gap-2">
                <a
                  href={contactLinks.instagram}
                  className={socialIconClass}
                  aria-label="Instagram"
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram aria-hidden="true" />
                </a>
                <a
                  href={contactLinks.twitter}
                  className={socialIconClass}
                  aria-label="X"
                  title="X"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter aria-hidden="true" />
                </a>
                <a
                  href={contactLinks.facebook}
                  className={socialIconClass}
                  aria-label="Facebook"
                  title="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF aria-hidden="true" />
                </a>
                <a
                  href={contactLinks.tiktok}
                  className={socialIconClass}
                  aria-label="TikTok"
                  title="TikTok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok aria-hidden="true" />
                </a>
                <a
                  href={contactLinks.youtube}
                  className={socialIconClass}
                  aria-label="YouTube"
                  title="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube aria-hidden="true" />
                </a>
                <a
                  href={contactLinks.linktree}
                  className={socialIconClass}
                  aria-label="Linktree"
                  title="Linktree"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiLinktree aria-hidden="true" />
                </a>
              </div>
              <a href={`mailto:${CONTACT_EMAIL}`} className={footerLinkClass}>
                {CONTACT_EMAIL}
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
