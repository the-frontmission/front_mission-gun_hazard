<template>
  <div class="media">
    <img
      v-if="hasCharacter"
      class="mr-3"
      :src="`/img/scripts/${characterImg}`"
      width="48"
      alt="image"
    >
    <div class="media-body" :class="{ 'ml-64': !hasCharacter }">
      <p class="my-0 text-black-50" lang="jp">{{ script.scriptJP }}</p>
      <p class="" lang="ko">{{ script.scriptKO }}</p>
    </div>
  </div>
</template>

<script>
import characterMap from './characterMap';

export default {
  name: 'ScriptsChapterMedia',
  props: {
    script: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hasCharacter () {
      const arr = this.script.scriptJP.split('：');
      return arr.length === 2;
    },
    characterImg () {
      const characterName = this.script.scriptJP.split('：')[0];
      const character = characterMap.find(c => c.nameJP === characterName);
      return character.image;
    },
  },
};
</script>

<style scoped>
.ml-64 {
  margin-left: 4rem;
}
</style>

