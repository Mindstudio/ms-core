<template lang="html">
  <div class="">

    <div class="flex flex-row px-3 py-3">

      <div class="w-full p-3 flex flex-col justify-between">
        <div class="h-216">
          <div class="flex flex-col">

            <div class="flex flex-row text-xs text-grey-darkest h-8">
              <div class="w-1/5 border bg-grey-lightest p-2">
                _id
              </div>
              <div class="w-1/5 text-xs border-r border-b border-t bg-grey-lightest p-2">
                Subject
              </div>
              <div class="w-7/20 text-xs border-r border-b border-t bg-grey-lightest p-2">
                Title
              </div>
              <div class="w-1/10 text-xs border-r border-b border-t bg-grey-lightest p-2">
                Status
              </div>
              <div class="w-3/20 text-xs border-r border-b border-t bg-grey-lightest p-2">
                Actions
              </div>
            </div>

            <div
            class="flex flex-row text-xs text-grey-dark" v-for="item in items"
            :key="item._id">
              <div class="w-1/5 border-r border-l border-b p-2 flex items-center">
                <router-link :to="{ name: 'read-item', params: { id: item._id } }">
                  {{ item._id }}
                </router-link>
              </div>
              <div class="w-1/5 border-r border-b p-2 flex items-center">
                {{ item.subject }}
              </div>
              <div class="w-7/20 border-r border-b p-2 leading-normal flex items-center">
                {{ item.title }}
              </div>
              <div class="w-1/10 border-r border-b p-2 flex items-center">
                item.status
              </div>
              <div class="w-3/20 border-r border-b flex flex-row justify-around items-center">
                <button class="text-grey-darker hover:text-grey-lightest bg-grey-lighter hover:bg-green font-medium rounded-sm p-1 no-underline">
                  Publish
                </button>
                <router-link
                  :to="{ name: 'update', params: { id: item._id } }"
                  class="text-grey-darker hover:text-grey-lightest bg-grey-lighter hover:bg-orange font-medium rounded-sm p-1 no-underline"
                  tag="button"
                >
                  Update
                </router-link>
                <button class="text-grey-darker hover:text-grey-lightest bg-grey-lighter hover:bg-red font-medium rounded-sm p-1 no-underline">
                  Delete
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'read-model',
  computed: {
    items () {
      return this.$store.state.books
    }
  }
}
</script>

<style lang="css">
</style>
