<template>
  <footer class="bg-dark">
    <div class="container-fluid p-3 p-md-5">
      <div class="row">
          <ul class="nav">
            <template v-for="(route, index) in routes">
              <router-link
                :key="index"
                class="nav-item"
                tag="li"
                :to="{ name: route.name }"
                active-class="active"
                exact
              >
                <a class="nav-link text-capitalize">
                  {{ route.name }}
                </a>
              </router-link>
            </template>
          </ul>
      </div>
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

<style scoped></style>
