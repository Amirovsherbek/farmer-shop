<template>
   <div class="w-full">
    <button @click="get_data">cliked</button>
</div>
  </template>
  
  <script>
import About from '../../components/About/About.vue';
import Story from '../../components/Story/Story.vue';
  export default {
   methods:{
    async get_data () {
      const res=await this.$axios.$get('/Account/GetAllAccount')
    }
   },
    components: { Story, About }
}
  </script>