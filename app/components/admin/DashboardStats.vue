<script setup>
defineProps({
  stats: {
    type: Array,
    required: true
  },
  columns: {
    type: Number,
    default: 4
  }
})
</script>

<template>
  <div class="stats-grid" :style="{ gridTemplateColumns: `repeat(${columns}, 1fr)` }">
    <div v-for="stat in stats" :key="stat.label" class="stat-card">
      <div class="stat-header">
        <div class="icon-box" :style="{ color: stat.color || '#3A7DE0' }">
          <!-- Mapping icons to simple SVGs -->
          <svg v-if="stat.icon === 'bookings'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <svg v-if="stat.icon === 'revenue'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/><path d="M7 15h.01"/><path d="M11 15h2"/></svg>
          <svg v-if="stat.icon === 'venues'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 21h18"/><path d="M3 7v1a3 3 0 0 0 6 0V7m6 0v1a3 3 0 0 0 6 0V7m-6 0h6M9 7h6M9 21V7M15 21V7"/></svg>
          <svg v-if="stat.icon === 'users'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div v-if="stat.trend" class="trend" :class="stat.trendType">
          {{ stat.trend }}
        </div>
      </div>
      <div class="stat-body">
        <span class="label">{{ stat.label }}</span>
        <h2 class="value">{{ stat.value }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-grid {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background-color: white;
  border-radius: 20px;
  padding: 1.5rem;
  border: 1px solid #EEEEEE;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}

.stat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.icon-box {
  background-color: #F8F9FA;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.trend {
  font-size: 0.75rem;
  font-weight: 800;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
}

.trend.up {
  color: #2DCE89;
}

.trend.down {
  color: #F5365C;
}

.trend.stable {
  color: #B0B0B0;
}

.stat-body {
  display: flex;
  flex-direction: column;
}

.stat-body .label {
  font-size: 0.7rem;
  font-weight: 800;
  color: #B0B0B0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.stat-body .value {
  font-size: 1.75rem;
  font-weight: 800;
  color: #0B192C;
  letter-spacing: -0.02em;
}

@media (max-width: 1200px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 640px) {
  .stats-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
