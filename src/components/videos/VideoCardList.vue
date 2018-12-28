<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-12">
        <ul class="list-unstyled">
          <template v-for="(video, index) in list">
            <a
              :key="index"
              @click.prevent="$emit('selectVideo', { uid: video.uid })"
              href=""
              class="text-decoration-none text-reset"
            >
              <li class="media mb-2" >
                <img class="media-img mr-3" :src="video.imageUrl" alt="image">
                <div class="media-body text-truncate">
                  <h6 class="media-title text-truncate mt-0 mb-1">
                    {{ video.title }}
                  </h6>
                  <small>
                    {{ video.user }}
                  </small>
                </div>
              </li>
            </a>
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
.media-title {
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
}
</style>

