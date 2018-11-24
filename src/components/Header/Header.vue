<template>
    <div class='header'>
      <router-link to='/about' class='nav-button'>About</router-link>
      <router-link to='/projects' class='nav-button'>Projects</router-link>
      <router-link to='/faith' class='nav-button'>Faith</router-link>
      <router-link to='/shoutouts' class='nav-button'>Shoutouts</router-link>
      <router-link to='/contact' class='nav-button'>Contact</router-link>
    </div>
</template>

<script>
  import './header.scss';
  export default {
    name: 'Header'
  }
</script>
