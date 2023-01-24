import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
  },
  getters: {
  },
  mutations: {
    increment(state, payload) {
      state.counter += payload;
    },
    decrement(state, payload) {
      state.counter -= payload;
    },
  },
  actions: {
    increment({ commit }) {
      console.log('increment (action)')
      axios('https://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1').then(res => {
        commit('increment', res.data[0])
      })
    },
    decrement({ commit }) {
      axios('https://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1').then(res => {
        commit('decrement', res.data[0])
      })

    },
  },
  modules: {
  }
})
