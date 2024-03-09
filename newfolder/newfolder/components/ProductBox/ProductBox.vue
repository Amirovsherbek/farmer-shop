<template>
  <div class="card" >
    <div
      class="card_image bg-[#fff] flex flex-wrap items-center justify-center"
    >
      <div class="image_row">
        <el-carousel class="w-full">
          <el-carousel-item
            v-for="imageItem in productItem.images"
            :key="imageItem"
          >
          <el-image style="width: 310px;height: 310px;"
      :src="$store.state.baseURl +
                imageItem.filePath"
      fit="fill"></el-image>
            <!-- <img
              :src="
                'https://5691-195-158-16-45.ngrok-free.app/' +
                imageItem.filePath
              "
              alt="error"
            /> -->
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="card_footer">
        <div class="w-full text-center font-normal text-xl my-4">
      {{ productItem.code }} {{ productItem.count_massa }}
    </div>
    <div class="w-full text-center font-bold text-xl text-[#40A469]">
      {{ productItem.price }}
    </div>
    <div
        class="add_basket w-full bg-[#40A469]"
        @click="Add_Basket(productItem)"
      >
        <BasketIcon />
      </div>
    </div>
  </div>
</template>
<script>
import BasketIcon from "../../assets/icons/BasketIcon.vue";

export default {
  name: "ProductBox",
  data() {
    return {
      basket: [],
    };
  },
  props: {
    productItem: {
      type: {
        id: String,
        code: String,
        count_massa: String,
        images: {
          filePath: String,
        },
        price: String,
      },
      required: true,
    },
  },
  methods: {
    Add_Basket(product) {
      this.basket.push(product);
      console.log(this.basket);
      this.$store.dispatch("addToBasket", product);
    },
  },
  components: { BasketIcon },
};
</script>
<style scoped>
.card {
  width: 310px;
  height: 450px;
  cursor: pointer;
}
.add_basket {
  width:100%;
  height:45%;
  opacity: 0;
  position: absolute;
  top: 90%;
}
.card:hover .add_basket {
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.4s ease-in;
}
.card:hover{
    box-shadow: 0px 0px 10px 5px #ccc;
    transition: box-shadow 0.4s ease-in;
}
.card_image {
  width: 310px;
  height: 310px;
}

.image_row {
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: auto;
}
.image_row img {
 width: 100%;
 height: 100%;
}
.card_footer{
    width: 100%;
    height: 90px;
    position: relative;
}
</style>
