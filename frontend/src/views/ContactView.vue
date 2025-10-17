<template>
  <div class="contact-view">
    <div class="contact-header">
      <h1>Get In Touch</h1>
      <p>We'd love to hear from you</p>
    </div>

    <div class="contact-content">
      <div class="contact-info">
        <h2>Contact Information</h2>
        <div class="info-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          <div>
            <span class="info-label">Email: </span><br />
            <a href="mailto:contact@scentsational.com">contact@scentsational.com</a>
          </div>
        </div>
        <div class="info-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <div>
            <span class="info-label">Phone: </span><br />
            <a href="tel:+15551234567">+1 (555) 123-4567</a>
          </div>
        </div>
        <div class="info-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <div>
            <span class="info-label">Address: </span><br />
            <a href="#">1227 Miranda St, cor Sto. Entierro St, Angeles, 2009 Pampanga</a>
          </div>
        </div>
      </div>

      <div class="contact-form-container">
        <form v-on:submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input v-model="form.name" type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="form.email" type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea v-model="form.message" id="message" name="message" rows="6" placeholder="Write your message here" required></textarea>
          </div>
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>
    </div>

    <div class="contact-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.404308512079!2d120.58893807511674!3d15.136124785416206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f3baea52312b%3A0x6002e5e82ea679fb!2sSiglo%20Poblacion!5e0!3m2!1sen!2sph!4v1760425651886!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      alert(`Thank you for your message, ${this.form.name}! We will get back to you at ${this.form.email} shortly.`);
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  },
};
</script>

<style scoped>
/* Define color variables for the indigo and white palette */
:root {
  --indigo-primary: #4B0082; /* Deep indigo for text and accents */
  --indigo-secondary: #6A5ACD; /* Lighter indigo for highlights */
  --white: #FFFFFF; /* Pure white for backgrounds */
  --gray-light: #F5F5F5; /* Subtle light gray for subtle backgrounds */
}

/* General styles for the contact view */
.contact-view {
  background-color: var(--white);
  color: var(--indigo-primary);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Modern, clean font */
  padding: 40px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeInUp 1s ease-out; /* Entrance animation for the whole view */
}

/* Header styles with creative animation */
.contact-header {
  text-align: center;
  margin-bottom: 40px;
  animation: fadeInScale 0.8s ease-in-out;
}

.contact-header h1 {
  font-size: 2.5rem;
  color: var(--indigo-primary);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

.contact-header p {
  font-size: 1.2rem;
  color: var(--indigo-secondary);
  opacity: 0.8;
}

/* Contact content layout */
.contact-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  gap: 40px;
  animation: slideInFromLeft 1s ease-out;
}

@media (max-width: 768px) {
  .contact-content {
    flex-direction: column;
    align-items: center;
  }
}

/* Contact info styles with staggered animations */
.contact-info {
  flex: 1;
  background-color: var(--white);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(75, 0, 130, 0.1); /* Indigo-inspired shadow */
  animation: fadeInStagger 1s ease-out forwards;
}

.contact-info h2 {
  color: var(--indigo-primary);
  border-bottom: 2px solid var(--indigo-secondary);
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  opacity: 0; /* Start hidden for animation */
  animation: fadeInUp 0.6s ease-out 0.2s forwards; /* Delay for stagger */
}

.info-item svg {
  color: var(--indigo-secondary);
  margin-right: 15px;
  transition: transform 0.3s ease; /* Hover animation for icons */
}

.info-item:hover svg {
  transform: scale(1.1); /* Slight scale on hover */
}

.info-label {
  color: var(--indigo-primary);
  font-weight: bold;
}

.info-item a, .info-item p {
  color: var(--indigo-secondary);
  text-decoration: none;
  transition: color 0.3s ease, text-decoration 0.3s ease;
}

.info-item a:hover {
  color: var(--indigo-primary);
  text-decoration: underline;
}

/* Contact form styles with interactive animations */
.contact-form-container {
  flex: 1;
  background-color: var(--gray-light);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(75, 0, 130, 0.08);
  animation: slideInFromRight 1s ease-out;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  color: var(--indigo-primary);
  display: block;
  margin-bottom: 8px;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 12px; /* Increased padding for better visibility */
  border: 3px solid var(--indigo-secondary); /* Increased border width for prominence */
  border-radius: 8px;
  background-color: var(--gray-light); /* Changed to light gray for better contrast */
  color: var(--indigo-primary);
  font-size: 0.75rem; /* Ensure readable font size */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Add subtle shadow for visibility */
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease; /* Smooth focus animation */
}

.form-group input:focus, .form-group textarea:focus {
  border-color: var(--indigo-primary);
  transform: scale(1.02); /* Slight expansion on focus */
  box-shadow: 0 0 10px rgba(75, 0, 130, 0.25); /* Enhanced glow effect */
  outline: none;
}

.form-group input::placeholder, .form-group textarea::placeholder {
  color: var(--indigo-secondary); /* Make placeholders visible and styled */
  opacity: 0.5;
}

.submit-btn {
  display: inline-block;
  background: #150025;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background-color: #4B0082;
  box-shadow: 0 6px 15px rgba(75, 0, 130, 0.5); 
}

/* Styles for the new map section */
.contact-map {
  width: 100%;
  max-width: 1200px; /* Match the contact-content width */
  margin-top: 40px; /* Space from the form */
  padding: 20px;
  background-color: var(--white); /* White background for consistency */
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(75, 0, 130, 0.1); /* Indigo-inspired shadow */
  animation: slideInFromBottom 1s ease-out; /* New animation for map entrance */
}

.contact-map iframe {
  width: 100%; /* Make it responsive */
  height: 450px; /* Maintain height, but can be adjusted */
  border: 3px solid var(--indigo-secondary); /* Add border for design cohesion */
  border-radius: 8px; /* Rounded corners to match other elements */
}

/* New Keyframe for map animation */
@keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Existing Keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInStagger {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>