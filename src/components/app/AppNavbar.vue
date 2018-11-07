<template>
  <nav class="navbar navbar-expand navbar-dark flex-column flex-md-row bg-dark">
    <a class="navbar-brand" href="#">FRONT MISSION: Gun Hazard</a>
    <div class="table-responsive">
      <ul class="navbar-nav flex-row justify-content-around justify-content-md-center">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/scripts" class="nav-link">Scripts</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/videos" class="nav-link">Video</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
}
</script>

<style></style>
