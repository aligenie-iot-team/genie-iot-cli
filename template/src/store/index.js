import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
/* eslint-disable no-new */
export default new Vuex.Store({
  state: {
    status: 0, // 设备状态 0 - 未激活， 1 - 在线， 3 - 离线， 8 - 禁用,
    attr: {}, // 设备属性
    errorInfo: {}, // 设备上报的错误信息
    scheduleInfo: {} // 即将到来的定时，倒计时信息
  },
  mutations: { // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation, 只能同步
    /**
     * 更新状态树中的设备相关状态
     * @param {object} payload.data 新的数据
     * @param {function} payload.cb 更新后的回调，用作更新后的特殊业务逻辑处理
     */
    updateDeviceStatus(state, payload) {
      const { data, cb } = payload
      const { status, attr = {}, errorInfo } = data
      if (!status) {
        console.log('error')
      }
      state.status = status
      state.attr = Object.assign({}, state.attr, attr)
      state.errorInfo = errorInfo || {}
      state.scheduleInfo = errorInfo || {}
      cb && cb()
    },
    /**
     * 更新状态树中的属性集合
     * @param {*} attr 要更新的属性集合
     */
    updateDeviceAttrs(state, attr = {}) {
      state.attr = Object.assign({}, state.attr, attr)
    }
  },
  actions: {
    /**
     * 获取设备状态 todo: 目前只是mock，后续根据具体情况调整逻辑
     * @param {*} payload 参数 cb : 回调函数
     */
    getDeviceStatus({ commit }, payload) {
      AI.getDeviceStatus().then((data) => {
        console.log('[getDeviceStatus]', data)
        // commit('updateDeviceStatus', { data: data.model })
      }, (error) => {
        console.log('getDeviceStatus error', error)
      })
    },
    /**
     * 设置设备状态  todo: 目前只是mock，后续根据具体情况调整逻辑
     * @param {*} payload  参数
     * @param {object} payload.attrs 要更新的属性集合
     * @param {object} payload.immediately 是否立即更新状态树种的属性集合
     */
    setDeviceStatus({ commit }, payload = {}) {
      const { attrs = {}, immediately = true } = payload
      if (immediately) {
        commit('updateDeviceAttrs', attrs)
      }
      this.SET_TIMEOUT && clearTimeout(this.SET_TIMEOUT)
      this.SET_TIMEOUT = setTimeout(() => {
        AI.setDeviceStatus({ attrs })
      }, 500)
    }
  }
})
