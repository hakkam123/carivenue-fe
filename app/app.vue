<template>
  <div class="app-layout">
    <TopNavbar />
    
    <main class="main-content">
      <NuxtPage />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import '~/assets/css/main.css'

useHead({
  title: 'CariVenue - Temukan Tempat Sempurna untuk Acara Anda',
  meta: [
    { name: 'description', content: 'Platform pencarian venue terbaik untuk pernikahan, meeting, dan acara lainnya dengan kurasi kualitas tertinggi.' }
  ]
})
</script>

<style>
/* Global Layout styling to ensure the footer sits at the bottom */
html, body {
  margin: 0;
  padding: 0;
}

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
