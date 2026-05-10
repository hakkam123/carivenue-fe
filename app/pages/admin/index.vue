<script setup>
import { ref, onMounted } from 'vue'
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})

// Duplicated from explore.vue as requested
const allVenues = [
  {
    id: 1,
    title: 'The Obsidian Pavilion',
    price: '$2,500',
    rating: 4.9,
    location: 'Highgate, London',
    tags: ['GALLERY', '150 CAP'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    capacity: '150-500',
    eventType: 'Corporate Gala'
  },
  {
    id: 2,
    title: 'Brick & Beam Loft',
    price: '$1,800',
    rating: 4.7,
    location: 'Shoreditch, London',
    tags: ['INDUSTRIAL', '300 CAP'],
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
    capacity: '150-500',
    eventType: 'Art Exhibition'
  },
  {
    id: 3,
    title: 'Somerset Hall',
    price: '$5,200',
    rating: 5.0,
    location: 'Mayfair, London',
    tags: ['HISTORIC', '100 CAP'],
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800',
    capacity: '50-150',
    eventType: 'Private Wedding'
  },
  {
    id: 4,
    title: 'Skyline Atrium',
    price: '$3,800',
    rating: 4.8,
    location: 'Southbank, London',
    tags: ['ROOFTOP', '250 CAP'],
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800',
    capacity: '150-500',
    eventType: 'Corporate Gala'
  },
  {
    id: 5,
    title: 'The Glasshouse',
    price: '$4,100',
    rating: 4.6,
    location: 'Kensington, London',
    tags: ['MODERN', '120 CAP'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    capacity: '50-150',
    eventType: 'Film Production'
  }
]

const stats = [
  { label: 'Portfolio Assets', value: '1,248', desc: 'Active venues globally', icon: 'map' },
  { label: 'Avg. Inquiries', value: '84/mo', desc: 'Per venue average', icon: 'trending' },
  { label: 'Revenue Forecast', value: '$254.2k', desc: 'Projected Q3 growth', icon: 'chart' }
]
</script>

<template>
  <div class="dashboard-root">
    <!-- Header Summary Section -->
    <section class="summary-section">
      <div v-motion-fade-visible-once class="welcome-text">
        <h2>Executive Dashboard</h2>
        <p>Curating architectural excellence and venue performance insights.</p>
      </div>
      
      <div class="stats-grid">
        <div 
          v-for="(stat, idx) in stats" 
          :key="stat.label"
          v-motion-slide-visible-once-bottom
          :delay="100 * idx"
          class="stat-card"
        >
          <div class="stat-content">
            <span class="stat-label">{{ stat.label }}</span>
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-desc">{{ stat.desc }}</span>
          </div>
          <div class="stat-icon-bg"></div>
        </div>
      </div>
    </section>

    <!-- Venue Grid Section -->
    <section class="venues-section">
      <div v-motion-slide-visible-once-bottom :delay="300" class="section-header">
        <h3>Managed Properties</h3>
        <div class="actions">
          <button class="view-all">View Full Portfolio <span>&rarr;</span></button>
        </div>
      </div>

      <div class="venue-grid">
        <div 
          v-for="(venue, idx) in allVenues" 
          :key="venue.id"
          v-motion-slide-visible-once-bottom
          :delay="400 + (idx * 50)"
          class="venue-lux-card"
        >
          <div class="card-image">
            <img :src="venue.image" :alt="venue.title" />
            <div class="card-tag" :class="{ gold: idx === 0 || idx === 2 }">
              {{ idx % 2 === 0 ? 'MEMBERS ONLY' : 'TRENDING' }}
            </div>
          </div>
          <div class="card-body">
            <div class="card-header">
              <h4>{{ venue.title }}</h4>
              <div class="rating">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
                {{ venue.rating }}
              </div>
            </div>
            <p class="location">{{ venue.location }}</p>
            <div class="card-footer">
              <span class="price">From <strong>{{ venue.price }}</strong></span>
              <button class="manage-btn">Manage</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.dashboard-root {
  display: flex;
  flex-direction: column;
  gap: 7rem;
  padding: 3rem 0 8rem;
}


.welcome-text h2 {
  font-family: var(--serif-font);
  font-size: 2rem;
  font-weight: 500;
  color: var(--sage-dark);
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
}

.welcome-text p {
  color: var(--sage-green);
  opacity: 0.5;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.01em;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-top: 3.5rem;
}

.stat-card {
  background: white;
  padding: 3rem;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  /* Deepened high-end layered shadow for separation */
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.04),
    0 8px 20px rgba(74, 93, 78, 0.03),
    0 24px 48px rgba(74, 93, 78, 0.04);
  border: 1px solid rgba(74, 93, 78, 0.15); /* More defined architectural border */
  transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.stat-card:hover {
    transform: translateY(-5px);
    box-shadow: 
        0 4px 10px rgba(0, 0, 0, 0.05),
        0 16px 40px rgba(74, 93, 78, 0.08),
        0 40px 80px rgba(74, 93, 78, 0.08);
    border-color: rgba(74, 93, 78, 0.3);
}

.stat-content {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.stat-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--sage-green);
  opacity: 0.4;
  margin-bottom: 1.25rem;
}

.stat-value {
  font-family: var(--serif-font);
  font-size: 2.75rem;
  color: var(--sage-dark);
  font-weight: 400;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}

.stat-desc {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--sage-green);
  opacity: 0.5;
  letter-spacing: 0.02em;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(74, 93, 78, 0.1); 
}

.section-header h3 {
  font-family: var(--serif-font);
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--sage-dark);
}

.view-all {
  background: none;
  border: none;
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--sage-green);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  opacity: 0.4;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
}

.view-all:hover {
  opacity: 1;
  color: var(--gold);
  transform: translateX(4px);
}

.venue-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 3rem;
}

.venue-lux-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.04),
    0 16px 32px rgba(74, 93, 78, 0.05);
  border: 1px solid rgba(74, 93, 78, 0.15);
  transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.venue-lux-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 70px rgba(74, 93, 78, 0.1);
  border-color: rgba(74, 93, 78, 0.25);
}



.card-image {
  height: 220px;
  position: relative;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.venue-lux-card:hover .card-image img {
  transform: scale(1.08);
}

.card-tag {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background-color: rgba(255, 255, 255, 0.95);
  color: var(--sage-dark);
  padding: 0.4rem 1rem;
  border-radius: 4px;
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
  border: 0.5px solid rgba(0,0,0,0.05);
}

.card-tag.gold {
  background-color: var(--gold);
  color: white;
  border: none;
}

.card-body {
  padding: 2rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.card-header h4 {
  font-family: var(--serif-font);
  font-size: 1.15rem;
  color: var(--sage-dark);
  font-weight: 500;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--gold);
}

.location {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--sage-green);
  opacity: 0.4;
  margin-bottom: 2rem;
  letter-spacing: 0.01em;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  border-top: 0.5px solid rgba(74, 93, 78, 0.05);
}

.price {
  font-size: 0.75rem;
  color: var(--sage-green);
  opacity: 0.6;
}

.price strong {
  color: var(--sage-dark);
  font-size: 1rem;
  font-weight: 600;
}

.manage-btn {
  background: none;
  color: var(--sage-green);
  border: 1px solid rgba(74, 93, 78, 0.2);
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
}

.manage-btn:hover {
  background-color: var(--sage-green);
  color: white;
  border-color: var(--sage-green);
}

@media (max-width: 1400px) {
  .dashboard-root {
    padding: 2rem 3rem 6rem;
  }
}

@media (max-width: 1100px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

</style>