<template>
  <div id="app">
    <AppNavbar/>
    <router-view/>
    <AppFooter/>
  </div>
</template>

<script>
import AppNavbar from '@/components/app/AppNavbar.vue'
import AppFooter from '@/components/app/AppFooter.vue'

export default {
  components: {
    AppNavbar,
    AppFooter,
  },
}
</script>
