// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Acompanhantes: conheça acompanhantes de todo o Brasil!',
      htmlAttrs: {
        lang: 'pt-br'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Veja acompanhantes mulheres e homens, cis e trans em todo o Brasil com o Fatal Model. Acompanhantes verificados, entre em contato pelo WhatsApp e telefone!'
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#263238' },

        {
          property: 'og:image',
          content: `${process.env.BASE_URL_FM}/seo/static/img/social/social-fatal-model.webp`
        },
        {
          property: 'og:title',
          content: 'Acompanhantes: conheça acompanhantes de todo o Brasil!'
        },
        {
          property: 'og:site_name',
          content: 'Acompanhantes: conheça acompanhantes de todo o Brasil!'
        },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:description',
          content:
            'Veja acompanhantes mulheres e homens, cis e trans em todo o Brasil com o Fatal Model. Acompanhantes verificados, entre em contato pelo WhatsApp e telefone!'
        },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@fatalmodel' }
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: `${process.env.BASE_URL_FILES}/project-seo-pages/img/favicons/apple-touch-icon.webp?v2`
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: `${process.env.BASE_URL_FILES}/project-seo-pages/img/favicons/favicon-32x32.webp?v2`
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: `${process.env.BASE_URL_FILES}/project-seo-pages/img/favicons/favicon-16x16.webp?v2`
        },
        {
          rel: 'mask-icon',
          color: '#E25352',
          href: `${process.env.BASE_URL_FILES}/project-seo-pages/img/favicons/safari-pinned-tab.svg?v2`
        },
        { rel: 'canonical', href: process.env.BASE_URL_FM }
      ]
    }
  },

  runtimeConfig: {
    public: {
      appEnv: process.env.APP_ENV as string,
      baseUrlFm: process.env.BASE_URL_FM as string,
      baseUrlFiles: process.env.BASE_URL_FILES as string,
      gtmEnable: process.env.GTM_ENABLE === 'true',
      gtmId: process.env.GTM_ID as string,
      gaEnable: process.env.GA_ENABLE === 'true',
      gaId: process.env.GA_ID as string,
      panicControlToken: process.env.PANIC_CONTROL_TOKEN as string
    }
  },

  css: ['~/assets/css/fonts.css', '~/assets/css/global.css'],

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxt/test-utils/module',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  pinia: {
    storesDirs: ['./stores/**']
  }
})
