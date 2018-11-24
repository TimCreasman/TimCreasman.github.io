<template>
    <div class ='footer'>
      <div class='social-media'>
        <div class='twitter'>
          <a href='https://twitter.com/TimCreasman'>
            <font-awesome-icon :icon="[ 'fab','twitter']" />
          </a>
        </div>
        <div class='github'>
          <a href='https://github.com/TimCreasman'>
            <font-awesome-icon :icon="[ 'fab','github']" />
          </a>
        </div>
        <div class='instagram'>
          <a href='https://www.instagram.com/timcreasman/'>
            <font-awesome-icon :icon="[ 'fab','instagram']" />
          </a>
        </div>
      </div>
    </div>
</template>

<style lang="scss">
@import "../styles/palette";
.footer {
  height: 100%;
  background-color: $color2;
  align-self: end;
  .social-media {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    div {
      padding: 10px;
    }
    a {
      text-decoration: none;
      color: $color1;
      font-size: 1em;
    }
  }
}
</style>

<script>
  export default {
    name: 'Footer'
  }
</script>
