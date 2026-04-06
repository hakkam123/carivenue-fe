<template>
  <div class="landing-page">
    <div v-motion-fade-visible-once>
      <Hero />
    </div>
    <div v-motion-slide-visible-once-bottom>
      <EventCategories />
    </div>
    <div v-motion-slide-visible-once-bottom :delay="200">
      <VenueListing />
    </div>
    <div v-motion-slide-visible-once-right :delay="100">
      <FeatureSection />
    </div>
    <div v-motion-slide-visible-once-left :delay="100">
      <StepJourney />
    </div>
    <div v-motion-pop-visible-once>
      <Testimonials />
    </div>
    <div v-motion-slide-visible-once-bottom>
      <CTASection />
    </div>
  </div>
</template>

<script setup>
// The original Landing Page components are rendered here.
</script>
