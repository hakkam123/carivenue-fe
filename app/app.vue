<script setup>
// No explicit imports needed in Nuxt if components are in app/components/
</script>

<template>
  <div class="app-layout">
    <TopNavbar />
    
    <main class="main-content">
      <NuxtPage />
    </main>

    <AppFooter />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');

:root {
  --font-family: 'Manrope', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffffff;
  color: #0B192C;
}

.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

.hero {
  padding: 10rem 2rem;
  text-align: center;
  background: linear-gradient(rgba(222, 225, 252, 0.2), #ffffff);
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  letter-spacing: -0.04em;
}

.hero p {
  font-size: 1.25rem;
  opacity: 0.7;
  font-weight: 500;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
}
</style>
