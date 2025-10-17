<template>
  <nav>
    <router-link to="/">
      <img src="@/assets/images/scentsational-logo.png" alt="ScentSational Logo" class="logo" />
    </router-link>
    
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/product">Fragrances</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>

    <div class="nav-actions">
      <router-link to="/cart" class="cart-link">
        Cart ({{ cartItemCount }})
      </router-link>
      
      <router-link v-if="!auth.isAuthenticated" to="/signin" class="signin-btn">Sign In</router-link>
      <button v-else @click="handleLogout" class="signin-btn logout-btn">Log Out</button>

    </div>
  </nav>
</template>

<script>
import { cart } from '@/store/cart.js';
import { auth } from '@/store/auth.js'; // Import the new auth store

export default {
  name: 'TheNavbar',
  data() {
    return {
      cart: cart,
      auth: auth, // Make the auth state available to the template
    };
  },
  computed: {
    cartItemCount() {
      // Safely calculate item count
      return this.cart.items.reduce((count, item) => count + (item.quantity || 0), 0);
    }
  },
  methods: {
    handleLogout() {
      this.auth.logout();
      alert('You have been logged out.');
      this.$router.push('/signin'); // Redirect to the sign-in page after logout
    }
  }
};
</script>

<style scoped>
/* Main navbar layout */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%; /* Use percentage for responsiveness */
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
}

.logo {
  height: 40px; /* Adjust as needed */
}

/* Navigation links */
ul {
  display: flex;
  list-style: none;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
}

ul a {
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  position: relative;
  padding-bottom: 5px;
}

/* Underline effect on hover for main links */
ul a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #1A1A2E;
  transition: width 0.3s ease;
}

ul a:hover::after {
  width: 100%;
}

/* Right-side action items */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem; /* Space between Cart and Sign In button */
}

.cart-link {
  font-weight: normal;
  text-decoration: none;
  color: #333;
  font-size: 1rem;
}

/* === STYLES FOR THE SIGN IN / LOG OUT BUTTON === */
.signin-btn {
  background-color: #1A1A2E; /* Dark purple from your site's theme */
  color: #ffffff;
  padding: 0.6rem 1.5rem;
  border-radius: 99999px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem;  
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-right: 5vw;
  border: none;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
}

.signin-btn:hover {
  background-color: #150025; /* Slightly lighter shade for hover */
  transform: translateY(-2px); /* Add a subtle lift effect */
}

.logout-btn {
    background-color: #5a0e0e;
}
.logout-btn:hover {
    background-color: #c53030;
}
</style>