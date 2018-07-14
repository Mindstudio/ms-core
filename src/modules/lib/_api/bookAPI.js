import Api from '@/api/Api'

export default {
  findBooks () {
    console.log('findBooks')
    return Api().get(`/api/books`)
  }
}
