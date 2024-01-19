<template>
  <div :class="$style.samples">
    <!-- <componentTitle title="Projects" /> -->
    <sliderBox :data="data" />
  </div>
</template>
<script lang="ts" setup>
  import sliderBox from '@core/Ui/components/SliderBox/Main.vue';
  import {useProjectLists} from '@modules/Home/controller/Services/projectList';
  const {data} = useProjectLists();
</script>
<style lang="scss" module>
  .samples {
    padding: 0 10px;
  }
</style>
