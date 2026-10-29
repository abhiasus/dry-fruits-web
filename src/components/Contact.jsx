import { images } from '../data.js';

export default function Contact() {
  const submitContact = (event) => {
    event.preventDefault();
    window.alert('Thank you for contacting Royal Kernel. This demo form is ready for a backend connection.');
    event.currentTarget.reset();
  };

  return (
    <>
      <section className="page-hero container" data-aos="fade-up">
        <img src={images.contactBanner} alt="Natural dry fruits and ingredients" />
        <div className="page-hero-overlay">
          <span className="eyebrow">WE'D LOVE TO HEAR FROM YOU</span>
          <h1>Let's have a <em>good chat.</em></h1>
          <p>Questions about an order, a gift or our collection? Send us a note.</p>
        </div>
      </section>

      <section className="container section-pad">
        <div className="row g-5">
          <div className="col-lg-5" data-aos="fade-right">
            <span className="eyebrow">GET IN TOUCH</span>
            <h2 className="contact-title">Here to help,<br /><em>with care.</em></h2>
            <p className="contact-intro">Tell us what you need. Our team will be happy to help with product questions, gifting enquiries or order support.</p>
            <div className="contact-detail"><span><i className="bi bi-envelope" /></span><div><small>EMAIL US</small><a href="mailto:hello@royalkernel.example">hello@royalkernel.example</a></div></div>
            <div className="contact-detail"><span><i className="bi bi-telephone" /></span><div><small>CALL US</small><a href="tel:+919876543210">+91 98765 43210</a><p>Mon–Sat, 9 AM–6 PM</p></div></div>
            <div className="contact-detail"><span><i className="bi bi-geo-alt" /></span><div><small>VISIT / WRITE TO US</small><p>Royal Kernel Studio<br />Bengaluru, Karnataka, India</p></div></div>
            <div className="contact-social">
              <span>FOLLOW OUR LITTLE WORLD</span>
              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="bi bi-instagram" /></a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="bi bi-facebook" /></a>
                <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest"><i className="bi bi-pinterest" /></a>
              </div>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left">
            <form className="contact-form" onSubmit={submitContact}>
              <span className="eyebrow">SEND A MESSAGE</span>
              <h3>How can we help?</h3>
              <div className="row g-3">
                <div className="col-md-6"><label htmlFor="contactName">Your name</label><input id="contactName" className="form-control" type="text" placeholder="Name" required /></div>
                <div className="col-md-6"><label htmlFor="contactEmail">Email address</label><input id="contactEmail" className="form-control" type="email" placeholder="you@example.com" required /></div>
                <div className="col-12">
                  <label htmlFor="contactTopic">What is this about?</label>
                  <select id="contactTopic" className="form-select" defaultValue="Product enquiry">
                    <option>Product enquiry</option>
                    <option>Order support</option>
                    <option>Corporate gifting</option>
                    <option>Feedback</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div className="col-12"><label htmlFor="contactMessage">Your message</label><textarea id="contactMessage" className="form-control" rows="5" placeholder="Write your message here..." required /></div>
                <div className="col-12">
                  <button className="btn btn-wine" type="submit">Send message <i className="bi bi-arrow-right ms-2" /></button>
                  <small className="form-note">Demo form: messages are not sent to a server yet.</small>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-bottom">
        <div className="container" data-aos="fade-up">
          <i className="bi bi-chat-heart" />
          <h2>Every good conversation<br /><em>starts somewhere.</em></h2>
          <p>We're looking forward to hearing from you.</p>
        </div>
      </section>
    </>
  );
}