import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/main.scss'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

const req = require.context('@/components', true, /\.(js|vue)$/i)
req.keys().map(key => {
  if (!(req(key).default || {}).name) {
    return
  }
  Vue.component(req(key).default.name, req(key).default)
})

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

