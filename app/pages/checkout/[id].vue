<script setup>
import { ref } from 'vue'

const guestCount = ref(45)
const paymentMethod = ref('credit_card') // 'credit_card', 'bank_transfer', 'crypto'
const name = ref('Julianne Moore')
const email = ref('julianne@vanguard.com')
const description = ref('')
const date = ref('11/24/2024')

const decGuests = () => {
  if (guestCount.value > 1) guestCount.value--
}

const incGuests = () => {
  guestCount.value++
}

const isProcessing = ref(false)
const isSuccess = ref(false)

const proceed = () => {
  if (isProcessing.value || isSuccess.value) return
  
  isProcessing.value = true
  
  // Simulate API call
  setTimeout(() => {
    isProcessing.value = false
    isSuccess.value = true
    
    // Reset after a few seconds
    setTimeout(() => {
      isSuccess.value = false
    }, 3000)
  }, 1500)
}
</script>

<template>
  <div class="checkout-page">
    <div class="checkout-container">
      
      <!-- Stepper and Header -->
      <header class="checkout-header">
        <div class="stepper">
          <div class="step active">
            <span class="step-num">1</span>
            <span class="step-text">Details</span>
          </div>
          <div class="step-line"></div>
          <div class="step">
            <span class="step-num">2</span>
            <span class="step-text">Payment</span>
          </div>
          <div class="step-line"></div>
          <div class="step">
            <span class="step-num">3</span>
            <span class="step-text">Confirm</span>
          </div>
        </div>
        
        <h1 class="page-title">Finalize Your Curation</h1>
        <p class="page-subtitle">Review your selection and provide event details to secure this exclusive venue.</p>
      </header>
      
      <div class="checkout-grid">
        <!-- Left Column: Forms -->
        <div class="form-sections">
          
          <!-- Event Schedule & Guests -->
          <section class="form-card">
            <div class="card-header">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B6E00" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <h2>Event Schedule & Guests</h2>
            </div>
            <div class="input-row">
              <div class="input-group">
                <label>EVENT DATE</label>
                <input type="text" v-model="date" class="form-input" />
              </div>
              <div class="input-group">
                <label>GUEST COUNT</label>
                <div class="counter-input">
                  <button class="cnt-btn" @click="decGuests">−</button>
                  <span class="cnt-val">{{ guestCount }}</span>
                  <button class="cnt-btn" @click="incGuests">+</button>
                </div>
              </div>
            </div>
          </section>
          
          <!-- Organizer Details -->
          <section class="form-card">
            <div class="card-header">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B6E00" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <h2>Organizer Details</h2>
            </div>
            <div class="input-row">
              <div class="input-group">
                <label>FULL NAME</label>
                <input type="text" v-model="name" class="form-input" />
              </div>
              <div class="input-group">
                <label>EMAIL ADDRESS</label>
                <input type="email" v-model="email" class="form-input" />
              </div>
            </div>
            <div class="input-group full-width mt-4">
              <label>EVENT DESCRIPTION</label>
              <textarea placeholder="Briefly describe the nature of your event..." v-model="description" class="form-textarea"></textarea>
            </div>
          </section>
          
          <!-- Payment Method -->
          <section class="form-card">
            <div class="card-header">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B6E00" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
              <h2>Payment Method</h2>
            </div>
            <div class="payment-options">
              <button class="pay-btn" :class="{ active: paymentMethod === 'credit_card' }" @click="paymentMethod = 'credit_card'">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                <span>Credit Card</span>
              </button>
              <button class="pay-btn" :class="{ active: paymentMethod === 'bank_transfer' }" @click="paymentMethod = 'bank_transfer'">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v2z"/></svg>
                <span>Bank Transfer</span>
              </button>
              <button class="pay-btn" :class="{ active: paymentMethod === 'crypto' }" @click="paymentMethod = 'crypto'">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                <span>Crypto</span>
              </button>
            </div>
          </section>
          
          <div class="trust-badges">
            <span class="badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> SSL SECURE</span>
            <span class="badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> FRAUD PROTECTION</span>
          </div>
          
        </div>
        
        <!-- Right Column: Order Summary -->
        <div class="summary-section">
          <div class="summary-card">
            <div class="summary-image-wrap">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" alt="Venue" class="summary-image" />
              <div class="excl-badge">EXCLUSIVE VENUE</div>
            </div>
            
            <div class="summary-content">
              <h2 class="venue-name">The Obsidian Glass Estate</h2>
              <div class="venue-location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                Beverly Hills, California
              </div>
              
              <div class="price-breakdown">
                <div class="price-row">
                  <span>Venue Rental (12 hours)</span>
                  <strong>$4,500.00</strong>
                </div>
                <div class="price-row">
                  <span>Concierge & Staffing</span>
                  <strong>$850.00</strong>
                </div>
                <div class="price-row">
                  <span>Cleaning & Maintenance</span>
                  <strong>$350.00</strong>
                </div>
                <div class="price-row">
                  <span>Service Fee (6%)</span>
                  <strong>$342.00</strong>
                </div>
                <div class="price-row">
                  <span>Occupancy Taxes</span>
                  <strong>$544.50</strong>
                </div>
              </div>
              
              <div class="total-section">
                <div class="total-label">
                  <span>TOTAL INVESTMENT</span>
                  <span class="refund-badge">FULLY REFUNDABLE<br><small>Prior to Nov 10th</small></span>
                </div>
                <div class="total-price">$6,586.50</div>
              </div>
              
              <button 
                class="proceed-btn" 
                :class="{ 'btn-success': isSuccess, 'btn-processing': isProcessing }"
                @click="proceed"
                :disabled="isProcessing"
              >
                <template v-if="isProcessing">
                  <span class="spinner"></span> Processing...
                </template>
                <template v-else-if="isSuccess">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:-4px; margin-right:4px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                  Payment Successful!
                </template>
                <template v-else>
                  Proceed to Payment
                </template>
              </button>

              
              <p class="terms-text">
                By clicking "Proceed to Payment" you agree to our <a href="#">Venue Guidelines</a> and <a href="#">Terms of Service</a>.
              </p>
            </div>
          </div>
          
          <div class="assistance-banner">
            <div class="assist-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A67C00" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div class="assist-text">
              <strong>Need Assistance?</strong>
              <p>Your curator is available 24/7 for support.</p>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.checkout-page {
  font-family: 'Manrope', sans-serif;
  background-color: #fafbfc;
  min-height: 100vh;
  padding: 4rem 2rem;
}

