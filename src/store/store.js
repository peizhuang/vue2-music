/**
 * Created by san on 2016/10/27.
 */

import Vue from 'vue'
import Vuex from 'vuex'
//import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
Vue.use(Vuex);
var store = new Vuex.Store({
  state: {
    headerShow: true,
    qqpage: "rootQQpage"

  },
  getters: {},
  mutations: mutations,
  actions: actions,
  modules: {
    qq: {
      state: {
        qqpage: "hello QQ"
      },
      mutations: {
        changeQQ (state){
          return state.qqpage = state.qqpage + "hello world";
        }
      }
    },
    xiami: {},
    netease: {}
  }
});

export default store
