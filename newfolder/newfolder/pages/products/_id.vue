<template>
  <div class="w-full bg-[#F4F4F4]" v-loading.fullscreen.lock="loading">
    <BasketBox :item="item" v-if="item" />
    <div class="w-full h-96 my-10 flex flex-wrap justify-center" v-else>
        <div class="w-full"><el-empty description="Didn't choose a product?"></el-empty></div>
        <div class="w-full h-80 flex flex-wrap justify-center"><NuxtLink to="/products" class="payme_button ">Select a product</NuxtLink></div>
      </div>
    <div class="w-full flex flex-wrap justify-center my-10">
        <div class="w-2/3 flex justify-center">
        <div class="avatar">
          <img
            src="data:image/png;base64,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"
          />
        </div>
        <input
          class="input_comment"
          placeholder="comment..."
          :disabled="!item"
          v-model="new_commnet.title"
        />
        <span class="submit_comment cursor-pointer" @click="SubmitComment"
          ><i class="el-icon-s-promotion text-4xl"></i
        ></span>
      </div>
      <div class="w-full flex justify-center" v-if="item" style="margin-top: 15px;" v-for="(CommentItem,index) in item?.comments" :key="index" >
        <div class="w-2/3 comment-box">
        <div class="w-full flex username-comment">
            <div class="w-5/6 px-6 py-1 font-bold">@{{ CommentItem.id }}</div><div class="w-1/6 flex justify-end">
                <el-dropdown-item><span class="" v-if="comment_id===CommentItem.id" @click="UpdateSaved"><i class="el-icon-check text-3xl cursor-pointer"></i></span></el-dropdown-item>
                <el-dropdown>
                    <span class="el-dropdown-link">
    <i class="el-icon-arrow-down el-icon-more"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item><i class="el-icon-edit text-3xl cursor-pointer" @click="UpdateComment(CommentItem)"></i></el-dropdown-item>
    <el-dropdown-item><i class="el-icon-delete text-3xl" @click="Delete(CommentItem)"></i></el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
                
                
            </div>
        </div>
        <div class="w-full flex px-6 py-4" v-if="comment_id===CommentItem.id"><input
          class="input_comment"
          placeholder="comment..."
          :disabled="!item"
          v-model="comment_title"
        /></div>
        <div class="w-full px-6 py-4" v-else>{{ CommentItem.title }}</div>
    </div>
      </div>      
    </div>
  </div>
</template>
<script>
import BasketBox from "../../components/BasketBox/BasketBox.vue";
export default {
  data() {
    return {
      loading: false,
      item: null,
      account: null,
      count:0,
      comment_id:'',
      comment_title:'',
      new_commnet: {
        productId: null,
        accountId: null,
        title: "",
        starts_count: 0,
      },
    };
  },
  methods: {
    UpdateComment(comment){
        this.comment_id=comment?.id
      this.comment_title=comment.title
    },
    async get_product() {
      let product_count = this.$store.state.basket.find(
        (item) => item.id === this.$route.params.id
      )?.count;
      this.loading = true;
      await this.$axios
        .$get(`/Product/GetPruduct?productId=${this.$route.params.id}`)
        .then((res) => {
            this.count=product_count||0
          this.item = { ...res, count: product_count||0 };
        })
        .catch((e) => {
          this.$notify({
            title: "Error",
            message: e.response.data,
            type: "error",
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async SubmitComment(){
        this.loading=true
        const comment={
        productId: this.$route.params.id,
        accountId: JSON.parse(localStorage.getItem('account')).id,
        title:this.new_commnet.title,
        starts_count: this.new_commnet.starts_count,
      }
      await this.$axios.$post('/Comment/CreateComment',comment,{
        headers:{
            "Content-Type": "application/json"
        }
      })
      .then((res)=>{
        this.get_product()
        this.new_commnet.title=''
        this.$notify({
            title: "Succcess",
            message: 'Comment saved',
            type: "success",
          });
      })
      .catch((e)=>{
        this.$notify({
            title: "Error",
            message: e.response.data,
            type: "error",
          });
      })
      .finally(()=>{
        this.loading=false
      })
    },
    async UpdateSaved(){
        this.loading=true
        const comment={
        id:this.comment_id,
        productId: this.$route.params.id,
        accountId: JSON.parse(localStorage.getItem('account')).id,
        title:this.comment_title,
        starts_count: this.new_commnet.starts_count,
      }
      await this.$axios.$put('/Comment/UpdateComment',comment,{
        headers:{
            "Content-Type": "application/json"
        }
      })
      .then((res)=>{
        this.comment_title=''
        this.get_product()
        this.$notify({
            title: "Succcess",
            message: 'Comment changed successfully',
            type: "success",
          });
      })
      .catch((e)=>{
        this.$notify({
            title: "Error",
            message: e.response.data,
            type: "error",
          });
      })
      .finally(()=>{
        this.loading=false
      })
    },
    async Delete(Comment_Object){
        this.loading=true
        await this.$axios.$delete(`/Comment/DeleteComment?commentId=${Comment_Object.id}&accountId=${JSON.parse(localStorage.getItem('account')).id}`)
        .then((res)=>{
            this.$notify({
            title: "Success",
            message: 'Comment deleted successfully',
            type: "success",
          });
        })
      .catch((e)=>{
        this.$notify({
            title: "Error",
            message: 'You can delete your comment yourself',
            type: "error",
          });
      })
      .finally(()=>{
        this.loading=false
      })
    }
  },
  created(){
   this.get_product()
  },
  components: { BasketBox },
};
</script>
<style scoped>
.comment_input {
  width: 400px;
  height: 50px;
  border-radius: 50px;
  padding: 10px 20px;
  color: #bbbbbb;
}
.avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
.avatar img {
  width: 100%;
  height: 100%;
}
.comment_username {
  font-size: 18px;
  font-weight: 700;
  color: #16202a;
}
.input_comment {
  width: 500px;
  height: 45px;
  margin: 0px 5px 0px 5px;
  border-radius: 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
}
.submit_comment {
  width: 45px;
  height: 45px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
}
.comment-box{
    border-radius: 25px;
    padding: 15px 20px;
    margin: 20px 0px;
    background-color: #fff;
}
.username-comment{
    border-bottom: 1px solid #3a3a3a;
}
</style>
