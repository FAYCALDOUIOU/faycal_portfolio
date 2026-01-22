import "./Contact.css";

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact2" id="contact" aria-label="Contact">
      <div className="contact2__inner">
        {/* LEFT */}
        <div className="contact2__left">
          <h2 className="contact2__title">Drop Us a Line</h2>
          <p className="contact2__desc">
            We are always looking for a next great project
          </p>

          <form className="contact2__form" onSubmit={onSubmit}>
            <label className="contact2__label" htmlFor="c-email">
              E-MAIL
            </label>
            <input
              id="c-email"
              className="contact2__input"
              type="email"
              placeholder="Your email"
              required
            />

            <label className="contact2__label" htmlFor="c-message">
              MESSAGE
            </label>
            <textarea
              id="c-message"
              className="contact2__textarea"
              placeholder="Drop us a line"
              rows={5}
              required
            />

            <label className="contact2__label" htmlFor="c-name">
              NAME
            </label>

            <div className="contact2__row">
              <input
                id="c-name"
                className="contact2__input"
                type="text"
                placeholder="Your name"
                required
              />
              <button className="contact2__btn" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT */}
        <div className="contact2__right">
          <h2 className="contact2__title">Get in Touch</h2>
          <p className="contact2__desc">
            We appreciate each customer and we are proud that 60% of clients come
            back to work with us again.
          </p>

          <div className="contact2__info">
            <a className="contact2__infoItem" href="tel:+212608636666">
              <span className="contact2__icon" aria-hidden="true">☎</span>
              +212 608 636 666
            </a>

            <a className="contact2__infoItem" href="mailto:info@designmodo.com">
              <span className="contact2__icon" aria-hidden="true">✉</span>
              info@douiou.com
            </a>
          </div>

          <hr className="contact2__divider" />

          <h3 className="contact2__smallTitle">We are on Socials</h3>

          <div className="contact2__socials">
            <a href="#" className="contact2__social">Facebook</a>
            <a href="#" className="contact2__social">Dribbble</a>
            <a href="#" className="contact2__social">Twitter</a>
            <a href="#" className="contact2__social">Behance</a>
            <a href="#" className="contact2__social">Pinterest</a>
            <a href="#" className="contact2__social">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
