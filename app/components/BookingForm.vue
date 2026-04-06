<template>
  <div class="booking-form animate-fade-up">
    <!-- Section 1: Event Schedule & Guests -->
    <section class="form-card">
      <div class="section-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
        <h3>Event Schedule & Guests</h3>
      </div>
      
      <div class="form-grid">
        <div class="form-item">
          <label>EVENT DATE</label>
          <div class="input-wrapper">
            <input type="text" value="11/24/2024" readonly />
          </div>
        </div>
        <div class="form-item">
          <label>GUEST COUNT</label>
          <div class="input-wrapper guest-counter">
            <button class="counter-btn">&minus;</button>
            <span class="count">45</span>
            <button class="counter-btn">&plus;</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Organizer Details -->
    <section class="form-card">
      <div class="section-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        <h3>Organizer Details</h3>
      </div>
      
      <div class="form-grid">
        <div class="form-item">
          <label>FULL NAME</label>
          <div class="input-wrapper">
            <input type="text" value="Julianne Moore" />
          </div>
        </div>
        <div class="form-item">
          <label>EMAIL ADDRESS</label>
          <div class="input-wrapper">
            <input type="email" value="julianne@vanguard.com" />
          </div>
        </div>
      </div>
      
      <div class="form-item full-width mt-1">
        <label>EVENT DESCRIPTION</label>
        <div class="input-wrapper textarea">
          <textarea placeholder="Briefly describe the nature of your event..."></textarea>
        </div>
      </div>
    </section>

    <!-- Section 3: Payment Method -->
    <section class="form-card">
      <div class="section-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
        <h3>Payment Method</h3>
      </div>
      
      <div class="payment-grid">
        <div v-for="method in paymentMethods" :key="method.id" class="payment-option" :class="{ 'active': activePayment === method.id }" @click="activePayment = method.id">
          <div v-html="method.icon" class="payment-icon"></div>
          <span>{{ method.label }}</span>
        </div>
      </div>

      <div class="payment-footer">
        <div class="secure-badge">
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
             <span>SSL SECURE</span>
        </div>
        <div class="secure-badge">
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
             <span>FRAUD PROTECTION</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const activePayment = ref('card')

const paymentMethods = [
  { 
    id: 'card', 
    label: 'Credit Card', 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`
  },
  { 
    id: 'bank', 
    label: 'Bank Transfer', 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="m3 7 9-4 9 4"/><path d="M5 21V10"/><path d="M9 21V10"/><path d="M15 21V10"/><path d="M19 21V10"/><path d="m5 10 7-3 7 3"/><path d="m5 10 1 1"/><path d="m19 10-1 1"/><path d="M7 10v1"/><path d="M17 10v1"/><path d="M11 10v1"/><path d="M13 10v1"/></svg>` 
  },
  { 
    id: 'crypto', 
    label: 'Crypto', 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><polyline points="19 7 19 20 5 20 5 7"/><line x1="12" x2="12" y1="7" y2="20"/></svg>` 
  }
]
</script>

<style scoped>
.booking-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-card {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 2rem;
  color: var(--primary);
}

.section-title h3 {
  font-size: 1.25rem;
  margin: 0;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-item label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.input-wrapper {
  background: #F1F5F9;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: var(--transition);
  border: 1px solid transparent;
}

.input-wrapper:focus-within {
  background: white;
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(0, 26, 44, 0.05);
}

.input-wrapper input,
.input-wrapper textarea {
  width: 100%;
  padding: 1rem 1.2rem;
  border: none;
  background: transparent;
  font-size: 1rem;
  font-weight: 500;
  color: var(--primary);
  outline: none;
}

.input-wrapper.textarea {
  min-height: 120px;
}

.input-wrapper textarea {
  resize: none;
  height: 100%;
}

.guest-counter {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.counter-btn {
  padding: 0.8rem 1.5rem;
  background: transparent;
  font-size: 1.5rem;
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.count {
  font-weight: 700;
  font-size: 1.1rem;
}

.mt-1 {
  margin-top: 1.5rem;
}

/* Payment Grid */
.payment-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.payment-option {
  background: #F1F5F9;
  padding: 1.5rem;
  border-radius: 0.75rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  transition: var(--transition);
  border: 2px solid transparent;
}

.payment-option:hover {
  background: #E2E8F0;
}

.payment-option.active {
  background: white;
  border-color: var(--primary);
  box-shadow: 0 10px 20px rgba(0, 26, 44, 0.05);
}

.payment-icon {
  color: var(--primary);
}

.payment-option span {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--primary);
}

.payment-footer {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.secure-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94A3B8;
  font-size: 0.7rem;
  font-weight: 700;
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>
