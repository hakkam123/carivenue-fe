<template>
  <section class="venue-listing">
    <div class="container">
      <div class="section-header animate-fade-up">
        <div class="header-left">
          <h2>Popular Venues</h2>
        </div>
        <div class="header-right">
          <NuxtLink to="/explore" class="view-all">View all &rarr;</NuxtLink>
        </div>
      </div>

      <div class="venues-grid">
        <VenueCard 
          v-for="(venue, index) in venues" 
          :key="venue.id" 
          :venue="venue" 
          class="animate-fade-up" 
          :style="{ animationDelay: (index * 0.1) + 's' }"
          @click="goToDetail(venue.id)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const venues = [
  {
    id: 1,
    title: 'The Glass House',
    location: 'Senayan, Jakarta',
    rating: '4.8',
    price: '$1,200',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=600',
    tags: ['Wedding', 'Engagement']
  },
  {
    id: 2,
    title: 'Grand Ballroom',
    location: 'Sudirman, Jakarta',
    rating: '4.9',
    price: '$2,500',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600',
    tags: ['Corporate', 'Full Facilities']
  },
  {
    id: 3,
    title: 'Highland Garden',
    location: 'Puncak, Bogor',
    rating: '4.7',
    price: '$900',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=600',
    tags: ['Rooftop', 'Outdoor']
  }
]

const goToDetail = (id) => {
  navigateTo(`/venue/${id}`)
}
</script>

<style scoped>
.venue-listing {
  background-color: white;
  padding: 8rem 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
}

.header-left h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary);
  letter-spacing: -0.02em;
}

.view-all {
  color: var(--accent);
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: var(--transition);
}

.view-all:hover {
  text-decoration: underline;
  opacity: 0.8;
}

.venues-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

@media (max-width: 768px) {
  .venue-listing {
    padding: 4rem 0;
  }
  
  .header-left h2 {
    font-size: 2rem;
  }
}
</style>
