<template>
  <div class="summary-card animate-fade-up" style="animation-delay: 0.1s">
    <div class="card-image">
      <img src="/checkout-venue.png" alt="Venue" />
      <div class="badge">EXCLUSIVE VENUE</div>
    </div>
    
    <div class="card-content">
      <div class="venue-header">
        <h3>The Obsidian Glass Estate</h3>
        <p class="location">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          Beverly Hills, California
        </p>
      </div>

      <table class="pricing-table">
        <tr v-for="item in pricingItems" :key="item.label">
          <td>{{ item.label }}</td>
          <td class="price">{{ item.price }}</td>
        </tr>
      </table>

      <div class="divider"></div>

      <div class="total-section">
        <div class="total-label">
          <span>TOTAL INVESTMENT</span>
          <span class="price-main">$6,586.50</span>
        </div>
        <div class="refundable-tag">
          <span>FULLY REFUNDABLE</span>
          <p>Prior to Nov 10th</p>
        </div>
      </div>

      <button class="proceed-btn">
        Proceed to Payment
      </button>

      <p class="terms">
        By clicking "Proceed to Payment" you agree to our <a href="#">Venue Guidelines</a> and <a href="#">Terms of Service</a>.
      </p>
    </div>
  </div>
</template>

<script setup>
const pricingItems = [
  { label: 'Venue Rental (12 hours)', price: '$4,500.00' },
  { label: 'Concierge & Staffing', price: '$850.00' },
  { label: 'Cleaning & Maintenance', price: '$350.00' },
  { label: 'Service Fee (6%)', price: '$342.00' },
  { label: 'Occupancy Taxes', price: '$544.50' }
]
</script>

<style scoped>
.summary-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 2rem;
}

.card-image {
  position: relative;
  height: 200px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #B69121;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.05em;
}

.card-content {
  padding: 2rem;
}

.venue-header h3 {
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.location {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.pricing-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
}

.pricing-table td {
  padding: 0.6rem 0;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.pricing-table td.price {
  text-align: right;
  font-weight: 700;
  color: var(--primary);
}

.divider {
  height: 1px;
  background: #E2E8F0;
  margin-bottom: 2rem;
}

.total-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2.5rem;
}

.total-label {
  display: flex;
  flex-direction: column;
}

.total-label span:first-child {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.price-main {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--primary);
  line-height: 1;
}

.refundable-tag {
  text-align: right;
}

.refundable-tag span {
  font-size: 0.7rem;
  font-weight: 800;
  color: #B6913E;
  letter-spacing: 0.05em;
}

.refundable-tag p {
  font-size: 0.65rem;
  color: var(--text-muted);
}

.proceed-btn {
  width: 100%;
  padding: 1.25rem;
  background: linear-gradient(135deg, #B6913E 0%, #8C6F2B 100%);
  color: white;
  border-radius: 0.75rem;
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: 0 10px 20px -5px rgba(182, 145, 62, 0.4);
  margin-bottom: 1.5rem;
}

.proceed-btn:hover {
  transform: translateY(-3px);
  filter: brightness(1.1);
  box-shadow: 0 15px 30px -5px rgba(182, 145, 62, 0.6);
}

.terms {
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--text-muted);
  text-align: center;
}

.terms a {
  color: var(--primary);
  text-decoration: underline;
  font-weight: 600;
}
</style>
