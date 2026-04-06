<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="contact-hero section-padding">
      <div class="container hero-grid">
        <div class="contact-info">
          <span class="label-accent">GET IN TOUCH</span>
          <h1 class="hero-title">
            Crafting the <br />
            <span class="text-gold">Perfect Inquiry.</span>
          </h1>
          <p class="hero-subtitle">
            Whether you are seeking a grand estate for an exhibition or have questions about our curated venues, our concierge team is at your service.
          </p>

          <div class="contact-methods">
            <div class="contact-item">
              <div class="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <p class="contact-label">EMAIL</p>
                <p class="contact-value">concierge@carivenues.com</p>
              </div>
            </div>

            <div class="contact-item">
              <div class="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p class="contact-label">PHONE</p>
                <p class="contact-value">+1 (800) CARI-VENUE</p>
              </div>
            </div>

            <div class="contact-item">
              <div class="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <div>
                <p class="contact-label">FOLLOW US</p>
                <div class="social-icons">
                  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
                  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form-wrapper">
          <div class="contact-card">
            <form @submit.prevent>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">FULL NAME</label>
                  <input type="text" class="form-control" placeholder="E.g. Alexander Sterling" />
                </div>
                <div class="form-group">
                  <label class="form-label">EMAIL ADDRESS</label>
                  <input type="email" class="form-control" placeholder="alex@example.com" />
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">SUBJECT</label>
                <select class="form-control">
                  <option>Venue Inquiry</option>
                  <option>Event Curation</option>
                  <option>Hosting Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">YOUR MESSAGE</label>
                <textarea class="form-control" rows="6" placeholder="How can we help you curate your next event?"></textarea>
              </div>
              <button class="btn btn-primary btn-block">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Section -->
    <section class="contact-bottom section-padding">
      <div class="container bottom-grid">
        <div class="map-container">
          <img src="/images/city-map-visualization.png" alt="City Map Visualization" class="map-image" />
          <div class="hq-card">
            <h4 class="hq-title">Our Headquarters</h4>
            <p class="hq-address">742 Lexington Avenue, Upper East Side<br />New York, NY 10065</p>
          </div>
        </div>
        <div class="accessibility-card">
          <div class="accessibility-icon">
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="16" cy="4" r="1" />
                <path d="m18 19 1-7-6 1" />
                <path d="m5 8 3-3 5.5 3-2.36 3.5" />
                <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
                <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
              </svg>
          </div>
          <h3 class="card-title">Accessibility Focus</h3>
          <p class="card-text">
            We are committed to providing a seamless experience for all users. Our support team is trained to assist with screen readers and navigating architectural accessibility requirements.
          </p>
          <a href="#" class="learn-more">
            Learn More 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-page {
  background-color: #F8FAFC;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.label-accent {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: var(--color-primary);
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 4rem;
  line-height: 1.1;
  margin-bottom: 2rem;
}

.hero-subtitle {
  color: var(--color-text-muted);
  font-size: 1.1rem;
  max-width: 450px;
  margin-bottom: 3rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.icon-circle {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background-color: #E6EBF5;
  color: var(--color-dark);
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-label {
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--color-text-muted);
  margin-bottom: 0.25rem;
}

.contact-value {
  font-weight: 700;
  font-size: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.social-icons a {
  color: var(--color-dark);
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: var(--color-primary);
}

/* Form Card Styles */
.contact-form-wrapper {
  perspective: 1000px;
}

.contact-card {
  background: white;
  padding: 3.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.btn-block {
  width: 100%;
  padding: 1.25rem;
  font-size: 1.1rem;
  margin-top: 1rem;
  box-shadow: 0 10px 25px rgba(139, 113, 51, 0.25);
}

/* Bottom Section Styles */
.bottom-grid {
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  gap: 2rem;
}

.map-container {
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  height: 450px;
}

.map-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.map-container:hover .map-image {
  transform: scale(1.05);
}

.hq-card {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.hq-title {
  font-weight: 800;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.hq-address {
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.accessibility-card {
  background: #E6EBF5;
  padding: 3rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
}

.accessibility-icon {
  width: 56px;
  height: 56px;
  background: var(--color-dark);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}

.card-title {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
}

.card-text {
  color: #475569;
  line-height: 1.7;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.learn-more {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-weight: 800;
  color: var(--color-primary);
  font-size: 0.9rem;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .hero-grid, .bottom-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .hero-title {
    font-size: 3rem;
  }
}

@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .contact-card {
    padding: 2rem;
  }
  
  .hero-title {
    font-size: 2.25rem;
  }
  
  .hq-card {
    position: static;
    margin: 1rem;
    border-radius: 0.75rem;
  }
  
  .map-container {
    height: auto;
    display: flex;
    flex-direction: column;
  }
  
  .map-image {
    height: 300px;
  }
}
</style>
