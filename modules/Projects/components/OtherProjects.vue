<template>
  <div :class="$style.samples">
    <sliderBox :data="data" />
  </div>
</template>
<script lang="ts" setup>
  import sliderBox from '@ui/components/SliderBox/Main.vue';
  import {useProjectLists} from '@modules/Home/controller/Services/projectList';
  const {data} = useProjectLists();
</script>
<style lang="scss" module>
  .samples {
    padding: 0 10px;
  }
</style>
