<template>
  <div class="">
    <YoutubePlay
      class="sticky-top"
      v-if="currentVideo"
      :video="currentVideo"
    />
    <VideoCardList
      :list="videos"
      @selectVideo="select"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import YoutubePlay from '@/components/videos/YoutubePlay.vue'
import VideoCardList from '@/components/videos/VideoCardList.vue'
import { SELECT_INDEX__VIDEOS } from '@/store/mutation-types'

export default {
  name: 'VideosView',
  components: {
    YoutubePlay,
    VideoCardList,
  },
  computed: {
    ...mapState('videos', {
      videos: 'list',
    }),
    ...mapGetters('videos', [
      'currentVideo',
    ]),
  },
  methods: {
    ...mapMutations('videos', {
      select: SELECT_INDEX__VIDEOS,
    }),
    ...mapActions('videos', {
      fetch: 'getVideos',
    }),
  },
  mounted() {
    this.fetch()
  },
}
</script>

<style scoped></style>
