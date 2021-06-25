import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import 'animate.css';
import './assets/main.css';

const VueDatePicker = require('@mathieustan/vue-datepicker')
import '@mathieustan/vue-datepicker/dist/vue-datepicker.min.css';

// Import styles
import "vue-rocker-switch/dist/vue-rocker-switch.css";

Vue.use(VueDatePicker, {
  lang: 'es'
});

import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(VueLoading)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
