<template>
  <div class="w-full">
    <Story/>
    <About/>
    <AcountImageList/>
  </div>
</template>

<script>
import Story from '../components/Story/Story.vue';
import About from '../components/About/About.vue';
import AcountImageList from '../components/AcountImageList/AcountImageList.vue';
export default {
  name: 'IndexPage',
  components:{ Story, About, AcountImageList }
}
</script>
