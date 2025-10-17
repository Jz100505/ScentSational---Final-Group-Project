<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-grid">

        <div class="footer-column">
          <h3 class="brand-name">ScentSational</h3>
          <p>Luxury fragrances crafted with passion and precision.</p>
        </div>

        <div class="footer-column">
          <h4>Shop</h4>
          <ul>
            <li><router-link to="/products">All Fragrances</router-link></li>
            <li><router-link to="/products">New Arrivals</router-link></li>
            <li><router-link to="/products">Best Sellers</router-link></li>
            <li><router-link to="/products">Gift Sets</router-link></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Company</h4>
          <ul>
            <li><router-link to="/about">Our Story</router-link></li>
            <li><router-link to="/about">Sustainability</router-link></li>
            <li><router-link to="/about">Careers</router-link></li>
            <li><router-link to="/about">Press</router-link></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Connect</h4>
          <div class="social-links">
            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-copyright">
        <p>&copy; {{ currentYear }} ScentSational. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      // Makes the year dynamic so it updates automatically
      currentYear: new Date().getFullYear()
    }
  },
}
</script>

<style scoped>
/* Scoped CSS: These styles will only apply to this component */

/* Main Footer Styles */
.site-footer {
  background-color: #150025; /* Dark Slate/Charcoal */
  color: #FFFFFF; /* Light gray for text */
  padding: 40px 24px;
  font-family: 'Montserrat', sans-serif; /* Default font */
}

.footer-container {
  max-width: 1100px;
  margin: 0 auto;
}

/* Grid Layout */
.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 equal columns on desktop */
  gap: 32px; /* Space between columns */
}

/* Align text to the left within each column */
.footer-column {
  text-align: left; 
}

/* Typography */
.brand-name {
  font-family: 'Playfair Display', serif; /* Serif font for the brand */
  color: #FFFFFF;
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 8px 0;
}

.footer-column h4 {
  color: #FFFFFF;
  font-weight: bold;
  font-size: 16px;
  margin: 0 0 16px 0;
}

.footer-column p {
  margin: 0;
  line-height: 1.6;
}

/* Links List */
.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 12px;
}

.footer-column a {
  color: #FFFFFF; /* Muted gray for links */
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-column a:hover {
  color: #FFFFFF; /* White on hover */
}

/* Social Media Icons */
.social-links {
  display: flex;
  gap: 16px; /* Space between icons */
  justify-content: flex-start; /* Align icons to the start (left) */
}

.social-links svg {
  color: #FFFFFF;
  transition: color 0.3s ease;
}

.social-links a:hover svg {
  color: #FFFFFF;
}

/* Copyright Section */
.footer-copyright {
  text-align: center;
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid #374151; /* Divider line */
}

/* Responsive Design for Mobile */
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr; /* Stack columns on top of each other */
  }
  
  /* On mobile, we DO want to center everything */
  .footer-column {
    text-align: center;
  }
  
  .social-links {
    justify-content: center; /* Center the icons on mobile */
  }
}
</style>