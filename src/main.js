import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App'
import store from './store/store'
import routerConfig from './router_confg'
Vue.use(VueRouter);
var router = new VueRouter({
  routerConfig
});
new Vue({
  el: '#app',
  template:"<app></app>",
  components: {App},
  router,
  store
});
