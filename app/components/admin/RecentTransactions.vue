<script setup>
const transactions = [
  { code: '#CV-9021', user: 'Julian Deutch', avatar: 'JD', venue: 'The Glass Pavilion', date: 'Jun 14, 2024', status: 'PAID' },
  { code: '#CV-9020', user: 'Alana Rossi', avatar: 'AR', venue: 'Skyline Loft', date: 'Jun 13, 2024', status: 'PENDING' },
  { code: '#CV-9019', user: 'Marcus Sterling', avatar: 'MS', venue: 'The Grand Ballroom', date: 'Jun 13, 2024', status: 'PAID' },
  { code: '#CV-9018', user: 'Elena Howe', avatar: 'EH', venue: 'Emerald Garden', date: 'Jun 12, 2024', status: 'PAID' }
]
</script>

<template>
  <div class="transactions-container card">
    <div class="header">
      <div class="header-left">
        <h3>Recent Transactions</h3>
        <p>Live feed of global venue reservations</p>
      </div>
      <NuxtLink to="/admin/bookings" class="view-all">View Full Ledger &rarr;</NuxtLink>
    </div>

    <table class="transaction-table">
      <thead>
        <tr>
          <th>BOOKING CODE</th>
          <th>USER</th>
          <th>VENUE</th>
          <th>DATE</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tx in transactions" :key="tx.code">
          <td class="code">{{ tx.code }}</td>
          <td>
            <div class="user-cell">
              <div class="avatar-mini">{{ tx.avatar }}</div>
              <span>{{ tx.user }}</span>
            </div>
          </td>
          <td class="venue">{{ tx.venue }}</td>
          <td class="date">{{ tx.date }}</td>
          <td>
            <span class="status-badge" :class="tx.status.toLowerCase()">{{ tx.status }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.transactions-container {
  padding: 2.5rem 2rem;
  overflow-x: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2.5rem;
}

.header-left h3 {
  font-size: 1.15rem;
  font-weight: 800;
  color: #0B192C;
  margin-bottom: 0.25rem;
}

.header-left p {
  font-size: 0.8rem;
  font-weight: 600;
  color: #B0B0B0;
}

.view-all {
  font-size: 0.8rem;
  font-weight: 800;
  color: #3A7DE0;
  text-decoration: none;
}

.transaction-table {
  width: 100%;
  border-collapse: collapse;
}

.transaction-table th {
  text-align: left;
  font-size: 0.7rem;
  font-weight: 800;
  color: #B0B0B0;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #EEEEEE;
  letter-spacing: 0.05em;
}

.transaction-table td {
  padding: 1.5rem 0;
  border-bottom: 1px solid #EEEEEE;
  vertical-align: middle;
}

.code {
  font-size: 0.9rem;
  font-weight: 800;
  color: #0B192C;
}

.user-cell {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: #0B192C;
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

.venue, .date {
  font-size: 0.85rem;
  font-weight: 600;
  color: #0B192C;
  opacity: 0.8;
}

.status-badge {
  font-size: 0.65rem;
  font-weight: 800;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  letter-spacing: 0.05em;
}

.status-badge.paid {
  background-color: #E6F8EF;
  color: #2DCE89;
}

.status-badge.pending {
  background-color: #FFF9E6;
  color: #FBBD23;
}

.card {
  background-color: white;
  border-radius: 20px;
  border: 1px solid #EEEEEE;
}
</style>