.checkout-container {
  max-width: 1000px;
  margin: 0 auto;
}

/* Header & Stepper */
.checkout-header {
  text-align: center;
  margin-bottom: 4rem;
}

.stepper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.step {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  opacity: 0.5;
}

.step.active {
  opacity: 1;
}

.step-num {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #f0f0f5;
  color: #0B192C;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
}

.step.active .step-num {
  background: #0B192C;
  color: white;
}

.step-text {
  font-size: 0.9rem;
  font-weight: 700;
  color: #0B192C;
}

.step-line {
  height: 1px;
  width: 40px;
  background: #e0e0ea;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #0B192C;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}

.page-subtitle {
  color: #0B192C;
  opacity: 0.6;
  font-weight: 500;
  font-size: 1rem;
}

/* Grid Layout */
.checkout-grid {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2.5rem;
  align-items: start;
}

/* Form Cards */
.form-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.02);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.card-header h2 {
  font-size: 1.1rem;
  font-weight: 800;
  color: #0B192C;
}

.input-row {
  display: flex;
  gap: 1.5rem;
}

.input-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.input-group.full-width {
  width: 100%;
}

.mt-4 {
  margin-top: 1.5rem;
}

label {
  font-size: 0.7rem;
  font-weight: 800;
  color: #0B192C;
  opacity: 0.6;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.form-input, .form-textarea {
  background: #f8f8fb;
  border: 1px solid transparent;
  padding: 0.85rem 1rem;
  border-radius: 10px;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 600;
  color: #0B192C;
  outline: none;
  transition: all 0.2s ease;
}

.form-input:focus, .form-textarea:focus {
  border-color: #d0d0df;
  background: white;
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

/* Counter */
.counter-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f8f8fb;
  border-radius: 10px;
  padding: 0.5rem;
  height: 48px;
}

.cnt-btn {
  background: none;
  border: none;
  font-size: 1.25rem;
  color: #0B192C;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.cnt-val {
  font-weight: 700;
  font-size: 0.95rem;
}

/* Payment Methods */
.payment-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.pay-btn {
  background: #f8f8fb;
  border: 2px solid transparent;
  border-radius: 12px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  color: #0B192C;
  transition: all 0.2s ease;
}

.pay-btn span {
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 700;
}

.pay-btn:hover {
  background: #f0f0f5;
}

.pay-btn.active {
  background: #fdfbf5;
  border-color: #A67C00;
  box-shadow: 0 4px 12px rgba(166, 124, 0, 0.1);
}

.trust-badges {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding-top: 1rem;
}

.badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  font-weight: 800;
  color: #0B192C;
  opacity: 0.5;
  letter-spacing: 0.05em;
}

