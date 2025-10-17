import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import the router
import { auth } from './store/auth' // Import the auth store

// Check for an existing session when the app starts
auth.initialize(); 

createApp(App).use(router).mount('#app') // Tell Vue to use the router
