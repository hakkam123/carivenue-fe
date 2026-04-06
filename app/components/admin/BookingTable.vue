<script setup>
const bookings = [
  { 
    code: '#CV-29492', 
    user: 'John Doe', 
    email: 'john.d@example.com', 
    avatar: 'JD',
    venue: 'Skyline Rooftop Lounge', 
    location: 'Manhattan, NY',
    date: 'Oct 24, 2023',
    time: '18:00 - 22:00',
    amount: '$1,200.00',
    status: 'PAID'
  },
  { 
    code: '#CV-29405', 
    user: 'Sarah Richardson', 
    email: 'sarah.r@web.com', 
    avatar: 'SR',
    venue: 'Grand Ballroom A', 
    location: 'Jersey City, NJ',
    date: 'Oct 25, 2023',
    time: '09:00 - 17:00',
    amount: '$4,500.00',
    status: 'PENDING'
  },
  { 
    code: '#CV-29488', 
    user: 'Marcus Lane', 
    email: 'm.lane@tech.com', 
    avatar: 'ML',
    venue: 'The Industrial Loft', 
    location: 'Brooklyn, NY',
    date: 'Oct 22, 2023',
    time: '20:00 - 01:00',
    amount: '$2,100.00',
    status: 'CANCELLED'
  },
  { 
    code: '#CV-29412', 
    user: 'Alice Wong', 
    email: 'alice@design.io', 
    avatar: 'AW',
    venue: 'Zen Garden Center', 
    location: 'Staten Island, NY',
    date: 'Oct 28, 2023',
    time: '10:00 - 15:00',
    amount: '$850.00',
    status: 'PAID'
  }
]
</script>

<template>
  <div class="booking-table-container">
    <div class="filters-bar">
      <div class="filter-group">
        <div class="filter-item">
          <label>DATE RANGE</label>
          <button class="filter-select">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Oct 12 - Oct 19, 2023
          </button>
        </div>
        <div class="filter-item">
          <label>STATUS</label>
          <button class="filter-select">All Statuses</button>
        </div>
        <button class="export-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Export
        </button>
      </div>
    </div>

    <table class="booking-table">
      <thead>
        <tr>
          <th>BOOKING CODE</th>
          <th>USER</th>
          <th>VENUE</th>
          <th>DATE</th>
          <th>AMOUNT</th>
          <th>STATUS</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="booking in bookings" :key="booking.code">
          <td class="code">{{ booking.code }}</td>
          <td>
            <div class="user-cell">
              <div class="avatar-mini">{{ booking.avatar }}</div>
              <div class="user-info">
                <strong>{{ booking.user }}</strong>
                <span>{{ booking.email }}</span>
              </div>
            </div>
          </td>
          <td>
            <div class="venue-cell">
              <strong>{{ booking.venue }}</strong>
              <span>{{ booking.location }}</span>
            </div>
          </td>
          <td>
            <div class="date-cell">
              <strong>{{ booking.date }}</strong>
              <span>{{ booking.time }}</span>
            </div>
          </td>
          <td class="amount">{{ booking.amount }}</td>
          <td>
            <span class="status-badge" :class="booking.status.toLowerCase()">{{ booking.status }}</span>
          </td>
          <td>
            <button class="action-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="table-footer">
        <div class="results-count">Showing 1-4 of 128 results</div>
        <div class="pagination">
            <button class="page-arrow prev">&laquo;</button>
            <button class="page-btn active">1</button>
            <button class="page-btn">2</button>
            <button class="page-btn">3</button>
            <span>...</span>
            <button class="page-btn">32</button>
            <button class="page-arrow next">&raquo;</button>
        </div>
    </div>
  </div>
</template>

<style scoped>
.booking-table-container {
  background-color: white;
  border-radius: 20px;
  border: 1px solid #EEEEEE;
  overflow: hidden;
}

.filters-bar {
  padding: 1.5rem 2rem;
  background-color: white;
  border-bottom: 1px solid #EEEEEE;
}

.filter-group {
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
}

.filter-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.filter-item label {
  font-size: 0.65rem;
  font-weight: 800;
  color: #B0B0B0;
  letter-spacing: 0.05em;
}

.filter-select {
  background-color: #F8F9FA;
  border: 1px solid #EEEEEE;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 700;
  color: #0B192C;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.export-btn {
  background-color: #0B192C;
  color: white;
  border: none;
  padding: 0.65rem 1.25rem;
  border-radius: 10px;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.booking-table {
  width: 100%;
  border-collapse: collapse;
}

.booking-table th {
  text-align: left;
  font-size: 0.7rem;
  font-weight: 800;
  color: #B0B0B0;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #EEEEEE;
  letter-spacing: 0.05em;
}

.booking-table td {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #EEEEEE;
}

.code {
  font-size: 0.85rem;
  font-weight: 800;
  color: #3A7DE0;
}

.user-cell {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar-mini {
  width: 32px;
  height: 32px;
  background-color: #F0F0F5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: 800;
  color: #3A7DE0;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-info strong {
  font-size: 0.9rem;
  font-weight: 800;
  color: #0B192C;
}

.user-info span {
  font-size: 0.7rem;
  font-weight: 600;
  color: #B0B0B0;
}

.venue-cell, .date-cell {
  display: flex;
  flex-direction: column;
}

.venue-cell strong, .date-cell strong {
  font-size: 0.85rem;
  font-weight: 800;
  color: #0B192C;
}

.venue-cell span, .date-cell span {
  font-size: 0.75rem;
  font-weight: 600;
  color: #B0B0B0;
}

.amount {
  font-size: 0.9rem;
  font-weight: 800;
  color: #0B192C;
}

.status-badge {
  font-size: 0.65rem;
  font-weight: 800;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  letter-spacing: 0.05em;
}

.status-badge.paid {
  background-color: #E8F0FE;
  color: #3A7DE0;
}

.status-badge.pending {
  background-color: #F8F9FA;
  color: #B0B0B0;
  border: 1px solid #EEEEEE;
}

.status-badge.cancelled {
  background-color: #FFE8E8;
  color: #F5365C;
}

.action-btn {
  background: none;
  border: none;
  color: #B0B0B0;
  cursor: pointer;
}

.table-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
}

.results-count {
    font-size: 0.75rem;
    font-weight: 700;
    color: #B0B0B0;
}

.pagination {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.page-btn {
    width: 32px;
    height: 32px;
    border: none;
    background: none;
    color: #3A7DE0;
    font-weight: 800;
    font-size: 0.8rem;
    cursor: pointer;
    border-radius: 8px;
}

.page-btn.active {
    background-color: #3A7DE0;
    color: white;
}

.page-arrow {
    background: none;
    border: none;
    color: #B0B0B0;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0 0.5rem;
}
</style>
