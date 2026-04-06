<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">
        <span class="logo-text">CariVenue</span>
      </div>
      
      <ul class="nav-links">
        <li>
          <NuxtLink to="/explore" class="nav-link">Explore</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="nav-link">About Us</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
        </li>
      </ul>
      
      <div class="nav-actions">
        <a href="#" class="btn-text">Host a Venue</a>
        <button class="btn-primary">Sign Up</button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  font-family: 'Manrope', sans-serif;
  width: 100%;
  background: white;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 0.5rem 0;
}

.navbar-container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 80px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  color: #0B192C;
  letter-spacing: -0.02em;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
}

.nav-links li {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #1a1a1a;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
}

.nav-link:hover {
  color: #8B6E00;
}

.nav-link.router-link-active {
  color: #8B6E00;
  font-weight: 700;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 32px;
  height: 2px;
  background: #8B6E00;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.btn-text {
  text-decoration: none;
  color: #0B192C;
  font-weight: 600;
  font-size: 0.95rem;
}

.btn-primary {
  background: linear-gradient(135deg, #8B6E00 0%, #A67C00 100%);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 12px;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 110, 0, 0.2);
}

@media (max-width: 768px) {
  .nav-links, .btn-text {
    display: none;
  }
}
</style>
