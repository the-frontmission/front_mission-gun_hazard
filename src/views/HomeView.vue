<template>
  <div class="home">
    <HomeMain/>
    <MainCard6/>
    <MainCard4/>
  </div>
</template>

<script>
import HomeMain from '@/components/home/HomeMain.vue'
import MainCard6 from '@/components/home/MainCard6.vue'
import MainCard4 from '@/components/home/MainCard4.vue'

export default {
  name: 'HomeView',
  components: {
    HomeMain,
    MainCard6,
    MainCard4,
  },
}
</script>
