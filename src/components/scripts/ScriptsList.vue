<template>
  <div>
    <template v-for="(script, index) in scripts">
      <div :key="index">
        <p class="text-muted mt-3 mb-0">
          {{ script.section }}:
          <span v-if="script.chapters.length === 1">
            {{ script.chapters[0].sequence }}
          </span>
          <span v-else>
            {{ script.chapters[0].sequence }} ~ {{ script.chapters[script.chapters.length - 1].sequence }}
          </span>
        </p>
        <div class="row no-gutters border-top text-center py-4 py-lg-5">
          <div
            class="col-lg-2 gh-chapter"
            v-for="(chapter, index) in script.chapters"
            :key="index"
          >
            <div class="d-flex flex-row flex-lg-column align-items-center">
              <router-link
                class="btn text-center p-0 text-monospace"
                :class="[chapter.isLoaded ? 'btn-dark' : 'btn-outline-dark']"
                :to="`scripts/${chapter.sequence}`"
              >
                {{ chapter.sequence }}
              </router-link>
              <p class="ml-3 ml-lg-0 mb-0 mt-0 mt-lg-1">
                {{ chapter.chapter }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ScriptsList',
  props: {
    scripts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.btn {
  height: 3rem;
  width: 3rem;
  font-size: 2rem;
}
.gh-chapter+.gh-chapter {
  margin-top: 1.5rem;
}
@media screen and (min-width: 992px) {
  .gh-chapter+.gh-chapter {
    margin-top: 0;
  }
}
.col-lg-2:nth-child(n+7) {
  margin-top: 1.5rem;
}
</style>
