<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-12">
        <ul class="list-unstyled">
          <template v-for="(video, index) in list">
            <li class="media mb-2" :key="index">
              <img class="media-img mr-3" :src="video.imageUrl" alt="image">
              <div class="media-body text-truncate">
                <h5 class="text-truncate mt-0 mb-1">{{ video.title }}</h5>
                {{ video.user }} {{ video.views }} {{ video.published }}
                <button
                  class="btn btn-outline-primary btn-sm"
                  @click="$emit('selectVideo', { uid: video.uid })"
                >
                  View
                </button>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoCardList',
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.media-img {
  height: 5rem;
}
</style>

