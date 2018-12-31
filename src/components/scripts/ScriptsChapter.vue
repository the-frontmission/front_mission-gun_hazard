<template>
  <div class="my-5">
    <h3 class="mb-4">{{ chapter.index }}. {{ chapter.title }}</h3>
    <template v-for="(el, index) in chapter.contents">
      <div :key="index">
        <template v-if="el.hasOwnProperty('text')">
          <p v-if="!el.text">&nbsp;</p>
          <p v-if="el.text" class="d-inline-block text-white- bg-warning rounded-pill px-3">{{ el.text }}</p>
        </template>
        <template v-if="el.hasOwnProperty('textJP')">
          <div class="alert alert-dark" role="alert">
            <h5 class="alert-heading text-dark" lang="jp">{{ el.textJP }}</h5>
            <hr class="my-2">
            <p class="lead mb-0" lang="ko">{{ el.textKO }}</p>
          </div>
        </template>
        <template v-if="el.hasOwnProperty('scriptJP')">
          <ScriptsChapterMedia :script="el"/>
          <!-- <div class="media">
            <img class="mr-3" src="./img/1-albert_normal.png" alt="image" width="48"
              v-if="el.scriptJP.split('：').length === 2"
            >
            <div class="media-body" :class="{ 'ml-64': el.scriptJP.split('：').length === 1 }">
              <h5 class="mt-0 text-dark" lang="jp">{{ el.scriptJP }}</h5>
              <p class="lead" lang="ko">{{ el.scriptKO }}</p>
            </div>
          </div> -->
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
}
</script>
