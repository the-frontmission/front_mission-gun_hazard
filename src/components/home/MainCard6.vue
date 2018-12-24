<template>
  <section>
    <div class="container-fluid px-5px">
      <div class="row mx-0">
        <div class="col-md-6 mb-10px px-5px">
          <div class="card border-0 rounded-0 text-white text-center">
            <img class="card-img rounded-0" src="./img/material-wall2.jpeg" alt="Card image">
            <div class="card-img-overlay bg-gradient-dark d-flex align-items-center">
              <div class="w-100">
                <h2 class="display-4 font-weight-bold">Game</h2>
                <router-link class="btn btn-outline-light" to="/game">
                  View
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-10px px-5px">
          <div class="card border-0 rounded-0 text-white text-center">
            <img class="card-img rounded-0" src="./img/material-wall1.jpeg" alt="Card image">
            <div class="card-img-overlay bg-gradient-dark d-flex align-items-center">
              <div class="w-100">
                <h2 class="display-4 font-weight-bold">Characters</h2>
                <router-link class="btn btn-outline-light" to="/characters">
                  View
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainCard6',
}
</script>

<style scoped>
.bg-gradient-dark {
  background-image: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,0));
}
</style>
