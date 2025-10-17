import { reactive } from 'vue';

export const cart = reactive({
  items: [],
  
  // Method to add a product to the cart
  addItem(product) {
    const existingItem = this.items.find(item => item._id === product._id);
    
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
    
    console.log('Cart updated:', this.items);
    alert(`${product.name} has been added to your cart!`);
  },

  // ADD THIS METHOD: It finds the item by its ID and removes it from the array.
  removeItem(productId) {
    const index = this.items.findIndex(item => item._id === productId);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log('Item removed from cart:', productId);
    }
  }
});

