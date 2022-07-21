import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)
const persistedDataState = createPersistedState({
  paths: ["userId"],
})

export default new Vuex.Store({
  plugins: [persistedDataState],
  state: {
    userId: 0
  },
  mutations: {
    setUserId(state, param) {
      state.userId = param;
    },
  },
  actions: {
    changeUserIdValue(store, param) {
      store.commit("setUserId", param)
    },
  },
  modules: {
  }
})
