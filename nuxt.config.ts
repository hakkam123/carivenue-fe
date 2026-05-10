export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@vueuse/motion/nuxt'],
  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:5000/api' 
    }
  },

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@300..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap' }
      ],
      script: [
        { src: 'https://cdn.tiny.cloud/1/no6tw5784x4s5s4bgm2ofuszlsiroyvobyikiqd3aj75uk1p/tinymce/7/tinymce.min.js', referrerpolicy: 'origin' }
      ]
    }
  }
})