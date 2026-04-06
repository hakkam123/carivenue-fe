<script setup>
import { ref, computed } from 'vue'

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

// Current active view: 'grid' or 'map'
const currentView = ref('grid')

// Filter State from Sidebar
const filters = ref({
  location: '',
  capacity: '150-500',
  eventTypes: ['Corporate Gala']
})

// Pagination state
const currentPage = ref(1)
const itemsPerPage = 3

// Computed: Filter venues
const filteredVenues = computed(() => {
  return allVenues.filter(venue => {
    // Basic mock filtering logic
    const matchLoc = !filters.value.location || venue.location.toLowerCase().includes(filters.value.location.toLowerCase())
    const matchCap = !filters.value.capacity || venue.capacity === filters.value.capacity
    const matchType = filters.value.eventTypes.length === 0 || filters.value.eventTypes.includes(venue.eventType)
    return matchLoc && matchCap && matchType
  })
})

// Computed: Pagination
const totalPages = computed(() => Math.ceil(filteredVenues.value.length / itemsPerPage) || 1)

const paginatedVenues = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredVenues.value.slice(start, end)
})

const handleFilterUpdate = (newFilters) => {
  filters.value = { ...newFilters }
  currentPage.value = 1 // Reset to page 1 on filter
}

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    // Optional: scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const goToDetail = (id) => {
  navigateTo(`/checkout/${id}`)
}
</script>

<template>
  <div class="explore-page">
    <div class="explore-container">
      <!-- Sidebar -->
      <div class="sidebar-wrapper">
        <ExploreFilter :initialFilters="filters" @update:filters="handleFilterUpdate" />
      </div>
      
      <!-- Main Content -->
      <main class="content-wrapper">
        <nav class="breadcrumbs">
          <span>Directory</span>
          <span class="separator">›</span>
          <span class="current">Venues</span>
        </nav>
        
        <header class="content-header">
          <div class="header-text">
            <h1 class="title">Curated Venues in <span class="highlight">{{ filters.location || 'London' }}</span></h1>
            <p class="subtitle">Showing {{ filteredVenues.length }} hand-selected architectural masterpieces for your next event.</p>
          </div>
          
          <div class="view-switcher">
            <button class="view-btn" :class="{ active: currentView === 'grid' }" @click="currentView = 'grid'">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              Grid
            </button>
            <button class="view-btn" :class="{ active: currentView === 'map' }" @click="currentView = 'map'">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Map
            </button>
          </div>
        </header>
        
        <div v-if="currentView === 'grid'" class="venues-grid">
          <div v-if="paginatedVenues.length === 0" class="no-results">
            <p>No venues match your current filters. Please try relaxing your search.</p>
          </div>
          
          <VenueCard 
            v-for="venue in paginatedVenues" 
            :key="venue.id" 
            :venue="venue" 
            @click="goToDetail(venue.id)" 
          />
        </div>

        <div v-if="currentView === 'map'" class="map-view-container">
          <ClientOnly fallback-tag="div" fallback="Loading map...">
            <VenueMap :venues="filteredVenues" />
          </ClientOnly>
        </div>
        
        <footer v-if="currentView === 'grid' && totalPages > 1" class="pagination">
          <button class="page-arrow prev" :disabled="currentPage === 1" @click="changePage(currentPage - 1)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <div class="page-numbers">
            <button 
              v-for="page in totalPages" 
              :key="page"
              class="page-num" 
              :class="{ active: currentPage === page }"
              @click="changePage(page)"
            >
              {{ page }}
            </button>
          </div>
          <button class="page-arrow next" :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </footer>
      </main>
    </div>
  </div>
</template>

<style scoped>
.explore-page {
  font-family: 'Manrope', sans-serif;
  background-color: white;
  min-height: 100vh;
}

.explore-container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  padding: 4rem 2rem;
}

.sidebar-wrapper {
  width: 280px;
  flex-shrink: 0;
  border-right: 1px solid #f0f0f0;
}

.content-wrapper {
  flex: 1;
  padding-left: 4rem;
}

.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: #0B192C;
  opacity: 0.4;
  margin-bottom: 2rem;
}

.separator {
  margin-top: -2px;
}

.current {
  color: #A67C00;
  opacity: 1;
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3.5rem;
}

.title {
  font-size: 2.25rem;
  font-weight: 800;
  color: #0B192C;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}

.highlight {
  color: #A67C00;
  text-transform: capitalize;
}

.subtitle {
  font-size: 1rem;
  color: #0B192C;
  opacity: 0.6;
  font-weight: 500;
}

.view-switcher {
  display: flex;
  background: #f8f8fb;
  padding: 0.4rem;
  border-radius: 12px;
  border: 1px solid #f0f0f0;
}

.view-btn {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1.25rem;
  border: none;
  background: none;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 700;
  color: #0B192C;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.view-btn.active {
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.venues-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 5rem;
}

.no-results {
  grid-column: span 3;
  padding: 4rem;
  text-align: center;
  color: #0B192C;
  font-weight: 500;
  background: #f8f8fb;
  border-radius: 16px;
  border: 1px dashed #d0d0d0;
}

.map-view-container {
  height: 600px;
  margin-bottom: 5rem;
  border-radius: 24px;
  border: 1px solid #f0f0f0;
  background: #f8f8fb;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.page-arrow {
  background: none;
  border: none;
  color: #0B192C;
  cursor: pointer;
  opacity: 0.4;
  display: flex;
  align-items: center;
  transition: opacity 0.2s ease;
}

.page-arrow:disabled {
  opacity: 0.1;
  cursor: not-allowed;
}

.page-arrow:hover:not(:disabled) {
  opacity: 1;
}

.page-numbers {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.page-num {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: none;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 700;
  color: #0B192C;
  cursor: pointer;
  transition: all 0.2s ease;
}

.page-num:hover {
  background: #f0f0f5;
}

.page-num.active {
  background: #0B192C;
  color: white;
}

@media (max-width: 1200px) {
  .venues-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 900px) {
  .explore-container {
    flex-direction: column;
  }
  
  .sidebar-wrapper {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 3rem;
  }
  
  .content-wrapper {
    padding-left: 0;
  }
}

@media (max-width: 640px) {
  .venues-grid {
    grid-template-columns: 1fr;
  }
  
  .content-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
  
  .map-view-container {
    height: 400px;
  }
}
</style>
