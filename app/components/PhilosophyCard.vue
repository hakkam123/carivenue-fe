<template>
  <div class="philosophy-card">
    <div class="content">
      <h3 class="philosophy-title">{{ title }}</h3>
      <p class="philosophy-description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})
</script>

<style scoped>
.philosophy-card {
  background: #FFFFFF;
  padding: 2.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.philosophy-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.icon-wrapper {
  margin-bottom: 0.5rem;
}

.philosophy-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-dark);
  margin-bottom: 0.75rem;
}

.philosophy-description {
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.6;
}

.text-gold {
  color: #8B7133;
}
</style>
