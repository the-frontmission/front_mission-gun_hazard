<template>
  <div>
    <div
      class="row no-gutters border-top text-center my-3 pt-3"
      v-for="(script, index) in scripts"
      :key="index"
    >
      <div
        class="col-lg-2 gh-chapter"
        v-for="(chapter, index) in script.chapters"
        :key="index"
      >
        <div class="d-flex flex-row flex-lg-column align-items-center">
          <router-link
            class="btn btn-outline-dark text-center p-0 text-monospace"
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
.btn-outline-dark {
  height: 3rem;
  width: 3rem;
  font-size: 2rem;
}
.gh-chapter+.gh-chapter {
  margin-top: 1rem;
}
@media screen and (min-width: 992px) {
  .gh-chapter+.gh-chapter {
    margin-top: 0;
  }
}
.col-lg-2:nth-child(n+7) {
  margin-top: 1rem;
}
</style>
