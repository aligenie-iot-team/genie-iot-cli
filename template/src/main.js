// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { connect } from 'genie-sdk'
import Vue from 'vue'
import Vuex from 'vuex'
import VConsole from 'vconsole'
import App from './App'
import router from './router'
import store from './store'
import deviceConfig from './device-config'

Vue.use(Vuex)
Vue.config.productionTip = false

if (deviceConfig.base.env === 'dev') {
  /* eslint-disable no-new */
  new VConsole()
}
connect(Vue, {
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  deviceConfig
})
