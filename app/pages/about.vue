<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero-section section-padding">
      <div class="container hero-grid">
        <div class="hero-content">
          <span class="est-label">EST. 2018</span>
          <h1 class="hero-title">
            The Art of <br />
            <span class="text-gold">Space Selection</span>
          </h1>
          <p class="hero-description">
            At Cari Venues, we don't just list venues, we curate experiences. Our mission is to bridge the gap between historic architectural marvels and the visionary events that deserve them.
          </p>
        </div>
        <div class="hero-image-wrapper">
          <img src="/images/hero-interior.png" alt="Modern Architecture Interior" class="hero-image" />
          <div class="quote-box">
            <p class="quote-text">"Architecture is a visual art, and the buildings speak for themselves."</p>
            <p class="quote-author">— JULIA CHEN, FOUNDER</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy Section -->
    <section class="philosophy-section section-padding bg-soft-blue">
      <div class="container philosophy-grid">
        <div class="philosophy-intro">
          <h2 class="section-title">Our Philosophy</h2>
          <div class="title-underline"></div>
          <p class="philosophy-text">
            We believe that the right environment doesn't just host an event; it elevates it. From Brutalist concrete vaults to Victorian conservatories, we seek spaces that possess a distinct soul and a story to tell.
          </p>
        </div>
        <div class="philosophy-cards">
          <PhilosophyCard 
            title="The Vision"
            description="To become the global authority in architectural hospitality, making the world's most inaccessible and significant structures available for transformative human connection."
          >

          </PhilosophyCard>
          
          <PhilosophyCard 
            title="The Mission"
            description="We protect the heritage of extraordinary spaces by creating a sustainable revenue model through high-end event curation, ensuring these masterpieces are preserved for future generations."
          >
          </PhilosophyCard>
        </div>
      </div>
    </section>

    <!-- Journey Section -->
    <section class="journey-section section-padding">
      <div class="container">
        <h2 class="journey-title text-center">The Journey So Far</h2>
        <div class="journey-grid-container">
          <!-- Row 1 -->
          <div class="journey-row">
            <div class="journey-block inception shadow-lg">
              <img src="/images/team-studio.png" alt="Team collaborating" class="block-bg" />
              <div class="block-overlay">
                <span class="block-year">2018: INCEPTION</span>
                <h3 class="block-title">The First Curation</h3>
                <p class="block-text">Started with just three venues in Paris, focusing on mid-century modern residences.</p>
              </div>
            </div>
            
            <div class="journey-block stats-card bg-soft-blue">
              <div class="block-content">
                <h2 class="stat-number">250+</h2>
                <p class="stat-label">CURATED LOCATIONS</p>
                <p class="stat-text">Each venue undergoes a rigorous 50-point inspection for architectural integrity.</p>
              </div>
            </div>
          </div>
          
          <!-- Row 2 -->
          <div class="journey-row">
            <div class="journey-block elite-trust bg-dark-blue">
              <div class="block-content">
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8B7133" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-4">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <h3 class="block-title">Elite Trust</h3>
                <p class="block-text">Partnering with UNESCO and private architectural trusts for exclusive access.</p>
              </div>
            </div>

            <div class="journey-block future shadow-lg">
               <img src="/images/library-interior.png" alt="Grand Library" class="block-bg" />
               <div class="block-overlay">
                <span class="block-year">2024: THE FUTURE</span>
                <h3 class="block-title">Scaling Elegance</h3>
                <p class="block-text">Expanding to 15 new global cities, bringing curation to every corner of the world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="values-section section-padding">
      <div class="container values-grid">
        <div class="value-item">
          <h4 class="value-title">Integrity</h4>
          <p class="value-desc">We honor the original architect's intent in every event hosted.</p>
        </div>
        <div class="value-item">
          <h4 class="value-title">Quality</h4>
          <p class="value-desc">Only the top 1% of applicants make it into our curated collection.</p>
        </div>
        <div class="value-item">
          <h4 class="value-title">Sustainability</h4>
          <p class="value-desc">Our revenue supports the restoration and upkeep of heritage sites.</p>
        </div>
        <div class="value-item">
          <h4 class="value-title">Discretion</h4>
          <p class="value-desc">Privacy is our highest currency for both hosts and curators.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  overflow-x: hidden;
}

