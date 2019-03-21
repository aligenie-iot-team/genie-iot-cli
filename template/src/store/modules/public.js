/* eslint-disable no-new */
export default {
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
     */
    updateDeviceStatus(state, payload) {
      const { data } = payload
      const { status, attr = {}, errorInfo = {}, scheduleInfo = {} } = data
      if (status !== undefined) state.status = status
      state.attr = Object.assign({}, state.attr, attr)
      state.errorInfo = errorInfo
      state.scheduleInfo = scheduleInfo
    },
    /**
     * 更新状态树中的属性集合
     * @param {*} attr 要更新的属性集合
     */
    updateDeviceAttr(state, attr = {}) {
      state.attr = Object.assign({}, state.attr, attr)
    }
  },
  actions: {
    /**
     * 获取设备状态
     */
    deviceStatusPolling({ commit }) {
      AI.deviceStatusPolling((resp) => {
        console.log('返回的状态：', resp.model);
        // 更新设备状态
        commit('updateDeviceStatus', { data: resp.model })
      }, (error) => {
        console.log('[deviceStatusPolling error]', error)
      })
    },
    /**
     * 设置设备属性
     * @param {*} attrs 需要设置的属性集合
     */
    setDeviceStatus({ state, commit }, attrs) {
      if (state.attr.onlinestate !== 'online') {
        console.error('**设备不在线 无法操控**')
        return;
      }

      // 更新数据
      commit('updateDeviceStatus', { data: {
        attr: attrs
      }})

      // 设置数据
      AI.setDeviceStatus(attrs).then((resp) => {
        console.log('setDeviceStatus：', resp)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
