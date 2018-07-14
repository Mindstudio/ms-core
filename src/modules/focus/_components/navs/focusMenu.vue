<template lang="html">
  <nav class="text-xs">
    <router-link
      :to="{ name: 'books' }"
      class="py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide mr-4"
      tag="button"
      >Library
    </router-link>
    <router-link
      :to="{ name: 'one' }"
      class="py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide mr-4"
      tag="button"
      >One
    </router-link>
    <router-link
      :to="{ name: 'two' }"
      class="py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide mr-4"
      tag="button"
      >Two
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'focus-menu'
}
</script>

<style lang="css">
</style>
