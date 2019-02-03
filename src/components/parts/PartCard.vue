<template>
  <div class="col-md-6 col-lg-4 p-2">
    <div class="card rounded-0" :class="item.color">
      <template v-if="item.type === 'group'">
        <div class="card-body text-white text-right">
          <h1 class="display-3">{{ item.number }}</h1>
          <h1>{{ item.name }}</h1>
        </div>
      </template>
      <template v-else-if="item.type === 'item'">
        <div class="card-body bg-white ml-3 p-3">
          <h4>{{ item.name }}
            <small class="text-muted">{{ item.code }}</small>
          </h4>
          <p class="mb-0">{{ item.description }}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartCard',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
@media (min-width: 768px) {
  .card {
    min-height: 18rem;
  }
}
</style>
