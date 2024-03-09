<template>
    <div class="w-full">
      <div class="w-full" v-if="$store.state.basket.length>0 ? true:false"><BasketBox v-for="(item,index) in $store.state.basket" :item="item" :key="index"/></div>
      <div class="w-full h-96 my-10 flex flex-wrap justify-center" v-else>
        <div class="w-full"><el-empty description="Didn't choose a product?"></el-empty></div>
        <div class="w-full h-80 flex flex-wrap justify-center"><NuxtLink to="/products" class="payme_button ">Select a product</NuxtLink></div>
      </div>
   </div>
</template>
<script>
import BasketBox from '../../components/BasketBox/BasketBox.vue';
export default{
  data(){
    return {
      count:0
    }
  },
    components:{BasketBox}
}
</script>
<style scoped>
 
</style>