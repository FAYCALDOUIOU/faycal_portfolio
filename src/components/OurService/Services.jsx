import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Brand Design",
      desc:
        "Carefully crafted visual identity, harmonious typography, and clean layouts for a premium brand feel.",
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">
          <path
            d="M4 20h4l10.2-10.2a2.5 2.5 0 0 0 0-3.5l-.5-.5a2.5 2.5 0 0 0-3.5 0L4 16v4z"
            fill="currentColor"
          />
          <path
            d="M13.5 6.5l4 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      ),
    },
    {
      title: "Web Development",
      desc:
        "Built with modern, fast, and maintainable code. Clean structure, responsive UI, and smooth interactions.",
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">
          <path
            d="M8 9l-3 3 3 3"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M16 9l3 3-3 3"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M10.5 18l3-12"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      ),
    },
    {
      title: "UI/UX",
      desc:
        "Transform ideas into clear user journeys and conversion-focused experiences with minimal friction.",
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">
          <rect
            x="3.5"
            y="7"
            width="17"
            height="10"
            rx="5"
            stroke="currentColor"
            strokeWidth="2.2"
            fill="none"
          />
          <circle cx="15.5" cy="12" r="3.2" fill="currentColor" />
        </svg>
      ),
    },
    {
  title: "Brand Strategy",
  desc:
    "Positioning, messaging, and a clear brand roadmap so your identity feels consistent and impactful everywhere.",
  icon: (
    <svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">
      <path
        d="M6 3h12v6H6V3z"
        stroke="currentColor"
        strokeWidth="2.2"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M8 13h8M8 17h6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M6 21V9h12v12"
        stroke="currentColor"
        strokeWidth="2.2"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  ),
},
  ];

  return (
    <section className="services" id="Services" aria-label="Services">
      <div className="services__inner">
        <h2 className="services__title">Our Services</h2>
        <p className="services__subtitle">
          We create design + development solutions that help brands launch faster and look premium
          everywhere.
        </p>

        <div className="services__grid">
          {services.map((s) => (
            <article className="services__card" key={s.title}>
              <div className="services__icon" aria-hidden="true">
                {s.icon}
              </div>
              <h3 className="services__cardTitle">{s.title}</h3>
              <p className="services__cardDesc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
