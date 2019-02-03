<template>
  <div class="my-5">
    <h3 class="mb-4">{{ chapter.index }}. {{ chapter.title }}</h3>
    <template v-for="(el, index) in chapter.contents">
      <div :key="index">
        <template v-if="el.hasOwnProperty('text')">
          <p v-if="!el.text">&nbsp;</p>
          <p v-if="el.text" class="d-inline-block bg-warning rounded-pill px-3">{{ el.text }}</p>
        </template>
        <template v-if="el.hasOwnProperty('textJP')">
          <div class="alert alert-dark mb-0" role="alert">
            <h5 class="alert-heading text-dark" lang="jp">{{ el.textJP }}</h5>
            <hr class="my-2">
            <p class="lead mb-0" lang="ko">{{ el.textKO }}</p>
          </div>
        </template>
        <template v-if="el.hasOwnProperty('scriptJP')">
          <ScriptsChapterMedia :script="el"/>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import ScriptsChapterMedia from './ScriptsChapterMedia.vue';

export default {
  name: 'ScriptsChapter',
  components: {
    ScriptsChapterMedia,
  },
  props: {
    chapter: {
      type: Object,
      required: true,
    },
  },
};
</script>
