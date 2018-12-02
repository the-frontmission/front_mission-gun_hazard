<template>
  <section class="home-main mb-10px">
    <HomeCarousel/>
  </section>
</template>

<script>
import HomeCarousel from './HomeCarousel.vue'

export default {
  name: 'HomeMain',
  components: {
    HomeCarousel,
  },
}
</script>

<style scoped>
h2 {
  font-variant: small-caps;
}
.card-img {
  object-fit: cover;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 5s ease;
}
.slide-fade-leave-active {
  transition: all 7s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(500px);
  opacity: 0;
}
</style>
