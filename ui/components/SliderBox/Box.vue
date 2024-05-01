<template>
  <div :class="$style.card">
    <div :class="$style.image"></div>
    <div :class="$style.title" v-if="data.title">{{ data.title }}</div>
    <div :class="$style.details">{{ data.details }}</div>
    <router-link :class="$style.button" :to="`/project/${data.slug}`">
      Details
    </router-link>
  </div>
</template>
<script lang="ts" setup>
  interface IData {
    title: string;
    details: string;
    slug: string;
  }
  interface IProps {
    data: IData;
  }
  defineProps<IProps>();

  const emits = defineEmits<{
    (e: 'action'): void;
  }>();
</script>
<style lang="scss" module>
  .card {
    position: relative;
    border-radius: 10px;
    height: 350px;

    .image {
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(11, 5, 5, 0.5), rgba(34, 36, 35, 0.5)),
        url(../../assets/images/project.jpg);
      border-radius: 10px;
      background-size: cover;
      filter: blur(1px);
    }
    .title {
      position: absolute;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      height: 80px;
      font-size: 20px;
      font-weight: 500;
      padding-top: 10px;
      color: $white-color;
    }
    .details {
      position: absolute;
      left: 10px;
      top: 70px;
      font-size: convertPxToRem(16);
      padding-top: 10px;
      line-height: 20px;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 7;
      -webkit-box-orient: vertical;
      color: $white-color;
    }
    .button {
      position: absolute;
      bottom: -2px;
      width: 100%;
      background: linear-gradient(90deg, $primary-color 0, $secondary-color);
      color: $white-color;
      font-size: 16px;
      border: 1px solid $primary-color;
      padding: 12px 0;
      border-radius: 0 0 10px 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }
  }
</style>
