<template>
  <swiper-container
    v-if="data"
    slidesPerView="3"
    :grabCursor="true"
    :pagination="{
      clickable: true
    }"
    :autoplay="{
      delay: 2500,
      pauseOnMouseEnter: true
    }"
    :breakpoints="{
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }">
    <swiper-slide
      :class="$style.swiperItem"
      v-for="(item, index) in data"
      :key="index">
      <Box :data="item" @action="emits('action')" />
    </swiper-slide>
  </swiper-container>
</template>
<script lang="ts" setup>
  import Box from './Box.vue';
  import {register} from 'swiper/element/bundle';

  register();

  interface IData {
    title: string;
    details: string;
    slug: string;
    image: string;
  }
  interface IProps {
    data: IData[];
  }
  defineProps<IProps>();

  const emits = defineEmits<{
    (e: 'action'): void;
  }>();
</script>
<style lang="scss" module>
  .swiperItem {
    padding-bottom: 70px !important;
  }
</style>
