<template>
<div class="header">
   <div class="w-full flex items-start justify-center h-1/5">
    <div class="w-1/4 h-16 flex items-end pl-5 pt-2"><Logo/></div>
   <div class="w-3/4 mt-3 flex">
    <ul class="nav_row h-16">
      <li class="nav_link_item">Why Thomas</li>
      <li class="nav_link_item">Industries</li>
      <li class="nav_link_item">Products</li>
      <li class="nav_link_item">Global Facilities</li>
      <li class="nav_link_item">Company</li>
      <li class="nav_link_item">Global Facilities</li>
      <li class="nav_link_item"><Search/></li>
      <li class="nav_link_item"><CardIcon/></li>
    </ul>
   </div>
   </div>
   <div class="w-full h-4/5 flex flex-wrap items-center justify-center text-[#fff] text-2xl">
    <div>Your Global Partner.</div>
    <div>Creating a better World</div>
   </div>
</div>
</template>
<script>
import Logo from '../assets/icons/Logo.vue';
import Search from '../assets/icons/Search.vue';
import CardIcon from '../assets/icons/CardIcon.vue';
  export default {
    name: "header",
    components: { Logo,Search,CardIcon }
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
  padding: 0px 20px 0px 0px;
  gap: 50px;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.nav_link_item{
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  font-family: Arimo;
  color: #fff;
}

</style>