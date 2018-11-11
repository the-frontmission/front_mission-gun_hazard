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
      <transition
        name="fade"
      >
      <div
        v-if="currentItem === 0"
        key="first"
        class="carousel-item-active"
      >
        <img class="d-block w-100" src="./img/main01-1.jpeg" alt="First slide">
      </div>
      <div
        v-if="currentItem === 1"
        key="second"
        class="carousel-item-active"
      >
        <img class="d-block w-100" src="./img/main01-2.jpeg" alt="Second slide">
      </div>
      <div
        v-if="currentItem === 2"
        key="third"
        class="carousel-item-active"
      >
        <img class="d-block w-100" src="./img/main01-3.jpeg" alt="Third slide">
      </div>
      </transition>
    </div>
    <a
      role="button"
      href="#carouselIndicators"
      data-slide="prev"
      class="carousel-control-prev"
      @click="prevCarousel"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      role="button"
      href="#carouselIndicators"
      data-slide="next"
      class="carousel-control-next"
      @click="nextCarousel"
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
      this.currentItem = (this.currentItem + 1 === this.itemListLength) ? 0 : this.currentItem + 1
    },
  },
}
</script>

<style scoped>
.carousel-inner {
  width: 100%;
  height: 700px;
}
.carousel-item-active {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
