<template>
  <div class="orders-section">
    <div class="section-header">
      <h2 class="section-title">{{ role === 'host' ? 'Incoming Bookings' : 'My Bookings' }}</h2>
      <div class="filter-pills">
        <button
          v-for="f in filters"
          :key="f"
          class="filter-pill"
          :class="{ active: activeFilter === f }"
          @click="activeFilter = f"
        >{{ f }}</button>
      </div>
    </div>

    <div v-if="filteredOrders.length === 0" class="empty-state">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
      <p>No bookings found</p>
      <span>Your bookings will appear here once you make a reservation.</span>
    </div>

    <div v-else class="orders-list">
      <div v-for="order in filteredOrders" :key="order.booking_id" class="order-card">
        <img :src="order.venue_image" :alt="order.venue_name" class="order-img" />
        <div class="order-info">
          <div class="order-top">
            <h3 class="order-venue">{{ order.venue_name }}</h3>
            <span class="status-badge" :class="order.status">{{ order.status }}</span>
          </div>
          <p v-if="role === 'host'" class="order-customer">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            {{ order.customer_name }}
          </p>
          <div class="order-details">
            <span class="detail-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              {{ order.check_in }} → {{ order.check_out }}
            </span>
            <span class="detail-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              {{ order.guests }} guests
            </span>
          </div>
          <div class="order-bottom">
            <span class="order-price">${{ order.total_price.toLocaleString() }}</span>
            <span class="order-date">Booked {{ order.booked_at }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  orders: { type: Array, default: () => [] },
  role: { type: String, default: 'user' }
})

const filters = ['All', 'Pending', 'Confirmed', 'Completed', 'Cancelled']
const activeFilter = ref('All')

const filteredOrders = computed(() => {
  if (activeFilter.value === 'All') return props.orders
  return props.orders.filter(o => o.status.toLowerCase() === activeFilter.value.toLowerCase())
})
</script>

<style scoped>
.orders-section { animation: fadeInUp 0.4s ease forwards; }
.section-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;
}
.section-title { font-size: 1.15rem; font-weight: 800; color: #0B192C; }
.filter-pills { display: flex; gap: 0.35rem; flex-wrap: wrap; }
.filter-pill {
  padding: 0.4rem 0.9rem; border: 1.5px solid #E2E8F0; background: white;
  border-radius: 100px; font-family: 'Manrope', sans-serif;
  font-size: 0.75rem; font-weight: 700; color: #64748B;
  cursor: pointer; transition: all 0.2s ease;
}
.filter-pill:hover { border-color: #CBD5E1; }
.filter-pill.active {
  background: #0B192C; color: white; border-color: #0B192C;
}
.empty-state {
  text-align: center; padding: 4rem 2rem; background: #F8FAFC;
  border-radius: 16px; border: 1px dashed #E2E8F0;
}
.empty-state p { font-weight: 800; color: #0B192C; margin: 1rem 0 0.25rem; }
.empty-state span { font-size: 0.85rem; color: #94A3B8; font-weight: 500; }
.orders-list { display: flex; flex-direction: column; gap: 1rem; }
.order-card {
  display: flex; gap: 1.25rem; padding: 1.25rem;
  background: #F8FAFC; border: 1px solid #F0F0F5; border-radius: 16px;
  transition: all 0.2s ease;
}
.order-card:hover {
  border-color: #E2E8F0; box-shadow: 0 4px 12px rgba(0,0,0,0.04);
}
.order-img {
  width: 140px; height: 110px; border-radius: 12px;
  object-fit: cover; flex-shrink: 0;
}
.order-info { flex: 1; display: flex; flex-direction: column; justify-content: space-between; }
.order-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 0.5rem; }
.order-venue { font-size: 1rem; font-weight: 800; color: #0B192C; margin: 0; }
.status-badge {
  padding: 0.25rem 0.65rem; border-radius: 100px;
  font-size: 0.68rem; font-weight: 800; text-transform: uppercase;
  letter-spacing: 0.03em; flex-shrink: 0;
}
.status-badge.pending { background: #FEF3C7; color: #92400E; }
.status-badge.confirmed { background: #DBEAFE; color: #1E40AF; }
.status-badge.completed { background: #DCFCE7; color: #166534; }
.status-badge.cancelled { background: #FEE2E2; color: #991B1B; }
.order-customer {
  display: flex; align-items: center; gap: 0.35rem;
  font-size: 0.8rem; font-weight: 600; color: #64748B; margin: 0.25rem 0;
}
.order-details { display: flex; gap: 1.25rem; margin: 0.35rem 0; }
.detail-item {
  display: flex; align-items: center; gap: 0.3rem;
  font-size: 0.78rem; font-weight: 600; color: #94A3B8;
}
.order-bottom { display: flex; align-items: center; justify-content: space-between; }
.order-price { font-size: 1.05rem; font-weight: 800; color: #8B6E00; }
.order-date { font-size: 0.75rem; color: #CBD5E1; font-weight: 600; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 640px) {
  .order-card { flex-direction: column; }
  .order-img { width: 100%; height: 160px; }
  .section-header { flex-direction: column; align-items: flex-start; }
}
</style>
