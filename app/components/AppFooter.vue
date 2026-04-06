<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-main">
        <div class="brand-section">
          <h2 class="footer-logo">CariVenue</h2>
          <p class="footer-description">
            Redefining venue selection through a lens of architectural excellence and editorial rigor.
          </p>
          <div class="social-links">
            <button class="social-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
            </button>
            <button class="social-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </button>
            <button class="social-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </button>
          </div>
        </div>
        
        <div class="links-section">
          <div class="footer-col">
            <h3>Platform</h3>
            <ul>
              <li><a href="#">Explore Venues</a></li>
              <li><a href="#">Curated Collections</a></li>
              <li><a href="#">Host a Space</a></li>
              <li><a href="#">Venue Guidelines</a></li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Our Story</a></li>
              <li><a href="#">Press Office</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Support Center</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="copyright">© 2024 CariVenue. All rights reserved.</p>
        <div class="guild-badge">
          <span class="dot"></span>
          <span class="badge-text">MEMBER OF THE LUXURY GUILD</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  font-family: 'Manrope', sans-serif;
  background-color: #DEE1FC;
  padding: 5rem 0 3rem;
  color: #0B192C;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  margin-bottom: 5rem;
}

.brand-section {
  max-width: 320px;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
}

.footer-description {
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.7;
  margin-bottom: 2.5rem;
  font-weight: 500;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: #0B192C;
  opacity: 0.8;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.social-btn:hover {
  opacity: 1;
  transform: translateY(-2px);
}

.links-section {
  display: flex;
  gap: 6rem;
}

.footer-col h3 {
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-transform: capitalize;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-col a {
  text-decoration: none;
  color: #0B192C;
  font-size: 0.95rem;
  opacity: 0.7;
  font-weight: 500;
  transition: opacity 0.3s ease, padding-left 0.3s ease;
}

.footer-col a:hover {
  opacity: 1;
  padding-left: 4px;
}

.footer-bottom {
  border-top: 1px solid rgba(11, 25, 44, 0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0.6;
}

.guild-badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.dot {
  width: 8px;
  height: 8px;
  background-color: #8B6E00;
  border-radius: 50%;
}

.badge-text {
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  opacity: 0.9;
}

@media (max-width: 991px) {
  .footer-main {
    flex-direction: column;
    gap: 3rem;
  }
  
  .links-section {
    gap: 3rem;
    flex-wrap: wrap;
  }
}

@media (max-width: 640px) {
  .links-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
}
</style>
