import { connect } from 'genie-sdk'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import deviceConfig from './device-config'

// px 转 vm
import viewportUnitsBuggyfill from 'viewport-units-buggyfill'
var hacks = require('viewport-units-buggyfill/viewport-units-buggyfill.hacks');
viewportUnitsBuggyfill.init({
  hacks
})

Vue.use(Vuex)
Vue.config.productionTip = false

connect(Vue, {
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  deviceConfig
})
