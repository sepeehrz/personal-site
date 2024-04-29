<template>
  <div :class="$style.samples">
    <sliderBox :data="data" :options="options" />
  </div>
</template>
<script lang="ts" setup>
  import {ref} from 'vue';
  import sliderBox from '@ui/components/SliderBox/Main.vue';
  interface IData {
    title: string;
    details: string;
    slug: string;
  }
  interface IProps {
    data: IData[];
  }
  defineProps<IProps>();

  const options = ref({
    slidesPerView: '4',
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
</script>
<style lang="scss" module>
  .samples {
    padding: 0 10px;
  }
</style>
