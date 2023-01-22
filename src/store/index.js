import { createStore } from 'vuex'

export default createStore({
  state: {
    language: null
  },
  getters: {
    language (state) {
      return state.language || localStorage.getItem('language')
    }
  },
  mutations: {
    updateLanguage (state, language) {
      state.language = language
      localStorage.setItem('language', language)
    }
  },
  actions: {
    setLanguage ({ commit }, language) {
      commit('updateLanguage', language)
    }
  },
  modules: {
  }
})
