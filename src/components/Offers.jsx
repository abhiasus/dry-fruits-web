import { Link } from 'react-router-dom';
import { products, images, money } from '../data.js';

const deals = [
  { title: 'The Everyday Duo', label: 'A little treat for your routine', discount: 'SAVE 10%', featured: products[0], price: 989, image: images.catCashews },
  { title: 'The Celebration Box', label: 'For hosts, homes and happy days', discount: 'GIFT FAVOURITE', featured: products[8], price: 1299, image: images.mixedDryfruits },
  { title: 'The Golden Snack Set', label: 'Sweet, crunchy and ready to share', discount: 'SAVE 15%', featured: products[4], price: 1099, image: images.catDriedFruits },
];

export default function Offers({ addToCart }) {
  return (
    <>
      <section className="page-hero container" data-aos="fade-up">
        <img src={images.offersBanner} alt="A premium gift box of dry fruits" />
        <div className="page-hero-overlay">
          <span className="eyebrow">A LITTLE EXTRA LOVELY</span>
          <h1>Good things. <em>Better together.</em></h1>
          <p>Discover curated combinations for sharing, celebrating and treating yourself.</p>
        </div>
      </section>

      <section className="container section-pad">
        <div className="section-heading" data-aos="fade-up">
          <span className="eyebrow">THOUGHTFULLY PAIRED</span>
          <h2>Special <em>offers</em></h2>
          <p>Limited-time concepts shown as sample promotions. Add a featured product to your bag to explore the cart.</p>
        </div>
        <div className="row g-4">
          {deals.map((deal, index) => (
            <div className="col-md-6 col-lg-4" key={deal.title} data-aos="fade-up" data-aos-delay={index * 100}>
              <article className="offer-card">
                <div className="offer-image">
                  <img src={deal.image} alt={deal.title} />
                  <span>{deal.discount}</span>
                </div>
                <div className="offer-info">
                  <small>{deal.label}</small>
                  <h3>{deal.title}</h3>
                  <p>A considered selection, wrapped up in the Royal Kernel spirit.</p>
                  <div className="offer-price"><b>{money(deal.price)}</b><span>Curated set</span></div>
                  <button className="btn btn-wine w-100" onClick={() => addToCart(deal.featured)}><i className="bi bi-bag-plus me-2" />Add featured item</button>
                </div>
              </article>
            </div>
          ))}
        </div>
        <div className="offer-note" data-aos="fade-up"><i className="bi bi-info-circle me-2" />Promotional prices and discounts are illustrative for this demo website. The button adds the featured item, not a bundled set.</div>
      </section>

      <section className="gift-cta">
        <div className="container gift-cta-inner" data-aos="fade-up">
          <div>
            <span className="eyebrow">A GIFT THAT FEELS PERSONAL</span>
            <h2>Make someone’s day<br /><em>a little more golden.</em></h2>
            <p>Need a thoughtful gift for a celebration, visit or special milestone?</p>
          </div>
          <Link to="/contact" className="btn btn-gold">Ask about gifting <i className="bi bi-arrow-up-right ms-2" /></Link>
        </div>
      </section>
    </>
  );
}