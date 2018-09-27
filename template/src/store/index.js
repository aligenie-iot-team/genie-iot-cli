import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 异步方法
const mockRequestData = (cb) => {
  setTimeout(() => {
    const val = 10
    cb && cb(val)
  }, 1000)
}

/* eslint-disable no-new */
export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: { // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation, 只能同步
    increment (state) {
      state.count++
    },
    multiple (state, payload) {
      const { n = 2 } = payload
      state.count *= n
    },
    mockRequest (state, payload) {
      const { val = 0 } = payload
      state.count += val
    }
  },
  actions: {// 可异步
    async1 () {
      return new Promise((resolve) => {
        mockRequestData((val) => {
          resolve(val + 4)
        })
      })
    },
    async2 () {
      return new Promise((resolve) => {
        mockRequestData((val) => {
          resolve(val + 2)
        })
      })
    },
    multiple ({ commit }, payload) {
      const { scb } = payload
      setTimeout(() => {
        commit('multiple', payload)
        scb && scb()
      }, 2000)
    },
    mockRequest ({ commit }) {
      mockRequestData((val) => {
        commit('mockRequest', { val })
      })
    },
    async asyncTest ({ commit, dispatch }) {
      console.log('同步方法开始执行')
      const async1val = await dispatch('async1')
      console.log('async1执行结束，async2开始执行')
      const async2val = await dispatch('async2')
      const val = async1val + async2val
      console.log('所有异步请求结束', val)
      commit('mockRequest', { val })
    }
  }
})
