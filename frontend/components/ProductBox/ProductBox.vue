<template>
    <div class="card">
      <div class="card_image bg-[#fff] flex flex-wrap items-center justify-center">
        <img :src="productItem.image" alt="error">
        <div class="add_basket w-full bg-[#40A469]">
           <BasketIcon/>
        </div>
      </div>
      <div class="w-full text-center font-normal text-xl my-4">
        {{ productItem.title }}
      </div>
      <div class="w-full text-center font-bold text-xl text-[#40A469]">{{ productItem.price }}</div>
    </div>
</template>
<script>
import BasketIcon from '../../assets/icons/BasketIcon.vue';

export default {
    name: 'ProductBox',
    props: {
        productItem: {
            type: {
                id: Number,
                title: String,
                image: String,
                price: String
            },
            required: true
        }
    },
    components: { BasketIcon }
}
</script>
<style scoped>
.card{
    width:310px;
    height: 400px;
    cursor: pointer;
}
.add_basket{
    height: 15%; 
    opacity:0;
    position: absolute;
    top:85%;
}
.card:hover .add_basket{
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.4s ease-in;  
}
.card_image{
    width: 310px;
    height: 310px;
    position: relative;
}
.card_image img{
    width: 100%;
    height: 100%;
    transform: scale(0.8);
}

</style>