<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-xl-6">
        <div class="row bg-dark text-white">
          <dd class="col-6 py-2 text-left">
            {{ game.specificationJP }}
          </dd>
          <dd class="col-6 py-2 text-right">
            {{ game.specificationKO }}
          </dd>
        </div>
        <dl class="row no-gutters border-bottom">
          <dd class="col-3 col-md-6 order-md-1 text-left text-md-left">
            {{ game.specification.titleLabelJP }}
          </dd>
          <dd class="col-9 col-md-6 order-md-3 text-right text-md-left">
            {{ game.specification.titleJP }}
          </dd>
          <dd class="col-3 col-md-6 order-md-2 text-left text-md-right">
            {{ game.specification.titleLabelKO }}
          </dd>
          <dd class="col-9 col-md-6 order-md-4 text-right text-md-right">
            {{ game.specification.titleKO }}
          </dd>
        </dl>
        <dl class="row no-gutters border-bottom">
          <dd class="col-3 col-md-6 order-md-1 text-left text-md-left">
            {{ game.specification.genreLabelJP }}
          </dd>
          <dd class="col-9 col-md-6 order-md-3 text-right text-md-left">
            {{ game.specification.genreJP }}
          </dd>
          <dd class="col-3 col-md-6 order-md-2 text-left text-md-right">
            {{ game.specification.genreLabelKO }}
          </dd>
          <dd class="col-9 col-md-6 order-md-4 text-right text-md-right">
            {{ game.specification.genreKO }}
          </dd>
        </dl>
        <dl class="row no-gutters border-bottom">
          <dd class="col-6 col-md-6 order-md-1 text-left text-md-left">
            {{ game.specification.hardwareLabelJP }}
          </dd>
          <dd class="col-6 col-md-6 order-md-3 text-right text-md-left">
            {{ game.specification.hardwareJP }}
          </dd>
          <dd class="col-6 col-md-6 order-md-2 text-left text-md-right">
            {{ game.specification.hardwareLabelKO }}
          </dd>
          <dd class="col-6 col-md-6 order-md-4 text-right text-md-right">
            {{ game.specification.hardwareKO }}
          </dd>
        </dl>
        <dl class="row no-gutters border-bottom">
          <dd class="col-3 col-md-6 order-md-1 text-left text-md-left">
            {{ game.specification.volumeLabelJP }}
          </dd>
          <dd class="col-9 col-md-6 order-md-3 text-right text-md-left">
            {{ game.specification.volumeJP }}
          </dd>
          <dd class="col-3 col-md-6 order-md-2 text-left text-md-right">
            {{ game.specification.volumeLabelKO }}
          </dd>
          <dd class="col-9 col-md-6 order-md-4 text-right text-md-right">
            {{ game.specification.volumeKO }}
          </dd>
        </dl>
        <dl class="row no-gutters border-bottom">
          <dd class="col-5 col-md-6 order-md-1 text-left text-md-left">
            {{ game.specification.releaseLabelJP }}
          </dd>
          <dd class="col-7 col-md-6 order-md-3 text-right text-md-left">
            {{ game.specification.releaseJP }}
          </dd>
          <dd class="col-5 col-md-6 order-md-2 text-left text-md-right">
            {{ game.specification.releaseLabelKO }}
          </dd>
          <dd class="col-7 col-md-6 order-md-4 text-right text-md-right">
            {{ game.specification.releaseKO }}
          </dd>
        </dl>
        <dl class="row no-gutters border-bottom">
          <dd class="col-6 col-md-6 order-md-1 text-left text-md-left">
            {{ game.specification.priceLabelJP }}
          </dd>
          <dd class="col-6 col-md-6 order-md-3 text-right text-md-left">
            {{ game.specification.priceJP }}
          </dd>
          <dd class="col-6 col-md-6 order-md-2 text-left text-md-right">
            {{ game.specification.priceLabelKO }}
          </dd>
          <dd class="col-6 col-md-6 order-md-4 text-right text-md-right">
            {{ game.specification.priceKO }}
          </dd>
        </dl>
      </div>
      <div class="col-xl-6">
        <div class="row bg-dark text-white">
          <dd class="col-6 py-2 text-left">
            {{ game.staffJP }}
          </dd>
          <dd class="col-6 py-2 text-right">
            {{ game.staffKO }}
          </dd>
        </div>
        <dl class="row no-gutters border-bottom">
          <dd class="col-6 col-md-6 order-md-1 text-left text-md-left">
            {{ game.staff.developerLabelJP }}
          </dd>
          <dd class="col-6 col-md-6 order-md-3 text-right text-md-left">
            {{ game.staff.developerJP }}
          </dd>
          <dd class="col-6 col-md-6 order-md-2 text-left text-md-right">
            {{ game.staff.developerLabelKO }}
          </dd>
          <dd class="col-6 col-md-6 order-md-4 text-right text-md-right">
            {{ game.staff.developerKO }}
          </dd>
        </dl>
        <dl class="row no-gutters border-bottom">
          <dd class="col-6 col-md-6 order-md-1 text-left text-md-left">
            {{ game.staff.publisherLabelJP }}
          </dd>
          <dd class="col-6 col-md-6 order-md-3 text-right text-md-left">
            {{ game.staff.publisherJP }}
          </dd>
          <dd class="col-6 col-md-6 order-md-2 text-left text-md-right">
            {{ game.staff.publisherLabelKO }}
          </dd>
          <dd class="col-6 col-md-6 order-md-4 text-right text-md-right">
            {{ game.staff.publisherKO }}
          </dd>
        </dl>
        <dl class="row no-gutters border-bottom">
          <dd class="col-6 col-md-6 order-md-1 text-left text-md-left">
            {{ game.staff.designerLabelJP }}
          </dd>
          <dd
            class="col-6 col-md-6 order-md-3 text-right text-md-left"
            :title="game.staff.designerTitleJP"
          >
            {{ game.staff.designerJP }}
          </dd>
          <dd class="col-6 col-md-6 order-md-2 text-left text-md-right">
            {{ game.staff.designerLabelKO }}
          </dd>
          <dd
            class="col-6 col-md-6 order-md-4 text-right text-md-right"
            :title="game.staff.designerTitleKO"
          >
            {{ game.staff.designerKO }}
          </dd>
        </dl>
        <dl class="row no-gutters border-bottom">
          <dd class="col-7 col-md-6 order-md-1 text-left text-md-left">
            {{ game.staff.characterDesignLabelJP }}
          </dd>
          <dd class="col-5 col-md-6 order-md-3 text-right text-md-left">
            {{ game.staff.characterDesignJP }}
          </dd>
          <dd class="col-7 col-md-6 order-md-2 text-left text-md-right">
            {{ game.staff.characterDesignLabelKO }}
          </dd>
          <dd class="col-5 col-md-6 order-md-4 text-right text-md-right">
            {{ game.staff.characterDesignKO }}
          </dd>
        </dl>
        <dl class="row no-gutters border-bottom">
          <dd class="col-6 col-md-6 order-md-1 text-left text-md-left">
            {{ game.staff.composer1LabelJP }}
          </dd>
          <dd 
            class="col-6 col-md-6 order-md-3 text-right text-md-left"
            :title="game.staff.composer1TitleJP"
          >
            {{ game.staff.composer1JP }}
          </dd>
          <dd class="col-6 col-md-6 order-md-2 text-left text-md-right">
            {{ game.staff.composer1LabelKO }}
          </dd>
          <dd
            class="col-6 col-md-6 order-md-4 text-right text-md-right"
            :title="game.staff.composer1TitleKO"
          >
            {{ game.staff.composer1KO }}
          </dd>
        </dl>
        <dl class="row no-gutters border-bottom">
          <dd class="col-6 col-md-6 order-md-1 text-left text-md-left">
            {{ game.staff.composer2LabelJP }}
          </dd>
          <dd
            class="col-6 col-md-6 order-md-3 text-right text-md-left"
            :title="game.staff.composer2TitleJP"
          >
            {{ game.staff.composer2JP }}
          </dd>
          <dd class="col-6 col-md-6 order-md-2 text-left text-md-right">
            {{ game.staff.composer2LabelKO }}
          </dd>
          <dd
            class="col-6 col-md-6 order-md-4 text-right text-md-right"
            :title="game.staff.composer2TitleKO"
          >
            {{ game.staff.composer2KO }}
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
.dd {
  font-weight: 400;
  color: #666666;
}
</style>
