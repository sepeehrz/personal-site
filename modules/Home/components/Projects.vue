<template>
  <div class="container" id="projects">
    <componentTitle title="Projects" />
    <sliderBox :data="data" />
  </div>
</template>
<script lang="ts" setup>
  import sliderBox from '@ui/components/SliderBox/Main.vue';
  import {useProjects} from '../controller/composables/projects';

  const {data} = useProjects();
</script>
<style lang="scss" module></style>
