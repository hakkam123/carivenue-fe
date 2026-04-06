<script setup>
// Default layout with global Navbar and Footer
</script>

<template>
  <div class="app-layout">
    <TopNavbar />
    <NuxtRouteAnnouncer />
    <main class="main-content">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
