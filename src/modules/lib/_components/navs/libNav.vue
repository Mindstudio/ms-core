<template lang="html">
  <nav class="h-12 border-b shadow flex">
    <div class="container m-auto flex flex-row justify-between items-center">
      <div class="w-1/6 py-1">
        <focus-link></focus-link>
      </div>
      <div class="w-5/6">
        <lib-menu></lib-menu>
      </div>
    </div>
  </nav>
</template>

<script>
import focusLink from '@/components/navs/focusLink'
import libMenu from './libMenu'

export default {
  name: 'lib-nav',
  components: {
    focusLink,
    libMenu
  }
}
</script>

<style lang="css">
</style>
