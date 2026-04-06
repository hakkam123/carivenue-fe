<script setup>
const navLinks = [
  { name: 'Dashboard', path: '/admin', icon: 'grid' },
  { name: 'Venues', path: '/admin/venues', icon: 'map-pin' },
  { name: 'Bookings', path: '/admin/bookings', icon: 'calendar' },
  { name: 'Payments', path: '/admin/payments', icon: 'credit-card' },
  { name: 'Reviews', path: '/admin/reviews', icon: 'message-square' },
  { name: 'News', path: '/admin/news', icon: 'newspaper' }
]

const bottomLinks = [
  { name: 'Settings', path: '/admin/settings', icon: 'settings' },
  { name: 'Logout', path: '/', icon: 'log-out' }
]
</script>

<template>
  <aside class="admin-sidebar">
    <div class="sidebar-header">
      <div class="logo-box">
        <div class="logo-icon">A</div>
        <div class="logo-text">
          <span class="main">CariVenue</span>
          <span class="sub">EXECUTIVE ARCHITECT</span>
        </div>
      </div>
    </div>

    <nav class="sidebar-nav">
      <NuxtLink v-for="link in navLinks" :key="link.name" :to="link.path" class="nav-item">
        <div class="icon-wrapper">
          <svg v-if="link.icon === 'grid'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          <svg v-if="link.icon === 'map-pin'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <svg v-if="link.icon === 'calendar'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <svg v-if="link.icon === 'credit-card'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
          <svg v-if="link.icon === 'message-square'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <svg v-if="link.icon === 'newspaper'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
        </div>
        <span>{{ link.name }}</span>
      </NuxtLink>
    </nav>

    <div class="sidebar-footer">
      <NuxtLink v-for="link in bottomLinks" :key="link.name" :to="link.path" class="nav-item bottom">
        <div class="icon-wrapper">
          <svg v-if="link.icon === 'settings'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          <svg v-if="link.icon === 'log-out'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        </div>
        <span>{{ link.name }}</span>
      </NuxtLink>
    </div>
  </aside>
</template>

<style scoped>
.admin-sidebar {
  width: 280px;
  background-color: #0B192C;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  flex-shrink: 0;
}

.sidebar-header {
  padding: 0 1.5rem;
  margin-bottom: 3rem;
}

.logo-box {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-icon {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #3A7DE0 0%, #205BB5 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 800;
  font-size: 1.2rem;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-text .main {
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.logo-text .sub {
  font-size: 0.6rem;
  font-weight: 700;
  opacity: 0.5;
  letter-spacing: 0.1em;
}

.sidebar-nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0 1rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 1rem;
  text-decoration: none;
  color: white;
  opacity: 0.5;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.nav-item:hover {
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.05);
}

.nav-item.router-link-active {
  opacity: 1;
  background-color: #3A7DE0;
}

.icon-wrapper {
  width: 20px;
  display: flex;
  justify-content: center;
}

.sidebar-footer {
  padding: 2rem 1rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.nav-item.bottom {
  opacity: 0.4;
}

.nav-item.bottom:hover {
  opacity: 1;
}
</style>
