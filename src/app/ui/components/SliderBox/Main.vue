<template>
  <swiper-container
    :class="$style.swiper"
    v-if="data"
    :slidesPerView="options.slidesPerView"
    :grabCursor="true"
    :pagination="{
      clickable: true
    }"
    :autoplay="{
      delay: 2500,
      pauseOnMouseEnter: true
    }"
    :breakpoints="options.breakpoints">
    <swiper-slide
      :class="$style.swiperItem"
      v-for="(item, index) in data"
      :key="index">
      <Box :data="item" />
    </swiper-slide>
  </swiper-container>
</template>
<script lang="ts" setup>
  import {watch, ref} from 'vue';
  import Box from './Box.vue';
  import {register} from 'swiper/element/bundle';

  register();

  interface IData {
    title: string;
    details: string;
    slug: string;
  }
  interface IProps {
    data: IData[];
    options?: any;
  }
  const props = withDefaults(defineProps<IProps>(), {
    options: {
      slidesPerView: '3',
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
    }
  });
  const options = ref(props.options);
  watch(
    () => props.options,
    value => {
      options.value = value;
    },
    {deep: true, immediate: true}
  );
</script>
<style lang="scss" module>
  .swiperItem {
    padding-bottom: 70px !important;
  }
</style>