/* Hero Section Styles */
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  align-items: center;
  gap: 4rem;
  margin-top: 2rem;
}

.est-label {
  display: inline-block;
  background-color: #FDE68A;
  color: #92400E;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 800;
  color: var(--color-dark);
  line-height: 1.1;
  margin-bottom: 2rem;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  max-width: 450px;
}

.hero-image-wrapper {
  position: relative;
}

.hero-image {
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 2rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
}

.quote-box {
  position: absolute;
  bottom: -40px;
  right: -30px;
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  max-width: 350px;
}

.quote-text {
  font-weight: 800;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.quote-author {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  color: var(--color-primary);
}

/* Philosophy Section Styles */
.philosophy-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 6rem;
  align-items: center;
}

.section-title {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.title-underline {
  width: 100px;
  height: 4px;
  background-color: var(--color-primary);
  margin-bottom: 2.5rem;
}

.philosophy-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text-muted);
}

.philosophy-cards {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Journey Section Styles */
.journey-title {
  font-size: 3rem;
  margin-bottom: 4rem;
}

.journey-grid-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.journey-row {
  display: flex;
  gap: 1.5rem;
  min-height: 400px;
}

.journey-block {
  flex: 1; /* Default weight */
  border-radius: 1.5rem;
  overflow: hidden;
  position: relative;
  transition: flex 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s ease;
  cursor: pointer;
}

.journey-block:hover {
  flex: 1.8; /* Expanded weight on hover */
}

/* Specific weights to match mockup while staying interactive */
.inception, .future {
  flex: 1.5;
}

.journey-block:hover .block-bg {
  transform: scale(1.08); /* Subtle zoom on background */
}

.block-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.block-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3rem;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  z-index: 2;
  color: white;
}

.block-year {
  display: block;
  font-weight: 800;
  font-size: 0.8rem;
  color: #FDE68A;
  margin-bottom: 0.5rem;
}

.block-title {
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.block-text {
  font-size: 1rem;
  opacity: 0.9;
}

.stats-card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: left;
}

.stat-number {
  font-size: 4rem;
  font-weight: 800;
  color: var(--color-dark);
  line-height: 1;
}

.stat-label {
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
}

.stat-text {
  color: var(--color-text-muted);
}

.elite-trust {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 3rem;
}

.future {
  height: 500px;
}

/* Core Values Styles */
.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
}

.value-title {
  font-size: 1.1rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.value-desc {
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.text-center { text-align: center; }
.mb-4 { margin-bottom: 1rem; }

/* Responsive adjustments */
@media (max-width: 1280px) {
  .hero-title {
    font-size: 3.8rem;
  }
}

@media (max-width: 1024px) {
  .hero-grid, .philosophy-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .hero-title {
    font-size: 3.5rem;
  }
  
  .hero-image {
    height: 500px;
  }
  
  .journey-row {
    flex-direction: column;
    min-height: auto;
  }

  .journey-block {
    flex: none !important; /* Disable interactive expand on mobile */
    min-height: 350px;
    width: 100%;
  }
  
  .values-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .section-padding {
    padding: 4rem 0;
  }

  .hero-title {
    font-size: 2.75rem;
  }
  
  .section-title, .journey-title {
    font-size: 2.25rem;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .quote-box {
    position: static;
    margin-top: 1.5rem;
    max-width: 100%;
    padding: 1.5rem;
  }

  .hero-image {
    height: 350px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.25rem;
  }

  .section-title, .journey-title {
    font-size: 1.75rem;
  }

  .stat-number {
    font-size: 3rem;
  }

  .block-overlay {
    padding: 1.5rem;
  }
}
</style>
