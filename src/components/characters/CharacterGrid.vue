<template>
  <div class="row my-5 pb-5 border-bottom">
    <h1 class="col-12">
      <del>
        {{ character.nameEN }}
      </del>
    </h1>
    <div class="col-lg-4">
      <img
        :src="`/img/characters/${character.imageUrl}`"
        class="figure-img img-fluid"
        alt="character image"
      >
    </div>
    <div class="col-lg-8">
      <div class="row">
        <div class="col-sm-12 col-md-4 col-lg-4">
          <dl class="row mb-0">
            <dd class="col-12 py-2 bg-dark text-white">Full Name</dd>
            <dd class="col-12 pb-2 border-bottom">{{ character.nameEN }}</dd>
            <dd class="col-12 pb-2 border-bottom">{{ character.nameJP }}</dd>
            <dd class="col-12 ">{{ character.nameKO }}</dd>
          </dl>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4">
          <dl class="row mb-0">
            <dd class="col-12 py-2 bg-dark text-white">Biographical</dd>
            <dd class="col-5 pb-2 border-bottom text-secondary">출생</dd>
            <dd class="col-7 pb-2 border-bottom">{{ character.born }} 년</dd>
            <dd class="col-5 pb-2 border-bottom text-secondary">연령</dd>
            <dd class="col-7 pb-2 border-bottom">{{ character.age }} 세</dd>
            <dd class="col-5 text-secondary">상태</dd>
            <dd class="col-7">{{ statusMap[character.status]['KO'] }}</dd>
          </dl>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4">
          <dl class="row mb-0">
            <dd class="col-12 py-2 bg-dark text-white">Personal</dd>
            <dd class="col-5 pb-2 border-bottom text-secondary">신장</dd>
            <dd class="col-7 pb-2 border-bottom">{{ character.height }} cm</dd>
            <dd class="col-5 pb-2 border-bottom text-secondary">체중</dd>
            <dd class="col-7 pb-2 border-bottom">{{ character.weight }} kg</dd>
            <dd class="col-5 text-secondary">성별</dd>
            <dd class="col-7">{{ genderMap[character.gender]['KO'] }}</dd>
          </dl>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <dl class="row mb-0">
            <dd class="col-12 py-2 bg-dark text-white">Comment</dd>
            <dd class="col-12">{{ character.descriptionJP }}</dd>
            <dd class="col-12">{{ character.descriptionKO }}</dd>
            <dd class="col-md-6">
              <dl class="row" v-if="character.wanzer">
                <dd class="col-5 col-sm-6 col-md-3">탑승기</dd>
                <dd class="col-7 col-sm-6 col-md-9">{{ character.wanzer }}</dd>
              </dl>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const statusMap = {
  'Alive': {
    'JP': '生存',
    'KO': '생존',
  },
  'Dead': {
    'JP': '死亡',
    'KO': '사망',
  },
}
const genderMap = {
  'Male': {
    'JP': '男性',
    'KO': '남성',
  },
  'Female': {
    'JP': '女性',
    'KO': '여성',
  },
}

export default {
  name: 'CharactersGid',
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      statusMap,
      genderMap,
    }
  },
}
</script>

<style scoped>
</style>

