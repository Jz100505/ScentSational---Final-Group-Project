<template>
  <div>
    <header class="hero" :style="heroStyle">
      <div class="hero-overlay">
        <div class="hero-text">
          <h1>SMELL THE HEAVEN</h1>
          <p>The best perfume for you.</p>
        </div>
      </div>
    </header>

    <section v-if="featuredProduct" class="featured-product-section">
      <div class="featured-product-card">
        <div class="featured-image-container">
          <img :src="featuredProduct.imageUrl" :alt="featuredProduct.name" class="featured-product-image">
        </div>
        <div class="featured-product-info">
          <h2>{{ featuredProduct.name }}</h2>
          <p class="product-description">An exquisite blend of captivating notes, designed to leave a lasting impression. This signature scent is the epitome of elegance and sophistication.</p>
          <div class="price">₱{{ featuredProduct.price }}</div>
          <div class="stars">★★★★★</div>
          <button @click="addToCart(featuredProduct)" class="btn-add">Add to Cart</button>
        </div>
      </div>
    </section>

    <main class="product-container">
      <h2 class="section-title">Meet the Best of the Best</h2>
      <div class="product-grid">
        <div 
          v-for="item in otherProducts" 
          :key="item._id" 
          class="product-card"
        >
          <img :src="item.imageUrl" :alt="item.name" class="product-card-img">
          <div class="product-card-body">
            <h3>{{ item.name }}</h3>
            <div class="price">₱{{ item.price }}</div>
            <button @click="addToCart(item)" class="btn-add-small">Add to Cart</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import { cart } from '@/store/cart.js';
import heroImage from '@/assets/images/about-hero.png';

export default {
  name: 'ProductView',
  data() {
    return {
      products: [],
      heroStyle: {
        backgroundImage: `url(${heroImage})`,
      },
    };
  },
  computed: {
    featuredProduct() {
      return this.products.length > 0 ? this.products[0] : null;
    },
    otherProducts() {
      return this.products.slice(1);
    }
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      axios.get('/api/products')
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
    },
    addToCart(item) {
      cart.addItem(item);
    }
  }
};
</script>

<style scoped>
/* --- Color and Font Variables --- */
:root {
  --indigo-dark: #192a56; /* Deep Navy Indigo */
  --indigo-light: #4a69bd; /* Lighter, vibrant indigo */
  --white: #FFFFFF;
  --off-white: #f8f9fa;
  --text-dark: #2c3e50;
  --text-light: #84817a;
  --font-serif: 'Georgia', 'Times New Roman', serif;
  --font-sans: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
}

/* --- General Styles --- */
.hero, .product-container {
  font-family: var(--font-sans);
}

/* --- Hero Section --- */
.hero {
  height: 40vh;
  background-size: cover;
  background-position: center 25%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-overlay {
  background: rgba(25, 42, 86, 0.4); /* Indigo overlay */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-text {
  text-align: center;
  color: var(--white);
  padding: 0 1rem;
}

.hero-text h1 {
  font-family: var(--font-serif);
  font-size: 3rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.4);
}
.hero-text p {
  font-size: 1.1rem;
  max-width: 500px;
  margin-top: 0.5rem;
}


/* --- Featured Product Section --- */
.featured-product-section {
  padding: 3rem 1.5rem;
  background-color: var(--off-white);
  display: flex;
  justify-content: center;
}

.featured-product-card {
  display: flex;
  flex-direction: row;
  max-width: 900px;
  width: 100%;
  background: var(--white);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.featured-image-container {
  flex: 1;
}

.featured-product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-product-info {
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.featured-product-info h2 {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  color: var(--indigo-dark);
  margin: 0 0 1rem;
}

.product-description {
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

/* --- General Product Styles (Shared) --- */
.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--indigo-light);
  margin: 0.5rem 0;
}

.stars {
  color: #f6e05e;
  margin-bottom: 1.5rem;
}

.btn-add, .btn-add-small {
  background-color: var(--indigo-dark);
  color: var(--white);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  padding: 0.8rem 2rem;
}

.btn-add:hover, .btn-add-small:hover {
  background-color: #000;
  color: #fff;
  transform: scale(1.05);
}

.btn-add-small {
  padding: 0.6rem 1.5rem;
  font-size: 0.9rem;
}

/* --- Best Sellers Grid Section --- */
.product-container {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1.5rem;
}

.section-title {
  font-family: var(--font-serif);
  text-align: center;
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--indigo-dark);
  margin-bottom: 2.5rem;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.product-card {
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.product-card-img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.product-card-body {
  padding: 1.5rem;
  text-align: center;
}

.product-card-body h3 {
  color: var(--text-dark);
  font-size: 1.3rem;
  margin: 0 0 0.5rem;
}
</style>