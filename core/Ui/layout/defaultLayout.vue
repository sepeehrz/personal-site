<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script lang="ts" setup>
  import Footer from '../components/Footer.vue';
  import Header from '../components/Header.vue';
</script>
