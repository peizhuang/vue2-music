/**
 * Created by san on 2016/10/27.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
Vue.use(Vuex);
var store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
  module:{

  }
});

export default store
