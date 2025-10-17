<template>
  <div class="auth-wrapper">
    <div class="auth-card">
      <div class="auth-image-panel">
        <div class="overlay-content">
          <img src="@/assets/images/scentsational-logo.png" alt="ScentSational Logo" class="logo" />
          <h1>Welcome Back</h1>
          <p>Rediscover your signature scent.</p>
        </div>
      </div>

      <div class="auth-form-panel">
        <h2>Sign In</h2>
        <p>Please enter your details to continue.</p>
        <form @submit.prevent="handleSignIn" class="auth-form">
          <div class="form-group">
            <label for="username">Username</label>
            <input v-model="username" id="username" name="username" type="text" placeholder="Enter your username" required>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input v-model="password" id="password" name="password" type="password" placeholder="Enter your password" required>
          </div>
          <button type="submit" class="btn-submit">Sign In</button>
        </form>
        <p class="auth-switch">
          Don't have an account yet?
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { auth } from '@/store/auth.js'; // Import the auth store

export default {
  name: 'SignInView',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleSignIn() {
      const credentials = {
        username: this.username,
        password: this.password,
      };
      axios.post('/api/signin', credentials)
        .then(response => {
          console.log('Sign in successful:', response.data);
          auth.login(response.data.user); // Log the user in
          alert('Welcome back!');
          this.$router.push('/');
        })
        .catch(error => {
          console.error('Sign in error:', error.response ? error.response.data : error.message);
          const errorMessage = error.response ? error.response.data.error : 'An unknown error occurred.';
          alert('Error: ' + errorMessage);
        });
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Playfair+Display:wght@700&display=swap');

.auth-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f9;
  padding: 2rem;
  font-family: 'Montserrat', sans-serif;
}

.auth-card {
  display: flex;
  max-width: 900px;
  width: 100%;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  animation: fadeIn 0.8s ease-out;
}

.auth-image-panel {
  flex: 1;
  background: url('@/assets/images/hero-img.jpg') no-repeat center center/cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  color: #fff;
}

.auth-image-panel::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(21, 0, 37, 0.8), rgba(75, 0, 130, 0.6));
  z-index: 1;
}

.overlay-content {
  position: relative;
  z-index: 2;
  animation: slideInUp 0.7s ease-out 0.2s backwards;
}

.logo {
  width: 80px;
  margin-bottom: 1rem;
}

.overlay-content h1 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.overlay-content p {
  font-size: 1rem;
  opacity: 0.9;
}

.auth-form-panel {
  flex: 1;
  padding: 3rem 4rem;
}

.auth-form-panel h2 {
  font-family: 'Playfair Display', serif;
  color: #150025;
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

.auth-form-panel p {
  color: #6b7280;
  margin-bottom: 2rem;
}

.auth-form .form-group {
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: slideInUp 0.6s ease-out forwards;
}

.auth-form .form-group:nth-child(1) { animation-delay: 0.3s; }
.auth-form .form-group:nth-child(2) { animation-delay: 0.4s; }

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: #333;
}

.form-group input {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: #4B0082;
  box-shadow: 0 0 0 4px rgba(75, 0, 130, 0.1);
}

.btn-submit {
  width: 100%;
  padding: 0.9rem;
  background: #150025;
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 1rem;
  transition: all 0.3s ease;
  opacity: 0;
  animation: slideInUp 0.6s ease-out 0.5s forwards;
}

.btn-submit:hover {
  background: #4B0082;
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.auth-switch {
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
}

.auth-switch a {
  color: #4B0082;
  font-weight: 700;
  text-decoration: none;
}

.auth-switch a:hover {
  text-decoration: underline;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes slideInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive */
@media (max-width: 768px) {
  .auth-card {
    flex-direction: column;
  }
  .auth-form-panel {
    padding: 2.5rem;
  }
}
</style>