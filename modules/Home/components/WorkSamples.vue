<template>
  <div :class="$style.samples" id="projects">
    <componentTitle title="Projects" />
    <sliderBox :data="data" />
  </div>
</template>
<script lang="ts" setup>
  import sliderBox from '@ui/components/SliderBox/Main.vue';
  import {useProjectLists} from '../controller/Services/projectList';

  const {data} = useProjectLists();
</script>
<style lang="scss" module>
  .samples {
    padding: 0 20%;
  }
</style>
