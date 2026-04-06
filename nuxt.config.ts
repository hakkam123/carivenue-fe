export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@vueuse/motion/nuxt'],
  css: ['~/assets/css/main.css'],
  // future: {
  //   compatibilityVersion: 4,
  // },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }, // Tambahkan 'anonymous' biar lebih standar
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@300..800&display=swap' }
      ]
    }
  }
})