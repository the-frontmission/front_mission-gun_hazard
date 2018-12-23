<template>
  <div class="container">
    <template v-if="chapter">
      <ScriptsChapter :chapter="chapter"/>
    </template>
    <template v-else>
      <div class="loading">
        <h1 class="display1">loading...</h1>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ScriptsChapter from '@/components/scripts/ScriptsChapter.vue'

export default {
  name: 'ScriptsDetailView',
  components: {
    ScriptsChapter,
  },
  computed: {
    ...mapGetters('scripts', {
      chapter: 'currentChapter',
    }),
  },
  methods: {
    ...mapActions('scripts', {
      fetch: 'getScriptsChapter',
    }),
  },
  mounted() {
    const { index } = this.$route.params
    this.fetch({ index })
  },
}
</script>

<style scoped>
.loading {
  height: 100vh;
}
</style>

