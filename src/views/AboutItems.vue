<template>
  <div class="container-fluid">
    <div class="row">
      <ItemCard
        v-for="(item, index) in items" :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ItemCard from '@/components/about/ItemCard.vue'

export default {
  name: 'AboutItems',
  components: {
    ItemCard,
  },
  computed: {
    ...mapState('items', {
      items: 'list',
    }),
  },
  methods: {
    ...mapActions('items', {
      fetch: 'getItems',
    }),
  },
  mounted() {
    this.fetch()
  },
}
</script>
