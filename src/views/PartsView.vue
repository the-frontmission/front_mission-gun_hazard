<template>
  <div class="container">
    <div class="row">
      <PartCard
        v-for="(item, index) in list" :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PartCard from '@/components/parts/PartCard.vue'

export default {
  name: 'PartsView',
  components: {
    PartCard,
  },
  computed: {
    ...mapState('parts', [
      'list',
    ]),
  },
  methods: {
    ...mapActions('parts', {
      fetch: 'getParts',
    }),
  },
  mounted() {
    this.fetch()
  },
}
</script>
