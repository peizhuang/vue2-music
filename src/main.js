import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App'
import PublicUser from  './components/publicuser.vue'
import  PrivateUser from  './components/privateuser.vue'
import ManagementDisplay from './components/managementdisplay.vue'
import  ManagementSetting from  './components/managementsetting.vue'
import Trade from './components/trade.vue'
import TradeChange from './components/tradechange.vue'
//import store from './store/store'

Vue.use(VueRouter);
Vue.use(Vuex);
var routes = [{
  path: "/",
  component: "<template></template>",
  //redirect: "/publicuser"
  //alias:"/publicuser"
},
  {
    alias: "/",
    path: "/publicuser",
    component: PublicUser
  }, {
    path: "/privateuser",
    component: PrivateUser
  }, {
    path: "/managementdisplay",
    component: ManagementDisplay
  }, {
    path: "/managementsetting",
    component: ManagementSetting
  }, {
    path: "/trade",
    component: Trade
  }, {
    path: "/tradechange",
    component: TradeChange
  }];
var router = new VueRouter({
  routes
});
var store = new Vuex.Store({
  //用来注册状态，值不能在这里进行更改
  state: {
    count: 0
  },
  //用来注册使用了state的表达式结果，使用getters的情况是，在有很多地方都对state进行了相同的计算，然后返回一个值
  //其实也可以起把getters当做state的另一种表现形式，只是getter使用了state
  //注意:这里只能使用state，不能改变state，不能在这里给state赋值（那是mutation干的事情）
  getters: {
    stateChange(state){
      return state.count += 10;
    }
  },
  //用来进行更改state的值，所有的state的值更改都必须调用mutation
  //注意：在这里面的方法里，不能进行异步操作，只能进行同步操作
  mutations: {
    add(state){
      state.count++;
    }
  },
  //用来使用mutation，该参数主要是为了补充mutation不能进行异步操作，在这里面可以进行异步操作，然后通过dispatch执行mutation
  actions: {
    fireAdd(context){
      context.commit('add');
    }
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router,
  store
});
