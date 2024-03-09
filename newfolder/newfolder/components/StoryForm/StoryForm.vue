<template>
    <div class="w-full flex" v-loading.fullscreen.lock="loading">
     <div class="w-full">
        
     </div>
     <div class="w-full flex">
        <div class="w-1/2 createstory"></div>
      <div class="w-1/2 flex items-center justify-center bg-[#3F6050]">
        <div class="w-4/6">
        <el-form label-position="top" label-width="100px" :model="new_story">
          <el-form-item label="Story topic">
            <input
              type="text"
              class="input"
              v-model="new_story.Topic"
              placeholder="Transport Fresh Produce to Supply Key Customers Around Australia"
            />
          </el-form-item>
          <el-form-item label="Story title">
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              class="input"
              v-model="new_story.Title"
              placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            ></textarea>
          </el-form-item>
          <el-form-item label="Story for image upload">
            <div class="mt-5">
              <label
                for="storyPhoto"
                class="rounded-md px-4 py-2 bg-[#66b1ff] cursor-pointer"
                >Click to upload</label
              >
              <input
                type="file"
                @change="handleImageUpload"
                class="hidden"
                accept=".jpeg, .jpg, .png"
                id="storyPhoto"
              />
            </div>
          </el-form-item>
          <el-form-item class="w-full flex justify-center">
            <el-button class="submit" @click="Saved_New_Story">Submit</el-button>
          </el-form-item>
        </el-form>
      </div>
      </div>
     </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        loading:false,
        new_story: {
          Title: "",
          Topic: "",
          Like: 0,
          AccountId: "df393352-8853-4815-1773-08dc3d130d69",
          ImageFile: null,
        },
      };
    },
    methods:{
      handleImageUpload(event){
        this.new_story.ImageFile=event.target.files[0]
      },
      async Saved_New_Story (){
        this.loading=true
        const formdata=new FormData()
        formdata.append("Title",this.new_story.Title)
        formdata.append("Topic",this.new_story.Topic)
        formdata.append("Like",this.new_story.Like)
        formdata.append("ImageFile",this.new_story.ImageFile)
        formdata.append("AccountId",this.new_story.AccountId)
        await this.$axios.$post('/Story/CreateStory',formdata,{
          headers:{
            "Content-Type": "multipart/form-data",
          }
        })
        .then((res)=>{
             this.new_story.Title='',
             this.new_story.Topic='',
             this.new_story.ImageFile=null,
             this.new_story.Like=0,
             this.new_story.AccountId=''
             this.$message({
            message: 'Congrats, new story added',
            type: 'success'
          });
        })
        .catch((e)=>{
          alert(e.message)
        })
        .finally(()=>{
           this.loading=false
        })
      }
    }
  };
  </script>
  <style scoped>
.createstory{
    background-image: url('../../assets/images/createstory.png');
}
</style>
  