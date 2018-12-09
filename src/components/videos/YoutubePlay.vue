<template>
  <div class="youtube-play">
    <div class="container">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          class="embed-responsive-item"
          :src="`https://www.youtube.com/embed/${video.uid}`"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YoutubePlay',
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.youtube-play {
  background-color: #000000;
}
.container {
  padding-left: 0;
  padding-right: 0;
}
@media screen and (min-width: 768px) {
  .container {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
