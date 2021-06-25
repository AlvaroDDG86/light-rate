import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './assets/main.css';

// Tailwind
import './assets/tailwind.css'

// Animate.css
import 'animate.css';

// Datepicker
const VueDatePicker = require('@mathieustan/vue-datepicker')
import '@mathieustan/vue-datepicker/dist/vue-datepicker.min.css';
Vue.use(VueDatePicker, {
  lang: 'es'
});

// Switch
import "vue-rocker-switch/dist/vue-rocker-switch.css";

// Loader spinner
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(VueLoading)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
