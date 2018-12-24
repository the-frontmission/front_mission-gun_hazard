<template>
  <div class="container my-5">
    <div class="row">
      <template v-for="(group, index) in groupMap">
        <div class="col-xl-6" :key="index">
          <div class="row bg-dark text-white">
            <div class="col-6 py-3 text-left">
              {{ game[`${group.name}JP`] }}
            </div>
            <div class="col-6 py-3 text-right">
              {{ game[`${group.name}KO`] }}
            </div>
          </div>
          <template v-for="(prop, index) in group.props">
            <div class="row no-gutters border-bottom py-3" :key="index">
              <div
                class="text-secondary text-left text-md-left"
                :class="[`col-${group.cols[index]}`, 'col-md-6', 'order-md-1']"
              >
                {{ game[group.name][`${prop}LabelJP`] }}
              </div>
              <div
                class="text-body text-right text-md-left"
                :class="[`col-${12 - group.cols[index]}`, 'col-md-6', 'order-md-3']"
              >
                {{ game[group.name][`${prop}JP`] }}
              </div>
              <div
                class="text-secondary text-left text-md-right"
                :class="[`col-${group.cols[index]}`, 'col-md-6', 'order-md-2']"
              >
                {{ game[group.name][`${prop}LabelKO`] }}
              </div>
              <div
                class="text-body text-right text-md-right"
                :class="[`col-${12 - group.cols[index]}`, 'col-md-6', 'order-md-4']"
              >
                {{ game[group.name][`${prop}KO`] }}
              </div>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameCard',
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      groupMap: [
        {
          name: 'specification',
          props: ['title', 'genre', 'hardware', 'volume', 'release', 'price'],
          cols: [3, 3, 6, 2, 5, 6],
        },
        {
          name: 'staff',
          props: ['developer', 'publisher', 'designer', 'characterDesign', 'composer1', 'composer2'],
          cols: [6, 6, 6, 7, 6, 6],
        },
      ],
    }
  },
}
</script>

<style scoped>
.dd {
  font-weight: 400;
  color: #666666;
}
</style>
