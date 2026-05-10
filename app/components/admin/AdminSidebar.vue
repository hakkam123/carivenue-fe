<script setup>
const tokenCookie = useCookie('token')
const userCookie = useCookie('user')

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

const handleLogout = () => {
  if (process.client) {
    tokenCookie.value = null
    userCookie.value = null
    navigateTo('/auth/login')

    
    alert('Anda telah berhasil logout.')
  }
}
</script>

<template>
  <aside class="admin-sidebar">
    <div class="sidebar-header">
      <div class="logo-box">
        <div class="logo-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5L32 12V28L20 35L8 28V12L20 5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 12V28M13 16L27 24M13 24L27 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <circle cx="20" cy="20" r="4" stroke="currentColor" stroke-width="1.5"/>
            </svg>
        </div>
        <div class="logo-text">
          <span class="main">CariVenue</span>
          <span class="sub">DESESICABLY</span>
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
      <NuxtLink 
        v-for="link in bottomLinks" 
        :key="link.name" 
        :to="link.path" 
        class="nav-item bottom"
        @click="link.name === 'Logout' ? handleLogout($event) : null"
      >
        <div class="icon-wrapper">
          <svg v-if="link.icon === 'settings'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
          <svg v-if="link.icon === 'log-out'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
        </div>
        <span>{{ link.name }}</span>
      </NuxtLink>
    </div>
  </aside>
</template>

<style scoped>
.admin-sidebar {
  width: 280px;
  height: 100vh;
  position: sticky;
  top: 0;
  background-color: var(--sage-green);
  color: var(--cream);
  display: flex;
  flex-direction: column;
  padding: 2.5rem 0;
  flex-shrink: 0;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  z-index: 100;
}

.sidebar-header {
  padding: 0 2rem;
  margin-bottom: 4rem;
}

.logo-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
}

.logo-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cream);
}

.logo-icon svg {
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}

.logo-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-text .main {
  font-family: var(--serif-font);
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--cream);
}

.logo-text .sub {
  font-size: 0.55rem;
  font-weight: 700;
  opacity: 0.7;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  margin-top: -2px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-text .sub::before,
.logo-text .sub::after {
    content: "";
    width: 12px;
    height: 1px;
    background: var(--cream);
    opacity: 0.5;
}

.sidebar-nav {
  flex: 1; /* This will take up all available space, pushing the footer down */
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 0 1.5rem;
  overflow-y: auto; /* Allow scrolling if many links are added */
}


.nav-item {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0.85rem 1.25rem;
  text-decoration: none;
  color: var(--cream);
  opacity: 0.5;
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: 0;
  border-left: 2px solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-item:hover {
  opacity: 1;
  transform: translateX(6px);
}

.nav-item.router-link-active {
  opacity: 1;
  background-color: transparent;
  color: var(--cream);
  border-left-color: var(--gold);
}

.icon-wrapper {
  width: 20px;
  display: flex;
  justify-content: center;
  transition: color 0.3s ease;
}

.nav-item.router-link-active .icon-wrapper {
    color: var(--gold);
}


.sidebar-footer {
  padding: 2rem 1.25rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.nav-item.bottom {
  opacity: 0.5;
}

.nav-item.bottom:hover {
  opacity: 1;
}

</style>
