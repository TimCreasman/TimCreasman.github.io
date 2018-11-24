<template>
    <div class ='footer'>
      <div class='social-media'>
        <div class='twitter'>
          <font-awesome-icon :icon="[ 'fab','twitter']" />
        </div>
        <div class='github'>
          <font-awesome-icon :icon="[ 'fab','github']" />
        </div>
        <div class='instagram'>
          <font-awesome-icon :icon="[ 'fab','instagram']" />
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
  }
}
</style>

<script>
  export default {
    name: 'Footer'
  }
</script>
