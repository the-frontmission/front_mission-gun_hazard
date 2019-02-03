<template>
  <div>
    <OneCard
      subTitle="front mission"
      mainTitle="GUN HAZARD"
      imgUrl="/img/home/place-factory1.jpeg"
    />
    <MainCards
      :cards="[
        { name: 'game', imgUrl: '/img/home/material-wall2.jpeg' },
        { name: 'characters', imgUrl: '/img/home/material-wall1.jpeg' },
      ]"
    />
    <MainCards
      :cards="[
        { name: 'parts', imgUrl: '/img/home/card-3.jpeg' },
        { name: 'scripts', imgUrl: '/img/home/card-4.jpeg' },
        { name: 'videos', imgUrl: '/img/home/card-2.jpeg' },
      ]"
    />
  </div>
</template>

<script>
import OneCard from '@/components/home/OneCard.vue'
import MainCards from '@/components/home/MainCards.vue'

export default {
  name: 'HomeView',
  components: {
    OneCard,
    MainCards,
  },
}
</script>
