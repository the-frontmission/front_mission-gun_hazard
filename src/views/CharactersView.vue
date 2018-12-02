<template>
  <div class="container">
    <CharacterGrid
      v-for="character in characters"
      :key="character.uid"
      :character="character"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CharactersGrid from '@/components/characters/CharactersGrid.vue'
import CharacterGrid from '@/components/characters/CharacterGrid.vue'

export default {
  name: 'CharactersView',
  components: {
    CharactersGrid,
    CharacterGrid,
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
