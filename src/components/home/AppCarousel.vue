<template>
  <b-carousel
    controls
    indicators
    img-width="1200"
    img-height="40"
  >
    <b-carousel-slide
      caption="First slide"
      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      :img-src="pic1"
    >
    </b-carousel-slide>
    <b-carousel-slide
      caption="First slide"
      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      :img-src="pic2"
    >
    </b-carousel-slide>
    <b-carousel-slide>
      <img 
        slot="img"
        class="d-block img-fluid w-100"
        src="./img/main-3.jpeg"
        alt="image slot"
      >
    </b-carousel-slide>
    <b-carousel-slide>
      <img 
        slot="img"
        class="d-block img-fluid w-100"
        src="./img/blade.jpg"
        alt="image slot"
      >
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
import bCarousel from 'bootstrap-vue/es/components/carousel/carousel'
import bCarouselSlide from 'bootstrap-vue/es/components/carousel/carousel-slide'
import pic1 from './img/main-1.jpeg'
import pic2 from './img/main-2.jpeg'

export default {
  name: 'AppCarousel',
  components: {
    bCarousel,
    bCarouselSlide,
  },
  data() {
    return {
      pic1,
      pic2,
    }
  },
}
</script>

<style scoped>
.carousel-item {
  height: 100vh;
}

img {
  height: 100%;
  object-fit: cover;
}
</style>
