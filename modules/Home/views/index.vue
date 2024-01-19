<template>
  <Banner />
  <EducationExperience />
  <WorkSamples />
  <Skills />
  <ContactMe />
</template>
<script lang="ts" setup>
  import Banner from '../components/Banner.vue';
  import AboutMe from '../components/AboutMe.vue';
  import EducationExperience from '../components/EducationExperience.vue';
  import Skills from '../components/Skills.vue';
  import ContactMe from '../components/ContactMe.vue';
  import WorkSamples from '../components/WorkSamples.vue';
</script>
<style lang="scss" module>
  .container {
    // overflow-y: auto;
    // scroll-behavior: smooth;
    // max-width: 1024px;
    // margin: 0 20%;
  }
</style>
