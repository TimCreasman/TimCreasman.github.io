<template>
    <div class='home'>
        <div class='welcome'>
            <div class='name-tim'>Tim</div>
            <div class='name-creasman'>Creasman</div>
        </div>
        <div class='wip'>check back later for updates...</div>
  </div>
</template>

<style lang="scss">
@import "../styles/palette";

.home {
  height: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 2fr 1fr;

    .welcome {
    font-family: 'Code', sans-serif;
    color: $color1;
    text-align: center;
    place-self: center;
        .name-tim {
            font-size: 10em;
            letter-spacing: 0.2em;
            text-indent: 0.2em;
            font-weight: bold;
        }
        .name-creasman {
            font-size: 5em;
            font-weight: light;
        }
    }

    .wip {
    font-family: 'Droid Sans', sans-serif;
    color: $color1;
    font-size: 2em;
    justify-self: center;
    align-self: start;
    }
}

@keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}

</style>

<script>
  export default {
    name: 'Header'
  }
</script>
