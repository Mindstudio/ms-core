// import state from './state'
// import getters from './getters'
// import actions from './actions'
// import mutations from './mutations'

import bookAPI from '../_api/bookAPI'

export default {
  state: {
    books: {}
  },
  getters: {

  },
  actions: {
    load_books: function ({ commit }) {
      bookAPI.findBooks.then((res) => {
        commit('set_books', { payload: res.data })
      }, (err) => {
        console.log(err)
      })
    }
  },
  mutations: {
    set_books: (state, { payload }) => {
      state.books = payload
    }
  },
  modules: {}
}
