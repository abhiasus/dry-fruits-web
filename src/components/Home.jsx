import { Link } from 'react-router-dom';
import { products, images, money } from '../data.js';

const collections = [
  { label: 'Nuts', image: images.catAlmonds, to: '/products?category=Nuts' },
  { label: 'Dried Fruits', image: images.catDriedFruits, to: '/products?category=Dried%20Fruits' },
  { label: 'Seeds', image: images.catSeeds, to: '/products?category=Seeds' },
  { label: 'Gift Hampers', image: images.catMixedNuts, to: '/products?category=Gift%20Hampers' },
];

export default function Home({ addToCart }) {
  const featured = products.slice(0, 4);

  return (
    <>
      <section className="hero-section container" data-aos="fade-up">
        <div className="hero-copy">
          <span className="eyebrow"><i className="bi bi-stars me-2" />A LITTLE LUXURY, EVERY DAY</span>
          <h1>Nature’s finest.<br /><em>Royally yours.</em></h1>
          <p>Discover handpicked dry fruits, wholesome nuts and thoughtful gifts made for life’s good moments.</p>
          <div className="hero-actions">
            <Link className="btn btn-gold" to="/products">Explore Collection <i className="bi bi-arrow-up-right ms-2" /></Link>
            <Link className="text-link" to="/about">Our story <i className="bi bi-arrow-right ms-1" /></Link>
          </div>
          <div className="hero-note">
            <span><i className="bi bi-patch-check-fill" /> Carefully selected</span>
            <span><i className="bi bi-box-seam-fill" /> Packed with care</span>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img className="hero-image" src={images.mixedDryfruits} alt="A premium assortment of nuts and dry fruits" />
          <div className="hero-stamp"><i className="bi bi-award" /><span>THE ROYAL<br />SELECTION</span></div>
        </div>
      </section>

      <section className="promise-strip container" data-aos="fade-up">
        <div><i className="bi bi-leaf" /><span><b>Nature-led goodness</b><small>Simple, thoughtful choices</small></span></div>
        <div><i className="bi bi-gem" /><span><b>Premium selection</b><small>Chosen for quality</small></span></div>
        <div><i className="bi bi-gift" /><span><b>Beautiful gifting</b><small>Made for every occasion</small></span></div>
        <div><i className="bi bi-truck" /><span><b>Careful delivery</b><small>From us to your home</small></span></div>
      </section>

      <section className="section-pad container">
        <div className="section-heading" data-aos="fade-up">
          <span className="eyebrow">A WORLD OF GOODNESS</span>
          <h2>Shop by <em>collection</em></h2>
          <p>Find your everyday favourites and special-occasion treats.</p>
        </div>
        <div className="row g-4">
          {collections.map((item, index) => (
            <div className="col-6 col-lg-3" key={item.label} data-aos="fade-up" data-aos-delay={index * 80}>
              <Link to={item.to} className="collection-card">
                <img src={item.image} alt={`${item.label} collection`} />
                <span>{item.label} <i className="bi bi-arrow-up-right" /></span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad featured-section">
        <div className="container">
          <div className="heading-row" data-aos="fade-up">
            <div>
              <span className="eyebrow">THE HOUSE FAVOURITES</span>
              <h2 className="heading-title">Picked with <em>purpose</em></h2>
              <p className="heading-sub">Small handfuls. Wonderful moments.</p>
            </div>
            <Link className="text-link" to="/products">View all products <i className="bi bi-arrow-right ms-1" /></Link>
          </div>
          <div className="row g-4">
            {featured.map((product, index) => (
              <div className="col-6 col-lg-3" key={product.id} data-aos="fade-up" data-aos-delay={index * 80}>
                <article className="product-card">
                  <Link to="/products" className="product-image">
                    <img src={product.image} alt={product.name} />
                    <span className="product-tag">HOUSE PICK</span>
                  </Link>
                  <div className="product-info">
                    <small>{product.category}</small>
                    <h3>{product.name}</h3>
                    <div className="product-bottom"><b>{money(product.price)}</b><span> / {product.weight}</span></div>
                    <button className="btn btn-outline-wine w-100 mt-3" onClick={() => addToCart(product)}><i className="bi bi-bag-plus me-2" />Add to bag</button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="story-banner container" data-aos="fade-up">
        <div className="story-banner-image"><img src={images.catPistachios} alt="A bowl of pistachios" /></div>
        <div className="story-banner-copy">
          <span className="eyebrow">THE ROYAL KERNEL PROMISE</span>
          <h2>Good taste begins<br />with <em>good choices.</em></h2>
          <p>We believe the little things matter: the ingredients we choose, the care in every pack and the joy of sharing something lovely.</p>
          <Link to="/about" className="btn btn-wine">Get to know us <i className="bi bi-arrow-right ms-2" /></Link>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container newsletter-inner" data-aos="fade-up">
          <div>
            <span className="eyebrow">A NOTE FROM THE KERNEL</span>
            <h2>A little goodness<br /><em>in your inbox.</em></h2>
            <p>Fresh picks, thoughtful gifting ideas and occasional surprises.</p>
          </div>
          <form className="newsletter-form" onSubmit={(event) => { event.preventDefault(); window.alert('Thank you for joining the Royal Kernel list!'); event.currentTarget.reset(); }}>
            <label className="visually-hidden" htmlFor="homeEmail">Email address</label>
            <input id="homeEmail" type="email" placeholder="Your email address" required />
            <button className="btn btn-gold" type="submit">Join the list <i className="bi bi-arrow-right ms-2" /></button>
            <small>No spam. Just the good stuff.</small>
          </form>
        </div>
      </section>
    </>
  );
}