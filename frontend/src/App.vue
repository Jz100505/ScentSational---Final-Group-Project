<template>
  <TheNavbar />
  <router-view/>
  <TheFooter />
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheFooter,
  },
};
</script>
<style>
body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
  color: #333;
  background: #fdf9f9;
  overflow-x: hidden;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  left: 0;
  width: 98%;
  z-index: 1000;
}

.logo {
  height: 50px;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

nav ul li a {
  text-decoration: none;
  color: #150025;
  font-weight: bold;
  transition: color 0.3s ease;
}

nav ul li a:hover {
  color: #4B0082;
}

.cart-link {
  margin: 0 5vw 0 0;
}

.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('~@/assets/images/hero-img.jpg') no-repeat center center/cover;
  color: white;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
}


.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  letter-spacing: 1.2px;
   
}

.hero p {
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto 1.5rem;
}

.hero .cta-btn {
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

.hero .cta-btn:hover {
  background-color: #4B0082;
  box-shadow: 0 6px 15px rgba(75, 0, 130, 0.5);
}

.mission-section {
  padding: 4rem 2rem;
  max-width: 900px;
  margin: 0 auto 6rem;
  text-align: center;
  background: #fdf9f9;
}

.mission-section h2 {
  color: #4B0082;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.mission-text,
.serve-text {
  font-size: 1.2rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.gallery {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: nowrap;
  margin-top: 1rem;
}

.gallery img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.gallery img:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(75, 0, 130, 0.5);
}

.btn-more {
  display: inline-block;
  margin-top: 2rem;
  background-color: #4B0082;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(75, 0, 130, 0.5);
  transition: background 0.3s ease;
}

.btn-more:hover {
  background-color: #4B0082;
  box-shadow: 0 6px 15px rgba(75, 0, 130, 0.5);
}

footer {
  text-align: center;
  padding: 2rem;
  background: #f8f8f8;
  font-size: 0.9rem;
  color: #666;
}
</style>