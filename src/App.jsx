import { useEffect, useState } from 'react';
import { Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AOS from 'aos';
import Home from './components/Home.jsx';
import Products from './components/Products.jsx';
import About from './components/About.jsx';
import Offers from './components/Offers.jsx';
import Contact from './components/Contact.jsx';
import Cart from './components/Cart.jsx';
import { products } from './data.js';

const navLinks = [
  ['/', 'Home'],
  ['/products', 'Products'],
  ['/offers', 'Offers'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
];

function Brand() {
  return (
    <Link className="navbar-brand rk-brand" to="/">
      <span className="brand-mark"><i className="bi bi-flower1" /></span>
      <span>ROYAL <b>KERNEL</b><small>PREMIUM DRY FRUITS</small></span>
    </Link>
  );
}

function Header({ cartCount }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);

  const linkClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`;

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg navbar-dark rk-navbar">
        <div className="container">
          <Brand />
          <button className="navbar-toggler" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse${open ? ' show' : ''}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              {navLinks.map(([to, label]) => (
                <li className="nav-item" key={to}>
                  <NavLink className={linkClass} to={to} end={to === '/'}>{label}</NavLink>
                </li>
              ))}
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link cart-nav${isActive ? ' active' : ''}`} to="/cart">
                  <i className="bi bi-bag me-1" /> Cart <span className="cart-count">{cartCount}</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Brand />
          <p>Thoughtfully selected goodness for everyday rituals and memorable gifts.</p>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/products">Our collection</Link>
          <Link to="/offers">Special offers</Link>
          <Link to="/about">Our story</Link>
        </div>
        <div className="footer-col">
          <h4>We're here</h4>
          <Link to="/contact">Contact us</Link>
          <a href="mailto:hello@royalkernel.example">hello@royalkernel.example</a>
          <span>Mon–Sat · 9 AM–6 PM</span>
        </div>
        <div className="footer-col">
          <h4>Follow along</h4>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="bi bi-instagram" /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="bi bi-facebook" /></a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest"><i className="bi bi-pinterest" /></a>
          </div>
          <span>Made for sharing.</span>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} Royal Kernel. All rights reserved.</span>
        <span>Good things, beautifully chosen.</span>
      </div>
    </footer>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState('');
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 750, once: true, offset: 70, easing: 'ease-out-cubic' });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    AOS.refreshHard();
  }, [location.pathname]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(''), 2200);
    return () => clearTimeout(timer);
  }, [toast]);

  const addToCart = (product) => {
    setCart((current) => {
      const found = current.find((item) => item.id === product.id);
      if (found) return current.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      return [...current, { ...product, quantity: 1 }];
    });
    setToast(`${product.name} added to your bag`);
  };

  const changeQuantity = (id, amount) => setCart((current) => current
    .map((item) => (item.id === id ? { ...item, quantity: item.quantity + amount } : item))
    .filter((item) => item.quantity > 0));
  const removeFromCart = (id) => setCart((current) => current.filter((item) => item.id !== id));
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="site-shell">
      <Header cartCount={cartCount} />
      <main>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/products" element={<Products products={products} addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/offers" element={<Offers addToCart={addToCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cart={cart} cartCount={cartCount} cartTotal={cartTotal} changeQuantity={changeQuantity} removeFromCart={removeFromCart} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <div className={`toast-note${toast ? ' show' : ''}`} role="status" aria-live="polite">
        <i className="bi bi-bag-check me-2" />{toast}
      </div>
    </div>
  );
}