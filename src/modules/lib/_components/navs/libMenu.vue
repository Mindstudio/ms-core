<template lang="html">
  <nav class="text-xs">
    <router-link
      :to="{ name: 'books' }"
      class="py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide mr-4"
      tag="button"
      >Books
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'lib-menu'
}
</script>

<style lang="css">
</style>
