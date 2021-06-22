import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(VueLoading)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
