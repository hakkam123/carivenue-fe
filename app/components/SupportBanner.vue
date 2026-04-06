<template>
  <div class="support-banner animate-fade-up" style="animation-delay: 0.2s">
    <div class="icon-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l4-4V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v10Z"/><path d="M3 20c0-3.3 2.7-6 6-6h3.1"/></svg>
    </div>
    <div class="banner-text">
       <h4>Need Assistance?</h4>
       <p>Your curator is available 24/7 for support.</p>
    </div>
  </div>
</template>

<style scoped>
.support-banner {
  margin-top: 1.5rem;
  background: #F1F5F9;
  padding: 1.25rem 1.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.icon-wrapper {
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  flex-shrink: 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.banner-text h4 {
  font-size: 0.9rem;
  margin: 0;
  color: var(--primary);
  font-weight: 700;
}

.banner-text p {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin: 0;
}
</style>
