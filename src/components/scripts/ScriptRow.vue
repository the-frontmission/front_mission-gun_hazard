<template>
  <div>
    <div
      class="row no-gutters border text-center my-3 p-3"
      v-for="(script, index) in scripts"
      :key="index"
    >
      <div
        class="col-lg-2 gh-chapter"
        v-for="(chapter, index) in script.chapters"
        :key="index"
      >
        <div class="d-flex flex-row flex-lg-column align-items-center">
          <button type="button" class="btn btn-dark text-center p-0">
            {{ chapter.sequence }}
          </button>
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
  name: 'ScriptRow',
  props: {
    scripts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.btn-dark {
  height: 3rem;
  width: 3rem;
  font-size: 1.5rem;
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
