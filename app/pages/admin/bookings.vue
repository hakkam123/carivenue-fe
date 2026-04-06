<script setup>
definePageMeta({
  layout: 'admin'
})

import BookingTable from '~/components/admin/BookingTable.vue'

const footerStats = [
  { label: 'WEEKLY REVENUE', value: '$42,902.50', trend: '+12.4% from last week', trendType: 'up', color: '#3A7DE0' },
  { label: 'ACTIVE RESERVATIONS', value: '1,204', trend: 'Across 64 verified venues', trendType: 'stable', color: '#0B192C' },
  { label: 'CANCELLATION RATE', value: '2.4%', trend: 'Optimization goal: < 2.0%', trendType: 'down', color: '#F5365C' }
]
</script>

<template>
  <div class="bookings-page">
    <div class="page-header">
      <h1>Bookings</h1>
      <p>Manage and track all venue reservations across your network.</p>
    </div>

    <div v-motion-slide-visible-once-bottom :delay="100">
      <BookingTable />
    </div>

    <div v-motion-fade-visible-once :delay="300" class="page-footer-stats">
      <div v-for="stat in footerStats" :key="stat.label" class="footer-stat-card" :style="{ borderLeft: `4px solid ${stat.color}` }">
        <div class="stat-info">
          <span class="label">{{ stat.label }}</span>
          <h2 class="value">{{ stat.value }}</h2>
          <span class="trend" :class="stat.trendType">{{ stat.trend }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bookings-page {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.page-header h1 {
  font-size: 2.25rem;
  font-weight: 800;
  color: #0B192C;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.page-header p {
  font-size: 1rem;
  font-weight: 600;
  color: #B0B0B0;
}

.page-footer-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 1rem;
}

.footer-stat-card {
  background-color: white;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  border: 1px solid #EEEEEE;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0,0,0,0.02);
}

.stat-info {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 0.65rem;
  font-weight: 800;
  color: #B0B0B0;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.value {
  font-size: 1.5rem;
  font-weight: 800;
  color: #0B192C;
  margin-bottom: 0.5rem;
}

.trend {
  font-size: 0.75rem;
  font-weight: 700;
}

.trend.up { color: #2DCE89; }
.trend.down { color: #F5365C; }
.trend.stable { color: #B0B0B0; }

@media (max-width: 1024px) {
  .page-footer-stats {
    grid-template-columns: 1fr;
  }
}
</style>
