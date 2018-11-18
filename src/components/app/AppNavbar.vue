<template>
  <nav class="navbar navbar-expand navbar-dark flex-column flex-md-row bg-dark">
    <a class="navbar-brand" href="#">FM: Gun Hazard</a>
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
          to="/about"
        >
          <a class="nav-link">About</a>
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

</style>
