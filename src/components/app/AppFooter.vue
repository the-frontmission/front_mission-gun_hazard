<template>
  <footer class="bg-light text-dark">
    <div class="container-fluid p-3 p-md-5">
      <ul class="nav">
        <template v-for="(route, index) in routes">
          <router-link
            v-if="route.name"
            :key="index"
            class="nav-item"
            tag="li"
            :to="{ path: route.path }"
          >
            <a class="nav-link text-capitalize text-reset">{{ route.name }}</a>
          </router-link>
        </template>
      </ul>
      <p>
        Designed and built by
        <a
          href="https://github.com/GimYoungPhil/"
          target="_blank"
          class="text-decoration-none text-reset"
        >
          @phil.
        </a><br/>
        Special thanks to
        <a
          href="http://culpenetty.egloos.com/"
          target="_blank"
          class="text-decoration-none text-reset"
        >
          @culpenetty.
        </a><br/>
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
