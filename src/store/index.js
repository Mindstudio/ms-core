import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: {}
  },

  getters: {
    getBookById: (state) => (id) => {
      return state.books.find(book => book._id === id)
    }
  },

  actions: {
    // load_items: function ({ commit }) {
    //   axios.get('/items').then((res) => {
    //     commit('set_items', { payload: res.data })
    //   }, (err) => {
    //     console.log(err)
    //   })
    // },
    load_books: function ({ commit }) {
      axios.get('/books').then((res) => {
        commit('set_books', { payload: res.data.books })
      }, (err) => {
        console.log(err)
      })
    }
  },

  mutations: {
    // set_items: (state, { payload }) => {
    //   state.data.items = payload
    // },
    set_books: (state, { payload }) => {
      state.books = payload
    }
  },

  modules: {}

})
