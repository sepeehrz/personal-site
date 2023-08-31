<template>
  <div :class="$style.titleWrapper">
    <h1 :class="$style.subTitle">{{ subTitle }}</h1>
    <h1 :class="$style.title">
      {{ title }}
    </h1>
  </div>
</template>
<script lang="ts">
  import {defineComponent} from 'vue';
  export default defineComponent({
    name: 'componentTitle'
  });
</script>

<script lang="ts" setup>
  interface IProps {
    title: string;
    subTitle: string;
  }
  defineProps<IProps>();
</script>

<style lang="scss" module>
  .titleWrapper {
    padding: 50px 0;
    position: relative;
    .subTitle {
      text-align: center;
      -webkit-text-stroke: 1px #dee2e6;
      color: #fff;
      font-size: 10rem;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: $primary-color;
      text-transform: uppercase;
      font-size: 2.5rem;
      font-weight: 900;
      white-space: nowrap;
    }
  }
</style>
