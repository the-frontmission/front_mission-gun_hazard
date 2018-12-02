<template>
  <div id="carouselFade" class="carousel slide carousel-fade" data-ride="carousel">
    <div class="carousel-inner">
      <template v-for="(item, index) in list">
        <div
          :key="index"
          class="carousel-item"
          :class="{ 'active': index === currentIndex}"
        >
          <img class="d-block w-100" :src="item.img" alt="First slide">
          <div class="carousel-caption d-block">
            <div class="d-flex justify-content-center align-items-center h-100">
              <div>
                <p class="display-4 small-caps">{{ item.text }}</p>
                <p class="display-1 text-uppercase- small-caps font-weight-bold">{{ item.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <a class="carousel-control-prev" href="#" role="button" data-slide="prev"
      @click.prevent="prevCarousel"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#" role="button" data-slide="next"
      @click.prevent="nextCarousel"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import pic1 from './img/place-factory1.jpeg'
import pic2 from './img/place-mauntain1.jpeg'
import pic3 from './img/place-mauntain2.jpeg'
import pic4 from './img/place-newyork.jpeg'
import pic5 from './img/place-port.jpeg'
import pic6 from './img/place-factory2.jpeg'

export default {
  name: 'CarouselFade',
  data() {
    return {
      list: [
        {
          title: 'Gun Hazard',
          text: 'Front Mission',
          img: pic1,
        },
        {
          title: 'Front Mission',
          text: '- Story -',
          img: pic2,
        },
        {
          title: 'Front Mission',
          text: '- System -',
          img: pic3,
        },
        {
          title: 'Front Mission',
          text: '- Characters -',
          img: pic4,
        },
        {
          title: 'Front Mission',
          text: '- Sound -',
          img: pic5,
        },
        {
          title: 'Front Mission',
          text: '- Parts -',
          img: pic6,
        },
      ],
      currentIndex: 0,
    }
  },
  methods: {
    prevCarousel() {
      const length = this.list.length
      const index = this.currentIndex
      this.currentIndex = (index - 1 < 0) ? length - 1 : index - 1
    },
    nextCarousel() {
      const length = this.list.length
      const index = this.currentIndex
      this.currentIndex = (index + 1 === length) ? 0 : index + 1
    },
  },
}
</script>

<style scoped>
.carousel {
  margin-bottom: 10px;
}
.small-caps {
  font-variant: small-caps;
}
.carousel-item img {
  height: 90vh;
  object-fit: cover;
}
.carousel-caption {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
