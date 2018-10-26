// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'ai-sdk'
import Vue from 'vue'
import Vuex from 'vuex'
{{#if_eq component "genie"}}
import { Autocomplete, Switch, Button, ButtonGroup, Radio, RadioGroup, RadioButton, Slider, Checkbox, CheckboxButton, CheckboxGroup, MessageBox, Message, Progress } from 'genie-ui'
{{/if_eq}}
import App from './App'
import router from './router'
import store from './store'
import deviceConfig from './device-config'
{{#if_eq component "genie"}}
import './element-variables.scss'

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }

Vue.use(Autocomplete)
Vue.use(Switch)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Slider)
Vue.use(Radio)
Vue.use(RadioButton)
Vue.use(RadioGroup)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Progress)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message
{{/if_eq}}

Vue.use(Vuex)
Vue.config.productionTip = false

AI.injection(deviceConfig.debug)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
