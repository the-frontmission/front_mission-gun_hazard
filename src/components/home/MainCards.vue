<template>
  <section>
    <div class="container-fluid px-5px">
      <div class="d-flex flex-column flex-md-row mx-0">
        <template v-for="({ name, imgUrl }, idx) in cards">
          <div class="col mb-10px px-5px" :key="idx">
            <div class="card border-0 rounded-0 text-white text-center">
              <img class="card-img rounded-0" :src="imgUrl" alt="Card image">
              <div class="card-img-overlay bg-gradient-dark d-flex align-items-center">
                <div class="w-100">
                  <h2 class="display-4 font-weight-bold text-capitalize">{{ name }}</h2>
                  <router-link class="btn btn-outline-light" :to="`/${name}`">
                    View
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainCards',
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.bg-gradient-dark {
  background-image: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,0));
}
</style>
