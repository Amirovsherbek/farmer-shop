<template>
  <div class="w-4/6">
    <el-form ref="form" label-position="top"  :model="form" label-width="120px">
  <div class="w-full flex">
    <div class="w-1/2 pr-2">  <el-form-item class="form_item">
    <input type="text" placeholder="First Name" v-model="form.FirstName" class=" input">
  </el-form-item>
   </div>
   <div class="w-1/2 pl-2.5">  <el-form-item class="form_item" >
    <input type="text" placeholder="Last Name" v-model="form.LastName" class=" input">
  </el-form-item>
   </div>
  </div>
  <div class="w-full my-3 flex">
    <div class="w-1/2 pr-2">  <el-form-item class="form_item"  >
    <input type="text" placeholder="User Name" v-model="form.Username" class=" input">
  </el-form-item>
   </div>
   <div class="w-1/2 pl-2.5">  <el-form-item class="form_item">
    <input type="text" placeholder="Company Name" v-model="form.Company_name" class=" input">
  </el-form-item>
   </div>
  </div>
  <div class="w-full my-3 flex">
    <div class="w-1/2 pr-2">  <el-form-item class="form_item mt-4">
     <select name="region_" id="region" class="input" v-model="form.Region" placeholder="Region">
      <option v-for="item in region_list" :key="item" class="py-3 px-2" :value="item">{{ item }}</option>
     </select>
     <input class="input" type="password" v-model="form.Password" placeholder="password" />
  </el-form-item>
   </div>
   <div class="w-1/2 flex justify-between pl-2.5">  <el-form-item class="form_item">
    <div class="mt-5 flex">
      <div class="user-avatar">
        <label for="userphoto" class="user_avatar block  cursor-pointer p-5"><i class="el-icon-user-solid text-4xl"></i></label>
      </div>
      <div class="w-64 h-8 flex items-center pl-3 ml-2 rounded-md mt-3">{{ form.file?.name }}</div>
    <input type="file" @change="fileChange" class="hidden" accept=".jpeg, .jpg, .png" id="userphoto"/>
    </div>
  </el-form-item>
  <el-form-item class="form_item mt-4">
     <span class="switch_label mr-3">Instant delivery</span> <el-switch v-model="form.Delivery"></el-switch>
  </el-form-item>
   </div>
  </div>
  <el-form-item class="w-full flex justify-center">
    <el-button  class="submit" @click="append_form_save">Submit</el-button>
  </el-form-item>
</el-form>
  </div>
</template>
<script>
import Region_list from '../../static/mockdata/region.json'
export default {
    data() {
      return {
        form: {
          FirstName: '',
          LastName:'',
          Username:'',
          Password:'',
          Delivery:true,
          Region:'',
          Company_name:'',
          file:null
        },
        region_list:[]
      }
    },
    methods: {
      fileChange(event){
         this.form.file=event.target.files[0]
         console.log(event.target.files[0])
      },
      async append_form_save () {
        const formData = new FormData();

    // Append form fields to the FormData object
    formData.append('FirstName', this.form.FirstName);
    formData.append('LastName', this.form.LastName);
    formData.append('Username', this.form.Username);
    formData.append('Password', this.form.Password);
    formData.append('Delivery', this.form.Delivery);
    formData.append('Region', this.form.Region);
    formData.append('Company_name', this.form.Company_name);
    formData.append('file', this.form.file);
        await this.$axios.$post('/Account/RegisterAccount',formData,{
          headers:{
            'Content-Type': 'multipart/form-data',
          }
        })
        .catch((e)=>{
          console.log(e)
        })
      },
      onSubmit(formName) {
       const key_list=Object.keys(this.form)
       const validate= key_list.filter(keyName=>{
        if(this.form[keyName]===' '){
          return item
        }
       })
       if(validate.length>0){
          append_form_save()
       }
       else{
        this.$notify({
          title: 'Warning',
          type:'warning',
          message:'The field must not be empty'
        });
       }
      }
    },
    mounted () {
      this.region_list=Object.keys(Region_list)
    }
}
</script>
<style >
.form_item, .el-form-item__label, .switch_label{
  font-size: 22px;
   color: #fff;
}
.input{
  width:100%;
  color: #fff;
  font-size: 22px;
  padding: 10px 5px 0px 5px;
  border-bottom: 2px solid #fff;
  background-color: #3F6050;
}
.input ::placeholder{
  color: #fff;
  opacity: 1;
}
.input:focus{
  outline: none;
  border-bottom:2px solid #fff;
}
.input:active{
  outline: none;
  border-bottom:2px solid #fff;
}
.submit{
  width: 273px;
  height: 65px;
  border-radius: 50px;
  color:"#3F6050";
  font-size: 24px;
  background-color:#FFFFFF;
}
option{
  padding: 15px 10px;
}
.user_avatar{
  padding: 10px 15px;
  border-radius: 50%;
  
  border: 1px solid #fff;
}
</style>