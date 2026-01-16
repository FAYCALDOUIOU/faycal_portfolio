import { useRef } from "react";
import "./Landing.css";
import CustomerLogos from "../ui/CustomerLogos";
import khadija from "/src/assets/customer/khadija.png"
import athlo from "/src/assets/customer/ATHLOSCOPEAI.png"
import faycal from "/src/assets/logo.svg"
const logos = [
    { src: khadija, alt: "DIJA D'OR" },
    { src: athlo, alt: "Logo ATHLOSCOPEAI" },
    { src: faycal, alt: "faycal" },
];

export default function Landing() {
    const heroRef = useRef(null);

    const handleMove = (e) => {
        const hero = heroRef.current;
        if (!hero) return;

        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;  // 0..1
        const y = (e.clientY - rect.top) / rect.height;  // 0..1

        const maxX = 55; // strength (increase for more movement)
        const maxY = 40;

        const dx = (x - 0.5) * 2 * maxX;
        const dy = (y - 0.5) * 2 * maxY;

        hero.style.setProperty("--dx", `${dx}px`);
        hero.style.setProperty("--dy", `${dy}px`);
    };

    const handleLeave = () => {
        const hero = heroRef.current;
        if (!hero) return;
        hero.style.setProperty("--dx", "0px");
        hero.style.setProperty("--dy", "0px");
    };

    return (
        <section
            ref={heroRef}
            className="hero"
            id="home"
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
        >
            <div className="hero__inner">
                <div className="hero__content">
                    <p className="hero__kicker">We are here</p>

                    <h1 className="hero__title">
                        <span className="line1">To make your</span>
                        <span className="line2">brand bold</span>
                    </h1>

                    <p className="hero__subtitle">Let’s build a powerful brand story that stands out.</p>

                    <a className="hero__btn" href="#about">discover us</a>
                </div>

                <div className="hero__logosWrap">
                    <CustomerLogos logos={logos} />
                </div>
            </div>
        </section>
    );
}
