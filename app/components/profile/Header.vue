<template>
  <div class="profile-header">
    <div class="cover-gradient"></div>
    <div class="header-content">
      <div class="avatar-section">
        <div class="avatar-wrapper">
          <img v-if="user.avatar" :src="user.avatar" :alt="user.full_name" class="avatar-img" />
          <div v-else class="avatar-fallback">{{ initials }}</div>
          <span class="role-dot" :class="user.role === 'host' ? 'host' : 'buyer'"></span>
        </div>
      </div>

      <div class="info-section">
        <div class="info-top">
          <div class="name-row">
            <h1 class="user-name">{{ user.full_name }}</h1>
            <span class="role-badge" :class="user.role === 'host' ? 'host' : 'buyer'">
              <svg v-if="user.role === 'host'" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2 L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"/></svg>
              <svg v-else width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              {{ user.role === 'host' ? 'Venue Host' : 'Member' }}
            </span>
          </div>
          <p class="user-email">{{ user.email }}</p>
          <p class="member-since">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Member since {{ formattedDate }}
          </p>
        </div>

        <!-- Seller Quick Stats -->
        <div v-if="user.role === 'host'" class="quick-stats">
          <div class="stat-item">
            <span class="stat-value">{{ user.total_venues || 0 }}</span>
            <span class="stat-label">Venues</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">{{ user.total_bookings || 0 }}</span>
            <span class="stat-label">Bookings</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#A67C00" stroke="none"><path d="M12 2 L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"/></svg>
              {{ user.rating || '—' }}
            </span>
            <span class="stat-label">Rating</span>
          </div>
        </div>
      </div>

      <div class="header-actions">
        <button class="edit-profile-btn" @click="$emit('edit')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          Edit Profile
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

defineEmits(['edit'])

const initials = computed(() => {
  if (!props.user.full_name) return '?'
  return props.user.full_name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})

const formattedDate = computed(() => {
  if (!props.user.created_at) return '—'
  return new Date(props.user.created_at).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  })
})
</script>

<style scoped>
.profile-header {
  position: relative;
  margin-bottom: 0;
}

.cover-gradient {
  height: 200px;
  background: linear-gradient(135deg, #0B192C 0%, #1a2d45 40%, #8B6E00 100%);
  border-radius: 0 0 24px 24px;
  position: relative;
  overflow: hidden;
}

.cover-gradient::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(166, 124, 0, 0.15) 0%, transparent 70%);
  border-radius: 50%;
}

.cover-gradient::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
  border-radius: 50%;
}

.header-content {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: flex-end;
  gap: 2rem;
  margin-top: -60px;
  position: relative;
  z-index: 10;
}

.avatar-wrapper {
  position: relative;
  flex-shrink: 0;
}

.avatar-img,
.avatar-fallback {
  width: 120px;
  height: 120px;
  border-radius: 24px;
  border: 4px solid white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  object-fit: cover;
}

.avatar-fallback {
  background: linear-gradient(135deg, #8B6E00, #A67C00);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.role-dot {
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 3px solid white;
}

.role-dot.host {
  background: #A67C00;
}

.role-dot.buyer {
  background: #22C55E;
}

.info-section {
  flex: 1;
  padding-bottom: 0.5rem;
}

.name-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.25rem;
}

.user-name {
  font-size: 1.75rem;
  font-weight: 800;
  color: #0B192C;
  letter-spacing: -0.02em;
  margin: 0;
}

.role-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.75rem;
  border-radius: 100px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.role-badge.host {
  background: #FEF3C7;
  color: #92400E;
}

.role-badge.buyer {
  background: #DCFCE7;
  color: #166534;
}

.user-email {
  font-size: 0.9rem;
  color: #64748B;
  font-weight: 500;
  margin: 0.25rem 0;
}

.member-since {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: #94A3B8;
  font-weight: 600;
  margin-top: 0.25rem;
}

.quick-stats {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-top: 1rem;
  padding: 0.75rem 1.25rem;
  background: #F8FAFC;
  border-radius: 14px;
  border: 1px solid #F0F0F5;
  width: fit-content;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
}

.stat-value {
  font-size: 1.1rem;
  font-weight: 800;
  color: #0B192C;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.stat-label {
  font-size: 0.65rem;
  font-weight: 700;
  color: #94A3B8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat-divider {
  width: 1px;
  height: 28px;
  background: #E2E8F0;
}

.header-actions {
  flex-shrink: 0;
  padding-bottom: 0.5rem;
}

.edit-profile-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.5rem;
  background: white;
  border: 1.5px solid #E2E8F0;
  border-radius: 12px;
  font-family: 'Manrope', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: #0B192C;
  cursor: pointer;
  transition: all 0.2s ease;
}

.edit-profile-btn:hover {
  border-color: #8B6E00;
  color: #8B6E00;
  background: #FFFBEB;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(139, 110, 0, 0.08);
}

@media (max-width: 768px) {
  .cover-gradient {
    height: 160px;
  }

  .header-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: -50px;
    gap: 1rem;
  }

  .avatar-img,
  .avatar-fallback {
    width: 100px;
    height: 100px;
  }

  .name-row {
    flex-direction: column;
    gap: 0.5rem;
  }

  .user-name {
    font-size: 1.4rem;
  }

  .member-since {
    justify-content: center;
  }

  .quick-stats {
    width: 100%;
    justify-content: center;
  }

  .info-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
