<template lang="html">
  <nav class="h-12 border-b shadow flex">
    <div class="container m-auto flex flex-row justify-between items-center">
      <div class="w-1/6 py-1">
        <focus-link></focus-link>
      </div>
    </div>
  </nav>
</template>

<script>
import focusLink from '@/components/navs/focusLink'
import adminButton from '@/components/buttons/adminButton'

export default {
  name: 'nav-bar',
  components: {
    focusLink,
    adminButton
  }
}
</script>

<style lang="css">
</style>
