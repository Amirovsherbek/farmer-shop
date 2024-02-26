<template>
   <div class="w-full">
    <Story/>
    <button @click="fetchSomething">clicked</button>
</div>
  </template>
  
  <script>
import Story from '../../components/Story/Story.vue';

  export default {
    methods: {
        async fetchSomething() {
            const ip = await this.$axios.$get('/Account/GetAllAccount');
            this.ip = ip;
        }
    },
    components: { Story }
}
  </script>