<template>
  <div class="philosophy-card">
    <div class="icon-wrapper">
      <slot name="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-eye text-gold">
          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </slot>
    </div>
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
