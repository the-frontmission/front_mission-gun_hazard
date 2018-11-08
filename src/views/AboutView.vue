<template>
  <div class="about">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <router-link
            tag="li"
            class="breadcrumb-item"
            active-class="active"
            to="/about/game"
          >
            <a>Game</a>
          </router-link>
          <router-link
            tag="li"
            class="breadcrumb-item"
            active-class="active"
            to="/about/characters"
          >
            <a>Characters</a>
          </router-link>
          <router-link
            tag="li"
            class="breadcrumb-item"
            active-class="active"
            to="/about/items"
          >
            <a>Items</a>
          </router-link>
        </ol>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
}
</script>
