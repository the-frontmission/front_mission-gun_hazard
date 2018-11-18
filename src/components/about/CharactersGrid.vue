<template>
  <div class="row border-bottom my-5">
    <h1 class="col-12">{{ character.nameEN }}</h1>
    <div class="col-lg-4">
      <img
        class="img-fluid"
        :src="`/img/characters/${character.imageUrl}`"
        alt="character image"
      >
    </div>
    <div class="col-lg-8">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6">
          <dl class="row">
            <dd class="col-12 bg-dark text-white">Full Name</dd>
            <dd class="col-5 col-sm-6 col-md-3 text-secondary">English</dd>
            <dd class="col-7 col-sm-6 col-md-9">{{ character.nameEN }}</dd>
            <dd class="col-5 col-sm-6 col-md-3 text-secondary">日本語</dd>
            <dd class="col-7 col-sm-6 col-md-9">{{ character.nameJP }}</dd>
            <dd class="col-5 col-sm-6 col-md-3 text-secondary">한글</dd>
            <dd class="col-7 col-sm-6 col-md-9">{{ character.nameKO }}</dd>
          </dl>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 mb-2">
          <dl class="row">
            <dd class="col-12 bg-dark text-white">Biographical</dd>
            <dd class="col-5 text-secondary">출생</dd>
            <dd class="col-7">{{ character.born }} 년</dd>
            <dd class="col-5 text-secondary">연령</dd>
            <dd class="col-7">{{ character.age }} 세</dd>
            <dd class="col-5 text-secondary">상태</dd>
            <dd class="col-7">{{ statusMap[character.status]['KO'] }}</dd>
          </dl>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3">
          <dl class="row">
            <dd class="col-12 bg-dark text-white">Personal</dd>
            <dd class="col-5 text-secondary">신장</dd>
            <dd class="col-7">{{ character.height }} cm</dd>
            <dd class="col-5 text-secondary">체중</dd>
            <dd class="col-7">{{ character.weight }} kg</dd>
            <dd class="col-5 text-secondary">성별</dd>
            <dd class="col-7">{{ genderMap[character.gender]['KO'] }}</dd>
          </dl>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <dl class="row">
            <dd class="col-12 bg-dark text-white">Comment</dd>
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
  name: 'CharactersList',
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
