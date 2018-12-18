<template>
  <div>
    <div class="row border my-5" v-for="(script, index) in scripts" :key="index">
      <div class="col-lg-2" v-for="(chapter, index) in script.chapters" :key="index">
        <button type="button" class="btn btn-primary">
          {{ chapter.sequence }}
        </button>
        <p>{{ chapter.chapter }}</p>
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
.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  height: 2.5rem;
  width: 2.5rem;
}
</style>
