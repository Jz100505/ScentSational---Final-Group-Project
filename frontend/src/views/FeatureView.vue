<template>
  <div>
    <header class="hero">
      <h1>Centro Café - Featured Moments</h1>
      <p>Peek into the vibe, moments, and everyday magic inside Centro Café.</p>
    </header>

    <main>
      <section>
        <h2>Recent Photos</h2>
        <p class="intro">Here are the captured highlights that define our space, customers, and coffee culture.</p>
        <div class="gallery">
          <img src="@/assets/images/barako-coffee.jpeg" alt="Barako Coffee" />
          <img src="@/assets/images/f1.jpeg" alt="Food 1" />
          <img src="@/assets/images/f2.jpeg" alt="Food 2" />
          <img src="@/assets/images/f3.jpeg" alt="Food 3" />
          <img src="@/assets/images/centro1.jpg" alt="centro pic 1" />
          <img src="@/assets/images/1.jpg" alt="1" />
        </div>
      </section>
      
      <div class="feature-image" style="text-align: center; margin: 40px 0;">
        <img src="@/assets/images/INFOGRAPHICS.png" alt="Centro Café Infographic" style="width: 800px; max-width: 100%;" />
      </div>
      
      <router-link to="/" class="back-btn">Back to Homepage</router-link>
    </main>
  </div>
</template>

<script>
export default {
  name: 'FeatureView',
};
</script>