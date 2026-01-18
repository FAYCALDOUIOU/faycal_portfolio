import "./Pricing.css";

const PLANS = [
  {
    key: "starter",
    title: "Starter Brand Kit",
    subtitle: "For entrepreneurs and small startups.",
    price: "1,500",
    priceWas: "2,000",
    currency: "MAD",
    delivery: "5–7 days",
    cta: "Get Started",
    badge: "PROMO",
    featured: false,
    features: [
      { label: "Main logo + variations", included: true },
      { label: "Color palette & fonts", included: true },
      { label: "Basic brand board (visual identity summary)", included: true },

      { label: "Brand pattern / texture", included: false },
      { label: "Social media profile kit (profile, highlights, 3 templates)", included: false },
      { label: "Brand guideline PDF", included: false },
      { label: "Brand strategy session (positioning, voice, story)", included: false },
      { label: "Stationery (card, letterhead, envelope)", included: false },
      { label: "Brand launch presentation", included: false },
    ],
  },

  {
    key: "pro",
    title: "Professional Brand Identity",
    subtitle: "For growing businesses that want a complete and consistent brand system.",
    // ✅ promo
    price: "3,500",
    priceWas: "5,000",
    currency: "MAD",
    delivery: "10–14 days",
    cta: "Get Started",
    badge: "PROMO",
    featured: true,
    features: [
      { label: "Logo system (main, alt, icon)", included: true },
      { label: "Color palette + typography", included: true },
      { label: "Brand pattern / texture", included: true },
      { label: "Social media profile kit (profile, highlights, 3 templates)", included: true },
      { label: "Brand guideline PDF", included: true },

      { label: "Brand strategy session (positioning, voice, story)", included: false },
      { label: "Social media templates (10–15)", included: false },
      { label: "Stationery (card, letterhead, envelope)", included: false },
      { label: "Brand launch presentation", included: false },
    ],
  },

  {
    key: "premium",
    title: "Premium Brand Experience",
    subtitle: "For businesses ready to invest in full strategy and visuals.",
    // ✅ promo
    price: "7,000",
    priceWas: "10,000",
    currency: "MAD",
    delivery: "3–4 weeks",
    cta: "Get Started",
    badge: "PROMO",
    featured: false,
    features: [
      { label: "Brand strategy session (positioning, voice, story)", included: true },
      { label: "Logo system + complete visual identity", included: true },
      { label: "Social media templates (10–15)", included: true },
      { label: "Stationery (card, letterhead, envelope)", included: true },
      { label: "Brand launch presentation", included: true },

      { label: "Color palette + typography", included: true },
      { label: "Brand pattern / texture", included: true },
      { label: "Brand guideline PDF", included: true },
    ],
  },
];


export default function Pricing() {
  return (
    <section className="pricing" id="pricing" aria-label="Plans and Pricing">
      <div className="pricing__bg" aria-hidden="true" />

      <div className="pricing__inner">
        <h2 className="pricing__title">Plans &amp; Pricing</h2>
        <p className="pricing__lead">
          Choose the brand identity package that fits your business stage — from a clean starter kit to a full premium experience.
        </p>

        <div className="pricing__grid">
          {PLANS.map((plan) => (
            <article
              key={plan.key}
              className={`pricing__card ${plan.featured ? "is-featured" : ""}`}
            >
              <header className="pricing__cardHeader">
                {plan.badge && <span className="pricing__badge">{plan.badge}</span>}

                <h3 className="pricing__plan">{plan.title}</h3>
                <p className="pricing__desc">{plan.subtitle}</p>

                <div className="pricing__priceRow">
                  {plan.priceWas && (
                    <span className="pricing__priceWas">
                      {plan.priceWas}{" "}
                      <span className="pricing__currencySmall">{plan.currency}</span>
                    </span>
                  )}

                  <span
                    className={`pricing__price ${plan.priceWas ? "is-promo" : ""} ${
                      String(plan.price).includes("–") ? "is-range" : ""
                    }`}
                  >
                    {plan.price}
                  </span>

                  <span className="pricing__currency">{plan.currency}</span>
                </div>

                <p className="pricing__delivery">⏱ Delivery: {plan.delivery}</p>
              </header>

              <ul className="pricing__features">
                {plan.features.map((f, idx) => (
                  <li
                    key={`${plan.key}-${idx}`}
                    className={`pricing__feature ${f.included ? "is-on" : "is-off"}`}
                  >
                    <span className="pricing__check" aria-hidden="true">
                      {f.included ? "✓" : "•"}
                    </span>
                    <span className="pricing__featureText">{f.label}</span>
                  </li>
                ))}
              </ul>

              <a
                className={`pricing__cta ${plan.featured ? "is-featured" : ""}`}
                href="#contact"
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
