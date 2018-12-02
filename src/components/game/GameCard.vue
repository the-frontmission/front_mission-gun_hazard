<template>
  <div class="container my-5">
    <div class="row bg-dark text-white">
      <dt class="col-6 py-2 text-left">
        {{ game.specificationJP }}
      </dt>
      <dt class="col-6 py-2 text-right">
        {{ game.specificationKO }}
      </dt>
    </div>
    <div class="row">
      <div class="col-xl-6">
        <dl class="row no-gutters border-bottom">
          <dt class="col-3 col-md-6 order-md-1 text-left text-md-left">
            {{ game.specification.titleLabelJP }}
          </dt>
          <dd class="col-9 col-md-6 order-md-3 text-right text-md-left">
            {{ game.specification.titleJP }}
          </dd>
          <dt class="col-3 col-md-6 order-md-2 text-left text-md-right">
            {{ game.specification.titleLabelKO }}
          </dt>
          <dd class="col-9 col-md-6 order-md-4 text-right text-md-right">
            {{ game.specification.titleKO }}
          </dd>
        </dl>
        <dl class="row no-gutters border-bottom">
          <dt class="col-3 col-md-6 order-md-1 text-left text-md-left">
            {{ game.specification.genreLabelJP }}
          </dt>
          <dd class="col-9 col-md-6 order-md-3 text-right text-md-left">
            {{ game.specification.genreJP }}
          </dd>
          <dt class="col-3 col-md-6 order-md-2 text-left text-md-right">
            {{ game.specification.genreLabelKO }}
          </dt>
          <dd class="col-9 col-md-6 order-md-4 text-right text-md-right">
            {{ game.specification.genreKO }}
          </dd>
        </dl>
        <dl class="row no-gutters border-bottom">
          <dt class="col-6 col-md-6 order-md-1 text-left text-md-left">
            {{ game.specification.hardwareLabelJP }}
          </dt>
          <dd class="col-6 col-md-6 order-md-3 text-right text-md-left">
            {{ game.specification.hardwareJP }}
          </dd>
          <dt class="col-6 col-md-6 order-md-2 text-left text-md-right">
            {{ game.specification.hardwareLabelKO }}
          </dt>
          <dd class="col-6 col-md-6 order-md-4 text-right text-md-right">
            {{ game.specification.hardwareKO }}
          </dd>
        </dl>
      </div>
      <div class="col-xl-6">
        <dl class="row no-gutters border-bottom">
          <dt class="col-3 col-md-6 order-md-1 text-left text-md-left">
            {{ game.specification.volumeLabelJP }}
          </dt>
          <dd class="col-9 col-md-6 order-md-3 text-right text-md-left">
            {{ game.specification.volumeJP }}
          </dd>
          <dt class="col-3 col-md-6 order-md-2 text-left text-md-right">
            {{ game.specification.volumeLabelKO }}
          </dt>
          <dd class="col-9 col-md-6 order-md-4 text-right text-md-right">
            {{ game.specification.volumeKO }}
          </dd>
        </dl>
        <dl class="row no-gutters border-bottom">
          <dt class="col-5 col-md-6 order-md-1 text-left text-md-left">
            {{ game.specification.publishedLabelJP }}
          </dt>
          <dd class="col-7 col-md-6 order-md-3 text-right text-md-left">
            {{ game.specification.publishedJP }}
          </dd>
          <dt class="col-5 col-md-6 order-md-2 text-left text-md-right">
            {{ game.specification.publishedLabelKO }}
          </dt>
          <dd class="col-7 col-md-6 order-md-4 text-right text-md-right">
            {{ game.specification.publishedKO }}
          </dd>
        </dl>
        <dl class="row no-gutters border-bottom">
          <dt class="col-6 col-md-6 order-md-1 text-left text-md-left">
            {{ game.specification.priceLabelJP }}
          </dt>
          <dd class="col-6 col-md-6 order-md-3 text-right text-md-left">
            {{ game.specification.priceJP }}
          </dd>
          <dt class="col-6 col-md-6 order-md-2 text-left text-md-right">
            {{ game.specification.priceLabelKO }}
          </dt>
          <dd class="col-6 col-md-6 order-md-4 text-right text-md-right">
            {{ game.specification.priceKO }}
          </dd>
        </dl>
      </div>
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
}
</script>

<style scoped>
/* @media screen and (min-width: 768px) {
  .text-md-right {
    text-align: right !important;
  }
} */

</style>
