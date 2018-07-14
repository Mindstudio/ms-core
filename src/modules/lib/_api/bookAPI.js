import Api from '@/api/Api'

export default {
  findBooks () {
    console.log('findBooks')
    return Api().get(`/api/books`)
  },
  findBookById (_id) {
    console.log('findBookById')
    return Api().get(`/api/books/book/${_id}`)
  }
}
