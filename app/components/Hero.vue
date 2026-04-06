<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <div class="hero-text animate-fade-up">
        <h1>Temukan Tempat Sempurna untuk Acara Anda</h1>
        <p>Dapatkan pilihan venue terbaik mulai dari tempat pernikahan, ruang meeting, hingga rooftop untuk segala jenis acara Anda.</p>
      </div>

      <div class="search-container animate-fade-up" style="animation-delay: 0.2s">
        <div class="search-glass">
          <div class="search-item">
            <span class="label">Location</span>
            <div class="input-with-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <input type="text" placeholder="Where are you going?" />
            </div>
          </div>
          <div class="divider"></div>
          <div class="search-item">
            <span class="label">Event Date</span>
            <div class="input-with-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              <input type="text" placeholder="Add date" />
            </div>
          </div>
          <div class="divider"></div>
          <div class="search-item">
            <span class="label">Guests</span>
            <div class="input-with-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <input type="text" placeholder="Add guests" />
            </div>
          </div>
          <button class="search-btn" @click="navigateTo('/explore')">
            Cari Venue
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 90vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  background: url('/hero-bg.png') no-repeat center center;
  background-size: cover;
  color: var(--text-white);
  padding: 0;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 26, 44, 0.4) 0%, rgba(0, 26, 44, 0.7) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-text {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem auto;
}

.hero-text h1 {
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
}

.hero-text p {
  font-size: 1.2rem;
  opacity: 0.9;
  font-weight: 300;
}

/* Search Form with Glassmorphism */
.search-container {
  max-width: 900px;
  margin: 0 auto;
}

.search-glass {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  padding: 0.6rem;
  padding-left: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  transition: var(--transition);
}

.search-glass:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}

.search-item {
  flex: 1;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
}

.search-item .label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.25rem;
}

.input-with-icon {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.input-with-icon .icon {
  color: var(--accent);
}

.search-item input {
  background: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  outline: none;
}

.search-item input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  margin: 0 0.5rem;
}

.search-btn {
  background: var(--accent);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 100px;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: 0 10px 20px -5px rgba(182, 145, 62, 0.4);
}

.search-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 30px -5px rgba(182, 145, 62, 0.6);
  filter: brightness(1.1);
}

@media (max-width: 968px) {
  .search-glass {
    flex-direction: column;
    border-radius: 2rem;
    padding: 2rem;
    gap: 1.5rem;
    padding-left: 2rem;
  }
  
  .divider {
    display: none;
  }
  
  .search-item {
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 0.5rem;
  }
  
  .hero-text h1 {
    font-size: 2.5rem;
  }
}
</style>
