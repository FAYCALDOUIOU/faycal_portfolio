import { useState } from "react";
import "./AboutUs.css";

export default function AboutUs() {
  const [heartPop, setHeartPop] = useState(false);

  const popHeart = () => {
    setHeartPop(true);
    window.setTimeout(() => setHeartPop(false), 420);
  };

  return (
    <section className="about" id="AboutUs" aria-label="About us">
      <div className="about__inner">
        <div className="about__icons" aria-hidden="true">
          <span className="about__icon about__icon--code">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 9l-4 3 4 3" />
              <path d="M16 9l4 3-4 3" />
              <path d="M14 7l-4 10" />
            </svg>
          </span>

          {/* ✅ clickable heart */}
          <button
            type="button"
            className={`about__icon about__icon--heart ${heartPop ? "is-pop" : ""}`}
            onClick={popHeart}
            aria-label="Love"
          >
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 256 256"
              className="about__heartSvg"
            >
              <path d="M254.3,84.9c0,17.4-6.8,33.8-19.1,46.2l-107.3,107.3L20.5,131.1C8.2,118.7,1.4,102.3,1.4,84.9s6.8-33.8,19.1-46.1c12.3-12.3,28.7-19.1,46.1-19.1s33.8,6.8,46.1,19.1l15.1,15.1,15-15.1c12.3-12.3,28.7-19.1,46.1-19.1s33.8,6.8,46.1,19.1c6.2,6.2,11,13.3,14.2,21.2,3.2,7.8,4.9,16.3,4.9,25Z" />
              <path d="M235.2,131.1l-107.3,107.3L20.5,131.1C8.2,118.7,1.4,102.3,1.4,84.9s6.8-33.8,19.1-46.1c12.3-12.3,28.7-19.1,46.1-19.1s33.8,6.8,46.1,19.1l15.1,15.1,15-15.1c12.3-12.3,28.7-19.1,46.1-19.1s33.8,6.8,46.1,19.1c6.2,6.2,11,13.3,14.2,21.2,3.2,7.8,4.9,16.3,4.9,25,0,17.4-6.8,33.8-19.1,46.2Z" />
            </svg>
          </button>

          <span className="about__icon about__icon--star">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3 7 7 .6-5.3 4.6 1.7 7-6.4-4-6.4 4 1.7-7L2 9.6 9 9z" />
            </svg>
          </span>
        </div>

        <h2 className="about__title">ABOUT US</h2>

        <p className="about__subtitle">
          We help brands grow with modern design, smart strategy, and clean development —
          so your story looks bold and feels premium everywhere.
        </p>
      </div>
    </section>
  );
}
