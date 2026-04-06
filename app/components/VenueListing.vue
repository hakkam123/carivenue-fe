<template>
  <section class="venue-listing">
    <div class="container">
      <div class="section-header animate-fade-up">
        <div class="header-left">
          <h2>Popular Venues</h2>
        </div>
        <div class="header-right">
          <a href="#" class="view-all">View all &rarr;</a>
        </div>
      </div>

      <div class="venues-grid">
        <div v-for="(venue, index) in venues" :key="index" class="venue-card animate-fade-up" :style="{ animationDelay: (index * 0.1) + 's' }">
          <div class="venue-image">
            <img :src="venue.image" :alt="venue.title" />
            <div class="badge">RECOMENDED</div>
            <div class="wishlist">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </div>
          </div>
          <div class="venue-info">
            <div class="top-info">
              <h3>{{ venue.title }}</h3>
              <div class="rating">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span>{{ venue.rating }}</span>
              </div>
            </div>
            <p class="location">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              {{ venue.location }}
            </p>
            <div class="tags">
                <span v-for="tag in venue.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const venues = [
  {
    title: 'The Glass House',
    location: 'Senayan, Jakarta',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=600',
    tags: ['Wedding', 'Engagement']
  },
  {
    title: 'Grand Ballroom',
    location: 'Sudirman, Jakarta',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600',
    tags: ['Corporate', 'Full Facilities']
  },
  {
    title: 'Highland Garden',
    location: 'Puncak, Bogor',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=600',
    tags: ['Rooftop', 'Outdoor']
  }
]
</script>

<style scoped>
.venue-listing {
  background-color: white;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
}

.header-left h2 {
  font-size: 2rem;
  color: var(--primary);
}

.view-all {
  color: var(--accent);
  font-weight: 700;
  font-size: 1rem;
}

.view-all:hover {
  text-decoration: underline;
}

.venues-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

.venue-card {
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  transition: var(--transition);
  border: 1px solid rgba(0, 0, 0, 0.02);
}

.venue-card:hover {
  transform: scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.venue-image {
  position: relative;
  height: 350px;
}

.venue-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--accent);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 1px;
}

.wishlist {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  color: #EB5757;
  cursor: pointer;
}

.venue-info {
  padding: 1.5rem;
}

.top-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.top-info h3 {
  font-size: 1.2rem;
  color: var(--primary);
  margin: 0;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: var(--accent);
  font-weight: 700;
  font-size: 0.9rem;
}

.location {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text-muted);
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.tag {
    background: var(--bg-light);
    color: var(--text-muted);
    padding: 0.3rem 0.8rem;
    border-radius: 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;
}
</style>
