
import libContainer from '@/containers/Library'

import libMain from '../_views/libMain'
import itemsView from '../_views/itemsView'
import itemView from '../_views/itemView'

// lib/_objects/books
import booksBanner from '../_objects/books/Banner'
import Books from '../_objects/books/List'
import Book from '../_models/book'

export default [
  {
    path: '/',
    component: libContainer,
    children: [
      {
        path: '/',
        component: libMain,
        children: [
          {
            path: '/',
            component: itemsView,
            children: [
              { name: 'books', path: 'books', components: { default: Books, banner: booksBanner } }
            ]
          },
          {
            path: '/',
            component: itemView,
            children: [
              { name: 'book', path: 'book/:id', component: Book }
            ]
          }
        ]
      }
    ]
  }
]
