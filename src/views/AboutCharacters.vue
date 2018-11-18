<template>
  <div>
    <h1>Characters</h1>
    <CharactersList :characters="characters"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CharactersList from '@/components/aboutCharacters/CharactersList.vue'

export default {
  name: 'AboutCharacters',
  components: {
    CharactersList,
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
