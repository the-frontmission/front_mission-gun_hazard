<template>
  <div>
    <template v-for="ch in characters">
      <div :key="ch.uid">
        {{ ch.nameJP }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'CharactersList',
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
