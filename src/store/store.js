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
    headerShow: true

  },
  getters: {},
  mutations: mutations,
  actions: actions,
  module: {
    qq: {},
    xiami: {},
    netease: {}
  }
});

export default store
