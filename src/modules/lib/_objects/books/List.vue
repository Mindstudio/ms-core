<template lang="html">
  <div class="container m-auto flex flex-col">
    <div class="p-8">
      <div class="flex flex-row flex-wrap p-6 border border-dashed border-grey-lighter">
        <div class="w-1/4 p-2" v-for="book in books" :key="book._id">
          <card :book="book" v-if="book.status === true"></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/modules/lib/_objects/books/Card'

export default {
  name: 'books-list',
  computed: {
    books () {
      return this.$store.state.books
    }
  },
  components: {
    card
  }
}
</script>

<style lang="css">
</style>
