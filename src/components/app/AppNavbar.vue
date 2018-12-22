<template>
  <nav class="navbar navbar-expand navbar-dark flex-column flex-md-row gh-navbar bg-black">
    <router-link class="navbar-brand mr-0 mr-md-2" to="/">
      Gun Hazard
    </router-link>
    <div class="navbar-nav-scroll">
      <ul class="navbar-nav flex-row mx-auto gh-navbar-nav">
        <template v-for="(route, index) in routes">
          <router-link
            :key="index"
            class="nav-item"
            tag="li"
            :to="{ path: route.path }"
            active-class="active"
            exact
          >
            <a class="nav-link text-capitalize">
              {{ route.label }}
            </a>
          </router-link>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { routes } from '@/router'

export default {
  name: 'AppNavbar',
  data() {
    return {
      routes,
    }
  },
}
</script>

<style scoped>
@media (max-width: 991.98px) {
  .gh-navbar {
    padding-right: .5rem;
    padding-left: .5rem;
  }
  .gh-navbar .navbar-nav-scroll {
    max-width: 100%;
    height: 2.5rem;
    margin-top: .25rem;
    overflow: hidden;
    font-size: .875rem;
  }
  .gh-navbar .navbar-nav-scroll .navbar-nav {
    padding-bottom: 2rem;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
