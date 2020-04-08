import {ADD_ITEMNUM} from '../mutation-types'
import {ActionContext} from 'vuex'

interface ShoppingCartState {
  itemNum: number;
  item: [
    {
      id: string;
      img: {
        src: string;
        alt: string;
      };
      content: {
        title: string;
        key: string[]|[];
        option: string[]|[];
        MaxNum: number;
        prive: number;
        oldPrive: number;
      };
      date: {
        date: number;
      };
    }
  ];
}
const state: ShoppingCartState = {
  itemNum :0,
  item:[
    {
      id:'1asfcvtrt33446',
      img: {
        src: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1082677595,3328458301&fm=26&gp=0.jpg',
        alt: '这是非常好看的鞋子，有三宗是倒计时的覅几点几分ID司法解释的飞机的甲方is机械厂每年DNF你打发你find分内的事放你那女的呢翻地',
      },
      content:{
        title: '这是非常好看的鞋子，有三宗是倒计时的覅几点几分ID司法解释的飞机的甲方is机械厂每年DNF你打发你find分内的事放你那女的呢翻地',
        key: [],
        option:['45' , 'sjdidjfid'],
        MaxNum: 99,
        prive: 32,
        oldPrive:46
      },
      date:{
        date:12348343543534,
      }
    }
  ]
}
const getters = {
  endDate(state: ShoppingCartState){
    return 1234
  }
}
const mutations = {
  [ ADD_ITEMNUM ](state: ShoppingCartState){
    state.itemNum ++
  }
}
const actions = {
  additemNum({commit}: ActionContext<ShoppingCartState, any>) {
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