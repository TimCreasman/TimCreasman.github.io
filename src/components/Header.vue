<template>
    <div class='header'>
      <router-link to='/about' class='nav-button'>About</router-link>
      <router-link to='/projects' class='nav-button'>Projects</router-link>
      <router-link to='/faith' class='nav-button'>Faith</router-link>
      <router-link to='/shoutouts' class='nav-button'>Shoutouts</router-link>
      <router-link to='/contact' class='nav-button'>Contact</router-link>
    </div>
</template>

<style lang="scss">
@import "../styles/palette";
.header {
  background-color: $color1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  .nav-button {
    text-decoration: none;
    color: $color3;
    font-size: 1.5em;
  }
  .nav-button:hover {
    font-size: 1.7em;
  }
}
</style>

<script>
  export default {
    name: 'Header'
  }
</script>
