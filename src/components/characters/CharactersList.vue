<template>
  <div class="container">
      <template v-for="character in characters">
        <div class="row" :key="character.uid">
          <div class="col-lg-3">
            <dl class="row">
              <dt class="col-lg-3">성명</dt>
              <dd class="col-lg-9">{{ character.nameKO }}</dd>
              <dt class="col-lg-3">姓名</dt>
              <dd class="col-lg-9">{{ character.nameJP }}</dd>
              <dt class="col-lg-3">Name</dt>
              <dd class="col-lg-9">{{ character.nameEN }}</dd>
            </dl>
          </div>
          <div class="col-lg-3 col-xl-2">
            <dl class="row">
              <dt class="col-lg-4">생년</dt>
              <dd class="col-lg-8">{{ character.born }}</dd>
              <dt class="col-lg-4">연령</dt>
              <dd class="col-lg-8">{{ character.age }}</dd>
              <dt class="col-lg-4">상태</dt>
              <dd class="col-lg-8">{{ character.status }}</dd>
            </dl>
          </div>
          <div class="col-lg-3 col-xl-2">
            <dl class="row">
              <dt class="col-lg-4">신장</dt>
              <dd class="col-lg-8">{{ character.height }}</dd>
              <dt class="col-lg-4">체중</dt>
              <dd class="col-lg-8">{{ character.weight }}</dd>
              <dt class="col-lg-4">성별</dt>
              <dd class="col-lg-8">{{ character.gender }}</dd>
            </dl>
          </div>
          <div class="col-lg-3 col-xl-5">
            <p>{{ character.descriptionKO }}</p>
          </div>
        </div>
      </template>
  </div>
</template>

<script>
export default {
  name: 'CharactersList',
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
}
</script>
