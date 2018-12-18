<template>
  <div class="container">
    <ScriptRow :scripts="scripts"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ScriptRow from '@/components/scripts/ScriptRow.vue'

export default {
  name: 'ScriptsView',
  components: {
    ScriptRow,
  },
  computed: {
    ...mapState('scripts', {
      scripts: 'list',
    }),
  },
  methods: {
    ...mapActions('scripts', {
      fetch: 'getScripts',
    }),
  },
  mounted() {
    this.fetch()
  },
}
</script>

<style scoped></style>
