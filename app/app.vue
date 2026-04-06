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
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* Global Layout styling */
html, body {
  margin: 0;
  padding: 0;
  font-family: 'Manrope', sans-serif;
}
</style>
