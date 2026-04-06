<template>
  <section class="features">
    <div class="container feature-content">
      <div class="feature-image animate-fade-up">
        <div class="image-wrapper">
          <img src="/features.png" alt="Our Team" />
          <div class="feature-badge">10+ Years Experience</div>
        </div>
      </div>
      <div class="feature-text animate-fade-up" style="animation-delay: 0.2s">
        <span class="subtitle">THE EXPERIENCE</span>
        <h2>Why Book with Architectural Curator?</h2>
        
        <div class="features-grid">
          <div v-for="(f, i) in features" :key="i" class="feature-item">
            <div class="icon-circle">
              <div v-html="f.icon"></div>
            </div>
            <div class="item-text">
              <h3>{{ f.title }}</h3>
              <p>{{ f.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: 'Curated Quality',
    desc: 'Semua venue telah melalui proses kurasi ketat untuk memastikan standar kualitas tertinggi.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`
  },
  {
    title: 'Transparent Pricing',
    desc: 'Harga yang Anda lihat adalah harga final, tanpa biaya tersembunyi atau biaya tambahan lainnya.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>`
  },
  {
    title: 'Easy Booking',
    desc: 'Proses pemesanan yang simpel dan cepat, langsung dari dashboard Anda tanpa ribet.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`
  },
  {
    title: 'Fast Support',
    desc: 'Tim kami siap membantu Anda 24/7 untuk memastikan acara Anda berjalan sempurna.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-12.7 8.38 8.38 0 0 1 3.8.9L21 3z"/></svg>`
  }
]
</script>

<style scoped>
.features {
  background-color: var(--bg-light);
  overflow: hidden;
}

.feature-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: center;
}

.feature-image {
  position: relative;
}

.image-wrapper {
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.15);
}

.image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  transition: var(--transition);
}

.image-wrapper:hover img {
  transform: scale(1.05);
}

.feature-badge {
  position: absolute;
  bottom: 2rem;
  right: -1rem;
  background: var(--primary);
  color: white;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.subtitle {
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 1rem;
}

.feature-text h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  line-height: 1.2;
  color: var(--primary);
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
}

.feature-item {
  display: flex;
  gap: 1.2rem;
}

.icon-circle {
  width: 48px;
  height: 48px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.item-text h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--primary);
}

.item-text p {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 968px) {
  .feature-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
