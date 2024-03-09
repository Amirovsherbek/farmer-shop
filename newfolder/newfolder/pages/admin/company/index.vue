<template>
  <div class="w-full bg-[#3F6050] acount">
    <div class="w-full  pt-10">
      <div class="w-full text-center py-3 text-4xl text-[#fff]">Interested in Becoming a Supplier?</div>
      <div class="w-full text-center text-base text-[#fff] ">Get in touch with us using the form below, and we’ll respond as soon as possible.</div>
    </div>
    <div class="w-full flex justify-center items-center py-8">
      <AcountSettings/>
    </div>
  </div>
</template>
<script>
import AcountSettings from '../../../components/AcountSettings/AcountSettings.vue'
export default {
}
</script>
<style>
.acount{
    height: 932px;
}
.el-tabs__item{
  color: #fff;
}
</style>