<template>
  <div :class="$style.titleWrapper">
    <h1 :class="$style.title">{{ title }}</h1>
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
  }
  defineProps<IProps>();
</script>

<style lang="scss" module>
  .titleWrapper {
    padding: 50px 0;
    .title {
      text-align: center;
      -webkit-text-stroke: 1px #dee2e6;
      color: $secondary-color;
      opacity: 0.2;
      font-size: 3.125rem;
      text-transform: uppercase;
      white-space: nowrap;
      @include media(md) {
        font-size: 10rem;
      }
    }
  }
</style>
