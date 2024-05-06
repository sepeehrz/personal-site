<template>
  <div class="container">
    <Header />
    <router-view />
    <Footer />
    <button :class="$style.arrowUp" @click="goUp">
      <svgLoader name="chevron-up" stroke="#fff" />
    </button>
  </div>
</template>

<script lang="ts" setup>
  import Footer from '../components/Footer.vue';
  import Header from '../components/Header.vue';

  function goUp() {
    window.scrollTo(0, 0);
  }
</script>

<style lang="scss" module>
  .arrowUp {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background: linear-gradient(90deg, $primary-color 0, $secondary-color);
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 55px;
    cursor: pointer;
    z-index: 99;
    border: none;
  }
</style>
