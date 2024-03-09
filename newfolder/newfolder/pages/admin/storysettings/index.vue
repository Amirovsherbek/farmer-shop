<template>
  <div class="w-full flex justify-center story_settings" v-loading.fullscreen.lock="loading">
    <div class="w-8/9">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
    type="index"
    label="ID"
    width="40"
  ></el-table-column>
        <el-table-column prop="topic" label="Topic" width="180">
        </el-table-column>
        <el-table-column prop="title" label="Title" width="520">
        </el-table-column>
        <el-table-column prop="story_Image" label="Image" width="320">
          <template slot-scope="scope">
            <img
              :src="$store.state.baseURl + scope.row.story_Image"
              alt="Image"
              style="max-width: 100%; max-height: 200px"
            />
          </template>
        </el-table-column>
        <el-table-column prop="like" label="Like" width="120"> </el-table-column>
      </el-table>
    </div>
    <button @click="downloadImage">cliked</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      tableData: [],
    };
  },
  methods: {
    async get_product_all_list() {
      this.loading = true;
      await this.$axios
        .$get(`/Account/GetAccount?id=${JSON.parse(localStorage.getItem('account'))?.id}`)
        .then((res) => {
          this.tableData = res.stories;
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
    async downloadImage() {
      const imageUrl = 'https://203f-195-158-16-45.ngrok-free.app/images/c9b521a90ef2467ebf5b30d6cde295fc_20240308021230390.png';

      try {
        const response = await this.$axios.get(imageUrl, { responseType: 'blob' });

        // Handle the downloaded blob data
        const blobData = response.data;

        // Create a download link
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(new Blob([blobData]));
        link.setAttribute('download', 'downloaded_image.png');

        // Trigger the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        console.log('Image downloaded successfully');
      } catch (error) {
        console.error('Error downloading image:', error);
      }
    },
  },
  created() {
    this.get_product_all_list();
  },
};
</script>
<style>
.story_settings {
  padding: 30px 0px;
}
</style>
