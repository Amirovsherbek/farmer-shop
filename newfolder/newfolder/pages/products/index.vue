<template>
  <div class="w-full h-auto" v-loading.fullscreen.lock="loading">
    <div class="w-full flex items-center justify-center my-5 ">
        <div class="w-3/5 text-center text-[#333333] font-bold text-5xl my-5">Fresh Organic Supply Direct From Farmer to Home</div>
    </div>
    <div class="w-full flex justify-center my-10">
        <el-empty v-if="products?.length===0" description="No product" :image-size="200"></el-empty>
        <div v-else class="h-auto py-2 grid gap-x-8 gap-y-4 grid-cols-5 ">
            
          <ProductBox  v-for="item in products" :productItem="item" :key="item.id"/>
        </div>
    </div>
    {{ $store.state.basket }}{{ products?.length }}
    dasdasd
  </div>
</template>
<script>
import ProductBox from '../../components/ProductBox/ProductBox.vue';

export default {
    data () {
        return {
            products:[
            ],
            loading:false
        }
    },
    methods :{
        openFullScreen1() {
        // this.loading = true;
        // setTimeout(() => {
        //   this.loading = false;
        // }, 2000);
      },
       async get_product_list () {
        this.loading = true;
           await this.$axios.$get('/Product/GetAllPruducts')
           .then((res)=>{
            this.products=res
           })
           .catch((e)=>{
            console.log(e)
           })
           .finally (()=>{
            this.loading = false;
           })
       }
    },
    mounted () {
      this.get_product_list()
    },
    components: { ProductBox }
}
</script>
<style >
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    margin: 0;
  }
.el-carousel__indicators{
    display: none;
}
 
</style>