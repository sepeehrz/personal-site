<template>
  <swiper-container
    :class="$style.slider"
    slidesPerView="1"
    :pagination="true"
    :grabCursor="true"
    :autoplay="{
      delay: 1500,
      pauseOnMouseEnter: true
    }">
    <swiper-slide
      :class="$style.slide"
      v-for="(item, index) in images"
      :key="index">
      <img :src="url(item)" alt="" />
    </swiper-slide>
  </swiper-container>
</template>
<script lang="ts" setup>
  import {register} from 'swiper/element/bundle';
  register();

  interface IProps {
    images: string[];
  }
  defineProps<IProps>();
  function url(img: string) {
    return new URL(`${img}`, import.meta.url).href;
  }
</script>
<style lang="scss" module>
  .slider {
    padding: 60px 30px;
    height: 80vh;
    .slide {
      padding-bottom: 400px !important;
    }
  }
  .swiper-pagination {
    border: 1px solid red !important;
  }
</style>
