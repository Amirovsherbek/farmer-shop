<template>
  <div class="w-full" v-loading.fullscreen.lock="loading">
    <div class="w-full storybox flex "  >
      <div class="w-1/2 flex justify-center">
        <img class="w-2/3" src="../../assets/images/createstory.png" alt="" />
      </div>
      <div class="w-1/2 h-auto flex items-center">
        <div class="story-card">
          <div class="story-card-title">
            Strong Dedication to Quality and Commitment
          </div>
          <div class="story-card-text-box w-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
      </div>
    </div>
    <div class="w-full storybox flex "  v-for="(item,index) in story_list" :key="item.id" >
        <div class="w-full flex" v-if="(index+1)%2===0">
        <div class="w-1/2 flex justify-center">
        <img class="w-2/3" :src="$store.state.baseURl+item.story_Image" alt="" />
      </div>
      <div class="w-1/2 h-auto flex flex-wrap items-center justify-center">
        <div class="story-card">
          <div class="story-card-title">
            {{ item.topic }}
          </div>
          <div class="story-card-text-box w-2/3">
          {{ item.title }}
          </div>
        </div>
        <div class="story-card-link">
            <div class="flex">
                <svg class="cursor-pointer" @click="like" fill="#000000" height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xml:space="preserve">
<g>
	<path d="M498.323,297.032c0-7.992-1.901-15.683-5.553-22.635c12.034-9.18,19.23-23.438,19.23-38.914
		c0-27.037-21.996-49.032-49.032-49.032H330.206c11.434-29.24,17.665-64.728,17.665-101.419c0-23.266-18.928-42.194-42.194-42.194
		s-42.193,18.928-42.193,42.194c0,83.161-58.012,145.389-144.355,154.844c-0.592,0.065-1.159,0.197-1.7,0.38
		C111.752,235.129,104.235,232,96,232H32c-17.645,0-32,14.355-32,32v152c0,17.645,14.355,32,32,32h64
		c9.763,0,18.513-4.4,24.388-11.315c20.473,2.987,33.744,9.534,46.568,15.882c16.484,8.158,33.53,16.595,63.496,16.595h191.484
		c27.037,0,49.032-21.996,49.032-49.032c0-7.991-1.901-15.683-5.553-22.635c12.034-9.18,19.23-23.438,19.23-38.914
		c0-7.991-1.901-15.683-5.553-22.635C491.126,326.766,498.323,312.507,498.323,297.032z M465.561,325.727H452c-4.418,0-8,3.582-8,8
		s3.582,8,8,8h11.958c3.061,5.1,4.687,10.847,4.687,16.854c0,12.106-6.56,23.096-17.163,28.919h-14.548c-4.418,0-8,3.582-8,8
		s3.582,8,8,8h13.481c2.973,5.044,4.553,10.71,4.553,16.629c0,18.214-14.818,33.032-33.032,33.032H230.452
		c-26.223,0-40.207-6.921-56.398-14.935c-12.358-6.117-26.235-12.961-46.56-16.594c0.326-1.83,0.506-3.71,0.506-5.632V295
		c0-4.418-3.582-8-8-8s-8,3.582-8,8v121c0,8.822-7.178,16-16,16H32c-8.822,0-16-7.178-16-16V264c0-8.822,7.178-16,16-16h64
		c8.822,0,16,7.178,16,16c0,4.418,3.582,8,8,8s8-3.582,8-8c0-3.105-0.453-6.105-1.282-8.947
		c44.778-6.106,82.817-25.325,110.284-55.813c27.395-30.408,42.481-70.967,42.481-114.208c0-14.443,11.75-26.194,26.193-26.194
		c14.443,0,26.194,11.75,26.194,26.194c0,39.305-7.464,76.964-21.018,106.04c-1.867,4.004-0.134,8.764,3.871,10.631
		c1.304,0.608,2.687,0.828,4.025,0.719c0.201,0.015,0.401,0.031,0.605,0.031h143.613c18.214,0,33.032,14.818,33.032,33.032
		c0,11.798-6.228,22.539-16.359,28.469h-14.975c-4.418,0-8,3.582-8,8s3.582,8,8,8h12.835c3.149,5.155,4.822,10.984,4.822,17.079
		C482.323,308.985,475.927,319.848,465.561,325.727z"/>
	<path d="M422.384,325.727h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S426.802,325.727,422.384,325.727z"/>
	<path d="M436.934,263.953h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S441.352,263.953,436.934,263.953z"/>
	<path d="M407.833,387.5h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S412.252,387.5,407.833,387.5z"/>
	<path d="M80,264c-8.822,0-16,7.178-16,16s7.178,16,16,16s16-7.178,16-16S88.822,264,80,264z"/>
