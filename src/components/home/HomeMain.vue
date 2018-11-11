<template>
  <section class="home-main mb-10px">
    <HomeCarousel/>
    <!-- <img class="card-img rounded-0 h-100" src="./img/main01-3.jpeg" alt="Card image"> -->
    <!-- <div class="container-fluid px-0">
      <div class="card border-0 rounded-0 text-white text-center">
        <img class="card-img rounded-0" src="./img/main01-3.jpeg" alt="Card image">
        <div class="card-img-overlay d-flex align-items-center">
          <div class="w-100">
            <h2 class="display-3 font-weight-bold">Gun Hazard</h2>
            <p class="card-text">Front Mission Sirese</p>
          </div>
        </div>
      </div>
    </div> -->
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
.home-main {
  height: 100vh;
}

.card-img {
  object-fit: cover;
}
</style>
