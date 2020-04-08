import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import  actions from './actions'
import  getters from './getters'
import createLogger from 'vuex/dist/logger'
import couponModule from './modules/couponModule'
import shoppingCartModule from './modules/shoppingCartModule'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules:{
    couponModule,
    shoppingCartModule
  },
  state,
  mutations,
  actions,
	getters,
	strict:debug,
	plugins:debug ?[createLogger()] : []
})
