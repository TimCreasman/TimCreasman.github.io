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
  height: 50px;
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
@media screen and (max-width: 600px) {
  .footer {
    height: 100px;
    .social-media {
      div {
        padding: 20px;
      }
      a {
        font-size: 2.5em;
      }
    }
  }
}
</style>

<script>
  export default {
    name: 'Footer'
  }
</script>
