<template>
  <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li
        data-target="#carouselIndicators"
        data-slide-to="0"
        :class="{ active: currentItem === 0 }"
      >
      </li>
      <li
        data-target="#carouselIndicators"
        data-slide-to="1"
        :class="{ active: currentItem === 1 }"
      >
      </li>
      <li
        data-target="#carouselIndicators"
        data-slide-to="2"
        :class="{ active: currentItem === 2 }"
      >
      </li>
    </ol>
    <div class="carousel-inner">
      <transition-group
        leave-to-class="carousel-item-left"
        enter-class="carousel-item-left"
      >
      <div
        v-show="currentItem === 0"
        key="first"
        class="carousel-item active"
      >
        <img class="d-block w-100" src="./img/main-1.jpeg" alt="First slide">
      </div>
      <div
        v-show="currentItem === 1"
        key="second"
        class="carousel-item active"
      >
        <img class="d-block w-100" src="./img/main-2.jpeg" alt="Second slide">
      </div>
      <div
        v-show="currentItem === 2"
        key="third"
        class="carousel-item active"
      >
        <img class="d-block w-100" src="./img/main-3.jpeg" alt="Third slide">
      </div>
      </transition-group>
    </div>
    <a
      role="button"
      href="#carouselIndicators"
      data-slide="prev"
      class="carousel-control-prev"
      @click.prevent="prevCarousel"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      role="button"
      href="#carouselIndicators"
      data-slide="next"
      class="carousel-control-next"
      @click.prevent="nextCarousel"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'HomeCarousel',
  data() {
    return {
      currentItem: 0,
      itemList: [0, 1, 2],
      itemListLength: 3,
    }
  },
  methods: {
    prevCarousel() {
      // 'carousel-item-left'
      // 'carousel-item-next carousel-item-left'
      this.currentItem = (this.currentItem - 1 < 0) ? this.itemListLength - 1 : this.currentItem - 1
    },
    nextCarousel() {
      console.log('gone', this.currentItem)
      console.log('new', this.currentItem + 1)
      this.currentItem = (this.currentItem + 1 === this.itemListLength) ? 0 : this.currentItem + 1
    },
  },
}
</script>

<style scoped>
.carousel-inner {
  width: 100%;
  height: 100vh;
}

.carousel-item {
  position: absolute;
  top: 0;
}

.slide-enter {
  transform: translateX(-100%);
}

.leave-to {
  transform: translateX(-100%);
}
</style>
