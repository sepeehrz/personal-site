<template>
  <div :class="$style.slider">
    <componentTitle title="Projects" />

    <swiper-container
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
        <Box :data="item" />
      </swiper-slide>
    </swiper-container>
  </div>
</template>
<script lang="ts" setup>
  import Box from './Box.vue';
  import {register} from 'swiper/element/bundle';
  import {ref} from 'vue';
  register();
  const data = ref([
    {
      slug: 'cashineh',
      image: '',
      title: 'cashineh',
      details:
        'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    },
    {
      slug: 'cashineh',
      image: '',
      title: 'cashineh',
      details:
        'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    },
    {
      slug: 'cashineh',
      image: '',
      title: 'cashineh',
      details:
        'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    },
    {
      slug: 'cashineh',
      image: '',
      title: 'cashineh',
      details:
        'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    },
    {
      slug: 'cashineh',
      image: '',
      title: 'cashineh',
      details:
        'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    },
    {
      slug: 'cashineh',
      image: '',
      title: 'cashineh',
      details:
        'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    },
    {
      slug: 'cashineh',
      image: '',
      title: 'cashineh',
      details:
        'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    },
    {
      slug: 'cashineh',
      image: '',
      title: 'cashineh',
      details:
        'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    },
    {
      slug: 'cashineh',
      image: '',
      title: 'cashineh',
      details:
        'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    },
    {
      slug: 'cashineh',
      image: '',
      title: 'cashineh',
      details:
        'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    }
  ]);
</script>
<style lang="scss" module>
  .slider {
    padding: 0 20%;
  }
  .swiperItem {
    padding-bottom: 70px !important;
  }
</style>
