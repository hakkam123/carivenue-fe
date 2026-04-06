<template>
  <section class="cta">
    <div class="container">
      <div class="cta-banner animate-fade-up">
        <div class="cta-content">
          <h2>Mulai Rencanakan Acara Anda Sekarang</h2>
          <p>Gunakan platform CariVenue untuk pengalaman pencarian dan pemesanan venue yang lebih modern, cepat, dan transparan.</p>
          <div class="cta-actions">
            <NuxtLink to="/explore" class="btn btn-primary">Browse Venue</NuxtLink>
            <a href="https://wa.me/6285218443945" target="_blank" class="btn btn-outline" style="text-decoration: none;">Hubungi Sales</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  padding-bottom: 8rem;
}

.cta-banner {
  background: var(--primary);
  border-radius: 3rem;
  padding: 5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 40px 80px -20px rgba(0, 26, 44, 0.4);
}

.cta-banner::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -20%;
  width: 100%;
  height: 200%;
  background: radial-gradient(circle, rgba(182, 145, 62, 0.1) 0%, transparent 70%);
  z-index: 1;
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
  margin: 0 auto;
}

.cta-banner h2 {
  font-size: 3rem;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.cta-banner p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 3rem;
  font-weight: 300;
}

.cta-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.btn {
  padding: 1.2rem 3rem;
  border-radius: 100px;
  font-weight: 700;
  font-size: 1rem;
  transition: var(--transition);
}

.btn-primary {
  background: var(--accent);
  color: white;
  box-shadow: 0 10px 20px rgba(182, 145, 62, 0.3);
}

.btn-primary:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(182, 145, 62, 0.5);
  filter: brightness(1.1);
}

.btn-outline {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
  transform: translateY(-5px);
}

@media (max-width: 968px) {
  .cta-banner {
    padding: 3rem 2rem;
  }
  
  .cta-banner h2 {
    font-size: 2rem;
  }
  
  .cta-actions {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
