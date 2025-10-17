<template>
  <main class="content-wrapper">
    <h2>Your Shopping Bag</h2>
    <div v-if="cart.items.length === 0" class="cart-empty">
      <p>Your shopping bag is empty.</p>
      <router-link to="/product" class="btn-shop">Discover Fragrances</router-link>
    </div>
    <div v-else class="cart-layout">
      <div class="cart-items">
        <div v-if="isCheckingOut" class="shipping-form">
          <h3>Shipping Details</h3>
          <form @submit.prevent="placeOrder">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" v-model="shippingDetails.name" required>
            </div>
            <div class="form-group">
              <label for="address">Address</label>
              <input type="text" id="address" v-model="shippingDetails.address" required>
            </div>
            <div class="form-group">
              <label for="city">City</label>
              <input type="text" id="city" v-model="shippingDetails.city" required>
            </div>
            <div class="form-group">
              <label for="postalCode">Postal Code</label>
              <input type="text" id="postalCode" v-model="shippingDetails.postalCode" required>
            </div>
            <div class="form-group">
              <label for="country">Country</label>
              <input type="text" id="country" v-model="shippingDetails.country" required>
            </div>
          </form>
        </div>

        <div v-else>
          <div v-for="item in cart.items" :key="item._id" class="cart-item">
            <img :src="item.imageUrl" :alt="item.name" class="cart-item-img">
            <div class="cart-item-details">
              <h3>{{ item.name }}</h3>
              <p class="price">Price: ₱{{ item.price }}</p>
              <p class="quantity">Quantity: {{ item.quantity }}</p>
            </div>
            <div class="cart-item-total">
              ₱{{ item.price * item.quantity }}
            </div>
            <button @click="removeItem(item._id)" class="btn-remove" title="Remove item">&times;</button>
          </div>
        </div>
      </div>

      <div class="cart-summary-card">
        <div class="cart-summary">
          <h3>Order Summary</h3>
          <div class="summary-row">
            <span>Subtotal</span>
            <span>₱{{ cartTotal }}</span>
          </div>
          <div class="summary-row">
            <span>Shipping</span>
            <span>FREE</span>
          </div>
          <div class="summary-total">
            <h3>Total: ₱{{ cartTotal }}</h3>
          </div>
          <button v-if="!isCheckingOut" @click="isCheckingOut = true" class="btn-checkout">Proceed to Checkout</button>
          <button v-else @click="placeOrder" class="btn-checkout">Place Order</button>
           <button v-if="isCheckingOut" @click="isCheckingOut = false" class="btn-back">Back to Cart</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { cart } from '@/store/cart.js';
import axios from 'axios';

export default {
  name: 'CartView',
  data() {
    return {
      cart: cart,
      isCheckingOut: false,
      shippingDetails: {
        name: '',
        address: '',
        city: '',
        postalCode: '',
        country: ''
      }
    };
  },
  computed: {
    cartTotal() {
      return this.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
  },
  methods: {
    placeOrder() {
      if (!this.shippingDetails.name || !this.shippingDetails.address || !this.shippingDetails.city || !this.shippingDetails.postalCode || !this.shippingDetails.country) {
        alert('Please fill out all shipping details.');
        return;
      }

      const orderData = {
        customerName: this.shippingDetails.name,
        items: this.cart.items.map(item => ({
          productId: item._id,
          quantity: item.quantity,
        })),
        totalPrice: this.cartTotal,
      };

      axios.post('/api/orders', orderData)
        .then(response => {
          console.log('Order created:', response.data);
          alert(`Thank you for your order, ${this.shippingDetails.name}! Your order has been placed successfully.`);
          this.cart.items = []; // Clear the cart
          this.isCheckingOut = false; // Go back to the cart view
          this.$router.push('/'); // Redirect to homepage
        })
        .catch(error => {
          console.error('Error placing order:', error);
          alert('There was a problem placing your order.');
        });
    },
    removeItem(productId) {
      cart.removeItem(productId);
    }
  }
};
</script>

<style scoped>
/* --- Color and Font Variables --- */
:root {
  --indigo-dark: #2c3e50;
  --indigo-primary: #4A5568;
  --white: #FFFFFF;
  --off-white: #F7FAFC;
  --text-dark: #2D3748;
  --text-light: #718096;
  --border-color: #E2E8F0;
  --font-serif: 'Georgia', 'Times New Roman', serif;
  --font-sans: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
}

/* --- Main Layout --- */
.content-wrapper {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  font-family: var(--font-sans);
  animation: fadeIn 0.8s ease-out;
}

h2 {
  font-family: var(--font-serif);
  text-align: center;
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--indigo-dark);
  margin-bottom: 2.5rem;
}

.cart-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

@media (max-width: 992px) {
  .cart-layout {
    grid-template-columns: 1fr;
  }
}

/* --- Empty Cart Styles --- */
.cart-empty {
  text-align: center;
  padding: 4rem 0;
  background-color: var(--off-white);
  border-radius: 8px;
}

.cart-empty p {
  font-size: 1.2rem;
  color: var(--text-light);
  margin-bottom: 1.5rem;
}

.btn-shop {
  background-color: var(--indigo-dark);
  color: var(--white);
  padding: 0.8rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn-shop:hover {
  background-color: #000;
  color: #fff;
}


/* --- Cart Items List --- */
.cart-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cart-item {
  display: flex;
  align-items: center;
  background: var(--white);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative; /* Needed for positioning the remove button */
}

.cart-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.cart-item-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1.5rem;
}

.cart-item-details {
  flex-grow: 1;
}

.cart-item-details h3 {
  font-family: var(--font-serif);
  margin: 0 0 0.5rem;
  font-size: 1.3rem;
  color: var(--text-dark);
}

.cart-item-details .price,
.cart-item-details .quantity {
  color: var(--text-light);
  margin: 0.25rem 0;
}

.cart-item-total {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--indigo-primary);
  margin-right: 2.5rem; /* Add space for the remove button */
}

.btn-remove {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--text-light);
    cursor: pointer;
    padding: 0 8px;
    line-height: 1;
    transition: color 0.3s ease, transform 0.2s ease;
}

.btn-remove:hover {
    color: var(--indigo-dark);
    transform: scale(1.1);
}

/* --- Shipping Form --- */
.shipping-form {
  background: var(--white);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
}

.shipping-form h3 {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  color: var(--indigo-dark);
  margin-top: 0;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: var(--text-dark);
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
}


/* --- Cart Summary Card --- */
.cart-summary-card {
  background-color: var(--off-white);
  padding: 2rem;
  border-radius: 8px;
  height: fit-content;
  position: sticky;
  top: 100px; /* Adjust based on your navbar height */
}

.cart-summary h3 {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  color: var(--indigo-dark);
  text-align: center;
  margin-top: 0;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1rem;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: var(--text-light);
}

.summary-total {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.summary-total h3 {
  border: none;
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
}

.btn-checkout {
  width: 100%;
  background-color: var(--indigo-dark);
  color: var(--white);
  border: none;
  padding: 0.9rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 1.5rem;
  transition: background-color 0.3s, transform 0.2s;
}

.btn-checkout:hover {
  background-color: #000;
  color: #fff;
  transform: scale(1.03);
}
.btn-back {
  width: 100%;
  background-color: #000;
  color: #fff;
  border: none;
  padding: 0.9rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 0.5rem;
  transition: background-color 0.3s, transform 0.2s;
}

.btn-back:hover {
  background-color: #5a6268;
  color: #fff;
}

/* --- Animation --- */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

</style>