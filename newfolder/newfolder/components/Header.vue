<template>
<div class="header" >
  <img class="header_img" :src="image_list['products']" alt="">
  <div class="header_wrapper">
    <div class="w-full flex items-start justify-center h-1/5">
    <div class="w-1/4 h-auto flex items-end pl-5 pt-4"><Logo/></div>
   <div class="w-3/4 mt-3 flex">
    <ul class="nav_row h-16">
      <li class="nav_link_item"><NuxtLink to="/">Main</NuxtLink></li>
      <li class="nav_link_item"><NuxtLink to="/products">Products</NuxtLink></li>
      <li class="nav_link_item"><NuxtLink to="/story">Story</NuxtLink></li>
      <li class="nav_link_item"><NuxtLink to="/login">Log in</NuxtLink></li>
      <li class="nav_link_item"></li>
      <li class="nav_link_item"><NuxtLink to="/admin/createproducts">Create Product</NuxtLink></li>
      <li class="nav_link_item"><Search/></li>
      <li class="nav_link_item"><CardIcon/></li>
      
      <li class="nav_link_item_account rounded-full">
        <el-dropdown>
      <span class="el-dropdown-link">
        <img v-if="account_info?.account_image" :src="$store.state.baseURl+account_info?.account_image" alt="">
        <i v-else class="el-icon-user text-3xl mx-2.5"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-s-tools"><NuxtLink to="/admin/storysettings">Story settings</NuxtLink></el-dropdown-item>
        <el-dropdown-item icon="el-icon-s-goods">Product settings</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
       
      </li>
    </ul>
   </div>
   
   </div>
   <div class="w-full h-4/5 flex flex-wrap items-center justify-center text-[#fff] text-2xl" >
    <div>Your Global Partner.</div>
    <div>Creating a better World</div>
   </div>
  </div>
</div>
</template>
<script>
import Logo from '../assets/icons/Logo.vue';
import Search from '../assets/icons/Search.vue';
import CardIcon from '../assets/icons/CardIcon.vue';
  export default {
    name: "header",
    data(){
     return {
      image_list:{
       main:'https://img.freepik.com/free-photo/tractor-in-a-vineyard_657883-459.jpg?w=1380&t=st=1709832068~exp=1709832668~hmac=fe50f186e9db1ee11e2daeea28e9ec739747768914035536534397dc60452a31',
       products:'https://shtab-group.ru/upload/iblock/f54/%D1%84%D0%B5%D1%80%D0%BC%D0%B5%D1%80.jpg',
       basket:'https://stupinoadm.ru/export/sites/stupinoadm/novosti/.galleries/novosti/stupinskoe-krestyansko-fermerskoe-khozyajstvo-poluchilo-zemlyu.jpg_1091353074.jpg'
      },
      image:'',
      account_info:null 
    }
    },
    mounted(){
      this.account_info=JSON.parse(localStorage.getItem('account'))
    },
   computed: {
  getImagePath() {
    return this.$route.path;
  }
},
watch: {
  getImagePath(newPath) {
    console.log(newPath)
    this.image = newPath;
  }
},
    components: { Logo,Search,CardIcon }
}
</script>
<style scoped>
.header{
  width: 100%;
  height: 100vh;
  position: relative;
  background-size: 100%;
}
.header_wrapper{
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0%;
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
  cursor: pointer;
}
.nav_link_item_account{
  widows: 70px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #555555;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
}
.nav_link_item_account img{
  width: 70px;
  height: 50px;
}
.header_img{
  width: 100%;
  height: 100vh;
}
</style>