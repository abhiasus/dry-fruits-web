import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { categories, images, money } from '../data.js';

export default function Products({ addToCart, products }) {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const category = params.get('category') || 'All';

  const visibleProducts = useMemo(() => products.filter((product) => (
    (category === 'All' || product.category === category)
    && product.name.toLowerCase().includes(search.trim().toLowerCase())
  )), [products, category, search]);

  const chooseCategory = (item) => setParams(item === 'All' ? {} : { category: item });
  const clearFilters = () => { setSearch(''); setParams({}); };

  return (
    <>
      <section className="page-hero container" data-aos="fade-up">
        <img src={images.hero} alt="Assorted nuts and dried fruits" />
        <div className="page-hero-overlay">
          <span className="eyebrow">THE ROYAL COLLECTION</span>
          <h1>Find your <em>favourite.</em></h1>
          <p>Everyday essentials, elevated little treats and gifts worth sharing.</p>
        </div>
      </section>

      <section className="container section-pad">
        <div className="catalog-toolbar" data-aos="fade-up">
          <div>
            <span className="eyebrow">SHOP ALL</span>
            <h2>Our <em>collection</em></h2>
            <p>{visibleProducts.length} thoughtfully selected products</p>
          </div>
          <div className="catalog-search">
            <i className="bi bi-search" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search the collection..." aria-label="Search products" />
          </div>
        </div>

        <div className="filter-row" data-aos="fade-up">
          {categories.map((item) => (
            <button key={item} className={`filter-pill${category === item ? ' active' : ''}`} onClick={() => chooseCategory(item)}>{item}</button>
          ))}
        </div>

        <div className="row g-4 mt-2">
          {visibleProducts.map((product, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={product.id} data-aos="fade-up" data-aos-delay={(index % 4) * 60}>
              <article className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <span className="product-tag">ROYAL PICK</span>
                </div>
                <div className="product-info">
                  <small>{product.category}</small>
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-bottom"><b>{money(product.price)}</b><span> / {product.weight}</span></div>
                  <button className="btn btn-outline-wine w-100 mt-3" onClick={() => addToCart(product)}><i className="bi bi-bag-plus me-2" />Add to bag</button>
                </div>
              </article>
            </div>
          ))}
        </div>

        {visibleProducts.length === 0 && (
          <div className="empty-state">
            <i className="bi bi-search" />
            <h3>No products found</h3>
            <p>Try a different name or category.</p>
            <button className="btn btn-wine" onClick={clearFilters}>Clear filters</button>
          </div>
        )}
      </section>
    </>
  );
}