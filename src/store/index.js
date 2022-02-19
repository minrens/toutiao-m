import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import { getItem, setItem } from '@/utils/storage'

Vue.use(Vuex)

const TOKEN_KEY = 'TOUTIAO_USER'

export default new Vuex.Store({
  state: {
    // 一个对象，存储当前登录用户信息（token等数据）
    user: getItem(TOKEN_KEY)
    // user: JSON.parse(window.localStorage.getItem(TOKEN_KEY))
    // user: null
  },
  mutations: {
    setUser (state, data) {
      state.user = data

      // 为了防止刷新丢失，我们需要把数据备份到本地存储
      setItem(TOKEN_KEY, state.user)
      // window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user))
    }
=======

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
>>>>>>> 06c83fedcdeb05cae8dd77f3b9f2401d3b006177
  },
  actions: {
  },
  modules: {
  }
})
