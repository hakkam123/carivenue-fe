<template>
  <section class="step-journey">
    <div class="container text-center">
      <div class="section-header animate-fade-up">
        <h2>Simple 3-Step Journey</h2>
        <div class="underline"></div>
      </div>

      <div class="steps-grid">
        <div v-for="(step, i) in steps" :key="i" class="step-card animate-fade-up" :style="{ animationDelay: (i * 0.1) + 's' }">
          <div class="step-number">{{ i + 1 }}</div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: 'Search',
    desc: 'Cari dan filter venue impian Anda berdasarkan lokasi, harga, dan fasilitas yang diinginkan secara instan.'
  },
  {
    title: 'Compare',
    desc: 'Bandingkan berbagai pilihan venue dengan detail yang lengkap dan review asli dari pengguna lain.'
  },
  {
    title: 'Book',
    desc: 'Lakukan reservasi secara aman dan dapatkan konfirmasi instan dari pengelola venue yang Anda pilih.'
  }
]
</script>

<style scoped>
.step-journey {
  background-color: white;
}

.text-center {
  text-align: center;
}

.section-header {
  margin-bottom: 5rem;
}

.section-header h2 {
  font-size: 2.2rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.underline {
  width: 60px;
  height: 4px;
  background: var(--accent);
  margin: 0 auto;
  border-radius: 2px;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  position: relative;
}

/* Connecting line for desktop */
@media (min-width: 969px) {
  .steps-grid::after {
    content: '';
    position: absolute;
    top: 50px;
    left: 20%;
    right: 20%;
    height: 2px;
    background: rgba(0, 0, 0, 0.05);
    z-index: 0;
  }
}

.step-card {
  position: relative;
  z-index: 1;
}

.step-number {
  width: 100px;
  height: 100px;
  background: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
  border-radius: 50%;
  margin: 0 auto 2.5rem auto;
  box-shadow: 0 15px 30px rgba(0, 26, 44, 0.2);
  transition: var(--transition);
}

.step-card:hover .step-number {
  transform: translateY(-10px);
  background: var(--accent);
  box-shadow: 0 20px 40px rgba(182, 145, 62, 0.3);
}

.step-card h3 {
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
}

.step-card p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  max-width: 300px;
  margin: 0 auto;
}

@media (max-width: 968px) {
  .steps-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  
  .step-number {
    width: 80px;
    height: 80px;
    font-size: 1.5rem;
  }
}
</style>
