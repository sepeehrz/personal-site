<template>
  <Banner />
  <div :class="$style.container">
    <AboutMe />
    <EducationExperience />
    <Skills />
  </div>
</template>
<script lang="ts" setup>
  import Banner from '../components/Banner.vue';
  import AboutMe from '../components/AboutMe.vue';
  import EducationExperience from '../components/EducationExperience.vue';
  import Skills from '../components/Skills.vue';
</script>
<style lang="scss" module>
  .container {
    max-width: 1024px;
    margin: 0 auto;
  }
</style>
