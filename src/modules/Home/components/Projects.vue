<template>
  <LayoutBox title="Projects" id="projects">
    <sliderBox :data="data" />
  </LayoutBox>
</template>
<script lang="ts" setup>
  import sliderBox from '@app/ui/components/SliderBox/Main.vue';
  import {useProjects} from '../controller/composables/projects';

  const {data} = useProjects();
</script>
<style lang="scss" module></style>
