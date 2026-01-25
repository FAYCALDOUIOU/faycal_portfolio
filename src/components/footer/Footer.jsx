import "./Footer.css";
import logo from "../../assets/logow.svg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer__inner">
        {/* Top Row */}
        <div className="footer__row footer__row--top">
          <a className="footer__brand" href="#home" aria-label="Go to home">
            <img className="footer__logo" src={logo} alt="Logo" />
          </a>

          <div className="footer__copy">
            © {year} FAYCAL DOUIOU | BRANDING. All rights reserved.
          </div>

          {/* ✅ Use your real ids */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="#learn">ABOUT US</a></li>
              <li><a href="#tech">SERVICES</a></li>
              <li><a href="#pricing">PRICING</a></li>
              <li><a href="#contact">CONTACT US</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer__divider" />

        {/* Bottom Row */}
        <div className="footer__row footer__row--bottom">
          <p className="footer__desc">
            From a starter brand kit to a full premium experience — everything you need to launch a strong visual identity.
          </p>

          <div className="footer__social" aria-label="Social links">
            <a className="footer__socialBtn" href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M22 5.8c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2.1-.7.4-1.5.7-2.4.9A3.6 3.6 0 0 0 12.8 8c0 .3 0 .6.1.8-3-.2-5.7-1.6-7.5-3.9-.3.6-.5 1.2-.5 2 0 1.2.6 2.3 1.6 2.9-.6 0-1.1-.2-1.6-.4v.1c0 1.7 1.2 3.1 2.8 3.4-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 1.9 2.6 3.6 2.6A7.3 7.3 0 0 1 2 18.4 10.3 10.3 0 0 0 7.6 20c6.7 0 10.4-5.7 10.4-10.7v-.5c.7-.5 1.3-1.2 1.8-2z" />
              </svg>
            </a>

            <a className="footer__socialBtn" href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.2-1.5 1.5-1.5h1.6V5c-.3 0-1.4-.1-2.7-.1-2.6 0-4.4 1.6-4.4 4.6V11H7v3h2.5v8h4z" />
              </svg>
            </a>

            <a className="footer__socialBtn" href="#" aria-label="Google Plus">
              <span className="footer__gplus">G+</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
