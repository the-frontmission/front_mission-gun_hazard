<template>
  <div>
    <CarouselFade/>
    <MainCard6/>
    <MainCard4/>
  </div>
</template>

<script>
import CarouselFade from '@/components/home/CarouselFade.vue'
import MainCard6 from '@/components/home/MainCard6.vue'
import MainCard4 from '@/components/home/MainCard4.vue'

export default {
  name: 'HomeView',
  components: {
    CarouselFade,
    MainCard6,
    MainCard4,
  },
}
</script>
