<template>
  <section>
    <div class="container-fluid px-5px">
      <div class="row mx-0">
        <div class="col-md-4 mb-10px px-5px">
          <div class="card border-0 rounded-0">
            <img class="card-img rounded-0" src="./img/card-3.jpeg" alt="Card image">
            <div class="card-img-overlay bg-gradient-dark d-flex align-items-center">
              <div class="w-100 text-white text-center">
                <h2 class="display-3 font-weight-bold">Parts</h2>
                <router-link class="btn btn-outline-light" to="/parts">
                  View
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-10px px-5px">
          <div class="card border-0 rounded-0">
            <img class="card-img rounded-0" src="./img/card-4.jpeg" alt="Card image">
            <div class="card-img-overlay bg-gradient-dark d-flex align-items-center">
              <div class="w-100 text-white text-center">
                <h2 class="display-3 font-weight-bold">Scripts</h2>
                <router-link class="btn btn-outline-light" to="/scripts">
                  View
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-10px px-5px">
          <div class="card border-0 rounded-0">
            <img class="card-img rounded-0" src="./img/card-2.jpeg" alt="Card image">
            <div class="card-img-overlay bg-gradient-dark d-flex align-items-center">
              <div class="w-100 text-white text-center">
                <h2 class="display-3 font-weight-bold">Videos</h2>
                <router-link class="btn btn-outline-light" to="/videos">
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
  name: 'MainCard4',
}
</script>

<style scoped>
.bg-gradient-dark {
  background-image: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,0));
}
</style>

