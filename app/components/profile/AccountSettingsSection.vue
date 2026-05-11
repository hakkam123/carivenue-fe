<template>
  <div class="settings-section">
    <!-- Change Password -->
    <div class="settings-card">
      <h3 class="card-title">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        Change Password
      </h3>
      <div class="form-row">
        <div class="form-field">
          <label class="field-label">Current Password</label>
          <input type="password" class="field-input" placeholder="••••••••" v-model="passwords.current" />
        </div>
      </div>
      <div class="form-row two-col">
        <div class="form-field">
          <label class="field-label">New Password</label>
          <input type="password" class="field-input" placeholder="Min. 8 characters" v-model="passwords.newPass" />
        </div>
        <div class="form-field">
          <label class="field-label">Confirm New Password</label>
          <input type="password" class="field-input" placeholder="Re-enter new password" v-model="passwords.confirm" />
        </div>
      </div>
      <button class="btn-update" @click="handlePasswordChange">Update Password</button>
    </div>

    <!-- Notifications -->
    <div class="settings-card">
      <h3 class="card-title">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        Notifications
      </h3>
      <div class="toggle-row" v-for="pref in notifPrefs" :key="pref.key">
        <div>
          <span class="toggle-label">{{ pref.label }}</span>
          <span class="toggle-desc">{{ pref.desc }}</span>
        </div>
        <label class="switch">
          <input type="checkbox" v-model="pref.enabled" />
          <span class="slider"></span>
        </label>
      </div>
    </div>

    <!-- Danger Zone -->
    <div class="settings-card danger">
      <h3 class="card-title danger-title">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        Danger Zone
      </h3>
      <div class="danger-row">
        <div>
          <span class="toggle-label">Delete Account</span>
          <span class="toggle-desc">Permanently delete your account and all data. This action cannot be undone.</span>
        </div>
        <button class="btn-danger">Delete Account</button>
      </div>
      <div class="danger-row" style="border-bottom: none;">
        <div>
          <span class="toggle-label">Sign Out</span>
          <span class="toggle-desc">Log out from your current session.</span>
        </div>
        <button class="btn-logout" @click="handleLogout">Log Out</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const passwords = reactive({ current: '', newPass: '', confirm: '' })

const notifPrefs = reactive([
  { key: 'email_booking', label: 'Booking Confirmations', desc: 'Receive email when a booking is confirmed', enabled: true },
  { key: 'email_promo', label: 'Promotions & Updates', desc: 'Get notified about deals and new features', enabled: false },
  { key: 'email_reminder', label: 'Booking Reminders', desc: 'Remind me before my upcoming bookings', enabled: true },
])

const handlePasswordChange = () => {
  alert('Password updated! (mock)')
}

const handleLogout = () => {
  const tokenCookie = useCookie('token')
  const userCookie = useCookie('user')
  tokenCookie.value = null
  userCookie.value = null
  navigateTo('/')
}
</script>

<style scoped>
.settings-section { animation: fadeInUp 0.4s ease forwards; display: flex; flex-direction: column; gap: 1.5rem; }

.settings-card {
  background: #F8FAFC; border: 1px solid #F0F0F5; border-radius: 16px; padding: 1.75rem;
}

.settings-card.danger { border-color: #FEE2E2; background: #FFFBFB; }

.card-title {
  display: flex; align-items: center; gap: 0.5rem;
  font-size: 1rem; font-weight: 800; color: #0B192C; margin: 0 0 1.25rem;
}

.danger-title { color: #DC2626; }

.form-row { margin-bottom: 1rem; }
.form-row.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

.form-field {}
.field-label {
  display: block; font-size: 0.68rem; font-weight: 800; text-transform: uppercase;
  letter-spacing: 0.05em; color: #94A3B8; margin-bottom: 0.5rem;
}
.field-input {
  width: 100%; padding: 0.65rem 0.85rem; border: 1.5px solid #E2E8F0;
  border-radius: 10px; background: white; font-family: 'Manrope', sans-serif;
  font-size: 0.9rem; font-weight: 600; color: #0B192C; transition: all 0.2s ease;
}
.field-input:focus { outline: none; border-color: #8B6E00; box-shadow: 0 0 0 3px rgba(139,110,0,0.08); }

.btn-update {
  padding: 0.65rem 1.5rem; background: #0B192C; color: white; border: none;
  border-radius: 10px; font-family: 'Manrope', sans-serif;
  font-size: 0.82rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease;
}
.btn-update:hover { background: #1a2d45; }

.toggle-row {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 0; border-bottom: 1px solid #F0F0F5;
}
.toggle-row:last-child { border-bottom: none; padding-bottom: 0; }
.toggle-row:first-of-type { padding-top: 0; }
.toggle-label { font-size: 0.9rem; font-weight: 700; color: #0B192C; display: block; }
.toggle-desc { font-size: 0.78rem; font-weight: 500; color: #94A3B8; display: block; margin-top: 0.15rem; }

/* Toggle Switch */
.switch { position: relative; display: inline-block; width: 44px; height: 24px; flex-shrink: 0; }
.switch input { opacity: 0; width: 0; height: 0; }
.slider {
  position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0;
  background-color: #E2E8F0; transition: 0.3s; border-radius: 24px;
}
.slider:before {
  position: absolute; content: ""; height: 18px; width: 18px;
  left: 3px; bottom: 3px; background-color: white;
  transition: 0.3s; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
input:checked + .slider { background-color: #8B6E00; }
input:checked + .slider:before { transform: translateX(20px); }

.danger-row {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 0; border-bottom: 1px solid #FECACA;
}

.btn-danger {
  padding: 0.5rem 1rem; background: white; color: #DC2626;
  border: 1.5px solid #FECACA; border-radius: 10px;
  font-family: 'Manrope', sans-serif; font-size: 0.78rem; font-weight: 700;
  cursor: pointer; transition: all 0.2s ease; white-space: nowrap;
}
.btn-danger:hover { background: #FEE2E2; border-color: #DC2626; }

.btn-logout {
  padding: 0.5rem 1rem; background: #0B192C; color: white;
  border: none; border-radius: 10px;
  font-family: 'Manrope', sans-serif; font-size: 0.78rem; font-weight: 700;
  cursor: pointer; transition: all 0.2s ease; white-space: nowrap;
}
.btn-logout:hover { background: #1a2d45; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 640px) {
  .form-row.two-col { grid-template-columns: 1fr; }
  .toggle-row, .danger-row { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
}
</style>
