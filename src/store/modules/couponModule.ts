import {ADD_ITEMNUM} from '../mutation-types'
import {ActionContext} from 'vuex'

interface Coupons {
  id: string;
  createDate: number;//创建时间
  periodOfValidity: number;
  pay: number;
}
interface CouponState {
  itemNum: number;
  item: [Coupons]|[];
}
const state: CouponState = {
  itemNum :0,
  item:[
    {
      id: '12sdfdjfigif34d',
      createDate: 12334532332,
      periodOfValidity: 40000,
      pay: 34,

    }
  ]
}
const getters = {
  endDate(state: CouponState){
    return 1234
  }
}
const mutations = {
  [ ADD_ITEMNUM ](state: CouponState){
    state.itemNum ++
  }
}
const actions = {
  additemNum({commit}: ActionContext<CouponState, any>) {
    commit ('ADD_ITEMNUM')
  }

}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}