<template>
  <section class="testimonials">
    <div class="container">
      <div class="section-header animate-fade-up">
        <span class="subtitle">TESTIMONIALS</span>
        <h2>What Our Clients Say</h2>
      </div>

      <div class="testimonials-grid">
        <div v-for="(t, i) in testimonials" :key="i" class="testimonial-card animate-fade-up" :class="{ 'featured': t.featured }" :style="{ animationDelay: (i * 0.1) + 's' }">
          <div class="stars">
            <svg v-for="n in 5" :key="n" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <p class="content">"{{ t.text }}"</p>
          <div class="user">
            <div class="avatar">
              <img :src="t.avatar" :alt="t.name" />
            </div>
            <div class="user-info">
                <h4>{{ t.name }}</h4>
                <span>{{ t.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'Sarah Kurniawan',
    role: 'Event Organizer',
    text: 'Sangat terbantu dengan platform ini. Pilihan venuenya sangat lengkap dan proses bookingnya sangat cepat tanpa ribet.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    featured: false
  },
  {
    name: 'Dimas Mahendra',
    role: 'Corporate HR',
    text: 'Menemukan venue meeting di Jakarta Selatan jadi jauh lebih mudah. Customer supportnya juga sangat responsif membantu.',
    avatar: 'https://i.pravatar.cc/150?u=dimas',
    featured: true
  },
  {
    name: 'Lia Putri',
    role: 'Freelance Architect',
    text: 'Interface yang bersih dan navigasi yang intuitif. Membantu saya memberikan rekomendasi venue terbaik untuk klien saya.',
    avatar: 'https://i.pravatar.cc/150?u=lia',
    featured: false
  }
]
</script>

<style scoped>
.testimonials {
  background-color: var(--bg-light);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.subtitle {
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 1rem;
}

.section-header h2 {
  font-size: 2.2rem;
  color: var(--primary);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

.testimonial-card {
  background: white;
  padding: 3rem;
  border-radius: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  transition: var(--transition);
  border: 1px solid rgba(0, 0, 0, 0.02);
}

.testimonial-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.testimonial-card.featured {
  background: var(--primary);
  color: white;
  transform: translateY(-15px);
  box-shadow: 0 30px 60px rgba(0, 26, 44, 0.2);
}

.stars {
  margin-bottom: 1.5rem;
  color: #FFD700;
}

.featured .stars {
  color: var(--accent);
}

.content {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-style: italic;
  color: var(--text-muted);
}

.featured .content {
    color: rgba(255, 255, 255, 0.8);
}

.user {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid white;
}

.user-info h4 {
  font-size: 1.1rem;
  margin: 0;
  color: var(--primary);
}

.featured .user-info h4 {
  color: white;
}

.user-info span {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.featured .user-info span {
    color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 968px) {
  .testimonial-card.featured {
    transform: translateY(0);
  }
}
</style>
