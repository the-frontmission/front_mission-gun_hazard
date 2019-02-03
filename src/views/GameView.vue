<template>
  <div>
    <GameJumbotron/>
    <GameCard v-if="game.specificationJP" :game="game"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import GameJumbotron from '@/components/game/GameJumbotron.vue'
import GameCard from '@/components/game/GameCard.vue'

export default {
  name: 'GameView',
  components: {
    GameJumbotron,
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
