export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target:'static',
  loading:{
    height:"0px"
  },
  head: {
    title: 'VisualKraken - Votre site, au pixel près sur Tournai',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: ''},
      { property:'og:site_name', content:'VisualKraken'},
      { property: 'og:title', content:"VisualKraken - Votre site, au pixel près sur Tournai"},
      { property:'og:url',content:'https://visualkraken.be'},
      { property:'og:locale',content:'fr_FR'},
      { property:'og:description',content:'VisualKraken, votre agence web dans la région de Tournai (Site internet, communication, graphisme,...)'},
      { property:'og:image',content:'https://i.ibb.co/gF425mG/share.png'},
      { name:'twitter:card', content:'summary'},
      {name:'twitter:url', content:'https://visualkraken.be'},
      {name:'twitter:title', content:'VisualKraken - Votre site, au pixel près sur Tournai'},
      {name:'twitter:description', content:'VisualKraken, votre agence web dans la région de Tournai (Site internet, communication, graphisme,...)'},
      {name:'twitter:image', content:'https://i.ibb.co/gF425mG/share.png'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
