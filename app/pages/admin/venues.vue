<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})

import DashboardStats from '~/components/admin/DashboardStats.vue'
import VenueTable from '~/components/admin/VenueTable.vue'

const venueStats = [
  { label: 'Total Venues', value: '128', trend: '+12%', trendType: 'up', icon: 'venues', color: '#0B192C' },
  { label: 'Active Now', value: '104', trend: 'Occupancy: 82%', trendType: 'stable', icon: 'bookings', color: '#3A7DE0' },
  { label: 'Pending Review', value: '14', trend: 'View All', trendType: 'up', icon: 'edit', color: '#FBBD23' },
  { label: 'Revenue MTD', value: '$42.8k', trend: '+4%', trendType: 'up', icon: 'revenue', color: '#2DCE89' }
]
</script>

<template>
  <div class="venues-page">
    <nav class="admin-breadcrumbs">
      <span>DASHBOARD</span>
      <span class="separator">›</span>
      <span class="current">VENUES</span>
    </nav>
    
    <div class="page-header">
      <div class="header-left">
        <h1>Venues</h1>
        <p>Oversee and manage your global venue portfolio assets.</p>
      </div>
      <div class="header-right">
        <button class="add-venue-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add New Venue
        </button>
      </div>
    </div>

    <div v-motion-fade-visible-once :delay="100">
      <DashboardStats :stats="venueStats" />
    </div>

    <div v-motion-slide-visible-once-bottom :delay="200">
      <VenueTable />
    </div>
  </div>
</template>

<style scoped>
.admin-breadcrumbs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  font-weight: 800;
  color: #B0B0B0;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
}

.separator {
  opacity: 0.4;
}

.current {
  color: #0B192C;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
}

.header-left h1 {
  font-size: 2.25rem;
  font-weight: 800;
  color: #0B192C;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.header-left p {
  font-size: 1rem;
  font-weight: 600;
  color: #B0B0B0;
}

.add-venue-btn {
  background-color: #3A7DE0;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(58, 125, 224, 0.2);
  transition: all 0.2s ease;
}

.add-venue-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(58, 125, 224, 0.3);
}
</style>
