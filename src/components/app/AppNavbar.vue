<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark flex-column flex-md-row">
    <a class="navbar-brand" href="">GUN HAZARD</a>
    <div class="w-100">
      <ul class="navbar-nav flex-row justify-content-around justify-content-md-center">
        <router-link
          tag="li"
          class="nav-item"
          active-class="active"
          to="/"
          exact
        >
          <a class="nav-link">Home</a>
        </router-link>
        <router-link
          tag="li"
          class="nav-item"
          active-class="active"
          to="/game"
        >
          <a class="nav-link">Game</a>
        </router-link>
        <router-link
          tag="li"
          class="nav-item"
          active-class="active"
          to="/characters"
        >
          <a class="nav-link">Characters</a>
        </router-link>
        <router-link
          tag="li"
          class="nav-item"
          active-class="active"
          to="/parts"
        >
          <a class="nav-link">Parts</a>
        </router-link>
        <router-link
          tag="li"
          class="nav-item"
          active-class="active"
          to="/scripts"
        >
          <a class="nav-link">Scripts</a>
        </router-link>
        <router-link
          tag="li"
          class="nav-item"
          active-class="active"
          to="/videos"
        >
          <a class="nav-link">Videos</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
}
</script>

<style scoped>
.df {
  background-color: transparent;
}
</style>
