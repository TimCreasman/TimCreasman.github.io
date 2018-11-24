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

<script>
  import './footer.scss';
  export default {
    name: 'Footer'
  }
</script>
