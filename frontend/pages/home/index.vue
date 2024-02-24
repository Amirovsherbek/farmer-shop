<template>
   <div class="w-full">
</div>
  </template>
  
  <script>
  export default {
    methods: {
        async fetchSomething() {
            const ip = await this.$axios.$get('/Account/GetAllAccount');
            this.ip = ip;
        }
    },
}
  </script>