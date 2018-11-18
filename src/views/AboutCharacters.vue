<template>
  <div class="container">
    <CharactersGrid
      v-for="character in characters"
      :key="character.uid"
      :character="character"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CharactersGrid from '@/components/about/CharactersGrid.vue'

export default {
  name: 'AboutCharacters',
  components: {
    CharactersGrid,
  },
  computed: {
    ...mapState('characters', {
      characters: 'list',
    }),
  },
  methods: {
    ...mapActions('characters', {
      fetch: 'getCharacters',
    }),
  },
  mounted() {
    this.fetch()
  },
}
</script>

<style scoped></style>
