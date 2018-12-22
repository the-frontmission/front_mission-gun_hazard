<template>
  <div class="container">
    <h3 class="display-4 my-4">Scripts</h3>
    <ScriptsList :scripts="scripts"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ScriptsList from '@/components/scripts/ScriptsList.vue'

export default {
  name: 'ScriptsListView',
  components: {
    ScriptsList,
  },
  computed: {
    ...mapState('scriptsList', {
      scripts: 'list',
    }),
  },
  methods: {
    ...mapActions('scriptsList', {
      fetch: 'getScriptsList',
    }),
  },
  mounted() {
    this.fetch()
  },
}
</script>
