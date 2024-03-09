<template>
  <div class="w-full bg-[#3F6050] flex justify-center" v-loading.fullscreen.lock="loading">
    <el-form
      label-position='top'
      :model="auth_data"
      status-icon
      ref="auth_data"
      label-width="120px"
      class="demo-ruleForm w-1/3 my-5"
    >
    <div class='w-full text-center'><div class='text-2xl text-[#fff]'>Login </div></div>
      <el-form-item
        label="Username"
        prop="username"
        :rules="[
          { required: true, message: 'Username is required' }
        ]"
      >
        <input type="text" class="input" v-model="auth_data.username" />
      </el-form-item>
      <el-form-item
        label="Password"
        prop="password"
        :rules="[
          { required: true, message: 'password is required' }
        ]"
      >
        <input class="input" type="password" v-model="auth_data.password" />
      </el-form-item>
      <el-form-item class='w-full flex justify-center'>
        <el-button type="primary" @click="submitForm('auth_data')">Log in</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>
<script>
export default {
  data() {
    return {
      auth_data: {
        username: "",
        password: "",
      },
      loading:false
    };
  },
  methods:{
    async auth(){
      this.loading=true
       await this.$axios.$post('/Account/Login',this.auth_data,{
        headers:{
          "Content-Type": "application/json"
        }
       })
       .then((res)=>{
        this.$store.dispatch('fetchAccount',{...res.account,account_image:this.$store.state.baseURl+res.account.account_image})
        localStorage.setItem('account',JSON.stringify(res.account))
        localStorage.setItem('access_token',res.token.accessToken)
        this.$notify({
          title: 'Success',
          message: 'This is a success message',
          type: 'success'
        });
       })
       .catch((e)=>{
        this.$notify({
          title: 'Error',
          message:e.response.data,
          type: 'error'
        });
       })
       .finally(()=>{
        this.loading=false
       })
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.auth()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  }
};
</script>
