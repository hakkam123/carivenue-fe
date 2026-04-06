<template>
  <div class="app-layout">
    <div class="page-switcher" style="padding: 1rem; background: #eee; position: fixed; top: 0; right: 0; z-index: 1000; border-radius: 0 0 0 1rem; display: flex; gap: 1rem;">
      <button @click="currentPage = 'landing'" :style="{ fontWeight: currentPage === 'landing' ? 'bold' : 'normal' }">Landing</button>
      <button @click="currentPage = 'checkout'" :style="{ fontWeight: currentPage === 'checkout' ? 'bold' : 'normal' }">Checkout</button>
    </div>

    <!-- Landing Page Content -->
    <div v-if="currentPage === 'landing'" class="main-content">
      <Hero />
      <EventCategories />
      <VenueListing />
      <FeatureSection />
      <StepJourney />
      <Testimonials />
      <CTASection />
    </div>

    <!-- Checkout Page Content -->
    <div v-else-if="currentPage === 'checkout'" class="checkout-content">
      <CheckoutHeader />
      <div class="container checkout-layout">
        <div class="checkout-main">
          <BookingForm />
        </div>
        <aside class="checkout-sidebar">
          <SummaryCard />
          <SupportBanner />
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import '~/assets/css/main.css'
const currentPage = ref('landing')

useHead({
  title: 'CariVenue - Temukan Tempat Sempurna untuk Acara Anda',
  meta: [
    { name: 'description', content: 'Platform pencarian venue terbaik untuk pernikahan, meeting, dan acara lainnya dengan kurasi kualitas tertinggi.' }
  ]
})
</script>

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
