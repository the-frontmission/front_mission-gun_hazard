<template>
  <div class="my-5">
    <h3 class="mb-4">{{ chapter.index }}. {{ chapter.title }}</h3>
    <template v-for="(el, index) in chapter.script">
      <div :key="index">
        <p v-if="el.hasOwnProperty('text')" lang="ko">
          {{ el.text || '&nbsp;' }}
        </p>
        <p class="text-muted mb-0" lang="jp">{{ el.textJP }}</p>
        <p class="lead" lang="ko">{{ el.textKO }}</p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ScriptsChapter',
  props: {
    chapter: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
