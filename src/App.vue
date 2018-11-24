<template>
  <div class='container'>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer.vue'
import Header from './components/Header/Header.vue'

export default {
    name: 'app',
    components: {
        'Footer': Footer,
        'Header': Header
    }
}
</script>
