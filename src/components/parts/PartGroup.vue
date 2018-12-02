<template>
  <div class="card m-2">
    <div class="row border">
      <div class="col-12 text-right text-white p-3"
        :class="group.color"
      >
        <h1 class="display-3">{{ group.groupNumber }}</h1>
        <h2>{{ group.name }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartGroup',
  props: {
    group: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
