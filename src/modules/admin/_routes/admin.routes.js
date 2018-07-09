import adminContainer from '@/containers/Admin'
import adminMain from '../_views/adminMain'

import createView from '../_views/createView'

import readView from '../_views/readView'
import readItem from '../_views/readItem'
import updateView from '../_views/updateView'
import deleteView from '../_views/deleteView'

export default [
  {
    path: '/',
    component: adminContainer,
    children: [
      {
        path: '/',
        component: adminMain,
        children: [
          {
            name: 'create',
            path: '/create',
            component: createView
          },
          {
            name: 'read',
            path: '/view',
            component: readView
          },
          {
            name: 'read-item',
            path: '/view/:id',
            component: readItem
          },
          {
            name: 'update',
            path: '/update/:id',
            component: updateView
          },
          {
            name: 'delete',
            path: '/delete:/id',
            component: deleteView
          }
        ]
      }
    ]
  }
]
