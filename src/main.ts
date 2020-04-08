import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/config/index.ts'
import axios from './lib/axios'
import Loading from './views/loading/loading'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
if(process.env.NODE_ENV !='production') require('./lib/mock')
Vue.use(Loading)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
