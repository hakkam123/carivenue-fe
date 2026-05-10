<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})

const payments = [
  { id: 'PAY-90122', user: 'Julian Deutch', venue: 'The Glass Pavilion', amount: '$1,200.00', date: 'Jun 14, 2024', status: 'COMPLETED', method: 'Visa •••• 4242' },
  { id: 'PAY-90121', user: 'Alana Rossi', venue: 'Skyline Loft', amount: '$2,500.00', date: 'Jun 13, 2024', status: 'PENDING', method: 'Mastercard •••• 8888' },
  { id: 'PAY-90120', user: 'Marcus Sterling', venue: 'The Grand Ballroom', amount: '$5,000.00', date: 'Jun 13, 2024', status: 'REFUNDED', method: 'Bank Transfer' },
  { id: 'PAY-90119', user: 'Elena Howe', venue: 'Emerald Garden', amount: '$900.00', date: 'Jun 12, 2024', status: 'FAILED', method: 'Visa •••• 1111' },
  { id: 'PAY-90118', user: 'Thomas Vance', venue: 'Zen Garden', amount: '$1,500.00', date: 'Jun 11, 2024', status: 'COMPLETED', method: 'Apple Pay' }
]

const getStatusClass = (status) => {
  switch (status) {
    case 'COMPLETED': return 'status-completed'
    case 'PENDING': return 'status-pending'
    case 'REFUNDED': return 'status-refunded'
    case 'FAILED': return 'status-failed'
    default: return ''
  }
}
</script>

<template>
  <div class="payments-page">
    <div class="page-header">
      <div class="header-left">
        <h1>Payment Ledger</h1>
        <p>Global transaction history and financial performance.</p>
      </div>
      <div class="header-right">
        <button class="export-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Export CSV
        </button>
      </div>
    </div>

    <div class="payments-table-wrapper card" v-motion-slide-visible-once-bottom>
      <table class="payments-table">
        <thead>
          <tr>
            <th>TRANSACTION ID</th>
            <th>USER</th>
            <th>VENUE</th>
            <th>AMOUNT</th>
            <th>DATE</th>
            <th>METHOD</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pay in payments" :key="pay.id">
            <td class="id-cell">{{ pay.id }}</td>
            <td class="user-cell">{{ pay.user }}</td>
            <td class="venue-cell">{{ pay.venue }}</td>
            <td class="amount-cell">{{ pay.amount }}</td>
            <td class="date-cell">{{ pay.date }}</td>
            <td class="method-cell">{{ pay.method }}</td>
            <td>
              <span class="status-badge" :class="getStatusClass(pay.status)">
                {{ pay.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
}

.header-left h1 {
  font-size: 2.25rem;
  font-weight: 800;
  color: #0B192C;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.header-left p {
  font-size: 1rem;
  font-weight: 600;
  color: #B0B0B0;
}

.export-btn {
  background-color: #F8F9FA;
  border: 1px solid #EEEEEE;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.export-btn:hover {
  background-color: #f0f0f5;
  transform: translateY(-2px);
}

.payments-table-wrapper {
  overflow-x: auto;
}

.card {
  background-color: white;
  border-radius: 20px;
  border: 1px solid #EEEEEE;
  padding: 0;
}

.payments-table {
  width: 100%;
  border-collapse: collapse;
}

.payments-table th {
  text-align: left;
  font-size: 0.7rem;
  font-weight: 800;
  color: #B0B0B0;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #EEEEEE;
  letter-spacing: 0.05em;
}

.payments-table td {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #EEEEEE;
  font-size: 0.9rem;
  font-weight: 600;
  color: #0B192C;
}

.id-cell {
  font-weight: 800;
  color: #3A7DE0;
}

.status-badge {
  font-size: 0.65rem;
  font-weight: 800;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  letter-spacing: 0.05em;
}

.status-completed {
  background-color: #E6F8EF;
  color: #2DCE89;
}

.status-pending {
  background-color: #FFF9E6;
  color: #FBBD23;
}

.status-refunded {
  background-color: #F8F9FA;
  color: #B0B0B0;
  border: 1px solid #EEEEEE;
}

.status-failed {
  background-color: #FFE8E8;
  color: #F5365C;
}
</style>
