<template lang="html">
  <div class="min-h-screen">
    <div class="h-80 flex flex-row border-r border-b border-l">
      <div class="w-3/4 flex flex-col justify-between p-4 bg-grey-lighter">
        <div class="">
          <h5 class="text-base text-grey-dark font-medium mb-2">
            #book.subject
          </h5>
          <h3 class="text-3xl text-grey-darker font-light mb-2">
            {{ book.title }}
          </h3>
        </div>
      </div>
      <div class="w-1/4 flex flex-col justify-between border-l p-4 bg-grey-lightest">
        <h4 class="text-lg text-grey-dark leading-normal font-light mb-2">
          {{ book.summary }}
        </h4>
        <h6 class="text-base text-grey-dark font-medium">
          book.publisher
        </h6>

      </div>
    </div>
    <div class="flex flex-row border-r border-white">
      <div class="w-3/4 p-4">
        <h4 class="text-xl text-grey-dark font-medium mb-2">
          Review
        </h4>
        <p class="text-grey leading-normal mb-2">book.text[0]</p>
        <p class="text-grey leading-normal mb-2">book.text[1]</p>
        <p class="text-grey leading-normal mb-2">book.text[2]</p>
        <p class="text-grey leading-normal mb-2">book.text[3]</p>
      </div>
      <div class="w-1/4 border-l border-dashed">
        <div class="p-4">
          <h4 class="text-base text-grey-dark font-medium">
            <div class="h-64 border mb-2">
              img
            </div>
            <div class="flex flex-row justify-between items-center mb-2">
              <p class="text-sm text-grey-dark">Min: <b>£7.99</b></p>
              <p class="text-sm text-grey-dark">Max: <b>£10.99</b></p>
            </div>
            <p class="text-sm text-grey-dark mb-2">
              Released: book.year_pub
            </p>
            <div class="flex flex-row">
              <!-- <p class="text-sm text-grey mr-2 hover:text-grey-darker"
                v-for="topic in book.topics"
                :key="topic.id"> -->
                #topic
              <!-- </p> -->
            </div>
          </h4>
        </div>
        <div class="border-t p-4">
          <h4 class="text-base text-grey-darker font-medium">
            book.authors[0].first_name
            book.authors[0].last_name
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    book () {
      return this.$store.getters.getBookById(this.$route.params.id)
    }
  }
}
</script>

<style lang="css">
</style>
