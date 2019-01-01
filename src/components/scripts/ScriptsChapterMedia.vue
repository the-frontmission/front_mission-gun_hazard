<template>
  <div class="media" v-if="hasCharacter">
    <img class="mr-2" :src="`/img/scripts/${characterImg}`" width="48">
    <div class="media-body">
      <p class="d-inline-block bg-light border px-1 mb-1">
        {{ `${nameJP} ${nameKO}` }}
      </p>
      <p class="my-0 text-black-50" lang="jp">「{{ scriptJP }}」</p>
      <p class="" lang="ko">{{ scriptKO }}</p>
    </div>
  </div>
  <div class="media" v-else>
    <div class="media-body ml-56">
      <p class="my-0 text-black-50" lang="jp">「{{ script.scriptJP }}」</p>
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
    nameJP () {
      return this.script.scriptJP.split('：')[0];
    },
    scriptJP () {
      return this.script.scriptJP.split('：')[1];
    },
    nameKO () {
      return this.script.scriptKO.split(' : ')[0];
    },
    scriptKO () {
      return this.script.scriptKO.split(' : ')[1];
    },
    characterImg () {
      const characterName = this.script.scriptJP.split('：')[0];
      const character = characterMap.find(c => {
        if (c.nameJP) {
          return c.nameJP === characterName;
        } else if (this.script.uid) {
          return c.uid === this.script.uid;
        }
      });
      if (character) {
        return character.image;
      } else {
        return '0-default.png';
      }
    },
  },
};
</script>

<style scoped>
.ml-56 {
  margin-left: 3.5rem;
}
</style>

