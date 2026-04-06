<template>
  <section class="event-categories">
    <div class="container">
      <div class="section-header animate-fade-up">
        <span class="subtitle">OUR SERVICES</span>
        <h2>Browse by Event Type</h2>
      </div>

      <div class="categories-grid">
        <div v-for="(cat, index) in categories" :key="index" class="category-card animate-fade-up" :style="{ animationDelay: (index * 0.1) + 's' }">
          <div class="icon-box">
             <div v-html="cat.icon"></div>
          </div>
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
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`
  },
  {
    title: 'Meeting',
    desc: 'Ruang kerja kolaboratif dengan fasilitas lengkap.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  },
  {
    title: 'Birthday',
    desc: 'Rayakan momen spesial dengan konsep yang unik.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`
  },
  {
    title: 'Corporate Event',
    desc: 'Profesionalisme tinggi untuk acara perusahaan besar.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`
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
