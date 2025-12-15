export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image'
  ],
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'カフェテンプレート',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'おしゃれなカフェのホームページ' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  image: {
    quality: 80,
    format: ['webp', 'jpg']
  }
})
