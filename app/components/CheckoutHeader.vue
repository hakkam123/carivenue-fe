<template>
  <header class="checkout-header container text-center">
    <div class="progress-stepper">
      <div v-for="(step, i) in steps" :key="i" class="step" :class="{ 'active': i === 0, 'completed': i < 0 }">
        <div class="step-circle">{{ i + 1 }}</div>
        <span class="step-label">{{ step }}</span>
        <div v-if="i < steps.length - 1" class="step-line"></div>
      </div>
    </div>
    
    <div class="header-text animate-fade-up">
      <h1>Finalize Your Curation</h1>
      <p>Review your selection and provide event details to secure this exclusive venue.</p>
    </div>
  </header>
</template>

<script setup>
const steps = ['Details', 'Payment', 'Confirm']
</script>

<style scoped>
.checkout-header {
  margin-bottom: 4rem;
}

.text-center {
  text-align: center;
}

.progress-stepper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.step {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
}

.step-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: white;
  border: 2px solid #E2E8F0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--text-muted);
  transition: var(--transition);
}

.step-label {
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.step-line {
  width: 40px;
  height: 2px;
  background: #E2E8F0;
  margin-left: 1rem;
}

.step.active .step-circle {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
  box-shadow: 0 0 15px rgba(0, 26, 44, 0.2);
}

.step.active .step-label {
  color: var(--primary);
}

.header-text h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--primary);
  letter-spacing: -1px;
}

.header-text p {
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.1rem;
}
</style>
