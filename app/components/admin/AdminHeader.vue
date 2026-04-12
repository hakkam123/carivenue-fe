<script setup>
// Admin Header with Search and Profile
const adminName = 'Admin User'
const adminRole = 'Administrator Profile'
</script>

<template>
  <header class="admin-header">
    <div class="admin-container" style="display: flex; align-items: center; justify-content: space-between; width: 100%; padding-right: 48px;">
        <div class="header-search">
          <div class="search-input-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="search-icon"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input type="text" placeholder="Search venues, bookings or users..." />
          </div>
        </div>
    
        <div class="header-actions">
          <div class="notification-icons">
            <button class="action-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
            </button>
            <button class="action-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </button>
          </div>
          
          <div class="profile-section">
            <div class="profile-info">
              <span class="name">{{ adminName }}</span>
              <span class="role">{{ adminRole }}</span>
            </div>
            <div class="avatar">
              <img src="https://i.pravatar.cc/150?u=admin" alt="Admin Avatar" />
            </div>
          </div>
        </div>
    </div>
  </header>

</template>

<style scoped>
.admin-header {
  height: 90px; /* Slightly taller for more elegance */
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  flex-shrink: 0;
}


.header-search {
  flex: 1;
  max-width: 450px;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 1.25rem;
  color: var(--sage-green);
  opacity: 0.5;
}

.search-input-wrapper input {
  width: 100%;
  background-color: white;
  border: 1px solid rgba(74, 93, 78, 0.08);
  padding: 0.85rem 1rem 0.85rem 3.2rem;
  border-radius: 16px;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 500;
  outline: none;
  color: var(--sage-dark);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;
}

.search-input-wrapper input:focus {
    border-color: var(--sage-green);
    box-shadow: 0 4px 15px rgba(74, 93, 78, 0.05);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 3rem; /* Increased gap between actions group and profile */
}

.notification-icons {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.action-btn {
  background: none;
  border: none;
  color: var(--sage-dark);
  opacity: 0.4;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
}

.action-btn:hover {
  opacity: 1;
  color: var(--sage-green);
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 1.75rem; /* Increased spacing between text and avatar */
  padding-left: 2.5rem;
  border-left: 1px solid rgba(74, 93, 78, 0.12);
}

.profile-info {
  display: flex;
  flex-direction: column;
  text-align: right;
  justify-content: center; /* Perfect vertical alignment */
}

.profile-info .name {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--sage-dark);
  letter-spacing: -0.01em;
  line-height: 1.2;
}

.profile-info .role {
  font-size: 0.6rem;
  font-weight: 700;
  color: var(--sage-green);
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 2px;
}

.avatar {
  width: 48px; /* Slightly larger avatar */
  height: 48px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(74, 93, 78, 0.15);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
}


.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
