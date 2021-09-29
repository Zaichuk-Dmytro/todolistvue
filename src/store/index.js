import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allTasks: [],
    mode: 'ALL'
    
  },
  mutations: {
    set_allTasks(state, payload) {
      state.allTasks = payload
    },
    push_to_allTasks(state, payload) {
      debugger
      if (payload == '') {
        return
      }
      let count = state.allTasks.length ? Math.max(...state.allTasks.map(task => task.id )) : 0
      state.allTasks.push({id: ++count, value: payload, select: false})
      
      
    },
    set_mode(state, payload) {
      state.mode = payload
    }
  },
  getters: {
    get_allTasks(state) {
      return state.allTasks
    },
    get_mode(state) {
      return state.mode
    }
  },
  actions: {
    
  },
  modules: {
  },
})
