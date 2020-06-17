import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuVisible: true,
    user: {
      name: 'Mock man',
      email: 'mockman@gmail.com'  
    }
  },
  mutations: {
    toggleMenu(state, isVisible) {
      if(isVisible === undefined) {
        state.isMenuVisible = !state.isMenuVisible
      } else {
        state.isMenuVisible = isVisible
      }
    }    
  }
})