<template>
  <div>
    <header class="hero" :style="heroStyle">
      <div class="hero-overlay">
        <div class="hero-text">
          <h1>Crafting Memories, One Scent at a Time</h1>
          <p>Discover the essence of elegance and sophistication with ScentSational's unique fragrances.</p>
        </div>
      </div>
    </header>

    <main class="about-container">
      <section class="our-story-section">
        <div class="story-content">
          <div class="story-image-container">
            <img src="@/assets/images/about-hero.png" alt="Our Story" class="story-image">
          </div>
          <div class="story-text">
            <h2>Our Story</h2>
            <p>
              ScentSational was born from a passion for the art of perfumery and the power of scent to evoke emotions and create lasting memories. Our journey began with a simple idea: to craft high-quality, unique fragrances that tell a story and resonate with the individual. We believe that a great perfume is more than just a scent; it's a form of self-expression, a personal signature that leaves a subtle yet unforgettable impression.
            </p>
            <p>
              Each of our perfumes is meticulously blended using the finest ingredients sourced from around the world. Our artisans pour their hearts and expertise into every bottle, ensuring a luxurious and captivating experience for our customers. At ScentSational, we are dedicated to the pursuit of olfactory excellence and the creation of scents that are as unique and special as the people who wear them.
            </p>
          </div>
        </div>
      </section>

      <section class="our-mission-section">
        <div class="mission-content">
          <div class="mission-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower individuals to express their unique identity through the art of fragrance. We are committed to creating exceptional perfumes that not only smell divine but also inspire confidence and leave a positive, lasting impact. We strive for sustainability and ethical sourcing in all our practices, ensuring that our passion for perfume contributes positively to the world.
            </p>
          </div>
           <div class="mission-image-container">
            <img src="@/assets/images/hero-img.jpg" alt="Our Mission" class="mission-image">
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import heroImage from '@/assets/images/hero-img.jpg';

export default {
  name: 'AboutView',
  data() {
    return {
      heroStyle: {
        backgroundImage: `url(${heroImage})`,
      },
    };
  },
};
</script>

<style scoped>
/* --- Color and Font Variables --- */
:root {
  --indigo-dark: #192a56; /* Deep Navy Indigo */
  --indigo-light: #4a69bd; /* Lighter, vibrant indigo */
  --white: #FFFFFF;
  --off-white: #f8f9fa;
  --text-dark: #2c3e50;
  --text-light: #84817a;
  --font-serif: 'Georgia', 'Times New Roman', serif;
  --font-sans: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
}

/* --- General Styles --- */
.hero, .about-container {
  font-family: var(--font-sans);
}

/* --- Hero Section --- */
.hero {
  height: 40vh;
  background-size: cover;
  background-position: center 25%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-overlay {
  background: rgba(25, 42, 86, 0.4); /* Indigo overlay */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-text {
  text-align: center;
  color: var(--white);
  padding: 0 1rem;
}

.hero-text h1 {
  font-family: var(--font-serif);
  font-size: 3rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.4);
}
.hero-text p {
  font-size: 1.1rem;
  max-width: 500px;
  margin-top: 0.5rem;
}

/* --- About Container --- */
.about-container {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1.5rem;
}

/* --- Story and Mission Sections --- */
.our-story-section, .our-mission-section {
  padding: 3rem 1.5rem;
  background-color: var(--off-white);
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.story-content, .mission-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  gap: 2rem;
}

.story-image-container, .mission-image-container {
  flex: 1;
}

.story-image, .mission-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

.story-text, .mission-text {
  flex: 1.5;
}

.story-text h2, .mission-text h2 {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  color: var(--indigo-dark);
  margin: 0 0 1rem;
}

.story-text p, .mission-text p {
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}
</style>