<template lang="html">
  <div class="">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'admin-container',
  // TODO: ...mapActions
  mounted: function () {
    this.$store.dispatch('load_books')
  }
}
</script>

<style lang="css">
</style>
