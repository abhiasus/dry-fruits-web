import hero from './assets/images/hero.jpg';
import aboutBanner from './assets/images/about-banner.jpg';
import cartBanner from './assets/images/cart-banner.jpg';
import contactBanner from './assets/images/contact-banner.jpg';
import offersBanner from './assets/images/offers-banner.jpg';
import mixedDryfruits from './assets/images/mixed-dryfruits.jpg';
import almonds from './assets/images/almonds.jpg';
import cashews from './assets/images/cashews.jpg';
import pistachios from './assets/images/pistachios.jpg';
import walnuts from './assets/images/walnuts.jpg';
import dates from './assets/images/dates.jpg';
import raisins from './assets/images/raisins.jpg';
import driedApricots from './assets/images/dried-apricots.jpg';
import seedsMix from './assets/images/seeds-mix.jpg';
import catAlmonds from './assets/images/category-almonds.jpg';
import catCashews from './assets/images/category-cashews.jpg';
import catDriedFruits from './assets/images/category-driedfruits.jpg';
import catMixedNuts from './assets/images/category-mixednuts.jpg';
import catPistachios from './assets/images/category-pistachios.jpg';
import catSeeds from './assets/images/category-seeds.jpg';

export const images = {
  hero, aboutBanner, cartBanner, contactBanner, offersBanner, mixedDryfruits,
  catAlmonds, catCashews, catDriedFruits, catMixedNuts, catPistachios, catSeeds,
};

export const categories = ['All', 'Nuts', 'Dried Fruits', 'Seeds', 'Gift Hampers'];

export const products = [
  { id: 1, name: 'California Almonds', category: 'Nuts', price: 499, weight: '500 g', image: almonds, description: 'Crunchy, carefully selected almonds with a naturally rich flavour.' },
  { id: 2, name: 'Premium Cashews', category: 'Nuts', price: 599, weight: '500 g', image: cashews, description: 'Creamy whole cashews selected for their smooth texture.' },
  { id: 3, name: 'Pistachio Royale', category: 'Nuts', price: 799, weight: '500 g', image: pistachios, description: 'Delicious pistachios for snacking, sharing and entertaining.' },
  { id: 4, name: 'California Walnuts', category: 'Nuts', price: 699, weight: '500 g', image: walnuts, description: 'Earthy, satisfying walnut kernels for everyday nourishment.' },
  { id: 5, name: 'Ajwa Dates', category: 'Dried Fruits', price: 449, weight: '500 g', image: dates, description: 'Soft, naturally sweet dates with a rich caramel-like taste.' },
  { id: 6, name: 'Golden Raisins', category: 'Dried Fruits', price: 299, weight: '500 g', image: raisins, description: 'Sweet golden raisins for baking, breakfast bowls and snacking.' },
  { id: 7, name: 'Dried Apricots', category: 'Dried Fruits', price: 499, weight: '500 g', image: driedApricots, description: 'Bright, tender dried apricots with a sweet-tart finish.' },
  { id: 8, name: 'Chia & Seed Mix', category: 'Seeds', price: 349, weight: '400 g', image: seedsMix, description: 'A versatile seed blend for smoothies, oats and salads.' },
  { id: 9, name: 'Royal Celebration Box', category: 'Gift Hampers', price: 1299, weight: '1 box', image: mixedDryfruits, description: 'A thoughtfully arranged assortment for special moments.' },
];

export const money = (amount) => new Intl.NumberFormat('en-IN', {
  style: 'currency', currency: 'INR', maximumFractionDigits: 0,
}).format(amount);