</g>
</svg><span class="font-bold ml-3">{{ item.like }}</span>
            </div>
        </div>
      </div>
    </div>
     <div class="w-full flex" v-else>
        <div class="w-1/2 h-auto flex flex-wrap items-center justify-center">
        <div class="story-card">
          <div class="story-card-title">
            {{ item.topic }}
          </div>
          <div class="story-card-text-box w-2/3">
          {{ item.title }}
          </div>
        </div>
        <div class="story-card-link">
           <!-- <div> Readme  ></div> -->
            <div class="flex">
                <svg class="cursor-pointer" @click="like" fill="#000000" height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xml:space="preserve">
<g>
	<path d="M498.323,297.032c0-7.992-1.901-15.683-5.553-22.635c12.034-9.18,19.23-23.438,19.23-38.914
		c0-27.037-21.996-49.032-49.032-49.032H330.206c11.434-29.24,17.665-64.728,17.665-101.419c0-23.266-18.928-42.194-42.194-42.194
		s-42.193,18.928-42.193,42.194c0,83.161-58.012,145.389-144.355,154.844c-0.592,0.065-1.159,0.197-1.7,0.38
		C111.752,235.129,104.235,232,96,232H32c-17.645,0-32,14.355-32,32v152c0,17.645,14.355,32,32,32h64
		c9.763,0,18.513-4.4,24.388-11.315c20.473,2.987,33.744,9.534,46.568,15.882c16.484,8.158,33.53,16.595,63.496,16.595h191.484
		c27.037,0,49.032-21.996,49.032-49.032c0-7.991-1.901-15.683-5.553-22.635c12.034-9.18,19.23-23.438,19.23-38.914
		c0-7.991-1.901-15.683-5.553-22.635C491.126,326.766,498.323,312.507,498.323,297.032z M465.561,325.727H452c-4.418,0-8,3.582-8,8
		s3.582,8,8,8h11.958c3.061,5.1,4.687,10.847,4.687,16.854c0,12.106-6.56,23.096-17.163,28.919h-14.548c-4.418,0-8,3.582-8,8
		s3.582,8,8,8h13.481c2.973,5.044,4.553,10.71,4.553,16.629c0,18.214-14.818,33.032-33.032,33.032H230.452
		c-26.223,0-40.207-6.921-56.398-14.935c-12.358-6.117-26.235-12.961-46.56-16.594c0.326-1.83,0.506-3.71,0.506-5.632V295
		c0-4.418-3.582-8-8-8s-8,3.582-8,8v121c0,8.822-7.178,16-16,16H32c-8.822,0-16-7.178-16-16V264c0-8.822,7.178-16,16-16h64
		c8.822,0,16,7.178,16,16c0,4.418,3.582,8,8,8s8-3.582,8-8c0-3.105-0.453-6.105-1.282-8.947
		c44.778-6.106,82.817-25.325,110.284-55.813c27.395-30.408,42.481-70.967,42.481-114.208c0-14.443,11.75-26.194,26.193-26.194
		c14.443,0,26.194,11.75,26.194,26.194c0,39.305-7.464,76.964-21.018,106.04c-1.867,4.004-0.134,8.764,3.871,10.631
		c1.304,0.608,2.687,0.828,4.025,0.719c0.201,0.015,0.401,0.031,0.605,0.031h143.613c18.214,0,33.032,14.818,33.032,33.032
		c0,11.798-6.228,22.539-16.359,28.469h-14.975c-4.418,0-8,3.582-8,8s3.582,8,8,8h12.835c3.149,5.155,4.822,10.984,4.822,17.079
		C482.323,308.985,475.927,319.848,465.561,325.727z"/>
	<path d="M422.384,325.727h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S426.802,325.727,422.384,325.727z"/>
	<path d="M436.934,263.953h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S441.352,263.953,436.934,263.953z"/>
	<path d="M407.833,387.5h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S412.252,387.5,407.833,387.5z"/>
	<path d="M80,264c-8.822,0-16,7.178-16,16s7.178,16,16,16s16-7.178,16-16S88.822,264,80,264z"/>
