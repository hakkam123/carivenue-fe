<script setup>
definePageMeta({
  layout: 'admin'
})

import DashboardStats from '~/components/admin/DashboardStats.vue'
import RevenueChart from '~/components/admin/RevenueChart.vue'
import ActivityLog from '~/components/admin/ActivityLog.vue'
import RecentTransactions from '~/components/admin/RecentTransactions.vue'
import ArchitectPick from '~/components/admin/ArchitectPick.vue'

const homeStats = [
  { label: 'Total Bookings', value: '2,842', trend: '+12%', trendType: 'up', icon: 'bookings', color: '#3A7DE0' },
  { label: 'Total Revenue', value: '$148,290', trend: '+8.4%', trendType: 'up', icon: 'revenue', color: '#2DCE89' },
  { label: 'Total Venues', value: '156', trend: 'Stable', trendType: 'stable', icon: 'venues', color: '#3A7DE0' },
  { label: 'Active Users', value: '12,408', trend: '-2.1%', trendType: 'down', icon: 'users', color: '#3A7DE0' }
]
</script>

<template>
  <div class="admin-dashboard">
    <div v-motion-slide-visible-once-bottom class="dashboard-header">
      <h1>Architectural Overview</h1>
      <p>System performance and venue occupancy metrics for June 2024.</p>
    </div>

    <div v-motion-fade-visible-once :delay="100">
      <DashboardStats :stats="homeStats" />
    </div>

    <div class="dashboard-grid">
      <div v-motion-slide-visible-once-bottom :delay="200" class="main-column">
        <RevenueChart />
        <RecentTransactions />
      </div>
      <div v-motion-slide-visible-once-right :delay="300" class="side-column">
        <ActivityLog />
        <ArchitectPick />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-header {
  margin-bottom: 2.5rem;
}

.dashboard-header h1 {
  font-size: 2.25rem;
  font-weight: 800;
  color: #0B192C;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.dashboard-header p {
  font-size: 1rem;
  font-weight: 600;
  color: #B0B0B0;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  align-items: start;
}

.main-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.side-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: sticky;
  top: 2rem;
}

@media (max-width: 1400px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
  
  .side-column {
    position: static;
  }
}
</style>
