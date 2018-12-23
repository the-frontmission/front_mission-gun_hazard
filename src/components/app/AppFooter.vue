<template>
  <footer class="bg-dark text-white">
    <div class="container-fluid p-3 p-md-5">
        <ul class="nav">
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
        <p>
          Designed and built by <a href="https://github.com/GimYoungPhil" target="_blank">@phil</a>.
        </p>
    </div>
  </footer>
</template>

<script>
import { routes } from '@/router'

export default {
  name: 'AppFooter',
  data() {
    return {
      routes,
    }
  },
}
</script>

<style scoped>
.nav-item:first-child .nav-link {
  padding-left: 0;
}
</style>
