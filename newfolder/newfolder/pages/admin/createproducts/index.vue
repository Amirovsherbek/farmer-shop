<template>
  <div class="w-full bg-[#3F6050]">
    <div class="w-full flex justify-center">
      <div class="w-4/6">
        <el-form
          :model="create_prduct_form"
          ref="create_prduct_form"
          label-width="100px"
          class="demo-ruleForm"
          label-position="top"
        >
          <div class="w-full flex my-3">
            <div class="w-1/2 pr-2.5">
              <el-form-item
                prop="Amount"
                :rules="[
                  { required: true, message: 'Amount is required' },
                  { type: 'number', message: 'Amount must be a number' },
                ]"
              >
                <input
                  type="number"
                  v-model.number="create_prduct_form.Amount"
                  placeholder="Amount"
                  class="input"
                />
              </el-form-item>
            </div>
            <div class="w-1/2 pl-2.5">
              <el-form-item
                prop="Name"
                :rules="[
                  { required: true, message: 'Product name is required' },
                ]"
              >
                <input
                  type="text"
                  v-model="create_prduct_form.Name"
                  class="input"
                  placeholder="Banan"
                />
              </el-form-item>
            </div>
          </div>
          <div class="w-full flex my-3">
            <div class="w-1/2 pr-2.5">
              <el-form-item
                prop="Sales_count"
                :rules="[
                  { required: true, message: 'Discount price is required' }
                ]"
              >
                <input
                  type="number"
                  placeholder="Sales price"
                  v-model.number="create_prduct_form.Sales_count"
                  class="input"
                />
              </el-form-item>
            </div>
            <div class="w-1/2 pl-2.5">
              <el-form-item
                prop="Count_massa"
                :rules="[
                  { required: true, message: 'Product massa is required' },
                ]"
              >
                <input
                  type="text"
                  placeholder="product count massa"
                  v-model="create_prduct_form.Count_massa"
                  class="input"
                />
              </el-form-item>
            </div>
          </div>
          <div class="w-full flex my-3">
            <div class="w-1/2 pr-2.5">
              <el-form-item
                prop="Price"
                :rules="[
                  { required: true, message: 'Price is required' },
                  { type: 'number', message: 'Price must be a number' },
                ]"
              >
                <input
                  type="number"
                  placeholder="Price"
                  v-model.number="create_prduct_form.Price"
                  class="input"
                />
              </el-form-item>
            </div>
            <div class="w-1/2 pl-2.5">
              <el-form-item
                prop="Code"
                :rules="[
                  { required: true, message: 'Sales count is required' },
                ]"
              >
                <input
                  type="text"
                  placeholder="Product code"
                  v-model="create_prduct_form.Code"
                  class="input"
                />
              </el-form-item>
            </div>
          </div>
          <div class="w-full flex my-3">
            <div class="w-1/2 pr-2.5">
              <label for="accept_title" class="">
                <el-form-item class="flex"
                  prop="Product_accept"
                  :rules="[{ required: true, message: 'Price is required' }]"
                  ><div class=" flex"><div class="text-xl text-[#fff] mt-4">Is there a right to return the product? :</div> <el-switch class="mt-5 ml-3"
                    v-model="create_prduct_form.Product_accept"
                  ></el-switch> </div></el-form-item
              ></label>
            </div>
            <div class="w-1/2 pl-2.5">
              <el-form-item
                prop="Region"
                :rules="[
                  { required: true, message: 'Region selected is required' },
                ]"
              >
                <select
                  name="region_"
                  id="region"
                  class="input mt-3"
                  v-model="create_prduct_form.Region"
                  placeholder="Region"
                >
                  <option
                    v-for="(item, index) in region_list"
                    :key="index"
                    class="py-3 px-2"
                    :value="index + 1"
                  >
                    {{ item }}
                  </option>
                </select>
              </el-form-item>
            </div>
          </div>
          <div class="w-full">
            <textarea
              name="accept_title"
              class="input"
              id="accept_title"
              cols="30"
              rows="5"
              @input="ChangeAccept_Product"
            ></textarea>
          </div>
          <el-form-item class="form_item">
            <div class="mt-5">
              <label
                for="userphoto"
                class="rounded-md px-4 py-2 bg-[#66b1ff] cursor-pointer"
                >Click to upload</label
              >
              <input
                type="file"
                @change="handleImageUpload"
                class="hidden"
                accept=".jpeg, .jpg, .png"
                id="userphoto"
                multiple="multiple"
              />
            </div>
          </el-form-item>
          <el-form-item class="w-full flex justify-center">
            <el-button class="submit" @click="create_product"
              >Submit</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
    {{ create_prduct_form }}

  </div>
</template>
<script>
import Region_list from '../../../static/mockdata/region.json'
export default {
  data() {
    return {
      create_prduct_form: {
        Name: "",
        Amount: null,
        Availability_count: 0,
        Code: "",
        Region: 1,
        Discount_price: null,
        Price: null,
        Sales_count: null,
        Count_massa: "",
        Product_accept: false,
        Accept_Title_accept: "",
        Accept_Title_no_accept: "",
        AccountId:'',
        image_files: [],
      },
      region_list: [],
    };
  },
  methods: {
    handleImageUpload(event) {
      this.create_prduct_form.image_files = event.target.files;
    },
    async create_product() {
       const formData = new FormData();
      // Append each field to the FormData
      formData.append("Amount", this.create_prduct_form.Amount);
      formData.append("Name", this.create_prduct_form.Name);
      formData.append(
        "Availability_count",
        this.create_prduct_form.Availability_count
      );
      formData.append("Code", this.create_prduct_form.Code);
      formData.append("Region", this.create_prduct_form.Region);
      formData.append("Discount_price", this.create_prduct_form.Sales_count);
      formData.append("Price", this.create_prduct_form.Price);
      formData.append("Sales_count", this.create_prduct_form.Sales_count);
      formData.append("Count_massa", this.create_prduct_form.Count_massa);
      formData.append("Product_accept", this.create_prduct_form.Product_accept);
      formData.append(
        "Accept.Title_accept",
        this.create_prduct_form.Product_accept
          ? this.create_prduct_form.Accept_Title_accept
          : "no"
      );
      formData.append(
        "Accept.Title_no_accept",
        this.create_prduct_form.Product_accept
          ? "no"
          : this.create_prduct_form.Accept_Title_no_accept
      );
      formData.append("AccountId", JSON.parse(localStorage.getItem('account'))?.id );
      for (const file of this.create_prduct_form.image_files) {
        formData.append("image_files", file);
      }
      const res_create_product = await this.$axios.$post(
        "/Product/CreateProduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    submitForm(formName) {
     
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.create_product();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    ChangeAccept_Product(event) {
      if (this.create_prduct_form.Product_accept) {
        this.create_prduct_form.Accept_Title_accept = event.target.value;
      } else {
        this.create_prduct_form.Accept_Title_no_accept = event.target.value;
      }
    },
  },
  mounted() {
    this.region_list = Object.keys(Region_list);
  },
};
</script>
