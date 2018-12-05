<template>
    <div class='header'>
      <router-link to='/about' class='nav-button about-button'>About</router-link>
      <router-link to='/projects' class='nav-button projects-button'>Projects</router-link>
      <router-link to='/faith' class='nav-button faith-button'>Faith</router-link>
      <router-link to='/shoutouts' class='nav-button shoutouts-button'>Shoutouts</router-link>
      <router-link to='/contact' class='nav-button contact-button'>Contact</router-link>
    </div>
</template>

<style lang="scss">
@import "../styles/palette";
.header {
  height: 100px;
  background-color: $color1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  .nav-button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    text-decoration: none;
    color: $color3;
    font-size: 1.5em;
  }

  .nav-button:hover {
    font-size: 1.7em;
  }
  @media screen and (max-width: 600px) {
    .nav-button {
      visibility: hidden;
    }
    .nav-button::after {
      visibility: visible;
      position: absolute;
      font-family: "Font Awesome 5 Free"; /* This is the correct font-family*/
      font-style: normal;
      font-weight: 900;
      text-decoration: inherit;
    }
    .about-button::after {
      font-family: 'Code', sans-serif;
      font-weight: bold;
      content: 'Me';
    }
    .faith-button::after {
      content: '\f647'
    }
    .projects-button::after {
      content: '\f085';
    }
    .shoutouts-button::after{
      content: '\f0a1';
    }
    .contact-button::after {
      content: '\f0e0';
    }
  }
}
</style>

<script>
  export default {
    name: 'Header'
  }
</script>
