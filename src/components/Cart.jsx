import { Link } from 'react-router-dom';
import { images, money } from '../data.js';

export default function Cart({ cart, cartCount, cartTotal, changeQuantity, removeFromCart }) {
  const checkout = () => window.alert('Thank you! Checkout is a demo and is not connected to a payment gateway.');

  return (
    <>
      <section className="page-hero container" data-aos="fade-up">
        <img src={images.cartBanner} alt="Dry fruits in a shopping basket" />
        <div className="page-hero-overlay">
          <span className="eyebrow">YOUR ROYAL SELECTION</span>
          <h1>Your <em>shopping bag.</em></h1>
          <p>{cartCount ? `${cartCount} item${cartCount === 1 ? '' : 's'} in your bag` : 'Your next favourite is waiting to be discovered.'}</p>
        </div>
      </section>

      <section className="cart-page container section-pad">
        {cart.length === 0 ? (
          <div className="empty-state" data-aos="fade-up">
            <span className="empty-bag"><i className="bi bi-bag-heart" /></span>
            <h3>Your bag is taking a little rest.</h3>
            <p>Browse our collection and add something lovely.</p>
            <Link className="btn btn-wine" to="/products">Explore products <i className="bi bi-arrow-right ms-2" /></Link>
          </div>
        ) : (
          <div className="row g-4 align-items-start">
            <div className="col-lg-8" data-aos="fade-up">
              <div className="cart-table-wrap">
                <table className="table cart-table align-middle">
                  <thead>
                    <tr><th>Product</th><th>Price</th><th>Quantity</th><th>Total</th><th /></tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="cart-product">
                            <img src={item.image} alt={item.name} />
                            <div><b>{item.name}</b><small>{item.weight}</small></div>
                          </div>
                        </td>
                        <td>{money(item.price)}</td>
                        <td>
                          <div className="quantity-control">
                            <button aria-label={`Decrease ${item.name}`} onClick={() => changeQuantity(item.id, -1)}>-</button>
                            <span>{item.quantity}</span>
                            <button aria-label={`Increase ${item.name}`} onClick={() => changeQuantity(item.id, 1)}>+</button>
                          </div>
                        </td>
                        <td><b>{money(item.price * item.quantity)}</b></td>
                        <td><button className="remove-item" aria-label={`Remove ${item.name}`} onClick={() => removeFromCart(item.id)}><i className="bi bi-trash3" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Link to="/products" className="continue-link"><i className="bi bi-arrow-left me-2" />Continue shopping</Link>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <aside className="order-summary">
                <span className="eyebrow">THE TOTAL</span>
                <h3>Order summary</h3>
                <div className="summary-row"><span>Subtotal</span><b>{money(cartTotal)}</b></div>
                <div className="summary-row"><span>Delivery</span><span className="free-delivery">Calculated at checkout</span></div>
                <div className="summary-row"><span>Taxes</span><span>Included in demo prices</span></div>
                <hr />
                <div className="summary-total"><span>Total</span><b>{money(cartTotal)}</b></div>
                <button className="btn btn-gold w-100 mt-4" onClick={checkout}>Proceed to checkout <i className="bi bi-arrow-right ms-2" /></button>
                <p className="summary-note"><i className="bi bi-shield-check me-2" />Secure checkout preview. No payment will be taken.</p>
              </aside>
            </div>
          </div>
        )}
      </section>
    </>
  );
}