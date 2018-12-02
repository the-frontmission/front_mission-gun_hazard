<template>
  <GameCard v-if="game.specificationJP" :game="game"/>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import GameCard from '@/components/game/GameCard.vue'

export default {
  name: 'GameView',
  components: {
    GameCard,
  },
  computed: {
    ...mapState('game', {
      game: 'about',
    }),
  },
  methods: {
    ...mapActions('game', {
      fetch: 'getGame',
    }),
  },
  mounted() {
    this.fetch()
  },
}
</script>

<style scoped></style>