</g>
</svg> <span class="font-bold ml-3">{{ item.like }}</span>
            </div>
        </div>
      </div>
        <div class="w-1/2 flex justify-center">
        <img class="w-2/3" :src="$store.state.baseURl+item.story_Image" alt="" />
      </div>
     </div>
    </div>
    <div class="w-full flex bg-[#3F6050] py-10">
      <div class="w-1/2 flex justify-center">
        <img class="w-5/6" src="../../assets/images/createstory.png" alt="" />
      </div>
      <div class="w-1/2 flex items-center justify-center">
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
                ><span class="text-xl text-[#fff] ml-2.5">{{ new_story.ImageFile?.name }}</span>
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
              <el-button class="submit" @click="Saved_New_Story"
                >Submit</el-button
              >
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
      story_list: [],
      loading: false,
      new_story: {
        Title: "",
        Topic: "",
        Like: 0,
        AccountId: "df393352-8853-4815-1773-08dc3d130d69",
        ImageFile: null,
      },
    };
  },
  methods: {
    handleImageUpload(event) {
      this.new_story.ImageFile = event.target.files[0];
    },
    async Saved_New_Story() {
      this.loading = true;
      console.log(localStorage.getItem("access_token"))
      const formdata = new FormData();
      formdata.append("Title", this.new_story.Title);
      formdata.append("Topic", this.new_story.Topic);
      formdata.append("Like", this.new_story.Like);
      formdata.append("ImageFile", this.new_story.ImageFile);
      formdata.append("AccountId", this.new_story.AccountId);
      await this.$axios
        .$post("/Story/CreateStory", formdata, {
          headers: {
              "Content-Type": "multipart/form-data"
          },
        })
        .then((res) => {
          (this.new_story.Title = ""),
            (this.new_story.Topic = ""),
            (this.new_story.ImageFile = null),
            (this.new_story.Like = 0),
            (this.new_story.AccountId = "");
            this.get_story_list()
          this.$message({
            message: "Congrats, new story added" + res.data,
            type: "success",
          });
        })
        .catch((e) => {
          alert(e.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async get_story_list() {
      this.loading = true;
      await this.$axios
        .$get("/Story/GetAllStories")
        .then((res) => {
          this.story_list = res;
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
    async like(){
      const imageUrl = 'https://203f-195-158-16-45.ngrok-free.app/images/fb17786c7dd54713872edc537870981e_20240308034956133.png';
     this.$axios.$get(imageUrl)
}
  },
  mounted() {
    this.get_story_list();
    let account_info = JSON.parse(localStorage.getItem("account"));
    if (account_info) {
      this.new_story.AccountId = account_info?.id;
    } else {
      this.$notify({
        title: "Ogohlantirish",
        message: "Please! Log in",
        type: "warning",
      });
      this.$router.push("/");
    }
  },
};
</script>
<style scoped>
.createstory {
  background-image: url("../../assets/images/createstory.png");
}
.storybox {
  margin: 50px 0px;
}
.story-card{
  width: 100%;
  padding-left: 170px;
}
.story-card-title {
  font-weight: 800;
  font-size: 32px;
  margin: 20px 0px 30px 0px;
}
.story-card-link{
  width: 100%;
  display: flex;
  padding-left: 170px;
}
.story-card-link div:nth-child(1){
    color: #40A469;
    font-size: 18px;
}
.story-card-link div:nth-child(2){
    color: #414040;
    font-size: 18px;
}

</style>
