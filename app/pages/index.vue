<script setup>
// Redirect home to explore page
definePageMeta({
  middleware: [
    function (to, from) {
      return navigateTo('/explore')
    }
  ]
})
</script>

<template>
  <div>
    Redirecting to explore...
  </div>
</template>
