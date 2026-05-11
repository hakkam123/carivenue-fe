<template>
  <div class="wishlist-section">
    <div class="section-header">
      <h2 class="section-title">Saved Venues</h2>
      <span class="count-badge">{{ venues.length }} saved</span>
    </div>

    <div v-if="venues.length === 0" class="empty-state">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      <p>No saved venues yet</p>
      <span>Heart venues you love and they'll show up here.</span>
      <button class="btn-explore" @click="navigateTo('/explore')">Explore Venues</button>
    </div>

    <div v-else class="wishlist-grid">
      <div v-for="venue in venues" :key="venue.id" class="wishlist-card">
        <div class="card-image-wrapper">
          <img :src="venue.image" :alt="venue.title" class="card-image" />
          <button class="remove-btn" @click="$emit('remove', venue.id)" title="Remove from wishlist">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
        </div>
        <div class="card-body">
          <div class="card-tags">
            <span v-for="tag in venue.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <h3 class="card-title">{{ venue.title }}</h3>
          <div class="card-meta">
            <span class="card-location">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              {{ venue.location }}
            </span>
            <span class="card-rating">★ {{ venue.rating }}</span>
          </div>
          <div class="card-footer">
            <span class="card-price">{{ venue.price }}</span>
            <button class="btn-view" @click="navigateTo(`/venue/${venue.id}`)">View →</button>
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
defineEmits(['remove'])
</script>

<style scoped>
.wishlist-section { animation: fadeInUp 0.4s ease forwards; }
.section-header {
  display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;
}
.section-title { font-size: 1.15rem; font-weight: 800; color: #0B192C; }
.count-badge {
  padding: 0.25rem 0.65rem; background: #F1F5F9; border-radius: 100px;
  font-size: 0.72rem; font-weight: 700; color: #64748B;
}
.empty-state {
  text-align: center; padding: 4rem 2rem; background: #F8FAFC;
  border-radius: 16px; border: 1px dashed #E2E8F0;
}
.empty-state p { font-weight: 800; color: #0B192C; margin: 1rem 0 0.25rem; }
.empty-state span { font-size: 0.85rem; color: #94A3B8; font-weight: 500; display: block; margin-bottom: 1.5rem; }
.btn-explore {
  padding: 0.65rem 1.5rem; background: #0B192C; color: white; border: none;
  border-radius: 10px; font-family: 'Manrope', sans-serif;
  font-size: 0.85rem; font-weight: 700; cursor: pointer;
  transition: all 0.2s ease;
}
.btn-explore:hover { background: #1a2d45; transform: translateY(-1px); }
.wishlist-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem;
}
.wishlist-card {
  background: white; border-radius: 16px; overflow: hidden;
  border: 1px solid #F0F0F5; transition: all 0.25s ease;
}
.wishlist-card:hover {
  border-color: #E2E8F0; box-shadow: 0 8px 24px rgba(0,0,0,0.06);
  transform: translateY(-2px);
}
.card-image-wrapper { position: relative; height: 180px; }
.card-image { width: 100%; height: 100%; object-fit: cover; }
.remove-btn {
  position: absolute; top: 0.75rem; right: 0.75rem;
  width: 32px; height: 32px; border-radius: 50%;
  background: white; border: none; display: flex;
  align-items: center; justify-content: center;
  color: #ff4757; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.2s ease;
}
.remove-btn:hover { transform: scale(1.1); }
.card-body { padding: 1rem 1.25rem 1.25rem; }
.card-tags { display: flex; gap: 0.35rem; margin-bottom: 0.5rem; }
.tag {
  padding: 0.2rem 0.5rem; background: #F1F5F9; border-radius: 6px;
  font-size: 0.6rem; font-weight: 800; color: #64748B;
  letter-spacing: 0.03em;
}
.card-title { font-size: 1rem; font-weight: 800; color: #0B192C; margin: 0 0 0.5rem; }
.card-meta { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; }
.card-location {
  display: flex; align-items: center; gap: 0.3rem;
  font-size: 0.78rem; font-weight: 600; color: #94A3B8;
}
.card-rating { font-size: 0.8rem; font-weight: 800; color: #A67C00; }
.card-footer { display: flex; align-items: center; justify-content: space-between; }
.card-price { font-size: 1.05rem; font-weight: 800; color: #0B192C; }
.btn-view {
  padding: 0.4rem 0.85rem; background: none; border: 1.5px solid #E2E8F0;
  border-radius: 8px; font-family: 'Manrope', sans-serif;
  font-size: 0.78rem; font-weight: 700; color: #0B192C;
  cursor: pointer; transition: all 0.2s ease;
}
.btn-view:hover { border-color: #8B6E00; color: #8B6E00; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 1024px) { .wishlist-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .wishlist-grid { grid-template-columns: 1fr; } }
</style>
