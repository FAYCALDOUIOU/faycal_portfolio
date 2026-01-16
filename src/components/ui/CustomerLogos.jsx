import { useEffect, useRef, useState } from "react";
import "./CustomerLogos.css";

export default function CustomerLogos({ logos = [] }) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const track = [...logos, ...logos];

  useEffect(() => {
    let raf;

    const tick = () => {
      const viewport = viewportRef.current;
      const trackEl = trackRef.current;
      if (!viewport || !trackEl) return;

      const mid = viewport.getBoundingClientRect().left + viewport.offsetWidth / 2;

      let best = { idx: 0, dist: Infinity };

      const items = trackEl.querySelectorAll(".logos__item");
      items.forEach((el, idx) => {
        const r = el.getBoundingClientRect();
        const center = r.left + r.width / 2;
        const d = Math.abs(center - mid);
        if (d < best.dist) best = { idx, dist: d };
      });

      setActiveIndex(best.idx);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="logos" aria-label="Our customers">
      <div className="logos__fade logos__fade--left" aria-hidden="true" />
      <div className="logos__fade logos__fade--right" aria-hidden="true" />

      <div className="logos__viewport" ref={viewportRef}>
        <div className="logos__track" ref={trackRef}>
          {track.map((logo, idx) => (
            <div
              className={`logos__item ${idx === activeIndex ? "is-active" : ""}`}
              key={`${logo.alt}-${idx}`}
            >
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
