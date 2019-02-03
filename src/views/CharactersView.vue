<template>
  <div class="container">
    <CharacterGrid
      v-for="character in list"
      :key="character.uid"
      :character="character"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CharacterGrid from '@/components/characters/CharacterGrid.vue'

export default {
  name: 'CharactersView',
  components: {
    CharacterGrid,
  },
  computed: {
    ...mapState('characters', [
      'list',
    ]),
  },
  methods: {
    ...mapActions('characters', {
      fetch: 'getCharacters',
    }),
  },
  mounted() {
    this.fetch();
  },
};
</script>
