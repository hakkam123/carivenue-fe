<script setup>
defineProps({
  venue: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="venue-card">
    <div class="image-container">
      <img :src="venue.image" :alt="venue.title" class="venue-img" />
      <div class="price-badge">
        STARTING {{ venue.price }}
      </div>
    </div>
    
    <div class="venue-info">
      <div class="header-row">
        <h3 class="venue-title">{{ venue.title }}</h3>
        <div class="rating">
          <span class="star">★</span>
          <span class="rating-val">{{ venue.rating }}</span>
        </div>
      </div>
      
      <div class="location">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="loc-icon"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        <span class="loc-text">{{ venue.location }}</span>
      </div>
      
      <div class="tags-row">
        <div class="tags">
          <span v-for="tag in venue.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <button class="arrow-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.venue-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  border: 1px solid #f0f0f0;
}

.venue-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

.image-container {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.venue-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.price-badge {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: #A67C00;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.05em;
}

.venue-info {
  padding: 1.5rem;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.venue-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #0B192C;
  line-height: 1.3;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.star {
  color: #A67C00;
  font-size: 0.9rem;
}

.rating-val {
  font-weight: 700;
  font-size: 0.9rem;
  color: #0B192C;
}

.location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #0B192C;
  opacity: 0.6;
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.tags-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  background: #f4f4f4;
  color: #0B192C;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  opacity: 0.7;
}

.arrow-btn {
  background: none;
  border: none;
  color: #0B192C;
  opacity: 0.5;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.venue-card:hover .arrow-btn {
  opacity: 1;
  transform: translateX(4px);
}
</style>
