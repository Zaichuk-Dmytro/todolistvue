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
      state.allTasks = payload || []
      localStorage.setItem('allTasks', JSON.stringify(state.allTasks))
    },

    editSelect(state, payload) {
      state.allTasks.map(item => {
        if (item.id == payload.id) {
          item.select == !item.select
        }
      })
      localStorage.setItem('allTasks', JSON.stringify(state.allTasks))
      // console.log('payload')
      // console.log(payload)
      // localStorage.setItem('allTasks', JSON.stringify(state.allTasks))
    },

    push_to_allTasks(state, payload) {
      if (payload == '') {
        return
      }
      let count = state.allTasks.length ? Math.max(...state.allTasks.map(task => task.id )) : 0
      state.allTasks.push({id: ++count, value: payload, select: false})
      localStorage.setItem('allTasks', JSON.stringify(state.allTasks))
      
      
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
