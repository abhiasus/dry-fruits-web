import { Link } from 'react-router-dom';
import { images } from '../data.js';

export default function About() {
  return (
    <>
      <section className="page-hero container" data-aos="fade-up">
        <img src={images.aboutBanner} alt="Natural ingredients and nuts on a table" />
        <div className="page-hero-overlay">
          <span className="eyebrow">OUR STORY</span>
          <h1>Goodness, with a <em>royal touch.</em></h1>
          <p>Thoughtful choices. Beautifully simple ingredients. More moments worth sharing.</p>
        </div>
      </section>

      <section className="container section-pad">
        <div className="row align-items-center g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <img className="about-main-image" src={images.catPistachios} alt="A bowl of assorted nuts" />
          </div>
          <div className="col-lg-6 story-copy" data-aos="fade-left">
            <span className="eyebrow">A SMALL THOUGHT, A BIG DIFFERENCE</span>
            <h2>Rooted in nature.<br /><em>Made for sharing.</em></h2>
            <p>Royal Kernel began with a simple belief: the things we enjoy every day deserve a little more care. We bring together dry fruits, nuts, seeds and gift-worthy assortments with a focus on quality, flavour and a lovely experience from first look to last bite.</p>
            <p>From a nourishing afternoon snack to a box chosen for someone special, we want every order to feel considered, welcoming and worth sharing.</p>
            <Link to="/products" className="btn btn-wine">Explore our collection <i className="bi bi-arrow-right ms-2" /></Link>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container section-pad">
          <div className="section-heading" data-aos="fade-up">
            <span className="eyebrow">WHAT WE STAND FOR</span>
            <h2>The details make the <em>difference.</em></h2>
            <p>Our promise is built around the things that matter most.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up">
              <article className="value-card"><span><i className="bi bi-patch-check" /></span><h3>Thoughtful selection</h3><p>We focus on choosing products for their taste, texture and everyday appeal.</p></article>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <article className="value-card"><span><i className="bi bi-box-seam" /></span><h3>Care in every pack</h3><p>We believe presentation and careful packing are part of a good experience.</p></article>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <article className="value-card"><span><i className="bi bi-heart" /></span><h3>Joy in sharing</h3><p>From daily rituals to festive gatherings, good food brings people together.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="container quote-section" data-aos="fade-up">
        <i className="bi bi-quote quote-mark" />
        <p>Make everyday moments feel a little more special.</p>
        <span>THE ROYAL KERNEL WAY</span>
      </section>
    </>
  );
}