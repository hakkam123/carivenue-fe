<template>
  <div class="venues-section">
    <div class="section-header">
      <div>
        <h2 class="section-title">My Venues</h2>
        <p class="section-subtitle">Manage your listed venues</p>
      </div>
      <button class="btn-add" @click="navigateTo('/profile/add-venue')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Add New Venue
      </button>
    </div>

    <div v-if="venues.length === 0" class="empty-state">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      <p>No venues listed yet</p>
      <span>Start hosting by adding your first venue.</span>
      <button class="btn-add-first" @click="navigateTo('/profile/add-venue')">Add Your First Venue</button>
    </div>

    <div v-else class="venue-list">
      <div v-for="venue in venues" :key="venue.venue_id" class="venue-card">
        <div class="venue-img-wrapper">
          <img :src="venue.images[0]" :alt="venue.venue_name" class="venue-img" />
          <span class="venue-status" :class="venue.status">{{ venue.status }}</span>
        </div>
        <div class="venue-info">
          <div class="venue-top-row">
            <div>
              <span class="venue-category">{{ venue.venue_category }}</span>
              <h3 class="venue-name">{{ venue.venue_name }}</h3>
            </div>
          </div>
          <div class="venue-details">
            <span class="detail">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              {{ venue.venue_location }}
            </span>
            <span class="detail">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              {{ venue.capacity }} guests
            </span>
          </div>
          <div class="venue-footer">
            <span class="venue-price">${{ venue.price_per_day.toLocaleString() }}<small>/day</small></span>
            <div class="venue-actions">
              <button class="action-btn edit" title="Edit venue">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              </button>
              <button
                class="action-btn toggle"
                :class="{ inactive: venue.status === 'inactive' }"
                :title="venue.status === 'active' ? 'Deactivate' : 'Activate'"
                @click="$emit('toggle-status', venue.venue_id)"
              >
                <svg v-if="venue.status === 'active'" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  venues: { type: Array, default: () => [] }
})
defineEmits(['toggle-status'])
</script>

<style scoped>
.venues-section { animation: fadeInUp 0.4s ease forwards; }
.section-header {
  display: flex; align-items: flex-start; justify-content: space-between;
  margin-bottom: 1.5rem;
}
.section-title { font-size: 1.15rem; font-weight: 800; color: #0B192C; margin: 0; }
.section-subtitle { font-size: 0.82rem; color: #94A3B8; font-weight: 500; margin: 0.2rem 0 0; }
.btn-add {
  display: flex; align-items: center; gap: 0.5rem;
  padding: 0.7rem 1.25rem;
  background: linear-gradient(135deg, #8B6E00 0%, #A67C00 100%);
  color: white; border: none; border-radius: 12px;
  font-family: 'Manrope', sans-serif; font-size: 0.82rem; font-weight: 700;
  cursor: pointer; transition: all 0.2s ease; white-space: nowrap;
}
.btn-add:hover { transform: translateY(-1px); box-shadow: 0 4px 16px rgba(139,110,0,0.25); }
.empty-state {
  text-align: center; padding: 4rem 2rem; background: #F8FAFC;
  border-radius: 16px; border: 1px dashed #E2E8F0;
}
.empty-state p { font-weight: 800; color: #0B192C; margin: 1rem 0 0.25rem; }
.empty-state span { font-size: 0.85rem; color: #94A3B8; font-weight: 500; display: block; margin-bottom: 1.5rem; }
.btn-add-first {
  padding: 0.65rem 1.5rem; background: #0B192C; color: white; border: none;
  border-radius: 10px; font-family: 'Manrope', sans-serif;
  font-size: 0.85rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease;
}
.btn-add-first:hover { background: #1a2d45; }
.venue-list { display: flex; flex-direction: column; gap: 1rem; }
.venue-card {
  display: flex; gap: 1.25rem; padding: 1.25rem;
  background: #F8FAFC; border: 1px solid #F0F0F5; border-radius: 16px;
  transition: all 0.2s ease;
}
.venue-card:hover { border-color: #E2E8F0; box-shadow: 0 4px 12px rgba(0,0,0,0.04); }
.venue-img-wrapper { position: relative; flex-shrink: 0; }
.venue-img {
  width: 160px; height: 120px; border-radius: 12px; object-fit: cover;
}
.venue-status {
  position: absolute; top: 0.5rem; left: 0.5rem;
  padding: 0.2rem 0.55rem; border-radius: 6px;
  font-size: 0.62rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.03em;
}
.venue-status.active { background: #DCFCE7; color: #166534; }
.venue-status.inactive { background: #FEE2E2; color: #991B1B; }
.venue-status.pending { background: #FEF3C7; color: #92400E; }
.venue-info { flex: 1; display: flex; flex-direction: column; justify-content: space-between; }
.venue-category {
  font-size: 0.65rem; font-weight: 800; text-transform: uppercase;
  letter-spacing: 0.05em; color: #A67C00;
}
.venue-name { font-size: 1.05rem; font-weight: 800; color: #0B192C; margin: 0.15rem 0 0; }
.venue-details { display: flex; gap: 1.25rem; margin: 0.5rem 0; }
.detail {
  display: flex; align-items: center; gap: 0.3rem;
  font-size: 0.78rem; font-weight: 600; color: #94A3B8;
}
.venue-footer { display: flex; align-items: center; justify-content: space-between; }
.venue-price { font-size: 1.1rem; font-weight: 800; color: #0B192C; }
.venue-price small { font-size: 0.75rem; font-weight: 600; color: #94A3B8; }
.venue-actions { display: flex; gap: 0.5rem; }
.action-btn {
  width: 34px; height: 34px; border-radius: 10px; border: 1.5px solid #E2E8F0;
  background: white; display: flex; align-items: center; justify-content: center;
  cursor: pointer; color: #64748B; transition: all 0.2s ease;
}
.action-btn.edit:hover { border-color: #8B6E00; color: #8B6E00; background: #FFFBEB; }
.action-btn.toggle:hover { border-color: #22C55E; color: #22C55E; }
.action-btn.toggle.inactive:hover { border-color: #EF4444; color: #EF4444; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .section-header { flex-direction: column; gap: 1rem; }
  .venue-card { flex-direction: column; }
  .venue-img { width: 100%; height: 180px; }
}
</style>
