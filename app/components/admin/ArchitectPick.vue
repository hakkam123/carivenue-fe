<script setup>
// Architect's Pick Sidebar Card
</script>

<template>
  <div class="pick-card">
    <div class="pick-header">
      <h3>Architect's Pick</h3>
      <p>Top performing venue this month based on revenue and rating.</p>
    </div>
    
    <div class="venue-showcase">
      <div class="venue-image">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400" alt="Modernist Haven" />
      </div>
      <div class="venue-details">
        <div class="name-row">
          <h4>Modernist Haven</h4>
          <div class="stars">
            <span v-for="i in 5" :key="i">★</span>
          </div>
        </div>
        <div class="occupancy">
          58% Occupancy Rate
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pick-card {
  background-color: #0B192C;
  color: white;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.pick-header h3 {
  font-size: 1.15rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.pick-header p {
  font-size: 0.8rem;
  font-weight: 600;
  opacity: 0.6;
  line-height: 1.5;
}

.venue-showcase {
  display: flex;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 16px;
  gap: 1rem;
  align-items: center;
}

.venue-image {
  width: 80px;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;
}

.venue-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.venue-details h4 {
  font-size: 0.95rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
}

.stars {
  display: flex;
  gap: 0.1rem;
  color: #FBBD23;
  font-size: 0.75rem;
}

.occupancy {
  font-size: 0.75rem;
  font-weight: 700;
  opacity: 0.5;
  margin-top: 0.5rem;
}
</style>
