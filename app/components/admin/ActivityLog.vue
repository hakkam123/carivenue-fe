<script setup>
const logs = [
  { 
    title: 'Venue details updated', 
    desc: 'Skyline Loft updated by System Admin.', 
    time: '2 MINS AGO', 
    color: '#3A7DE0',
    icon: 'edit'
  },
  { 
    title: 'New user registration', 
    desc: 'Thomas Vance joined as a Host.', 
    time: '45 MINS AGO', 
    color: '#2DCE89',
    icon: 'user'
  },
  { 
    title: 'Booking cancelled', 
    desc: '#CV-8992 was cancelled by user.', 
    time: '3 HOURS AGO', 
    color: '#F5365C',
    icon: 'cancel'
  },
  { 
    title: 'Security audit completed', 
    desc: 'Payment gateway integration verified.', 
    time: '5 HOURS AGO', 
    color: '#3A7DE0',
    icon: 'shield'
  },
  { 
    title: 'New 5-star review', 
    desc: 'The Glass Pavilion received a rating.', 
    time: '8 HOURS AGO', 
    color: '#FBBD23',
    icon: 'star'
  }
]
</script>

<template>
  <div class="activity-card">
    <h3>Activity Logs</h3>
    <div class="logs-list">
      <div v-for="(log, index) in logs" :key="index" class="log-item">
        <div class="log-left">
          <div class="log-icon" :style="{ color: log.color }">
            <svg v-if="log.icon === 'edit'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            <svg v-if="log.icon === 'user'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <svg v-if="log.icon === 'cancel'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
            <svg v-if="log.icon === 'shield'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <svg v-if="log.icon === 'star'" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
        </div>
        <div class="log-right">
          <div class="log-title">{{ log.title }}</div>
          <div class="log-desc">{{ log.desc }}</div>
          <div class="log-time">{{ log.time }}</div>
        </div>
      </div>
    </div>
    <button class="download-btn">Download Activity Report</button>
  </div>
</template>

<style scoped>
.activity-card {
  background-color: white;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  border: 1px solid #EEEEEE;
  display: flex;
  flex-direction: column;
}

.activity-card h3 {
  font-size: 1.15rem;
  font-weight: 800;
  color: #0B192C;
  margin-bottom: 2.5rem;
}

.logs-list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  flex: 1;
}

.log-item {
  display: flex;
  gap: 1.5rem;
  position: relative;
}

.log-left {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.log-icon {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.log-right {
  display: flex;
  flex-direction: column;
}

.log-title {
  font-size: 0.9rem;
  font-weight: 800;
  color: #0B192C;
}

.log-desc {
  font-size: 0.8rem;
  font-weight: 600;
  color: #B0B0B0;
  margin-top: 2px;
}

.log-time {
  font-size: 0.7rem;
  font-weight: 800;
  color: #B0B0B0;
  margin-top: 1rem;
  letter-spacing: 0.05em;
}

.download-btn {
  background-color: #F8F9FA;
  border: 1px solid #EEEEEE;
  padding: 1.25rem;
  border-radius: 12px;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 800;
  color: #0B192C;
  cursor: pointer;
  margin-top: 4rem;
  transition: all 0.2s ease;
}

.download-btn:hover {
  background-color: #f0f0f5;
  transform: translateY(-2px);
}
</style>
