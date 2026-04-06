<script setup>
import '~/assets/css/main.css'

useHead({
  title: 'CariVenue - Temukan Tempat Sempurna untuk Acara Anda',
  meta: [
    { name: 'description', content: 'Platform pencarian venue terbaik untuk pernikahan, meeting, dan acara lainnya dengan kurasi kualitas tertinggi.' }
  ]
})
</script>

<template>
  <div class="app-layout">
    <TopNavbar />
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<style>
.app-layout {
  position: relative;
}

.checkout-content {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: var(--bg-light);
  min-height: 100vh;
}

.checkout-layout {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  align-items: flex-start;
}

@media (max-width: 1024px) {
  .checkout-layout {
    grid-template-columns: 1fr;
  }
}
</style>
