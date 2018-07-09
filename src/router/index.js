import Vue from 'vue'
import Router from 'vue-router'

import focusRoutes from '@/modules/focus/_routes/focus.routes.js'
import libraryRoutes from '@/modules/lib/_routes/library.routes.js'

Vue.use(Router)

const baseRoutes = []

const routes = baseRoutes.concat(
  focusRoutes,
  libraryRoutes
)

export default new Router({
  mode: 'history',
  path: '/',
  routes
})
