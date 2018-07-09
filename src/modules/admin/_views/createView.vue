<template>
  <div class="container m-auto">
    <label for="createView">Create a </label>
    <select
      id="model"
      class=""
      >
      <option
        v-for="model in models"
        :key="model.id"
        @click="selectedComp = model.comp">
        {{ model.name }}
      </option>
    </select>
    <!-- <button @click="selectedComp = 'createArticle'">Article</button>
    <button @click="selectedComp = 'createBook'">Book</button> -->
    <keep-alive>
      <component :is="selectedComp">
        <p>Default Content</p>
      </component>
    </keep-alive>
  </div>
</template>

<script>
import book from '../_models/book.vue'

export default {
  data () {
    return {
      selectedComp: '',
      models: [
        {
          name: '',
          comp: ''
        },
        {
          name: 'Book',
          comp: 'createBook'
        }
      ]
    }
  },
  components: {
    createBook: book
  }
}
</script>

<style scoped>
h2 {
  color: red;
}
</style>
