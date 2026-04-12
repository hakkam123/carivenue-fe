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
      <main class="admin-content-wrapper">
        <div class="admin-container">
            <slot />
        </div>
      </main>
      <footer class="admin-footer">
        <div class="admin-container" style="padding: 0; display: flex; justify-content: space-between; width: 100%;">
            <div class="footer-left">
              <span class="status-dot"></span> GLOBAL CDN ACTIVE
              <span class="separator"></span>
              API LATENCY: 24MS
            </div>
            <div class="footer-right">
              © 2024 CARIVENUE ARCHITECTURE V2.4.1
            </div>
        </div>
      </footer>

    </div>
  </div>
</template>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
  background-color: #F8F7F2; /* Soft cream background */
  font-family: 'Manrope', sans-serif;
  
  --sage-green: #4A5D4E;
  --sage-dark: #2C362E;
  --cream: #F4F1DE;
  --gold: #C5A059;
  --serif-font: 'Playfair Display', serif;
}


.admin-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  /* Slightly deeper off-white gradient for better card contrast */
  background: radial-gradient(circle at top right, #F2F1EC, #EBEAE3);
  padding-left: 1.5rem; /* Gap between sidebar and content */
}

.admin-content-wrapper {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

/* Centered container for premium layout balance */
.admin-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
}

.admin-footer {
  padding: 2.5rem 0;
  margin: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--sage-green);
  opacity: 0.3;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-top: 1px solid rgba(74, 93, 78, 0.05);
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
