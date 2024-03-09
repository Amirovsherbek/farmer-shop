<template>
  <div class="w-full h-auto">
    <div class="w-full flex items-center justify-center my-5 ">
        <div class="w-3/5 text-center text-[#333333] font-bold text-5xl">Fresh Organic Supply Direct From Farmer to Home</div>
    </div>
    <div class="w-full flex justify-center ">
        <div class="h-auto py-2 grid gap-x-8 gap-y-4 grid-cols-5 ">
          <ProductBox v-for="item in products" :productItem="item" :key="item.id"/>
        </div>
    </div>
  </div>
</template>
<script>
import ProductBox from '../../components/ProductBox/ProductBox.vue';
export default {
    data() {
    return {
        products:[],
      localCounter: 0
    };
  },
  mounted() {
    this.products = this.$store.state.products;
  },
    components: { ProductBox }
}
</script>
<style scoped>
</style>