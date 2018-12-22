<template>
  <div class="container">
    <ScriptsDetail v-if="detail" :detail="detail"/>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import ScriptsDetail from '@/components/scripts/ScriptsDetail.vue'

export default {
  name: 'ScriptsDetailView',
  components: {
    ScriptsDetail,
  },
  computed: {
    ...mapState('scriptsDetail', {
      scripts: 'list',
    }),
    ...mapGetters('scriptsDetail', {
      detail: 'currentScriptDetail',
    }),
  },
  methods: {
    ...mapActions('scriptsDetail', {
      fetch: 'getScriptsDetail',
    }),
  },
  mounted() {
    const { index } = this.$route.params
    this.fetch({ index })
  },
}
</script>
