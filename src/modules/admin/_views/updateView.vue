<template lang="html">
  <div class="">
    <input type="text" v-model="item.title">
    {{ item.title }}
    <br>
    {{ item._id }}
  </div>
</template>

<script>
export default {
  computed: {
    item () {
      return this.$store.getters.getArticleById(this.$route.params.id)
    }
  }
}
</script>

<style lang="css">
</style>
