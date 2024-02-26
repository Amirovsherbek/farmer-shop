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
    data () {
        return {
            products:[
                {
                    id:1,
                    title:"Bananas 500gm",
                    image:"https://avatars.mds.yandex.net/i?id=af25b02bd692e8ef453427c72bac0f48098893cd-11511205-images-thumbs&n=13",
                    price:"$2.00"
                },
                {
                    id:2,
                    title:"Chinese Cabbage 250gm",
                    image:"https://avatars.mds.yandex.net/i?id=6383d653886d2b3ab2df3209b2afd6ef5cffac6a-4143805-images-thumbs&n=13",
                    price:"$3.20"
                },
                {
                    id:3,
                    title:"Red Tomato 250gm",
                    image:"https://catherineasquithgallery.com/uploads/posts/2021-03/1614570823_12-p-pomidor-na-belom-fone-15.jpg",
                    price:"$1.00"
                },
                {
                    id:4,
                    title:"Red Onion 500gm",
                    image:"https://avatars.mds.yandex.net/i?id=8a2bd190a4d3ed5a142e4e53c63997db37fd2900-9820447-images-thumbs&n=13",
                    price:"$0.90"
                },
                {
                    id:5,
                    title:"White Mushrooms 250gm",
                    image:"https://avatars.mds.yandex.net/i?id=da21000e25de7ea3c263a610dbfbb9f0456aede9-12446123-images-thumbs&n=13",
                    price:"$5.90"
                },
                {
                    id:6,
                    title:"Sweet Potato 500gm",
                    image:"https://avatars.mds.yandex.net/i?id=b7a9cf7df8afab2fb15b7d6aa2095b42c52a7dfb-8179580-images-thumbs&n=13",
                    price:"$1.50"
                },
                {
                    id:7,
                    title:"Yellow Apricots 250gm",
                    image:"https://avatars.mds.yandex.net/i?id=23355d0b67fa675faf1304c3ad5d682d9076ee6f-12374505-images-thumbs&n=13",
                    price:"$3.25"
                },
                {
                    id:8,
                    title:"Kale Vegetable 250gm",
                    image:"https://avatars.mds.yandex.net/i?id=d35308d08eebe92821a3d7da45702a563be52b0a-9555580-images-thumbs&n=13",
                    price:"$2.30"
                },
                {
                    id:9,
                    title:"Fresh Lime 250gm",
                    image:"https://avatars.mds.yandex.net/i?id=f4f1ee7443fcf1b89e3a3551d535a3d6f0f10424-8497639-images-thumbs&n=13",
                    price:"$2.00"
                },
                {
                    id:10,
                    title:"Red Strawberries 250gm",
                    image:"https://avatars.mds.yandex.net/i?id=229eeb46b23a0c2c601ef103951c54ae560a5a4e-9700958-images-thumbs&n=13",
                    price:"$4.40"
                },
            ]
        }
    },
    components: { ProductBox }
}
</script>
<style scoped>
</style>