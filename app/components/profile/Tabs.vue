<template>
  <div class="profile-tabs-wrapper">
    <div class="profile-tabs">
      <button
        v-for="tab in visibleTabs"
        :key="tab.id"
        class="tab-btn"
        :class="{ active: activeTab === tab.id }"
        @click="$emit('tab-change', tab.id)"
      >
        <span class="tab-icon" v-html="tab.svg"></span>
        <span>{{ tab.label }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  role: { type: String, default: 'user' },
  activeTab: { type: String, default: 'profile' }
})

defineEmits(['tab-change'])

const allTabs = [
  { id: 'profile', label: 'My Profile', svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>', roles: ['user', 'host'] },
  { id: 'orders', label: 'My Orders', svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>', roles: ['user', 'host'] },
  { id: 'wishlist', label: 'Wishlist', svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>', roles: ['user'] },
  { id: 'venues', label: 'My Venues', svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>', roles: ['host'] },
  { id: 'settings', label: 'Settings', svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>', roles: ['user', 'host'] },
]

const visibleTabs = computed(() => allTabs.filter(tab => tab.roles.includes(props.role)))
</script>

<style scoped>
.profile-tabs-wrapper {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  margin-top: 2rem;
}
.profile-tabs {
  display: flex;
  gap: 0.25rem;
  padding: 0.35rem;
  background: #F1F5F9;
  border-radius: 16px;
  overflow-x: auto;
  scrollbar-width: none;
}
.profile-tabs::-webkit-scrollbar { display: none; }
.tab-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  background: transparent;
  font-family: 'Manrope', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: #64748B;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.25s ease;
  white-space: nowrap;
  flex-shrink: 0;
}
.tab-btn:hover { color: #0B192C; background: rgba(255,255,255,0.5); }
.tab-btn.active {
  background: white;
  color: #8B6E00;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.tab-icon { display: flex; align-items: center; }
@media (max-width: 768px) {
  .profile-tabs-wrapper { padding: 0 1rem; }
  .tab-btn { padding: 0.65rem 1rem; font-size: 0.8rem; }
}
</style>
