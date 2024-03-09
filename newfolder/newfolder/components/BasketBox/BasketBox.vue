<template>
  <div class="w-full basketbox flex bg-[#F4F4F4]">
    <div class="w-1/2 flex justify-center items-center">
      <div class="prodcut_images">
        <el-carousel class="w-full">
        <el-carousel-item
          v-for="imageItem in item.images"
          :key="imageItem" >
          <el-image class="w-full h-full"
      :src="$store.state.baseURl +
                imageItem.filePath"
      fit="fill"></el-image>
        </el-carousel-item>
      </el-carousel>
      </div>
    </div>
    <div class="w-1/3">
      <div class="w-full text-2xl font-bold basket_card_title text-[#333333]">{{item.name}} {{ item.count_massa }}</div>
      <div class="w-full flex mb-4">
        <div class="w-1/3 text-[#BBBBBB] ">SKU: <span class="font-semibold text-[#333333]">{{item.code}}</span></div>
        <div class="w-1/3 text-[#BBBBBB] ">
          Availability: <span class="font-semibold text-[#333333]">{{ item.availability_count }}</span>
        </div>
      </div>
      <div class="w- text-sm ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div class="w-full flex my-3">
        <div class=" line-through text-[#BBBBBB] text-3xl font-bold">${{ item.price }}</div>
        <div class="ml-2 text-[#40A469] text-3xl font-bold">${{item.price-item.discount_price }}</div>
      </div>
      <div class="w-1/2 flex h-8 border-b-2 my-5 border-[#BBBBBB]">
          <div class="w-1/2">Quantity:</div>
          <div class="w-1/2 flex justify-end">
            <button class="counter_button" :disabled="this.count===0 ? true:false" @click="remove_product">-</button>
           <span class="text-2xl font-bold mb-1 mx-2"> {{ count }}</span>
            <button class="counter_button" @click="add_product">+</button></div>
      </div>
      <div class="w-full">
        <div class="payme_button">
            <button @click="payment(item.id)">Payment</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            count:0
        }
    },
    props: {
    item: {
      type: {
        id: String,
        code: String,
        sales_count: Number,
        availability_count:Number,
        discount_price:Number,
        company:String,
        count_massa:String,
        images: {
          filePath: String,
        },
        price: String,
        name:String,
        Amount:Number,
        count:Number
      },
      required: true,
    },
  },
    methods:{
        add_product(){
            this.count++
        },
        remove_product(){
            if(this.count>0){
                this.count=this.count-1
            }
        },
        payment(id){
            if(this.$route.path.includes('basket')){
                this.$router.push(`/products/${id}`)
            }
        }
    },
    created(){
        this.count=this.item.count
    }
};
</script>
<style >
.basket_card_title{
  margin: 20px 0px 40px 0px;
}
.payme_button{
    width: 400px;
    height: 65px;
    margin: 30px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #fff;
    border-radius: 50px;
    background-color: #40A469;
}
.counter_button{
    width: 30px;
    height: 30px;
    cursor: pointer;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
    font-size: 26px;
    border-radius: 50%;
    background-color: #40A469;
}
.basketbox{
    padding: 120px 0px;
}
.prodcut_images{
  width: 450px;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
</style>
