<template>
  <LayoutBox
    :with-title="false"
    :with-space="false"
    :component-class="$style.banner"
    id="banner">
    <div :class="$style.text">
      <div :class="$style.name">I Am Sepehr Zarghami</div>
      <div :class="$style.job">Software Developer</div>
      <button :class="$style.contactBtn">Contact Me</button>
    </div>
    <div :class="$style.image">
      <img src="../assets/images/banner_image.png" alt="banner-image" />
    </div>
  </LayoutBox>
</template>
<script lang="ts" setup></script>
<style lang="scss" module>
  .banner {
    color: $black-color;

    @include media(sm) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .image {
      display: none;
      @include media(sm) {
        display: block;
      }
      width: 40%;
      img {
        width: 100%;
        // object-fit: contain;
      }
    }
    .text {
      text-align: center;
      width: 100%;
      padding: 25px;
      @include media(sm) {
        text-align: left;
        width: unset;
      }

      @include media(md) {
        padding: 50px;
      }
      .name {
        color: #808080;
        font-size: convertPxToRem(20);
        @include media(sm) {
          font-size: convertPxToRem(25);
        }
      }
      .job {
        color: #808080;
        font-weight: bold;
        padding: 40px 0;
        font-size: convertPxToRem(30);
        background: -webkit-linear-gradient(
          0deg,
          $primary-color 36%,
          $secondary-color 100%
        );
        background-clip: text;
        -webkit-text-fill-color: transparent;
        @include media(sm) {
          font-size: convertPxToRem(55);
        }
      }
      .contactBtn {
        width: 130px;
        height: 47px;
        border: none;
        border-radius: 26px;
        background: linear-gradient(90deg, $primary-color 0, $secondary-color);
        color: #fff;
        font-size: convertPxToRem(16);
        cursor: pointer;
      }
    }
  }
</style>