/* Right Column Summary Card */
.summary-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.02);
  margin-bottom: 1.5rem;
}

.summary-image-wrap {
  position: relative;
  height: 200px;
}

.summary-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.excl-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #f0e4b8;
  color: #5c4400;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.05em;
}

.summary-content {
  padding: 2rem;
}

.venue-name {
  font-size: 1.25rem;
  font-weight: 800;
  color: #0B192C;
  margin-bottom: 0.5rem;
}

.venue-location {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #0B192C;
  opacity: 0.6;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 2rem;
}

.price-breakdown {
  border-top: 1px solid #f0f0f5;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.price-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #0B192C;
}

.price-row span {
  opacity: 0.7;
}

.total-section {
  border-top: 1px solid #f0f0f5;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}

.total-label {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 0.7rem;
  font-weight: 800;
  color: #0B192C;
  opacity: 0.6;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.refund-badge {
  text-align: right;
  color: #8B6E00;
  opacity: 1;
}

.total-price {
  font-size: 2rem;
  font-weight: 800;
  color: #0B192C;
}

.proceed-btn {
  background: linear-gradient(135deg, #8B6E00 0%, #A67C00 100%);
  color: white;
  width: 100%;
  border: none;
  padding: 1.25rem;
  border-radius: 12px;
  font-family: inherit;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.proceed-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(139, 110, 0, 0.3);
}

.proceed-btn:disabled {
  opacity: 0.8;
  cursor: not-allowed;
}

.proceed-btn.btn-success {
  background: #28a745; /* Success green */
}

.spinner {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-right: 0.5rem;
  vertical-align: middle;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.terms-text {
  text-align: center;
  font-size: 0.75rem;
  color: #0B192C;
  opacity: 0.6;
  margin-top: 1.5rem;
  line-height: 1.5;
}

.terms-text a {
  color: #0B192C;
  text-decoration: underline;
}

/* Assistance Banner */
.assistance-banner {
  background: #f4f5f8;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.assist-icon {
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.assist-text strong {
  display: block;
  font-size: 0.85rem;
  font-weight: 800;
  color: #0B192C;
  margin-bottom: 0.2rem;
}

.assist-text p {
  font-size: 0.8rem;
  color: #0B192C;
  opacity: 0.6;
  margin: 0;
}

@media (max-width: 900px) {
  .checkout-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .input-row {
    flex-direction: column;
  }
  .payment-options {
    grid-template-columns: 1fr;
  }
}
</style>
