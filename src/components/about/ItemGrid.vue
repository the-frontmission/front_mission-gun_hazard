<template>
<div class="card">
  <div class="row border" v-if="item.type === 'group'">
    <div class="col-1 text-white" :class="item.color">
    </div>
    <div class="col-11 py-3">
      <h2>{{ item.name }}</h2>
      <p class="mb-0">{{ item.description }}</p>
    </div>
  </div>
  <div class="row border" v-else-if="item.type === 'item'">
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
  name: 'ItemGrid',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
