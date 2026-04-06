<script setup>
// Admin Dashboard Layout
import AdminSidebar from '~/components/admin/AdminSidebar.vue'
import AdminHeader from '~/components/admin/AdminHeader.vue'
</script>

<template>
  <div class="admin-layout">
    <AdminSidebar />
    <div class="admin-main">
      <AdminHeader />
      <div class="admin-content">
        <slot />
      </div>
      <footer class="admin-footer">
        <div class="footer-left">
          <span class="status-dot"></span> GLOBAL CDN ACTIVE
          <span class="separator"></span>
          API LATENCY: 24MS
        </div>
        <div class="footer-right">
          © 2024 CARIVENUE ARCHITECTURE V2.4.1
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
  background-color: #F8F9FA;
  font-family: 'Manrope', sans-serif;
}

.admin-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0; /* Prevent flex overflow */
}

.admin-content {
  flex: 1;
  padding: 2rem 3rem;
  overflow-y: auto;
}

.admin-footer {
  padding: 1.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7rem;
  font-weight: 700;
  color: #B0B0B0;
  letter-spacing: 0.05em;
  border-top: 1px solid #EEEEEE;
}

.status-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #2DCE89;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.separator {
  display: inline-block;
  width: 1px;
  height: 10px;
  background-color: #EEEEEE;
  margin: 0 1.5rem;
}

@media (max-width: 1024px) {
  .admin-content {
    padding: 1.5rem;
  }
}
</style>
