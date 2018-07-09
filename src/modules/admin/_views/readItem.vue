<template lang="html">
  <div class="">
    <p>
      {{ item._id }}
    </p>
    <p>
      {{ item.title }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'read-item',
  computed: {
    item () {
      return this.$store.getters.getBookById(this.$route.params.id)
    }
  }
}
</script>

<style lang="css">
</style>
