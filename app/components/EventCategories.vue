<template>
  <section class="event-categories">
    <div class="container">
      <div class="section-header animate-fade-up">
        <span class="subtitle">OUR SERVICES</span>
        <h2>Browse by Event Type</h2>
      </div>

      <div class="categories-grid">
        <div v-for="(cat, index) in categories" :key="index" class="category-card animate-fade-up" :style="{ animationDelay: (index * 0.1) + 's' }">
          <h3>{{ cat.title }}</h3>
          <p>{{ cat.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    title: 'Wedding',
    desc: 'Layanan spesialis pernikahan dari venue ke katering.',
  },
  {
    title: 'Meeting',
    desc: 'Ruang kerja kolaboratif dengan fasilitas lengkap.',
  },
  {
    title: 'Birthday',
    desc: 'Rayakan momen spesial dengan konsep yang unik.',
  },
  {
    title: 'Corporate Event',
    desc: 'Profesionalisme tinggi untuk acara perusahaan besar.',
  }
]
</script>

<style scoped>
.event-categories {
  background-color: var(--bg-light);
}

.section-header {
  margin-bottom: 3rem;
}

.subtitle {
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 0.5rem;
}

.section-header h2 {
  font-size: 2rem;
  color: var(--primary);
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.category-card {
  background: white;
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  transition: var(--transition);
  border: 1px solid rgba(0, 0, 0, 0.02);
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border-color: var(--accent);
}

.icon-box {
  width: 60px;
  height: 60px;
  background: rgba(182, 145, 62, 0.1);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  margin-bottom: 1.5rem;
  transition: var(--transition);
}

.category-card:hover .icon-box {
  background: var(--accent);
  color: white;
}

.category-card h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--primary);
}

.category-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}
</style>
