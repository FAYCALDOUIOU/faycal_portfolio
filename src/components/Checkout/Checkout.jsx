import "./Checkout.css";
import { useEffect } from "react";

export default function Checkout({ plan, onClose }) {
  // ✅ lock background scroll but keep modal scroll working on mobile
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  const money = (n) => `${Number(n).toLocaleString()} ${plan.currency}`;

  return (
    <div className="checkoutOverlay" role="dialog" aria-modal="true">
      <div className="checkoutModal">
        <button className="closeX" onClick={onClose} aria-label="Close checkout">✕</button>

        {/* ✅ This is the scroll area */}
        <div className="checkoutBody">
          <div className="checkoutGrid">
            {/* LEFT */}
            <div>
              <h2 className="checkoutTitle">Checkout</h2>

              <form className="checkoutForm">
                <div className="row2">
                  <div className="field">
                    <label>FIRST NAME</label>
                    <input placeholder="Your first name" />
                  </div>
                  <div className="field">
                    <label>LAST NAME</label>
                    <input placeholder="Your last name" />
                  </div>
                </div>

                <div className="row2">
                  <div className="field">
                    <label>PHONE</label>
                    <input placeholder="+212..." />
                  </div>
                  <div className="field">
                    <label>E-MAIL</label>
                    <input type="email" placeholder="you@email.com" />
                  </div>
                </div>

                <div className="row2">
                  <div className="field">
                    <label>CITY</label>
                    <input placeholder="Casablanca" />
                  </div>
                  <div className="field">
                    <label>COUNTRY</label>
                    <select defaultValue="Morocco">
                      <option>Morocco</option>
                      <option>France</option>
                      <option>Spain</option>
                      <option>USA</option>
                    </select>
                  </div>
                </div>

                <div className="row2">
                  <div className="field">
                    <label>ADDRESS</label>
                    <input placeholder="Street, city..." />
                  </div>
                  <div className="field">
                    <label>ZIP</label>
                    <input placeholder="20000" />
                  </div>
                </div>
              </form>
            </div>

            {/* RIGHT */}
            <div className="checkoutRight">
              <div className="summaryBox">
                <div className="summaryTop">
                  <div>
                    <div className="summaryLabel">Selected Package</div>
                    <div className="summaryTitle">{plan.title}</div>
                    <div className="summaryMeta">
                      Delivery: <strong>{plan.delivery}</strong>
                    </div>
                  </div>

                  <div className="summaryPrice">
                    {plan.oldPrice > 0 && <span className="oldPrice">{money(plan.oldPrice)}</span>}
                    <span className="newPrice">{money(plan.promoPrice)}</span>
                  </div>
                </div>
              </div>

              <div className="payHeader">
                <h3 className="payTitle">Payment</h3>
              </div>

              {/* ✅ Put PayPal Buttons here later */}
              <button className="primaryBtn" type="button">
                Pay with PayPal (next step)
              </button>

              <p className="note">
                Next: I can add real PayPal buttons once you put your PayPal Client ID in .env
              </p>

              <div className="actions">
                <button type="button" className="backBtn" onClick={onClose}>‹ Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
