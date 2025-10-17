<template>
  <div>
    <header class="hero-section" :style="heroStyle">
      <div class="hero-content">
        <h1>Discover Your Signature Scent</h1>
        <p>Welcome to ScentSational, where we craft unique and captivating fragrances for every personality and occasion.</p>
        <router-link to="/product" class="cta-btn">Explore Fragrances</router-link>
      </div>
    </header>

    <main class="home-main">
      <section class="featured-products">
        <h2 class="section-title">Our Best Sellers</h2>
        <div class="product-grid">
          <div v-for="product in bestSellers" v-bind:key="product._id" class="product-card">
            <img :src="product.imageUrl" :alt="product.name" class="product-image">
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-notes">{{ product.category ? product.category.name : '' }}</p>
            <router-link to="/product" class="product-link">View Details</router-link>
          </div>
        </div>
      </section>

      <section class="brand-promise">
        <div class="promise-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20.34c.37-1.42.24-2.53-.5-3.08-.94-.69-2.5-1.1-4.5-1.26-2-.16-3.87.2-5.5.9-1.63.7-3.13 1.73-4.5 3.1M12 21.34V5.5C12 4 11 2 9.5 2c-1.12 0-2.34.6-3.5 1.5M12 5.5c0 1.5 1 3 2.5 3s2.5-1.5 2.5-3C17 4 16 2 14.5 2c-1.12 0-2.34.6-3.5 1.5"/></svg>
          <h4>Sustainable Ingredients</h4>
          <p>Ethically sourced botanicals for a pure and clean fragrance.</p>
        </div>
        <div class="promise-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          <h4>Cruelty-Free</h4>
          <p>We believe in beauty without compromise. Never tested on animals.</p>
        </div>
        <div class="promise-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          <h4>Long-Lasting</h4>
          <p>Our fragrances are expertly formulated to last all day and night.</p>
        </div>
      </section>

      <section class="testimonials">
        <h2 class="section-title">What Our Customers Say</h2>
        <div class="testimonial-quote">
          <blockquote>
            "This is the most unique and beautiful scent I have ever worn. I get compliments everywhere I go. I've found my forever fragrance!"
          </blockquote>
          <cite>— Alex R.</cite>
        </div>
      </section>

      <section class="newsletter-signup">
        <h3>Join Our World</h3>
        <p>Get exclusive offers and be the first to know about new collections.</p>
        <form @submit.prevent class="newsletter-form">
          <input type="email" placeholder="Enter your email address">
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import heroImage from '@/assets/images/hero-img.jpg';

export default {
  name: 'HomeView',
  data() {
    return {
      products: [],
      heroStyle: {
        backgroundImage: `url(${heroImage})`
      }
    };
  },
  computed: {
    bestSellers() {
      return this.products.slice(0, 3);
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
    }
  }
};
</script>

<style scoped>
/* Scoped CSS ensures these styles only apply to the HomeView component */

/* General Section Styling */
.home-main {
  font-family: 'Montserrat', sans-serif;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 40px;
  color: #111827; /* Dark text */
  font-family: 'Playfair Display', serif;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 70vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-content h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 2rem auto;
  line-height: 1.6;
}

.cta-btn {
  background-color: #fff;
  color: #111827;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 999999px;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.cta-btn:hover {
  background-color: #150025;
  color: #ffffff;
}

/* Featured Products Section */
.featured-products {
  padding: 60px 20px;
  max-width: 1100px;
  margin: 0 auto;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.product-card {
  text-align: center;
  border: 1px solid #e5e7eb;
  padding: 20px;
  border-radius: 8px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.product-image {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 4px;
}

.product-name {
  font-size: 1.25rem;
  font-weight: bold;
  color: #111827;
}

.product-notes {
  color: #6b7280;
  margin: 0.5rem 0 1rem 0;
}

.product-link {
  color: #111827;
  text-decoration: underline;
  font-weight: 600;
}

/* Brand Promise Section */
.brand-promise {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 20px;
  text-align: center;
  background-color: #f9fafb;
}

.promise-item svg {
  margin-bottom: 1rem;
  color: #374151;
}

.promise-item h4 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #111827;
}

.promise-item p {
  color: #6b7280;
  line-height: 1.6;
}

/* Testimonials Section */
.testimonials {
  padding: 80px 20px;
  background-color: #fff;
}

.testimonial-quote {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.testimonial-quote blockquote {
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  font-style: italic;
  line-height: 1.5;
  color: #111827;
  margin: 0 0 1rem 0;
  border: none;
  padding: 0;
}

.testimonial-quote cite {
  font-weight: bold;
  color: #374151;
  font-style: normal;
}

/* Newsletter Signup Section */
.newsletter-signup {
  padding: 60px 20px;
  background-color: #30083a;
  color: #fff;
  text-align: center;
}

.newsletter-signup h3 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.newsletter-form {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.newsletter-form input {
  width: 300px;
  padding: 10px;
  border: 1px solid #4b5563;
  border-radius: 4px;
  background-color: #150025;
  color: #fff;
}

.newsletter-form button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #fff;
  color: #111827;
  font-weight: bold;
  cursor: pointer;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  .product-grid, .brand-promise {
    grid-template-columns: 1fr;
  }
  .newsletter-form {
    flex-direction: column;
    align-items: center;
  }
}
</style>

