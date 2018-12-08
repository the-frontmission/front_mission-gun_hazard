<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark flex-column flex-md-row">
    <a class="navbar-brand" href="">GUN HAZARD</a>
    <div class="w-100">
      <ul class="navbar-nav flex-row justify-content-around justify-content-md-center">
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

<style scoped></style>
