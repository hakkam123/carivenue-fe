<script setup>
const venues = [
  { 
    id: 'VEN-90210', 
    name: 'The Zenith Ballroom', 
    location: 'Manhattan, NY', 
    subLocation: '120 Central Park South',
    capacity: '450 guests',
    price: '$1,200',
    status: 'ACTIVE',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=200'
  },
  { 
    id: 'VEN-10482', 
    name: 'Industrial Hub Loft', 
    location: 'Brooklyn, NY', 
    subLocation: '88 Water St, DUMBO',
    capacity: '120 guests',
    price: '$450',
    status: 'ACTIVE',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=200'
  },
  { 
    id: 'VEN-33291', 
    name: 'The Obsidian Lounge', 
    location: 'Chicago, IL', 
    subLocation: 'Magnificent Mile',
    capacity: '75 guests',
    price: '$800',
    status: 'INACTIVE',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=200'
  }
]
</script>

<template>
  <div class="venue-table-container">
    <div class="filters-bar">
      <div class="filter-group">
        <button class="filter-btn dropdown-btn">
          Advanced Filters
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div class="tab-filters">
          <button class="tab-btn active">ALL</button>
          <button class="tab-btn">ACTIVE</button>
          <button class="tab-btn">INACTIVE</button>
        </div>
      </div>
      <div class="results-count">
        Showing 1-10 of 128 results
      </div>
    </div>

    <table class="venue-table">
      <thead>
        <tr>
          <th>VENUE DETAILS</th>
          <th>LOCATION</th>
          <th>CAPACITY</th>
          <th>PRICE RATE</th>
          <th>STATUS</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="venue in venues" :key="venue.id">
          <td>
            <div class="venue-cell">
              <div class="venue-img">
                <img :src="venue.image" :alt="venue.name" />
              </div>
              <div class="venue-info">
                <strong>{{ venue.name }}</strong>
                <span>ID: {{ venue.id }}</span>
              </div>
            </div>
          </td>
          <td>
            <div class="location-cell">
              <strong>{{ venue.location }}</strong>
              <span>{{ venue.subLocation }}</span>
            </div>
          </td>
          <td class="capacity">{{ venue.capacity }}</td>
          <td class="price"><strong>{{ venue.price }}</strong><span> / hr</span></td>
          <td>
            <span class="status-badge" :class="venue.status.toLowerCase()">
              <span class="dot"></span>
              {{ venue.status }}
            </span>
          </td>
          <td>
            <button class="action-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <button class="page-link">&laquo; Previous</button>
      <div class="page-numbers">
        <button class="page-btn active">1</button>
        <button class="page-btn">2</button>
        <button class="page-btn">3</button>
        <span>...</span>
        <button class="page-btn">13</button>
      </div>
      <button class="page-link">Next &raquo;</button>
    </div>
  </div>
</template>

<style scoped>
.venue-table-container {
  background-color: white;
  border-radius: 20px;
  padding: 0;
  border: 1px solid #EEEEEE;
  margin-top: 2rem;
  overflow: hidden;
}

.filters-bar {
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #EEEEEE;
  background-color: #FAFAFA;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.dropdown-btn {
  background: white;
  border: 1px solid #EEEEEE;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #0B192C;
  cursor: pointer;
}

.tab-filters {
  display: flex;
  background-color: #EEEEEE;
  padding: 0.25rem;
  border-radius: 10px;
  gap: 0.25rem;
}

.tab-btn {
  padding: 0.4rem 1rem;
  border: none;
  background: none;
  font-size: 0.7rem;
  font-weight: 800;
  color: #B0B0B0;
  border-radius: 8px;
  cursor: pointer;
}

.tab-btn.active {
  background-color: #0B192C;
  color: white;
}

.results-count {
  font-size: 0.75rem;
  font-weight: 700;
  color: #B0B0B0;
}

.venue-table {
  width: 100%;
  border-collapse: collapse;
}

.venue-table th {
  text-align: left;
  font-size: 0.7rem;
  font-weight: 800;
  color: #B0B0B0;
  padding: 1.5rem 2rem;
  background-color: white;
  border-bottom: 1px solid #EEEEEE;
  letter-spacing: 0.05em;
}

.venue-table td {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #EEEEEE;
  vertical-align: middle;
}

.venue-cell {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.venue-img {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #F8F9FA;
}

.venue-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.venue-info {
  display: flex;
  flex-direction: column;
}

.venue-info strong {
  font-size: 0.95rem;
  font-weight: 800;
  color: #0B192C;
}

.venue-info span {
  font-size: 0.7rem;
  font-weight: 700;
  color: #B0B0B0;
}

.location-cell {
  display: flex;
  flex-direction: column;
}

.location-cell strong {
  font-size: 0.85rem;
  font-weight: 800;
  color: #0B192C;
}

.location-cell span {
  font-size: 0.75rem;
  font-weight: 600;
  color: #B0B0B0;
}

.capacity {
  font-size: 0.85rem;
  font-weight: 700;
  color: #0B192C;
  opacity: 0.8;
}

.price strong {
  font-size: 0.95rem;
  font-weight: 800;
  color: #0B192C;
}

.price span {
  font-size: 0.75rem;
  font-weight: 600;
  color: #B0B0B0;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.65rem;
  font-weight: 800;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  letter-spacing: 0.05em;
}

.status-badge .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.status-badge.active {
  background-color: #E8F0FE;
  color: #3A7DE0;
}

.status-badge.active .dot {
  background-color: #3A7DE0;
}

.status-badge.inactive {
  background-color: #FFE8E8;
  color: #F5365C;
}

.status-badge.inactive .dot {
  background-color: #F5365C;
}

.action-btn {
  background: none;
  border: none;
  color: #B0B0B0;
  cursor: pointer;
  padding: 0;
}

.pagination {
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-link {
  background: none;
  border: none;
  font-size: 0.8rem;
  font-weight: 700;
  color: #B0B0B0;
  cursor: pointer;
}

.page-numbers {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.page-btn {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: none;
  font-size: 0.8rem;
  font-weight: 700;
  color: #B0B0B0;
  cursor: pointer;
}

.page-btn.active {
  background-color: #3A7DE0;
  color: white;
}
</style>
