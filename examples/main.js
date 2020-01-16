import Vue from 'vue'
import CarbonUI from '../src/index'
import '../src/styles/index.scss'
import App from './app.vue'
import router from './router'

Vue.use(CarbonUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
