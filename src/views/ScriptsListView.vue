<template>
  <div class="container">
    <h3 class="display-4 my-4">Scripts</h3>
    <p>
      * 게임의 대사 번역은
      <a href="http://culpenetty.egloos.com/" target="_blank">Culpenetty.egloos.com</a>
      에서 비영리 목적의 사용을 허락 받은 자료를 사용하였습니다.
    </p>
    <ScriptsList :scripts="scripts"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ScriptsList from '@/components/scripts/ScriptsList.vue';

export default {
  name: 'ScriptsListView',
  components: {
    ScriptsList,
  },
  computed: {
    ...mapState('scripts', {
      scripts: 'list',
    }),
  },
  methods: {
    ...mapActions('scripts', {
      fetch: 'getScriptsList',
    }),
  },
  mounted() {
    this.fetch();
  },
};
</script>
