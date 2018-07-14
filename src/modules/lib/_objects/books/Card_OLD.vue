<template lang="html">
  <div class="flex flex-row">
    <div class="h-64 flex flex-col justify-between border border-grey-lighter shadow">
      <!-- TODO: Relative Hover => Book Details (description, tages, related) -->
      <div class="h-48 text-xs p-2">
        <h4 class="text-xs text-grey-dark font-medium mb-2">
          #{{ book.subject }}
        </h4>
        <router-link
          :to="{ name: 'book', params: { id: book._id } }"
          class="text-base text-grey-dark font-medium no-underline hover:underline"
          >{{ book.title }}
        </router-link>
      </div>
      <div class="flex flex-row justify-between p-2 bg-grey-lightest border-t border-grey-lighter">
        <h5 class="text-xs text-grey-darker font-medium">
          {{ book.authors[0].first_name }} {{ book.authors[0].last_name }}
        </h5>
        <p class="text-xs text-grey-dark font-medium">
          {{ book.year_pub }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['book']
}
</script>

<style lang="css">
</style>
