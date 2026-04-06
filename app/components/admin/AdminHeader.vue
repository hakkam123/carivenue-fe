<script setup>
// Admin Header with Search and Profile
const adminName = 'Admin User'
const adminRole = 'Administrator Profile'
</script>

<template>
  <header class="admin-header">
    <div class="header-search">
      <div class="search-input-wrapper">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="search-icon"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <input type="text" placeholder="Search venues, bookings or users..." />
      </div>
    </div>

    <div class="header-actions">
      <button class="action-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
      </button>
      <button class="action-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      </button>
      
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
  </header>
</template>

<style scoped>
.admin-header {
  height: 80px;
  background-color: white;
  border-bottom: 1px solid #EEEEEE;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  flex-shrink: 0;
}

.header-search {
  flex: 1;
  max-width: 400px;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 1rem;
  color: #B0B0B0;
}

.search-input-wrapper input {
  width: 100%;
  background-color: #F8F9FA;
  border: none;
  padding: 0.75rem 1rem 0.75rem 2.8rem;
  border-radius: 12px;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 500;
  outline: none;
  color: #0B192C;
}

.search-input-wrapper input::placeholder {
  color: #B0B0B0;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.action-btn {
  background: none;
  border: none;
  color: #0B192C;
  opacity: 0.6;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  transition: opacity 0.2s ease;
}

.action-btn:hover {
  opacity: 1;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 1.5rem;
  border-left: 1px solid #EEEEEE;
}

.profile-info {
  display: flex;
  flex-direction: column;
  text-align: right;
}

.profile-info .name {
  font-size: 0.9rem;
  font-weight: 800;
  color: #0B192C;
}

.profile-info .role {
  font-size: 0.7rem;
  font-weight: 600;
  color: #B0B0B0;
  margin-top: -2px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid #F0F0F5;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
