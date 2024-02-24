<template>
<div class="header flex ">
   <div class="w-1/4 flex aligin-items"><Logo/></div>
   <div class="w-3/4 flex flex ">
    <ul class="nav_row">
      <li class="nav_link_item">Why Thomas</li>
      <li class="nav_link_item">Industries</li>
      <li class="nav_link_item">Products</li>
      <li class="nav_link_item">Global Facilities</li>
      <li class="nav_link_item">Company</li>
      <li class="nav_link_item">Global Facilities</li>
    </ul>
   </div>
<div class="line"></div>
</div>
</template>
<script>
import Logo from '../assets/icons/Logo.vue';

  export default {
    name: "header",
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    components: { Logo }
}
</script>
<style scoped>
.header{
  width: 100%;
  height: 100vh;
  background-image: url('../assets/images/Image.png');
  background-size: 100%;
}
.nav_row{
  width: 100%;
  height: 66px;
  padding: 0px 20px 0px 0px;
  gap: 50px;
  list-style-type: none;
  display: flex;
  align-items: center;
}
.nav_link_item{
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  font-family: Arimo;
  color: #fff;
}

</style>