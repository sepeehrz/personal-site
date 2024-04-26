<template>
  <LayoutBox
    :with-title="false"
    :with-space="false"
    :component-class="$style.projects">
    <div :class="$style.slides">
      <Slider :images="images" />
    </div>
    <div :class="$style.description">
      <div :class="$style.tags">
        <h2>Cashineh</h2>
        <span>website</span>
      </div>
      <div :class="$style.overview">
        <h3>Overview</h3>
        <p>
          Professional software developer with 5+ years of experience in web
          applications and game development. Delivers a number of innovative and
          cutting-edge business solutions to a diverse group of clients within
          the company's global reach. Focuses on project management and
          production design skills to ensure that projects are completed on
          time.
        </p>
      </div>
      <div :class="$style.stack">
        <h3>Stack</h3>
        <div :class="$style.logo">
          <div :class="$style.item" v-for="(item, index) in 12" :key="index">
            <img src="../assets/svg/webpack.svg" />
            webpack
          </div>
        </div>
      </div>
      <div :class="$style.button">
        <a>Preview website</a>
      </div>
    </div>
  </LayoutBox>
  <LayoutBox :with-title="false">
    <OtherProjects />
  </LayoutBox>
</template>
<script lang="ts" setup>
  import OtherProjects from './OtherProjects.vue';
  import Slider from './Slider.vue';
  const images = [
    '../assets/images/cashineh-home-page.jpg',
    '../assets/images/cashineh-01.jpg',
    '../assets/images/cashineh-02.jpg',
    '../assets/images/cashineh-03.jpg'
  ];
</script>
<style lang="scss" module>
  .projects {
    display: flex;
    flex-direction: column;
    @include media(md) {
      flex-direction: row;
      justify-content: space-between;
    }
    .slides {
      order: 2;
      text-align: center;
      @include media(md) {
        width: 40%;
        flex: 0 0 40%;
        order: 1;
      }
    }
    .description {
      order: 1;
      padding: 30px 5px;
      @include media(sm) {
        padding: 30px 20px;
      }
      @include media(md) {
        width: 60%;
        flex: 0 0 60%;
        order: 2;
      }

      @include media(lg) {
        padding: 30px 40px;
      }
      @include media(xl) {
        padding: 30px 60px;
      }
      .tags {
        display: flex;
        h2 {
          color: $secondary-color;
          font-weight: 200;
          font-size: 30px;
          margin-right: 5px;
        }
        span {
          background: linear-gradient(
            90deg,
            $primary-color 0,
            $secondary-color
          );
          color: #fff;
          height: 40px;
          text-align: center;
          width: 80px;
          line-height: 40px;
          margin-left: 3px;
          border-radius: 16px 16px 16px 0;
          font-size: 16px;
        }
      }
      .overview {
        margin: 10px 0;
        padding: 20px;
        background: $white-color;
        border-radius: 26px;
        box-shadow: 0 5px 26px #d7dbef;
        h3 {
          font-size: 15px;
          color: #000;
          margin-left: 10px;
          margin-bottom: 5px;
          position: relative;
          &::after {
            content: '';
            display: block;
            height: 100%;
            width: 3px;
            position: absolute;
            background: $secondary-color;
            top: 0;
            left: -10px;
          }
        }
        p {
          line-height: 25px;
          font-size: 16px;
          color: $primary-text-color;
        }
      }
      .stack {
        @extend .overview;
        .logo {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 20px;
          .item {
            margin-right: 10px;
            margin-top: 20px;
            color: $primary-text-color;
          }
        }
      }
      .button {
        background: linear-gradient(90deg, $primary-color 0, $secondary-color);
        color: #fff;
        width: 200px;
        height: 50px;
        line-height: 50px;
        border-radius: 26px;
        margin: 30px auto 0;
        a {
          display: block;
          text-align: center;
          cursor: pointer;
          font-size: 20px;
        }
      }
    }
  }
</style>
