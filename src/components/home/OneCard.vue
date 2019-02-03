<template>
  <div class="">
    <div class="card border-0 rounded-0 mb-10">
      <img class="card-img rounded-0" :src="imgUrl" alt="Card image">
      <div class="card-img-overlay d-flex justify-content-center align-items-center">
        <div class="text-white text-center">
          <h2 class="display-4 text-uppercase">{{ subTitle }}</h2>
          <h1 class="display-1 font-weight-bold border-top border-bottom">{{ mainTitle }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OneCard',
  props: {
    subTitle: {
      type: String,
      required: true,
    },
    mainTitle: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.mb-10 {
  margin-bottom: 10px;
}
.card-img {
  height: 80vh;
  object-fit: cover;
}

@media (max-width: 991.98px) {
  .display-4 {
    font-size: 1.5rem;
  }
  .display-1 {
    font-size: 3rem;
  }
}
</style>
