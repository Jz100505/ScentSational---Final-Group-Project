<template>
  <div class="auth-wrapper">
    <div class="auth-card">
      <!-- Image Panel -->
      <div class="auth-image-panel">
        <div class="overlay-content">
          <img src="@/assets/images/scentsational-logo.png" alt="ScentSational Logo" class="logo" />
          <h1>Create Your World</h1>
          <p>Join our community of fragrance lovers.</p>
        </div>
      </div>

      <!-- Form Panel -->
      <div class="auth-form-panel">
        <h2>Create an Account</h2>
        <p>Start your scent journey with us.</p>
        <form @submit.prevent="handleSignUp" class="auth-form">
          <div class="form-group">
            <label for="fullName">Full Name</label>
            <input v-model="fullName" id="fullName" type="text" placeholder="Enter your full name" required>
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <input v-model="username" id="username" type="text" placeholder="Create a username" required>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input v-model="password" id="password" type="password" placeholder="Create a strong password" required>
          </div>
          <button type="submit" class="btn-submit">Sign Up</button>
        </form>
        <p class="auth-switch">
          Already have an account?
          <router-link to="/signin">Sign In</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignUpView',
  data() {
    return {
      fullName: '',
      username: '',
      password: '',
    };
  },
  methods: {
    handleSignUp() {
      const newUser = {
        fullName: this.fullName,
        username: this.username,
        password: this.password,
      };
      axios.post('/api/signup', newUser)
        .then(response => {
          console.log('Sign up successful:', response.data);
          alert('Account created successfully! Please sign in.');
          this.$router.push('/signin'); // Redirect to sign-in page
        })
        .catch(error => {
          console.error('Sign up error:', error.response.data);
          alert('Error: ' + error.response.data.error);
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
  background: url('@/assets/images/about-hero.png') no-repeat center center/cover;
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
.auth-form .form-group:nth-child(3) { animation-delay: 0.5s; }

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
  animation: slideInUp 0.6s ease-out 0.6s forwards;
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
