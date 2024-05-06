<template>
  <div :class="$style.box">
    <div v-if="withTitle" :class="$style.headerWrapper">
      <div :class="$style.title">
        {{ title }}
      </div>
      <div :class="$style.description">
        {{ text }}
      </div>
    </div>
    <div
      :class="[
        componentClass,
        withSpace ? $style.content : '',
        !withTitle && withSpace ? $style['header-content'] : ''
      ]">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
  import {defineComponent} from 'vue';
  export default defineComponent({
    name: 'LayoutBox'
  });
</script>
<script lang="ts" setup>
  interface Props {
    title?: string;
    text?: string;
    withTitle?: boolean;
    withSpace?: boolean;
    componentClass?: string;
  }
  withDefaults(defineProps<Props>(), {
    title: '',
    text: '',
    componentClass: '',
    withTitle: true,
    withSpace: true
  });
</script>
<style lang="scss" module>
  .box {
    background-color: #f8f9fa;
    border-radius: 10px;
    margin: 30px 0;
    .headerWrapper {
      text-align: center;
      padding: 25px 0;
      margin-bottom: 50px;
      border-bottom: 1px solid #000;
      @include media(sm) {
        padding: 50px 0;
      }
      .title {
        font-size: convertPxToRem(25);
        font-weight: bold;
        color: $primary-color;
        @include media(sm) {
          font-size: convertPxToRem(45);
        }
      }
      .description {
        word-wrap: break-word;
        font-size: convertPxToRem(25);
        color: $black-color;
        padding-top: 10px;
        margin: 0 auto;
        max-width: 500px;
      }
    }
    .content {
      padding: 0 20px 20px;
      @include media(sm) {
        padding: 0 50px 50px;
      }
      &.header-content {
        padding-top: 20px;
        @include media(sm) {
          padding-top: 50px;
        }
      }
    }
  }
</style>
