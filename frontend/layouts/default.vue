<template>
  <div class="wrapper_layout">
    <Header/>
    <Nuxt />
    <Footer/>
  </div>
  </template>
  <script>
import Footer from '../components/Footer/Footer.vue';

export default {
    components: { Footer }
}
</script>
<style scoped>
.wrapper_layout{
    width: 100%;
    height: auto;
}
</style>