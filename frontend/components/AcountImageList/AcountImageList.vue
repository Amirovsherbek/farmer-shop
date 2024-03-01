<template>
    <div class="animation-container h-64">
      <div class="animation-item h-64 flex">
        <div class="w-48 h-40 bg-[green] mx-3 rounded-md">as</div>
        <div class="w-48 h-40 mt-16 bg-[green] mx-3 rounded-md">asd</div>
        <div class="w-48 h-40 bg-[green] mx-3 rounded-md">asd</div>
        <div class="w-48 h-40 mt-16 bg-[green] mx-3 rounded-md">ad</div>
      </div>
      <div class="animation-item2 h-64 flex">
        <div class="w-48 h-40 bg-[green] mx-3 rounded-md">as</div>
        <div class="w-48 h-40 mt-16 bg-[green] mx-3 rounded-md">asd</div>
        <div class="w-48 h-40 bg-[green] mx-3 rounded-md">asd</div>
        <div class="w-48 h-40 mt-16 bg-[green] mx-3 rounded-md">ad</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:'insta-acount',
    mounted() {
      this.animate();
    },
    methods: {
      animate() {
       
      },
    },
  };
  </script>
  
  <style scoped>
  .animation-container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  
  .animation-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    display: flex;
    background-color: #f00;
    animation: slide-left 10s linear infinite;
  }
  .animation-item2 {
    position: absolute;
    top: 0;
    left: 20%;
    width: 40%;
    height: 100%;
    display: flex;
    background-color: yellow;
    animation: slide-left2 10s linear infinite;
  }
  @keyframes slide-left {
    0% {
      left:90%;
    }
    50%{
        left: -25%;
    }
    100%{
        left: -90%;
    }
  }
  @keyframes slide-left2 {
    0% {
      left:200%;
    }
    50%{
        left: 90%;
    }
    100%{
        left: -25%;
    }
  }
  </style>
  